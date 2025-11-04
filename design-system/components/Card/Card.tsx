/**
 * Card Component
 *
 * A flexible card component for displaying individual items with optional icon, title, description, and actions
 * Matches Figma Card component design (NOT Card Container)
 *
 * @example
 * <Card size="small" title="Card Title" description="Card description" />
 * <Card size="large" icon="star" title="Card Title" description="Card description" badge="Seen" />
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';
import { Badge } from '../Badge';
import { Menu, MenuOption } from '../Menu';
import { IgnitionLogo } from './assets/IgnitionLogo';

export interface CardProps {
  /** Card size variant */
  size?: 'small' | 'large' | 'xlarge';

  /** Icon to display (optional) - can be emoji or icon name */
  icon?: React.ReactNode;

  /** Icon color variant */
  iconVariant?: 'default' | 'primary' | 'secondary' | 'logo';

  /** Card title */
  title: string;

  /** Card description */
  description?: string;

  /** Badge text (e.g., "Seen") */
  badge?: string;

  /** Badge variant (color) */
  badgeVariant?: 'green' | 'red' | 'grey' | 'yellow' | 'blue';

  /** Badge size */
  badgeSize?: 'tiny' | 'small' | 'large';

  /** Show menu button */
  showMenu?: boolean;

  /** Menu options for ellipsis button */
  menuOptions?: MenuOption[];

  /** Preview image/thumbnail */
  preview?: React.ReactNode;

  /** Selected state */
  selected?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Click handler */
  onClick?: () => void;

  /** Menu click handler (deprecated - use menuOptions instead) */
  onMenuClick?: (e: React.MouseEvent) => void;

  /** Additional CSS class */
  className?: string;

  /** Child content (overrides preview) */
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  size = 'small',
  icon,
  iconVariant = 'default',
  title,
  description,
  badge,
  badgeVariant = 'grey',
  badgeSize = 'tiny',
  showMenu = false,
  menuOptions,
  preview,
  selected = false,
  disabled = false,
  onClick,
  onMenuClick,
  className,
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (menuOptions) {
      setMenuOpen(!menuOpen);
    } else {
      onMenuClick?.(e);
    }
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuOpen]);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // Render the appropriate icon based on variant
  const renderIcon = () => {
    if (iconVariant === 'logo') {
      return (
        <div className={clsx(styles.icon, styles['icon-logo'])}>
          <IgnitionLogo />
        </div>
      );
    }

    if (icon) {
      return (
        <div className={clsx(styles.icon, styles[`icon-${iconVariant}`])}>
          {icon}
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={clsx(
        styles.card,
        styles[`size-${size}`],
        onClick && !disabled && styles.clickable,
        selected && styles.selected,
        disabled && styles.disabled,
        className
      )}
      onClick={handleClick}
      aria-disabled={disabled}
      aria-selected={selected}
    >
      {/* Preview/Thumbnail Section */}
      {(preview || children) && (
        <div className={styles.preview}>
          {children || preview}
        </div>
      )}

      {/* Content Section */}
      <div className={styles.content}>
        {/* Icon and Title Row */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            {renderIcon()}
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>{title}</h3>
              {description && <p className={styles.description}>{description}</p>}
            </div>
          </div>

          {showMenu && (
            <div className={styles.menuWrapper}>
              <button
                ref={menuButtonRef}
                className={styles.menuButton}
                onClick={handleMenuClick}
                aria-label="More options"
                aria-expanded={menuOpen}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="3" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                  <circle cx="8" cy="13" r="1.5" fill="currentColor" />
                </svg>
              </button>
              {menuOpen && menuOptions && (
                <div className={styles.menuDropdown}>
                  <Menu
                    options={menuOptions}
                    onSelect={(value) => {
                      const selectedOption = menuOptions.find(opt => opt.value === value);
                      selectedOption?.onClick?.();
                      handleMenuClose();
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Badge */}
        {badge && (
          <div className={styles.badgeWrapper}>
            <Badge variant={badgeVariant} size={badgeSize}>
              {badge}
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};
