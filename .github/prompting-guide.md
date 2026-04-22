# Prompting Guide — Exos Strict Mode Builder

How to write prompts that produce correct, registry-accurate output the first time.

---

## The golden rule

**Describe what you see, not what you want the code to do.**
Name every element, its label, its position, and its purpose. The more specific you are, the less the AI has to infer.

---

## Cards

Always say which kind of card you need and what goes in it.

| Signal word | What you get |
|---|---|
| "card" (no qualifier) | Basic card — header + body + footer |
| "search card", "filter card" | Search card — header + form fields + Reset/Search footer |

**Describe the content structure inside the card:**
- What is the card title?
- What goes in the body — fields, text, a list?
- Are there action buttons? If so, which ones and in what order?

**Good:**
> "A basic card titled 'Claim Details' with three read-only fields stacked in the body: Policy Number, Date of Loss, and Status. Footer with a close button on the right."

**Weak:**
> "A card with some info and a button."

---

## Buttons

State the **action** and the **hierarchy** — the AI maps these to the correct variant and color automatically.

| Word in your prompt | What you get |
|---|---|
| "save", "submit", "confirm", "apply" | Contained Primary |
| "cancel", "close", "dismiss", "back" | Text Secondary |
| "delete", "remove", "reject" | Contained Danger |
| Second button alongside a primary | Outlined Primary |
| "reset" | Text Secondary |

**For icon buttons** — always include the icon class name or the AI will stop and ask:
> "An icon button using `icon-edit` to open the edit modal"

**Describe button position:**
- "right-aligned in the footer"
- "space between the title and the edit button"
- "two buttons in a row, cancel on the left, save on the right"

**Good:**
> "Footer with a Cancel button on the left and a Save button on the right."

**Weak:**
> "Add some buttons at the bottom."

---

## Layout

Layouts have two axes: the **main axis** (how items are distributed along the row or column) and the **cross axis** (how items align perpendicular to that). Name both when children have different heights or you need precise control.

### Row patterns (horizontal)

| Say this | Pattern | Classes |
|---|---|---|
| "in a row", "side by side", "inline", "left aligned" | `row-start` | `d-flex align-items-center justify-content-start` |
| "in a row, top aligned", "row flush top", "anchored to the top" | `row-start-top` | `d-flex align-items-start justify-content-start` |
| "in a row, bottom aligned", "flush to the bottom" | `row-start-bottom` | `d-flex align-items-end justify-content-start` |
| "baseline aligned", "text baseline", "align by text" | `row-baseline` | `d-flex align-items-baseline justify-content-start` |
| "centered", "center aligned", "middle" | `row-center` | `d-flex align-items-center justify-content-center` |
| "centered row, top aligned", "center top" | `row-center-top` | `d-flex align-items-start justify-content-center` |
| "right aligned", "pushed to the right", "end aligned" | `row-end` | `d-flex align-items-center justify-content-end` |
| "right aligned, top aligned", "top right" | `row-end-top` | `d-flex align-items-start justify-content-end` |
| "space between", "one left one right", "split", "title and actions" | `row-between` | `d-flex align-items-center justify-content-between` |
| "split, top aligned", "title and actions top", "one left one right top" | `row-between-top` | `d-flex align-items-start justify-content-between` |
| "split, equal height", "split stretched" | `row-between-stretch` | `d-flex align-items-stretch justify-content-between` |
| "space around", "equal space around", "distributed around" | `row-around` | `d-flex align-items-center justify-content-around` |
| "evenly spaced", "equal spacing", "uniform spacing" | `row-evenly` | `d-flex align-items-center justify-content-evenly` |
| "equal height", "stretched", "same height in a row" | `row-stretch` | `d-flex align-items-stretch justify-content-start` |
| "wrapping", "chips", "tags", "badge group", "pills" | `row-wrap` | `d-flex flex-wrap align-items-center` |
| "wrapping row, top aligned", "chips wrap top" | `row-wrap-top` | `d-flex flex-wrap align-items-start` |

### Column patterns (vertical)

| Say this | Pattern | Classes |
|---|---|---|
| "stacked", "top to bottom", "above and below", "stacked left" | `col-start` | `d-flex flex-column align-items-start` |
| "stacked centered", "centered column", "center stacked" | `col-center` | `d-flex flex-column align-items-center` |
| "stacked right", "right aligned stack" | `col-end` | `d-flex flex-column align-items-end` |
| "full width stack", "stacked full width", "block stacked" | `col-stretch` | `d-flex flex-column` |
| "vertically centered", "middle of container stacked", "centered vertically" | `col-center-vertical` | `d-flex flex-column justify-content-center` |
| "fully centered stacked", "dead center", "centered both axes column" | `col-center-vertical-center` | `d-flex flex-column justify-content-center align-items-center` |
| "pushed to bottom", "pinned to bottom", "items at the bottom" | `col-bottom` | `d-flex flex-column justify-content-end` |
| "header top footer bottom", "push to bottom", "space between vertical" | `col-between` | `d-flex flex-column justify-content-between` |
| "space around vertical", "distributed vertically around" | `col-around` | `d-flex flex-column justify-content-around` |
| "evenly spaced vertical", "uniform vertical gaps" | `col-evenly` | `d-flex flex-column justify-content-evenly` |

### When to specify the cross-axis (align-items)

Omitting the cross-axis is fine when all children are the same height. Add a `-top`, `-bottom`, `-stretch`, or `-baseline` qualifier when:
- Children have **different heights** (e.g. a multiline title next to a single-line badge) → use `-top`
- You need children to **match each other's height** (e.g. a button group) → use `-stretch`
- You're aligning **text of different sizes** in the same row → use `-baseline`

### Spacing between elements

| Say this | Gap class | Pixels |
|---|---|---|
| "tight", "close together", "8px", or just `8` | `gap-2` | 8px |
| nothing stated (default), "16px", or just `16` | `gap-3` | 16px |
| "loose", "breathing room", "spaced out", "24px", or just `24` | `gap-4` | 24px |

**Good:**
> "Title on the left, an `icon-edit` icon button on the right, space between, top-aligned."

**Weak:**
> "Put the title and button on the same line."

---

## Inputs / Form fields

Name every field with its **label** and **type**. The AI maps type words to the correct input variant.

| Say this | Input used |
|---|---|
| "text field", "name", "email", "phone" | Text input |
| "notes", "description", "comments" | Textarea |
| "date", "date of birth", "expiry date" | Date picker |
| "time" | Time picker |
| "dropdown", "select", "choose from list" | Select |
| "currency", "dollar amount", "percentage" | Input group with prefix |
| "checkbox", "multi-select option" | Checkbox |
| "toggle", "on/off switch", "enable/disable" | Switch |
| "radio", "one of", "single choice" | Radio group |

**Describe validation if needed:**
> "The email field should show an error message 'Invalid email' when invalid."

**Good:**
> "Three stacked fields: a text field for First Name, a text field for Last Name, and a dropdown for Department."

**Weak:**
> "A form with name and department."

---

## Badges

State the **meaning** of the badge — the AI picks color automatically.

| Say this | Color |
|---|---|
| "active", "approved", "completed" | Green (Success) |
| "pending", "waiting", "in review" | Yellow (Warning) |
| "error", "failed", "rejected" | Red (Danger) |
| "draft", "inactive" | Grey (Secondary) |
| "archived" | Dark |
| Count or "unread" number | Red (Danger), default shape |
| Generic "badge" or "label" | Blue (Primary) |

**Always say where it appears:**
> "A 'Pending' status badge inline next to the card title, tight spacing."

---

## Alerts

Use the trigger word and the AI picks the variant:

| Say this | Alert color |
|---|---|
| "success", "saved", "completed" | Green |
| "error", "failed", "could not" | Red |
| "warning", "caution" | Yellow |
| "info", "notice", "fyi" | Blue |
| "locked", "restricted access" | Grey |

**Say where the alert sits in the layout:**
> "A success alert at the top of the card body after the form is submitted."

---

## Modals

State the **purpose** — the AI picks the size automatically.

| Say this | Size |
|---|---|
| "confirm", "are you sure", "delete confirmation" | Small |
| "modal", "dialog", "popup" (generic) | Medium |
| "edit modal", "form modal", "multi-field" | Large |

Describe what goes inside:
- Modal title
- Body content (text, fields, list)
- Footer buttons and their actions

**Good:**
> "A small confirmation modal titled 'Delete Record' with the message 'This cannot be undone.' and two footer buttons: Cancel (text secondary) and Delete (contained danger)."

---

## Putting it all together

A complete prompt reads like a visual spec:

> "A basic card titled 'Policy Summary'.
> Card header: title on the left, a 'Pending' status badge on the right, space between, top-aligned.
> Body: three fields stacked full width — Policy Number (text), Effective Date (date picker), and Status (dropdown).
> Footer: right-aligned, Cancel button (text secondary) and Save button (contained primary), default gap between them."

That one paragraph gives the AI everything it needs: card variant, title, body field types, layout direction, button variants, button positions, badge meaning, badge position, and spacing — zero guessing required.
