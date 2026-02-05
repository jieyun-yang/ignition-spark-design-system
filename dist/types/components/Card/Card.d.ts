/**
 * Card Component
 *
 * A flexible card component for displaying individual items with optional icon, title, description, and actions
 * Matches Figma Card component design (NOT Card Container)
 *
 * @example
 * <Card size="small" title="Card Title" description="Card description" />
 * <Card size="large" icon="star" title="Card Title" description="Card description" badge="Seen" />
 */
import React from 'react';
import { MenuOption } from '../Menu';
export interface CardProps {
    /** Card size variant */
    size?: 'small' | 'large' | 'xlarge';
    /** Icon to display (optional) - can be emoji or icon name */
    icon?: React.ReactNode;
    /** Icon color variant */
    iconVariant?: 'default' | 'primary' | 'secondary' | 'logo';
    /** Card title */
    title: string;
    /** Card description */
    description?: string;
    /** Badge text (e.g., "Seen") */
    badge?: string;
    /** Badge variant (color) */
    badgeVariant?: 'green' | 'red' | 'grey' | 'yellow' | 'blue';
    /** Badge size */
    badgeSize?: 'tiny' | 'small' | 'large';
    /** Show menu button */
    showMenu?: boolean;
    /** Menu options for ellipsis button */
    menuOptions?: MenuOption[];
    /** Preview image/thumbnail */
    preview?: React.ReactNode;
    /** Selected state */
    selected?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Menu click handler (deprecated - use menuOptions instead) */
    onMenuClick?: (e: React.MouseEvent) => void;
    /** Additional CSS class */
    className?: string;
    /** Child content (overrides preview) */
    children?: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
