/**
 * Border Design Tokens
 *
 * Extracted from Figma design system
 */

export const borders = {
  radius: {
    /** No radius - sharp corners */
    none: '0',
    /** Extra small - 2px */
    xs: '2px',
    /** Small - 3px (buttons, inputs) */
    sm: '3px',
    /** Medium - 4px (cards, modals) */
    md: '4px',
    /** Large - 8px (dropdowns) */
    lg: '8px',
    /** Extra large - 20px (small badges) */
    xl: '20px',
    /** Pill - 100px (fully rounded badges) */
    pill: '100px',
    /** Full - 50% (circular avatars) */
    full: '50%',
  },
  width: {
    /** Default border width */
    default: '1px',
    /** Thick border (focus states) */
    thick: '2px',
  },
} as const;

export type Borders = typeof borders;
