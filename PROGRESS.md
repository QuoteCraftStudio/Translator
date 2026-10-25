# QuoteCraft Translator — Progress

Date: 2026-10-24
Current version: v1.1.2-preview
Objective: Add only voice-capable African options to the user's **existing QuoteCraft Translator**, preserving the current two-button voice design. Leave QuoteCraft Language Lounge completely alone.

## Completed and checkpointed
1. Located existing repository `QuoteCraftStudio/Translator` and original HTML file.
2. Preserved stable `main`; modifications remain in `feature/african-languages-2026-10-24`.
3. Removed manual typing fields added in the earlier preview.
4. Curated 11 African locale candidates from documented speech languages. They appear only when the browser reports an exact matching speech-output voice; recognition errors remove an option for the session.
5. Preserved the original 18 language choices, both hold-to-speak buttons, translation handling, swap, local language preferences and donation link.
6. Verified 10/10 mocked-DOM smoke/regression checks and JavaScript syntax; refreshed documentation.

## Outstanding checks
- On a real phone, validate voice recognition **and** speech playback in selected languages, especially Afrikaans, Swahili, Zulu and Xhosa.
- Test MyMemory API result quality for supported language pairs.
- Confirm the deployed website's Translator.html is based on the same source; the public quotecraftstudio.ca pages could not be retrieved via the web tool.
- Seek explicit authorization before publishing, merging into `main`, or replacing website assets.

## Safety
- QuoteCraft Language Lounge is untouched.
- Stable repository main remains unchanged.
- No live website or APK was updated.
