/**
 * CheckboxCard Component
 *
 * A card component with an icon, title, description, and checkbox.
 * Used for selectable card options in forms.
 *
 * Figma: Matches Checkbox Card in Spark Components
 *
 * @example
 * <CheckboxCard
 *   icon="star"
 *   title="Premium Plan"
 *   description="Get access to premium features"
 *   checked={isSelected}
 *   onChange={setIsSelected}
 * />
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './CheckboxCard.module.css';
import clsx from 'clsx';

export interface CheckboxCardProps {
  /** Icon name from Font Awesome - maps to Figma "Icon" layer */
  icon: IconName;

  /** Card title - maps to Figma "Title" */
  title: string;

  /** Card description - maps to Figma "Description" */
  description: string;

  /** Checked state - maps to Figma "Checked" property */
  checked: boolean;

  /** Change handler for checkbox state */
  onChange?: (checked: boolean) => void;

  /** Disabled state - maps to Figma "State=Disabled" */
  disabled?: boolean;

  /** Invalid state - maps to Figma "Invalid" property */
  invalid?: boolean;
}

export const CheckboxCard: React.FC<CheckboxCardProps> = ({
  icon,
  title,
  description,
  checked,
  onChange,
  disabled = false,
  invalid = false,
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={clsx(
        styles.card,
        checked && styles.checked,
        disabled && styles.disabled,
        invalid && styles.invalid
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={icon as any} className={styles.icon} />
        </div>

        <div className={styles.checkboxWrapper}>
          <div className={clsx(styles.checkbox, checked && styles.checkboxChecked)}>
            {checked && (
              <FontAwesomeIcon icon={faCheck} className={styles.checkIcon} />
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
