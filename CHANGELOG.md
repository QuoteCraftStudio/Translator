# QuoteCraft Translator — Changelog

## v1.1.2-preview — 2026-10-24
- Continued work on the **existing** QuoteCraft Translator HTML. The Language Lounge app is excluded and unchanged.
- Removed all typed-message input boxes and typed-send buttons; restored the original voice-only, two-microphone interface.
- Kept the original 18 language options and donation, swap, press-and-hold, recognition and playback behavior.
- Reduced 31 speculative additions to 11 documented African speech-recognition locale candidates: Afrikaans (af-ZA), Amharic (am-ET), Hausa (ha-NG), Igbo (ig-NG), Kinyarwanda (rw-RW), Shona (sn-ZW), Swahili (Kenya sw-KE; Tanzania sw-TZ), Xhosa (xh-ZA), Yoruba (yo-NG), Zulu (zu-ZA).
- **New African languages only appear on a particular device if its browser supplies an exact matching speech-synthesis voice**. Availability refreshes when browser voices load or change.
- If speech recognition rejects one of these added languages during a session, it is removed from the selector for that session.
- African playback requires an exact locale-specific voice and will no longer silently substitute an unrelated voice.
- No claims of distinct dialect translation are made. Regional Swahili selections use the same written translation code.
- Only the development branch was updated; production `main`, live website, and Language Lounge remain unmodified.

### Tests performed
- JavaScript compiled successfully.
- 10/10 DOM-stub regression checks passed, including: retained existing 18 options; no African options without matching voices; exact voice locale filtering; regional filtering; maintaining microphone handlers; removing a rejected recognition locale; and no text-entry controls.
- Real microphone input, mobile browser voice catalog, MyMemory translation quality/coverage, and playback on physical devices **have not been verified**.

### Important limitations
- Google Cloud's documented speech-recognition locale lists are only a source for **candidates**; this app uses the browser Web Speech API, whose support can differ. The app does not connect directly to Google Cloud Speech.
- A synthesized voice being installed does not by itself guarantee the browser can recognize that language; unsupported recognition languages are removed if the browser reports failure.
- The existing MyMemory translation API may not provide good translations for every language pair, and network availability is required.
- Publishing or deployment has **not** been authorized or performed.

## v1.1.0-preview — 2026-10-24 (superseded on development branch)
- Initial speculative African language list and typed fallback. These were subsequently removed in response to the owner's requirements.
