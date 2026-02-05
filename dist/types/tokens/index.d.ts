/**
 * Design Tokens Index
 *
 * Central export for all design tokens
 */
import './tokens.css';
export { colors, type Colors } from './colors';
export { spacing, type Spacing } from './spacing';
export { typography, type Typography } from './typography';
export { borders, type Borders } from './borders';
export { shadows, type Shadows } from './shadows';
export { illustrations, type Illustrations } from './illustrations';
export { animations, type Animations } from './animations';
export declare const tokens: {
    readonly colors: {
        readonly primary: {
            readonly 50: "#E8E7FF";
            readonly 100: "#D5D2F9";
            readonly 400: "#7169EA";
            readonly 500: "#5A51E7";
        };
        readonly orange: {
            readonly 600: "#DF320C";
        };
        readonly secondary: {
            readonly blue: {
                readonly 50: "#E6F0FE";
                readonly 100: "#CFE0FC";
                readonly 500: "#0F65F0";
            };
            readonly green: {
                readonly 50: "#E8FDF6";
                readonly 100: "#C5F6E6";
                readonly 500: "#08A674";
            };
            readonly yellow: {
                readonly 50: "#FFF8DB";
                readonly 100: "#FDEDAA";
                readonly 500: "#D97706";
            };
            readonly red: {
                readonly 50: "#FDE7E7";
                readonly 100: "#FECDCD";
                readonly 500: "#DD2222";
            };
        };
        readonly gray: {
            readonly 50: "#F8F8FC";
            readonly 100: "#F0F2FA";
            readonly 200: "#E4E7F5";
            readonly 300: "#EBEBF0";
            readonly 400: "#B7BAC7";
            readonly 500: "#9B9DA8";
            readonly 600: "#7B7D85";
            readonly 700: "#5A5B60";
            readonly 800: "#3C3D40";
            readonly 900: "#1E1E20";
        };
        readonly neutral: {
            readonly beige: {
                readonly 800: "#403E3D";
                readonly 900: "#201F1E";
            };
        };
        readonly white: "#FFFFFF";
        readonly button: {
            readonly primary: {
                readonly background: "#5A51E7";
                readonly text: "#FFFFFF";
            };
            readonly secondary: {
                readonly background: "#E4E7F5";
                readonly text: "#3C3D40";
            };
            readonly tertiary: {
                readonly background: "transparent";
                readonly text: "#3C3D40";
            };
            readonly destructive: {
                readonly background: "#DD2222";
                readonly text: "#FFFFFF";
            };
            readonly text: {
                readonly background: "transparent";
                readonly text: "#5A51E7";
            };
        };
        readonly status: {
            readonly info: {
                readonly background: "#E6F0FE";
                readonly icon: "#CFE0FC";
                readonly iconText: "#0F65F0";
            };
            readonly success: {
                readonly background: "#E8FDF6";
                readonly icon: "#C5F6E6";
                readonly iconText: "#08A674";
            };
            readonly warning: {
                readonly background: "#FFF8DB";
                readonly icon: "#FDEDAA";
                readonly iconText: "#D97706";
            };
            readonly error: {
                readonly background: "#FDE7E7";
                readonly icon: "#FECDCD";
                readonly iconText: "#DD2222";
            };
            readonly premium: {
                readonly background: "#E8E7FF";
                readonly icon: "#D5D2F9";
                readonly iconText: "#5A51E7";
            };
        };
    };
    readonly spacing: {
        readonly 0: "0";
        readonly px: "1px";
        readonly 0.5: "2px";
        readonly 1: "4px";
        readonly 1.5: "6px";
        readonly 2: "8px";
        readonly 2.5: "10px";
        readonly 3: "12px";
        readonly 3.5: "13px";
        readonly 4: "16px";
        readonly 6: "24px";
        readonly 8: "32px";
        readonly 10: "40px";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly primary: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
            readonly display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        };
        readonly fontSize: {
            readonly xs: "13px";
            readonly sm: "12px";
            readonly base: "14px";
            readonly lg: "16px";
            readonly xl: "18px";
            readonly '1.5xl': "28px";
            readonly '2xl': "48px";
        };
        readonly fontWeight: {
            readonly regular: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
        };
        readonly lineHeight: {
            readonly none: 1;
            readonly normal: 1.5;
        };
    };
    readonly borders: {
        readonly radius: {
            readonly none: "0";
            readonly xs: "2px";
            readonly sm: "3px";
            readonly md: "4px";
            readonly lg: "8px";
            readonly xl: "20px";
            readonly pill: "100px";
            readonly full: "50%";
        };
        readonly width: {
            readonly default: "1px";
            readonly thick: "2px";
        };
    };
    readonly shadows: {
        readonly toast: "0px 0px 1px 0px rgba(23, 30, 37, 0.31), 0px 8px 12px 0px rgba(23, 30, 37, 0.15)";
        readonly drawer: "-4px 0 12px rgba(0, 0, 0, 0.1)";
        readonly dropdown: "0 4px 12px rgba(0, 0, 0, 0.1)";
    };
    readonly illustrations: {
        readonly size: {
            readonly width: 800;
            readonly height: 400;
        };
        readonly responsive: {
            readonly small: {
                readonly width: 400;
                readonly height: 200;
            };
            readonly medium: {
                readonly width: 600;
                readonly height: 300;
            };
            readonly large: {
                readonly width: 800;
                readonly height: 400;
            };
        };
        readonly spacing: {
            readonly top: "24px";
            readonly bottom: "24px";
        };
    };
    readonly animations: {
        readonly duration: {
            readonly instant: "0ms";
            readonly fast: "100ms";
            readonly normal: "200ms";
            readonly slow: "300ms";
            readonly slower: "500ms";
        };
        readonly easing: {
            readonly linear: "linear";
            readonly ease: "ease";
            readonly easeIn: "ease-in";
            readonly easeOut: "ease-out";
            readonly easeInOut: "ease-in-out";
        };
    };
};
