# Shadows

## Overview

Shadows convey depth, emphasize hierarchy, and indicate interactivity within the user interface. They help users understand spatial relationships between elements, guiding attention and improving clarity.

## Usage Guidelines

### Use shadows to:
- **Establish Hierarchy:** Differentiate elements by importance or stacking order
- **Indicate Elevation:** Signify elements lifted from the surface (cards, panels, FABs)
- **Highlight Interaction:** Provide visual feedback for hover, focus, or press states
- **Draw Attention:** Direct focus to dialogs, tooltips, or dropdown menus

### Avoid shadows when:
- They are purely decorative without functional purpose
- They create visual clutter or reduce readability
- A flat/minimal aesthetic is intentionally desired

## Shadow Tokens

| Token | Purpose | Example Value |
|:------|:--------|:--------------|
| `--shadow-sm` | Subtle, small elevation | `0px 1px 2px rgba(0, 0, 0, 0.05)` |
| `--shadow-md` | Medium elevation for cards/panels | `0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.04)` |
| `--shadow-lg` | Large elevation for modals | `0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.05)` |
| `--shadow-xl` | Extra-large, deep elevation | `0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)` |
| `--shadow-hover` | Applied on hover for interactive elements | Derived from next higher elevation level |
| `--shadow-focus` | Applied on focus, combined with outline | Combined with focus ring color |
| `--shadow-overlay` | Full-screen overlays, modal backdrops | Large, darker shadow |

## Best Practices

### Do's
- Use predefined shadow tokens for consistency
- Ensure sufficient contrast so shadows don't interfere with readability
- Use shadows sparingly - each should serve a clear purpose
- Maintain consistent light source direction (top-down, slightly right)

### Don'ts
- Don't define custom `box-shadow` properties directly
- Don't rely solely on shadows for critical information
- Don't animate shadows aggressively (subtle transitions are acceptable)

## Code Example

```css
.card {
  background-color: var(--color-background-default);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-md);
}

.button-primary:hover {
  box-shadow: var(--shadow-hover);
}

.modal-dialog {
  box-shadow: var(--shadow-lg);
}
```

## Accessibility

- Ensure shadows don't reduce content legibility for low-vision users
- Respect `prefers-reduced-motion` for shadow transitions
- Shadows should supplement, not replace, clear focus indicators
