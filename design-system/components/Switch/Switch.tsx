/**
 * Switch Component
 *
 * A switch/toggle component for binary on/off states.
 * Provides visual feedback for state changes.
 *
 * Figma: Matches Switch in Spark Components
 *
 * @example
 * <Switch
 *   checked={isEnabled}
 *   onChange={setIsEnabled}
 *   label="Enable notifications"
 * />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Switch.module.css';

export interface SwitchProps {
  /** Checked/on state */
  checked: boolean;

  /** Change handler */
  onChange?: (checked: boolean) => void;

  /** Optional label text */
  label?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Optional CSS class name */
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleChange();
    }
  };

  return (
    <label className={clsx(styles.container, disabled && styles.disabled, className)}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        aria-checked={checked}
      />
      <div
        className={clsx(styles.switch, checked && styles.checked)}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.slider} />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
