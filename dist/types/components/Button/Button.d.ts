/**
 * Button Component
 *
 * A flexible button component matching the Figma design system.
 * Supports multiple hierarchies, variants, sizes, and states.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-4830
 *
 * @example
 * // Primary solid button
 * <Button hierarchy="primary" variant="solid" size="medium">
 *   Click me
 * </Button>
 *
 * @example
 * // Secondary button with left icon
 * <Button hierarchy="secondary" variant="solid" size="large" iconLeft={<CheckIcon />}>
 *   Save
 * </Button>
 *
 * @example
 * // Icon-only button
 * <Button hierarchy="primary" variant="solid" size="medium" iconOnly={<PlusIcon />} />
 */
import React from 'react';
export interface ButtonProps {
    /** Button content - maps to Figma "Label" property */
    children?: React.ReactNode;
    /** Visual hierarchy - maps to Figma "Hierarchy" property */
    hierarchy?: 'primary' | 'secondary' | 'tertiary' | 'destructive';
    /** Visual style - maps to Figma "Variant" property */
    variant?: 'solid' | 'ghost' | 'text';
    /** Icon position - maps to Figma "Icon" property */
    icon?: 'none' | 'left' | 'right' | 'only';
    /** Left icon element (use with icon="left") */
    iconLeft?: React.ReactNode;
    /** Right icon element (use with icon="right") */
    iconRight?: React.ReactNode;
    /** Icon element for icon-only buttons (use with icon="only") */
    iconOnly?: React.ReactNode;
    /** Size variant - maps to Figma "Size" property */
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    /** Button type attribute */
    type?: 'button' | 'submit' | 'reset';
    /** Disabled state - maps to Figma "States=Disabled" */
    disabled?: boolean;
    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Additional CSS class names */
    className?: string;
    /** ARIA label for accessibility (required for icon-only buttons) */
    'aria-label'?: string;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
