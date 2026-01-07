# Card Component Specification

> **Purpose**: This document provides complete technical specifications for the Card component in the Exos Design System (ExosThemeAlpaca). Use this to validate Figma designs against the design system and identify when custom styles are needed.

---


---

## When to use this component
If the user mentions the component being created is a card or if the Figma layers include the word "card", you MUST use the "Base Card Structure" seen below. The Figma file should be labled with things like "Card header" and "Card Body", only include what you see and make your best judgement. Ask the user if you are unsure of what semantics to use from the below design system. 

---

## HTML Structure Patterns

### Base Card Structure
```html
<div class="card">
  <div class="card-header"><!-- Header content --></div>
  <div class="card-body"><!-- Body content --></div>
  <div class="card-footer"><!-- Footer content (optional) --></div>
</div>
```
---

## Bootstrap Card Classes

### Core Classes

#### `.card`
**Purpose**: Main container for card component

**Bootstrap Base Styles** (from Bootstrap 5):
```scss
position: relative;
display: flex;
flex-direction: column;
min-width: 0;
height: null; // $card-height variable
word-wrap: break-word;
background-color: #fff; // $card-bg
background-clip: border-box;
border: 0px solid transparent; // $card-border-width solid $card-border-color
border-radius: 0px; // $card-border-radius
```

**ExosThemeAlpaca Override**:
```scss
--bs-xxl-card-spacer-x: 1.5rem; // CSS variable for xxl spacing
--bs-xxl-card-spacer-y: 1.3125rem; // CSS variable for xxl spacing
box-shadow: 0px 1px 3px rgba(10, 40, 69, 0.25); // $box-shadow
```

#### `.card-body`
**Purpose**: Main content area of the card

**Bootstrap Base Styles**:
```scss
flex: 1 1 auto;
min-height: 1px;
padding: 1.125rem; // $card-spacer-x (18px)
color: null; // $card-color
```

**Responsive Behavior**:
```scss
// At viewport >= 1368px (xxl breakpoint)
padding: var(--bs-xxl-card-spacer-y) var(--bs-xxl-card-spacer-x); // 21px 24px
```

#### `.card-header`
**Purpose**: Header section of the card

**Bootstrap Base Styles**:
```scss
padding: 0.9375rem 1.125rem; // $card-spacer-y $card-spacer-x (15px 18px)
margin-bottom: 0;
color: null; // $card-cap-color
background-color: #f0f2f5; // $card-cap-bg ($gray-4)
border-bottom: 0px solid transparent; // $card-border-width solid $card-border-color
```

**Responsive Behavior**:
```scss
// At viewport >= 1368px (xxl breakpoint)
padding: var(--bs-xxl-card-spacer-y) var(--bs-xxl-card-spacer-x); // 21px 24px
```

#### `.card-footer`
**Purpose**: Footer section of the card (optional)

**Bootstrap Base Styles**:
```scss
padding: 0.9375rem 1.125rem; // $card-spacer-y $card-spacer-x (15px 18px)
color: null; // $card-cap-color
background-color: #f0f2f5; // $card-cap-bg ($gray-4)
border-top: 0px solid transparent; // $card-border-width solid $card-border-color
```

**Responsive Behavior**:
```scss
// At viewport >= 1368px (xxl breakpoint)
padding: var(--bs-xxl-card-spacer-y) var(--bs-xxl-card-spacer-x); // 21px 24px
```


## SCSS Variables

### Card Variables (ExosThemeAlpaca)

```scss
// Background color for card header/footer
$card-cap-bg: #f0f2f5; // $gray-4

// Border
$card-border-width: 0px;
$card-border-color: transparent;
$card-border-radius: 0px;

// Default padding (viewports < 1368px)
$card-spacer-x: 1.125rem; // $rem-18 (18px)
$card-spacer-y: 0.9375rem; // $rem-15 (15px)
$card-cap-padding-y: 0.9375rem; // $rem-15 (15px)

// XXL breakpoint padding (viewports >= 1368px)
$card-xxl-spacer-x: 1.5rem; // $rem-24 (24px)
$card-xxl-spacer-y: 1.3125rem; // $rem-21 (21px)
```

### CSS Variables (ExosThemeAlpaca)

```scss
--bs-xxl-card-spacer-x: 1.5rem; // $card-xxl-spacer-x (24px)
--bs-xxl-card-spacer-y: 1.3125rem; // $card-xxl-spacer-y (21px)
```

### Bootstrap Card Variables (Base)

```scss
$card-spacer-y: 0.75rem;
$card-spacer-x: 1.25rem;
$card-border-width: 1px; // $border-width
$card-border-radius: 0.25rem; // $border-radius
$card-border-color: rgba(#000, 0.125);
$card-inner-border-radius: calc(0.25rem - 1px); // subtract($card-border-radius, $card-border-width)
$card-cap-bg: rgba(#000, 0.03);
$card-cap-color: null;
$card-height: null;
$card-color: null;
$card-bg: #fff;
$card-img-overlay-padding: 1.25rem;
$card-group-margin: 9px; // $grid-gutter-width * .5
$card-deck-margin: 9px; // $card-group-margin
$card-columns-count: 3;
$card-columns-gap: 1.25rem;
$card-columns-margin: 0.75rem; // $card-spacer-y
```

### Shadow Variable
**Location**: `src/ExosThemeAlpaca/src/scss/_variables.scss:400`

```scss
$box-shadow: 0px 1px 3px rgba(10, 40, 69, 0.25);
```

### Color Variables
```scss
// Theme Colors
$primary: #066dce;
$secondary: #4a5c6c;
$dark: #0a2845;
$success: #1c7c35;
$danger: #cc3115;
$warning: #f9a824;

// Gray Colors
$gray-1: #66747f;
$gray-2: #85919e;
$gray-3: #c6ccd2;
$gray-4: #f0f2f5;
$gray-5: #f7f8fa;

// Light/Lighter Colors
$primary-light: #e4f2fe;
$primary-lighter: #eff7fe;
$secondary-light: #f0f2f5; // $gray-4
$secondary-lighter: #f7f8fa; // $gray-5
```

---


## Applied Styles Reference

### Complete `.card` Computed Styles
```scss
// Positioning & Layout
position: relative;
display: flex;
flex-direction: column;
min-width: 0;

// Dimensions
height: null;
word-wrap: break-word;

// Background & Border
background-color: #fff;
background-clip: border-box;
border: 0px solid transparent;
border-radius: 0px;

// Shadow (ExosThemeAlpaca override)
box-shadow: 0px 1px 3px rgba(10, 40, 69, 0.25);

// CSS Variables
--bs-xxl-card-spacer-x: 1.5rem;
--bs-xxl-card-spacer-y: 1.3125rem;
```

### Complete `.card-header` Computed Styles
```scss
// Default (viewports < 1368px)
padding: 0.9375rem 1.125rem; // 15px 18px
margin-bottom: 0;
color: null;
background-color: #f0f2f5;
border-bottom: 0px solid transparent;

// XXL breakpoint (viewports >= 1368px)
padding: var(--bs-xxl-card-spacer-y) var(--bs-xxl-card-spacer-x); // 21px 24px
```

### Complete `.card-body` Computed Styles
```scss
// Default (viewports < 1368px)
flex: 1 1 auto;
min-height: 1px;
padding: 1.125rem; // 18px
color: null;

// XXL breakpoint (viewports >= 1368px)
padding: var(--bs-xxl-card-spacer-y) var(--bs-xxl-card-spacer-x); // 21px 24px
```

### Complete `.card-footer` Computed Styles
```scss
// Default (viewports < 1368px)
padding: 0.9375rem 1.125rem; // 15px 18px
color: null;
background-color: #f0f2f5;
border-top: 0px solid transparent;

// XXL breakpoint (viewports >= 1368px)
padding: var(--bs-xxl-card-spacer-y) var(--bs-xxl-card-spacer-x); // 21px 24px
```


## Design Specifications

### Card Composition
A card contains **3 sub-elements**:
1. **Header** - Usually for navigation tabs or card title
2. **Body** - Main content area
3. **Footer** - Usually for action buttons (optional)


## Validation Checklist

When comparing a Figma design to this specification, check:

### Structure Validation
- [ ] Does it have the three-div structure (`card` > `card-header`/`card-body`/`card-footer`)?
- [ ] Are the appropriate Bootstrap classes used (`.card`, `.card-header`, `.card-body`, `.card-footer`)?

### Style Validation - Card Container
- [ ] Shadow: `0px 1px 3px rgba(10, 40, 69, 0.25)`
- [ ] Border-radius: `0px`
- [ ] Border: `0px solid transparent`
- [ ] Background: `#fff`

### Style Validation - Card Header
- [ ] Default padding: `15px 18px` (or `21px 24px` at xxl breakpoint)
- [ ] Background: `#f0f2f5` (unless overridden with `bg-transparent`)
- [ ] Border-bottom: `0px solid transparent` (unless overridden with `.border-bottom`)

### Style Validation - Card Body
- [ ] Default padding: `18px` (or `21px 24px` at xxl breakpoint)
- [ ] Flex: `1 1 auto`

### Style Validation - Card Footer
- [ ] Default padding: `15px 18px` (or `21px 24px` at xxl breakpoint)
- [ ] Background: `#f0f2f5` (unless overridden with `bg-transparent`)
- [ ] Border-top: `0px solid transparent`
