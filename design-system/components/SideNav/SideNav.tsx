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

import React, { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faChevronDown,
  faGift,
  faCircleUser
} from '@fortawesome/free-solid-svg-icons';
import {
  faSearch,
  faBell
} from '@fortawesome/pro-regular-svg-icons';
import styles from './SideNav.module.css';

export interface SideNavSubItem {
  id: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SideNavItem {
  id: string;
  label: string;
  icon: React.ReactNode; // FontAwesome icon element
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

export function SideNav({
  logo,
  showSearch = true,
  showNotification = true,
  createButton,
  group1Items = [],
  group2Items = [],
  group3Items = [],
  showReferButton = true,
  onReferClick,
  user,
  className,
}: SideNavProps) {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (id: string) => {
    const newOpenMenus = new Set(openMenus);
    if (newOpenMenus.has(id)) {
      newOpenMenus.delete(id);
    } else {
      newOpenMenus.add(id);
    }
    setOpenMenus(newOpenMenus);
  };

  const renderNavItem = (item: SideNavItem) => {
    const isOpen = openMenus.has(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
      <div key={item.id} className={styles.navItemWrapper}>
        <div
          className={clsx(
            styles.navItem,
            item.active && styles.navItemActive,
            hasSubItems && styles.navItemWithSub
          )}
        >
          <button
            className={styles.navButton}
            onClick={() => {
              if (hasSubItems) {
                toggleMenu(item.id);
              } else {
                item.onClick?.();
              }
            }}
          >
            <div className={styles.navItemContent}>
              <div className={styles.navIcon}>{item.icon}</div>
              <div className={styles.navLabel}>{item.label}</div>
              {hasSubItems && (
                <div className={styles.navCaret}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              )}
            </div>
          </button>
        </div>

        {hasSubItems && isOpen && (
          <div className={styles.subItems}>
            {item.subItems!.map((subItem) => (
              <button
                key={subItem.id}
                className={clsx(
                  styles.subItem,
                  subItem.active && styles.subItemActive
                )}
                onClick={subItem.onClick}
              >
                {subItem.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={clsx(styles.sideNav, className)}>
      <div className={styles.navContentWrapper}>
        <div className={styles.navContent}>
          {/* Top Group - Header + Create Button */}
          <div className={styles.topGroup}>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerContent}>
                {logo && <div className={styles.logo}>{logo}</div>}
                <div className={styles.headerIcons}>
                  {showSearch && (
                    <div className={styles.headerIcon}>
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  )}
                  {showNotification && (
                    <div className={styles.headerIcon}>
                      <FontAwesomeIcon icon={faBell} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Create New Button (GAB) */}
            {createButton && (
              <div className={styles.gab}>
                <button className={styles.createButton} onClick={createButton.onClick}>
                  <div className={styles.createIcon}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  <div className={styles.createLabel}>{createButton.label}</div>
                  <div className={styles.createChevron}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Group 1 Items */}
          {group1Items.length > 0 && (
            <div className={styles.navGroup}>
              {group1Items.map(renderNavItem)}
            </div>
          )}

          {/* Divider */}
          {group2Items.length > 0 && (
            <div className={styles.divider}>
              <div className={styles.dividerLine} />
            </div>
          )}

          {/* Group 2 Items */}
          {group2Items.length > 0 && (
            <div className={styles.navGroup}>
              {group2Items.map(renderNavItem)}
            </div>
          )}

          {/* Divider */}
          {group3Items.length > 0 && (
            <div className={styles.divider}>
              <div className={styles.dividerLine} />
            </div>
          )}

          {/* Group 3 Items */}
          {group3Items.length > 0 && (
            <div className={clsx(styles.navGroup, styles.navGroupBottom)}>
              {group3Items.map(renderNavItem)}
            </div>
          )}

          {/* Bottom Group - Refer Button + User */}
          <div className={styles.bottomGroup}>
            {/* Refer & Earn Button */}
            {showReferButton && (
              <div className={styles.referSection}>
                <button className={styles.referButton} onClick={onReferClick}>
                  <div className={styles.referIcon}>
                    <FontAwesomeIcon icon={faGift} />
                  </div>
                  <div className={styles.referLabel}>Refer & earn</div>
                </button>
              </div>
            )}

            {/* User Account */}
            {user && (
              <div className={styles.userAccount}>
                <button className={styles.userButton}>
                  <div className={styles.userContent}>
                    <div className={styles.userIcon}>
                      {user.avatar || <FontAwesomeIcon icon={faCircleUser} />}
                    </div>
                    <div className={styles.userText}>
                      <div className={styles.userName}>{user.name}</div>
                      {user.company && <div className={styles.userCompany}>{user.company}</div>}
                    </div>
                    <div className={styles.userCaret}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Curved Edge Background */}
      <div className={styles.curvedEdge}>
        <div className={styles.curvedShape} />
      </div>
    </div>
  );
}
