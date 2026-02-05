# Ignition Spark Design System - Agent Instructions

You are helping build prototypes using the Ignition Spark Design System.

## Critical Rules

1. **USE EXISTING COMPONENTS** - Import from `@ignition/spark-design-system`, never create new UI components
2. **USE DESIGN TOKENS** - Never hardcode colors (#hex), spacing (px), or typography values
3. **NEVER MODIFY node_modules** - All prototype code goes in `src/` folder

## Setup Check

Ensure these are in place:
```tsx
// In your main entry file (main.tsx or App.tsx)
import '@ignition/spark-design-system/styles.css';
```

## Component Import Pattern

```tsx
// CORRECT - import from the package
import { Button, Card, Table, Alert } from '@ignition/spark-design-system';

// WRONG - don't create your own
const Button = () => <button>...</button>;
```

## Token Usage Pattern

```tsx
// CORRECT - use JS tokens
import { colors, spacing } from '@ignition/spark-design-system/tokens';
colors.primary[500]     // Use token
spacing[4]              // Use token

// CORRECT - use CSS custom properties
.myClass {
  color: var(--color-primary-500);
  padding: var(--spacing-4);
}

// WRONG - never hardcode
color: '#5A51E7'        // Don't do this
padding: '16px'         // Don't do this
```

## Quick Token Reference

**Colors:**
| Purpose | Token | CSS Variable |
|---------|-------|--------------|
| Primary purple | `colors.primary[500]` | `--color-primary-500` |
| Primary hover | `colors.primary[600]` | `--color-primary-600` |
| Text dark | `colors.gray[900]` | `--color-gray-900` |
| Text secondary | `colors.gray[600]` | `--color-gray-600` |
| Text muted | `colors.gray[500]` | `--color-gray-500` |
| Background light | `colors.gray[50]` | `--color-gray-50` |
| Background alt | `colors.gray[100]` | `--color-gray-100` |
| Border | `colors.gray[200]` | `--color-gray-200` |
| Success | `colors.secondary.green[500]` | `--color-secondary-green-500` |
| Error | `colors.secondary.red[500]` | `--color-secondary-red-500` |
| Warning | `colors.secondary.yellow[500]` | `--color-secondary-yellow-500` |

**Spacing:**
| Size | JS Token | CSS Variable | Value |
|------|----------|--------------|-------|
| XS | `spacing[1]` | `--spacing-1` | 4px |
| SM | `spacing[2]` | `--spacing-2` | 8px |
| MD | `spacing[3]` | `--spacing-3` | 12px |
| Base | `spacing[4]` | `--spacing-4` | 16px |
| LG | `spacing[6]` | `--spacing-6` | 24px |
| XL | `spacing[8]` | `--spacing-8` | 32px |

**Border Radius:**
| Size | CSS Variable | Value |
|------|--------------|-------|
| Small | `--border-radius-sm` | 3px |
| Medium | `--border-radius-md` | 4px |
| Large | `--border-radius-lg` | 8px |
| Pill | `--border-radius-pill` | 100px |

## Available Components (52 total)

**Forms:** Button, ComboButton, MenuButton, TextInput, TextArea, PasswordInput, Checkbox, CheckboxCard, RadioButton, Select, DatePicker, Search, Switch, FieldSet

**Data Display:** Table, TableHeader, DataList, Badge, Avatar, Card, AppCard, CardContainer, ProgressBar, ProgressStatus, Skeleton, Divider, Link, EmptyState

**Feedback:** Alert, Toast, Notification, Spinner, Tooltip

**Navigation:** Menu, Tabs, Pagination, SideNav, PageHeader

**Overlays:** Modal, Drawer, Popover, Banner, Overlayer, Filter

**Content:** Accordion, CopyField, Signature, ActionBar, SupportArticleLink, Illustration, TemplateLayout

**Icons:** Icon

## Icon Usage

```tsx
import { Icon } from '@ignition/spark-design-system';

// Regular variant (default)
<Icon name="circle-info" />
<Icon name="search" />

// Solid variant - for emphasis
<Icon name="check" variant="solid" />
<Icon name="chevron-down" variant="solid" />

// With size and spin
<Icon name="spinner" size="lg" spin />
```

**Common icons:** `search`, `xmark`, `check`, `chevron-down`, `circle-info`, `circle-check`, `circle-xmark`, `spinner`

## File Structure

All prototype code goes in `src/`:
```
my-project/
├── node_modules/
│   └── @ignition/spark-design-system/  # READ-ONLY
├── src/
│   ├── pages/
│   │   └── MyPage.tsx                   # Your code here
│   └── App.tsx
├── CLAUDE.md                            # This file
└── package.json
```

## Key Guidelines

- **One primary button per screen**
- **Use sentence case** for all headings and labels
- **Provide tooltips for icon-only buttons**
- **Use design tokens** - never hardcode values

## TypeScript

- All components have full TypeScript types
- Import types: `import type { ButtonProps } from '@ignition/spark-design-system'`

## Styling

- Use CSS Modules for custom layouts: `MyComponent.module.css`
- Reference tokens via CSS custom properties: `var(--spacing-4)`
- Never use inline styles with hardcoded values
