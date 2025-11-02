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
  /tokens          # Design tokens (colors, spacing, typography, shadows)
  /components      # React components
    /Button        # Button component
    /Alert         # Alert component
    /Toast         # Toast component
  /types           # TypeScript type definitions
  /utils           # Utility functions
/src               # Demo application
```

## 🎨 Design Tokens

All design values are defined as tokens to ensure consistency across the design system.

### Colors

```typescript
import { colors } from './design-system/tokens';

// Primary colors
colors.primary[500];              // #5A51E7 (Purple)

// Status colors
colors.secondary.blue[500];       // #0F65F0 (Info)
colors.secondary.green[500];      // #08A674 (Success)
colors.secondary.yellow[500];     // #D97706 (Warning)
colors.secondary.red[500];        // #DD2222 (Error)

// Semantic status colors
colors.status.info.background;    // #E6F0FE
colors.status.success.icon;       // #C5F6E6
```

### Spacing, Typography, Shadows

See [design-system/tokens/](design-system/tokens/) for complete token definitions.

## 📦 Components

### Button Component

A flexible button component with multiple hierarchies, variants, and sizes.

[View Button Documentation](./COMPONENTS.md#button)

```tsx
import { Button } from './design-system';

<Button hierarchy="primary" variant="solid" size="large">
  Save Changes
</Button>
```

### Alert Component

A banner alert component for important messages and notifications.

[View Alert Documentation](./COMPONENTS.md#alert)

```tsx
import { Alert } from './design-system';

<Alert
  status="success"
  title="Success!"
  action={{ label: "View Details", onClick: () => {} }}
  closeable
>
  Your changes have been saved.
</Alert>
```

### Toast Component

A floating notification component for temporary messages.

[View Toast Documentation](./COMPONENTS.md#toast)

```tsx
import { Toast } from './design-system';

<Toast status="info" heading="Update Available" onClose={() => {}}>
  Version 2.0 is now available.
</Toast>
```

## 📚 Documentation

- [README.md](./README.md) - This file, project overview
- [COMPONENTS.md](./COMPONENTS.md) - Complete component API documentation
- [SETUP.md](./SETUP.md) - Setup instructions and troubleshooting
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Technical implementation details
- [CLAUDE.md](./CLAUDE.md) - Design system development rules

## 🎯 Component Status

| Component | Status | Figma Link |
|-----------|--------|------------|
| Button | ✅ Complete | [Figma](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-4830) |
| Alert | ✅ Complete | [Figma](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8281-9335) |
| Toast | ✅ Complete | [Figma](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8286-8759) |

## ♿ Accessibility

All components are built with accessibility in mind:

- Semantic HTML elements
- ARIA labels and roles
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
- Molecules use atoms (Alert, Toast)
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
  color: colors.status.info.background,
  padding: spacing[3],
};
```

❌ **DON'T:**
```tsx
// Hardcode values
const styles = {
  color: '#E6F0FE',
  padding: '13px',
};
```

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
2. ✅ **Alert** - Complete
3. ✅ **Toast** - Complete
4. **Input/TextField** - Text input fields
5. **Checkbox** - Checkbox input
6. **Radio** - Radio button input
7. **Select** - Dropdown select
8. **Typography** - Text components (headings, paragraphs)
9. **Badge** - Small status indicator
10. **Modal** - Dialog/modal component

---

Built with ❤️ following Figma design system specifications
