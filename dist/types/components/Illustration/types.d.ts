/**
 * Illustration Types
 *
 * Type definitions for all available illustrations in the design system.
 * Illustrations are organized by category (Emotive vs Product).
 */
/** Emotive illustration names - emotional and expressive illustrations */
export type EmotiveIllustrationName = 'emotive-space-rocket-crash' | 'emotive-space-ufo' | 'emotive-kite-crash' | 'emotive-kite-fly' | 'emotive-misc-money' | 'emotive-misc-flower-droop' | 'emotive-misc-flower-grow' | 'emotive-misc-ice-cream-fall' | 'emotive-misc-coffee-spill' | 'emotive-hands-thumbs-up' | 'emotive-hands-coffee-hand-1' | 'emotive-hands-coffee-hand-2' | 'emotive-hands-high-five' | 'emotive-hands-party-popper' | 'emotive-people-working-on-laptop' | 'emotive-people-relaxing-1' | 'emotive-people-relaxing-2' | 'emotive-people-telescope' | 'emotive-people-underground' | 'emotive-people-walking-through-door' | 'emotive-people-peeking-through-door' | 'emotive-people-working-late' | 'emotive-people-stuck-1' | 'emotive-people-stuck-2' | 'emotive-plane-1';
/** Product illustration names - product-specific feature illustrations */
export type ProductIllustrationName = 'product-invoice-late' | 'product-invoice-paid-purple' | 'product-invoice-paid-pink' | 'product-invoice-pay-now' | 'product-invoice-price-increase' | 'product-invoice-calculator' | 'product-invoice-calendar' | 'product-invoice-ledger-connect' | 'product-invoice-qbo-xero' | 'product-invoice-payments-details-paid' | 'product-proposal-signature-required' | 'product-proposal-payment-methods' | 'product-proposal-payment-methods-alt' | 'product-proposal-sent' | 'product-proposal-your-logo-left' | 'product-proposal-your-logo-right' | 'product-proposal-video' | 'product-proposal-add-service' | 'product-proposal-add-service-generic' | 'product-proposal-upsell-options' | 'product-proposal-pricing-intelligence' | 'product-proposal-price-insights-simple' | 'product-engagement-signature-required' | 'product-engagement-signed-terms' | 'product-engagement-placeholders' | 'product-engagement-sent' | 'product-engagement-terms-and-conditions' | 'product-in-app-billing-hub-payments' | 'product-in-app-billing-hub' | 'product-in-app-integrations' | 'product-in-app-dashboard' | 'product-in-app-trial-ending' | 'product-in-app-forms' | 'product-in-app-deals' | 'product-in-app-payments' | 'product-icon-calendar' | 'product-icon-calculator' | 'product-icon-clock' | 'product-icon-mail' | 'product-icon-bar-graph-increase' | 'product-icon-bar-graph-increase-plane' | 'product-icon-pricing-low' | 'product-icon-pricing-correct' | 'product-icon-pricing' | 'product-icon-checklist' | 'product-icon-checklist-v2' | 'product-payment-card' | 'product-payment-secure' | 'product-payment-card-paid-stamp' | 'product-payment-card-not-paid' | 'product-payment-card-warning' | 'product-payment-paid-stamp-pink' | 'product-payment-paid-stamp-purple' | 'product-payment-late-stamp-red' | 'product-upsell-big-middle' | 'product-upsell-same-size' | 'product-upsell-with-space' | 'product-branding-landing-page' | 'product-forms-fill';
/** All available illustration names */
export type IllustrationName = EmotiveIllustrationName | ProductIllustrationName;
/** Illustration categories */
export type IllustrationCategory = 'emotive' | 'product';
/** Illustration metadata */
export interface IllustrationMeta {
    /** Illustration name/ID */
    name: IllustrationName;
    /** Category (emotive or product) */
    category: IllustrationCategory;
    /** Sub-category (e.g., 'space', 'invoices') */
    subcategory: string;
    /** Display title */
    title: string;
    /** Optional description */
    description?: string;
}
