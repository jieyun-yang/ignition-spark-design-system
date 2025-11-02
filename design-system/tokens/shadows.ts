/**
 * Shadow Design Tokens
 *
 * Extracted from Figma design system
 */

export const shadows = {
  /** Toast shadow - elevated floating element */
  toast: '0px 0px 1px 0px rgba(23, 30, 37, 0.31), 0px 8px 12px 0px rgba(23, 30, 37, 0.15)',

  /** Drawer shadow - side panel */
  drawer: '-4px 0 12px rgba(0, 0, 0, 0.1)',

  /** Dropdown shadow - floating menu */
  dropdown: '0 4px 12px rgba(0, 0, 0, 0.1)',
} as const;

export type Shadows = typeof shadows;
