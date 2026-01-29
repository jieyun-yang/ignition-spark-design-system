# Icon Component Guidelines

## Overview

The Icon component provides a unified way to use FontAwesome icons from locally bundled SVG files. This eliminates external dependencies and API/package token usage.

## Usage

```tsx
import { Icon } from './design-system';

// Regular variant (default) - use for most cases
<Icon name="circle-info" />
<Icon name="search" />
<Icon name="bell" />

// Solid variant - use for emphasis or specific design requirements
<Icon name="check" variant="solid" />
<Icon name="chevron-down" variant="solid" />

// With size
<Icon name="search" size="lg" />

// With spin animation (for loading states)
<Icon name="spinner" spin />

// With custom className
<Icon name="xmark" className={styles.closeIcon} />
```

## Design Guidelines

### Variant Selection

| Variant | When to Use |
|---------|-------------|
| `regular` (default) | Standard UI elements, alerts, toasts, header icons, buttons |
| `solid` | Chevrons/carets, checkmarks, action confirmations, emphasis |
| `light` | Navigation item icons (SideNav main items), user avatars, subtle UI |

**Rule:** Use Regular by default. Use Light for SideNav nav item icons. Use Solid for chevrons/carets (expand/collapse indicators).

### SideNav Icon Usage (per Figma)

| Element | Variant | Size |
|---------|---------|------|
| Header icons (search, bell) | `regular` | md (16px) |
| Create button icons | `regular` | sm (14px) |
| Create button chevron | `solid` | sm (14px) |
| Nav item icons | `light` | lg (20px) |
| Nav item chevrons | `solid` | sm (14px) |
| Refer button icon | `light` | md (16px) |
| User avatar icon | `light` | lg (20px) |
| User chevron | `solid` | sm (14px) |

### Size Options

| Size | Value | Use Case |
|------|-------|----------|
| `xs` | 12px | Inline with small text, badges |
| `sm` | 14px | Inline with body text |
| `md` | 16px | Default, buttons, form elements |
| `lg` | 20px | Headers, emphasis |
| `xl` | 24px | Large displays, empty states |

### Accessibility

- Icons should be decorative by default (`aria-hidden="true"`)
- For meaningful icons, provide `aria-label`:
  ```tsx
  <Icon name="circle-info" aria-label="Information" aria-hidden={false} />
  ```
- Always pair icon-only buttons with tooltips or aria-labels

## Available Icons

### Regular (Default)
- `circle-info` - Information alerts
- `circle-check` - Success states
- `circle-xmark` - Error states
- `circle-question` - Help/support
- `triangle-exclamation` - Warnings
- `lock` - Premium/locked content
- `xmark` - Close/dismiss
- `chevron-up`, `chevron-down` - Expand/collapse
- `ellipsis-vertical` - More actions
- `copy` - Copy action
- `check` - Checkmarks
- `sliders` - Filters
- `search` - Search
- `bell` - Notifications
- `spinner` - Loading

### Solid
- `xmark` - Close buttons
- `chevron-down`, `chevron-left`, `chevron-right` - Navigation
- `angles-left`, `angles-right` - Pagination
- `angle-left`, `angle-right` - Calendar navigation
- `plus` - Add action
- `gift` - Referral/promotions
- `circle-user` - User avatar placeholder
- `calendar` - Date picker
- `ban` - Disabled/blocked
- `check` - Checkboxes, confirmations
- `search` - Search emphasis
- `eye`, `eye-slash` - Password visibility
- `spinner` - Loading

### Light (for SideNav/Navigation)
- `search` - Search icon in navigation
- `bell` - Notifications
- `plus` - Create/add actions
- `chevron-down` - Dropdowns, expand
- `gift` - Refer & earn
- `circle-user` - User avatar placeholder
- `house` - Home/dashboard
- `file-lines` - Documents, proposals, forms
- `briefcase` - Business, deals
- `users` - Clients, team
- `gear` - Settings, services
- `credit-card` - Payments
- `circle-question` - Help
- `folder` - Templates, files
- `grid-2` - Apps, grid view

## Adding New Icons

1. Download the SVG from your FontAwesome kit (`kit-*/svgs/regular/` or `kit-*/svgs/solid/`)
2. Copy to `design-system/components/Icon/svg/regular/` or `.../solid/`
3. Add the import in `Icon.tsx`:
   ```tsx
   import NewIconRegular from './svg/regular/new-icon.svg?raw';
   ```
4. Add to the appropriate icon map:
   ```tsx
   const regularIcons = {
     // ...existing icons
     'new-icon': NewIconRegular,
   };
   ```

## Do's and Don'ts

### Do
- Use the Icon component for all icons
- Use Regular variant by default
- Provide aria-labels for meaningful icons
- Use appropriate sizes for context

### Don't
- Don't import FontAwesome packages directly
- Don't hardcode SVG paths
- Don't use icons without proper color inheritance (use `currentColor`)
- Don't use oversized icons in dense UI areas
