/**
 * Avatar Component
 *
 * A circular avatar component that displays user initials or an image.
 * Can be used standalone or as part of a user profile display.
 *
 * Figma: Matches Avatar in Spark Components
 *
 * @example
 * <Avatar initials="AB" />
 * <Avatar src="/path/to/image.jpg" alt="User Name" />
 * <Avatar initials="FC" name="Fred Costanza" email="fred@email.com" />
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Avatar.module.css';

export interface AvatarProps {
  /** User initials to display (if no image provided) */
  initials?: string;

  /** Image source URL */
  src?: string;

  /** Image alt text */
  alt?: string;

  /** Avatar size */
  size?: 'small' | 'medium' | 'large';

  /** Display as user profile with name and email */
  showProfile?: boolean;

  /** User name (for profile variant) */
  name?: string;

  /** User email (for profile variant) */
  email?: string;

  /** Optional CSS class name */
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  src,
  alt,
  size = 'medium',
  showProfile = false,
  name,
  email,
  className,
}) => {
  const avatarContent = src ? (
    <img src={src} alt={alt || 'Avatar'} className={styles.image} />
  ) : (
    <span className={styles.initials}>{initials || '?'}</span>
  );

  if (showProfile) {
    return (
      <div className={clsx(styles.profile, className)}>
        <div className={clsx(styles.avatar, styles[`size-${size}`])}>
          {avatarContent}
        </div>
        {(name || email) && (
          <div className={styles.info}>
            {name && <div className={styles.name}>{name}</div>}
            {email && <div className={styles.email}>{email}</div>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={clsx(styles.avatar, styles[`size-${size}`], className)}>
      {avatarContent}
    </div>
  );
};
