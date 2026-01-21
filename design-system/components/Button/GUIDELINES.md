# Button Guidelines

## Overview

Buttons are interactive elements that enable users to perform actions. They are crucial for guiding user workflows and indicating key interaction points within an interface.

## Anatomy

| Button Type | Structure |
|:------------|:----------|
| Solid button | Icon (Optional) + Text label |
| Ghost button | Icon (Optional) + Text label |
| Text button | Icon (Optional) + Text label |
| Icon button | Icon + Container (Optional for background) |

## Variants

### Type Variants

- **Solid button:** A button with a filled background, typically used for primary actions.
- **Ghost button:** A button with a transparent background and a border, often used for secondary actions.
- **Text button:** A button with no background or border, represented only by its text label, suitable for tertiary or low-priority actions.
- **Icon button:** A button consisting solely of an icon, often used in space-constrained areas.

### Hierarchy Variants

| Hierarchy | Appearance | Description | Example Context |
|:----------|:-----------|:------------|:----------------|
| **Primary** | Purple 500, Orange 500 | Use for the most important call-to-action (CTA), usually related to the user's main goal. Aim for one primary action per screen, section, or container. *Note: Orange 500 is currently primary but may change. Users find red buttons confusing for destructive actions.* | Main CTA |
| **Secondary** | Gray 200, Purple 500 | Use for regular, non-primary actions. | Supporting actions |
| **Tertiary** | Text-only style | Use for lowest priority actions like "Close", "Done", and "Clear filters". | Dismissive actions |

### Behavioral States

| State | Solid | Ghost | Text |
|:------|:------|:------|:-----|
| Default | Standard filled appearance | Bordered, transparent background | Text only |
| Hover/Active | Darkened/highlighted | Border and background change | Underlined or colored |
| Disabled | Muted colors, no interaction | Muted border and text | Muted text |

### Loading State

During asynchronous operations, buttons indicate a loading state:
- Update label text to present continuous when loading (e.g., "Saving..." instead of "Save")

## Sizing

| Size | Description |
|:-----|:------------|
| **sm** | Use when there is not enough vertical space for the default or field-sized button. *Discuss with designers before using small buttons.* |
| **md (Default)** | This is the most common button size. |

## Best Practices

### Do's

- Aim for **one primary action per screen**, section, or container to eliminate confusion
- Always add **hover tooltips to icon-only buttons** to explain the meaning of the icon
- Update label text to present continuous when loading (e.g., "Saving...")
- Use a filled button on its own for a single important action
- Use icon + text buttons for primary actions that require high emphasis
- Position icons to the left of button text in most cases
- Use right-positioned icons only if the action navigates to different pages or contexts

### Don'ts

- **Never use two primary buttons next to one another**
- Don't use non-primary colors for primary actions
- Don't use icon-only buttons without a tooltip
- Don't use "..." (ellipses) as the primary indication for loading states
- Don't use the spinner itself as the sole indication of loading
- Don't enable the button while loading

## Buttons vs. Links

Use **buttons** for actions (submitting forms, triggering operations).
Use **links** for navigation (going to another page or section).

## Icon Usage

| Type | Guidelines |
|:-----|:-----------|
| **Icon and text button** | Use for primary actions that require high emphasis |
| **Icon button** | Use when there is limited space available |
| **Left/Right icon position** | Position icons to the left in most cases. Use right-positioned icons for navigation actions |

## Accessibility

- For icon-only buttons, always provide hover tooltips to explain the meaning or action
- Ensure sufficient color contrast between button text and background
- Use semantic HTML `<button>` elements
- Provide clear focus indicators for keyboard navigation

---

## Global Action Button (GAB) Pattern

The Global Action Button is a prominent, easily accessible component designed to highlight critical, frequent, or high-value actions within a specific context.

### When to Use GAB

- **High-Value Actions**: Actions that carry significant importance or impact
- **High-Frequency Actions**: Actions users perform repeatedly
- **Client-Specific Engagements**: Actions directly relevant to managing client interactions

### GAB Best Practices

**Do:**
- Focus on core actions fundamental to client engagements
- Maintain action integrity - ensure GAB actions don't redundantly overlap with other interface elements

**Don't:**
- Add low-value, infrequent, or easily-accessible-elsewhere actions (dilutes perceived importance)
- Clutter with too many options (causes decision fatigue)
