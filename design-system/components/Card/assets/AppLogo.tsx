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

export type AppName =
  | 'xero'
  | 'quickbooks'
  | 'karbon'
  | 'gusto'
  | 'zapier'
  | 'intuit'
  | 'proconnect'
  | 'myob'
  | 'slack'
  | 'financial-cents'
  | 'cch'
  | 'thompson-reuters'
  | 'fyi-docs';

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

export const AppLogo: React.FC<AppLogoProps> = ({
  app,
  variant = 'default',
  className,
  width = 66,
  height = 66,
}) => {
  // Map app names to their SVG file paths
  const getAppLogoPath = (): string => {
    const appNameMap: Record<AppName, string> = {
      'xero': 'Xero',
      'quickbooks': 'QuickBooks',
      'karbon': 'Karbon',
      'gusto': 'Gusto',
      'zapier': 'Zapier',
      'intuit': 'Intuit',
      'proconnect': 'ProConnect',
      'myob': 'MYOB',
      'slack': 'Slack',
      'financial-cents': 'Financial Cents',
      'cch': 'CCH',
      'thompson-reuters': 'Thompson Reuters',
      'fyi-docs': 'FYI Docs',
    };

    const variantMap: Record<AppLogoVariant, string> = {
      'default': 'Default',
      'icon': 'Icon',
      'hq': 'HQ',
      'xpm': 'XPM',
      'fullsize': 'Full size',
      'small': 'Small',
    };

    // Some apps don't have a "Default" variant, use their primary variant instead
    const defaultVariantOverrides: Partial<Record<AppName, AppLogoVariant>> = {
      'gusto': 'fullsize',
      'financial-cents': 'fullsize',
    };

    // Use override if requesting default for apps that don't have it
    let actualVariant = variant;
    if (variant === 'default' && app in defaultVariantOverrides) {
      actualVariant = defaultVariantOverrides[app]!;
    }

    const appDisplayName = appNameMap[app];
    const variantDisplayName = variantMap[actualVariant];

    return `/design-system/assets/logos/apps/App=${appDisplayName}, Variant=${variantDisplayName}.svg`;
  };

  const logoPath = getAppLogoPath();

  return (
    <img
      src={logoPath}
      alt={`${app} logo`}
      className={className}
      width={width}
      height={height}
      role="img"
      aria-label={`${app} logo`}
    />
  );
};
