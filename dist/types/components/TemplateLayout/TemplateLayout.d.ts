/**
 * TemplateLayout Component
 *
 * Reusable layout wrapper for page templates
 * Provides consistent structure with SideNav and content area
 * Uses design system tokens exclusively - no hardcoded values
 *
 * @example
 * <TemplateLayout sideNav={<SideNav {...props} />}>
 *   <TemplateLayout.PageHeader title="Proposals" actions={<>...</>} />
 *   <div>Main content here</div>
 * </TemplateLayout>
 */
import React from 'react';
export interface TemplateLayoutProps {
    /** SideNav component */
    sideNav?: React.ReactNode;
    /** Main content */
    children: React.ReactNode;
    /** Optional CSS class name */
    className?: string;
}
export interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Optional action buttons */
    actions?: React.ReactNode;
    /** Optional CSS class name */
    className?: string;
}
export interface SectionHeaderProps {
    /** Section metadata (e.g., result count) */
    meta?: React.ReactNode;
    /** Optional action buttons */
    actions?: React.ReactNode;
    /** Optional CSS class name */
    className?: string;
}
export declare function TemplateLayout({ sideNav, children, className }: TemplateLayoutProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TemplateLayout {
    var PageHeader: ({ title, actions, className }: PageHeaderProps) => import("react/jsx-runtime").JSX.Element;
    var SectionHeader: ({ meta, actions, className }: SectionHeaderProps) => import("react/jsx-runtime").JSX.Element;
}
