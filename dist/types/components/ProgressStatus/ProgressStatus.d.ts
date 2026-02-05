/**
 * ProgressStatus Component
 *
 * Displays a labeled progress bar with optional counter and color variants
 * Matches Figma Progress Status design
 */
export type ProgressStatusColor = 'yellow' | 'green' | 'red' | 'none';
export interface ProgressStatusProps {
    /** Label text */
    label: string;
    /** Current value */
    current: number;
    /** Total value */
    total: number;
    /** Color variant */
    color?: ProgressStatusColor;
    /** Show counter (e.g., "1/4") */
    showCounter?: boolean;
    /** Additional CSS class */
    className?: string;
}
export declare function ProgressStatus({ label, current, total, color, showCounter, className, }: ProgressStatusProps): import("react/jsx-runtime").JSX.Element;
