# QuoteCraft Translator — Recovery Notes

- Project: **QuoteCraft Studio / existing Translator** (not Language Lounge)
- GitHub remote: `https://github.com/QuoteCraftStudio/Translator`
- Repository source: `Translator.html`
- Local filesystem checkout: none; work performed on connected GitHub.
- Date: 2026-10-24
- Current preview: **v1.1.2-preview**
- Development branch: `feature/african-languages-2026-10-24`
- Last verified code commit: `63df4ea17c7ad513222ed984b4c01c841df3e954`
- Development HTML blob SHA: `cb9e206f250d951aa78cf3a6f6d3b5da112985bd`
- Stable original `main` HTML blob SHA: `cf466825337cff3bb9977a299a12f394f1e49b9d` (recovery baseline).
- Backup: stable original `main` branch; no production files were changed.
- Files changed on development branch: `Translator.html`, `CHANGELOG.md`, `PROGRESS.md`, `CODEX_RECOVERY.md`.
- No untracked local working files were created.

## Verified changes
- Existing two voice buttons remain; no typing UI or typed JS.
- 18 original language options preserved; 11 African locale candidates considered for dynamic presentation.
- African options hidden unless a device exact-locale synthesized voice exists; recognition errors also hide failed locales during the current session.
- Existing translation, speech and donation architecture retained; no new secrets or third-party dependencies.

## Validation
- Compiled inline JavaScript with JS function constructor.
- 10/10 simulated UI tests passed for language filters and voice handlers. Simulated tests do **not** prove that the real browser can recognize speech or translate accurately.
- Real device/audio/MyMemory and website-deployment checks outstanding.

## Safe recovery
1. `git clone https://github.com/QuoteCraftStudio/Translator.git`
2. `cd Translator`
3. `git switch feature/african-languages-2026-10-24`
4. Open `Translator.html` using an HTTPS host for meaningful microphone testing.
5. `git diff main...feature/african-languages-2026-10-24 -- Translator.html`
6. `git switch main` returns to the unchanged original release.

## Critical boundaries
- User explicitly forbids changes to **QuoteCraft Language Lounge**; do not modify it.
- Do not publish, merge, or update quotecraftstudio.ca without separate owner authorization.
- The GitHub HTML source has not yet been proven to match the exact currently published WHC website asset.

## Single next action
Test the preview in a real mobile browser with installed African-language voice support and a live MyMemory translation result before requesting approval to publish the existing website Translator.
