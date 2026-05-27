---
name: Kinetic Neon
colors:
  surface: '#00161d'
  surface-dim: '#00161d'
  surface-bright: '#003f4f'
  surface-container-lowest: '#001017'
  surface-container-low: '#001f28'
  surface-container: '#00232d'
  surface-container-high: '#002e3b'
  surface-container-highest: '#003a49'
  on-surface: '#b7eaff'
  on-surface-variant: '#ccc3d8'
  inverse-surface: '#b7eaff'
  inverse-on-surface: '#003543'
  outline: '#958da1'
  outline-variant: '#4a4455'
  surface-tint: '#d5bbff'
  primary: '#d5bbff'
  on-primary: '#3b2362'
  primary-container: '#735a9d'
  on-primary-container: '#eee0ff'
  inverse-primary: '#6a5294'
  secondary: '#ffb693'
  on-secondary: '#561f00'
  secondary-container: '#fe6b00'
  on-secondary-container: '#572000'
  tertiary: '#00dbe7'
  on-tertiary: '#00363a'
  tertiary-container: '#007279'
  on-tertiary-container: '#8af6ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ecdcff'
  primary-fixed-dim: '#d5bbff'
  on-primary-fixed: '#250a4c'
  on-primary-fixed-variant: '#523a7a'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#74f5ff'
  tertiary-fixed-dim: '#00dbe7'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#00161d'
  on-background: '#b7eaff'
  surface-variant: '#003a49'
typography:
  display-lg:
    fontFamily: Arimo
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Arimo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Arimo
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Arimo
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Climate Crisis
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Climate Crisis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for a high-energy, cinematic animation discovery experience. The aesthetic merges **Glassmorphism** with a **Modern Corporate** foundation, specifically tailored for the vibrant and expressive world of anime. 

The personality is "Electric Cinematic"—it treats every screen like a theater marquee. By utilizing deep, immersive backgrounds contrasted with a high-energy palette of violet, orange, and cyan, the UI creates a sense of momentum and excitement. The atmosphere is sophisticated yet playful, capturing the "otaku" spirit through sharp geometry and translucent layering.

## Colors

The palette is anchored in a default **Dark Mode** to provide a premium, theater-like backdrop. 

- **Primary (Muted Violet):** Used for branding, active states, and core navigation. It provides a regal, mystical quality.
- **Secondary (Vibrant Orange):** Used for emphasized actions and high-priority calls to action, providing a sharp energy.
- **Tertiary (Electric Cyan):** An auxiliary accent for data visualization, progress bars, or "New" indicators to maintain a futuristic feel.
- **Neutral (Teal-Tinted Slate):** The foundation for surfaces. We use tiered shades of deep teal-grey to create a cool, atmospheric hierarchy that feels more like a dark lens than a standard black screen.

## Typography

The typography strategy focuses on a balance between "Impactful Structure" and "Eclectic Character."

- **Arimo (Headlines):** A neutral, powerful neo-grotesque that provides architectural stability to the layouts. Its clean lines ensure high-impact titles stay legible against complex backgrounds.
- **Climate Crisis (Body):** A bold, expressive typeface used for body content to inject a sense of urgency and avant-garde style directly into the narrative text. It turns standard plot summaries into visual statements.
- **Hanken Grotesk (Labels):** A sharp, contemporary sans-serif used for metadata and small UI labels to maintain clarity where the display fonts would be too heavy.

## Layout & Spacing

This design system utilizes a **Fluid Grid** model with an emphasis on "Generous Breathability." 

- **The 8px Rhythm:** All spacing and sizing must be multiples of 8px to ensure a consistent visual beat.
- **Safe Margins:** Use 24px horizontal margins on mobile to prevent the UI from feeling cramped.
- **Art-First Layout:** On character or series pages, the layout should utilize "Full Bleed" imagery at the top, transitioning into content via a subtle gradient fade. 
- **The Stack:** Elements should be grouped with tight internal spacing (8px) but separated by large blocks of whitespace (32px+) to distinguish between different anime categories or recommendation tiers.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Chroma-Glows** rather than traditional shadows.

- **The Glass Layer:** Floating elements (like navigation bars or genre tags) should use a backdrop-blur (12px - 20px) and a semi-transparent surface (White at 10% opacity). A 1px subtle "stroke" border at 20% opacity should define the edges.
- **Ambient Glows:** Higher-level cards should feature a soft, low-opacity drop shadow tinted with the **Primary Violet** color to suggest they are "emitting light" onto the dark background.
- **Z-Index Strategy:** The "Stage" (background art) is at Z:0. Content cards are at Z:10. Navigation and Overlays reside at Z:20.

## Shapes

The shape language is "Smooth Modern." 

- **Standard Containers:** Use a 0.5rem (8px) radius for standard inputs and small containers.
- **Artwork Cards:** Use 1rem (16px) for movie posters and series thumbnails to give them a friendly, approachable feel that mimics modern mobile OS standards.
- **Genre Tags:** Utilize pill-shaped (fully rounded) buttons to create a visual distinction from the rectangular structural cards.

## Components

- **Series Cards:** The primary vessel for content. Use a vertical 2:3 aspect ratio for posters. On-card metadata (title, rating) should be placed on a bottom-aligned glassmorphic overlay.
- **Genre Chips:** Pill-shaped tags using the `label-md` type style. Backgrounds should be a low-opacity version of the Primary Violet, turning solid Secondary Orange on hover/active.
- **Glass Navigation:** A bottom navigation bar with a high blur radius (30px), making it look like a frosted pane floating over the scrolling artwork.
- **Action Buttons:**
    - *Primary:* Solid Orange with `Arimo` bold white text.
    - *Secondary:* Transparent with a 2px Primary Violet border.
- **Status Indicators:** "Live" or "New" badges should use the Tertiary Cyan with a subtle "pulse" animation to draw the eye immediately.
- **Input Fields:** Deep Teal-tinted background with a 1px border that glows Violet when focused.