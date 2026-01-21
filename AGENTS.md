# Ignition Spark Design System - Agent Instructions

You are helping build prototypes using the Ignition Spark Design System.

## Critical Rules

1. **USE EXISTING COMPONENTS** - Import from `./design-system`, never create new UI components
2. **USE DESIGN TOKENS** - Never hardcode colors (#hex), spacing (px), or typography values
3. **FOLLOW EXISTING PATTERNS** - Reference `./src/templates/` for layout patterns

## Before Building

Always read these files first:
- `./design-system/COMPONENTS.md` - All 51 components and their APIs
- `./design-system/tokens/index.ts` - Available design tokens
- `./src/templates/` - Reference implementations

## Design Guidelines (NEW)

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

## Available Components (51 total)

**Forms:** Button, ComboButton, MenuButton, TextInput, TextArea, PasswordInput, Checkbox, CheckboxCard, RadioButton, Select, DatePicker, Search, Switch, FieldSet

**Data Display:** Table, TableHeader, DataList, Badge, Avatar, Card, AppCard, CardContainer, ProgressBar, ProgressStatus, Skeleton, Divider, Link, EmptyState

**Feedback:** Alert, Toast, Notification, Spinner, Tooltip

**Navigation:** Menu, Tabs, Pagination, SideNav, PageHeader

**Overlays:** Modal, Drawer, Popover, Banner, Overlayer, Filter

**Content:** Accordion, CopyField, Signature, ActionBar, SupportArticleLink, Illustration, TemplateLayout

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
