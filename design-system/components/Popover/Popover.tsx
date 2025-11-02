/**
 * Popover Component
 *
 * A floating container component that appears near a trigger element.
 * Typically used for contextual actions, forms, or additional information.
 * Matches Figma Popover design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1368-6681
 *
 * @example
 * <Popover
 *   visible={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   anchorEl={buttonRef.current}
 * >
 *   <p>Popover content</p>
 * </Popover>
 */

import React, { useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Popover.module.css';

export interface PopoverProps {
  /** Whether the popover is visible */
  visible?: boolean;

  /** Callback when popover should close */
  onClose?: () => void;

  /** Anchor element to position the popover near */
  anchorEl?: HTMLElement | null;

  /** Popover content */
  children: React.ReactNode;

  /** Size variant */
  size?: 'small' | 'medium' | 'large';

  /** Position relative to anchor */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end';

  /** Additional CSS class */
  className?: string;

  /** z-index for stacking */
  zIndex?: number;
}

export function Popover({
  visible = false,
  onClose,
  anchorEl,
  children,
  size = 'medium',
  placement = 'bottom',
  className,
  zIndex = 1001,
}: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  // Calculate position based on anchor element
  useEffect(() => {
    if (!visible || !anchorEl || !popoverRef.current) return;

    const updatePosition = () => {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popoverRect = popoverRef.current!.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = 0;
      let left = 0;

      switch (placement) {
        case 'bottom':
          top = anchorRect.bottom + 8;
          left = anchorRect.left + anchorRect.width / 2 - popoverRect.width / 2;
          break;
        case 'bottom-start':
          top = anchorRect.bottom + 8;
          left = anchorRect.left;
          break;
        case 'bottom-end':
          top = anchorRect.bottom + 8;
          left = anchorRect.right - popoverRect.width;
          break;
        case 'top':
          top = anchorRect.top - popoverRect.height - 8;
          left = anchorRect.left + anchorRect.width / 2 - popoverRect.width / 2;
          break;
        case 'left':
          top = anchorRect.top + anchorRect.height / 2 - popoverRect.height / 2;
          left = anchorRect.left - popoverRect.width - 8;
          break;
        case 'right':
          top = anchorRect.top + anchorRect.height / 2 - popoverRect.height / 2;
          left = anchorRect.right + 8;
          break;
      }

      // Viewport boundary detection - keep popover fully visible
      const margin = 8;

      // Check right edge
      if (left + popoverRect.width > viewportWidth - margin) {
        left = viewportWidth - popoverRect.width - margin;
      }

      // Check left edge
      if (left < margin) {
        left = margin;
      }

      // Check bottom edge
      if (top + popoverRect.height > viewportHeight - margin) {
        // If popover goes below viewport, try to position it above anchor
        const topAlternative = anchorRect.top - popoverRect.height - 8;
        if (topAlternative >= margin) {
          top = topAlternative;
        } else {
          // If it doesn't fit above either, position at bottom with scroll
          top = viewportHeight - popoverRect.height - margin;
        }
      }

      // Check top edge
      if (top < margin) {
        top = margin;
      }

      setPosition({ top, left });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [visible, anchorEl, placement]);

  useEffect(() => {
    if (!visible) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClose?.();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose?.();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [visible, onClose, anchorEl]);

  if (!visible) return null;

  return (
    <div
      ref={popoverRef}
      className={clsx(
        styles.popover,
        styles[`size-${size}`],
        styles[`placement-${placement}`],
        className
      )}
      style={{
        zIndex,
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      role="dialog"
      aria-modal="false"
    >
      <div className={styles.content}>{children}</div>
      <div className={styles.arrow} />
    </div>
  );
}
