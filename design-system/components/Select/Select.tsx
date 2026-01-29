/**
 * Select Component
 *
 * A dropdown select input with options menu.
 * Provides visual feedback and keyboard navigation.
 *
 * Figma: Matches Select in Spark Components
 *
 * @example
 * <Select
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   placeholder="Select an option..."
 * />
 */

import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon';
import clsx from 'clsx';
import styles from './Select.module.css';
import { Menu } from '../Menu/Menu';

export interface SelectOption {
  /** Option value */
  value: string;

  /** Display label */
  label: string;

  /** Optional icon for prominent style */
  icon?: any;

  /** Optional caption for prominent style */
  caption?: string;
}

export interface SelectProps {
  /** Current selected value (string for single, array for multi) */
  value?: string | string[];

  /** Change handler (string for single, array for multi) */
  onChange?: (value: string | string[]) => void;

  /** Available options */
  options: SelectOption[];

  /** Placeholder text */
  placeholder?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Error message to display below select */
  errorMessage?: string;

  /** Optional CSS class name */
  className?: string;

  /** Menu style variant */
  menuVariant?: 'simple' | 'prominent';

  /** Show clear button when value is selected */
  clearable?: boolean;

  /** Loading state - shows spinner */
  loading?: boolean;

  /** Callback when clear button is clicked */
  onClear?: () => void;

  /** Enable multi-select mode */
  multiple?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select...',
  disabled = false,
  errorMessage,
  className,
  menuVariant = 'simple',
  clearable = false,
  loading = false,
  onClear,
  multiple = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize value to array for easier handling
  const selectedValues = multiple
    ? (Array.isArray(value) ? value : [])
    : (value ? [value as string] : []);

  // Find selected option label for single select
  const selectedOption = !multiple ? options.find(opt => opt.value === value) : null;
  const displayText = selectedOption ? selectedOption.label : placeholder;

  // Close menu when clicking outside
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

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (selectedValue: string) => {
    if (!onChange) return;

    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(selectedValue)
        ? currentValues.filter(v => v !== selectedValue)
        : [...currentValues, selectedValue];
      onChange(newValues);
      // Keep menu open for multi-select
    } else {
      onChange(selectedValue);
      setIsOpen(false);
    }
  };

  const handleRemoveTag = (tagValue: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (!onChange || !multiple) return;

    const currentValues = Array.isArray(value) ? value : [];
    const newValues = currentValues.filter(v => v !== tagValue);
    onChange(newValues);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange(multiple ? [] : '');
    }
  };

  const hasValue = multiple ? selectedValues.length > 0 : !!value;
  const showClearButton = clearable && hasValue && !disabled && !loading;
  const showChevron = !loading;

  // Get selected option objects for multi-select
  const selectedOptions = multiple
    ? options.filter(opt => selectedValues.includes(opt.value))
    : [];

  return (
    <div className={clsx(styles.wrapper, className)} ref={containerRef}>
      <div
        className={clsx(
          styles.container,
          isOpen && styles.open,
          isFocused && styles.focused,
          errorMessage && styles.error,
          disabled && styles.disabled,
          !selectedOption && styles.placeholder
        )}
        onClick={handleToggle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled}
      >
        {multiple ? (
          <div className={styles.tagsContainer}>
            {selectedOptions.length > 0 ? (
              selectedOptions.map((opt) => (
                <div key={opt.value} className={styles.tag}>
                  <span className={styles.tagLabel}>{opt.label}</span>
                  <button
                    type="button"
                    className={styles.tagRemove}
                    onClick={(e) => handleRemoveTag(opt.value, e)}
                    aria-label={`Remove ${opt.label}`}
                  >
                    <Icon name="xmark" className={styles.tagRemoveIcon} />
                  </button>
                </div>
              ))
            ) : (
              <span className={styles.text}>{placeholder}</span>
            )}
          </div>
        ) : (
          <span className={styles.text}>{displayText}</span>
        )}
        <div className={styles.icons}>
          {showClearButton && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Clear selection"
            >
              <Icon name="xmark" className={styles.clearIcon} />
            </button>
          )}
          {loading && (
            <Icon
              name="spinner"
              className={styles.spinner}
              spin
            />
          )}
          {showChevron && (
            <Icon
              name="chevron-down"
              variant="solid"
              className={clsx(styles.chevron, isOpen && styles.chevronOpen)}
            />
          )}
        </div>
      </div>

      {isOpen && !disabled && (
        <Menu
          options={options}
          onSelect={handleSelect}
          selectedValue={multiple ? undefined : (value as string)}
          selectedValues={multiple ? selectedValues : undefined}
          variant={menuVariant}
        />
      )}

      {errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};
