/**
 * Table Component
 *
 * A flexible data table component with sorting, selection, and actions
 * Matches Figma Table design
 */

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faEllipsisVertical } from '@fortawesome/pro-regular-svg-icons';
import { Checkbox } from '../Checkbox';
import { Menu, MenuOption } from '../Menu';
import styles from './Table.module.css';

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

export function Table<T = any>(props: TableProps<T>) {
  const {
    columns,
    data,
    selectable = false,
    selectedRows = [],
    onSelectionChange,
    getRowKey = (_, index) => index.toString(),
    sortBy,
    sortDirection,
    onSortChange,
    showActions = false,
    onActionClick,
    getActionMenuOptions,
    emptyMessage = 'No data available',
    className,
    onRowClick,
  } = props;

  const [internalSort, setInternalSort] = useState<{ key: string; direction: SortDirection }>({
    key: sortBy || '',
    direction: sortDirection || null,
  });

  const [openMenuRowKey, setOpenMenuRowKey] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const [openMenuRow, setOpenMenuRow] = useState<{ row: T; rowIndex: number } | null>(null);
  const menuButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const menuPortalRef = useRef<HTMLDivElement>(null);

  const currentSortKey = sortBy !== undefined ? sortBy : internalSort.key;
  const currentSortDirection = sortDirection !== undefined ? sortDirection : internalSort.direction;

  const handleSort = (columnKey: string) => {
    const column = columns.find((col) => col.key === columnKey);
    if (!column?.sortable) return;

    let newDirection: SortDirection = 'asc';

    if (currentSortKey === columnKey) {
      if (currentSortDirection === 'asc') {
        newDirection = 'desc';
      } else if (currentSortDirection === 'desc') {
        newDirection = null;
      }
    }

    if (onSortChange) {
      onSortChange(columnKey, newDirection);
    } else {
      setInternalSort({ key: columnKey, direction: newDirection });
    }
  };

  const handleSelectAll = () => {
    if (!onSelectionChange) return;

    if (selectedRows.length === data.length) {
      onSelectionChange([]);
    } else {
      onSelectionChange(data.map((row, index) => getRowKey(row, index)));
    }
  };

  const handleSelectRow = (rowKey: string) => {
    if (!onSelectionChange) return;

    if (selectedRows.includes(rowKey)) {
      onSelectionChange(selectedRows.filter((key) => key !== rowKey));
    } else {
      onSelectionChange([...selectedRows, rowKey]);
    }
  };

  const handleActionClick = (e: React.MouseEvent, row: T, rowIndex: number, rowKey: string) => {
    e.stopPropagation();
    if (getActionMenuOptions) {
      if (openMenuRowKey === rowKey) {
        setOpenMenuRowKey(null);
        setMenuPosition(null);
        setOpenMenuRow(null);
      } else {
        const button = menuButtonRefs.current.get(rowKey);
        if (button) {
          const rect = button.getBoundingClientRect();
          // Position menu to align right edge with button's right edge
          setMenuPosition({
            top: rect.bottom + 4,
            left: rect.right,
          });
        }
        setOpenMenuRowKey(rowKey);
        setOpenMenuRow({ row, rowIndex });
      }
    } else {
      onActionClick?.(row, rowIndex);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuRowKey) {
        const button = menuButtonRefs.current.get(openMenuRowKey);
        const portal = menuPortalRef.current;
        const target = event.target as Node;

        // Don't close if clicking inside the button or menu
        if (button && !button.contains(target) && portal && !portal.contains(target)) {
          setOpenMenuRowKey(null);
          setMenuPosition(null);
          setOpenMenuRow(null);
        }
      }
    };

    const handleScroll = () => {
      if (openMenuRowKey) {
        const button = menuButtonRefs.current.get(openMenuRowKey);
        if (button) {
          const rect = button.getBoundingClientRect();
          setMenuPosition({
            top: rect.bottom + 4,
            left: rect.right,
          });
        }
      }
    };

    if (openMenuRowKey) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll, true);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [openMenuRowKey]);

  const isAllSelected = data.length > 0 && selectedRows.length === data.length;
  const isPartiallySelected = selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <div className={clsx(styles.tableContainer, className)}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {selectable && (
              <th className={clsx(styles.th, styles.checkboxCell)}>
                <Checkbox
                  checked={isAllSelected}
                  indeterminate={isPartiallySelected}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={clsx(
                  styles.th,
                  column.sortable && styles.sortable
                )}
                style={{ width: column.width, textAlign: column.align || 'left' }}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className={styles.headerContent}>
                  <span>{column.label}</span>
                  {column.sortable && (
                    <span className={styles.sortIcon}>
                      {currentSortKey === column.key && currentSortDirection === 'asc' && (
                        <FontAwesomeIcon icon={faChevronUp} />
                      )}
                      {currentSortKey === column.key && currentSortDirection === 'desc' && (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
            {showActions && <th className={clsx(styles.th, styles.actionsCell)}></th>}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0) + (showActions ? 1 : 0)}
                className={styles.emptyCell}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => {
              const rowKey = getRowKey(row, rowIndex);
              const isSelected = selectedRows.includes(rowKey);

              return (
                <tr
                  key={rowKey}
                  className={clsx(
                    styles.tr,
                    isSelected && styles.selected,
                    onRowClick && styles.clickable
                  )}
                  onClick={() => onRowClick?.(row, rowIndex)}
                >
                  {selectable && (
                    <td className={clsx(styles.td, styles.checkboxCell)}>
                      <Checkbox
                        checked={isSelected}
                        onChange={() => handleSelectRow(rowKey)}
                        aria-label={`Select row ${rowIndex + 1}`}
                      />
                    </td>
                  )}
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={styles.td}
                      style={{ textAlign: column.align || 'left' }}
                    >
                      {column.render ? column.render(row, rowIndex) : (row as any)[column.key]}
                    </td>
                  ))}
                  {showActions && (
                    <td className={clsx(styles.td, styles.actionsCell)}>
                      <button
                        ref={(el) => {
                          if (el) {
                            menuButtonRefs.current.set(rowKey, el);
                          } else {
                            menuButtonRefs.current.delete(rowKey);
                          }
                        }}
                        className={styles.actionButton}
                        onClick={(e) => handleActionClick(e, row, rowIndex, rowKey)}
                        aria-label="Row actions"
                        aria-expanded={openMenuRowKey === rowKey}
                      >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </td>
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Menu Portal - renders outside table */}
      {openMenuRowKey && menuPosition && openMenuRow && getActionMenuOptions && createPortal(
        <div
          ref={menuPortalRef}
          style={{
            position: 'fixed',
            top: `${menuPosition.top}px`,
            right: `${window.innerWidth - menuPosition.left + 4}px`,
            zIndex: 1000,
          }}
        >
          <div style={{ position: 'static' }}>
            <Menu
              options={getActionMenuOptions(openMenuRow.row, openMenuRow.rowIndex)}
              onSelect={() => {
                setOpenMenuRowKey(null);
                setMenuPosition(null);
                setOpenMenuRow(null);
              }}
              className={styles.portalMenu}
            />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
