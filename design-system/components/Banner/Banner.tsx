/**
 * Banner Component
 *
 * A horizontal notification banner with optional image, title, content, and actions
 * Matches Figma Banner component design
 *
 * @example
 * <Banner
 *   title="Welcome"
 *   onClose={() => console.log('closed')}
 *   primaryAction={{ label: 'Get started', onClick: handleStart }}
 * >
 *   Get started with our new features
 * </Banner>
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Banner.module.css';

export interface BannerAction {
  label: string;
  onClick: () => void;
}

export interface BannerProps {
  /** Banner title */
  title: string;

  /** Banner content (max 2 lines recommended) */
  children: React.ReactNode;

  /** Optional image/illustration (left side) */
  image?: React.ReactNode;

  /** Primary action button */
  primaryAction?: BannerAction;

  /** Secondary action button */
  secondaryAction?: BannerAction;

  /** Callback when banner is closed */
  onClose?: () => void;

  /** Additional CSS class */
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  children,
  image,
  primaryAction,
  secondaryAction,
  onClose,
  className,
}) => {
  return (
    <div className={clsx(styles.banner, className)}>
      {/* Image Section */}
      {image && (
        <div className={styles.imageSection}>
          {image}
        </div>
      )}

      {/* Content Section */}
      <div className={styles.contentSection}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.body}>
            {children}
          </div>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className={styles.actions}>
              {primaryAction && (
                <button
                  className={clsx(styles.actionButton, styles.primary)}
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.label}
                </button>
              )}
              {secondaryAction && (
                <button
                  className={clsx(styles.actionButton, styles.secondary)}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close banner"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M11 1L1 11M1 1L11 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
