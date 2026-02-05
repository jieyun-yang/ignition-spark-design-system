/**
 * Checkbox Component
 *
 * A checkbox input with label, supporting multiple sizes and states.
 * Uses Font Awesome check icon when checked.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5992-4759
 *
 * @example
 * // Basic checkbox
 * <Checkbox checked={false} onChange={(checked) => console.log(checked)}>
 *   Accept terms
 * </Checkbox>
 *
 * @example
 * // Checkbox with validation error
 * <Checkbox checked={false} invalid onChange={(checked) => console.log(checked)}>
 *   Required field
 * </Checkbox>
 */
import React from 'react';
export interface CheckboxProps {
    /** Label text for the checkbox */
    children?: React.ReactNode;
    /** Checked state */
    checked: boolean;
    /** Indeterminate state (for partial selection) */
    indeterminate?: boolean;
    /** Change handler - receives new checked state */
    onChange?: (checked: boolean) => void;
    /** Size variant - maps to Figma "Size" property */
    size?: 'sm' | 'md' | 'lg';
    /** Invalid/error state - maps to Figma "Invalid" property */
    invalid?: boolean;
    /** Disabled state - maps to Figma "State=Disabled" */
    disabled?: boolean;
    /** Additional CSS class names */
    className?: string;
    /** Name attribute for form submission */
    name?: string;
    /** Value attribute for form submission */
    value?: string;
    /** ARIA label for accessibility */
    'aria-label'?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
