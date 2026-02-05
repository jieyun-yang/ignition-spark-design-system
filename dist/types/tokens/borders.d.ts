/**
 * Border Design Tokens
 *
 * Extracted from Figma design system
 */
export declare const borders: {
    readonly radius: {
        /** No radius - sharp corners */
        readonly none: "0";
        /** Extra small - 2px */
        readonly xs: "2px";
        /** Small - 3px (buttons, inputs) */
        readonly sm: "3px";
        /** Medium - 4px (cards, modals) */
        readonly md: "4px";
        /** Large - 8px (dropdowns) */
        readonly lg: "8px";
        /** Extra large - 20px (small badges) */
        readonly xl: "20px";
        /** Pill - 100px (fully rounded badges) */
        readonly pill: "100px";
        /** Full - 50% (circular avatars) */
        readonly full: "50%";
    };
    readonly width: {
        /** Default border width */
        readonly default: "1px";
        /** Thick border (focus states) */
        readonly thick: "2px";
    };
};
export type Borders = typeof borders;
