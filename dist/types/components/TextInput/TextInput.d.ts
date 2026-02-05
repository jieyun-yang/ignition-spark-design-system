/**
 * TextInput Component
 *
 * A text input field with label and error message support.
 * Provides validation feedback and multiple input types.
 *
 * Figma: Matches Text Input in Spark Components
 *
 * @example
 * <TextInput
 *   value={email}
 *   onChange={setEmail}
 *   label="Email"
 *   type="email"
 *   errorMessage="Invalid email address"
 * />
 */
import React from 'react';
export interface TextInputProps {
    /** Current input value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Input label */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Input type */
    type?: 'text' | 'email' | 'tel' | 'url' | 'number';
    /** Disabled state */
    disabled?: boolean;
    /** Error message to display below input */
    errorMessage?: string;
    /** Helper text to display below input */
    helperText?: string;
    /** Optional CSS class name */
    className?: string;
    /** Required field indicator */
    required?: boolean;
}
export declare const TextInput: React.FC<TextInputProps>;
