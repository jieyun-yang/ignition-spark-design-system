/**
 * ProgressStatus Component
 *
 * Displays a labeled progress bar with optional counter and color variants
 * Matches Figma Progress Status design
 */

// React import not needed with new JSX transform
import clsx from 'clsx';
import styles from './ProgressStatus.module.css';

export type ProgressStatusColor = 'yellow' | 'green' | 'red' | 'none';

export interface ProgressStatusProps {
  /** Label text */
  label: string;

  /** Current value */
  current: number;

  /** Total value */
  total: number;

  /** Color variant */
  color?: ProgressStatusColor;

  /** Show counter (e.g., "1/4") */
  showCounter?: boolean;

  /** Additional CSS class */
  className?: string;
}

export function ProgressStatus({
  label,
  current,
  total,
  color = 'none',
  showCounter = false,
  className,
}: ProgressStatusProps) {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  const counterText = `${current}/${total}`;

  return (
    <div className={clsx(styles.progressStatus, className)}>
      <div className={styles.label}>{label}</div>

      <div className={styles.progressWrapper}>
        <div className={styles.progressTrack}>
          {current > 0 && (
            <div
              className={clsx(
                styles.progressFill,
                color !== 'none' && styles[`color-${color}`]
              )}
              style={{ width: `${percentage}%` }}
            />
          )}
        </div>

        {showCounter && (
          <div className={styles.counter}>{counterText}</div>
        )}
      </div>
    </div>
  );
}
