# Logo Components

This directory contains SVG logo assets organized by category. These logos are consumed by React components in the design system.

## Directory Structure

```
logos/
├── ignition/          # Ignition brand logos
├── apps/              # Third-party app integration logos
├── payment-methods/   # Payment method logos
└── README.md          # This file
```

## Ignition Logos

### Variants

| Variant | File | Description | Usage |
|---------|------|-------------|-------|
| **Spark** | `Color=Spark.svg` | Orange spark icon (#F4502A) | Default brand mark |
| **Positive** | `Color=Positive.svg` | Dark text with orange spark | For light backgrounds |
| **Nositive** | `Color=Nositive.svg` | White text with white spark | For dark backgrounds |

### Component Usage

```tsx
import { IgnitionLogo } from '@/design-system/components/Card/assets';

// Icon only (24x24, orange)
<IgnitionLogo />
<IgnitionLogo variant="spark" type="icon" />

// Full logo with text - for light backgrounds
<IgnitionLogo variant="positive" type="full" />

// Full logo with text - for dark backgrounds
<IgnitionLogo variant="nositive" type="full" />

// Custom size
<IgnitionLogo width={48} height={48} />
```

## App Logos

Third-party application integration logos.

### Available Apps

| App | Variants | Dimensions |
|-----|----------|------------|
| **Xero** | Default, HQ, XPM | 66x66 |
| **QuickBooks** | Default | 66x66 |
| **Karbon** | Default, Icon | 66x66 |
| **Gusto** | Full size, Small | 66x66 |
| **Zapier** | Default | Various |
| **Financial Cents** | Full size, Icon | 66x66 |
| **CCH** | Default, Icon | 66x66 |
| **Thompson Reuters** | Default, Icon | 66x66 |
| **FYI Docs** | Default | 66x66 |
| **Intuit** | Default | 66x66 |
| **ProConnect** | Default | 66x66 |
| **MYOB** | Default | 66x66 |
| **Slack** | Default | 66x66 |

### Component Usage

```tsx
import { AppLogo } from '@/design-system/components/Card/assets';

// Default variant
<AppLogo app="xero" />

// Specific variant
<AppLogo app="xero" variant="hq" />
<AppLogo app="karbon" variant="icon" />
<AppLogo app="gusto" variant="fullsize" />

// Custom size
<AppLogo app="quickbooks" width={80} height={80} />
```

## Payment Method Logos

Payment method and card type logos.

### Available Methods

| Method | File | Dimensions |
|--------|------|------------|
| **Visa** | `Method=Visa.svg` | 84x58 |
| **Mastercard** | `Method=Mastercard.svg` | 84x58 |
| **American Express** | `Method=Amex.svg` | 84x58 |
| **Discover** | `Method=Discover.svg` | 84x58 |
| **PayPal** | `Method=Paypal.svg` | 84x58 |
| **JCB** | `Method=JCB.svg` | 84x58 |
| **Diners Club** | `Method=Diners.svg` | 84x58 |
| **UnionPay** | `Method=Unionpay.svg` | 84x58 |
| **ACH** | `Method=ACH.svg` | 84x58 |
| **Direct Debit** | `Method=Direct Debit.svg` | 84x58 |
| **Pre-Auth** | `Method=Pre-Auth.svg` | 84x58 |

### Component Usage

```tsx
import { PaymentMethodLogo } from '@/design-system/components/Card/assets';

// Default size (84x58)
<PaymentMethodLogo method="visa" />
<PaymentMethodLogo method="mastercard" />
<PaymentMethodLogo method="paypal" />

// Custom size
<PaymentMethodLogo method="amex" width={100} height={70} />
```

## File Naming Convention

All logo files follow Figma's naming convention:

- **Ignition**: `Color={variant}.svg`
- **Apps**: `App={AppName}, Variant={VariantName}.svg`
- **Payment Methods**: `Method={MethodName}.svg`

## Adding New Logos

### From Figma

1. Select the logo component in Figma
2. Right-click → Export → SVG
3. Save to the appropriate directory:
   - Brand logos → `ignition/`
   - App logos → `apps/`
   - Payment logos → `payment-methods/`
4. Follow the naming convention exactly as it appears in Figma
5. Update the component types if adding new apps/methods

### Updating Components

If you add a new app logo, update the `AppName` type in [AppLogo.tsx](../../components/Card/assets/AppLogo.tsx):

```typescript
export type AppName =
  | 'existing-app'
  | 'new-app-name';  // Add here
```

If you add a new payment method, update the `PaymentMethod` type in [PaymentMethodLogo.tsx](../../components/Card/assets/PaymentMethodLogo.tsx):

```typescript
export type PaymentMethod =
  | 'existing-method'
  | 'new-method';  // Add here
```

## Best Practices

### DO

- ✅ Use the React components instead of `<img>` tags directly
- ✅ Preserve the original SVG from Figma without modifications
- ✅ Follow the exact naming convention from Figma
- ✅ Provide meaningful alt text via component props
- ✅ Use design tokens for sizing when possible

### DON'T

- ❌ Don't hardcode logo SVGs inline in components
- ❌ Don't modify SVG colors or paths (use originals from Figma)
- ❌ Don't create arbitrary file names
- ❌ Don't skip accessibility attributes
- ❌ Don't use logos outside their intended context

## Accessibility

All logo components include:
- `role="img"` attribute
- Appropriate `aria-label` describing the logo
- Alt text for screen readers

## Responsive Sizing

Logos are exported at their default sizes from Figma:
- **Ignition Icon**: 24×24px
- **Ignition Full**: ~74×24px
- **App Logos**: 66×66px
- **Payment Logos**: 84×58px

Use the `width` and `height` props to scale as needed while maintaining aspect ratio.

## Questions?

Refer to the Figma design system: [Spark | Foundations](https://www.figma.com/design/5kFjDPjeMCmClqXgcPazK0)
