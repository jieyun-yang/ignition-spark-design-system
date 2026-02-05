/**
 * Menu Component
 *
 * A dropdown menu for displaying selectable options.
 * Supports simple (labels only) and prominent (with icons and captions) variants.
 *
 * Figma: Matches Menu in Spark Components
 *
 * @example
 * // Simple variant
 * <Menu
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   onSelect={handleSelect}
 * />
 *
 * // Prominent variant with icons
 * <Menu
 *   options={[
 *     { value: '1', label: 'Option 1', icon: faUser, caption: 'User profile' },
 *     { value: '2', label: 'Option 2', icon: faCog, caption: 'Settings' }
 *   ]}
 *   onSelect={handleSelect}
 *   variant="prominent"
 * />
 */
import React from 'react';
export interface MenuOption {
    /** Option value */
    value: string;
    /** Display label */
    label: string;
    /** Optional icon name or React element (for prominent variant) */
    icon?: string | React.ReactNode;
    /** Optional caption (for prominent variant) */
    caption?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Destructive action styling (red text) */
    destructive?: boolean;
    /** Optional click handler */
    onClick?: () => void;
}
export interface MenuProps {
    /** Available options */
    options: MenuOption[];
    /** Selection handler */
    onSelect: (value: string) => void;
    /** Currently selected value (single select) */
    selectedValue?: string;
    /** Currently selected values (multi select) */
    selectedValues?: string[];
    /** Style variant */
    variant?: 'simple' | 'prominent';
    /** Optional CSS class name */
    className?: string;
}
export declare const Menu: React.FC<MenuProps>;
