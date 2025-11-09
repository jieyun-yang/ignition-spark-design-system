# Ignition Spark Design System

A comprehensive React + TypeScript design system with **53 production-ready components**. Built with 100% token-based architecture for consistency, reusability, and accessibility.

## ✨ Features

- 🎨 **53 Components** - Complete component library covering forms, navigation, data display, and feedback
- 🎯 **100% Token-Based** - No hardcoded values, all styles reference design tokens
- ♿ **Accessible** - Built with WCAG compliance and keyboard navigation
- 📱 **Responsive** - Mobile-friendly components
- 🔒 **Type-Safe** - Full TypeScript support with strict typing
- 🧪 **Tested** - Visual regression tests with Playwright

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

### 🤖 AI-Powered Prototyping (Recommended)

Build prototypes 10x faster using AI assistants! This design system is optimized for AI-powered development.

**Quick Start:**
1. Open [AI-PROMPT-GUIDE.md](./AI-PROMPT-GUIDE.md)
2. Copy the Phase 1 prompt (Design Analysis)
3. Add your Figma link or requirements
4. Paste into Claude Code, Cursor, or GitHub Copilot
5. Approve the plan, then use Phase 2 to build
6. Use Phase 3 to verify and test
7. Get a production-ready prototype in minutes!

**Example prompt:**
```
I need you to build a user dashboard with a data table
using the Ignition Spark Design System.
[See AI-PROMPT-GUIDE.md for complete 3-phase workflow]
```

The guide includes ready-to-use prompts for dashboards, forms, settings pages, and more.

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
  /components      # 53 React components
  /illustrations   # 82 illustration assets
  /types           # TypeScript type definitions
  index.ts         # Central export point
/src               # Demo application showcasing all components
/tests             # Playwright visual regression tests
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

### 53 Components Available

**Forms & Inputs (14)**
- Button, ComboButton, MenuButton
- TextInput, TextArea, PasswordInput
- Checkbox, CheckboxCard, RadioButton
- Select, DatePicker, Search
- Switch, FieldSet

**Data Display (15)**
- Table, TableHeader, DataList
- Badge, Avatar, Card, AppCard, CardContainer
- ProgressBar, ProgressStatus, Skeleton
- Divider, Link, EmptyState

**Feedback (5)**
- Alert, Toast, Notification
- Spinner, Tooltip

**Navigation (5)**
- Menu, Tabs, Pagination
- SideNav, PageHeader

**Overlays (6)**
- Modal, Drawer, Popover
- Banner, Overlayer, Filter

**Content (8)**
- Accordion, CopyField, Signature
- ActionBar, SupportArticleLink
- Illustration, TemplateLayout

### Quick Start Example

```tsx
import {
  Button,
  Alert,
  Table,
  Modal,
  Card
} from './design-system';

// Use any component immediately
<Button hierarchy="primary" size="large">
  Save Changes
</Button>

<Alert status="success" closeable>
  Changes saved successfully!
</Alert>
```

For detailed API documentation, see [COMPONENTS.md](./COMPONENTS.md)

## 📚 Documentation

- [README.md](./README.md) - This file, project overview
- [AI-PROMPT-GUIDE.md](./AI-PROMPT-GUIDE.md) - **Quick copy-paste prompts for AI prototyping** ⭐
- [AI-PROMPT-EXAMPLES.md](./AI-PROMPT-EXAMPLES.md) - Detailed examples and use cases for learning
- [COMPONENTS.md](./COMPONENTS.md) - Complete component API documentation
- [INSTALLATION.md](./INSTALLATION.md) - Installation and usage guide
- [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) - Design tokens and principles
- [SETUP.md](./SETUP.md) - Setup instructions and troubleshooting
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Common issues and solutions
- [CLAUDE.md](./CLAUDE.md) - Design system development rules

## 🎯 Component Status

All 53 components are production-ready with:
- ✅ Complete Figma alignment
- ✅ Full TypeScript typing
- ✅ 100% token-based styling
- ✅ Accessibility compliance
- ✅ Visual regression tests

View the [Figma Design System](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components)

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

### Visual Regression Tests

```bash
npm run test:e2e           # Run Playwright tests
npm run test:e2e:ui        # Interactive test UI
npm run test:report        # View test report
```

25 baseline screenshots cover all components and templates

## 📄 License

MIT

## 🤝 Contributing

1. Follow the design system guidelines in [CLAUDE.md](./CLAUDE.md)
2. Match Figma designs exactly
3. Use design tokens exclusively
4. Ensure accessibility
5. Add documentation for new components

---

Built with ❤️ by the Ignition team | [View Figma Designs](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components)
