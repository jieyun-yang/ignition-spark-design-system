# Ignition Spark Design System

A comprehensive React + TypeScript design system with 52 components and 100% token-based architecture.

## Installation

### Recommended: Clone as Subfolder

Clone this repository as a subfolder in your project:

```bash
# From your project root
git clone <repo-url> design-system
```

Then import components:

```tsx
// Import styles (once, in your entry file)
import './design-system/design-system/tokens/tokens.css';

// Import components
import { Button, Card, Alert } from './design-system/design-system';
```

The `AGENTS.md` and `CLAUDE.md` files provide AI guidelines for tools like Claude Code and Cursor.

### Alternative: Development Setup

For working on the design system itself or running the demo:

```bash
git clone <repo-url>
cd ignition-spark-design-system
npm install
npm run dev
```

## What's Included

**52 Components:**
- Forms: Button, TextInput, Select, Checkbox, DatePicker, etc.
- Data Display: Table, Card, Badge, Avatar, etc.
- Feedback: Alert, Toast, Modal, Spinner, etc.
- Navigation: Tabs, SideNav, Pagination, Menu, etc.

**Design Tokens:**
- Colors, spacing, typography, shadows
- Available as CSS variables and JS exports

**Guidelines:**
- Component-specific guidelines in each component folder
- General guidelines in `design-system/guidelines/`
- Content, foundations, patterns, and layouts

**AI-Ready:**
- `AGENTS.md` / `CLAUDE.md` teach AI tools to use components correctly
- Prevents hardcoded colors/spacing
- References templates and patterns

## Documentation

- [COMPONENTS.md](design-system/COMPONENTS.md) - Component API reference
- [TOKENS.md](design-system/TOKENS.md) - Design tokens reference
- [AI-PROTOTYPING.md](design-system/AI-PROTOTYPING.md) - AI prompts and examples
- [Guidelines](design-system/guidelines/) - Design guidelines

## Development

```bash
npm run dev          # Start dev server with demo
npm run test         # Run tests
npm run typecheck    # Type checking
```

## Demo

Run `npm run dev` and visit http://localhost:5173 to see all components.
