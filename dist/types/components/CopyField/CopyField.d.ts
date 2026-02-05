/**
 * CopyField Component
 *
 * An input field with an integrated copy button that allows users
 * to easily copy text to their clipboard.
 *
 * Figma: Matches Copy field in Spark Components
 *
 * @example
 * <CopyField
 *   value="demo.grab@example.com"
 *   onCopy={() => console.log('Copied!')}
 * />
 */
import React from 'react';
export interface CopyFieldProps {
    /** The text value to display and copy */
    value: string;
    /** Optional callback when copy button is clicked */
    onCopy?: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Optional CSS class name */
    className?: string;
    /** Optional placeholder text when empty */
    placeholder?: string;
}
export declare const CopyField: React.FC<CopyFieldProps>;
