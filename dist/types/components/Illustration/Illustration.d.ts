/**
 * Illustration Component
 *
 * Displays SVG illustrations from the design system.
 * Supports both emotive and product-specific illustrations.
 *
 * Figma: https://www.figma.com/design/NNLKM8F3gt5dtilTEBopYh/Spark-%7C-Illustrations
 *
 * @example
 * <Illustration name="product-invoice-late" width={400} height={200} />
 *
 * @example
 * <Illustration name="emotive-space-rocket-crash" size="medium" />
 */
import React from 'react';
import type { IllustrationName } from './types';
export interface IllustrationProps {
    /** Illustration name from the design system */
    name: IllustrationName;
    /** Predefined size (uses design tokens) */
    size?: 'small' | 'medium' | 'large';
    /** Custom width in pixels (overrides size) */
    width?: number;
    /** Custom height in pixels (overrides size) */
    height?: number;
    /** Additional CSS class */
    className?: string;
    /** Alt text for accessibility (defaults to illustration title) */
    alt?: string;
    /** Whether to hide from screen readers */
    'aria-hidden'?: boolean;
}
export declare const Illustration: React.FC<IllustrationProps>;
export * from './types';
