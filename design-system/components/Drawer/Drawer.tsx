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

import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Badge } from '../Badge';
import { Tabs, Tab } from '../Tabs';
import styles from './Drawer.module.css';

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

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  badgeVariant = 'green',
  headerContent,
  primaryAction,
  moreActions = [],
  tabs,
  activeTab,
  onTabChange,
  tabVariant = 'underline',
  children,
  className,
  disableOverlayClick = false,
  width = 700,
}) => {
  const [isMoreActionsOpen, setIsMoreActionsOpen] = useState(false);
  const moreActionsRef = useRef<HTMLDivElement>(null);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Close more actions dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreActionsRef.current && !moreActionsRef.current.contains(event.target as Node)) {
        setIsMoreActionsOpen(false);
      }
    };

    if (isMoreActionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMoreActionsOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !disableOverlayClick) {
      onClose();
    }
  };

  const handleMoreActionClick = (action: DrawerAction) => {
    action.onClick();
    setIsMoreActionsOpen(false);
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={clsx(styles.drawer, className)}
        style={{ width: typeof width === 'number' ? `${width}px` : width }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={clsx(
            styles.headerContent,
            (!tabs || tabs.length === 0) && styles.headerContentNoTabs
          )}>
            <div className={styles.titleSection}>
              <div className={styles.titleRow}>
                <h2 id="drawer-title" className={styles.title}>{title}</h2>
                {badge && (
                  <Badge variant={badgeVariant} size="small">{badge}</Badge>
                )}
              </div>
              {subtitle && (
                <p className={styles.subtitle}>{subtitle}</p>
              )}
            </div>

            <div className={styles.actions}>
              {/* More Actions Dropdown */}
              {moreActions.length > 0 && (
                <div className={styles.moreActionsWrapper} ref={moreActionsRef}>
                  <button
                    className={styles.moreActionsButton}
                    onClick={() => setIsMoreActionsOpen(!isMoreActionsOpen)}
                    aria-expanded={isMoreActionsOpen}
                  >
                    <span>More actions</span>
                    <Icon name="chevron-down" variant="solid" className={styles.chevronIcon} />
                  </button>

                  {isMoreActionsOpen && (
                    <div className={styles.moreActionsDropdown}>
                      {moreActions.map((action, index) => (
                        <button
                          key={index}
                          className={styles.moreActionItem}
                          onClick={() => handleMoreActionClick(action)}
                        >
                          {action.icon && (
                            <Icon name={action.icon} className={styles.actionIcon} />
                          )}
                          <span>{action.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Primary Action Button */}
              {primaryAction && (
                <button
                  className={styles.primaryButton}
                  onClick={primaryAction.onClick}
                >
                  {primaryAction.icon && (
                    <Icon name={primaryAction.icon} className={styles.buttonIcon} />
                  )}
                  <span>{primaryAction.label}</span>
                </button>
              )}

              {/* Close Button */}
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close drawer"
              >
                <Icon name="xmark" variant="solid" />
              </button>
            </div>
          </div>

          {/* Custom Header Content */}
          {headerContent && (
            <div className={styles.headerCustomContent}>
              {headerContent}
            </div>
          )}

          {/* Tabs - only render in header for underline variant */}
          {tabs && tabs.length > 0 && activeTab && onTabChange && tabVariant === 'underline' && (
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={onTabChange}
              variant={tabVariant}
              className={styles.tabsWrapper}
            />
          )}

          <div className={styles.divider} />
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Tabs - render in body for segment variant */}
          {tabs && tabs.length > 0 && activeTab && onTabChange && tabVariant === 'segment' && (
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={onTabChange}
              variant={tabVariant}
              className={styles.tabsSegmentInBody}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
