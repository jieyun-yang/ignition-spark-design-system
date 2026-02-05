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
import { type IllustrationName } from '../Illustration';
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
export declare function EmptyState({ illustration, heading, description, size, primaryAction, secondaryAction, className, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
