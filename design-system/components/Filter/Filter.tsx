/**
 * Filter Component
 *
 * A pill-style filter button with dropdown popover for selecting filter options.
 * Matches Figma Filter design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5773-12918
 *
 * @example
 * <Filter
 *   label="Status"
 *   value="Active"
 *   options={['Active', 'Inactive', 'Pending']}
 *   onApply={(value) => console.log(value)}
 *   onRemove={() => console.log('removed')}
 * />
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Filter.module.css';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterProps {
  /** Filter label (e.g., "Status", "Type") */
  label: string;

  /** Optional sub-filter label shown above the main label */
  subLabel?: string;

  /** Currently selected value */
  value?: string;

  /** Filter options - can be array of strings or objects with label/value */
  options?: string[] | FilterOption[];

  /** Allow custom text input instead of predefined options */
  allowCustomInput?: boolean;

  /** Placeholder for custom input */
  inputPlaceholder?: string;

  /** Callback when filter is applied */
  onApply?: (value: string) => void;

  /** Callback when filter is removed */
  onRemove?: () => void;

  /** Additional CSS class */
  className?: string;
}

export function Filter({
  label,
  subLabel,
  value,
  options = [],
  allowCustomInput = false,
  inputPlaceholder = 'Enter value...',
  onApply,
  onRemove,
  className,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [customInput, setCustomInput] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options to FilterOption format
  const normalizedOptions: FilterOption[] = options.map(opt =>
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleApply = () => {
    const valueToApply = allowCustomInput ? customInput : selectedValue;
    if (valueToApply && onApply) {
      onApply(valueToApply);
    }
    setIsOpen(false);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  const hasValue = Boolean(value);

  return (
    <div className={clsx(styles.filterWrapper, className)} ref={dropdownRef}>
      <div
        className={styles.filterContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={clsx(
            styles.filter,
            hasValue && styles.hasValue,
            isHovered && styles.hovered
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <div className={styles.filterContent}>
            <div className={styles.labelGroup}>
              {subLabel && <span className={styles.subLabel}>{subLabel}</span>}
              <span className={styles.label}>{label}</span>
            </div>
            {value && <span className={styles.value}>{value}</span>}
          </div>

          <span className={styles.dropdownIcon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </button>

        {hasValue && isHovered && (
          <button
            className={styles.removeButton}
            onClick={handleRemove}
            aria-label="Remove filter"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
      </div>

      {isOpen && (
        <div className={styles.popover}>
          <div className={styles.popoverContent}>
            {normalizedOptions.length > 0 && (
              <div className={styles.optionsList}>
                {normalizedOptions.map((option) => (
                  <label key={option.value} className={styles.optionItem}>
                    <input
                      type="radio"
                      name={`filter-${label}`}
                      value={option.value}
                      checked={selectedValue === option.value}
                      onChange={() => setSelectedValue(option.value)}
                      className={styles.radio}
                    />
                    <span className={styles.optionLabel}>{option.label}</span>
                  </label>
                ))}
              </div>
            )}

            {allowCustomInput && (
              <div className={styles.customInput}>
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={inputPlaceholder}
                  className={styles.textInput}
                />
              </div>
            )}

            <div className={styles.popoverActions}>
              <button
                className={styles.doneButton}
                onClick={handleApply}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
