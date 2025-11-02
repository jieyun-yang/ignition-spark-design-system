/**
 * Illustration Design Tokens
 *
 * Design tokens for illustration sizing and spacing
 */

export const illustrations = {
  /** Standard illustration size from Figma (800x400px) */
  size: {
    width: 800,
    height: 400,
  },

  /** Responsive illustration sizes */
  responsive: {
    /** Small size for compact layouts (400x200px) */
    small: {
      width: 400,
      height: 200,
    },
    /** Medium size for standard layouts (600x300px) */
    medium: {
      width: 600,
      height: 300,
    },
    /** Large size for hero sections (800x400px) */
    large: {
      width: 800,
      height: 400,
    },
  },

  /** Spacing around illustrations */
  spacing: {
    /** Spacing above illustration in empty states */
    top: '24px',
    /** Spacing below illustration in empty states */
    bottom: '24px',
  },
} as const;

export type Illustrations = typeof illustrations;
