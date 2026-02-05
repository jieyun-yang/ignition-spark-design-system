/**
 * Illustration Design Tokens
 *
 * Design tokens for illustration sizing and spacing
 */
export declare const illustrations: {
    /** Standard illustration size from Figma (800x400px) */
    readonly size: {
        readonly width: 800;
        readonly height: 400;
    };
    /** Responsive illustration sizes */
    readonly responsive: {
        /** Small size for compact layouts (400x200px) */
        readonly small: {
            readonly width: 400;
            readonly height: 200;
        };
        /** Medium size for standard layouts (600x300px) */
        readonly medium: {
            readonly width: 600;
            readonly height: 300;
        };
        /** Large size for hero sections (800x400px) */
        readonly large: {
            readonly width: 800;
            readonly height: 400;
        };
    };
    /** Spacing around illustrations */
    readonly spacing: {
        /** Spacing above illustration in empty states */
        readonly top: "24px";
        /** Spacing below illustration in empty states */
        readonly bottom: "24px";
    };
};
export type Illustrations = typeof illustrations;
