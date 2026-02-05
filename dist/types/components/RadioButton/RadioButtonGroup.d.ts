/**
 * RadioButtonGroup Component
 *
 * A segmented control style radio button group for selecting one option.
 * Used as tab selectors in forms and for dividing content into groups.
 *
 * Figma: Matches "Radio button group" in Spark Components
 *
 * @example
 * <RadioButtonGroup
 *   name="billing"
 *   options={[
 *     { value: 'monthly', label: 'Monthly' },
 *     { value: 'quarterly', label: 'Quarterly' },
 *     { value: 'yearly', label: 'Yearly' }
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 */
import React from 'react';
export interface RadioButtonGroupOption {
    /** Option value */
    value: string;
    /** Display label */
    label: string;
    /** Disabled state for this option */
    disabled?: boolean;
}
export interface RadioButtonGroupProps {
    /** Group name for form submission */
    name: string;
    /** Array of options to display */
    options: RadioButtonGroupOption[];
    /** Currently selected value */
    value: string;
    /** Change handler */
    onChange: (value: string) => void;
    /** Disable all options */
    disabled?: boolean;
    /** Optional CSS class name */
    className?: string;
}
export declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;
