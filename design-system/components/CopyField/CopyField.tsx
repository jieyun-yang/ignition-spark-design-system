/**
 * CopyField Component
 *
 * An input field with an integrated copy button that allows users
 * to easily copy text to their clipboard.
 *
 * Figma: Matches Copy field in Spark Components
 *
 * @example
 * <CopyField
 *   value="demo.grab@example.com"
 *   onCopy={() => console.log('Copied!')}
 * />
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './CopyField.module.css';

export interface CopyFieldProps {
  /** The text value to display and copy */
  value: string;

  /** Optional callback when copy button is clicked */
  onCopy?: () => void;

  /** Disabled state */
  disabled?: boolean;

  /** Optional CSS class name */
  className?: string;

  /** Optional placeholder text when empty */
  placeholder?: string;
}

export const CopyField: React.FC<CopyFieldProps> = ({
  value,
  onCopy,
  disabled = false,
  className,
  placeholder,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (disabled || !value) return;

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopy?.();

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={clsx(styles.container, disabled && styles.disabled, className)}>
      <button
        type="button"
        className={clsx(styles.copyButton, copied && styles.copied)}
        onClick={handleCopy}
        disabled={disabled}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      >
        <Icon
          name={copied ? 'check' : 'copy'}
          className={styles.icon}
        />
        <span className={styles.buttonText}>
          {copied ? 'Copied' : 'Copy'}
        </span>
      </button>
      <input
        type="text"
        className={styles.input}
        value={value}
        readOnly
        disabled={disabled}
        placeholder={placeholder}
        aria-label="Text to copy"
      />
    </div>
  );
};
