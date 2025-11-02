/**
 * CardContainer Component
 *
 * A layout container component with header, optional subheading, optional action button, divider, and body content area
 * Matches Figma Card Container component design
 *
 * @example
 * <CardContainer heading="Heading">
 *   <p>Body content goes here</p>
 * </CardContainer>
 */

import React from 'react';
import clsx from 'clsx';
import styles from './CardContainer.module.css';

export interface CardContainerProps {
  /** Heading text */
  heading: string;

  /** Optional subheading text */
  subheading?: string;

  /** Optional action button configuration */
  action?: {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
  };

  /** Optional footer content */
  footer?: React.ReactNode;

  /** Body content */
  children: React.ReactNode;

  /** Show collapse/expand chevron */
  collapsible?: boolean;

  /** Is currently collapsed (for collapsible variant) */
  collapsed?: boolean;

  /** Callback when collapse state changes */
  onToggleCollapse?: () => void;

  /** Additional CSS class */
  className?: string;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  heading,
  subheading,
  action,
  footer,
  children,
  collapsible = false,
  collapsed = false,
  onToggleCollapse,
  className,
}) => {
  return (
    <div className={clsx(styles.cardContainer, className)}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.heading}>{heading}</h3>
            {subheading && <p className={styles.subheading}>{subheading}</p>}
          </div>
        </div>

        {/* Action Button */}
        {action && (
          <button
            className={styles.actionButton}
            onClick={action.onClick}
          >
            {action.icon && <span className={styles.actionIcon}>{action.icon}</span>}
            <span className={styles.actionLabel}>{action.label}</span>
          </button>
        )}

        {/* Collapsible Chevron */}
        {collapsible && (
          <button
            className={styles.chevronButton}
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand' : 'Collapse'}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={clsx(styles.chevron, collapsed && styles.collapsed)}
            >
              <path
                d="M4 10L8 6L12 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Divider */}
      <div className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </div>

      {/* Body */}
      {!collapsed && (
        <div className={styles.body}>
          {children}
        </div>
      )}

      {/* Footer */}
      {footer && !collapsed && (
        <>
          <div className={styles.dividerWrapper}>
            <div className={styles.divider} />
          </div>
          <div className={styles.footer}>
            {footer}
          </div>
        </>
      )}
    </div>
  );
};
