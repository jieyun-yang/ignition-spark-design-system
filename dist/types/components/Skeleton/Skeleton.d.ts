/**
 * Skeleton Component
 *
 * Loading placeholder with shimmer animation
 * Matches Figma Skeleton design
 */
export interface SkeletonProps {
    /** Width of skeleton (CSS value or number in px) */
    width?: string | number;
    /** Height of skeleton (CSS value or number in px) */
    height?: string | number;
    /** Variant shape */
    variant?: 'text' | 'circular' | 'rectangular';
    /** Additional CSS class */
    className?: string;
}
export declare function Skeleton({ width, height, variant, className, }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
