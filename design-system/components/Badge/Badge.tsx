/**
 * Badge Component
 *
 * A small label component for status indicators, tags, or counts.
 *
 * Figma: Matches Badge in Spark Components
 *
 * @example
 * <Badge variant="green" size="small">Active</Badge>
 * <Badge variant="red" size="large">Error</Badge>
 * <Badge variant="grey" size="tiny">Tag</Badge>
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

export interface BadgeProps {
  /** Badge text content */
  children: React.ReactNode;

  /** Color variant - maps to Figma "Color" property */
  variant?: 'green' | 'red' | 'grey' | 'yellow' | 'blue';

  /** Size variant - maps to Figma "Size" property */
  size?: 'tiny' | 'small' | 'large';

  /** Optional CSS class name */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'grey',
  size = 'tiny',
  className,
}) => {
  return (
    <span
      className={clsx(
        styles.badge,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        className
      )}
    >
      {children}
    </span>
  );
};
