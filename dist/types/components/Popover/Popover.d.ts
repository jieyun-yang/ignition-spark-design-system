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
import React from 'react';
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
export declare function Popover({ visible, onClose, anchorEl, children, size, placement, className, zIndex, }: PopoverProps): import("react/jsx-runtime").JSX.Element | null;
