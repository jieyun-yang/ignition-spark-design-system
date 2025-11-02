# Illustrations

This directory contains SVG illustrations used throughout the design system.

## Organization

Illustrations are organized into two main categories:

### Emotive Illustrations
Emotional and expressive illustrations for general use.

- **space/** - Space-themed illustrations (Rocket, UFO)
- **kites/** - Kite illustrations (Flying, Crashing)
- **misc/** - Miscellaneous illustrations (Money, Flowers, Ice cream, Coffee)
- **hands/** - Hand gesture illustrations (Thumbs up, High five, Party popper)
- **people-positive/** - Positive people illustrations (Working, Relaxing, etc.)
- **people-negative/** - Negative people illustrations (Working late, Stuck)
- **planes/** - Plane illustrations

### Product Illustrations
Product-specific illustrations for app features.

- **invoices/** - Invoice-related illustrations
- **proposals/** - Proposal-related illustrations
- **engagement-letters/** - Engagement letter illustrations
- **in-app/** - In-app feature illustrations
- **emotive-icons/** - Icon-style emotive illustrations
- **payment-methods/** - Payment method illustrations
- **upsell-options/** - Upsell option illustrations
- **advanced-branding/** - Branding illustrations
- **forms/** - Form-related illustrations

## Exporting from Figma

All illustrations should be exported as SVG from Figma at their standard size of **800x400px**.

### Export Settings:
1. Select the illustration in Figma
2. Right-click → "Copy/Paste as" → "Copy as SVG"
3. Paste into the appropriate category folder
4. Name the file using PascalCase (e.g., `RocketCrash.svg`, `InvoiceLate.svg`)

### Naming Convention:
- Use descriptive PascalCase names
- Match the Figma layer name when possible
- Example: `Category=Invoices, Description=InvoiceLate` → `InvoiceLate.svg`

## Usage

```tsx
import { Illustration } from '@/design-system';

// Direct usage
<Illustration name="product-invoice-late" width={400} height={200} />

// With helper components
<EmptyState
  illustration="product-invoice-late"
  title="No invoices yet"
  description="Create your first invoice to get started"
/>
```

## File Structure

```
illustrations/
├── emotive/
│   ├── space/
│   │   ├── RocketCrash.svg
│   │   └── UFO.svg
│   ├── kites/
│   ├── misc/
│   ├── hands/
│   ├── people-positive/
│   ├── people-negative/
│   └── planes/
├── product/
│   ├── invoices/
│   ├── proposals/
│   ├── engagement-letters/
│   ├── in-app/
│   ├── emotive-icons/
│   ├── payment-methods/
│   ├── upsell-options/
│   ├── advanced-branding/
│   └── forms/
└── README.md
```

## Adding New Illustrations

1. Export SVG from Figma (800x400px)
2. Place in appropriate category folder
3. Update the illustration types in `design-system/components/Illustration/types.ts`
4. The illustration will automatically be available for use
