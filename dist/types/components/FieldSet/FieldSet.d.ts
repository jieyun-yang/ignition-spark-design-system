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
export declare const FieldSet: React.FC<FieldSetProps>;
