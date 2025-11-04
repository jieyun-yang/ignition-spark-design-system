/**
 * Signature Component
 *
 * Displays a signature in handwriting-style font
 * Matches Figma Signature design
 */

// React import not needed with new JSX transform
import clsx from 'clsx';
import styles from './Signature.module.css';

export interface SignatureProps {
  /** The signature text to display */
  text: string;

  /** Size variant */
  size?: 'small' | 'medium' | 'large';

  /** Additional CSS class */
  className?: string;
}

export function Signature({
  text,
  size = 'medium',
  className,
}: SignatureProps) {
  return (
    <div
      className={clsx(
        styles.signature,
        styles[`size-${size}`],
        className
      )}
    >
      {text}
    </div>
  );
}
