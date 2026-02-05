/**
 * Accordion Component
 *
 * A collapsible content component with header and expandable body
 * Matches Figma Accordion component design
 *
 * @example
 * <Accordion heading="Heading">
 *   <p>Body content</p>
 * </Accordion>
 */
import React from 'react';
export interface AccordionProps {
    /** Heading text */
    heading: string;
    /** Optional subheading */
    subheading?: string;
    /** Size variant */
    size?: 'small' | 'large';
    /** Optional stepper number (e.g., "1", "2") */
    stepper?: string;
    /** Optional badge text and variant */
    badge?: {
        text: string;
        variant?: 'warning' | 'error';
    };
    /** Initially expanded state */
    defaultExpanded?: boolean;
    /** Controlled expanded state */
    expanded?: boolean;
    /** Callback when expanded state changes */
    onToggle?: (expanded: boolean) => void;
    /** Disabled state */
    disabled?: boolean;
    /** Body content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
