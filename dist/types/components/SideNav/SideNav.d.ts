/**
 * SideNav Component
 *
 * A vertical navigation sidebar with header, navigation items, dividers, and user section.
 * Matches Figma Side Nav design exactly.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=3992-9457
 *
 * @example
 * <SideNav
 *   logo={<IgnitionLogo />}
 *   createButton={{
 *     label: 'Create new',
 *     onClick: () => {}
 *   }}
 *   group1Items={[
 *     { id: 'home', label: 'Home', icon: 'home', active: true }
 *   ]}
 *   user={{
 *     name: 'Greg Bradbury',
 *     company: 'ABC accounting'
 *   }}
 * />
 */
import React from 'react';
export interface SideNavSubItem {
    id: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
}
export interface SideNavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    subItems?: SideNavSubItem[];
}
export interface SideNavUser {
    name: string;
    company?: string;
    avatar?: React.ReactNode;
}
export interface SideNavProps {
    /** Logo component for header */
    logo?: React.ReactNode;
    /** Show search icon in header */
    showSearch?: boolean;
    /** Show notification bell in header */
    showNotification?: boolean;
    /** Create new button configuration */
    createButton?: {
        label: string;
        onClick: () => void;
    };
    /** Items in first group (before first divider) */
    group1Items?: SideNavItem[];
    /** Items in second group (between dividers) */
    group2Items?: SideNavItem[];
    /** Items in third group (after second divider) */
    group3Items?: SideNavItem[];
    /** Show "Refer & earn" button */
    showReferButton?: boolean;
    /** Refer button click handler */
    onReferClick?: () => void;
    /** User information for account section */
    user?: SideNavUser;
    /** Additional CSS class */
    className?: string;
}
export declare function SideNav({ logo, showSearch, showNotification, createButton, group1Items, group2Items, group3Items, showReferButton, onReferClick, user, className, }: SideNavProps): import("react/jsx-runtime").JSX.Element;
