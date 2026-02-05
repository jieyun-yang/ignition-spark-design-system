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
import React from 'react';
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
export declare const TableHeader: React.FC<TableHeaderProps>;
