/**
 * Select Component
 *
 * A dropdown select input with options menu.
 * Provides visual feedback and keyboard navigation.
 *
 * Figma: Matches Select in Spark Components
 *
 * @example
 * <Select
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   placeholder="Select an option..."
 * />
 */
import React from 'react';
export interface SelectOption {
    /** Option value */
    value: string;
    /** Display label */
    label: string;
    /** Optional icon for prominent style */
    icon?: any;
    /** Optional caption for prominent style */
    caption?: string;
}
export interface SelectProps {
    /** Current selected value (string for single, array for multi) */
    value?: string | string[];
    /** Change handler (string for single, array for multi) */
    onChange?: (value: string | string[]) => void;
    /** Available options */
    options: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Error message to display below select */
    errorMessage?: string;
    /** Optional CSS class name */
    className?: string;
    /** Menu style variant */
    menuVariant?: 'simple' | 'prominent';
    /** Show clear button when value is selected */
    clearable?: boolean;
    /** Loading state - shows spinner */
    loading?: boolean;
    /** Callback when clear button is clicked */
    onClear?: () => void;
    /** Enable multi-select mode */
    multiple?: boolean;
}
export declare const Select: React.FC<SelectProps>;
