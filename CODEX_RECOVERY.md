# QuoteCraft Translator — Recovery Notes

- Project: **QuoteCraft Studio / existing Translator** (not Language Lounge)
- GitHub remote: `https://github.com/QuoteCraftStudio/Translator`
- Repository source: `Translator.html`
- Local filesystem checkout: none; work performed on connected GitHub.
- Date: 2026-10-25
- Current preview: **v1.1.3-preview**
- Development branch: `feature/african-languages-2026-10-24`
- Last verified HTML/version commit: `93acd61027ead2800774320276c1b347e1900d96`
- Development HTML blob SHA: `9efd5bd90e90035a33302fdd1be930c9020e0060`
- Stable original `main` HTML blob SHA: `cf466825337cff3bb9977a299a12f394f1e49b9d` (recovery baseline).
- Backup: stable original `main` branch; no production files were changed.
- Files changed on development branch: `Translator.html`, `tests/translator-startup.test.cjs`, `CHANGELOG.md`, `PROGRESS.md`, `CODEX_RECOVERY.md`.
- No untracked local working files were created.

## Verified changes
- Existing two voice buttons remain; no typing UI or typed JS.
- 18 original language options preserved; 11 African locale candidates considered for dynamic presentation.
- African options hidden unless a device exact-locale synthesized voice exists; recognition errors also hide failed locales during the current session.
- Existing translation, speech and donation architecture retained; no new secrets or third-party dependencies.
- Fixed initial loading crash caused by reading two empty `<select>` elements; default and stored languages initialize after menus are constructed.
- Kept stable `main` as the unaffected recovery baseline; all new commits on feature branch.

## Validation
- Compiled inline JavaScript with JS function constructor.
- 10/10 simulated UI tests passed for language filters and voice handlers. Simulated tests do **not** prove that the real browser can recognize speech or translate accurately.
- Added 6 startup/voice-filter/selection regression tests in `tests/translator-startup.test.cjs` (test-file commit `687ce8a3426033f7254187a8c67daf4c5e97a143`). Six of six passed with a simulated Node/DOM runner; also verified inline JavaScript compiles.
- Real `node --test tests/translator-startup.test.cjs`, physical device/audio/MyMemory and website-deployment checks outstanding.

## Safe recovery
1. `git clone https://github.com/QuoteCraftStudio/Translator.git`
2. `cd Translator`
3. `git switch feature/african-languages-2026-10-24`
4. Open `Translator.html` using an HTTPS host for meaningful microphone testing.
5. `node --test tests/translator-startup.test.cjs` (requires Node.js)
6. `git diff main...feature/african-languages-2026-10-24 -- Translator.html`
7. `git switch main` returns to the unchanged original release.

## Critical boundaries
- User explicitly forbids changes to **QuoteCraft Language Lounge**; do not modify it.
- Do not publish, merge, or update quotecraftstudio.ca without separate owner authorization.
- The GitHub HTML source has not yet been proven to match the exact currently published WHC website asset.

## Single next action
Run the included Node regression test from the development branch, then test the preview in a real mobile browser with installed African-language voice support and a live MyMemory translation result before requesting approval to publish the existing website Translator.
