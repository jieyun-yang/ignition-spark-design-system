/**
 * ComboButton Component
 *
 * A split button combining a primary action button with a dropdown menu button.
 * The main button performs a default action while the menu button opens additional options.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-5030
 *
 * @example
 * // Primary combo button
 * <ComboButton
 *   hierarchy="primary"
 *   onMainClick={() => console.log('Main action')}
 *   onMenuClick={() => console.log('Menu action')}
 * >
 *   Save
 * </ComboButton>
 *
 * @example
 * // Secondary combo button with disabled states
 * <ComboButton
 *   hierarchy="secondary"
 *   mainDisabled={true}
 *   onMenuClick={() => console.log('Menu only')}
 * >
 *   Action
 * </ComboButton>
 */

import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ComboButton.module.css';

export interface ComboButtonProps {
  /** Button label - text for the main action button */
  children: React.ReactNode;

  /** Visual hierarchy - maps to Figma "Hierarchy" property */
  hierarchy?: 'primary' | 'secondary';

  /** Main button click handler */
  onMainClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Menu button click handler */
  onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Disable the main action button only */
  mainDisabled?: boolean;

  /** Disable the menu button only */
  menuDisabled?: boolean;

  /** Disable both buttons */
  disabled?: boolean;

  /** Button type for main button */
  type?: 'button' | 'submit' | 'reset';

  /** Additional CSS class names */
  className?: string;

  /** ARIA label for main button */
  'aria-label'?: string;

  /** ARIA label for menu button */
  'aria-label-menu'?: string;
}

export const ComboButton = React.forwardRef<HTMLDivElement, ComboButtonProps>(
  (
    {
      children,
      hierarchy = 'primary',
      onMainClick,
      onMenuClick,
      mainDisabled = false,
      menuDisabled = false,
      disabled = false,
      type = 'button',
      className,
      'aria-label': ariaLabel,
      'aria-label-menu': ariaLabelMenu,
    },
    ref
  ) => {
    const isMainDisabled = disabled || mainDisabled;
    const isMenuDisabled = disabled || menuDisabled;

    const containerClasses = clsx(
      styles.comboButton,
      styles[`hierarchy-${hierarchy}`],
      className
    );

    const mainButtonClasses = clsx(
      styles.mainButton,
      isMainDisabled && styles.mainDisabled
    );

    const menuButtonClasses = clsx(
      styles.menuButton,
      isMenuDisabled && styles.menuDisabled
    );

    return (
      <div ref={ref} className={containerClasses}>
        <button
          type={type}
          className={mainButtonClasses}
          onClick={onMainClick}
          disabled={isMainDisabled}
          aria-label={ariaLabel}
        >
          <span className={styles.label}>{children}</span>
        </button>
        <button
          type="button"
          className={menuButtonClasses}
          onClick={onMenuClick}
          disabled={isMenuDisabled}
          aria-label={ariaLabelMenu || 'Open menu'}
          aria-haspopup="true"
        >
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </button>
      </div>
    );
  }
);

ComboButton.displayName = 'ComboButton';
