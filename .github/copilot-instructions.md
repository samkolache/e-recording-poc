# Copilot Instructions — Exos UI Agent

## What This Is

This project uses the **Exos design system**. All UI is built from components defined in `exos-component-registry/`. There are two workflows available as prompt files:

- **Strict Mode** (`.github/prompts/strict-mode.prompt.md`) — registry-only. Nothing is generated that isn't in the registry.
- **Extended Mode** (`.github/prompts/extended-mode.prompt.md`) — registry first, custom Bootstrap/SCSS development for anything not in the registry.

---

## Primary Rule

Before writing any UI markup, read every `.json` file in `exos-component-registry/`. These files are the single source of truth. New files may be added — always scan the full directory.

---

## Angular Component Rules

All generated components are standalone Angular components with three files:

- `{name}.component.ts` — `standalone: true`, only imports the component actually needs
- `{name}.component.html` — markup from registry templates only
- `{name}.component.scss` — empty unless genuinely custom CSS is required

**TypeScript rules:**
- Always `standalone: true`
- Import `CommonModule`, `FormsModule` only if the template uses them
- Only add `@Input()` / `@Output()` for props the template actually binds
- No placeholder logic

**HTML rules:**
- Compose from registry templates only
- Fill all `{placeholder}` tokens with real values
- Bootstrap utility classes (`d-flex`, `gap-*`, `mb-*`, `row`, `col-*`, etc.) are always allowed as layout glue — they are not components

**SCSS rules:**
- Leave empty if Bootstrap utilities cover all needs
- Only write SCSS for values Bootstrap cannot express (custom colors, pixel-exact sizing, brand animations)

**Output path:** `src/app/components/{name}/`

---

## Inference Decision Table

When the user does not specify a variant, apply these rules. The AI must not ask the user about variants — infer silently and narrate the decision in the plan step.

### Buttons

| Signal in prompt | Variant | Color |
|---|---|---|
| Single button, no context | Contained | Primary |
| "submit", "save", "confirm", "continue", "next", "apply" | Contained | Primary |
| "cancel", "close", "dismiss", "back" | Text | Secondary |
| "reset" | Text | Secondary |
| "delete", "remove", "reject" | Contained | Danger |
| Second button alongside a primary | Outlined | Primary |
| Third button alongside primary + outlined | Text | Secondary |
| "icon button" + action word | IconOnly | Primary |
| "icon button" + destructive action | IconOnly | Danger |
| No icon class given when icon button requested → **stop and ask the user** | — | — |

### Cards

| Signal in prompt | Variant |
|---|---|
| "card" (generic) | Basic |
| "search card", "filter card", "search form" | Search |
| Anything else | Basic |

### Badges

| Signal in prompt | Variant | Color |
|---|---|---|
| "status" + active / approved / completed | Pill | Success |
| "status" + pending / waiting | Pill | Warning |
| "status" + error / failed / rejected | Pill | Danger |
| "new", "unread", a count number | Default | Danger |
| "draft", "inactive" | Pill | Secondary |
| "archived" | Pill | Dark |
| Generic "badge" or "label" | Pill | Primary |

### Modals

| Signal in prompt | Size |
|---|---|
| "modal", "dialog", "popup" (generic) | `modal-md` |
| "confirm", "are you sure", "delete confirmation" | `modal-sm` |
| "form modal", "edit modal", "multi-field" | `modal-lg` |
| Explicit size stated by user | Use that size |

### Alerts

| Signal in prompt | Variant |
|---|---|
| "success", "saved", "completed" | Success |
| "error", "failed", "could not" | Danger |
| "warning", "caution" | Warning |
| "info", "notice", "fyi" | Primary |
| "locked", "restricted" | Secondary |
| Generic "alert" | Primary |

### Inputs

| Signal in prompt | Variant |
|---|---|
| "text field", "name", "email", "phone", "search" | TextField |
| "notes", "description", "comments", "message" | Textarea |
| "date" | DatePicker |
| "time" | TimePicker |
| "dropdown", "select", "choose from list" | Select |
| "currency", "amount with $", "percentage with %" | InputGroup |
| "search with button", "input with action button" | ButtonAddon |
| "checkbox", "multi-select option" | Checkbox |
| "toggle", "switch", "on/off", "enable/disable" | Switch |
| "radio", "single choice from list", "one of" | Radio |

### Typography (auto-applied — user never specifies this)

| Context | Class pattern |
|---|---|
| Card title | `h3.t-16.fw-bold` |
| Page heading | `h1.t-18.fw-bold` |
| Section heading | `h2.t-16.fw-bold` |
| Body copy | `p.t-14` |
| Helper text, timestamps, metadata | `p.t-12.text-muted` |
| Inline error message | `p.t-12.text-danger` |

---

## Layout Inference Rules

All alignment and spacing is handled with flexbox patterns from `layout.json`. Never use margins between siblings, never use grid at the component level, never use inline styles.

### Choosing a pattern

| Signal in prompt | Pattern |
|---|---|
| "in a row", "side by side", "horizontal", "inline", "in a line" | `row-start` |
| "centered", "center aligned", "middle" | `row-center` |
| "right aligned", "pushed to the right", "end aligned" | `row-end` |
| "title and actions", "one left one right", "split", "space between" | `row-between` |
| "wrapping", "chips in a row", "tags", "badge group" | `row-wrap` |
| "equal height", "stretched", "same height in a row" | `row-stretch` |
| "stacked", "column", "top to bottom", "above and below", "vertical" | `col-start` |
| "stacked centered", "centered column" | `col-center` |
| "full width stack", "block stacked" | `col-stretch` |
| "top and bottom", "push to bottom", "header top footer bottom" | `col-between` |
| "stacked right", "right aligned stack" | `col-end` |

When no layout is stated but siblings exist, default to `col-stretch` for vertical content and `row-start` for horizontal content.

### Choosing a gap token

| Signal in prompt | Token | Class |
|---|---|---|
| "tight", "close together", icon + label, badge inline | `gap-tight` | `gap-2` |
| No gap specified (default) | `gap-default` | `gap-3` |
| "loose", "breathing room", "spaced out", major content blocks | `gap-loose` | `gap-4` |

Always add a gap token. Never leave sibling elements without one.

### Figma MCP layout mapping

When reading a Figma frame's auto-layout properties, map directly using `layout.json`'s `figmaMappingGuide.quickReference`. Do not interpret — look it up. Map `itemSpacing` to gap token: 1–10 → `gap-tight`, 11–20 → `gap-default`, 21+ → `gap-loose`.

---

## Icon Rule

Always apply the `t-18` class to every icon span. No exceptions.

If the user mentions an icon but does not provide an icon class name (e.g. `icon-edit`, `icon-delete`), **stop and ask**:

> "What icon should I use here? Please provide the icon class name (e.g. `icon-edit`, `icon-chevron-right`)."

Do not proceed until the user answers.

---

## Strict Mode — Gap Handling

In Strict Mode, if a requested element has no registry match:

1. Leave a placeholder comment in the HTML exactly where the element would go:
   ```html
   <!-- STRICT MODE: [element description] cannot be implemented with the registry -->
   ```
2. Continue building everything else
3. Report all gaps in a numbered list at the end of the response

Do not invent classes, components, or patterns outside the registry to fill gaps.
