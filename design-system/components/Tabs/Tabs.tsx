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
import clsx from 'clsx';
import styles from './Tabs.module.css';

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

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  variant = 'underline',
  className,
}) => {
  return (
    <div className={clsx(
      variant === 'underline' ? styles.tabs : styles.tabsSegment,
      className
    )}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={clsx(
            variant === 'underline' ? styles.tab : styles.tabSegment,
            activeTab === tab.id && styles.active,
            tab.disabled && styles.disabled
          )}
          onClick={() => !tab.disabled && onTabChange(tab.id)}
          disabled={tab.disabled}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          <span className={styles.label}>{tab.label}</span>
          {variant === 'underline' && activeTab === tab.id && <span className={styles.highlight} />}
        </button>
      ))}
    </div>
  );
};
