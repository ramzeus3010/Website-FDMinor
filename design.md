# Eterna Design System

A comprehensive design reference for aligning the Eterna mobile app with the website's visual language. Every value listed here is the exact value used in production code.

---

## 1. Color Palette

### Core Colors

| Token | Hex | Usage |
|---|---|---|
| **Background** | `#0a0e1a` | Primary background. Applied as a top-down gradient to `#0d1425` |
| **Background End** | `#0d1425` | Bottom of the gradient, also used as "surface" color |
| **Surface** | `#0d1425` | Elevated surfaces slightly lighter than background |
| **Primary (Warm Gold)** | `#d4a94c` | Main accent. Timeline line, nodes, buttons, highlights, logo strokes |
| **Accent** | `#c9a84c` | Secondary gold, essentially the same family. Used for sparkle icons and AI-related labels |
| **Text Main** | `#FFFFFF` | All primary text |
| **Text Muted** | `rgba(255, 255, 255, 0.7)` | Secondary text, descriptions, placeholders |
| **Border** | `rgba(255, 255, 255, 0.1)` | Borders for cards, inputs, dividers |

### Timeline Thread Colors

These are the five distinct colors used for the rotating parallel timeline lines in the "Join" section. Each thread corresponds to a quote and rotates in a carousel. They should be reused anywhere color differentiation is needed in the app (e.g., memory categories, labels, or multi-thread visualizations).

| Token | Hex | Visual Identity |
|---|---|---|
| **Primary** | `#d4a94c` | Warm Gold — the default and most prominent thread |
| **Thread Teal** | `#4a9e9e` | Muted cyan-teal — calm, reflective memories |
| **Thread Rose** | `#9e4a6a` | Dusty rose-burgundy — emotional, personal memories |
| **Thread Lavender** | `#7a6a9e` | Soft purple-lavender — introspective, philosophical memories |
| **Thread Sage** | `#6a9e7a` | Earthy sage green — nature, growth, peaceful memories |

### Meta-Chip / Tag Colors

These are the vibrant colors used exclusively for small metadata tag pills ("meta-chips") inside Protocol cards and Feature cards. They indicate a category or type:

| Color | Hex | Used For |
|---|---|---|
| **Orange** | `#F97316` | Voice / Input-related tags |
| **Blue** | `#3B82F6` | Q&A / Interaction-related tags. Also used for "Shared" mode toggle |
| **Fuchsia** | `#D946EF` | AI / Gemini-powered tags |
| **Green** | `#4ADE80` | Location tags |
| **Gold** | `#D4AF37` | Emotion / Sentiment tags (slightly different shade from primary, more saturated) |
| **Pink** | `#EC4899` | 100% match / highlight indicator in search results |
| **Red** | `#EF4444` | Error states, validation messages |
| **Emerald** | `#10B981` (border: `emerald-500`) | Success states (e.g., confirmation after form submit) |

### Glassmorphism Recipe

Every card across the site uses this exact formula:

```
background: rgba(255, 255, 255, 0.05)    /* bg-white/5 */
backdrop-filter: blur(12px)               /* backdrop-blur-md */
border: 1px solid rgba(255, 255, 255, 0.1) /* border-white/10 */
border-radius: 2rem to 3rem               /* rounded-[2rem] to rounded-[3rem] */
box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25) /* drop-shadow-2xl */
```

For modals and elevated surfaces, a heavier blur is used:
```
background: rgba(12, 16, 32, 0.9)        /* bg-[#0c1020]/90 */
backdrop-filter: blur(40px)               /* backdrop-blur-2xl */
```

---

## 2. Typography

### Font Stack

| Token | Font Family | Weights Loaded | Google Fonts Link |
|---|---|---|---|
| **Heading** (`font-heading`) | **Playfair Display** (serif) | 400, 500, 600, 700, + italic variants | `Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600` |
| **Drama** (`font-drama`) | **Playfair Display** (serif) | Same as above — alias for heading | Same |
| **Sans** (`font-sans`) | **Plus Jakarta Sans** (sans-serif) | 300, 400, 500, 600, 700 | `Plus+Jakarta+Sans:wght@300;400;500;600;700` |
| **Mono** (`font-mono`) | **JetBrains Mono** (monospace) | System default weights | Used via CSS `font-mono` |

### Where Each Font Is Used and Why

#### Playfair Display (Heading / Drama)
- **Purpose**: Establishes the **premium, editorial** identity of Eterna. The serif style communicates permanence, heritage, and trust — values core to a memory preservation brand.
- **Used in**:
  - `<h1>` through `<h6>` — all headings site-wide (set globally in CSS)
  - Hero title: `"Eterna."` — massive 10rem display at largest breakpoint
  - Section headings: `"How Eterna Works"`, `"Start preserving your memories today."`
  - Quote carousel: Each quote rendered in Playfair Display italic (`font-heading italic font-light`)
  - Philosophy manifesto: The dramatic `"We encourage you to make memories."` text uses `font-drama italic` at very large sizes (6–8rem)
  - Feature card titles: `"Private by default"`, `"AI that adds meaning"`, `"Find memories fast"`
  - Protocol card titles: `"Record a moment"`, `"Let AI organize"`, `"Relive your story"`
- **Letter spacing**: `tracking-tight` (`-0.02em`) for headings, `tracking-tighter` (`-0.04em`) for large display text
- **Key style variations**:
  - Regular weight (`font-medium`, `font-semibold`) for section titles
  - Italic + light weight for quotes — creates an elegant, journal-entry feel
  - Italic + light weight for the philosophy manifesto — dramatic and statement-like

#### Plus Jakarta Sans (Sans)
- **Purpose**: The **workhorse body font**. Modern, geometric, highly legible. Provides clean contrast against the decorative serif headings. Its rounded forms keep the tone warm rather than clinical.
- **Used in**:
  - All body/paragraph text (`text-text-muted` descriptions under headings)
  - Navigation links in navbar
  - Button labels: `"Request early access"`, `"Start your timeline"`
  - Modal form text: input fields, descriptions, privacy disclaimer
  - Footer text
  - Feature card descriptions
  - Protocol card descriptions
- **Typical settings**: `text-base` (16px) to `text-lg` (18px), `leading-relaxed` line height, `font-sans` class

#### JetBrains Mono (Mono)
- **Purpose**: Creates a **technical, systems-level** aesthetic. Used sparingly for small labels to suggest precision, data, and structured information — reinforcing Eterna's technical credibility.
- **Used in**:
  - **Timeline section labels**: `"Begin"`, `"Core"`, `"Why"`, `"How"`, `"Join"` — positioned next to glowing nodes along the vertical timeline. Always uppercase, `text-xs`, `tracking-widest`
  - **Protocol step labels**: `"Capture"`, `"Synthesize"`, `"Preserve"` — small monospace labels above each step title
  - **Meta-chip / tag text**: Every metadata tag pill (e.g., `"VOICE"`, `"EMOTION: GRATITUDE"`, `"LOCATION: KYOTO"`) uses `font-mono text-[9px] uppercase tracking-wider`
  - **Search bar text**: `"ideas about future"` in the Find Memories card
  - **Date labels**: `"Jan 2023"`, `"Today"` on the timeline graph
  - **Toggle labels**: `"PRIVATE"`, `"SHARED"` inside the privacy toggle

---

## 3. The Timeline System

The timeline is the **structural spine** of the entire page. It is a continuous vertical line that runs down the left side of the viewport, connecting every section.

### Timeline Line

```
Width: 1px
Color: primary/40 (rgba(212,169,76,0.40))
Position: Fixed to left side
  - Mobile:  left-6  (24px)
  - Tablet:  left-24 (96px)
  - Desktop: left-32 (128px)
Centered: -translate-x-1/2 (shifts 0.5px left for optical centering)
Z-index: 10
```

### Timeline Nodes

Nodes are glowing dots placed on the timeline at each major section boundary.

**Standard Node** (section markers):
```
Size: w-3 h-3 (12px × 12px)
Shape: rounded-full
Background: bg-primary (#d4a94c)
Glow: box-shadow: 0 0 10px rgba(212,169,76,0.8)
```

**Hero Node** (top of page, special):
```
Size: w-16 h-16 (64px × 64px)
Shape: Circle with 1px primary border
Background: bg-background/80 backdrop-blur-md
Contains: BrandLogo SVG (white, 32×32)
Glow: box-shadow: 0 0 20px rgba(212,169,76,0.4)
```

**Terminal Diamond Node** (CTA section, end of timeline):
```
Container: w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border-white/10
Inner shape: w-4 h-4 square rotated 45° (diamond)
Background: bg-primary
Glow: box-shadow: 0 0 15px rgba(212,169,76,0.8)
```

### Section Labels

Small monospace labels that appear beside timeline nodes:

```
Font: font-mono (JetBrains Mono)
Size: text-xs (12px) for standard labels, text-sm (14px) for hero
Transform: uppercase
Letter-spacing: tracking-widest (0.1em)
Color: text-primary for "Begin", text-text-muted/60 for others
Visibility: hidden on mobile, visible md:block
Position: absolute, left-full, ml-6 (24px gap from node)
```

Labels in order: **Begin** → **Core** → **Why** → **How** → **Join** → **Start**

### Branch Lines

Horizontal lines connecting the vertical timeline to content cards:

```
Width: 52px (mobile) → 84px (tablet) → 132px (desktop)
Height: 1px
Color: gradient from primary/30 to primary/80
Terminates with: a 6px (w-1.5) dot at the left end (bg-primary, rounded-full, -translate-x-1/2)
Visibility: hidden on mobile, md:flex
Position: absolute, top-24 (96px from card top), right-[100%] (extends left from the card)
```

### Rotating Thread Lines (Join Section)

In the CTA/Quotes section, the single timeline line splits into 5 parallel colored threads that rotate in sync with a quote carousel:

```
Container: 120px wide, centered on the timeline x-position
Each thread: full height of section, rounded-full ends
Active thread: width 3px, brightness(1.5), drop-shadow glow
Inactive threads: width 1px, brightness(0.7), reduced opacity
Spacing: stagger translateX (diff × 16px between each)
Transition: 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
Colors: cycle through the 5 thread colors (primary, teal, rose, lavender, sage)
```

---

## 4. Meta-Chips / Tags

These are the small pill-shaped metadata indicators used throughout the site. They should be replicated identically in the app.

### Base Tag Structure

```
Font: font-mono (JetBrains Mono)
Font-size: text-[9px] (9px)
Text-transform: uppercase
Letter-spacing: tracking-wider (0.05em)
Padding: px-2 py-1
Border-radius: rounded-full (fully rounded pill)
Layout: flex, items-center, gap-1 (4px gap between icon and text)
Shadow: shadow-lg
Background: bg-background/80 backdrop-blur-md (frosted base) PLUS color-tinted bg
```

### Tag Color Formula

Each tag follows an identical pattern, only changing the accent color:

```
Background:    [COLOR]/10    (10% opacity tint)
Border:        [COLOR]/30    (30% opacity border, 1px)
Text color:    [COLOR]       (full saturation)
Icon color:    Inherits text color
```

### Tag Examples with Exact Values

| Tag Label | Accent Color | Background | Border | Icon |
|---|---|---|---|---|
| 🎤 Voice | `#F97316` | `#F97316` at 10% | `#F97316` at 30% | `Mic` (Lucide) |
| 💬 Q&A | `#3B82F6` | `#3B82F6` at 10% | `#3B82F6` at 30% | `MessageCircle` (Lucide) |
| ✨ Powered by Gemini | `#D946EF` | `#D946EF` at 10% | `#D946EF` at 30% | `Sparkles` (Lucide) |
| 📍 Location: Chicago | `#4ADE80` | `#4ADE80` at 10% | `#4ADE80` at 30% | `MapPin` (Lucide) |
| ❤️ Emotion: Gratitude | `#D4AF37` | `#D4AF37` at 10% | `#D4AF37` at 30% | `Heart` (Lucide) |

---

## 5. Buttons

### Primary Button

```
Background: bg-white/10 (transparent glass)
Backdrop: backdrop-blur-md
Border: 1px solid rgba(255,255,255,0.2)
Text color: text-text-main (white)
Font: font-sans (Plus Jakarta Sans)
Font size: text-sm (14px)
Font weight: font-medium (500)
Letter-spacing: tracking-wide
Padding: px-6 py-3 (default), customized per placement
Border-radius: rounded-full
Cursor: cursor-pointer

Hover effect:
  - A hidden <span> fills from bottom (translateY 100% → 0%)
  - Fill color: bg-primary (#d4a94c)
  - Text changes to white
  - Transition: 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

Magnetic interaction (GSAP):
  - On mousemove: button translates 20% of cursor offset, scale(1.03)
  - On mouseleave: elastic snap-back (elastic.out, 0.3 damping)
```

### Accent Button

```
Same structure, but:
  Background: bg-accent/80
  Border: border-accent/30
  Text: text-background (dark text on gold)
  Hover fill: bg-white/20
```

### Modal Submit Button

```
Background: bg-primary/90 → hover: bg-primary
Text: text-background (dark)
Font-weight: font-semibold (600)
Border-radius: rounded-xl (not fully rounded, slightly less)
Padding: py-3.5
Hover shadow: 0 0 30px rgba(212,169,76,0.3)
Disabled: opacity 60%, cursor not-allowed
Loading state: Spinner (5px circle, border-2, animate-spin) replaces text
```

---

## 6. Cards & Containers

### Feature Cards (3 interactive cards)

```
Background: bg-white/5 backdrop-blur-md
Border: 1px solid rgba(255,255,255,0.1)
Border-radius: rounded-[2rem]
Padding: p-6 (mobile) → p-8 (sm) → p-12 (lg)
Shadow: drop-shadow-2xl
Layout: flex, column on mobile, row on desktop (lg:flex-row)
Gap: gap-8 (mobile) → gap-16 (desktop)
Min-height: min-h-[400px]

Inner animation container:
  Background: bg-[#09090D] (near-black)
  Border: 1px solid rgba(255,255,255,0.1)
  Border-radius: rounded-2xl
  Shadow: shadow-inner
  Min-height: min-h-[250px]
```

### Protocol Cards (3 stacking cards)

```
Card 1 bg: bg-white/5 (standard glass)
Card 2 bg: bg-[#0B132A]/90 (deep navy)
Card 3 bg: bg-[#0E1B3D]/90 (midnight blue)

All cards share:
  Border-radius: rounded-[2rem] (mobile) → rounded-[3rem] (desktop)
  Padding: p-6 → p-8 → p-12
  Shadow: 0 -20px 40px rgba(0,0,0,0.5) (upward shadow for stacking depth)
  Layout: column (mobile) → row (desktop)
  will-change: transform (for scroll performance)

App screenshot placeholder:
  Width: full (mobile) → 280px (desktop)
  Aspect ratio: 9:16
  Background: bg-black/40
  Border-radius: rounded-3xl
  Border: 1px solid rgba(255,255,255,0.1)
```

### Quote Cards (carousel)

```
Background: bg-white/5
Backdrop: backdrop-blur-xl (heavier blur)
Border: 1px solid color-mix(in srgb, [threadColor] 25%, transparent)
Border-radius: rounded-[2rem] (mobile) → rounded-[3rem] (desktop)
Padding: p-6 → p-10 → p-14 → p-16
Shadow: 0 20px 40px -10px color-mix(in srgb, [threadColor] 15%, transparent)
Transition: 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

Contains:
  - Brand logo circle: w-16 h-16, rounded-full, border-2 in thread color
  - Quote text: font-heading italic font-light, xl → 3xl → 5xl
```

---

## 7. Visual Texture & Effects

### Noise Overlay

A fixed full-screen SVG noise filter covers the entire viewport:

```
Filter: feTurbulence (fractalNoise, baseFrequency: 0.65, 3 octaves)
Opacity: 0.04 (4%)
Position: fixed, full viewport
Z-index: 9999
Pointer-events: none
```

This removes the "flat digital" feeling from gradients and solid backgrounds.

### Corner Radius System

| Context | Radius |
|---|---|
| Large cards (feature, protocol, quote) | `2rem` (mobile) → `3rem` (desktop) |
| Inner animation containers | `1rem` (rounded-2xl) |
| App screenshot placeholders | `1.5rem` (rounded-3xl) |
| Buttons | `9999px` (rounded-full, pill shape) |
| Tags / meta-chips | `9999px` (rounded-full) |
| Inputs | `0.75rem` (rounded-xl) |
| Modals | `2rem` (rounded-[2rem]) |
| Timeline nodes | `9999px` (circle) |

**No sharp corners are used anywhere in the design.**

### Background Gradient

```css
background: linear-gradient(to bottom, #0a0e1a, #0d1425);
background-attachment: fixed;
```

### Text Selection

```css
::selection {
  background-color: rgba(30, 58, 138, 0.4); /* Deep blue */
  color: #fff;
}
```

---

## 8. Icon System

All icons come from **Lucide React** (`lucide-react` package). Sizes used:

| Context | Size |
|---|---|
| Section header icons (in colored circle) | `w-5 h-5` (20px) |
| Inside meta-chips / tags | `w-2.5 h-2.5` (10px) |
| Button arrows | `w-4 h-4` (16px) |
| Toggle labels | `w-3 h-3` (12px) |
| Modal close button | `w-4 h-4` (16px) |
| Success / status circles | `w-8 h-8` (32px) |
| Brand logo (hero node) | `w-8 h-8` (32px) |

Icons used: `ArrowRight`, `Lock`, `LockOpen`, `Sparkles`, `Search`, `CheckCircle`, `Mic`, `MessageCircle`, `MapPin`, `Heart`, `Share2`, `X`

---

## 9. Spacing & Layout Principles

### Content Left Margin (from timeline)

All main content is offset from the left to make room for the timeline:

```
Mobile:  ml-12  (48px)  or ml-20 (80px)
Tablet:  ml-40  (160px)
Desktop: ml-56  (224px)
```

### Section Padding

```
Vertical: pt-32 pb-32 (128px top and bottom)
```

### Card Gaps

```
Feature cards vertical gap:        gap-8 (mobile) → gap-24 (desktop)
Inside cards (text ↔ animation):   gap-8 (mobile) → gap-16 (desktop)
Meta-chips between each other:     gap-2 (8px)
```

---

## 10. Animation Principles

### Easing Functions

| Purpose | Easing |
|---|---|
| Entrances / fade-ups | `power3.out` |
| Morphs / transitions | `power2.inOut` |
| Elastic snap-back (buttons) | `elastic.out(1, 0.3)` |
| Bouncy pop (tags appearing) | `back.out(2)` |
| Toggle snap | `back.out(1.5)` or `elastic.out(1, 0.5)` |
| CSS transitions | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — the Eterna signature curve |

### Stagger Values

| Context | Stagger |
|---|---|
| Text lines (hero, philosophy) | `0.08s` to `0.2s` |
| Cards / containers appearing | `0.15s` |
| Tags popping in | `0.1s` |
| Typing effect words | `0.1s` |

### Default Durations

| Animation | Duration |
|---|---|
| Page entrance fade-ups | `1.0s` – `1.2s` |
| Card transitions | `0.5s` – `1.0s` |
| Button hover fills | `0.5s` (CSS) |
| Modal open | `0.35s` overlay + `0.4s` panel |
| Modal close | `0.25s` |
| Quote carousel transition | `1.0s` |
| Toggle slide | `0.3s` – `0.4s` |

---

## 11. Quick Reference — Copy-Paste Values

### For a standard app card:
```
bg: #0a0e1a (or #0d1425 for elevated)
border: 1px solid rgba(255,255,255,0.1)
corner-radius: 32px
blur: 12px backdrop
```

### For a tag/chip:
```
font: JetBrains Mono, 9px, uppercase, letter-spacing 0.05em
padding: 8px horizontal, 4px vertical
border-radius: 9999px
bg: [accent-color] at 10% opacity
border: 1px solid [accent-color] at 30% opacity
text: [accent-color] at 100%
```

### For body text:
```
font: Plus Jakarta Sans, 16-17px, weight 400
color: rgba(255,255,255,0.7)
line-height: 1.625 (relaxed)
```

### For a heading:
```
font: Playfair Display, weight 600
color: #FFFFFF
letter-spacing: -0.02em
```
