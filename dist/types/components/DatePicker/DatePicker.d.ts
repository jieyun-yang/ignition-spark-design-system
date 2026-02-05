/**
 * DatePicker Component
 *
 * A date input field with calendar icon and popover for date selection.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1368-6674
 *
 * @example
 * // Basic date picker
 * <DatePicker
 *   value="16/07/2023"
 *   onChange={(value) => console.log(value)}
 *   placeholder="DD/MM/YYYY"
 * />
 *
 * @example
 * // Disabled date picker
 * <DatePicker value="01/01/2024" disabled />
 */
import React from 'react';
export interface DatePickerProps {
    /** Current date value (formatted string DD/MM/YYYY) */
    value?: string;
    /** Change handler - receives new date value */
    onChange?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS class names */
    className?: string;
    /** Name attribute for form submission */
    name?: string;
    /** ARIA label for accessibility */
    'aria-label'?: string;
}
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
