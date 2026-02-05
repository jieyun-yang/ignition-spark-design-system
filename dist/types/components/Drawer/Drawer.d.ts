/**
 * Drawer Component
 *
 * A slide-in panel component that appears from the right side of the screen.
 * Used for displaying detailed content, forms, or additional information.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1337-6476
 *
 * @example
 * <Drawer
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   title="Drawer title"
 *   subtitle="Drawer subtitle"
 *   badge="NEW"
 *   primaryAction={{ label: 'Primary', icon: faCheck, onClick: () => {} }}
 *   moreActions={[
 *     { label: 'Action 1', onClick: () => {} },
 *     { label: 'Action 2', onClick: () => {} }
 *   ]}
 *   tabs={['Label', 'Label', 'Label']}
 *   activeTab={0}
 *   onTabChange={(index) => setActiveTab(index)}
 * >
 *   <p>Drawer content goes here</p>
 * </Drawer>
 */
import React from 'react';
import { Tab } from '../Tabs';
export interface DrawerAction {
    label: string;
    icon?: string;
    onClick: () => void;
}
export interface DrawerProps {
    /** Whether drawer is open */
    isOpen: boolean;
    /** Callback when drawer should close */
    onClose: () => void;
    /** Drawer title */
    title: string;
    /** Optional subtitle text below title */
    subtitle?: string;
    /** Optional badge text (e.g., "NEW") */
    badge?: string;
    /** Optional badge variant */
    badgeVariant?: 'green' | 'red' | 'grey' | 'yellow' | 'blue';
    /** Optional custom header content (rendered below title/subtitle, before tabs) */
    headerContent?: React.ReactNode;
    /** Primary action button */
    primaryAction?: DrawerAction;
    /** More actions dropdown items */
    moreActions?: DrawerAction[];
    /** Tab items */
    tabs?: Tab[];
    /** Active tab ID */
    activeTab?: string;
    /** Tab change callback */
    onTabChange?: (tabId: string) => void;
    /** Tab style variant - 'underline' (default) or 'segment' (button-style) */
    tabVariant?: 'underline' | 'segment';
    /** Drawer content */
    children: React.ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Disable clicking overlay to close */
    disableOverlayClick?: boolean;
    /** Drawer width */
    width?: number | string;
}
export declare const Drawer: React.FC<DrawerProps>;
