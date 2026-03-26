```markdown
# Design System Strategy: The Sanctuary Aesthetic

## 1. Overview & Creative North Star

**Creative North Star: "The Modern Alchemist"**

This design system moves away from the rigid, clinical layout of standard beauty booking platforms and instead adopts a "High-End Editorial" experience. We are not just building a website; we are curate a digital sanctuary. The goal is to evoke the tactile sensation of high-quality vellum paper, the soft glow of a dusk-lit studio, and the intentionality of a ritual.

To break the "template" look, we employ **Intentional Asymmetry**. Hero sections should feature off-center typography paired with overlapping organic imagery. Large, airy margins (using our `20` and `24` spacing tokens) are not "empty space"—they are a luxury. By treating the screen as a canvas rather than a grid, we signal to the client that "Art Ritual ByAna" is a place of bespoke care and artistic precision.

---

## 2. Colors & Surface Philosophy

The palette is a sophisticated blend of warm neutrals and muted rosates designed to soothe the eye and elevate the brand’s "ritual" positioning.

- **Primary (`#7c5458`):** Use this for core brand moments—heavy serif headlines or primary CTAs. It is a grounded, "dried rose" tone that feels authoritative yet feminine.

- **Surface Hierarchy:** We rely on **Tonal Transitions** rather than lines.

- **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Use background shifts (e.g., a `surface-container-low` section sitting against a `background` page) to define boundaries.

- **The Glass & Gradient Rule:** For floating navigation or modal overlays, use `surface-container-lowest` with a 70% opacity and a `backdrop-filter: blur(20px)`. This "Glassmorphism" ensures the UI feels light and ethereal.

- **Signature Textures:** Apply a subtle linear gradient from `primary` to `primary-container` (at a 15% opacity) on large backgrounds to mimic the soft wash of watercolor paint.

---

## 3. Typography: The Editorial Voice

The contrast between an ancient-feeling serif and a hyper-modern sans-serif creates the "Art Ritual" tension.

- **Display & Headlines (Noto Serif):** These are our "hero" elements. Use `display-lg` (3.5rem) with generous letter-spacing (-0.02em) to create an expensive, editorial feel. Headlines should never feel "loud"; they should feel "present."

- **Body & Labels (Plus Jakarta Sans):** A clean, geometric sans-serif that provides high legibility. Use `body-md` for standard descriptions and `label-md` for eyebrow headings in all-caps with `1.5px` letter-spacing to denote professional categorization.

- **The Hierarchy Rule:** Every page should have one clear `display-lg` moment. Secondary information should skip a level (e.g., jumping from `headline-lg` to `body-md`) to create "Visual Breath" through contrast.

---

## 4. Elevation, Depth & The "Ghost Border"

We achieve depth through physics and light, not artificial dropshadows.

- **The Layering Principle:** Stack surfaces to create natural lift. A `surface-container-highest` card placed on a `surface-container-low` background creates a 3D effect through color alone.

- **Ambient Shadows:** When a shadow is required (e.g., a floating appointment card), use a multi-layered shadow:

- `box-shadow: 0 10px 40px rgba(58, 48, 44, 0.06);`

- The shadow color is derived from `on-surface`, never pure black, to keep it organic.

- **The Ghost Border Fallback:** If a container requires a boundary (e.g., a text input), use the `outline-variant` (`#beafa8`) at **15% opacity**. This creates a "suggestion" of a container that doesn't break the flow of the page.

---

## 5. Components & Interface Elements

### Buttons & Interaction

- **Primary Button:** Uses `primary` background with `on-primary` text. Corners must use the `full` (pill) roundedness. Avoid heavy hover shadows; instead, use a subtle shift to `primary-dim`.

- **Tertiary Button:** No background. Use `label-md` typography with a 1px underline using the `primary` token, spaced `0.35rem` (token `1`) below the text.

### Cards & Content Grouping

- **Service Cards:** Forbid the use of divider lines. Use `surface-container-low` for the card background and `xl` (1.5rem) rounded corners. Separate the service name from the price using `spacing-6` (2rem) of white space.

- **Abstract Shapes:** Integrate soft, organic SVG blobs or floral line art (using `outline-variant` at 20% opacity) that "peek" from behind cards or the corners of the viewport.

### Form Inputs

- **The "Soft Field":** Inputs should use `surface-container-low` with `md` (0.75rem) corners. The label (`label-md`) should sit `0.7rem` (token `2`) above the field, never inside it, to maintain a clean, "unfilled" look.

### Interactive "Ritual" Elements (Custom)

- **The Progress Loom:** Instead of a standard stepper for booking, use a series of fading `surface-tint` dots that expand into `primary` circles when active, symbolizing the unfolding of a ritual.

---

## 6. Do’s and Don’ts

### Do

- **Use Asymmetrical Margins:** If the left margin is `spacing-10`, try making the right margin `spacing-16` to create a dynamic, modern feel.

- **Embrace the "Air":** If a section feels crowded, double the spacing token. Luxury is defined by the space you _don't_ use.

- **Layer Imagery:** Overlap a treatment photo with a transparent text block or an abstract shape.

### Don’t

- **Never use 100% Black:** Even for text, use `on-surface` (`#3a302c`). Pure black is too harsh for this sanctuary environment.

- **No Sharp Corners:** Avoid `none` or `sm` roundedness unless it's for a very specific functional utility. Everything should feel "worn smooth" like a river stone.

- **No Grid-Lock:** Do not force every element into a perfectly centered column. Let elements "float" slightly off the central axis to maintain the artisanal vibe.
```
