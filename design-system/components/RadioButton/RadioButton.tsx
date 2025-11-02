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
import clsx from 'clsx';
import styles from './RadioButton.module.css';

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

export const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  invalid = false,
  className,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleChange();
    }
  };

  return (
    <label
      className={clsx(
        styles.container,
        disabled && styles.disabled,
        invalid && styles.invalid,
        className
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
        aria-invalid={invalid}
      />
      <div
        className={clsx(styles.radio, checked && styles.checked)}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
      >
        {checked && <div className={styles.dot} />}
      </div>
      <span className={styles.label}>{children}</span>
    </label>
  );
};
