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
export declare function Overlayer({ visible, onClick, className, zIndex, }: OverlayerProps): import("react/jsx-runtime").JSX.Element | null;
