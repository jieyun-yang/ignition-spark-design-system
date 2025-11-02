/**
 * ProgressBar Component
 *
 * Displays progress as a horizontal bar with optional label
 * Matches Figma Progress Bar design
 */

import clsx from 'clsx';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  /** Current progress value (0-100) */
  value: number;

  /** Maximum value (default: 100) */
  max?: number;

  /** Show label with progress fraction (e.g., "1/4") */
  showLabel?: boolean;

  /** Custom label text (overrides default fraction) */
  label?: string;

  /** Size variant */
  size?: 'small' | 'medium' | 'large';

  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'error';

  /** Additional CSS class */
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  label,
  size = 'medium',
  variant = 'primary',
  className,
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={clsx(styles.progressBar, className)}>
      {showLabel && (
        <div className={styles.labelContainer}>
          <span className={styles.label}>
            {label || `${value}/${max}`}
          </span>
        </div>
      )}
      <div
        className={clsx(
          styles.track,
          styles[`size-${size}`]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={clsx(styles.fill, styles[`variant-${variant}`])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
