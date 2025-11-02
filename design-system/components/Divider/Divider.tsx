/**
 * Divider Component
 *
 * A horizontal line used to separate content sections.
 *
 * Figma: Matches Divider in Spark Components
 *
 * @example
 * <Divider />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Divider.module.css';

export interface DividerProps {
  /** Optional CSS class name */
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={clsx(styles.divider, className)} />;
};
