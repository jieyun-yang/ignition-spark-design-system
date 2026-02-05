/**
 * Support Article Link Component
 *
 * A link component for support articles with text or icon variants.
 * Matches Figma Support Article Link design.
 *
 * Figma: https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=6015-4921
 *
 * @example
 * <SupportArticleLink href="/help/article">Learn more</SupportArticleLink>
 * <SupportArticleLink type="icon" href="/help/article" />
 */
import React from 'react';
export interface SupportArticleLinkProps {
    /** Link destination URL */
    href: string;
    /** Display variant - text shows "Learn more", icon shows question mark icon */
    type?: 'text' | 'icon';
    /** Custom text (overrides default "Learn more") */
    children?: React.ReactNode;
    /** Open in new tab */
    external?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Click handler */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
export declare function SupportArticleLink({ href, type, children, external, className, onClick, }: SupportArticleLinkProps): import("react/jsx-runtime").JSX.Element;
