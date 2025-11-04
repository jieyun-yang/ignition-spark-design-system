/**
 * Color Design Tokens
 *
 * Extracted from Figma design system
 * All color values are semantic and match Figma variable names
 */

export const colors = {
  /** Primary brand colors - Purple */
  primary: {
    /** Figma: Primary/Purple/50 */
    50: '#E8E7FF',
    /** Figma: Primary/Purple/100 */
    100: '#D5D2F9',
    /** Figma: Primary/Purple/400 Brand Purple */
    400: '#7169EA',
    /** Figma: Primary/Purple/500 Buttons */
    500: '#5A51E7',
  },

  /** Orange accent colors */
  orange: {
    /** Figma: Primary/Orange/600 */
    600: '#DF320C',
  },

  /** Secondary brand colors */
  secondary: {
    blue: {
      /** Figma: Secondary/Blue/50 */
      50: '#E6F0FE',
      /** Figma: Secondary/Blue/100 */
      100: '#CFE0FC',
      /** Figma: Secondary/Blue/500 Links & buttons */
      500: '#0F65F0',
    },
    green: {
      /** Figma: Secondary/Green/50 */
      50: '#E8FDF6',
      /** Figma: Secondary/Green/100 */
      100: '#C5F6E6',
      /** Figma: Secondary/Green/500 Graphics */
      500: '#08A674',
    },
    yellow: {
      /** Figma: Secondary/Yellow/50 */
      50: '#FFF8DB',
      /** Figma: Secondary/Yellow/100 */
      100: '#FDEDAA',
      /** Figma: Secondary/Yellow/500 Graphics */
      500: '#D97706',
    },
    red: {
      /** Figma: Secondary/Red/50 */
      50: '#FDE7E7',
      /** Figma: Secondary/Red/100 */
      100: '#FECDCD',
      /** Figma: Secondary/Red/500 Links & buttons */
      500: '#DD2222',
    },
  },

  /** Gray scale for text, dividers, backgrounds */
  gray: {
    /** Figma: Gray/50 Background */
    50: '#F8F8FC',
    /** Figma: Gray/100 */
    100: '#F0F2FA',
    /** Figma: Gray/200 Dividers */
    200: '#E4E7F5',
    /** Figma: Gray/300 Borders */
    300: '#EBEBF0',
    /** Figma: Gray/400 Actionable UI */
    400: '#B7BAC7',
    /** Figma: Gray/500 Muted text */
    500: '#9B9DA8',
    /** Figma: Gray/600 Graphics */
    600: '#7B7D85',
    /** Figma: Gray/700 Tertiary text */
    700: '#5A5B60',
    /** Figma: Gray/800 Secondary text */
    800: '#3C3D40',
    /** Figma: Gray/900 Primary text */
    900: '#1E1E20',
  },

  /** Neutral colors */
  neutral: {
    beige: {
      /** Figma: Neutral/Beige/800 */
      800: '#403E3D',
      /** Figma: Old/Neutral/Beige/900 */
      900: '#201F1E',
    },
  },

  /** Base colors */
  white: '#FFFFFF',

  /** Semantic color aliases for button hierarchies */
  button: {
    primary: {
      background: '#5A51E7',
      text: '#FFFFFF',
    },
    secondary: {
      background: '#E4E7F5',
      text: '#3C3D40',
    },
    tertiary: {
      background: 'transparent',
      text: '#3C3D40',
    },
    destructive: {
      background: '#DD2222',
      text: '#FFFFFF',
    },
    text: {
      background: 'transparent',
      text: '#5A51E7',
    },
  },

  /** Semantic color aliases for alerts and toasts */
  status: {
    info: {
      background: '#E6F0FE',
      icon: '#CFE0FC',
      iconText: '#0F65F0',
    },
    success: {
      background: '#E8FDF6',
      icon: '#C5F6E6',
      iconText: '#08A674',
    },
    warning: {
      background: '#FFF8DB',
      icon: '#FDEDAA',
      iconText: '#D97706',
    },
    error: {
      background: '#FDE7E7',
      icon: '#FECDCD',
      iconText: '#DD2222',
    },
    premium: {
      background: '#E8E7FF',
      icon: '#D5D2F9',
      iconText: '#5A51E7',
    },
  },
} as const;

export type Colors = typeof colors;
