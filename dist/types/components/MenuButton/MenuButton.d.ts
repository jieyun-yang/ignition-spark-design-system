/**
 * MenuButton Component
 *
 * A button that opens a dropdown menu, indicated by a chevron icon.
 * Commonly used for context menus, options, and dropdown actions.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-5111
 *
 * @example
 * // Basic menu button
 * <MenuButton onClick={() => console.log('Menu opened')}>
 *   Menu
 * </MenuButton>
 *
 * @example
 * // Disabled menu button
 * <MenuButton disabled>
 *   Options
 * </MenuButton>
 */
import React from 'react';
export interface MenuButtonProps {
    /** Button label text */
    children: React.ReactNode;
    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Disabled state - maps to Figma "State=Disabled" */
    disabled?: boolean;
    /** Button type attribute */
    type?: 'button' | 'submit' | 'reset';
    /** Additional CSS class names */
    className?: string;
    /** ARIA label for accessibility */
    'aria-label'?: string;
}
export declare const MenuButton: React.ForwardRefExoticComponent<MenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
