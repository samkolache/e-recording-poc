---
name: exos-design-system
description: Identify design system components (Bootstrap + ExosThemeAlpaca) in Figma extracts and detect deviations from design system defaults. Maps Figma layers to semantic design system elements (card-header, card-body, etc.) and flags where customizations are needed. Use when analyzing Figma extracts to identify which design system patterns are present and where the design differs from defaults.
allowed-tools: Read, Grep, Glob
---

# Exos Design System Component Identifier

> **Purpose**: Identify which design system components are present in Figma designs and detect where the design deviates from design system defaults.

---

## Overview

This skill is the **Component Identification** step in the UI generation workflow. It takes structured Figma data (from the figma-data-extractor) and identifies which design system components are present and where they deviate from defaults.

**Input**: `component-summary.json` (complete Figma extracted data)
**Output**: `component-mapping.json` (design system component identification + deviations)
**References**: Design system specifications in `reference/` directory
**Scope**: ONLY design system components (card, button, form, etc.) - NOT custom nested elements

---

## Workflow Steps

### 1. Load Figma Data
- Read the `component-summary.json` file from the Figma extraction
- Identify the component type (e.g., "card", "button", "form", "list")
- Extract key structural elements (header, body, footer, etc.)

### 2. Load Design System Reference
- Determine which reference file to use based on component type
  - If `componentType === "card"` → Use `reference/card.md`
  - Add more component references as they become available
- Parse the design system specifications for that component

### 3. Identify Design System Components
- **Recognize design system patterns** in the Figma structure
- **Map Figma layers** to design system semantic elements
  - Example: Figma "header" section → "card-header" (semantic element)
  - Example: Figma "body" section → "card-body" (semantic element)

**Identification Rules**:
- Look for keywords in Figma layer names: "header", "body", "footer", "card", "button", etc.
- Match structural patterns (card with header/body, button groups, form layouts)
- Consider the visual hierarchy and nesting
- **ONLY identify design system components** - skip custom nested elements

### 4. Detect Deviations from Design System Defaults

For each identified design system component, compare Figma specs to design system defaults:

#### Padding Deviation
```
Figma:  padding: 12px 20px
Design System Default: padding: 15px 18px
Result: DEVIATION DETECTED → needsCustomScss: true
```

#### Color Deviation
```
Figma:  background-color: #f7f8fa
Design System Default: background-color: #f0f2f5
Result: DEVIATION DETECTED → needsCustomScss: true
```

#### Border Deviation
```
Figma:  border-bottom: 1px solid #d8dfe6
Design System Default: border-bottom: 0px solid transparent
Result: DEVIATION DETECTED → needsCustomScss: true
```

#### Perfect Match
```
Figma:  padding: 15px 18px
Design System Default: padding: 15px 18px
Result: NO DEVIATION → deviations: {}
```

**Comparison Strategy**:
- Compare ONLY against design system defaults (not Bootstrap utilities)
- Flag ALL differences, regardless of whether Bootstrap utilities could handle them
- The Code Generator will decide implementation (utilities vs custom SCSS)

### 5. Generate Component Mapping JSON

Create a structured JSON output with:
- **Base component identification** (which design system component this is)
- **Semantic element mapping** (Figma layer → design system element name)
- **Design system class** (the base class like "card-header")
- **Deviations** (structured comparison of Figma vs design system defaults)

See `output-schema.md` for complete JSON structure.

---

## Key Principles

### 1. Design System Components Only
Only map elements that are recognized design system components:
- ✅ Map: card, card-header, card-body, btn-primary, form-control
- ❌ Skip: custom nested elements, application-specific containers

### 2. Preserve Exact Values
**NEVER round or approximate values**. Record exact Figma values and exact design system defaults.
- Figma: `12px` vs Default: `15px` → Record both exactly
- Figma: `8px 20px 8px 0` vs Default: `15px 18px` → Record both exactly

### 3. Flag ALL Deviations
If Figma differs from design system default, flag it - even if Bootstrap utilities could handle it:
- Figma: `font-weight: 700` vs Default: `400` → Flag deviation
- The Code Generator will decide whether to use `fw-bold` or custom SCSS

### 4. Semantic Element Names
Use exact design system semantic names:
- ✅ "card-header", "card-body", "btn-primary"
- ❌ "header-container", "main-content", "custom-button"

### 5. Design Tokens
When Figma data includes design token references, preserve them:
```json
{
  "backgroundColor": {
    "figmaValue": "#f7f8fa (var(--bg/default/lighter))",
    "designSystemDefault": "#f0f2f5"
  }
}
```

### 6. Responsive Design System Defaults
Design system defaults may vary by breakpoint. Compare against the appropriate default:
- Card header padding: `15px 18px` (default) vs `21px 24px` (xxl breakpoint)
- Note in deviations if Figma matches one breakpoint but not another

---

## Decision Tree

```
Start with Figma element
│
├─ Is it a design system component?
│  ├─ YES → Identify semantic element name (e.g., "card-header")
│  │  │
│  │  ├─ Compare Figma specs to design system defaults
│  │  │  │
│  │  │  ├─ Identical? → deviations: {}
│  │  │  └─ Different? → Record deviations with exact values
│  │  │
│  │  └─ Add to mappings array
│  │
│  └─ NO → Skip this element (it's custom, Code Generator handles it)
│
└─ Output component mapping JSON with ONLY design system component mappings
```

---

## Error Handling

### Unsupported Component Types
If the Figma component type doesn't have a reference file:
```json
{
  "status": "error",
  "message": "No design system reference found for component type: 'modal'",
  "suggestion": "Available references: ['card']. Please create reference/modal.md or use a different component type."
}
```

### Ambiguous Component Type
If the component type is unclear:
```json
{
  "status": "warning",
  "message": "Component type unclear. Detected patterns suggest 'card' or 'panel'.",
  "recommendedType": "card",
  "confidence": "medium",
  "reason": "Contains header and body structure typical of cards"
}
```

### Missing Required Data
If the Figma data is incomplete:
```json
{
  "status": "error",
  "message": "Missing required field: 'structure.header.padding'",
  "suggestion": "Re-extract Figma data with complete specifications"
}
```

---

## Special Cases

### Case 1: No Header/Footer in Design
If Figma shows a card with **only a body** (no header/footer):
```html
<!-- Still use card structure, just omit header/footer -->
<div class="card">
  <div class="card-body">
    <!-- Content -->
  </div>
</div>
```

### Case 2: Transparent Header Background
If Figma shows `background: transparent` for header:
```html
<div class="card">
  <div class="card-header bg-transparent">
    <!-- Content -->
  </div>
  <div class="card-body">
    <!-- Content -->
  </div>
</div>
```

### Case 3: Custom Border on Specific Side
If Figma shows border only on bottom:
```html
<!-- Use Bootstrap utility if width matches -->
<div class="card-header border-bottom">
  <!-- If border width = 1px, no custom CSS needed -->
</div>

<!-- If border width differs, flag custom SCSS -->
<div class="card-header border-bottom">
  <!-- Custom SCSS: border-bottom-width: 2px -->
</div>
```

### Case 4: Grid vs Flexbox Layout
**CRITICAL RULE**: Grid is ONLY for page-level layouts. All component-level and internal layouts must use flexbox.

Figma data might show `display: grid` but design system uses `display: flex`:
- **Page layouts** (full page, major sections) → Use CSS Grid (Bootstrap grid: row, col-*)
- **Component layouts** (cards, buttons, forms, headers, bodies) → Always use Flexbox (d-flex utilities)
- **Internal element layouts** (nested items, button groups, form fields) → Always use Flexbox
- If Figma shows grid for a component → Flag as deviation and use flexbox instead
- If grid is essential for page-level layout → Flag custom CSS for grid

---

## Validation Before Output

Before generating the final JSON, validate:

1. **All Bootstrap classes exist** in Bootstrap 5.3 / ExosThemeAlpaca
2. **Custom SCSS has clear reasons** explaining why it's needed
3. **No redundant classes** (e.g., don't use both `p-3` and custom `padding: 12px`)
4. **Responsive utilities are consistent** (don't mix breakpoint systems)
5. **Color tokens match theme** (use `$primary`, `$gray-4`, etc. from ExosThemeAlpaca)

---

## Output Format

The final output should be a JSON file named `component-mapping.json` saved in the same directory as the input Figma data.

**Structure**: See `output-schema.md` for the complete JSON schema.

**Example output** (abbreviated):
```json
{
  "componentName": "RuleValidationCard",
  "baseComponent": "card",
  "componentSummaryPath": "figma-mcp-extracted-data/rule-validation-card-data/component-summary.json",
  "generatedAt": "2026-01-06T10:00:00Z",
  "mappings": [
    {
      "figmaNodeId": "2571:21513",
      "semanticElement": "card-header",
      "designSystemClass": "card-header",
      "deviations": {
        "padding": {
          "figmaValue": "8px 20px 8px 0",
          "designSystemDefault": "15px 18px",
          "needsCustomScss": true
        },
        "backgroundColor": {
          "figmaValue": "#f7f8fa",
          "designSystemDefault": "#f0f2f5",
          "needsCustomScss": true
        }
      },
      "confidence": "high"
    },
    {
      "figmaNodeId": "2571:21514",
      "semanticElement": "card-body",
      "designSystemClass": "card-body",
      "deviations": {},
      "confidence": "high"
    }
  ],
  "summary": {
    "totalMappings": 2,
    "deviationsDetected": 1,
    "matchConfidence": "high"
  }
}
```

**Note**: Only design system components are mapped. Custom nested elements (like "rule-item") are not included.

---

## Progressive Disclosure

For detailed reference on each component:
- **Card component**: See [reference/card.md](reference/card.md)
- **Output JSON schema**: See [output-schema.md](output-schema.md)
- **Examples**: See [examples.md](examples.md)

---

## Usage Notes

This skill is designed to be used by a **Component Matcher subagent** in the UI generation workflow:

1. **Figma Data Extractor** → Extracts raw data from Figma
2. **Component Matcher** (this skill) → Identifies design system components and customizations
3. **Code Generator** → Transforms mapping into Angular component files
4. **Validator** → Validates generated code against design system

When invoking this skill, ensure:
- The Figma data has been extracted and saved
- The component type is identifiable
- The relevant design system reference exists in `reference/`
