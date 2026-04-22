22222# Setup Guide — Exos Copilot UI Agent

This guide gets you up and running with the Exos design system and the Copilot agent that generates components from it.

---

## What's in the zip

```
.github/
  copilot-instructions.md       ← Copilot reads this automatically on every prompt
  prompts/
    strict-mode.prompt.md       ← The workflow you invoke to generate components
  prompting-guide.md            ← How to write good prompts (read this first)
  setup-guide.md                ← This file

exos-component-registry/
  alerts.json
  badges.json
  button.json
  cards.json
  icons.json
  inputs.json
  layout.json
  modals.json
  typography.json               ← The design system component definitions
```

---

## Step 1 — Copy the files into your project

1. Drop the **`.github/`** folder into the **root** of your Angular project
2. Drop the **`exos-component-registry/`** folder into the **root** of your Angular project

Your project root should look like this:

```
my-project/
  .github/
  exos-component-registry/
  src/
  package.json
  ...
```

> **Important:** both folders must be at the root. Copilot looks for `copilot-instructions.md` in `.github/` automatically — moving it breaks the agent.

---

## Step 2 — Install the Exos design system

**2a. Add the package registry**

Create a file called `.npmrc` in the root of your project with these contents:

```
@exos:registry=https://pkgs.dev.azure.com/ServiceLink/Architecture/_packaging/Exos.DesignSystem/npm/registry/

always-auth=true
```

**2b. Install the auth tool**

Run this once globally (you only need to do this once per machine):

```bash
npm install -g vsts-npm-auth@0.37.0
```

**2c. Authenticate**

Run this in your project root:

```bash
vsts-npm-auth -config .npmrc
```

**2d. Install the package**

```bash
npm install @exos/exos-theme-alpaca --save
```

**2e. Import the styles**

Open your `styles.scss` and add this line:

```scss
@import "../node_modules/@exos/exos-theme-alpaca/src/main";
```

---

## Step 3 — Enable GitHub Copilot in your IDE

- **VS Code** — install the [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and sign in
- **JetBrains** — install the GitHub Copilot plugin from the marketplace

Once installed, Copilot will automatically pick up `.github/copilot-instructions.md` and load the design system rules on every prompt. You don't need to do anything else to activate it.

---

## Step 4 — Generate your first component

Open Copilot Chat in your IDE and type:

```
@strict-mode Build a basic card titled 'Hello World' with a text field for First Name.
```

Copilot will:
1. Read the registry files
2. Show you a plan of what it will build
3. Wait for you to type **yes** before writing any files
4. Generate the component into `src/app/components/`

---

## How to write prompts

Read **`.github/prompting-guide.md`** before you start. The short version:

- Name every element with its label and type ("a dropdown labeled Status", not "a status field")
- Use signal words for buttons: `save`, `cancel`, `delete`, `confirm`
- Describe layout in plain English: "space between", "stacked", "right-aligned", "wrapping row"
- Always provide icon class names upfront if you need icon buttons (e.g. `icon-edit`, `icon-trash`)

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Copilot ignores the design system rules | Check that `.github/copilot-instructions.md` is at the project root |
| `npm install` fails with 401 | Re-run `vsts-npm-auth -config .npmrc` to refresh your token |
| Styles not applying | Check the `@import` path in `styles.scss` matches your node_modules location |
| Component files not appearing | Confirm Copilot said "yes" was accepted — it waits for confirmation before writing |
