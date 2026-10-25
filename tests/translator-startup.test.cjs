'use strict';
// Run from the repository root: node --test tests/translator-startup.test.cjs
// Pure built-in Node.js tests: no packages, microphone, browser, or network required.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'Translator.html'), 'utf8');
const match = html.match(/<script>\s*([\s\S]*?)\s*<\/script>/i);
assert.ok(match, 'Translator should contain its application script');
const script = match[1];

function boot({saved = null, voices = []} = {}) {
  const nodes = new Map();
  class Element {
    constructor(id, type = 'element') {
      this.id = id;
      this.type = type;
      this.options = [];
      this._value = '';
      this.textContent = '';
      this.disabled = false;
      this.listeners = new Map();
      this.classList = {toggle() {}, add() {}, remove() {}};
    }
    get value() { return this._value; }
    set value(value) {
      if (this.type === 'select') {
        // Browser SELECTs do not retain values that are not in their options.
        this._value = this.options.find(o => o.value === value)?.value ?? '';
      } else this._value = String(value);
    }
    replaceChildren(...groups) {
      this.options = groups.flatMap(group => group.children);
      this._value = this.options[0]?.value ?? '';
    }
    append(group) { this.options.push(...group.children); }
    addEventListener(event, listener) { this.listeners.set(event, listener); }
    querySelector() { return {textContent: ''}; }
  }
  for (const id of [
    'lang0', 'lang1', 'talk0', 'talk1', 'swap', 'state', 'status',
    'message', 'translation0', 'translation1', 'dir0', 'dir1'
  ]) nodes.set(id, new Element(id, id.startsWith('lang') ? 'select' : 'element'));

  const storage = new Map();
  if (saved !== null) storage.set('qc-translator-languages', saved);
  const localStorage = {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, String(value))
  };
  const document = {
    hidden: false,
    getElementById: id => nodes.get(id),
    createElement: () => ({
      children: [],
      appendChild(item) { this.children.push(item); }
    }),
    addEventListener() {}
  };
  let availableVoices = voices;
  const speechSynthesis = {
    getVoices: () => availableVoices.map(lang => ({lang, name: lang})),
    cancel() {},
    speak() {}
  };
  const window = {
    SpeechRecognition: function FakeRecognition() {},
    speechSynthesis,
    addEventListener() {}
  };
  const context = {
    document, window, speechSynthesis, localStorage,
    Option: function Option(name, value) { this.text = name; this.value = value; },
    setTimeout: () => 1,
    clearTimeout() {}
  };
  vm.runInNewContext(script, context, {filename: 'Translator.html'});
  return {
    nodes, storage,
    setVoices(langs) {
      availableVoices = langs;
      if (typeof speechSynthesis.onvoiceschanged === 'function')
        speechSynthesis.onvoiceschanged();
    }
  };
}

test('first launch populates both dropdowns instead of crashing', () => {
  const {nodes} = boot();
  assert.equal(nodes.get('lang0').value, 'en');
  assert.equal(nodes.get('lang1').value, 'fr');
  assert.equal(nodes.get('lang0').options.length, 18);
  assert.match(nodes.get('state').textContent, /Ready/);
});

test('restores saved choices after menu options exist', () => {
  const {nodes} = boot({saved: '["es","fr"]'});
  assert.deepEqual([nodes.get('lang0').value, nodes.get('lang1').value], ['es', 'fr']);
});

test('invalid saved choices safely fall back to defaults', () => {
  const {nodes} = boot({saved: '["bad-code","bad-code"]'});
  assert.deepEqual([nodes.get('lang0').value, nodes.get('lang1').value], ['en', 'fr']);
});

test('African languages require exact installed output voice', () => {
  const {nodes} = boot({voices: ['sw-KE', 'zu-ZA', 'de-DE']});
  const values = nodes.get('lang0').options.map(o => o.value);
  assert.ok(values.includes('sw-KE'));
  assert.ok(values.includes('zu'));
  assert.ok(!values.includes('xh'));
  assert.ok(!values.includes('sw-TZ'));
  assert.equal(values.length, 20);
});

test('late voice enumeration updates both language menus', () => {
  const session = boot();
  session.setVoices(['sw-TZ']);
  for (const id of ['lang0', 'lang1'])
    assert.ok(session.nodes.get(id).options.some(o => o.value === 'sw-TZ'));
});

test('retains both talk-button listeners without typed entry UI', () => {
  const {nodes} = boot();
  for (const id of ['talk0', 'talk1']) {
    assert.ok(nodes.get(id).listeners.has('pointerdown'));
    assert.ok(nodes.get(id).listeners.has('keydown'));
    assert.ok(nodes.get(id).listeners.has('keyup'));
  }
  assert.doesNotMatch(html, /<(?:input|textarea)\b/i);
});
