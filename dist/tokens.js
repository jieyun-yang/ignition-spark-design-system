const e = {
  /** Primary brand colors - Purple */
  primary: {
    /** Figma: Primary/Purple/50 */
    50: "#E8E7FF",
    /** Figma: Primary/Purple/100 */
    100: "#D5D2F9",
    /** Figma: Primary/Purple/400 Brand Purple */
    400: "#7169EA",
    /** Figma: Primary/Purple/500 Buttons */
    500: "#5A51E7"
  },
  /** Orange accent colors */
  orange: {
    /** Figma: Primary/Orange/600 */
    600: "#DF320C"
  },
  /** Secondary brand colors */
  secondary: {
    blue: {
      /** Figma: Secondary/Blue/50 */
      50: "#E6F0FE",
      /** Figma: Secondary/Blue/100 */
      100: "#CFE0FC",
      /** Figma: Secondary/Blue/500 Links & buttons */
      500: "#0F65F0"
    },
    green: {
      /** Figma: Secondary/Green/50 */
      50: "#E8FDF6",
      /** Figma: Secondary/Green/100 */
      100: "#C5F6E6",
      /** Figma: Secondary/Green/500 Graphics */
      500: "#08A674"
    },
    yellow: {
      /** Figma: Secondary/Yellow/50 */
      50: "#FFF8DB",
      /** Figma: Secondary/Yellow/100 */
      100: "#FDEDAA",
      /** Figma: Secondary/Yellow/500 Graphics */
      500: "#D97706"
    },
    red: {
      /** Figma: Secondary/Red/50 */
      50: "#FDE7E7",
      /** Figma: Secondary/Red/100 */
      100: "#FECDCD",
      /** Figma: Secondary/Red/500 Links & buttons */
      500: "#DD2222"
    }
  },
  /** Gray scale for text, dividers, backgrounds */
  gray: {
    /** Figma: Gray/50 Background */
    50: "#F8F8FC",
    /** Figma: Gray/100 */
    100: "#F0F2FA",
    /** Figma: Gray/200 Dividers */
    200: "#E4E7F5",
    /** Figma: Gray/300 Borders */
    300: "#EBEBF0",
    /** Figma: Gray/400 Actionable UI */
    400: "#B7BAC7",
    /** Figma: Gray/500 Muted text */
    500: "#9B9DA8",
    /** Figma: Gray/600 Graphics */
    600: "#7B7D85",
    /** Figma: Gray/700 Tertiary text */
    700: "#5A5B60",
    /** Figma: Gray/800 Secondary text */
    800: "#3C3D40",
    /** Figma: Gray/900 Primary text */
    900: "#1E1E20"
  },
  /** Neutral colors */
  neutral: {
    beige: {
      /** Figma: Neutral/Beige/800 */
      800: "#403E3D",
      /** Figma: Old/Neutral/Beige/900 */
      900: "#201F1E"
    }
  },
  /** Base colors */
  white: "#FFFFFF",
  /** Semantic color aliases for button hierarchies */
  button: {
    primary: {
      background: "#5A51E7",
      text: "#FFFFFF"
    },
    secondary: {
      background: "#E4E7F5",
      text: "#3C3D40"
    },
    tertiary: {
      background: "transparent",
      text: "#3C3D40"
    },
    destructive: {
      background: "#DD2222",
      text: "#FFFFFF"
    },
    text: {
      background: "transparent",
      text: "#5A51E7"
    }
  },
  /** Semantic color aliases for alerts and toasts */
  status: {
    info: {
      background: "#E6F0FE",
      icon: "#CFE0FC",
      iconText: "#0F65F0"
    },
    success: {
      background: "#E8FDF6",
      icon: "#C5F6E6",
      iconText: "#08A674"
    },
    warning: {
      background: "#FFF8DB",
      icon: "#FDEDAA",
      iconText: "#D97706"
    },
    error: {
      background: "#FDE7E7",
      icon: "#FECDCD",
      iconText: "#DD2222"
    },
    premium: {
      background: "#E8E7FF",
      icon: "#D5D2F9",
      iconText: "#5A51E7"
    }
  }
}, t = {
  /** 0px - No spacing */
  0: "0",
  /** 1px - Minimal spacing */
  px: "1px",
  /** 2px - Tiny spacing (badge padding, small gaps) */
  0.5: "2px",
  /** 4px - Extra small spacing */
  1: "4px",
  /** 6px - Internal gap between icon and text */
  1.5: "6px",
  /** 8px - Small gaps */
  2: "8px",
  /** 10px - Padding for icon-only buttons (medium) */
  2.5: "10px",
  /** 12px - Medium gaps */
  3: "12px",
  /** 13px - Horizontal padding for buttons with text (small/medium) */
  3.5: "13px",
  /** 16px - Standard spacing */
  4: "16px",
  /** 24px - Horizontal padding for XLarge buttons, medium spacing */
  6: "24px",
  /** 32px - Large spacing */
  8: "32px",
  /** 40px - Extra large spacing */
  10: "40px"
}, n = {
  fontFamily: {
    /** Primary font family */
    primary: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    /** Display font family for large headings */
    display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  fontSize: {
    /** Paragraph text - Figma: Body/SF Pro Text/Paragraph */
    xs: "13px",
    /** Small buttons */
    sm: "12px",
    /** Body text - Figma: Body/SF Pro Text/Body */
    base: "14px",
    /** Heading 4 - Figma: Heading/SF Pro Text/H4 */
    lg: "16px",
    /** XLarge buttons */
    xl: "18px",
    /** Page heading - Figma: Heading/H2 */
    "1.5xl": "28px",
    /** Large headings - Figma: component-heading-large/2xl */
    "2xl": "48px"
  },
  fontWeight: {
    /** Regular weight */
    regular: 400,
    /** Medium weight for headings */
    medium: 500,
    /** Semibold weight for buttons */
    semibold: 600,
    /** Bold weight for display text */
    bold: 700
  },
  lineHeight: {
    /** Tight line height for headings */
    none: 1,
    /** Line height for body text and buttons */
    normal: 1.5
  }
}, s = {
  radius: {
    /** No radius - sharp corners */
    none: "0",
    /** Extra small - 2px */
    xs: "2px",
    /** Small - 3px (buttons, inputs) */
    sm: "3px",
    /** Medium - 4px (cards, modals) */
    md: "4px",
    /** Large - 8px (dropdowns) */
    lg: "8px",
    /** Extra large - 20px (small badges) */
    xl: "20px",
    /** Pill - 100px (fully rounded badges) */
    pill: "100px",
    /** Full - 50% (circular avatars) */
    full: "50%"
  },
  width: {
    /** Default border width */
    default: "1px",
    /** Thick border (focus states) */
    thick: "2px"
  }
}, o = {
  /** Toast shadow - elevated floating element */
  toast: "0px 0px 1px 0px rgba(23, 30, 37, 0.31), 0px 8px 12px 0px rgba(23, 30, 37, 0.15)",
  /** Drawer shadow - side panel */
  drawer: "-4px 0 12px rgba(0, 0, 0, 0.1)",
  /** Dropdown shadow - floating menu */
  dropdown: "0 4px 12px rgba(0, 0, 0, 0.1)"
}, F = {
  /** Standard illustration size from Figma (800x400px) */
  size: {
    width: 800,
    height: 400
  },
  /** Responsive illustration sizes */
  responsive: {
    /** Small size for compact layouts (400x200px) */
    small: {
      width: 400,
      height: 200
    },
    /** Medium size for standard layouts (600x300px) */
    medium: {
      width: 600,
      height: 300
    },
    /** Large size for hero sections (800x400px) */
    large: {
      width: 800,
      height: 400
    }
  },
  /** Spacing around illustrations */
  spacing: {
    /** Spacing above illustration in empty states */
    top: "24px",
    /** Spacing below illustration in empty states */
    bottom: "24px"
  }
}, a = {
  duration: {
    /** Instant - 0ms (no animation) */
    instant: "0ms",
    /** Fast - 100ms (micro-interactions) */
    fast: "100ms",
    /** Normal - 200ms (default for most transitions) */
    normal: "200ms",
    /** Slow - 300ms (complex animations) */
    slow: "300ms",
    /** Slower - 500ms (page transitions) */
    slower: "500ms"
  },
  easing: {
    /** Linear - no easing */
    linear: "linear",
    /** Ease - default browser easing */
    ease: "ease",
    /** Ease in - acceleration curve */
    easeIn: "ease-in",
    /** Ease out - deceleration curve */
    easeOut: "ease-out",
    /** Ease in out - acceleration then deceleration */
    easeInOut: "ease-in-out"
  }
}, r = {
  colors: e,
  spacing: t,
  typography: n,
  borders: s,
  shadows: o,
  illustrations: F,
  animations: a
};
export {
  a as animations,
  s as borders,
  e as colors,
  F as illustrations,
  o as shadows,
  t as spacing,
  r as tokens,
  n as typography
};
//# sourceMappingURL=tokens.js.map
