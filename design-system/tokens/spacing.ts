/**
 * Spacing Design Tokens
 *
 * Extracted from Figma button component spacing
 * Used for padding, margins, gaps, etc.
 */

export const spacing = {
  /** 6px - Internal gap between icon and text */
  1: '6px',
  /** 10px - Padding for icon-only buttons (medium) */
  2: '10px',
  /** 13px - Horizontal padding for buttons with text (small/medium) */
  3: '13px',
  /** 24px - Horizontal padding for XLarge buttons */
  6: '24px',
} as const;

export type Spacing = typeof spacing;
