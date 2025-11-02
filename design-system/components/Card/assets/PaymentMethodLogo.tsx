/**
 * Payment Method Logo Component
 *
 * Figma: Matches Payment Method logos in Spark | Foundations
 *
 * Displays logos for payment methods like Visa, Mastercard, PayPal, etc.
 *
 * @example
 * <PaymentMethodLogo method="visa" />
 * <PaymentMethodLogo method="mastercard" width={84} height={58} />
 * <PaymentMethodLogo method="paypal" />
 */

import React from 'react';

export type PaymentMethod =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'discover'
  | 'paypal'
  | 'jcb'
  | 'diners'
  | 'unionpay'
  | 'ach'
  | 'direct-debit'
  | 'pre-auth';

export interface PaymentMethodLogoProps {
  /** Payment method - maps to Figma "Method" property */
  method: PaymentMethod;

  /** Additional CSS class */
  className?: string;

  /** Width (default: 84) */
  width?: number | string;

  /** Height (default: 58) */
  height?: number | string;
}

export const PaymentMethodLogo: React.FC<PaymentMethodLogoProps> = ({
  method,
  className,
  width = 84,
  height = 58,
}) => {
  // Map method names to their SVG file names
  const getMethodLogoPath = (): string => {
    const methodNameMap: Record<PaymentMethod, string> = {
      'visa': 'Visa',
      'mastercard': 'Mastercard',
      'amex': 'Amex',
      'discover': 'Discover',
      'paypal': 'Paypal',
      'jcb': 'JCB',
      'diners': 'Diners',
      'unionpay': 'Unionpay',
      'ach': 'ACH',
      'direct-debit': 'Direct Debit',
      'pre-auth': 'Pre-Auth',
    };

    const methodDisplayName = methodNameMap[method];
    return `/design-system/assets/logos/payment-methods/Method=${methodDisplayName}.svg`;
  };

  const logoPath = getMethodLogoPath();

  return (
    <img
      src={logoPath}
      alt={`${method} payment method`}
      className={className}
      width={width}
      height={height}
      role="img"
      aria-label={`${method} payment method`}
    />
  );
};
