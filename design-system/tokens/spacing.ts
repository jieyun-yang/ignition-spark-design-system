/**
 * Spacing Design Tokens
 *
 * Extracted from Figma design system
 * Used for padding, margins, gaps, etc.
 *
 * Scale: 0px, 1px, 2px, 4px, 6px, 8px, 10px, 12px, 13px, 16px, 24px, 32px, 40px
 */

export const spacing = {
  /** 0px - No spacing */
  0: '0',
  /** 1px - Minimal spacing */
  px: '1px',
  /** 2px - Tiny spacing (badge padding, small gaps) */
  0.5: '2px',
  /** 4px - Extra small spacing */
  1: '4px',
  /** 6px - Internal gap between icon and text */
  1.5: '6px',
  /** 8px - Small gaps */
  2: '8px',
  /** 10px - Padding for icon-only buttons (medium) */
  2.5: '10px',
  /** 12px - Medium gaps */
  3: '12px',
  /** 13px - Horizontal padding for buttons with text (small/medium) */
  3.5: '13px',
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
