/**
 * Tabs Component
 *
 * Navigation tabs with active state highlighting.
 * Shows active tab with purple underline indicator.
 *
 * Figma: Matches Tabs in Spark Components
 *
 * @example
 * <Tabs
 *   tabs={[
 *     { id: 'tab1', label: 'Overview' },
 *     { id: 'tab2', label: 'Details' },
 *     { id: 'tab3', label: 'Settings' }
 *   ]}
 *   activeTab="tab1"
 *   onTabChange={(id) => console.log('Tab changed:', id)}
 * />
 */
import React from 'react';
export interface Tab {
    /** Unique identifier for the tab */
    id: string;
    /** Label text to display */
    label: string;
    /** Optional disabled state */
    disabled?: boolean;
}
export interface TabsProps {
    /** Array of tab items */
    tabs: Tab[];
    /** ID of the currently active tab */
    activeTab: string;
    /** Callback when tab is clicked */
    onTabChange: (tabId: string) => void;
    /** Visual style variant - 'underline' (default) or 'segment' (button-style) */
    variant?: 'underline' | 'segment';
    /** Optional CSS class name */
    className?: string;
}
export declare const Tabs: React.FC<TabsProps>;
