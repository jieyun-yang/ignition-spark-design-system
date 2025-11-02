/**
 * Border Design Tokens
 *
 * Extracted from Figma button styles
 */

export const borders = {
  radius: {
    /** Button border radius, small elements */
    sm: '3px',
    /** Badge border radius */
    md: '4px',
    /** Dropdown border radius */
    lg: '8px',
  },
} as const;

export type Borders = typeof borders;
