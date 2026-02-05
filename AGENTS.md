# Ignition Spark Design System - Agent Instructions

You are helping build prototypes using the Ignition Spark Design System.

## Critical Rules

1. **USE EXISTING COMPONENTS** - Import from `./design-system`, never create new UI components
2. **USE DESIGN TOKENS** - Never hardcode colors (#hex), spacing (px), or typography values
3. **FOLLOW EXISTING PATTERNS** - Reference `./src/templates/` for layout patterns

## Before Building

Always read these files first:
- `./design-system/COMPONENTS.md` - All 51 components and their APIs
- `./design-system/tokens/tokens.css` - Available design tokens
- `./src/templates/` - Reference implementations

### Quick Token Reference

**Colors:**
| Purpose | Token | Value |
|---------|-------|-------|
| Primary purple | `--color-primary-500` | #5A51E7 |
| Primary hover | `--color-primary-600` | #4940CE |
| Text dark | `--color-gray-900` | #1E1E20 |
| Text secondary | `--color-gray-600` | #7B7D85 |
| Text muted | `--color-gray-500` | #9B9DA8 |
| Background light | `--color-gray-50` | #F8F8FC |
| Background alt | `--color-gray-100` | #F0F2FA |
| Border | `--color-gray-200` | #E4E7F5 |
| White | `--color-white` | #FFFFFF |
| Success | `--color-secondary-green-500` | #08A674 |
| Error | `--color-secondary-red-500` | #DD2222 |
| Warning | `--color-secondary-yellow-500` | #D97706 |

**Typography:**
| Purpose | Token |
|---------|-------|
| Font family | `--font-family-primary` (SF Pro Text) |
| Body text | `--font-size-base` (14px) |
| Small text | `--font-size-sm` (12px) |
| Large text | `--font-size-lg` (16px) |
| Heading | `--font-size-xl` (18px) |
| Weight normal | `--font-weight-regular` (400) |
| Weight medium | `--font-weight-medium` (500) |
| Weight bold | `--font-weight-semibold` (600) |

**Spacing:**
| Size | Token | Value |
|------|-------|-------|
| XS | `--spacing-1` | 4px |
| SM | `--spacing-2` | 8px |
| MD | `--spacing-3` | 12px |
| Base | `--spacing-4` | 16px |
| LG | `--spacing-6` | 24px |
| XL | `--spacing-8` | 32px |

**Border Radius:**
| Size | Token | Value |
|------|-------|-------|
| Small | `--border-radius-sm` | 3px |
| Medium | `--border-radius-md` | 4px |
| Large | `--border-radius-lg` | 8px |
| Pill | `--border-radius-pill` | 100px |

## Design Guidelines

When making design decisions, consult the guidelines:

### Component-Specific Guidelines
Each component folder has a `GUIDELINES.md` file with:
- When and why to use the component
- Best practices and accessibility requirements
- Do's and don'ts

```
./design-system/components/Button/GUIDELINES.md
./design-system/components/Modal/GUIDELINES.md
./design-system/components/[Component]/GUIDELINES.md
```

### General Guidelines
For broader design decisions, see `./design-system/guidelines/`:

| Category | Path | Use For |
|----------|------|---------|
| Foundations | `guidelines/foundations/` | Colours, typography, spacing, shadows, icons |
| Content | `guidelines/content/` | Voice, grammar, product vocabulary |
| Patterns | `guidelines/patterns/` | Error handling, feature gating, wizards |
| Layouts | `guidelines/layouts/` | Page layouts, content width |

### Decision Workflow

1. **Check component GUIDELINES.md** for component-specific rules
2. **Check foundations** for colors, typography, spacing decisions
3. **Check content guidelines** for proper terminology and voice
4. **Check patterns** for complex interactions (wizards, errors, etc.)

### Key Rules from Guidelines

- **One primary button per screen** (Button guidelines)
- **Use sentence case** for all headings and labels (Grammar guidelines)
- **Use design tokens** - never hardcode values (Colours/Spacing guidelines)
- **Provide tooltips for icon-only buttons** (Button/Icons guidelines)

### When to Read Guidelines

**Decision Points - Read When Unsure About:**

| Decision | Read |
|----------|------|
| Which component? (Modal vs Drawer?) | `COMPONENTS.md` |
| Button hierarchy on a page | `guidelines/foundations/icons.md` + component docs |
| Writing labels, errors, empty states | `guidelines/content/grammar.md`, `guidelines/content/our-voice.md` |
| Color choices beyond tokens | `guidelines/foundations/colours.md` |
| Complex flows (wizards, errors) | `guidelines/patterns/` |
| Page structure | `guidelines/layouts/layout-anatomy.md` |

**Mandatory Reads For:**

- **New pages/screens**: `guidelines/layouts/layout-anatomy.md`
- **Forms**: `guidelines/patterns/error-handling.md` + component docs
- **User-facing copy**: `guidelines/content/grammar.md`, `guidelines/content/our-voice.md`
- **Icons**: `design-system/components/Icon/GUIDELINES.md`

**Skip Guidelines When:**

- Simple token lookups → use Quick Reference tables above
- Copying patterns from existing code in this project
- Using components you've used before with known props

## Component Import Pattern

```tsx
// CORRECT
import { Button, Card, Table, Alert } from './design-system';

// WRONG - don't create your own
const Button = () => <button>...</button>;
```

## Token Usage Pattern

```tsx
// CORRECT
import { colors, spacing } from './design-system/tokens';
colors.primary[500]     // Use token
spacing[4]              // Use token

// WRONG - never hardcode
color: '#5A51E7'        // Don't do this
padding: '16px'         // Don't do this
```

## Available Components (52 total)

**Forms:** Button, ComboButton, MenuButton, TextInput, TextArea, PasswordInput, Checkbox, CheckboxCard, RadioButton, Select, DatePicker, Search, Switch, FieldSet

**Data Display:** Table, TableHeader, DataList, Badge, Avatar, Card, AppCard, CardContainer, ProgressBar, ProgressStatus, Skeleton, Divider, Link, EmptyState

**Feedback:** Alert, Toast, Notification, Spinner, Tooltip

**Navigation:** Menu, Tabs, Pagination, SideNav, PageHeader

**Overlays:** Modal, Drawer, Popover, Banner, Overlayer, Filter

**Content:** Accordion, CopyField, Signature, ActionBar, SupportArticleLink, Illustration, TemplateLayout

**Icons:** Icon

## Icon Usage

Use the `Icon` component for all icons. Icons are locally bundled SVGs (no external dependencies).

```tsx
import { Icon } from './design-system';

// Regular variant (default) - use for most UI elements
<Icon name="circle-info" />
<Icon name="search" />

// Solid variant - use for emphasis
<Icon name="check" variant="solid" />
<Icon name="chevron-down" variant="solid" />

// With size and spin
<Icon name="spinner" size="lg" spin />
```

### Icon Guidelines
- **Regular by default** - Only use `variant="solid"` when specified by design
- **Common icons:** `search`, `xmark`, `check`, `chevron-down`, `circle-info`, `circle-check`, `circle-xmark`, `spinner`
- See `./design-system/components/Icon/GUIDELINES.md` for full list and usage rules

## File Structure

When creating new pages/features:
```
src/
  pages/
    MyNewPage.tsx           # Component file
    MyNewPage.module.css    # CSS Modules (if needed)
```

## TypeScript Required

- All components must have TypeScript interfaces
- Use strict typing, no `any`

## Styling Approach

- Use CSS Modules for custom layouts
- Reference design tokens via CSS custom properties: `var(--spacing-4)`
- Never use inline styles with hardcoded values

## Key Documentation

- [COMPONENTS.md](./design-system/COMPONENTS.md) - Component APIs
- [TOKENS.md](./design-system/TOKENS.md) - Tokens reference
- [AI-PROTOTYPING.md](./design-system/AI-PROTOTYPING.md) - Detailed prompts and examples
