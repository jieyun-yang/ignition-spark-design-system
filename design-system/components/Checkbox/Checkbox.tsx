/**
 * Checkbox Component
 *
 * A checkbox input with label, supporting multiple sizes and states.
 * Uses Font Awesome check icon when checked.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5992-4759
 *
 * @example
 * // Basic checkbox
 * <Checkbox checked={false} onChange={(checked) => console.log(checked)}>
 *   Accept terms
 * </Checkbox>
 *
 * @example
 * // Checkbox with validation error
 * <Checkbox checked={false} invalid onChange={(checked) => console.log(checked)}>
 *   Required field
 * </Checkbox>
 */

import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Checkbox.module.css';

export interface CheckboxProps {
  /** Label text for the checkbox */
  children?: React.ReactNode;

  /** Checked state */
  checked: boolean;

  /** Indeterminate state (for partial selection) */
  indeterminate?: boolean;

  /** Change handler - receives new checked state */
  onChange?: (checked: boolean) => void;

  /** Size variant - maps to Figma "Size" property */
  size?: 'sm' | 'md' | 'lg';

  /** Invalid/error state - maps to Figma "Invalid" property */
  invalid?: boolean;

  /** Disabled state - maps to Figma "State=Disabled" */
  disabled?: boolean;

  /** Additional CSS class names */
  className?: string;

  /** Name attribute for form submission */
  name?: string;

  /** Value attribute for form submission */
  value?: string;

  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      children,
      checked,
      indeterminate = false,
      onChange,
      size = 'md',
      invalid = false,
      disabled = false,
      className,
      name,
      value,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Set indeterminate state on the input element
    React.useEffect(() => {
      const input = inputRef.current;
      if (input) {
        input.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    // Merge refs
    React.useImperativeHandle(ref, () => inputRef.current!);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange && !disabled) {
        onChange(event.target.checked);
      }
    };

    const containerClasses = clsx(
      styles.checkbox,
      styles[`size-${size}`],
      invalid && styles.invalid,
      disabled && styles.disabled,
      className
    );

    const checkboxClasses = clsx(
      styles.checkboxInput,
      (checked || indeterminate) && styles.checked
    );

    return (
      <label className={containerClasses}>
        <input
          ref={inputRef}
          type="checkbox"
          className={styles.hiddenInput}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          name={name}
          value={value}
          aria-label={ariaLabel}
        />
        <span className={checkboxClasses}>
          {checked && !indeterminate && (
            <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
          )}
          {indeterminate && (
            <span className={styles.indeterminateIcon}>−</span>
          )}
        </span>
        {children && <span className={styles.label}>{children}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
