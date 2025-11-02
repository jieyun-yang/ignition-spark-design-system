/**
 * Spinner Component
 *
 * A loading spinner indicator
 * Matches Figma Spinner component design
 *
 * @example
 * <Spinner size="medium" />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Spinner.module.css';

export interface SpinnerProps {
  /** Spinner size */
  size?: 'small' | 'medium' | 'large';

  /** Spinner color */
  color?: 'primary' | 'secondary' | 'white';

  /** Additional CSS class */
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  className,
}) => {
  return (
    <div
      className={clsx(
        styles.spinner,
        styles[`size-${size}`],
        styles[`color-${color}`],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 50 50" className={styles.svg}>
        <circle
          className={styles.circle}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};
