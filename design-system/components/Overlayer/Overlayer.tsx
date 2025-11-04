/**
 * Overlayer Component
 *
 * A semi-transparent overlay component typically used with modals, drawers, and popovers.
 * Matches Figma Overlayer design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1337-6441
 *
 * @example
 * <Overlayer visible={isOpen} onClick={handleClose} />
 */

// React import not needed with new JSX transform
import clsx from 'clsx';
import styles from './Overlayer.module.css';

export interface OverlayerProps {
  /** Whether the overlay is visible */
  visible?: boolean;

  /** Click handler - typically to close the overlay */
  onClick?: () => void;

  /** Additional CSS class */
  className?: string;

  /** z-index for stacking context */
  zIndex?: number;
}

export function Overlayer({
  visible = false,
  onClick,
  className,
  zIndex = 1000,
}: OverlayerProps) {
  if (!visible) return null;

  return (
    <div
      className={clsx(styles.overlayer, className)}
      onClick={onClick}
      style={{ zIndex }}
      role="presentation"
      aria-hidden="true"
    />
  );
}
