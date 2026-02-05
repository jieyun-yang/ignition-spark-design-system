# Ignition Spark Design System

A comprehensive React + TypeScript design system with 52 components and 100% token-based architecture.

## Installation Options

### Option A: Use in Your Own Project (Recommended)

Install the design system in any React project:

```bash
# Install from GitHub
npm install github:your-org/ignition-spark-design-system

# CLAUDE.md is auto-created with AI guidelines
```

Then in your app:

```tsx
// Import styles (once, in your entry file)
import '@ignition/spark-design-system/styles.css';

// Import components
import { Button, Card, Alert } from '@ignition/spark-design-system';
```

**Update to latest:**
```bash
npm update @ignition/spark-design-system
```

### Option B: Clone This Repo

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

**AI Guidelines:**
- CLAUDE.md auto-created on install
- Teaches AI tools how to use the design system correctly

## AI-Assisted Prototyping

When you install via npm, `CLAUDE.md` is automatically created in your project root. This file:

- Tells AI tools (Claude Code, Cursor) to use design system components
- Prevents hardcoded colors/spacing
- Keeps prototype code in `src/`, not in `node_modules/`

## Documentation

- [COMPONENTS.md](design-system/COMPONENTS.md) - Component API reference
- [TOKENS.md](design-system/TOKENS.md) - Design tokens reference
- [AI-PROTOTYPING.md](design-system/AI-PROTOTYPING.md) - AI prompts & examples

## Development

To work on the design system itself:

```bash
npm run dev          # Start dev server with demo
npm run build:lib    # Build for distribution
npm run test         # Run tests
```

## Demo

Run `npm run dev` and visit http://localhost:5173 to see all components.
