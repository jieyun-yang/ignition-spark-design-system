/**
 * TextArea Component
 *
 * Multi-line text input field for longer text content.
 * Supports resizable and fixed-height variants.
 *
 * Figma: Matches TextArea in Spark Components
 *
 * @example
 * <TextArea
 *   value={text}
 *   onChange={setText}
 *   placeholder="Enter your message"
 *   rows={4}
 * />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './TextArea.module.css';

export interface TextAreaProps {
  /** Current text value */
  value?: string;

  /** Change handler */
  onChange?: (value: string) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Number of visible rows */
  rows?: number;

  /** Disabled state */
  disabled?: boolean;

  /** Invalid/error state */
  invalid?: boolean;

  /** Read-only state */
  readOnly?: boolean;

  /** Whether textarea is resizable */
  resizable?: boolean;

  /** Optional CSS class name */
  className?: string;

  /** Maximum character length */
  maxLength?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = '',
  rows = 3,
  disabled = false,
  invalid = false,
  readOnly = false,
  resizable = true,
  className,
  maxLength,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <textarea
      className={clsx(
        styles.textarea,
        disabled && styles.disabled,
        invalid && styles.invalid,
        !resizable && styles.noResize,
        className
      )}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      readOnly={readOnly}
      maxLength={maxLength}
      aria-invalid={invalid}
    />
  );
};
