# OnBrand Design System

A React + TypeScript design system implementation based on Figma designs. Built with consistency, reusability, and accessibility in mind.

## 🚀 Getting Started

> **⚠️ Permission Issues?** If you encounter permission errors with `node_modules`, see [SETUP.md](./SETUP.md) for fix instructions.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the Vite dev server and open the component showcase at [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

## 📁 Project Structure

```
/design-system
  /tokens          # Design tokens (colors, spacing, typography, etc.)
  /components      # React components
    /Button        # Button component
  /types           # TypeScript type definitions
  /utils           # Utility functions
/src               # Demo application
```

## 🎨 Design Tokens

All design values are defined as tokens to ensure consistency across the design system.

### Colors

```typescript
import { colors } from './design-system/tokens';

colors.primary[500];           // #5A51E7
colors.secondary.red[500];     // #DD2222
colors.gray[800];              // #3C3D40
colors.white;                  // #FFFFFF
```

### Spacing

```typescript
import { spacing } from './design-system/tokens';

spacing[1];  // 6px
spacing[2];  // 10px
spacing[3];  // 13px
spacing[6];  // 24px
```

### Typography

```typescript
import { typography } from './design-system/tokens';

typography.fontSize.base;      // 14px
typography.fontWeight.semibold; // 600
typography.lineHeight.normal;  // 1.5
```

## 🔘 Button Component

A flexible button component matching the Figma design system with multiple hierarchies, variants, sizes, and states.

### Figma Reference

[Button Component in Figma](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-4830)

### Basic Usage

```tsx
import { Button } from './design-system';

function App() {
  return (
    <Button hierarchy="primary" variant="solid" size="medium">
      Click me
    </Button>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button text content |
| `hierarchy` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'primary'` | Visual hierarchy (maps to Figma "Hierarchy") |
| `variant` | `'solid' \| 'ghost' \| 'text'` | `'solid'` | Visual style (maps to Figma "Variant") |
| `size` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Button size (maps to Figma "Size") |
| `icon` | `'none' \| 'left' \| 'right' \| 'only'` | `'none'` | Icon position (maps to Figma "Icon") |
| `iconLeft` | `ReactNode` | - | Icon element for left position |
| `iconRight` | `ReactNode` | - | Icon element for right position |
| `iconOnly` | `ReactNode` | - | Icon element for icon-only button |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `(event) => void` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | - | Accessibility label (required for icon-only buttons) |

### Hierarchies

#### Primary
Primary actions, highest emphasis
```tsx
<Button hierarchy="primary" variant="solid">Primary Action</Button>
```

#### Secondary
Secondary actions, medium emphasis
```tsx
<Button hierarchy="secondary" variant="solid">Secondary Action</Button>
```

#### Tertiary
Tertiary actions, low emphasis
```tsx
<Button hierarchy="tertiary" variant="ghost">Tertiary Action</Button>
```

#### Destructive
Destructive actions (delete, remove, etc.)
```tsx
<Button hierarchy="destructive" variant="solid">Delete</Button>
```

### Variants

#### Solid
Filled background with contrast text
```tsx
<Button hierarchy="primary" variant="solid">Solid Button</Button>
```

#### Ghost
Transparent background with colored text and hover state
```tsx
<Button hierarchy="tertiary" variant="ghost">Ghost Button</Button>
```

#### Text
Text-only button with minimal styling
```tsx
<Button hierarchy="secondary" variant="text">Text Button</Button>
```

### Sizes

```tsx
<Button size="small">Small</Button>
<Button size="medium">Medium (Default)</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>
```

### With Icons

#### Left Icon
```tsx
<Button
  hierarchy="primary"
  variant="solid"
  iconLeft={<CheckIcon />}
>
  Save Changes
</Button>
```

#### Right Icon
```tsx
<Button
  hierarchy="primary"
  variant="solid"
  iconRight={<ArrowIcon />}
>
  Continue
</Button>
```

#### Icon Only
```tsx
<Button
  hierarchy="primary"
  variant="solid"
  iconOnly={<PlusIcon />}
  aria-label="Add item"
/>
```

**Note:** Icon-only buttons require an `aria-label` for accessibility.

### States

All buttons support the following states:
- **Default** - Base appearance
- **Hover** - Mouse hover state
- **Focus** - Keyboard focus state (with visible outline)
- **Active** - Pressed/clicked state
- **Disabled** - Non-interactive state

```tsx
<Button disabled>Disabled Button</Button>
```

### Examples

```tsx
// Primary action with left icon
<Button
  hierarchy="primary"
  variant="solid"
  size="large"
  iconLeft={<SaveIcon />}
  onClick={handleSave}
>
  Save Changes
</Button>

// Destructive action
<Button
  hierarchy="destructive"
  variant="solid"
  size="medium"
  onClick={handleDelete}
>
  Delete Account
</Button>

// Ghost button with right icon
<Button
  hierarchy="tertiary"
  variant="ghost"
  size="medium"
  iconRight={<ExternalLinkIcon />}
>
  Learn More
</Button>

// Text button
<Button
  hierarchy="secondary"
  variant="text"
  size="small"
  onClick={handleCancel}
>
  Cancel
</Button>
```

## ♿ Accessibility

All components are built with accessibility in mind:

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states with visible outlines
- Proper contrast ratios
- Screen reader friendly

## 🎯 Design System Principles

### Single Source of Truth
- All design tokens defined centrally
- Never hardcode values
- Component variants map 1:1 with Figma

### Component Hierarchy
- Atomic components first (Button, Input, Typography)
- Molecules use atoms (SearchBar, Card)
- Organisms use molecules (Header, ProductCard)

### Figma Alignment
- Component names match Figma exactly
- Variant names match Figma properties
- Layer structure preserved semantically

## 🛠️ Technology Stack

- **React** 18.3.1
- **TypeScript** 5.5.3
- **Vite** 5.3.4
- **CSS Modules** for styling
- **clsx** for conditional classes

## 📝 Development Guidelines

### Adding New Components

1. Review Figma component and all variants
2. Extract design tokens if new ones needed
3. Create component file with TypeScript interface
4. Implement using CSS Modules
5. Add all variants and states
6. Ensure accessibility
7. Add documentation and examples

### Design Token Usage

✅ **DO:**
```tsx
// Reference tokens
const styles = {
  color: colors.primary[500],
  padding: spacing[3],
};
```

❌ **DON'T:**
```tsx
// Hardcode values
const styles = {
  color: '#5A51E7',
  padding: '13px',
};
```

### Naming Conventions

- **Components:** PascalCase (`Button`, `TextField`)
- **Props:** camelCase (`isDisabled`, `onClick`)
- **Files:** PascalCase for components, camelCase for utilities
- **CSS Classes:** kebab-case in CSS Modules

## 📦 Build Output

The build process creates an optimized production bundle:

```bash
npm run build
```

Output is generated in the `/dist` directory.

## 🧪 Testing

```bash
npm run test
```

## 📄 License

MIT

## 🤝 Contributing

1. Follow the design system guidelines in [CLAUDE.md](./CLAUDE.md)
2. Match Figma designs exactly
3. Use design tokens exclusively
4. Ensure accessibility
5. Add documentation for new components

## 📚 Next Components to Build

Suggested order based on atomic design principles:

1. ✅ **Button** - Complete
2. **Input/TextField** - Text input fields
3. **Checkbox** - Checkbox input
4. **Radio** - Radio button input
5. **Select** - Dropdown select
6. **Typography** - Text components (headings, paragraphs)
7. **Icon** - Icon wrapper component
8. **Card** - Container component
9. **Modal** - Dialog/modal component
10. **Header** - Page header component

---

Built with ❤️ following Figma design system specifications
