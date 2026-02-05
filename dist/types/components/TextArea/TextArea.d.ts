/**
 * TextArea Component
 *
 * Multi-line text input field for longer text content.
 * Supports resizable and fixed-height variants.
 *
 * Figma: Matches TextArea in Spark Components
 *
 * @example
 * <TextArea
 *   value={text}
 *   onChange={setText}
 *   placeholder="Enter your message"
 *   rows={4}
 * />
 */
import React from 'react';
export interface TextAreaProps {
    /** Current text value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Number of visible rows */
    rows?: number;
    /** Disabled state */
    disabled?: boolean;
    /** Invalid/error state */
    invalid?: boolean;
    /** Read-only state */
    readOnly?: boolean;
    /** Whether textarea is resizable */
    resizable?: boolean;
    /** Optional CSS class name */
    className?: string;
    /** Maximum character length */
    maxLength?: number;
}
export declare const TextArea: React.FC<TextAreaProps>;
