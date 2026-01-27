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
import clsx from 'clsx';
import styles from './RadioButton.module.css';

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

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  value,
  onChange,
  disabled = false,
  className,
}) => {
  const handleOptionClick = (optionValue: string, optionDisabled?: boolean) => {
    if (!disabled && !optionDisabled) {
      onChange(optionValue);
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent,
    optionValue: string,
    optionDisabled?: boolean
  ) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleOptionClick(optionValue, optionDisabled);
    }
  };

  return (
    <div
      className={clsx(styles.group, className)}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((option) => {
        const isActive = value === option.value;
        const isDisabled = disabled || option.disabled;

        return (
          <label
            key={option.value}
            className={clsx(
              styles.groupOption,
              isActive && styles.groupOptionActive,
              isDisabled && styles.groupOptionDisabled
            )}
            tabIndex={isDisabled ? -1 : 0}
            onKeyDown={(e) => handleKeyDown(e, option.value, option.disabled)}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isActive}
              onChange={() => handleOptionClick(option.value, option.disabled)}
              disabled={isDisabled}
              className={styles.groupInput}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};
