/**
 * ProgressBar Component
 *
 * Displays progress as a horizontal bar with optional label
 * Matches Figma Progress Bar design
 */
export interface ProgressBarProps {
    /** Current progress value (0-100) */
    value: number;
    /** Maximum value (default: 100) */
    max?: number;
    /** Show label with progress fraction (e.g., "1/4") */
    showLabel?: boolean;
    /** Custom label text (overrides default fraction) */
    label?: string;
    /** Size variant */
    size?: 'small' | 'medium' | 'large';
    /** Color variant */
    variant?: 'primary' | 'success' | 'warning' | 'error';
    /** Additional CSS class */
    className?: string;
}
export declare function ProgressBar({ value, max, showLabel, label, size, variant, className, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
