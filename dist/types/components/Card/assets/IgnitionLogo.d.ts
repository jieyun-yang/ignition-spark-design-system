/**
 * Ignition Logo Component
 *
 * Figma: Matches Logo components in Spark | Foundations
 *
 * Supports three color variants:
 * - 'spark' (orange): Default brand color (#F4502A)
 * - 'positive' (dark text with orange spark): For light backgrounds (#0D3735 + #F4502A)
 * - 'nositive' (white text with white spark): For dark backgrounds (white)
 *
 * @example
 * // Default spark (orange icon)
 * <IgnitionLogo />
 *
 * // Full logo with text - positive variant
 * <IgnitionLogo variant="positive" type="full" />
 *
 * // Full logo with text - nositive variant (for dark backgrounds)
 * <IgnitionLogo variant="nositive" type="full" />
 */
import React from 'react';
export interface IgnitionLogoProps {
    /** Logo color variant - maps to Figma "Color" property */
    variant?: 'spark' | 'positive' | 'nositive';
    /** Logo type - icon only or full logo with text */
    type?: 'icon' | 'full';
    /** Additional CSS class */
    className?: string;
    /** Width (default: auto based on type) */
    width?: number | string;
    /** Height (default: auto based on type) */
    height?: number | string;
}
export declare const IgnitionLogo: React.FC<IgnitionLogoProps>;
