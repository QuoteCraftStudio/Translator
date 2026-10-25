# QuoteCraft Translator — Changelog

## v1.1.0-preview — 2026-10-24
- Added 31 African language and regional-voice choices, retaining all 18 original language choices.
- Languages include Zulu, Xhosa, Swahili (Kenya and Tanzania), Afrikaans, Amharic, Yoruba, Igbo, Hausa, Somali, Shona, Sesotho, Setswana, Kinyarwanda, Kirundi, Wolof and more.
- Regional voice choices (for example Swahili Kenya/Tanzania and Arabic Egypt/Morocco/Sudan) map to the same written translation language; this does **not** provide authentic region-specific dialect translation.
- Added an optional typed-text translation input to both sides so languages can still be used when the browser has no matching speech-recognition service.
- Left the existing two hold-to-talk buttons, capture/release behavior, speech playback, source/target swap, donations and local language-choice persistence intact.
- Added accessible labels and clear messages when browser speech support is missing.
- Updated the privacy disclosure to explain typed-text submission to MyMemory.
- All work is on the `feature/african-languages-2026-10-24` development branch; the stable `main` branch and all Language Lounge files are unchanged.

### Validation
- Inline JavaScript syntax compilation passed.
- Language IDs and BCP 47 speech locales passed uniqueness/format checks.
- Six DOM-stub smoke tests passed: grouped language menus, typed translation request, output display, speech playback call, same-written-language regional variants, retained voice button event handlers, and text entry available when voice recognition is unavailable.
- Live MyMemory API response quality, actual microphone permissions, and speech voices **have not** been tested on a phone or browser.

### Known limitations
- MyMemory's available language pairs and translation quality are not guaranteed, especially for lower-resource languages.
- Browser support for speech recognition and synthesized voices varies by device and language. Typed text is the fallback.
- Text translation is not a true dialect-specific interpreter. Regional variants change the requested browser speech locale but reuse standard written translation codes.
- The existing hold-to-talk behavior remains; this update does not add voice-activated conversation.
- Nothing is deployed or published.
