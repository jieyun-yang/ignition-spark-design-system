/**
 * CardContainer Component
 *
 * A layout container component with header, optional subheading, optional action button, divider, and body content area
 * Matches Figma Card Container component design
 *
 * @example
 * <CardContainer heading="Heading">
 *   <p>Body content goes here</p>
 * </CardContainer>
 */
import React from 'react';
export interface CardContainerProps {
    /** Heading text */
    heading: string;
    /** Optional subheading text */
    subheading?: string;
    /** Optional action button configuration */
    action?: {
        label: string;
        icon?: React.ReactNode;
        onClick: () => void;
    };
    /** Optional footer content */
    footer?: React.ReactNode;
    /** Body content */
    children: React.ReactNode;
    /** Show collapse/expand chevron */
    collapsible?: boolean;
    /** Is currently collapsed (for collapsible variant) */
    collapsed?: boolean;
    /** Callback when collapse state changes */
    onToggleCollapse?: () => void;
    /** Additional CSS class */
    className?: string;
}
export declare const CardContainer: React.FC<CardContainerProps>;
