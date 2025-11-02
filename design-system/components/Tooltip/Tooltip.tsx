/**
 * Tooltip Component
 *
 * A small popup that displays informative text when hovering over an element.
 * Commonly used to explain why elements are disabled or provide additional context.
 *
 * @example
 * <Tooltip content="This feature is disabled">
 *   <Button disabled>Disabled Button</Button>
 * </Tooltip>
 */

import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  /** Tooltip content text */
  content: string;

  /** Child element to attach tooltip to */
  children: React.ReactElement;

  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';

  /** Additional CSS class names */
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={clsx(styles.container, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && content && (
        <div
          className={clsx(
            styles.tooltip,
            styles[`position-${position}`]
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};
