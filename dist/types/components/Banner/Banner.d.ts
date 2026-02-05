/**
 * Banner Component
 *
 * A horizontal notification banner with optional image, title, content, and actions
 * Matches Figma Banner component design
 *
 * @example
 * <Banner
 *   title="Welcome"
 *   onClose={() => console.log('closed')}
 *   primaryAction={{ label: 'Get started', onClick: handleStart }}
 * >
 *   Get started with our new features
 * </Banner>
 */
import React from 'react';
export interface BannerAction {
    label: string;
    onClick: () => void;
}
export interface BannerProps {
    /** Banner title */
    title: string;
    /** Banner content (max 2 lines recommended) */
    children: React.ReactNode;
    /** Optional image/illustration (left side) */
    image?: React.ReactNode;
    /** Primary action button */
    primaryAction?: BannerAction;
    /** Secondary action button */
    secondaryAction?: BannerAction;
    /** Callback when banner is closed */
    onClose?: () => void;
    /** Additional CSS class */
    className?: string;
}
export declare const Banner: React.FC<BannerProps>;
