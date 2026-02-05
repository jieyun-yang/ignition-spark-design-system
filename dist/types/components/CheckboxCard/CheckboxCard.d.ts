/**
 * CheckboxCard Component
 *
 * A card component with an icon, title, description, and checkbox.
 * Used for selectable card options in forms.
 *
 * Figma: Matches Checkbox Card in Spark Components
 *
 * @example
 * <CheckboxCard
 *   icon="star"
 *   title="Premium Plan"
 *   description="Get access to premium features"
 *   checked={isSelected}
 *   onChange={setIsSelected}
 * />
 */
import React from 'react';
export interface CheckboxCardProps {
    /** Icon name - maps to Figma "Icon" layer */
    icon: string;
    /** Card title - maps to Figma "Title" */
    title: string;
    /** Card description - maps to Figma "Description" */
    description: string;
    /** Checked state - maps to Figma "Checked" property */
    checked: boolean;
    /** Change handler for checkbox state */
    onChange?: (checked: boolean) => void;
    /** Disabled state - maps to Figma "State=Disabled" */
    disabled?: boolean;
    /** Invalid state - maps to Figma "Invalid" property */
    invalid?: boolean;
}
export declare const CheckboxCard: React.FC<CheckboxCardProps>;
