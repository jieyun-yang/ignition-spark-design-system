/**
 * Modal Component
 *
 * A dialog overlay component for various use cases (input, confirmation, context, decision)
 * Matches Figma Modal component design
 *
 * @example
 * <Modal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Verb noun"
 *   primaryAction={{ label: 'Confirm', onClick: handleConfirm }}
 * >
 *   <p>Modal content goes here</p>
 * </Modal>
 */

import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.css';

export interface ModalAction {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  hierarchy?: 'primary' | 'secondary' | 'tertiary';
}

export interface ModalProps {
  /** Whether modal is open */
  isOpen: boolean;

  /** Callback when modal should close */
  onClose: () => void;

  /** Modal title */
  title: string;

  /** Optional caption text below title */
  caption?: string;

  /** Modal size */
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

  /** Modal variant type */
  variant?: 'input' | 'confirmation' | 'context' | 'decision' | 'feature-gating';

  /** Optional icon in header (for confirmation variant) */
  headerIcon?: React.ReactNode;

  /** Primary action button */
  primaryAction?: ModalAction;

  /** Secondary action button (e.g., Cancel) */
  secondaryAction?: ModalAction;

  /** Additional action buttons */
  additionalActions?: ModalAction[];

  /** Body content */
  children: React.ReactNode;

  /** Additional CSS class */
  className?: string;

  /** Disable clicking overlay to close */
  disableOverlayClick?: boolean;

  /** Optional illustration for feature-gating variant */
  illustration?: React.ReactNode;

  /** Enable overflow behavior with sticky header/footer */
  overflow?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  caption,
  size = 'medium',
  variant = 'input',
  headerIcon,
  primaryAction,
  secondaryAction,
  additionalActions = [],
  children,
  className,
  disableOverlayClick = false,
  illustration,
  overflow = false,
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !disableOverlayClick) {
      onClose();
    }
  };

  // For decision variant: Cancel, Option B, Option A (primaryAction)
  // For other variants: secondaryAction, additionalActions, primaryAction
  const allActions = variant === 'decision'
    ? [
        ...additionalActions,
        ...(secondaryAction ? [secondaryAction] : []),
        ...(primaryAction ? [primaryAction] : []),
      ]
    : [
        ...(secondaryAction ? [secondaryAction] : []),
        ...additionalActions,
        ...(primaryAction ? [primaryAction] : []),
      ];

  // Confirmation variant has icon inline with title
  const isConfirmation = variant === 'confirmation';
  const hasIllustration = variant === 'feature-gating' && illustration;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={clsx(
          styles.modal,
          styles[`size-${size}`],
          overflow && styles.overflow,
          hasIllustration && styles.hasIllustration,
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Illustration for feature-gating */}
        {hasIllustration && (
          <div className={styles.illustration}>
            {illustration}
          </div>
        )}

        {/* Header */}
        <div className={clsx(styles.header, overflow && styles.stickyHeader)}>
          <div className={styles.titleRow}>
            <div className={clsx(styles.titleWrapper, isConfirmation && styles.titleWithIcon)}>
              {isConfirmation && headerIcon && <div className={styles.headerIcon}>{headerIcon}</div>}
              <h2 id="modal-title" className={styles.title}>{title}</h2>
              {caption && <p className={styles.caption}>{caption}</p>}
            </div>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {children}
        </div>

        {/* Footer with Actions */}
        {allActions.length > 0 && (
          <div className={clsx(styles.footer, overflow && styles.stickyFooter)}>
            <div className={styles.actions}>
              {allActions.map((action, index) => (
                <button
                  key={index}
                  className={clsx(
                    styles.actionButton,
                    styles[`action-${action.hierarchy || 'secondary'}`]
                  )}
                  onClick={action.onClick}
                >
                  {action.icon && <span className={styles.actionIcon}>{action.icon}</span>}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
