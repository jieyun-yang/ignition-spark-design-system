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
import React from 'react';
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
export declare const Modal: React.FC<ModalProps>;
