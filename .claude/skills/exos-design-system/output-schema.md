# Component Mapping JSON Schema

> **Purpose**: Defines the structure of `component-mapping.json` - a focused file containing ONLY design system component identification and deviations from design system defaults.

---

## Overview

The component mapping JSON is a **design system validation report** that answers:
1. What design system component is this? (e.g., "card")
2. Which Figma layers map to which design system semantic elements? (e.g., "card-header", "card-body")
3. Where does the Figma design deviate from design system defaults?

**IMPORTANT**: This file does NOT duplicate data from `component-summary.json` and does NOT contain implementation details (Bootstrap utilities, HTML structure, etc.). The Code Generator reads BOTH files:
- `component-summary.json` → Complete component structure, spacing, colors, typography, layout
- `component-mapping.json` → Design system component identification and deviations ONLY

---

## Root Schema

```typescript
interface ComponentMapping {
  // Metadata
  componentName: string;           // PascalCase name for Angular component
  baseComponent: string;           // Design system component type (e.g., "card", "button", "form")
  componentSummaryPath: string;    // Path to component-summary.json
  generatedAt: string;             // ISO 8601 timestamp

  // Mappings (this is the core content)
  mappings: ElementMapping[];      // Design system mappings for Figma layers

  // Summary
  summary: MappingSummary;         // High-level overview

  // Optional
  status?: "success" | "warning" | "error";
  warnings?: string[];             // Non-blocking issues
  errors?: string[];               // Blocking issues
}
```

---

## Type Definitions

### ElementMapping

**This is the core type - identifies design system components and their deviations from defaults.**

```typescript
interface ElementMapping {
  // Link back to Figma data
  figmaNodeId: string;             // Figma node ID (to cross-reference with component-summary.json)

  // Design system identification
  semanticElement: string;         // Design system semantic name (e.g., "card-header", "card-body")
  designSystemClass: string;       // Base design system class (e.g., "card-header", "btn-primary")

  // Deviations from design system defaults
  deviations: {
    [property: string]: DeviationDetail;
  };

  // Metadata
  confidence?: "high" | "medium" | "low";  // Confidence in this mapping
}

interface DeviationDetail {
  figmaValue: string | number;           // Value from Figma design
  designSystemDefault: string | number;  // Default value from design system
  needsCustomScss: boolean;              // Whether custom SCSS is required
  reason?: string;                       // Optional explanation
}
```

**Example**:
```json
{
  "figmaNodeId": "2571:21513",
  "semanticElement": "card-header",
  "designSystemClass": "card-header",
  "deviations": {
    "padding": {
      "figmaValue": "8px 20px 8px 0",
      "designSystemDefault": "15px 18px",
      "needsCustomScss": true,
      "reason": "Asymmetric padding required for header layout"
    },
    "backgroundColor": {
      "figmaValue": "#f7f8fa",
      "designSystemDefault": "#f0f2f5",
      "needsCustomScss": true,
      "reason": "Lighter background for visual hierarchy"
    }
  },
  "confidence": "high"
}
```

**Note**: Only include properties in `deviations` that DIFFER from design system defaults. If Figma matches the design system perfectly, `deviations` should be an empty object `{}`.

**Common deviation properties**:
- `padding`, `margin` - When spacing differs from design system
- `backgroundColor`, `color`, `borderColor` - When colors differ
- `border`, `borderBottom`, `borderRadius` - When borders differ
- `fontSize`, `fontWeight`, `lineHeight` - When typography differs (rare)

---

### MappingSummary

```typescript
interface MappingSummary {
  totalMappings: number;           // Total number of design system component mappings
  deviationsDetected: number;      // Mappings with deviations from defaults
  matchConfidence: "high" | "medium" | "low";  // Overall confidence in mappings
}
```

---

## Complete Example

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
          "needsCustomScss": true,
          "reason": "Asymmetric padding for header alignment"
        },
        "backgroundColor": {
          "figmaValue": "#f7f8fa",
          "designSystemDefault": "#f0f2f5",
          "needsCustomScss": true,
          "reason": "Lighter background variant"
        },
        "gap": {
          "figmaValue": "8px",
          "designSystemDefault": "0px",
          "needsCustomScss": true,
          "reason": "Flex gap for header items"
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
  },
  "status": "success"
}
```

**Key Points:**
- Only **2 mappings** because only 2 design system components were identified (card-header and card-body)
- Custom nested elements like "rule-item", "header-title", etc. are NOT mapped (Code Generator handles those)
- `deviations` object is empty `{}` for card-body because it matches design system defaults perfectly
- No Bootstrap utility classes (d-flex, fw-bold, etc.) - that's Code Generator's responsibility

---

## Validation Rules

When generating the component mapping JSON, ensure:

1. **Required fields are present**:
   - `componentName`
   - `baseComponent`
   - `componentSummaryPath`
   - `mappings`
   - `summary`

2. **Only design system components are mapped**:
   - Every mapping must be a recognized design system component
   - Valid: "card-header", "card-body", "btn-primary", "form-control"
   - Invalid: "rule-item", "custom-banner", "app-specific-container"

3. **Deviations are accurate**:
   - Only include properties that DIFFER from design system defaults
   - Every deviation must show both `figmaValue` and `designSystemDefault`
   - `needsCustomScss` must be true when values differ

4. **Figma node IDs are correct**:
   - Every `figmaNodeId` must match a node ID in component-summary.json
   - This allows Code Generator to cross-reference both files

5. **Semantic elements match design system**:
   - Use exact design system names: "card-header", "card-body", "btn-primary"
   - Do NOT use custom/application-specific names

6. **Summary matches mappings count**:
   - `totalMappings` = `mappings.length`
   - `deviationsDetected` = count of mappings with non-empty `deviations` object

---

## Why This Schema is Focused

**Before (overly ambitious)**:
- Tried to handle ALL elements (design system + custom)
- Included Bootstrap utility class decisions
- Mixed pattern recognition with implementation
- Unclear boundaries between Component Matcher and Code Generator

**Now (focused)**:
- ONLY design system component identification
- ONLY deviations from design system defaults
- Clear separation: Component Matcher identifies, Code Generator implements
- ~50 lines of JSON for a simple card

**Code Generator workflow**:
1. Read `component-summary.json` to get ALL Figma element data
2. Read `component-mapping.json` to get design system component identifications
3. For design system elements:
   - Find matching mapping by `figmaNodeId`
   - Apply `designSystemClass` from mapping
   - Apply custom SCSS for properties in `deviations`
4. For ALL elements (design system + custom):
   - Analyze and apply Bootstrap utilities (d-flex, gap-2, fw-bold, etc.)
   - Generate HTML structure
   - Generate remaining custom SCSS

---

## Usage in Code Generator

The Code Generator agent will:
1. **Load both files**:
   - `component-summary.json` (complete Figma data for ALL elements)
   - `component-mapping.json` (design system component identification)

2. **For each element in component-summary.json**:
   - Check if it's a design system component (look up by `figmaNodeId` in mappings)
   - If design system component:
     - Apply `designSystemClass` (e.g., "card-header")
     - Apply custom SCSS for properties in `deviations`
   - For ALL elements (design system + custom):
     - Analyze Figma data and apply Bootstrap utilities (d-flex, gap-2, fw-bold)
     - Generate HTML structure
     - Generate remaining custom SCSS

3. **Generate Angular component files**:
   - `.ts` file (TypeScript component class with data structure)
   - `.html` file (complete markup with design system classes + Bootstrap utilities)
   - `.scss` file (ALL custom SCSS - from deviations + custom elements)

---

## Version History

- **v1.0** (2026-01-05): Initial schema definition
