/**
 * Link Component
 *
 * A styled link component with multiple typography variants and hover states.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5998-4772
 *
 * @example
 * <Link href="/path">Click here</Link>
 * <Link href="/docs" variant="h3">Documentation</Link>
 * <Link href="https://example.com" variant="small" external>External link</Link>
 */
import React from 'react';
export interface LinkProps {
    /** Link text content */
    children: React.ReactNode;
    /** Link destination URL */
    href: string;
    /** Typography variant - maps to Figma "Style" property */
    variant?: 'body' | 'body-medium' | 'small' | 'small-medium' | 'extra-small' | 'h1' | 'h2' | 'h3' | 'h4';
    /** Open in new tab (external link) */
    external?: boolean;
    /** Optional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
export declare const Link: React.FC<LinkProps>;
