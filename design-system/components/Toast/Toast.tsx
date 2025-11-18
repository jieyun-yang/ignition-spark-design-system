/**
 * Toast Component
 *
 * A floating notification component for temporary messages.
 * Appears in a corner/edge of the screen and auto-dismisses.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8286-8759
 *
 * @example
 * // Success toast with heading and body
 * <Toast status="success" heading="Success!" onClose={() => {}}>
 *   Your changes have been saved.
 * </Toast>
 *
 * @example
 * // Info toast with action links
 * <Toast
 *   status="info"
 *   heading="New update available"
 *   actions={[
 *     { label: "Primary", onClick: () => {} },
 *     { label: "Secondary", onClick: () => {} }
 *   ]}
 * >
 *   Version 2.0 is now available.
 * </Toast>
 */

import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faCircleCheck,
  faTriangleExclamation,
  faCircleXmark,
  faSpinner,
  faLock,
  faXmark,
} from '@fortawesome/pro-regular-svg-icons';
import styles from './Toast.module.css';

export interface ToastProps {
  /** Toast body text - maps to Figma "Parameters" */
  children?: React.ReactNode;

  /** Toast status type - maps to Figma "Status" property */
  status?: 'info' | 'success' | 'warning' | 'error' | 'waiting' | 'premium';

  /** Toast heading/title */
  heading: string;

  /** Optional action links (Primary/Secondary) */
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;

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
  waiting: faSpinner,
  premium: faLock,
};

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      children,
      status = 'info',
      heading,
      actions,
      onClose,
      className,
      icon,
    },
    ref
  ) => {
    const hasBody = Boolean(children);
    const hasActions = Boolean(actions && actions.length > 0);

    // Determine content configuration
    let contentType = 'heading';
    if (hasBody && hasActions) {
      contentType = 'heading-body-link';
    } else if (hasBody) {
      contentType = 'heading-body';
    } else if (hasActions) {
      contentType = 'heading-link';
    }

    const toastClasses = clsx(
      styles.toast,
      styles[`status-${status}` as keyof typeof styles],
      styles[`content-${contentType}` as keyof typeof styles],
      className
    );

    return (
      <div ref={ref} className={toastClasses} role="status" aria-live="polite">
        <div className={styles.container}>
          <div className={styles.icon}>
            {icon || (
              <FontAwesomeIcon
                icon={iconMap[status]}
                className={styles.iconSvg}
                spin={status === 'waiting'}
              />
            )}
          </div>

          <div className={styles.content}>
            <div className={styles.heading}>{heading}</div>
            {hasBody && <div className={styles.body}>{children}</div>}
            {hasActions && actions && (
              <div className={styles.actions}>
                {actions.map((action, index) => (
                  <button
                    key={index}
                    type="button"
                    className={styles.actionLink}
                    onClick={action.onClick}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {onClose && (
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close notification"
            >
              <FontAwesomeIcon icon={faXmark} className={styles.closeIcon} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = 'Toast';
