/**
 * AppCard Component
 *
 * A square card component specifically designed for displaying app integrations
 * with centered content, app logos, and optional badges or premium banners.
 *
 * Figma: Matches App card in Spark Components
 *
 * @example
 * <AppCard
 *   appName="Xero"
 *   description="Connect your accounting"
 *   logo={<AppLogo app="xero" width={64} height={64} />}
 * />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './AppCard.module.css';
import { Badge } from '../Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';

export interface AppCardProps {
  /** App logo component */
  logo: React.ReactNode;

  /** App name */
  appName: string;

  /** App description */
  description: string;

  /** Badge text (e.g., "Connected") */
  badge?: string;

  /** Badge variant (color) */
  badgeVariant?: 'green' | 'red' | 'grey' | 'yellow' | 'blue';

  /** Show premium banner at top */
  premium?: boolean;

  /** Selected state */
  selected?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Show locked icon (for disabled/locked apps) */
  locked?: boolean;

  /** Click handler */
  onClick?: () => void;

  /** Additional CSS class */
  className?: string;
}

export const AppCard: React.FC<AppCardProps> = ({
  logo,
  appName,
  description,
  badge,
  badgeVariant = 'green',
  premium = false,
  selected = false,
  disabled = false,
  locked = false,
  onClick,
  className,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={clsx(
        styles.appCard,
        onClick && !disabled && styles.clickable,
        selected && styles.selected,
        disabled && styles.disabled,
        locked && styles.locked,
        className
      )}
      onClick={handleClick}
      aria-disabled={disabled}
      aria-selected={selected}
    >
      {/* Premium Banner */}
      {premium && (
        <div className={styles.premiumBanner}>
          <span className={styles.premiumText}>PREMIUM</span>
        </div>
      )}

      {/* Content Section */}
      <div className={styles.content}>
        {/* App Logo */}
        <div className={styles.logoWrapper}>
          {logo}
        </div>

        {/* App Details */}
        <div className={styles.details}>
          <h3 className={styles.appName}>{appName}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        {/* Badge */}
        {badge && (
          <div className={styles.badgeWrapper}>
            <Badge variant={badgeVariant} size="large">
              {badge}
            </Badge>
          </div>
        )}
      </div>

      {/* Locked Icon */}
      {locked && (
        <div className={styles.lockedIconWrapper}>
          <div className={styles.lockedIcon}>
            <FontAwesomeIcon icon={faBan} />
          </div>
        </div>
      )}
    </div>
  );
};
