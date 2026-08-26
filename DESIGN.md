---
name: Earth & Editorial
colors:
  surface: '#fff8ef'
  surface-dim: '#e0d9cc'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf3e5'
  surface-container: '#f5ede0'
  surface-container-high: '#efe7da'
  surface-container-highest: '#e9e2d4'
  on-surface: '#1e1b13'
  on-surface-variant: '#4c463e'
  inverse-surface: '#333027'
  inverse-on-surface: '#f7f0e2'
  outline: '#7e766d'
  outline-variant: '#cfc5ba'
  surface-tint: '#695c4c'
  primary: '#33291b'
  on-primary: '#ffffff'
  primary-container: '#4a3f30'
  on-primary-container: '#baaa97'
  inverse-primary: '#d5c4b0'
  secondary: '#6c5e06'
  on-secondary: '#ffffff'
  secondary-container: '#f7e382'
  on-secondary-container: '#73640e'
  tertiary: '#292b28'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f413e'
  on-tertiary-container: '#acada8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f2e0cb'
  primary-fixed-dim: '#d5c4b0'
  on-primary-fixed: '#231a0d'
  on-primary-fixed-variant: '#504536'
  secondary-fixed: '#f7e382'
  secondary-fixed-dim: '#dac769'
  on-secondary-fixed: '#211b00'
  on-secondary-fixed-variant: '#524700'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#fff8ef'
  on-background: '#1e1b13'
  surface-variant: '#e9e2d4'
typography:
  headline-xl:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-mobile: 24px
  margin-desktop: 80px
  gutter: 16px
  section-gap: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The brand personality is **sophisticated, nurturing, and high-end**, mirroring the curated aesthetic of a premium beauty or wellness editorial. It targets a discerning audience seeking professional expertise wrapped in a warm, welcoming atmosphere.

The design style is a blend of **Minimalism** and **Editorial Elegance**. It prioritizes a "breathing" UI with generous whitespace (respiro), high-quality imagery, and a refined use of depth. The interface should feel like a physical magazine—structured yet fluid, with a focus on tactile serenity and effortless luxury. Every interaction should evoke a sense of calm and professional care.

## Colors

This design system utilizes a warm, grounded earth-tone palette:

*   **Primary (#4a3f30):** A deep, rich Espresso Brown used for primary headlines, call-to-action buttons, and high-impact structural elements.
*   **Secondary (#c5b358):** A Soft Gold used sparingly for accent details, dividers, and decorative icons to convey luxury.
*   **Base/Off-White (#f5f5f0):** The primary background color to ensure the UI feels airy and clean, softer than a pure digital white.
*   **Neutral/Beige (#d9d2c5):** Used for surface containers, secondary buttons, and subtle borders to maintain the warm, organic feel.

The default color mode is **Light**, emphasizing clarity and the "beauty magazine" aesthetic.

## Typography

The typography follows a classic editorial hierarchy:

*   **Headlines:** Utilize **Bodoni Moda**. This high-contrast serif provides the "vogue" aesthetic. For large displays, use tight letter-spacing to enhance the premium feel.
*   **Body & UI:** Utilize **Manrope**. A clean, modern sans-serif that balances the traditional serif headlines with contemporary readability.
*   **Labels:** Labels and small UI elements use Manrope with increased letter-spacing and occasional uppercase styling to create a distinct, organized look.

Ensure generous line heights (1.6x for body text) to maintain the "respiro" requested in the design narrative.

## Layout & Spacing

The design system follows a **Mobile-First, Fluid Grid** philosophy. 

*   **Mobile (Default):** A 4-column grid with 24px side margins. Content is mostly single-column stacked to ensure ease of use on small screens.
*   **Desktop:** A 12-column grid with significant 80px side margins to emulate a coffee-table book layout.
*   **Philosophy:** "Breathing room" is prioritized. Section gaps are intentionally large (64px+) to prevent the user from feeling overwhelmed. Elements should never feel cramped; use white space as a structural element to guide the eye.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Soft Ambient Shadows**.

*   **Layers:** Use the Beige (#d9d2c5) color for cards and containers sitting on the Off-White (#f5f5f0) background. This creates a soft, non-aggressive depth.
*   **Shadows:** Avoid harsh black shadows. Use very diffused, low-opacity shadows with a hint of the primary brown (#4a3f30) in the tint to keep the depth feeling organic and warm. 
*   **Glassmorphism:** Use sparingly for navigation bars or floating overlays, employing a high-intensity background blur to maintain the sophisticated, ethereal feel.

## Shapes

The shape language is **Soft (Level 1)**. 

While the design is editorial and structured, slightly rounded corners (0.25rem to 0.75rem) are used to soften the "clinical" nature of the health/beauty context, making it feel more approachable and welcoming. Rectilinear shapes are reserved for high-level image containers to maintain a gallery-like feel.

## Components

*   **Buttons:** Primary buttons use the Espresso Brown (#4a3f30) background with Off-White text. Secondary buttons use an outline in Gold (#c5b358) or a Beige fill.
*   **Input Fields:** Minimalist design with a bottom border or a very light beige fill. Focus states should transition the border color to Gold.
*   **Cards:** Use generous padding (24px+) and soft-tinted shadows. Images in cards should have a "Soft" corner radius.
*   **Chips/Badges:** Small, uppercase labels with high letter-spacing, often using a Gold outline or Beige fill.
*   **Lists:** Separated by very thin, low-opacity lines in the Neutral/Beige tone to maintain a clean vertical rhythm.
*   **Featured Components:** Include "Editorial Callouts"—large-type quotes or highlights using the Bodoni Moda font to break up information-heavy sections.