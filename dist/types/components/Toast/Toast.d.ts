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
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
