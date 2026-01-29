/**
 * Support Article Link Component
 *
 * A link component for support articles with text or icon variants.
 * Matches Figma Support Article Link design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=6015-4921
 *
 * @example
 * <SupportArticleLink href="/help/article">Learn more</SupportArticleLink>
 * <SupportArticleLink type="icon" href="/help/article" />
 */

import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './SupportArticleLink.module.css';

export interface SupportArticleLinkProps {
  /** Link destination URL */
  href: string;

  /** Display variant - text shows "Learn more", icon shows question mark icon */
  type?: 'text' | 'icon';

  /** Custom text (overrides default "Learn more") */
  children?: React.ReactNode;

  /** Open in new tab */
  external?: boolean;

  /** Additional CSS class */
  className?: string;

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function SupportArticleLink({
  href,
  type = 'text',
  children,
  external = false,
  className,
  onClick,
}: SupportArticleLinkProps) {
  return (
    <a
      href={href}
      className={clsx(styles.link, styles[`type-${type}`], className)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {type === 'icon' ? (
        <Icon name="circle-question" className={styles.icon} />
      ) : (
        <span className={styles.text}>{children || 'Learn more'}</span>
      )}
    </a>
  );
}
