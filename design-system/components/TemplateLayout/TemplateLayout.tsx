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
import clsx from 'clsx';
import styles from './TemplateLayout.module.css';

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

export function TemplateLayout({ sideNav, children, className }: TemplateLayoutProps) {
  return (
    <div className={clsx(styles.layout, className)}>
      {sideNav}
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
}

function PageHeader({ title, actions, className }: PageHeaderProps) {
  return (
    <div className={clsx(styles.pageHeader, className)}>
      <h2 className={styles.pageTitle}>{title}</h2>
      {actions && <div className={styles.headerActions}>{actions}</div>}
    </div>
  );
}

function SectionHeader({ meta, actions, className }: SectionHeaderProps) {
  return (
    <div className={clsx(styles.sectionHeader, className)}>
      {meta && <div className={styles.sectionMeta}>{meta}</div>}
      {actions && <div className={styles.sectionActions}>{actions}</div>}
    </div>
  );
}

// Attach sub-components
TemplateLayout.PageHeader = PageHeader;
TemplateLayout.SectionHeader = SectionHeader;
