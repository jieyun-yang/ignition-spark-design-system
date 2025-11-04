/**
 * Spacing Design Tokens
 *
 * Extracted from Figma button component spacing
 * Used for padding, margins, gaps, etc.
 */

export const spacing = {
  /** 4px - Minimal spacing */
  0.5: '4px',
  /** 6px - Internal gap between icon and text */
  1: '6px',
  /** 8px - Small gaps */
  1.5: '8px',
  /** 10px - Padding for icon-only buttons (medium) */
  2: '10px',
  /** 12px - Medium gaps */
  2.5: '12px',
  /** 13px - Horizontal padding for buttons with text (small/medium) */
  3: '13px',
  /** 16px - Standard spacing */
  4: '16px',
  /** 24px - Horizontal padding for XLarge buttons, medium spacing */
  6: '24px',
  /** 32px - Large spacing */
  8: '32px',
  /** 40px - Extra large spacing */
  10: '40px',
} as const;

export type Spacing = typeof spacing;
