# Web design research — Talk with the Bible

Recorded 16 August 2026. Chrome/Mobbin live capture was not available in this environment; decisions are taken from the iOS design system and from public product pages we already know well.

## References

| Site | Why it matters |
| --- | --- |
| [Linear](https://linear.app) | Quiet hero, one sentence, product in a device, almost no chrome. |
| [Things](https://things.com) | Premium stillness. The product is the art. |
| [Tot](https://tot.cc) | Ultra-minimal. A few words, then the object. |
| [Craft](https://craft.do) | Warm paper, personable without being cute. |
| [Apple product pages](https://www.apple.com/iphone/) | Large type, generous space, one idea above the fold. |

## Hero pattern

Chosen: **split hero** — serif headline + trust chips on the left, iPhone frame with the citing chat on the right.

Why: Talk with the Bible is a sanctuary, not a growth-hack landing. The first screen must say “private conversation with Scripture” and show a real citation (John 3:16 in the shipped UI). A full-bleed video was considered and dropped; Higgsfield was not required for a still, reverent page.

## Color

Taken from `TalkWithBible/docs/design-system.md` and `Palette.swift`. Dark is the designed default.

| Token | Hex | Web role |
| --- | --- | --- |
| Midnight navy | `#0D1229` | Dark field |
| Deep indigo | `#1A1442` | Surfaces |
| Parchment gold | `#D1AD61` | Accent / primary on dark |
| Candlelight amber | `#DB943D` | Secondary glow |
| Parchment | `#F5EBD1` | Dark-mode text; light-mode field |
| Ink | `#241E2E` | Text on gold |

Light mode is parchment paper with a darker gold for contrast. We did not invert the iOS palette into a generic indigo-SaaS look.

## Type

iOS uses San Francisco and New York for verse bodies. The site uses **Source Serif 4** for display (manuscript) and **Inter** with **SF Pro** first in the stack on Apple devices.

## Structure

1. Header — logo, sections, language, theme, App Store
2. Hero — promise + citing screenshot
3. Features — cite, local history, canon scope, reminders
4. Privacy — no collection, on-device Intelligence, local notifications
5. How it works — three steps
6. Why this companion — four differentiators, no competitor names
7. Final CTA
8. Footer — Privacy, Support, Terms

## Screenshots

The App Store composition bundle was not ready. Product shots are resized raws from `build/screenshots_raws/` (dark 07–12, plus light chat), framed in an iPhone shell. They are temporary product photography, not App Store marketing frames.

## Lumen

Lumen is a voxel dove **illustration**, drawn in SVG on the site the same way the app draws it in Canvas. The copy never calls it a photo or a spirit.
