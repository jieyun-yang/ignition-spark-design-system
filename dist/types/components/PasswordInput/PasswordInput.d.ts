/**
 * PasswordInput Component
 *
 * A password input field with show/hide toggle and optional error message.
 * Supports validation feedback and password strength indicators.
 *
 * Figma: Matches Password Input in Spark Components
 *
 * @example
 * <PasswordInput
 *   value={password}
 *   onChange={setPassword}
 *   placeholder="Enter password"
 *   errorMessage="Password is too weak"
 * />
 */
import React from 'react';
export interface PasswordInputProps {
    /** Current password value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Error message to display below input */
    errorMessage?: string;
    /** Optional CSS class name */
    className?: string;
}
export declare const PasswordInput: React.FC<PasswordInputProps>;
