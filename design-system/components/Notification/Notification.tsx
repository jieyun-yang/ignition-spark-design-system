/**
 * Notification Component
 *
 * Displays a notification item with avatar, title, description, timestamp, and unread indicator
 * Matches Figma Notification design
 */

import React from 'react';
import clsx from 'clsx';
import { Avatar } from '../Avatar';
import styles from './Notification.module.css';

export interface NotificationProps {
  /** Avatar content (initials or image) */
  avatar?: React.ReactNode;

  /** Avatar initials (if no custom avatar provided) */
  avatarInitials?: string;

  /** Notification title */
  title: string;

  /** Notification description */
  description?: string;

  /** Timestamp text */
  timestamp: string;

  /** Whether notification is unread */
  unread?: boolean;

  /** Unread indicator color */
  indicatorColor?: string;

  /** Click handler */
  onClick?: () => void;

  /** Additional CSS class */
  className?: string;
}

export function Notification({
  avatar,
  avatarInitials,
  title,
  description,
  timestamp,
  unread = false,
  indicatorColor = '#5a51e7',
  onClick,
  className,
}: NotificationProps) {
  return (
    <div
      className={clsx(
        styles.notification,
        onClick && styles.clickable,
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.content}>
        {(avatar || avatarInitials) && (
          <div className={styles.avatarWrapper}>
            {avatar || <Avatar size="small" initials={avatarInitials!} />}
          </div>
        )}

        <div className={styles.textContent}>
          <div className={styles.title}>{title}</div>
          {description && <div className={styles.description}>{description}</div>}
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.timestamp}>{timestamp}</div>
        {unread && (
          <div
            className={styles.indicator}
            style={{ backgroundColor: indicatorColor }}
            aria-label="Unread"
          />
        )}
      </div>
    </div>
  );
}
