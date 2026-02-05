/**
 * ComboButton Component
 *
 * A split button combining a primary action button with a dropdown menu button.
 * The main button performs a default action while the menu button opens additional options.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-5030
 *
 * @example
 * // Primary combo button
 * <ComboButton
 *   hierarchy="primary"
 *   onMainClick={() => console.log('Main action')}
 *   onMenuClick={() => console.log('Menu action')}
 * >
 *   Save
 * </ComboButton>
 *
 * @example
 * // Secondary combo button with disabled states
 * <ComboButton
 *   hierarchy="secondary"
 *   mainDisabled={true}
 *   onMenuClick={() => console.log('Menu only')}
 * >
 *   Action
 * </ComboButton>
 */
import React from 'react';
export interface ComboButtonProps {
    /** Button label - text for the main action button */
    children: React.ReactNode;
    /** Visual hierarchy - maps to Figma "Hierarchy" property */
    hierarchy?: 'primary' | 'secondary';
    /** Main button click handler */
    onMainClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Menu button click handler */
    onMenuClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Disable the main action button only */
    mainDisabled?: boolean;
    /** Disable the menu button only */
    menuDisabled?: boolean;
    /** Disable both buttons */
    disabled?: boolean;
    /** Button type for main button */
    type?: 'button' | 'submit' | 'reset';
    /** Additional CSS class names */
    className?: string;
    /** ARIA label for main button */
    'aria-label'?: string;
    /** ARIA label for menu button */
    'aria-label-menu'?: string;
}
export declare const ComboButton: React.ForwardRefExoticComponent<ComboButtonProps & React.RefAttributes<HTMLDivElement>>;
