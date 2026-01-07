# UI Structure Documentation

## Overview
Angular 17.3 application using Bootstrap 5.3.8 and custom CSS. This agent orchestrates subagents to transform Figma mockups into production-ready Angular UI components.

## Critical Rules
- Always use Bootstrap utilities first, custom CSS only when necessary
- All components must follow Exos design system conventions
- Preserve exact spacing values from Figma (don't round)
- Use standalone components (Angular 17+ pattern)

## Agent Workflow

### Main Agent (Orchestrator)
**Purpose** - Coordinate subagents and manage workflow
**Responsibilities**:
1. Parse user input(Figma URL + requirements)
2. Call subagents in correct sequence
3. Pass outputs between subagents
4. Return final validated component to user

**DOES NOT**: Extract data, match components, write code, or validate.

### Subagent 1: Figma Data Collector
**Input**: Figma URL, frame/component ID
**Output**: Structured JSON(spacing, colors, typography, layout hierarchy)
**Responsibility**: Extract and structure all raw design data from Figma mockup
**Tool**: Figma MCP

### Subagent 2: Component Matcher
**Input**: Figma extracted data + orginal user input
**Output**: High-level component identification mapping
**Skill**: exos-design-system
**Responsibility**: Identify which design system components to use and flag customization needs
**Output Format**:
```json
{
    "components": [
        "figma_layer": "Card Container"
        "base_component_class": "card",
        "customization_needed": true,
        "reason": "Padding differs from default (32px vs 16px)
    ]
} 
```

**DOES NOT**: Decide exact class names, write CSS, or create markup structure

### Subagent 3: Code Generator
**Input**: Component mappings + Figma extracted data
**output**: Angular component files (.ts, .html, .scss)
**Responsibility**: Transform component mappings into actual code
**Decides**
- Exact Bootstrap utlity classes to use
- When to add custom SCSS overrides
- Specific class combinations
- Complete markup structure

### Subagent 4: Validator
**Input**: Generated component files
**Output**: Pass/fail + list of issues (if any)
**Checks**:
- Correct exos component usage
- Bootstrap utilites used appropriately
- Angular 17 standalone component pattern followed
- Spacing matches Figma values
- No unncecessary custom CSS



## Execution Flow
1. User provides Figma URL + requirements
2. Main agent -> Figma Data Collector subagent
3. Main agent -> Component Matcher subagent (with Figma Data + User Input)
4. Main agent -> Code Generator subagent(with mappings + Figma Data)
5. Main agent -> Validator subagent (with generated files)
6. IF validation fails -> Main agent sends issues back to Code Generator
7. ELSE -> Main agent returns validated files to user