---
name: UniPilot AI
description: A calm, capable visual system for practical academic planning.
colors:
  canvas: "oklch(0.965 0.006 100)"
  surface: "oklch(0.995 0.002 100)"
  surface-raised: "oklch(1 0 0)"
  surface-muted: "oklch(0.94 0.01 105)"
  ink: "oklch(0.19 0.018 145)"
  text: "oklch(0.27 0.018 145)"
  text-muted: "oklch(0.43 0.018 145)"
  border: "oklch(0.865 0.012 110)"
  backdrop: "oklch(0.12 0.01 145 / 0.52)"
  primary: "oklch(0.42 0.12 145)"
  primary-hover: "oklch(0.37 0.115 145)"
  primary-soft: "oklch(0.925 0.04 145)"
  success: "oklch(0.42 0.115 145)"
  warning: "oklch(0.5 0.13 75)"
  error: "oklch(0.48 0.17 28)"
  info: "oklch(0.43 0.12 245)"
typography:
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "12px"
  md: "14px"
  lg: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-raised}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "44px"
  input-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "44px"
  card-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "24px"
  nav-selected:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: "44px"
---

# Design System: UniPilot AI

## Overview

**Creative North Star: "The Well-Marked Study Desk"**

UniPilot AI feels like a study space arranged before a demanding week: every tool has a place, the next action is visible, and decoration never competes with work. Low-chroma neutral architecture supports a healthy-stem green used sparingly for decisive actions and current location.

This is a refined light product interface, not a landing page wearing dashboard furniture. It rejects generic AI-SaaS styling, dark promotional sections, glassmorphism, oversized rounded cards, excessive gradients, fake intelligence, and identical icon-card grids.

**Key Characteristics:**

- Restrained color with one deep primary accent.
- Compact hierarchy for repeated daily use.
- Brighter work surfaces over a warm low-chroma canvas.
- Familiar controls with explicit states and keyboard behavior.
- Structural adaptation at mobile, tablet, and desktop widths.

## Colors

The palette combines a barely warm neutral architecture with grounded green; amber and red remain reserved for semantic meaning.

### Primary

- **Healthy Stem:** Primary actions, active navigation, focus rings, and selected state only.
- **Pressed Stem:** Hover and active continuation of the primary.
- **Field Note:** A pale surface for selection and restrained emphasis.

### Secondary

- **Caution Amber:** Warning, due-soon, and workload attention only, always with text or an icon.
- **Overdue Red:** Error, destructive confirmation, and overdue meaning only.
- **Schedule Blue:** Informational notices and synchronization context.

### Neutral

- **Desk Canvas:** Warm low-chroma application background without beige-paper styling.
- **Work Surface:** Standard panels and navigation.
- **Raised Sheet:** Controls, dialogs, and the highest work surface.
- **Evergreen Ink:** High-contrast reading color.
- **Graphite Note:** Accessible supporting copy.

### Named Rules

**The Ten Percent Rule.** Primary green occupies no more than roughly ten percent of a screen; rarity preserves action hierarchy.

**The Semantic Reserve Rule.** Amber and red are forbidden outside warning, overdue, destructive, and error meanings.

## Typography

**Display Font:** System UI sans-serif stack
**Body Font:** System UI sans-serif stack

**Character:** One familiar, high-legibility sans family keeps the product operational. Weight, spacing, and grouping create hierarchy; ornamental type does not.

### Hierarchy

- **Headline** (700, 1.875rem, 1.2): Page titles.
- **Title** (600, 1.25rem, 1.2): Section headings.
- **Body** (400, 1rem, 1.5): Reading text capped near 70 characters.
- **Label** (600, 0.875rem, 1.4): Controls, navigation, fields, and statuses.
- **Supporting** (400, 0.875rem, 1.5): Descriptions and metadata.

### Named Rules

**The Working Scale Rule.** Fixed product steps only; fluid display sizing and oversized marketing headlines are prohibited.

**The Plain Language Rule.** Labels state the academic action directly. AI jargon never replaces task meaning.

## Elevation

The system is tonal and bordered by default. Canvas-to-surface contrast and dividers create structure; compact shadows are reserved for floating navigation, dialogs, and genuinely raised UI.

### Shadow Vocabulary

- **Low:** A two-pixel ambient shadow where separation is necessary.
- **Raised:** An eight-pixel maximum blur for dialogs and temporary layers.

### Named Rules

**The Flat-by-Default Rule.** A bordered component does not also receive a wide decorative shadow.

## Components

### Buttons

- **Shape:** Firm 12px radius; minimum height 44px.
- **Primary:** Deep green with near-white text; loading preserves label width.
- **Hover / Focus:** Darker fill plus a three-pixel focus outline.
- **Secondary / Ghost:** Border or tonal feedback without decorative elevation.
- **Disabled:** Readable, visibly inactive, and semantically disabled.

### Chips

- **Style:** Pale semantic surface, matching text, and a leading icon.
- **State:** Selected, loading, success, warning, error, and information include non-color meaning.

### Cards / Containers

- **Corner Style:** 16px maximum radius.
- **Background:** Raised Sheet for work; Work Surface for empty states.
- **Shadow Strategy:** Flat at rest.
- **Border:** One restrained neutral divider.
- **Internal Padding:** 20px mobile and 24px tablet upward.

### Inputs / Fields

- **Style:** Raised surface, visible stroke, 12px radius, 44px minimum height.
- **Focus:** Primary border plus the global focus-visible outline.
- **Error / Disabled:** Errors are programmatically associated; disabled fields remain legible.

### Navigation

Desktop uses a persistent sidebar with seven destinations. Mobile uses a five-slot bottom bar with Focus, GPA, and Workload Risk under a labelled More panel. Active routes use a tonal selected surface and `aria-current`.

### Dialogs

Confirmation uses the native dialog model, explicit title and description relationships, keyboard dismissal, and distinct cancel and confirm actions.

## Do's and Don'ts

### Do:

- **Do** keep academic actions visible and phrase them as direct verbs.
- **Do** use 12–16px radii and 44px minimum targets.
- **Do** preserve focus, semantics, non-color meaning, and reduced motion.
- **Do** adapt structure at 375px, tablet, and desktop.
- **Do** label unfinished behavior honestly as a foundation.
- **Do** state that Workload-Risk Warning is a planning aid, not a medical diagnosis.

### Don't:

- **Don't** create a plain white-only design or dark promotional sections.
- **Don't** use glassmorphism, excessive gradients, gradient text, AI sparkles, or generic AI-SaaS styling.
- **Don't** use oversized rounded cards, identical icon-card grids, hero metrics, or nested cards.
- **Don't** pair a one-pixel border with a wide decorative shadow.
- **Don't** rely on color alone for warnings and errors.
- **Don't** simulate CRUD, AI, GPA, timers, APIs, authentication, or academic data.
