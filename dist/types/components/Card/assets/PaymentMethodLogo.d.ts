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
export type PaymentMethod = 'visa' | 'mastercard' | 'amex' | 'discover' | 'paypal' | 'jcb' | 'diners' | 'unionpay' | 'ach' | 'direct-debit' | 'pre-auth';
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
export declare const PaymentMethodLogo: React.FC<PaymentMethodLogoProps>;
