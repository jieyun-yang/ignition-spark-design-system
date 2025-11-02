/**
 * Accordion Component
 *
 * A collapsible content component with header and expandable body
 * Matches Figma Accordion component design
 *
 * @example
 * <Accordion heading="Heading">
 *   <p>Body content</p>
 * </Accordion>
 */

import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Accordion.module.css';

export interface AccordionProps {
  /** Heading text */
  heading: string;

  /** Optional subheading */
  subheading?: string;

  /** Size variant */
  size?: 'small' | 'large';

  /** Optional stepper number (e.g., "1", "2") */
  stepper?: string;

  /** Optional badge text and variant */
  badge?: {
    text: string;
    variant?: 'warning' | 'error';
  };

  /** Initially expanded state */
  defaultExpanded?: boolean;

  /** Controlled expanded state */
  expanded?: boolean;

  /** Callback when expanded state changes */
  onToggle?: (expanded: boolean) => void;

  /** Disabled state */
  disabled?: boolean;

  /** Body content */
  children: React.ReactNode;

  /** Additional CSS class */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  heading,
  subheading,
  size = 'small',
  stepper,
  badge,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onToggle,
  disabled = false,
  children,
  className,
}) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    if (disabled) return;

    const newExpanded = !isExpanded;
    setInternalExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  return (
    <div className={clsx(
      styles.accordion,
      styles[`size-${size}`],
      disabled && styles.disabled,
      className
    )}>
      {/* Header */}
      <button
        className={styles.header}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isExpanded}
      >
        {/* Stepper */}
        {stepper && (
          <div className={styles.stepper}>
            {stepper}
          </div>
        )}

        {/* Title Wrapper */}
        <div className={styles.titleWrapper}>
          <div className={styles.titleRow}>
            <h3 className={styles.heading}>{heading}</h3>
            {badge && (
              <span className={clsx(styles.badge, styles[`badge-${badge.variant || 'warning'}`])}>
                {badge.text}
              </span>
            )}
          </div>
          {subheading && (
            <p className={styles.subheading}>{subheading}</p>
          )}
        </div>

        {/* Chevron Icon */}
        <div className={styles.iconWrapper}>
          <svg
            width={size === 'large' ? '24' : '16'}
            height={size === 'large' ? '24' : '16'}
            viewBox="0 0 16 16"
            fill="none"
            className={clsx(styles.chevron, isExpanded && styles.expanded)}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Divider */}
      <div className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </div>

      {/* Body */}
      {isExpanded && (
        <div className={styles.body}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
