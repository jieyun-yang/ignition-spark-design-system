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

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from './PasswordInput.module.css';

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

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value = '',
  onChange,
  placeholder = 'Enter password',
  disabled = false,
  errorMessage,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div
        className={clsx(
          styles.container,
          isFocused && styles.focused,
          errorMessage && styles.error,
          disabled && styles.disabled
        )}
      >
        <input
          type={showPassword ? 'text' : 'password'}
          className={styles.input}
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
        />
        <button
          type="button"
          className={styles.toggleButton}
          onClick={toggleShowPassword}
          disabled={disabled}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          <span className={styles.toggleText}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className={styles.toggleIcon}
          />
        </button>
      </div>
      {errorMessage && (
        <div className={styles.errorMessage}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
