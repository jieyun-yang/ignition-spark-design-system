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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from './Pagination.module.css';

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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  maxPageButtons = 10,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxPageButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxPageButtons - 1);

    if (end - start + 1 < maxPageButtons) {
      start = Math.max(1, end - maxPageButtons + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={clsx(styles.pagination, className)}>
      {/* First page button */}
      <button
        type="button"
        className={clsx(styles.navButton, isFirstPage && styles.disabled)}
        onClick={() => onPageChange(1)}
        disabled={isFirstPage}
        aria-label="First page"
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>

      {/* Previous page button */}
      <button
        type="button"
        className={clsx(styles.navButton, isFirstPage && styles.disabled)}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        aria-label="Previous page"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Page number buttons */}
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          type="button"
          className={clsx(
            styles.pageButton,
            currentPage === pageNum && styles.active
          )}
          onClick={() => onPageChange(pageNum)}
          aria-label={`Page ${pageNum}`}
          aria-current={currentPage === pageNum ? 'page' : undefined}
        >
          {pageNum}
        </button>
      ))}

      {/* Next page button */}
      <button
        type="button"
        className={clsx(styles.navButton, isLastPage && styles.disabled)}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        aria-label="Next page"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Last page button */}
      <button
        type="button"
        className={clsx(styles.navButton, isLastPage && styles.disabled)}
        onClick={() => onPageChange(totalPages)}
        disabled={isLastPage}
        aria-label="Last page"
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  );
};
