/**
 * Pagination Component
 *
 * Navigation for paginated content with page numbers and arrow controls.
 *
 * Figma: Matches Pagination in Spark Components
 *
 * @example
 * <Pagination
 *   currentPage={2}
 *   totalPages={10}
 *   onPageChange={(page) => console.log('Page:', page)}
 * />
 */
import React from 'react';
export interface PaginationProps {
    /** Current active page (1-indexed) */
    currentPage: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Optional CSS class name */
    className?: string;
    /** Maximum number of page buttons to show (default: 10) */
    maxPageButtons?: number;
}
export declare const Pagination: React.FC<PaginationProps>;
