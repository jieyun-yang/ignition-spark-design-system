/**
 * Icon Component
 *
 * A unified icon component using local FontAwesome SVG files.
 * Uses Regular variant by default, Solid when specified.
 *
 * @example
 * // Regular icon (default)
 * <Icon name="circle-info" />
 *
 * @example
 * // Solid variant
 * <Icon name="check" variant="solid" />
 *
 * @example
 * // With size and custom class
 * <Icon name="search" size="lg" className={styles.searchIcon} />
 */
import React from 'react';
declare const regularIcons: Record<string, string>;
declare const solidIcons: Record<string, string>;
export type IconVariant = 'regular' | 'solid' | 'light';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type RegularIconName = keyof typeof regularIcons;
export type SolidIconName = keyof typeof solidIcons;
export type IconName = RegularIconName | SolidIconName;
export interface IconProps {
    /** Icon name (e.g., "circle-info", "check", "search") */
    name: string;
    /** Icon variant - defaults to "regular" per design guidelines */
    variant?: IconVariant;
    /** Icon size */
    size?: IconSize;
    /** Whether the icon should spin (for loading states) */
    spin?: boolean;
    /** Additional CSS class names */
    className?: string;
    /** Accessible label for screen readers */
    'aria-label'?: string;
    /** Hide from screen readers (decorative icon) */
    'aria-hidden'?: boolean;
}
export declare const Icon: React.FC<IconProps>;
export {};
