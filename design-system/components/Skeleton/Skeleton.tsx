/**
 * Skeleton Component
 *
 * Loading placeholder with shimmer animation
 * Matches Figma Skeleton design
 */

import React from 'react';
import clsx from 'clsx';
import styles from './Skeleton.module.css';

export interface SkeletonProps {
  /** Width of skeleton (CSS value or number in px) */
  width?: string | number;

  /** Height of skeleton (CSS value or number in px) */
  height?: string | number;

  /** Variant shape */
  variant?: 'text' | 'circular' | 'rectangular';

  /** Additional CSS class */
  className?: string;
}

export function Skeleton({
  width,
  height,
  variant = 'text',
  className,
}: SkeletonProps) {
  const style: React.CSSProperties = {};

  if (width !== undefined) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }

  if (height !== undefined) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <div
      className={clsx(
        styles.skeleton,
        styles[`variant-${variant}`],
        className
      )}
      style={style}
      aria-busy="true"
      aria-live="polite"
    />
  );
}
