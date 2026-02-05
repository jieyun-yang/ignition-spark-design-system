/**
 * App Logo Component
 *
 * Figma: Matches App logos in Spark | Foundations
 *
 * Displays logos for integrated applications like Xero, QuickBooks, Karbon, etc.
 *
 * @example
 * <AppLogo app="xero" />
 * <AppLogo app="karbon" variant="icon" />
 * <AppLogo app="gusto" variant="fullsize" width={80} />
 */
import React from 'react';
export type AppName = 'xero' | 'quickbooks' | 'karbon' | 'gusto' | 'zapier' | 'intuit' | 'proconnect' | 'myob' | 'slack' | 'financial-cents' | 'cch' | 'thompson-reuters' | 'fyi-docs';
export type AppLogoVariant = 'default' | 'icon' | 'hq' | 'xpm' | 'fullsize' | 'small';
export interface AppLogoProps {
    /** App name - maps to Figma "App" property */
    app: AppName;
    /** Logo variant - maps to Figma "Variant" property */
    variant?: AppLogoVariant;
    /** Additional CSS class */
    className?: string;
    /** Width (default: 66) */
    width?: number | string;
    /** Height (default: 66) */
    height?: number | string;
}
export declare const AppLogo: React.FC<AppLogoProps>;
