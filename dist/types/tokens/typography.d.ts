/**
 * Typography Design Tokens
 *
 * Extracted from Figma text styles
 */
export declare const typography: {
    readonly fontFamily: {
        /** Primary font family */
        readonly primary: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        /** Display font family for large headings */
        readonly display: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    };
    readonly fontSize: {
        /** Paragraph text - Figma: Body/SF Pro Text/Paragraph */
        readonly xs: "13px";
        /** Small buttons */
        readonly sm: "12px";
        /** Body text - Figma: Body/SF Pro Text/Body */
        readonly base: "14px";
        /** Heading 4 - Figma: Heading/SF Pro Text/H4 */
        readonly lg: "16px";
        /** XLarge buttons */
        readonly xl: "18px";
        /** Page heading - Figma: Heading/H2 */
        readonly '1.5xl': "28px";
        /** Large headings - Figma: component-heading-large/2xl */
        readonly '2xl': "48px";
    };
    readonly fontWeight: {
        /** Regular weight */
        readonly regular: 400;
        /** Medium weight for headings */
        readonly medium: 500;
        /** Semibold weight for buttons */
        readonly semibold: 600;
        /** Bold weight for display text */
        readonly bold: 700;
    };
    readonly lineHeight: {
        /** Tight line height for headings */
        readonly none: 1;
        /** Line height for body text and buttons */
        readonly normal: 1.5;
    };
};
export type Typography = typeof typography;
