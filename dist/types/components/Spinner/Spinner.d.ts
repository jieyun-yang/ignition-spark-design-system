/**
 * Spinner Component
 *
 * A loading spinner indicator
 * Matches Figma Spinner component design
 *
 * @example
 * <Spinner size="medium" />
 */
import React from 'react';
export interface SpinnerProps {
    /** Spinner size */
    size?: 'small' | 'medium' | 'large';
    /** Spinner color */
    color?: 'primary' | 'secondary' | 'white';
    /** Additional CSS class */
    className?: string;
}
export declare const Spinner: React.FC<SpinnerProps>;
