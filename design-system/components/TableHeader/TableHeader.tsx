/**
 * TableHeader Component
 *
 * A header bar for tables with search, filters, summary info, and bulk actions.
 * Used to provide filtering, search, and bulk operations for table data.
 *
 * Figma: Matches Table header in Spark Components
 *
 * @example
 * <TableHeader
 *   searchPlaceholder="Search..."
 *   onSearchChange={(value) => console.log(value)}
 *   onFiltersClick={() => console.log('Filters clicked')}
 *   resultsCount={83}
 *   totalAmount="$840,2900"
 *   bulkActions={[
 *     { label: 'Send', icon: faPaperPlane, onClick: () => {}, disabled: true },
 *     { label: 'Renew', icon: faRetweet, onClick: () => {}, disabled: true }
 *   ]}
 * />
 */

import React, { useState } from 'react';
import { Icon } from '../Icon';
import clsx from 'clsx';
import styles from './TableHeader.module.css';

export interface BulkAction {
  /** Action label */
  label: string;

  /** Optional icon name */
  icon?: string;

  /** Click handler */
  onClick: () => void;

  /** Disabled state */
  disabled?: boolean;
}

export interface TableHeaderProps {
  /** Search input placeholder */
  searchPlaceholder?: string;

  /** Search value */
  searchValue?: string;

  /** Search change handler */
  onSearchChange?: (value: string) => void;

  /** Filters button click handler */
  onFiltersClick?: () => void;

  /** Number of results */
  resultsCount?: number;

  /** Total amount display */
  totalAmount?: string;

  /** Tooltip for total amount */
  amountTooltip?: string;

  /** Bulk action buttons */
  bulkActions?: BulkAction[];

  /** Optional CSS class name */
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  searchPlaceholder = 'Search...',
  searchValue = '',
  onSearchChange,
  onFiltersClick,
  resultsCount,
  totalAmount,
  amountTooltip,
  bulkActions = [],
  className,
}) => {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchValue(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <div className={clsx(styles.tableHeader, className)}>
      {/* Left side: Search, Filters, Summary */}
      <div className={styles.leftSection}>
        {/* Search input */}
        <div className={styles.searchWrapper}>
          <Icon name="search" className={styles.searchIcon} />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={localSearchValue}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>

        {/* Filters button */}
        {onFiltersClick && (
          <button onClick={onFiltersClick} className={styles.filtersButton}>
            <Icon name="sliders" className={styles.filterIcon} />
            <span className={styles.filtersLabel}>Filters</span>
          </button>
        )}

        {/* Summary info */}
        {(resultsCount !== undefined || totalAmount) && (
          <div className={styles.summary}>
            {resultsCount !== undefined && (
              <>
                <span className={styles.resultsCount}>{resultsCount}</span>
                <span className={styles.resultsLabel}> results</span>
              </>
            )}
            {resultsCount !== undefined && totalAmount && (
              <span className={styles.separator}>•</span>
            )}
            {totalAmount && (
              <div className={styles.amountWrapper}>
                <span className={styles.amount}>{totalAmount}</span>
                {amountTooltip && (
                  <Icon
                    name="circle-question"
                    className={styles.amountIcon}
                    aria-label={amountTooltip}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right side: Bulk actions */}
      {bulkActions.length > 0 && (
        <div className={styles.bulkActions}>
          {bulkActions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              disabled={action.disabled}
              className={clsx(
                styles.bulkActionButton,
                action.disabled && styles.disabled
              )}
            >
              {action.icon && (
                <Icon name={action.icon} className={styles.bulkActionIcon} />
              )}
              <span className={styles.bulkActionLabel}>{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
