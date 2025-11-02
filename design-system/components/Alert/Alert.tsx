/**
 * Alert Component
 *
 * A banner alert component for important messages and notifications.
 * Supports multiple status types and content configurations.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8281-9335
 *
 * @example
 * // Info alert with heading and body
 * <Alert status="info" title="Information" onClose={() => {}}>
 *   This is an informational message.
 * </Alert>
 *
 * @example
 * // Success alert with CTA button
 * <Alert
 *   status="success"
 *   title="Success!"
 *   action={{ label: "View Details", onClick: () => {} }}
 *   closeable
 * >
 *   Your changes have been saved.
 * </Alert>
 */

import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faLock,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import styles from './Alert.module.css';

export interface AlertProps {
  /** Alert content (body text) - maps to Figma "Content" */
  children?: React.ReactNode;

  /** Alert status type - maps to Figma "Status" property */
  status?: 'info' | 'success' | 'warning' | 'error' | 'premium';

  /** Alert title/heading */
  title?: string;

  /** Optional action button */
  action?: {
    label: string;
    onClick: () => void;
  };

  /** Show close button - maps to Figma "CloseBtn" property */
  closeable?: boolean;

  /** Close button handler */
  onClose?: () => void;

  /** Additional CSS class names */
  className?: string;

  /** Custom icon (overrides default status icon) */
  icon?: React.ReactNode;
}

const iconMap = {
  info: faCircleInfo,
  success: faCircleCheck,
  warning: faTriangleExclamation,
  error: faCircleXmark,
  premium: faLock,
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      status = 'info',
      title,
      action,
      closeable = false,
      onClose,
      className,
      icon,
    },
    ref
  ) => {
    const hasContent = Boolean(children);
    const hasAction = Boolean(action);
    const hasTitle = Boolean(title);

    // Determine content configuration
    let contentType = 'body';
    if (hasTitle && hasContent && hasAction) {
      contentType = 'heading-body-cta';
    } else if (hasTitle && hasContent) {
      contentType = 'heading-body';
    } else if (hasTitle) {
      contentType = 'heading';
    }

    const alertClasses = clsx(
      styles.alert,
      styles[`status-${status}`],
      styles[`content-${contentType}`],
      closeable && styles.closeable,
      className
    );

    return (
      <div ref={ref} className={alertClasses} role="alert">
        <div className={styles.container}>
          <div className={styles.icon}>
            {icon || (
              <FontAwesomeIcon icon={iconMap[status]} className={styles.iconSvg} />
            )}
          </div>

          <div className={styles.content}>
            {hasTitle && <div className={styles.title}>{title}</div>}
            {hasContent && <div className={styles.body}>{children}</div>}
            {hasAction && action && (
              <button
                type="button"
                className={styles.actionButton}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            )}
          </div>

          {closeable && (
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close alert"
            >
              <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';
