# Illustration System Guide

Complete guide for using and managing illustrations in the design system.

## Overview

The illustration system provides a unified way to incorporate SVG illustrations throughout the application. Illustrations are organized into two main categories:

- **Emotive Illustrations**: Emotional and expressive graphics for general use
- **Product Illustrations**: Feature-specific illustrations for product workflows

All illustrations follow the standard 800x400px format from Figma and are available in three responsive sizes.

## File Structure

```
design-system/
├── illustrations/
│   ├── emotive/
│   │   ├── space/           # Space-themed illustrations
│   │   ├── kites/           # Kite illustrations
│   │   ├── misc/            # Miscellaneous illustrations
│   │   ├── hands/           # Hand gesture illustrations
│   │   ├── people-positive/ # Positive people illustrations
│   │   ├── people-negative/ # Negative people illustrations
│   │   └── planes/          # Plane illustrations
│   └── product/
│       ├── invoices/        # Invoice-related illustrations
│       ├── proposals/       # Proposal illustrations
│       ├── engagement-letters/
│       ├── in-app/          # In-app feature illustrations
│       ├── emotive-icons/   # Icon-style illustrations
│       ├── payment-methods/ # Payment illustrations
│       ├── upsell-options/  # Upsell illustrations
│       ├── advanced-branding/
│       └── forms/           # Form illustrations
├── components/
│   └── Illustration/
│       ├── Illustration.tsx     # Main component
│       ├── Illustration.module.css
│       ├── types.ts             # TypeScript definitions
│       └── index.ts
└── tokens/
    └── illustrations.ts         # Design tokens
```

## Usage

### Basic Usage

```tsx
import { Illustration } from '@/design-system';

// Use with predefined size
<Illustration name="product-invoice-late" size="medium" />

// Use with custom dimensions
<Illustration
  name="emotive-space-rocket-crash"
  width={600}
  height={300}
/>
```

### With EmptyState Component

The EmptyState component automatically integrates with illustrations:

```tsx
import { EmptyState } from '@/design-system';

<EmptyState
  illustration="product-invoice-late"
  heading="No invoices yet"
  description="Create your first invoice to get started"
  primaryAction={{
    label: 'Create Invoice',
    onClick: () => handleCreateInvoice()
  }}
/>
```

### TypeScript Support

Full TypeScript support with type-safe illustration names:

```tsx
import type {
  IllustrationName,
  EmotiveIllustrationName,
  ProductIllustrationName
} from '@/design-system';

const illustration: IllustrationName = 'product-invoice-late';
```

## Sizes

Three responsive sizes are available:

| Size   | Dimensions | Use Case                          |
|--------|------------|-----------------------------------|
| Small  | 400x200px  | Compact layouts, cards            |
| Medium | 600x300px  | Standard empty states, modals     |
| Large  | 800x400px  | Hero sections, full-width banners |

## Adding New Illustrations

### 1. Export from Figma

1. Open [Spark Illustrations in Figma](https://www.figma.com/design/NNLKM8F3gt5dtilTEBopYh/Spark-%7C-Illustrations)
2. Navigate to the desired illustration
3. Select the illustration frame
4. Right-click → "Copy/Paste as" → "Copy as SVG"
5. The SVG will be copied to your clipboard

### 2. Add to Project

1. Navigate to the appropriate folder in `design-system/illustrations/`
   - For emotive illustrations: `emotive/{subcategory}/`
   - For product illustrations: `product/{subcategory}/`

2. Create a new file with PascalCase naming:
   - Example: `InvoiceLate.svg`, `RocketCrash.svg`

3. Paste the SVG content into the file

### 3. Update Types

Add the new illustration name to `design-system/components/Illustration/types.ts`:

```typescript
export type ProductIllustrationName =
  | 'product-invoice-late'
  | 'product-invoice-paid-purple'
  // ... existing illustrations
  | 'product-your-new-illustration'; // Add here
```

### 4. Import in Component

Update the Illustration component to import the SVG:

```typescript
// In Illustration.tsx
import YourNewIllustration from '../../../illustrations/product/category/YourNewIllustration.svg?react';

// Add to illustration map
const illustrations = {
  'product-your-new-illustration': YourNewIllustration,
  // ... other illustrations
};
```

### 5. Test

```tsx
<Illustration name="product-your-new-illustration" size="medium" />
```

## Design Tokens

Illustration sizes and spacing are defined in design tokens:

```typescript
import { illustrations } from '@/design-system/tokens';

// Access sizes
illustrations.responsive.small.width;  // 400
illustrations.responsive.medium.width; // 600
illustrations.responsive.large.width;  // 800

// Access spacing
illustrations.spacing.top;    // '24px'
illustrations.spacing.bottom; // '24px'
```

## Best Practices

### 1. Use Semantic Names
- ✅ `product-invoice-late`
- ❌ `purple-document-with-clock`

### 2. Choose Appropriate Size
- Use `small` for compact cards and list items
- Use `medium` for empty states and modals
- Use `large` for hero sections and landing pages

### 3. Provide Context
```tsx
// Good - illustration matches the message
<EmptyState
  illustration="product-invoice-late"
  heading="No invoices yet"
  description="..."
/>

// Bad - illustration doesn't match context
<EmptyState
  illustration="emotive-space-rocket-crash"
  heading="No invoices yet"
  description="..."
/>
```

### 4. Accessibility
Illustrations are decorative by default (`aria-hidden="true"`). For meaningful illustrations, provide alt text:

```tsx
<Illustration
  name="product-invoice-late"
  size="medium"
  alt="Overdue invoice illustration"
  aria-hidden={false}
/>
```

## Available Illustrations

### Emotive Category

**Space**
- `emotive-space-rocket-crash`
- `emotive-space-ufo`

**Kites**
- `emotive-kite-crash`
- `emotive-kite-fly`

**Misc**
- `emotive-misc-money`
- `emotive-misc-flower-droop`
- `emotive-misc-flower-grow`
- `emotive-misc-ice-cream-fall`
- `emotive-misc-coffee-spill`

**Hands**
- `emotive-hands-thumbs-up`
- `emotive-hands-coffee-hand-1`
- `emotive-hands-coffee-hand-2`
- `emotive-hands-high-five`
- `emotive-hands-party-popper`

**People - Positive**
- `emotive-people-working-on-laptop`
- `emotive-people-relaxing-1`
- `emotive-people-relaxing-2`
- `emotive-people-telescope`
- `emotive-people-underground`
- `emotive-people-walking-through-door`
- `emotive-people-peeking-through-door`

**People - Negative**
- `emotive-people-working-late`
- `emotive-people-stuck-1`
- `emotive-people-stuck-2`

**Planes**
- `emotive-plane-1`

### Product Category

**Invoices** (20+ illustrations)
- `product-invoice-late`
- `product-invoice-paid-purple`
- `product-invoice-paid-pink`
- `product-invoice-calculator`
- And more...

**Proposals** (12+ illustrations)
- `product-proposal-sent`
- `product-proposal-signature-required`
- `product-proposal-payment-methods`
- And more...

**In-App** (8+ illustrations)
- `product-in-app-dashboard`
- `product-in-app-billing-hub`
- `product-in-app-integrations`
- And more...

**Emotive Icons** (12+ illustrations)
- `product-icon-calendar`
- `product-icon-calculator`
- `product-icon-clock`
- And more...

See [design-system/components/Illustration/types.ts](design-system/components/Illustration/types.ts) for the complete list.

## Figma Resources

- **Emotive Illustrations**: https://www.figma.com/design/NNLKM8F3gt5dtilTEBopYh/Spark-%7C-Illustrations?node-id=3117-2755
- **Product Illustrations**: https://www.figma.com/design/NNLKM8F3gt5dtilTEBopYh/Spark-%7C-Illustrations?node-id=3117-4042

## Demo

View all illustrations in the demo app:
1. Run `npm run dev`
2. Navigate to the "Illustrations" tab
3. Browse emotive and product illustrations
4. See usage examples and integration with EmptyState

## Troubleshooting

**Illustration not appearing?**
1. Check that the SVG file exists in the correct folder
2. Verify the illustration name in `types.ts`
3. Ensure the SVG is imported in the Illustration component
4. Check browser console for errors

**Wrong size?**
- Use the `size` prop: `small`, `medium`, or `large`
- Or use custom `width` and `height` props

**TypeScript errors?**
- Ensure the illustration name is added to `IllustrationName` type
- Check imports from `@/design-system`

## Support

For questions or issues with the illustration system:
1. Check this guide
2. Review the [README.md](design-system/illustrations/README.md)
3. Examine the demo page in the app
4. Refer to Figma source files
