/**
 * Illustrations Demo
 *
 * Showcases illustration system with all categories and helper components
 */

import { useState } from 'react';
import { Illustration, EmptyState, type IllustrationName } from '../design-system';
import './App.css';

// All emotive illustrations grouped by category
const emotiveIllustrations: Array<{name: IllustrationName; label: string; category: string}> = [
  // Space
  { name: 'emotive-space-rocket-crash', label: 'Rocket Crash', category: 'Space' },
  { name: 'emotive-space-ufo', label: 'UFO', category: 'Space' },
  // Kites
  { name: 'emotive-kite-crash', label: 'Kite Crash', category: 'Kites' },
  { name: 'emotive-kite-fly', label: 'Kite Fly', category: 'Kites' },
  // Misc
  { name: 'emotive-misc-money', label: 'Money', category: 'Misc' },
  { name: 'emotive-misc-flower-droop', label: 'Flower Droop', category: 'Misc' },
  { name: 'emotive-misc-flower-grow', label: 'Flower Grow', category: 'Misc' },
  { name: 'emotive-misc-ice-cream-fall', label: 'Ice Cream Fall', category: 'Misc' },
  { name: 'emotive-misc-coffee-spill', label: 'Coffee Spill', category: 'Misc' },
  // Hands
  { name: 'emotive-hands-thumbs-up', label: 'Thumbs Up', category: 'Hands' },
  { name: 'emotive-hands-coffee-hand-1', label: 'Coffee Hand 1', category: 'Hands' },
  { name: 'emotive-hands-coffee-hand-2', label: 'Coffee Hand 2', category: 'Hands' },
  { name: 'emotive-hands-high-five', label: 'High Five', category: 'Hands' },
  { name: 'emotive-hands-party-popper', label: 'Party Popper', category: 'Hands' },
  // People - Positive
  { name: 'emotive-people-working-on-laptop', label: 'Working on Laptop', category: 'People' },
  { name: 'emotive-people-relaxing-1', label: 'Relaxing 1', category: 'People' },
  { name: 'emotive-people-relaxing-2', label: 'Relaxing 2', category: 'People' },
  { name: 'emotive-people-telescope', label: 'Telescope', category: 'People' },
  { name: 'emotive-people-underground', label: 'Underground', category: 'People' },
  { name: 'emotive-people-walking-through-door', label: 'Walking Through Door', category: 'People' },
  { name: 'emotive-people-peeking-through-door', label: 'Peeking Through Door', category: 'People' },
  // People - Negative
  { name: 'emotive-people-working-late', label: 'Working Late', category: 'People' },
  { name: 'emotive-people-stuck-1', label: 'Stuck 1', category: 'People' },
  { name: 'emotive-people-stuck-2', label: 'Stuck 2', category: 'People' },
  // Planes
  { name: 'emotive-plane-1', label: 'Plane 1', category: 'Planes' },
];

// All product illustrations grouped by category
const productIllustrations: Array<{name: IllustrationName; label: string; category: string}> = [
  // Invoices
  { name: 'product-invoice-late', label: 'Invoice Late', category: 'Invoices' },
  { name: 'product-invoice-paid-purple', label: 'Invoice Paid (Purple)', category: 'Invoices' },
  { name: 'product-invoice-paid-pink', label: 'Invoice Paid (Pink)', category: 'Invoices' },
  { name: 'product-invoice-pay-now', label: 'Invoice Pay Now', category: 'Invoices' },
  { name: 'product-invoice-price-increase', label: 'Invoice Price Increase', category: 'Invoices' },
  { name: 'product-invoice-calculator', label: 'Invoice Calculator', category: 'Invoices' },
  { name: 'product-invoice-calendar', label: 'Invoice Calendar', category: 'Invoices' },
  { name: 'product-invoice-ledger-connect', label: 'Ledger Connect', category: 'Invoices' },
  { name: 'product-invoice-qbo-xero', label: 'QBO Xero', category: 'Invoices' },
  { name: 'product-invoice-payments-details-paid', label: 'Payments Details Paid', category: 'Invoices' },
  // Proposals
  { name: 'product-proposal-signature-required', label: 'Signature Required', category: 'Proposals' },
  { name: 'product-proposal-payment-methods', label: 'Payment Methods', category: 'Proposals' },
  { name: 'product-proposal-payment-methods-alt', label: 'Payment Methods Alt', category: 'Proposals' },
  { name: 'product-proposal-sent', label: 'Proposal Sent', category: 'Proposals' },
  { name: 'product-proposal-your-logo-left', label: 'Your Logo Left', category: 'Proposals' },
  { name: 'product-proposal-your-logo-right', label: 'Your Logo Right', category: 'Proposals' },
  { name: 'product-proposal-video', label: 'Video', category: 'Proposals' },
  { name: 'product-proposal-add-service', label: 'Add Service', category: 'Proposals' },
  { name: 'product-proposal-add-service-generic', label: 'Add Service Generic', category: 'Proposals' },
  { name: 'product-proposal-upsell-options', label: 'Upsell Options', category: 'Proposals' },
  { name: 'product-proposal-pricing-intelligence', label: 'Pricing Intelligence', category: 'Proposals' },
  { name: 'product-proposal-price-insights-simple', label: 'Price Insights Simple', category: 'Proposals' },
  // Engagement Letters
  { name: 'product-engagement-signature-required', label: 'Signature Required', category: 'Engagement Letters' },
  { name: 'product-engagement-signed-terms', label: 'Signed Terms', category: 'Engagement Letters' },
  { name: 'product-engagement-placeholders', label: 'Placeholders', category: 'Engagement Letters' },
  { name: 'product-engagement-sent', label: 'Engagement Sent', category: 'Engagement Letters' },
  { name: 'product-engagement-terms-and-conditions', label: 'Terms and Conditions', category: 'Engagement Letters' },
  // In-App
  { name: 'product-in-app-billing-hub-payments', label: 'Billing Hub Payments', category: 'In-App' },
  { name: 'product-in-app-billing-hub', label: 'Billing Hub', category: 'In-App' },
  { name: 'product-in-app-integrations', label: 'Integrations', category: 'In-App' },
  { name: 'product-in-app-dashboard', label: 'Dashboard', category: 'In-App' },
  { name: 'product-in-app-trial-ending', label: 'Trial Ending', category: 'In-App' },
  { name: 'product-in-app-forms', label: 'Forms', category: 'In-App' },
  { name: 'product-in-app-deals', label: 'Deals', category: 'In-App' },
  { name: 'product-in-app-payments', label: 'Payments', category: 'In-App' },
  // Icons
  { name: 'product-icon-calendar', label: 'Calendar Icon', category: 'Icons' },
  { name: 'product-icon-calculator', label: 'Calculator Icon', category: 'Icons' },
  { name: 'product-icon-clock', label: 'Clock Icon', category: 'Icons' },
  { name: 'product-icon-mail', label: 'Mail Icon', category: 'Icons' },
  { name: 'product-icon-bar-graph-increase', label: 'Bar Graph Increase', category: 'Icons' },
  { name: 'product-icon-bar-graph-increase-plane', label: 'Bar Graph Increase Plane', category: 'Icons' },
  { name: 'product-icon-pricing-low', label: 'Pricing Low', category: 'Icons' },
  { name: 'product-icon-pricing-correct', label: 'Pricing Correct', category: 'Icons' },
  { name: 'product-icon-pricing', label: 'Pricing', category: 'Icons' },
  { name: 'product-icon-checklist', label: 'Checklist', category: 'Icons' },
  { name: 'product-icon-checklist-v2', label: 'Checklist V2', category: 'Icons' },
  // Payment Methods
  { name: 'product-payment-card', label: 'Payment Card', category: 'Payment Methods' },
  { name: 'product-payment-secure', label: 'Payment Secure', category: 'Payment Methods' },
  { name: 'product-payment-card-paid-stamp', label: 'Card Paid Stamp', category: 'Payment Methods' },
  { name: 'product-payment-card-not-paid', label: 'Card Not Paid', category: 'Payment Methods' },
  { name: 'product-payment-card-warning', label: 'Card Warning', category: 'Payment Methods' },
  { name: 'product-payment-paid-stamp-pink', label: 'Paid Stamp Pink', category: 'Payment Methods' },
  { name: 'product-payment-paid-stamp-purple', label: 'Paid Stamp Purple', category: 'Payment Methods' },
  { name: 'product-payment-late-stamp-red', label: 'Late Stamp Red', category: 'Payment Methods' },
  // Upsell
  { name: 'product-upsell-big-middle', label: 'Upsell Big Middle', category: 'Upsell' },
  { name: 'product-upsell-same-size', label: 'Upsell Same Size', category: 'Upsell' },
  { name: 'product-upsell-with-space', label: 'Upsell With Space', category: 'Upsell' },
  // Branding
  { name: 'product-branding-landing-page', label: 'Branding Landing Page', category: 'Branding' },
];

function IllustrationsDemo() {
  const [showAllEmotive, setShowAllEmotive] = useState(false);
  const [showAllProduct, setShowAllProduct] = useState(false);

  const displayedEmotive = showAllEmotive ? emotiveIllustrations : emotiveIllustrations.slice(0, 6);
  const displayedProduct = showAllProduct ? productIllustrations : productIllustrations.slice(0, 6);

  // Group illustrations by category
  const groupByCategory = (illustrations: Array<{name: IllustrationName; label: string; category: string}>) => {
    const grouped: Record<string, Array<{name: IllustrationName; label: string; category: string}>> = {};
    illustrations.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  };

  const emotiveByCategory = groupByCategory(displayedEmotive);
  const productByCategory = groupByCategory(displayedProduct);

  return (
    <div className="app">
      <header className="header">
        <h1>Illustrations</h1>
        <p>Illustration system with emotive and product-specific graphics</p>
      </header>

      <main className="main">
        {/* Overview */}
        <section className="section">
          <h2>Overview</h2>
          <p style={{ marginBottom: '16px', color: '#7b7d85', fontSize: '14px' }}>
            Illustrations are organized into two main categories: <strong>Emotive</strong> (emotional and expressive)
            and <strong>Product</strong> (feature-specific). All illustrations are 800x400px and available in three responsive sizes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '24px' }}>
            <div style={{ padding: '16px', backgroundColor: '#f8f8fc', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 8px 0' }}>Emotive ({emotiveIllustrations.length})</h3>
              <p style={{ fontSize: '14px', color: '#5a5b60', margin: 0 }}>
                Space, Kites, Misc, Hands, People (Positive/Negative), Planes
              </p>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f8f8fc', borderRadius: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 500, margin: '0 0 8px 0' }}>Product ({productIllustrations.length})</h3>
              <p style={{ fontSize: '14px', color: '#5a5b60', margin: 0 }}>
                Invoices, Proposals, Engagement Letters, In-App, Icons, Payment Methods, Forms
              </p>
            </div>
          </div>
        </section>

        {/* Emotive Illustrations */}
        <section className="section">
          <h2>Emotive Illustrations</h2>
          <p style={{ marginBottom: '24px', color: '#7b7d85', fontSize: '14px' }}>
            Emotional and expressive illustrations for general use ({emotiveIllustrations.length} total)
          </p>
          {Object.entries(emotiveByCategory).map(([category, items]) => (
            <div key={category} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#5a5b60', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {category}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 140px))', gap: '16px', justifyContent: 'start' }}>
                {items.map((item) => (
                  <div key={item.name} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Illustration name={item.name} width={140} height={70} />
                    <p style={{ marginTop: '8px', fontSize: '12px', color: '#3c3d40', fontWeight: 500 }}>
                      {item.label}
                    </p>
                    <code style={{ fontSize: '10px', color: '#7b7d85', backgroundColor: '#f8f8fc', padding: '2px 4px', borderRadius: '3px', display: 'block', marginTop: '4px', wordBreak: 'break-all' }}>
                      {item.name}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {emotiveIllustrations.length > 6 && (
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <button
                onClick={() => setShowAllEmotive(!showAllEmotive)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#e4e7f5',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#3c3d40',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {showAllEmotive ? `Show Less` : `Show All ${emotiveIllustrations.length} Illustrations`}
              </button>
            </div>
          )}
        </section>

        {/* Product Illustrations */}
        <section className="section">
          <h2>Product Illustrations</h2>
          <p style={{ marginBottom: '24px', color: '#7b7d85', fontSize: '14px' }}>
            Product-specific illustrations for app features ({productIllustrations.length} total)
          </p>
          {Object.entries(productByCategory).map(([category, items]) => (
            <div key={category} style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#5a5b60', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {category}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 140px))', gap: '16px', justifyContent: 'start' }}>
                {items.map((item) => (
                  <div key={item.name} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Illustration name={item.name} width={140} height={70} />
                    <p style={{ marginTop: '8px', fontSize: '12px', color: '#3c3d40', fontWeight: 500 }}>
                      {item.label}
                    </p>
                    <code style={{ fontSize: '10px', color: '#7b7d85', backgroundColor: '#f8f8fc', padding: '2px 4px', borderRadius: '3px', display: 'block', marginTop: '4px', wordBreak: 'break-all' }}>
                      {item.name}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {productIllustrations.length > 6 && (
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <button
                onClick={() => setShowAllProduct(!showAllProduct)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#e4e7f5',
                  border: 'none',
                  borderRadius: '4px',
                  color: '#3c3d40',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {showAllProduct ? `Show Less` : `Show All ${productIllustrations.length} Illustrations`}
              </button>
            </div>
          )}
        </section>

        {/* Sizes */}
        <section className="section">
          <h2>Responsive Sizes</h2>
          <p style={{ marginBottom: '24px', color: '#7b7d85', fontSize: '14px' }}>
            Illustrations are available in three sizes: small (400x200), medium (600x300), and large (800x400)
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Small (400x200px)</h3>
              <Illustration name="product-invoice-late" size="small" />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Medium (600x300px)</h3>
              <Illustration name="product-invoice-late" size="medium" />
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>Large (800x400px)</h3>
              <Illustration name="product-invoice-late" size="large" />
            </div>
          </div>
        </section>

        {/* With EmptyState Component */}
        <section className="section">
          <h2>With EmptyState Component</h2>
          <p style={{ marginBottom: '24px', color: '#7b7d85', fontSize: '14px' }}>
            Illustrations integrate seamlessly with the EmptyState helper component
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '32px', backgroundColor: '#f8f8fc', borderRadius: '8px', border: '1px solid #e4e7f5' }}>
              <EmptyState
                illustration="product-invoice-late"
                heading="No invoices yet"
                description="Create your first invoice to get started with billing."
                size="medium"
                primaryAction={{
                  label: 'Create Invoice',
                  onClick: () => alert('Create invoice clicked!'),
                }}
              />
            </div>

            <div style={{ padding: '32px', backgroundColor: '#f8f8fc', borderRadius: '8px', border: '1px solid #e4e7f5' }}>
              <EmptyState
                illustration="product-in-app-dashboard"
                heading="Welcome to your dashboard"
                description="Start exploring your analytics and insights."
                size="medium"
                primaryAction={{
                  label: 'Get Started',
                  onClick: () => alert('Get started clicked!'),
                }}
                secondaryAction={{
                  label: 'Learn More',
                  onClick: () => alert('Learn more clicked!'),
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default IllustrationsDemo;
