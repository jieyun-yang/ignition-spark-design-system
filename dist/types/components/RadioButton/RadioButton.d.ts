/**
 * RadioButton Component
 *
 * A radio button component for selecting one option from a group.
 * Should be used within a RadioGroup for proper behavior.
 *
 * Figma: Matches Radio Button in Spark Components
 *
 * @example
 * <RadioButton
 *   name="plan"
 *   value="basic"
 *   checked={selected === 'basic'}
 *   onChange={() => setSelected('basic')}
 * >
 *   Basic Plan
 * </RadioButton>
 */
import React from 'react';
export interface RadioButtonProps {
    /** Radio button label */
    children: React.ReactNode;
    /** Radio button name (group identifier) */
    name: string;
    /** Radio button value */
    value: string;
    /** Checked state */
    checked: boolean;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Disabled state */
    disabled?: boolean;
    /** Invalid/error state */
    invalid?: boolean;
    /** Optional CSS class name */
    className?: string;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
