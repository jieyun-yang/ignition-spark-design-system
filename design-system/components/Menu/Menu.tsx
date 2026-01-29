/**
 * Menu Component
 *
 * A dropdown menu for displaying selectable options.
 * Supports simple (labels only) and prominent (with icons and captions) variants.
 *
 * Figma: Matches Menu in Spark Components
 *
 * @example
 * // Simple variant
 * <Menu
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   onSelect={handleSelect}
 * />
 *
 * // Prominent variant with icons
 * <Menu
 *   options={[
 *     { value: '1', label: 'Option 1', icon: faUser, caption: 'User profile' },
 *     { value: '2', label: 'Option 2', icon: faCog, caption: 'Settings' }
 *   ]}
 *   onSelect={handleSelect}
 *   variant="prominent"
 * />
 */

import React from 'react';
import { Icon } from '../Icon';
import clsx from 'clsx';
import styles from './Menu.module.css';

export interface MenuOption {
  /** Option value */
  value: string;

  /** Display label */
  label: string;

  /** Optional icon name or React element (for prominent variant) */
  icon?: string | React.ReactNode;

  /** Optional caption (for prominent variant) */
  caption?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Destructive action styling (red text) */
  destructive?: boolean;

  /** Optional click handler */
  onClick?: () => void;
}

export interface MenuProps {
  /** Available options */
  options: MenuOption[];

  /** Selection handler */
  onSelect: (value: string) => void;

  /** Currently selected value (single select) */
  selectedValue?: string;

  /** Currently selected values (multi select) */
  selectedValues?: string[];

  /** Style variant */
  variant?: 'simple' | 'prominent';

  /** Optional CSS class name */
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  options,
  onSelect,
  selectedValue,
  selectedValues,
  variant = 'simple',
  className,
}) => {
  const isSelected = (value: string) => {
    if (selectedValues) {
      return selectedValues.includes(value);
    }
    return value === selectedValue;
  };
  const handleSelect = (option: MenuOption) => {
    if (!option.disabled) {
      if (option.onClick) {
        option.onClick();
      }
      onSelect(option.value);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, option: MenuOption) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(option);
    }
  };

  return (
    <div
      className={clsx(
        styles.menu,
        variant === 'prominent' && styles.prominent,
        className
      )}
      role="listbox"
    >
      {options.map((option) => {
        const selected = isSelected(option.value);

        return (
          <div
            key={option.value}
            className={clsx(
              styles.option,
              selected && styles.selected,
              option.disabled && styles.disabled,
              option.destructive && styles.destructive
            )}
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => handleKeyDown(e, option)}
            role="option"
            aria-selected={selected}
            aria-disabled={option.disabled}
            tabIndex={option.disabled ? -1 : 0}
          >
            {option.icon && (
              variant === 'prominent' ? (
                <div className={styles.iconContainer}>
                  {React.isValidElement(option.icon) ? option.icon : <Icon name={option.icon as string} className={styles.icon} />}
                </div>
              ) : (
                <div className={styles.simpleIcon}>
                  {React.isValidElement(option.icon) ? option.icon : <Icon name={option.icon as string} />}
                </div>
              )
            )}

            <div className={styles.content}>
              <div className={styles.label}>{option.label}</div>
              {option.caption && (
                <div className={styles.caption}>{option.caption}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
