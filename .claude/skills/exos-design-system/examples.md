# Exos Design System Component Identifier - Examples

> **Purpose**: Concrete examples demonstrating how the Component Identifier skill analyzes Figma data, identifies design system components, and detects deviations from defaults.

## Important Notes

**This skill has a focused scope:**
- ✅ It ONLY identifies design system components (card, card-header, card-body, btn-primary, etc.)
- ✅ It ONLY detects deviations from design system defaults
- ❌ It does NOT map custom nested elements (those are handled by Code Generator)
- ❌ It does NOT suggest Bootstrap utility classes (Code Generator decides those)

**Read the examples below to understand the boundaries of this skill.**

---

## Example 1: Perfect Match (No Customization)

### Scenario
A simple card with header and body that perfectly matches the design system defaults.

### Input: Figma Data (component-summary.json)
```json
{
  "componentName": "SimpleCard",
  "componentType": "card",
  "structure": {
    "header": {
      "padding": {
        "top": "15px",
        "right": "18px",
        "bottom": "15px",
        "left": "18px"
      },
      "background": {
        "color": "#f0f2f5"
      }
    },
    "body": {
      "padding": "18px"
    }
  }
}
```

### Analysis
- Header padding: `15px 18px` ✅ Matches design system default
- Header background: `#f0f2f5` ✅ Matches `$gray-4`
- Body padding: `18px` ✅ Matches `$card-spacer-x`

### Output: component-mapping.json
```json
{
  "componentName": "SimpleCard",
  "baseComponent": "card",
  "componentSummaryPath": "path/to/component-summary.json",
  "generatedAt": "2026-01-06T10:00:00Z",
  "mappings": [
    {
      "figmaNodeId": "1234:5678",
      "semanticElement": "card-header",
      "designSystemClass": "card-header",
      "deviations": {},
      "confidence": "high"
    },
    {
      "figmaNodeId": "1234:5679",
      "semanticElement": "card-body",
      "designSystemClass": "card-body",
      "deviations": {},
      "confidence": "high"
    }
  ],
  "summary": {
    "totalMappings": 2,
    "deviationsDetected": 0,
    "matchConfidence": "high"
  },
  "status": "success"
}
```

---

## Example 2: Deviations That Could Use Bootstrap Utilities

### Scenario
Card with font-weight deviation that could potentially be handled with Bootstrap utilities, but the skill still flags it as a deviation.

### Input: Figma Data
```json
{
  "componentName": "BoldTitleCard",
  "componentType": "card",
  "structure": {
    "header": {
      "padding": "15px 18px",
      "typography": {
        "fontWeight": "700"
      }
    },
    "body": {
      "padding": "18px"
    }
  }
}
```

### Analysis
- Header padding: `15px 18px` ✅ Matches design system default
- Header font-weight: `700` ❌ Differs from default `400`
- Body padding: `18px` ✅ Matches design system default

### Output: component-mapping.json
```json
{
  "componentName": "BoldTitleCard",
  "baseComponent": "card",
  "componentSummaryPath": "path/to/component-summary.json",
  "generatedAt": "2026-01-06T10:00:00Z",
  "mappings": [
    {
      "figmaNodeId": "1234:5678",
      "semanticElement": "card-header",
      "designSystemClass": "card-header",
      "deviations": {
        "fontWeight": {
          "figmaValue": "700",
          "designSystemDefault": "400",
          "needsCustomScss": true,
          "reason": "Header uses bold font weight"
        }
      },
      "confidence": "high"
    },
    {
      "figmaNodeId": "1234:5679",
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

**Note**: The skill flags the font-weight deviation. The Code Generator will decide whether to use `fw-bold` utility or custom SCSS.

---

## Example 3: Custom SCSS Required

### Scenario
The Rule Validation Card with custom padding, background color, and gap values.

### Input: Figma Data (abbreviated)
```json
{
  "componentName": "RuleValidationCard",
  "componentType": "card",
  "structure": {
    "header": {
      "padding": {
        "top": "8px",
        "right": "20px",
        "bottom": "8px",
        "left": "0px"
      },
      "background": {
        "color": "#f7f8fa"
      },
      "gap": "8px"
    }
  }
}
```

### Analysis
- Header padding: `8px 20px 8px 0` ❌ Doesn't match default `15px 18px`
- Header background: `#f7f8fa` ❌ Doesn't match default `#f0f2f5`
- Header gap: `8px` ⚠️ Could use `gap-2` (0.5rem = 8px), but need to verify spacing scale

### Design System Reference Check
From `reference/card.md`:
```scss
// Default card-header padding
padding: 0.9375rem 1.125rem; // 15px 18px

// Default card-header background
background-color: #f0f2f5; // $gray-4
```

### Output: component-mapping.json
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
        },
        "gap": {
          "figmaValue": "8px",
          "designSystemDefault": "0px",
          "needsCustomScss": true
        }
      },
      "confidence": "high"
    }
  ],
  "summary": {
    "totalMappings": 1,
    "deviationsDetected": 1,
    "matchConfidence": "high"
  },
  "status": "success"
}
```

**Note**: Only the card-header is mapped because it's the only design system component. Card-body and nested elements are handled by Code Generator.

### How Code Generator Will Use This
The Code Generator will:
1. Apply `designSystemClass: "card-header"` to the HTML element
2. Check deviations and generate custom SCSS:
```scss
.rule-validation-card {
  .card-header {
    padding: 8px 20px 8px 0;
    background-color: #f7f8fa;
    gap: 8px;
  }
}
```
3. Also analyze layout from component-summary.json and add utilities like `d-flex`, `align-items-center`, etc.

---

## Example 4: Mixed Utilities and Custom SCSS

### Scenario
Card with some customizations that can use utilities and others that need custom CSS.

### Input: Figma Data
```json
{
  "componentName": "MixedCard",
  "componentType": "card",
  "structure": {
    "header": {
      "padding": {
        "top": "15px",
        "right": "18px",
        "bottom": "15px",
        "left": "18px"
      },
      "background": {
        "color": "transparent"
      }
    },
    "body": {
      "padding": "25px"
    }
  }
}
```

### Analysis
- Header padding: ✅ Matches default (15px 18px)
- Header background: `transparent` → Can use `bg-transparent` utility ✅
- Body padding: `25px` ❌ Doesn't match default `18px` or any Bootstrap spacing value

### Bootstrap Spacing Scale Check
```scss
$spacer: 1rem; // 16px
0: 0
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 1rem (16px)
4: 1.5rem (24px)
5: 3rem (48px)
```

25px doesn't match any Bootstrap spacing value, so custom SCSS is needed.

### Output: component-mapping.json
```json
{
  "componentName": "MixedCard",
  "baseComponent": "card",
  "elements": [
    {
      "semanticElement": "card-header",
      "bootstrapClasses": ["card-header", "bg-transparent"],
      "customScss": null,
      "reason": "Uses bg-transparent utility for transparent background"
    },
    {
      "semanticElement": "card-body",
      "bootstrapClasses": ["card-body"],
      "customScss": {
        "padding": "25px"
      },
      "reason": "Padding value 25px doesn't match any Bootstrap spacing scale value (4, 8, 16, 24, 48). Custom SCSS required."
    }
  ],
  "summary": {
    "customizationsNeeded": 1,
    "bootstrapUtilitiesUsed": 1,
    "matchConfidence": "high"
  }
}
```

---

## Example 5: Ambiguous Component Type

### Scenario
Figma component that could be either a card or a list group.

### Input: Figma Data
```json
{
  "componentName": "ItemList",
  "componentType": "unknown",
  "description": "A container with multiple items, each with a border",
  "structure": {
    "root": {
      "border": "1px solid #d8dfe6"
    },
    "items": [
      {
        "padding": "12px 20px",
        "borderBottom": "1px solid #d8dfe6"
      }
    ]
  }
}
```

### Analysis
- Could be a **card** with a body containing custom list items
- Could be a **list-group** component
- Needs clarification from user or further analysis

### Output: component-mapping.json (with warning)
```json
{
  "componentName": "ItemList",
  "baseComponent": "card",
  "status": "warning",
  "warnings": [
    "Component type unclear. Detected patterns suggest 'card' or 'list-group'. Choosing 'card' based on border and container structure, but list-group may be more appropriate if items are interactive."
  ],
  "elements": [
    {
      "semanticElement": "card",
      "bootstrapClasses": ["card"],
      "customScss": {
        "border": "1px solid #d8dfe6"
      },
      "reason": "Card default has no border. Adding 1px solid border to match design.",
      "confidence": "medium"
    }
  ],
  "summary": {
    "matchConfidence": "medium"
  }
}
```

### Recommendation to User
The skill should suggest:
```
This component could be implemented as either:
1. A Card with custom list items in the body
2. A List Group component

Please clarify which approach you prefer, or I'll proceed with the Card pattern.
```

---

## Example 6: No Design System Match

### Scenario
Custom component that doesn't match any design system pattern.

### Input: Figma Data
```json
{
  "componentName": "CustomDashboard",
  "componentType": "dashboard",
  "description": "Complex dashboard layout with multiple panels and charts"
}
```

### Analysis
- No matching design system component
- Would require custom implementation

### Output: component-mapping.json (error)
```json
{
  "componentName": "CustomDashboard",
  "baseComponent": null,
  "status": "error",
  "errors": [
    "No design system reference found for component type: 'dashboard'"
  ],
  "summary": {
    "matchConfidence": "low"
  }
}
```

### Recommendation
```
This component doesn't match any existing design system patterns.

Options:
1. Break it down into smaller components (cards, buttons, etc.)
2. Create a custom component and add it to the design system
3. Use a layout grid and compose existing components

Would you like me to analyze the structure and suggest which existing components could be used?
```

---

## Example 7: Responsive Padding

### Scenario
Card with different padding at different breakpoints.

### Input: Figma Data
```json
{
  "componentName": "ResponsiveCard",
  "componentType": "card",
  "structure": {
    "header": {
      "padding": {
        "default": "15px 18px",
        "xxl": "21px 24px"
      }
    }
  }
}
```

### Analysis
- Default padding: `15px 18px` ✅ Matches design system
- XXL padding: `21px 24px` ✅ Matches design system responsive behavior

### Output: component-mapping.json
```json
{
  "componentName": "ResponsiveCard",
  "baseComponent": "card",
  "elements": [
    {
      "semanticElement": "card-header",
      "bootstrapClasses": ["card-header"],
      "customScss": null,
      "reason": "Perfect match including responsive padding at xxl breakpoint (uses CSS variables --bs-xxl-card-spacer-x and --bs-xxl-card-spacer-y)"
    }
  ],
  "summary": {
    "customizationsNeeded": 0,
    "matchConfidence": "high"
  }
}
```

---

## Example 8: Design Tokens vs Hardcoded Values

### Scenario
Card using design tokens for colors.

### Input: Figma Data
```json
{
  "componentName": "TokenCard",
  "componentType": "card",
  "structure": {
    "header": {
      "background": {
        "color": "#f7f8fa",
        "colorToken": "var(--bg/default/lighter)"
      }
    }
  },
  "elements": [
    {
      "typography": {
        "color": "#05152a",
        "colorToken": "var(--text/default/primary)"
      }
    }
  ]
}
```

### Analysis
- Background uses token: `var(--bg/default/lighter)` → Preserve token reference
- Text uses token: `var(--text/default/primary)` → Preserve token reference

### Output: component-mapping.json
```json
{
  "componentName": "TokenCard",
  "baseComponent": "card",
  "elements": [
    {
      "semanticElement": "card-header",
      "bootstrapClasses": ["card-header"],
      "customScss": {
        "backgroundColor": "var(--bg-default-lighter)"
      },
      "reason": "Background color #f7f8fa (var(--bg/default/lighter)) differs from design system default #f0f2f5. Using design token."
    },
    {
      "figmaLayer": "headerTitle",
      "semanticElement": "header-title",
      "bootstrapClasses": [],
      "customScss": {
        "color": "var(--text-default-primary)"
      },
      "typography": {
        "color": "#05152a",
        "colorToken": "var(--text/default/primary)"
      },
      "reason": "Using design token for text color"
    }
  ]
}
```

### Generated SCSS
```scss
.token-card {
  .card-header {
    // Using design token for maintainability
    background-color: var(--bg-default-lighter);
  }

  .header-title {
    color: var(--text-default-primary);
  }
}
```

---

## Workflow Example: End-to-End

### Step 1: Figma Extraction
```bash
# User runs figma-data-extractor agent
Input: https://www.figma.com/design/kclaO4H2QFzFJCn1SbCBjD/Untitled?node-id=182-570
Output: figma-mcp-extracted-data/rule-validation-card-data/component-summary.json
```

### Step 2: Component Matcher (This Skill)
```bash
# User runs component-matcher subagent with exos-design-system skill
Input: figma-mcp-extracted-data/rule-validation-card-data/component-summary.json
Process:
  1. Load component-summary.json
  2. Identify componentType: "card"
  3. Load reference/card.md
  4. Compare Figma specs to design system
  5. Identify Bootstrap classes and customizations
Output: figma-mcp-extracted-data/rule-validation-card-data/component-mapping.json
```

### Step 3: Code Generator
```bash
# User runs code-generator subagent
Input: figma-mcp-extracted-data/rule-validation-card-data/component-mapping.json
Output:
  - src/app/components/rule-validation-card/rule-validation-card.component.ts
  - src/app/components/rule-validation-card/rule-validation-card.component.html
  - src/app/components/rule-validation-card/rule-validation-card.component.scss
```

### Step 4: Validator
```bash
# User runs validator subagent
Input: Generated component files
Checks:
  - Bootstrap classes are valid
  - Angular standalone component pattern used
  - Custom SCSS matches design specs
  - No unnecessary custom CSS
Output: Validation report (pass/fail)
```

---

## Common Patterns Summary

| Pattern | Bootstrap Approach | Custom SCSS Needed? |
|---------|-------------------|---------------------|
| Standard card | `.card`, `.card-header`, `.card-body` | No |
| Transparent header | `.card-header.bg-transparent` | No |
| Bold text | `.fw-bold` | No |
| Centered text | `.text-center` | No |
| Custom padding (exact value) | None | Yes |
| Custom background color | None (unless matches theme color) | Yes |
| Custom border | `.border-bottom` (if 1px solid) | Partially |
| Custom gap (8px) | `.gap-2` (if 0.5rem = 8px) | Maybe |
| Custom gap (13px) | None | Yes |

---

## Tips for Success

1. **Always check the Bootstrap spacing scale** before deciding if custom SCSS is needed
2. **Preserve design tokens** when they're available in Figma data
3. **Use semantic classes** (`.card-header`) over utility combinations when possible
4. **Explain your reasoning** in the `reason` field for every customization
5. **Set confidence levels** accurately (`high`, `medium`, `low`)
6. **Flag warnings** when the component type is ambiguous
7. **Return errors** when required reference files are missing
