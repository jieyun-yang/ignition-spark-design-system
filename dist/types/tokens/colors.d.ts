/**
 * Color Design Tokens
 *
 * Extracted from Figma design system
 * All color values are semantic and match Figma variable names
 */
export declare const colors: {
    /** Primary brand colors - Purple */
    readonly primary: {
        /** Figma: Primary/Purple/50 */
        readonly 50: "#E8E7FF";
        /** Figma: Primary/Purple/100 */
        readonly 100: "#D5D2F9";
        /** Figma: Primary/Purple/400 Brand Purple */
        readonly 400: "#7169EA";
        /** Figma: Primary/Purple/500 Buttons */
        readonly 500: "#5A51E7";
    };
    /** Orange accent colors */
    readonly orange: {
        /** Figma: Primary/Orange/600 */
        readonly 600: "#DF320C";
    };
    /** Secondary brand colors */
    readonly secondary: {
        readonly blue: {
            /** Figma: Secondary/Blue/50 */
            readonly 50: "#E6F0FE";
            /** Figma: Secondary/Blue/100 */
            readonly 100: "#CFE0FC";
            /** Figma: Secondary/Blue/500 Links & buttons */
            readonly 500: "#0F65F0";
        };
        readonly green: {
            /** Figma: Secondary/Green/50 */
            readonly 50: "#E8FDF6";
            /** Figma: Secondary/Green/100 */
            readonly 100: "#C5F6E6";
            /** Figma: Secondary/Green/500 Graphics */
            readonly 500: "#08A674";
        };
        readonly yellow: {
            /** Figma: Secondary/Yellow/50 */
            readonly 50: "#FFF8DB";
            /** Figma: Secondary/Yellow/100 */
            readonly 100: "#FDEDAA";
            /** Figma: Secondary/Yellow/500 Graphics */
            readonly 500: "#D97706";
        };
        readonly red: {
            /** Figma: Secondary/Red/50 */
            readonly 50: "#FDE7E7";
            /** Figma: Secondary/Red/100 */
            readonly 100: "#FECDCD";
            /** Figma: Secondary/Red/500 Links & buttons */
            readonly 500: "#DD2222";
        };
    };
    /** Gray scale for text, dividers, backgrounds */
    readonly gray: {
        /** Figma: Gray/50 Background */
        readonly 50: "#F8F8FC";
        /** Figma: Gray/100 */
        readonly 100: "#F0F2FA";
        /** Figma: Gray/200 Dividers */
        readonly 200: "#E4E7F5";
        /** Figma: Gray/300 Borders */
        readonly 300: "#EBEBF0";
        /** Figma: Gray/400 Actionable UI */
        readonly 400: "#B7BAC7";
        /** Figma: Gray/500 Muted text */
        readonly 500: "#9B9DA8";
        /** Figma: Gray/600 Graphics */
        readonly 600: "#7B7D85";
        /** Figma: Gray/700 Tertiary text */
        readonly 700: "#5A5B60";
        /** Figma: Gray/800 Secondary text */
        readonly 800: "#3C3D40";
        /** Figma: Gray/900 Primary text */
        readonly 900: "#1E1E20";
    };
    /** Neutral colors */
    readonly neutral: {
        readonly beige: {
            /** Figma: Neutral/Beige/800 */
            readonly 800: "#403E3D";
            /** Figma: Old/Neutral/Beige/900 */
            readonly 900: "#201F1E";
        };
    };
    /** Base colors */
    readonly white: "#FFFFFF";
    /** Semantic color aliases for button hierarchies */
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
    /** Semantic color aliases for alerts and toasts */
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
export type Colors = typeof colors;
