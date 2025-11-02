/**
 * FieldSet Component
 *
 * A container component for grouping related form fields with a header.
 * Provides visual separation and organization for form sections.
 *
 * Figma: Matches Field set in Spark Components
 *
 * @example
 * <FieldSet title="Personal Information" icon={<FontAwesomeIcon icon={faUser} />}>
 *   <input type="text" placeholder="Name" />
 *   <input type="email" placeholder="Email" />
 * </FieldSet>
 */

import React from 'react';
import styles from './FieldSet.module.css';

export interface FieldSetProps {
  /** Field set title - displayed in header */
  title: string;

  /** Optional icon to display before title */
  icon?: React.ReactNode;

  /** Child form elements to render inside field set */
  children: React.ReactNode;

  /** Optional CSS class name for additional styling */
  className?: string;
}

export const FieldSet: React.FC<FieldSetProps> = ({
  title,
  icon,
  children,
  className,
}) => {
  return (
    <div className={`${styles.fieldSet} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
