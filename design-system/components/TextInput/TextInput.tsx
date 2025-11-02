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

import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './TextInput.module.css';

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

export const TextInput: React.FC<TextInputProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  type = 'text',
  disabled = false,
  errorMessage,
  helperText,
  className,
  required = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        type={type}
        className={clsx(
          styles.input,
          isFocused && styles.focused,
          errorMessage && styles.error,
          disabled && styles.disabled
        )}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={!!errorMessage}
      />
      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      {helperText && !errorMessage && (
        <div className={styles.helperText}>{helperText}</div>
      )}
    </div>
  );
};
