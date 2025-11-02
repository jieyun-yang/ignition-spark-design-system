/**
 * Illustration Component
 *
 * Displays SVG illustrations from the design system.
 * Supports both emotive and product-specific illustrations.
 *
 * Figma: https://www.figma.com/design/NNLKM8F3gt5dtilTEBopYh/Spark-%7C-Illustrations
 *
 * @example
 * <Illustration name="product-invoice-late" width={400} height={200} />
 *
 * @example
 * <Illustration name="emotive-space-rocket-crash" size="medium" />
 */

import React from 'react';
import clsx from 'clsx';
import type { IllustrationName } from './types';
import { illustrations } from './illustrations';
import styles from './Illustration.module.css';

export interface IllustrationProps {
  /** Illustration name from the design system */
  name: IllustrationName;

  /** Predefined size (uses design tokens) */
  size?: 'small' | 'medium' | 'large';

  /** Custom width in pixels (overrides size) */
  width?: number;

  /** Custom height in pixels (overrides size) */
  height?: number;

  /** Additional CSS class */
  className?: string;

  /** Alt text for accessibility (defaults to illustration title) */
  alt?: string;

  /** Whether to hide from screen readers */
  'aria-hidden'?: boolean;
}

/** Size mappings from design tokens */
const SIZES = {
  small: { width: 400, height: 200 },
  medium: { width: 600, height: 300 },
  large: { width: 800, height: 400 },
} as const;

export const Illustration: React.FC<IllustrationProps> = ({
  name,
  size = 'medium',
  width,
  height,
  className,
  alt,
  'aria-hidden': ariaHidden = true,
}) => {
  // Determine dimensions
  const dimensions = width && height
    ? { width, height }
    : SIZES[size];

  // Get the SVG component
  const IllustrationSVG = illustrations[name];

  // Generate title from name for accessibility
  const title = alt || name.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Fallback if illustration not found
  if (!IllustrationSVG) {
    console.warn(`Illustration "${name}" not found in illustrations mapping`);
    return (
      <div
        className={clsx(styles.illustration, styles.placeholder, className)}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
        role="presentation"
        aria-hidden="true"
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width={dimensions.width}
            height={dimensions.height}
            fill="#F8F8FC"
            stroke="#E4E7F5"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#7B7D85"
            fontSize="14"
            fontFamily="SF Pro Text, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
          >
            {name} (not found)
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={clsx(styles.illustration, className)}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      role={ariaHidden ? 'presentation' : 'img'}
      aria-label={ariaHidden ? undefined : title}
      aria-hidden={ariaHidden}
    >
      <IllustrationSVG
        width={dimensions.width}
        height={dimensions.height}
        aria-hidden={ariaHidden}
      />
    </div>
  );
};

export * from './types';
