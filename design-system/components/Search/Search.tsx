/**
 * Search Component
 *
 * A search input field with icon and clear button.
 * Provides visual feedback for search functionality.
 *
 * Figma: Matches Search in Spark Components
 *
 * @example
 * <Search
 *   value={query}
 *   onChange={setQuery}
 *   placeholder="Search..."
 * />
 */

import React, { useState } from 'react';
import { Icon } from '../Icon';
import clsx from 'clsx';
import styles from './Search.module.css';

export interface SearchProps {
  /** Current search value */
  value?: string;

  /** Change handler */
  onChange?: (value: string) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Optional CSS class name */
  className?: string;

  /** Optional callback when clear button is clicked */
  onClear?: () => void;
}

export const Search: React.FC<SearchProps> = ({
  value = '',
  onChange,
  placeholder = 'Search...',
  disabled = false,
  className,
  onClear,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange('');
    }
    if (onClear) {
      onClear();
    }
  };

  return (
    <div
      className={clsx(
        styles.container,
        isFocused && styles.focused,
        disabled && styles.disabled,
        className
      )}
    >
      <Icon name="search" className={styles.searchIcon} />
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {value && !disabled && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="Clear search"
        >
          <Icon name="xmark" />
        </button>
      )}
    </div>
  );
};
