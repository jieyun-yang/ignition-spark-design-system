/**
 * EmptyState Component
 *
 * Displays empty or zero states with optional illustration, text, and actions
 * Matches Figma Empty State design
 *
 * @example
 * // With illustration name
 * <EmptyState
 *   illustration="product-invoice-late"
 *   heading="No invoices yet"
 *   description="Create your first invoice to get started"
 *   primaryAction={{ label: 'Create Invoice', onClick: () => {} }}
 * />
 *
 * @example
 * // With custom illustration JSX
 * <EmptyState
 *   illustration={<MyCustomIllustration />}
 *   heading="No results found"
 *   description="Try adjusting your search"
 * />
 */

import React from 'react';
import clsx from 'clsx';
import { Illustration, type IllustrationName } from '../Illustration';
import styles from './EmptyState.module.css';

export interface EmptyStateProps {
  /** Illustration to display - can be an illustration name or custom React node */
  illustration?: IllustrationName | React.ReactNode;

  /** Heading text */
  heading: string;

  /** Optional description text */
  description?: string;

  /** Size variant - maps to Figma "Size" property */
  size?: 'large' | 'medium' | 'small';

  /** Primary action button */
  primaryAction?: {
    label: string;
    onClick: () => void;
  };

  /** Secondary action button */
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };

  /** Additional CSS class */
  className?: string;
}

export function EmptyState({
  illustration,
  heading,
  description,
  size = 'large',
  primaryAction,
  secondaryAction,
  className,
}: EmptyStateProps) {
  // Determine if illustration is a string (illustration name) or React node
  const isIllustrationName = typeof illustration === 'string';

  return (
    <div className={clsx(styles.emptyState, styles[`size-${size}`], className)}>
      {illustration && (
        <div className={styles.illustration}>
          {isIllustrationName ? (
            <Illustration
              name={illustration as IllustrationName}
              size="small"
            />
          ) : (
            illustration
          )}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.heading}>{heading}</h3>

        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>

      {(primaryAction || secondaryAction) && (
        <div className={styles.actions}>
          {secondaryAction && (
            <button
              className={clsx(styles.button, styles.secondaryButton)}
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </button>
          )}

          {primaryAction && (
            <button
              className={clsx(styles.button, styles.primaryButton)}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
