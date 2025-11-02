/**
 * Typography Design Tokens
 *
 * Extracted from Figma text styles
 */

export const typography = {
  fontFamily: {
    /** Primary font family */
    primary: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    /** Display font family for large headings */
    display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  fontSize: {
    /** Paragraph text - Figma: Body/SF Pro Text/Paragraph */
    xs: '13px',
    /** Small buttons */
    sm: '12px',
    /** Body text - Figma: Body/SF Pro Text/Body */
    base: '14px',
    /** Heading 4 - Figma: Heading/SF Pro Text/H4 */
    lg: '16px',
    /** XLarge buttons */
    xl: '18px',
    /** Large headings - Figma: component-heading-large/2xl */
    '2xl': '48px',
  },

  fontWeight: {
    /** Regular weight */
    regular: 400,
    /** Medium weight for headings */
    medium: 500,
    /** Semibold weight for buttons */
    semibold: 600,
    /** Bold weight for display text */
    bold: 700,
  },

  lineHeight: {
    /** Tight line height for headings */
    none: 1,
    /** Line height for body text and buttons */
    normal: 1.5,
  },
} as const;

export type Typography = typeof typography;
