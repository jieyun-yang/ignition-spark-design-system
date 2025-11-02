/**
 * DataList Component
 *
 * A component for displaying key-value pairs in a structured list format.
 * Can display individual data points or full data lists with optional header.
 *
 * Figma: Matches Data list in Spark Components
 *
 * @example
 * // Single data point
 * <DataList
 *   items={[{ label: 'Name', value: 'John Doe' }]}
 *   variant="data-point"
 *   size="large"
 * />
 *
 * // Data list with header
 * <DataList
 *   header="User Information"
 *   items={[
 *     { label: 'Name', value: 'John Doe' },
 *     { label: 'Email', value: 'john@example.com' }
 *   ]}
 *   size="large"
 * />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './DataList.module.css';

export interface DataListItem {
  /** Label/key for the data point */
  label: string;

  /** Value for the data point */
  value: string | React.ReactNode;
}

export interface DataListProps {
  /** Array of data items to display */
  items: DataListItem[];

  /** Display as single data point or full list */
  variant?: 'data-point' | 'data-list';

  /** Size variant - maps to Figma "Size" property */
  size?: 'large' | 'small';

  /** Optional header text for data list */
  header?: string;

  /** Optional CSS class name */
  className?: string;
}

export const DataList: React.FC<DataListProps> = ({
  items,
  variant = 'data-list',
  size = 'large',
  header,
  className,
}) => {
  if (variant === 'data-point' && items.length > 0) {
    const item = items[0];
    return (
      <div className={clsx(styles.dataPointWrapper, styles[size], className)}>
        <div className={styles.separator} />
        <div className={styles.dataPoint}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.value}>{item.value}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.dataListContainer, styles[size], className)}>
      {header && (
        <div className={styles.header}>{header}</div>
      )}
      <div className={styles.dataList}>
        {items.map((item, index) => (
          <div key={index} className={styles.itemWrapper}>
            <div className={styles.separator} />
            <div className={styles.item}>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.value}>{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
