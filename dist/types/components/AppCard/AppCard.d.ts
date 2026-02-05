/**
 * AppCard Component
 *
 * A square card component specifically designed for displaying app integrations
 * with centered content, app logos, and optional badges or premium banners.
 *
 * Figma: Matches App card in Spark Components
 *
 * @example
 * <AppCard
 *   appName="Xero"
 *   description="Connect your accounting"
 *   logo={<AppLogo app="xero" width={64} height={64} />}
 * />
 */
import React from 'react';
export interface AppCardProps {
    /** App logo component */
    logo: React.ReactNode;
    /** App name */
    appName: string;
    /** App description */
    description: string;
    /** Badge text (e.g., "Connected") */
    badge?: string;
    /** Badge variant (color) */
    badgeVariant?: 'green' | 'red' | 'grey' | 'yellow' | 'blue';
    /** Show premium banner at top */
    premium?: boolean;
    /** Selected state */
    selected?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Show locked icon (for disabled/locked apps) */
    locked?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS class */
    className?: string;
}
export declare const AppCard: React.FC<AppCardProps>;
