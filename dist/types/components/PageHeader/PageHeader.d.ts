/**
 * PageHeader Component
 *
 * A page header component with title, optional tabs, and action buttons.
 * Matches Figma Page Header design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=4570-9845
 *
 * @example
 * <PageHeader
 *   title="Page title"
 *   tabs={[{ label: 'Page 1', active: true }, { label: 'Page 2' }]}
 *   primaryAction={{ label: 'Primary', onClick: () => {} }}
 *   secondaryAction={{ label: 'More actions', onClick: () => {} }}
 * />
 */
import React from 'react';
export interface PageHeaderTab {
    label: string;
    active?: boolean;
    onClick?: () => void;
}
export interface PageHeaderAction {
    label: string;
    icon?: React.ReactNode;
    onClick: () => void;
}
export interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Optional icon next to title */
    icon?: React.ReactNode;
    /** Optional tabs */
    tabs?: PageHeaderTab[];
    /** Primary action button */
    primaryAction?: PageHeaderAction;
    /** Secondary action button (menu button) */
    secondaryAction?: PageHeaderAction;
    /** Additional CSS class */
    className?: string;
}
export declare function PageHeader({ title, icon, tabs, primaryAction, secondaryAction, className, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
