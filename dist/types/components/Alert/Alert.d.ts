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
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
