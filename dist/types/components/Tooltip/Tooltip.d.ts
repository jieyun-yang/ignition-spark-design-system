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
import React from 'react';
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
export declare const Tooltip: React.FC<TooltipProps>;
