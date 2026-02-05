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
export declare const DataList: React.FC<DataListProps>;
