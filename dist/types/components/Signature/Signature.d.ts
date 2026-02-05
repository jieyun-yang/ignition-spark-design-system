/**
 * Signature Component
 *
 * Displays a signature in handwriting-style font
 * Matches Figma Signature design
 */
export interface SignatureProps {
    /** The signature text to display */
    text: string;
    /** Size variant */
    size?: 'small' | 'medium' | 'large';
    /** Additional CSS class */
    className?: string;
}
export declare function Signature({ text, size, className, }: SignatureProps): import("react/jsx-runtime").JSX.Element;
