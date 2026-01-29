/**
 * MenuButton Component
 *
 * A button that opens a dropdown menu, indicated by a chevron icon.
 * Commonly used for context menus, options, and dropdown actions.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-5111
 *
 * @example
 * // Basic menu button
 * <MenuButton onClick={() => console.log('Menu opened')}>
 *   Menu
 * </MenuButton>
 *
 * @example
 * // Disabled menu button
 * <MenuButton disabled>
 *   Options
 * </MenuButton>
 */

import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './MenuButton.module.css';

export interface MenuButtonProps {
  /** Button label text */
  children: React.ReactNode;

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Disabled state - maps to Figma "State=Disabled" */
  disabled?: boolean;

  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';

  /** Additional CSS class names */
  className?: string;

  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      onClick,
      disabled = false,
      type = 'button',
      className,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    const buttonClasses = clsx(
      styles.menuButton,
      disabled && styles.disabled,
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-haspopup="true"
      >
        <span className={styles.label}>{children}</span>
        <Icon name="chevron-down" variant="solid" className={styles.icon} />
      </button>
    );
  }
);

MenuButton.displayName = 'MenuButton';
