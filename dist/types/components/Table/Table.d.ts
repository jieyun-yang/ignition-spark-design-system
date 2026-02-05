/**
 * Table Component
 *
 * A flexible data table component with sorting, selection, and actions
 * Matches Figma Table design
 */
import React from 'react';
import { MenuOption } from '../Menu';
export type SortDirection = 'asc' | 'desc' | null;
export interface TableColumn<T = any> {
    key: string;
    label: string;
    width?: string;
    sortable?: boolean;
    render?: (row: T, rowIndex: number) => React.ReactNode;
    align?: 'left' | 'center' | 'right';
}
export interface TableProps<T = any> {
    columns: TableColumn<T>[];
    data: T[];
    selectable?: boolean;
    selectedRows?: string[];
    onSelectionChange?: (selectedKeys: string[]) => void;
    getRowKey?: (row: T, index: number) => string;
    sortBy?: string;
    sortDirection?: SortDirection;
    onSortChange?: (key: string, direction: SortDirection) => void;
    showActions?: boolean;
    onActionClick?: (row: T, rowIndex: number) => void;
    getActionMenuOptions?: (row: T, rowIndex: number) => MenuOption[];
    emptyMessage?: string;
    className?: string;
    onRowClick?: (row: T, rowIndex: number) => void;
}
export declare function Table<T = any>(props: TableProps<T>): import("react/jsx-runtime").JSX.Element;
