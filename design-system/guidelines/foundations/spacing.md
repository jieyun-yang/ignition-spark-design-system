# Spacing

## Overview

The Spacing guidelines define a consistent system of values used to manage visual distance between UI elements, ensuring a harmonious and predictable user experience.

## Spacing Tokens

| Token | Value | Common Usage |
|:------|:------|:-------------|
| **zero** | 0 | Margin between menu items, field label and caption |
| **xsmall** | 4px | Margin between icon and text for menus, inputs, buttons |
| **small** | 8px | Vertical padding for menu items; margin between buttons in action bar; margin between caption and field |
| **medium** | 12px | Margin between divider and heading for modal headers |
| **large** | 16px | General section spacing |
| **xlarge** | 24px | Larger section separations |
| **xxlarge** | 32px | Major section spacing |
| **form** | 16px | Vertical spacing within forms |

## Usage Guidelines

### By Token

- **`zero` (0):** Elements with no visual separation, direct adjacencies
- **`xsmall` (4px):** Small inline separations, icon-to-text spacing
- **`small` (8px):** Common separations like vertical padding in list items, standard margins between buttons
- **`medium` (12px):** Slightly larger separations, dividing content blocks, space around prominent headings
- **`large` (16px), `xlarge` (24px), `xxlarge` (32px):** Spacing between major sections, groups of components, significant container padding

## Best Practices

### Do's
- Always use defined spacing tokens rather than arbitrary pixel values
- Maintain consistent spacing throughout the interface
- Use smaller tokens for related elements, larger tokens for distinct sections

### Don'ts
- Don't use arbitrary pixel values outside the token system
- Don't inconsistently apply spacing to similar elements
- Don't mix spacing approaches within the same context

## Known Inconsistencies

Be aware of these existing inconsistencies in the codebase:

1. **Chakra input component** has built-in label/caption gap of `0.5rem` (6.5px)
2. **Icon and text margins** vary: `0.5rem` for inputs/buttons, `0.75rem` for menus
3. **NPE action bar** uses `12px` instead of standard `8px` small token

When implementing, prefer the defined tokens for new work and align existing components where possible.
