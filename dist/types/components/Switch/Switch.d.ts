/**
 * Switch Component
 *
 * A switch/toggle component for binary on/off states.
 * Provides visual feedback for state changes.
 *
 * Figma: Matches Switch in Spark Components
 *
 * @example
 * <Switch
 *   checked={isEnabled}
 *   onChange={setIsEnabled}
 *   label="Enable notifications"
 * />
 */
import React from 'react';
export interface SwitchProps {
    /** Checked/on state */
    checked: boolean;
    /** Change handler */
    onChange?: (checked: boolean) => void;
    /** Optional label text */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Optional CSS class name */
    className?: string;
}
export declare const Switch: React.FC<SwitchProps>;
