# Card Guidelines

## Overview

Cards are flexible containers designed to group and display related content in a structured, visually distinct manner. They provide clear boundaries for content sections and facilitate user interaction through consistent patterns.

This document covers the core Card component and its specialized patterns: Client Card, List Card, and Decision Card.

---

## Core Card

### When to Use

- Group related content together
- Create visual separation between sections
- Provide a contained area for interactions
- Display summarized information with actions

### Styling

Cards use consistent styling from the design system:
- Border radius for softened corners
- Optional shadow for elevation
- Consistent padding for content spacing

---

## Client Card Pattern

A flexible container displaying a collection of related items (client details, tasks, resources) in a structured list format.

### Anatomy

- **Header:** Primary title or descriptor
- **Badge:** Status or categorization indicator
- **Edit/Manage button:** Action to modify card content
- **List items:** Individual entries displayed as a list
- **Add/create more or view more button:** Action to add items or navigate to comprehensive view

### When to Use Client Card

- Group and display a coherent list of related information for a client/entity
- Provide a concise overview with clear interaction options
- Enable quick addition of new items directly from the card

### Interactions

- **Edit/Manage Button:** Navigates to edit page or opens edit modal
- **List Item Click:** Opens modal to view item details
- **Add/Create More Button:** Opens modal to create new item

### Variants

| Variant | Description |
|:--------|:------------|
| **Avatar Header** | Header incorporates Avatar for person/entity |
| **Footer Display** | Includes footer area for additional actions or summary |
| **Empty State** | Displayed when no items exist, with prompt to add first item |

### Client Card Best Practices

**Do:**
- Use header to display clear, concise title describing contents
- Display contents as a list for readability and consistency
- Provide clear affordance (button) to add new items

**Don't:**
- Display header or interactive buttons outside card boundaries
- Use nested cards for internal items - always use list format

---

## List Card Pattern

A versatile component for displaying summarized information within a list, facilitating selection or further interaction.

### Where to Use List Card

- Proposal template selection in NPE Template modal
- Selecting a workflow in NPE Add workflow flow

### Anatomy

- **Container:** Primary bounding box
- **Border:** Visual outline defining boundaries
- **Title:** Main heading of the list item
- **Description:** Secondary text with additional context
- **Icon or logo (optional):** Illustrative graphic for recognition
- **Badge (optional):** Status, count, or category indicator

### States

| State | Description |
|:------|:------------|
| **Default** | Initial, unselected, inactive state |
| **Hover** | Cursor over card, indicating interactivity |
| **Active** | Currently selected/activated |
| **Disabled** | Not interactive, cannot be selected |

### Interactions

- **Hover:** Display elevation/shadow effect
- **Icons/Logos:** Greyscale until Hover or Active state
- **Active State:** Shows preview or more detailed information

### Styling Properties

| Property | Default | Active State |
|:---------|:--------|:-------------|
| Background colour | white | purple/50 |
| Border colour | gray/200 | - |
| Border weight | 1px | - |
| Border radius | 3px | - |
| Padding | padding-large | - |
| Title style | Body/medium, Gray/900 | - |
| Description style | Body/small, Gray/800 | - |

### Workflow List Card Variant

- Selection color is `blue` (instead of purple)
- Logo remains natural color (not greyscale when unselected)

### List Card Best Practices

**Do:**
- Left-align all content for readability
- Stack cards vertically forming clear lists
- Show more information when card is selected

**Don't:**
- Centre-align content - hinders scanability
- Stack cards horizontally - disrupts list pattern
- Allow multiple selections (unless explicitly required)

---

## Decision Card Pattern

Visually prominent cards for scenarios where selection is a primary action or creates a significant fork in workflow.

### When to Use Decision Card

- Selection is a primary action on the page
- Strong visual context is needed (with accompanying icon)
- Displayed in isolation, not embedded in forms
- Creates a forked path significantly altering workflow
- Selection immediately impacts output or following view
- Use small size when more than 4 choices or less descriptive content needed

### Decision Card vs. Radio Button

| Feature | Decision Card | Radio Button |
|:--------|:--------------|:-------------|
| **Visual Prominence** | More prominent, with icon. Ideal for primary action. | Less prominent, for short text context. |
| **Display Context** | Displayed in isolation | Within single page/form |
| **Workflow Impact** | Creates forked path, immediately impacts output | Doesn't immediately impact output |
| **Number of Options** | No min/max | Max 5-6, then use Select |
| **Position** | Display horizontally, wrap | Display vertically |

### Anatomy

| Element | Description |
|:--------|:------------|
| Container | Main interactive area |
| Icon | Visual icon providing context (required) |
| Title | Main heading (required) |
| Description | Additional explanatory text (optional) |

### States

| State | Description |
|:------|:------------|
| Default | Initial, unselected state |
| Hover | Cursor over card, highlight color change |
| Selected | Card has been chosen |
| Disabled | Card is not interactive |

### Sizing Variants

| Size | Width | Description | Icon Style |
|:-----|:------|:------------|:-----------|
| **Large** | Fills parent container | Always includes description | Purple icon with surrounding circle |
| **Small** | Fixed width | No description | Gray icon only (no circle) |

### First-use Onboarding Variant (Small)

- **Pre-made Selection:** Best guess mapping to industry type from user's ledger
- **Delayed Progression:** Clicking doesn't auto-progress. Users can change selections, then click "Continue" CTA

### Decision Card Best Practices

**Do:**
- Display in isolation (within modal or dedicated full page)
- Use small size when more than 4 choices
- Display horizontally and allow wrapping

**Don't:**
- Add to busy pages or within other containers
- Create visual clutter or confusion

## Related Components

- **RadioButton:** For less prominent choices within forms
- **Select:** For more than 5-6 options
- **AppCard:** Specialized card for app representation
