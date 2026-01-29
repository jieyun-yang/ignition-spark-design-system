/**
 * DatePicker Component
 *
 * A date input field with calendar icon and popover for date selection.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1368-6674
 *
 * @example
 * // Basic date picker
 * <DatePicker
 *   value="16/07/2023"
 *   onChange={(value) => console.log(value)}
 *   placeholder="DD/MM/YYYY"
 * />
 *
 * @example
 * // Disabled date picker
 * <DatePicker value="01/01/2024" disabled />
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Calendar } from './Calendar';
import styles from './DatePicker.module.css';

export interface DatePickerProps {
  /** Current date value (formatted string DD/MM/YYYY) */
  value?: string;

  /** Change handler - receives new date value */
  onChange?: (value: string) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Additional CSS class names */
  className?: string;

  /** Name attribute for form submission */
  name?: string;

  /** ARIA label for accessibility */
  'aria-label'?: string;
}

// Helper function to parse DD/MM/YYYY string to Date
const parseDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  const parts = dateStr.split('/');
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  const date = new Date(year, month, day);
  if (isNaN(date.getTime())) return null;
  return date;
};

// Helper function to format Date to DD/MM/YYYY string
const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      value = '',
      onChange,
      placeholder = 'DD/MM/YYYY',
      disabled = false,
      className,
      name,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    // Close calendar when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      if (onChange && !disabled) {
        onChange(newValue);
      }
    };

    const handleInputClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleIconClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
        inputRef.current?.focus();
      }
    };

    const handleDateSelect = (date: Date) => {
      const formattedDate = formatDate(date);
      setInputValue(formattedDate);
      if (onChange) {
        onChange(formattedDate);
      }
      setIsOpen(false);
    };

    const containerClasses = clsx(
      styles.datePicker,
      disabled && styles.disabled,
      isOpen && styles.open,
      className
    );

    const selectedDate = parseDate(inputValue);

    return (
      <div ref={containerRef} className={styles.wrapper}>
        <div ref={ref} className={containerClasses}>
          <input
            ref={inputRef}
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
            placeholder={placeholder}
            disabled={disabled}
            name={name}
            aria-label={ariaLabel || 'Date picker'}
            autoComplete="off"
          />
          <button
            type="button"
            className={styles.iconButton}
            onClick={handleIconClick}
            disabled={disabled}
            aria-label="Toggle calendar"
            tabIndex={-1}
          >
            <Icon name="calendar" variant="solid" className={styles.icon} />
          </button>
        </div>

        {isOpen && !disabled && (
          <div className={styles.popover}>
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={handleDateSelect}
              onClose={() => setIsOpen(false)}
            />
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
