# Ignition Spark Design System

**Version:** 0.1.0
**Status:** Production-Ready for AI Prototyping
**Last Updated:** 2025-11-03

## Overview

This design system is built specifically to be a **starting package for AI-assisted prototyping**. Every component, token, and pattern is designed for consistency, reusability, and easy integration with AI code generation tools.

### Key Features

- ✅ **100% Token-Based Styling** - Zero hardcoded values
- ✅ **52 Production-Ready Components** - All with TypeScript support
- ✅ **106 Design Tokens** - Comprehensive color, spacing, and typography system
- ✅ **CSS Modules with Type Safety** - Full autocomplete in your IDE
- ✅ **Vite + React + TypeScript** - Modern, fast development experience
- ✅ **AI-Optimized** - Clear naming conventions and structure for code generation

---

## Quick Start

### Installation

```bash
# Clone or copy this repo
git clone [your-repo-url]
cd ignition-spark-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Generate CSS Module types (if needed)
npm run css-types
```

### Your First Component

```tsx
import Button from './design-system/components/Button';

function MyApp() {
  return (
    <Button size="large" variant="primary">
      Click me!
    </Button>
  );
}
```

---

## Design Tokens

All design values are defined as CSS Custom Properties in [design-system/tokens/tokens.css](design-system/tokens/tokens.css).

### Token Categories

#### Colors (98 tokens)

**Primary (Purple)**
- `--color-primary-500` - Main brand purple `#5A51E7`
- `--color-primary-600` - Hover state `#4940CE`
- Plus 15+ shades from 25 to 750

**Secondary Colors**
- Blue: `--color-secondary-blue-500` `#0F65F0`
- Green: `--color-secondary-green-500` `#08A674`
- Yellow: `--color-secondary-yellow-500` `#D97706`
- Red: `--color-secondary-red-500` `#DD2222`

**Brand Colors (Email/Marketing)**
- `--color-brand-teal-900` `#15514d` - Dark teal for headings
- `--color-brand-teal-600` `#4d9f96` - Mid teal for gradients
- `--color-brand-teal-400` `#6dd8df` - Light teal for CTAs
- `--color-brand-teal-50` `#d5fdff` - Very light teal backgrounds
- `--color-brand-orange-500` `#ff9d28` - Email CTA orange
- `--color-brand-orange-600` `#f4502a` - Orange accents
- `--color-brand-gold-500` `#f4a52a` - Star rating gold

**Semantic Colors**
- `--color-success-500` `#16a34a` - Success green
- `--color-orange-600` `#DF320C` - Warning/error orange

**Grayscale (20 tokens)**
- `--color-gray-50` to `--color-gray-900`
- `--color-white`, `--color-black`

#### Spacing (10 tokens)

```css
--spacing-0-5: 4px;
--spacing-1: 6px;
--spacing-1-5: 8px;
--spacing-2: 10px;
--spacing-2-5: 12px;
--spacing-3: 13px;
--spacing-4: 16px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-10: 40px;
```

#### Typography

**Font Families**
- `--font-family-primary` - SF Pro Text (system sans-serif)
- `--font-family-display` - Inter

**Font Sizes (7 tokens)**
- `--font-size-xs: 13px`
- `--font-size-sm: 12px`
- `--font-size-base: 14px`
- `--font-size-lg: 16px`
- `--font-size-xl: 18px`
- `--font-size-1-5xl: 28px`
- `--font-size-2xl: 48px`

**Font Weights**
- `--font-weight-regular: 400`
- `--font-weight-medium: 500`
- `--font-weight-semibold: 600`
- `--font-weight-bold: 700`

**Line Heights**
- `--line-height-none: 1`
- `--line-height-normal: 1.5`

---

## Component Library

### Atomic Components

Located in [design-system/components/](design-system/components/)

#### Button
**File:** [design-system/components/Button/index.tsx](design-system/components/Button/index.tsx)

```tsx
<Button size="small" variant="primary" onClick={handleClick}>
  Click me
</Button>

<Button size="medium" variant="secondary" disabled>
  Disabled
</Button>

<Button size="large" variant="ghost">
  Ghost Button
</Button>
```

**Props:**
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `variant`: `'primary' | 'secondary' | 'ghost'` (default: `'primary'`)
- `disabled`: `boolean` (default: `false`)
- `onClick`: `() => void`

#### TextField
**File:** [design-system/components/TextField/index.tsx](design-system/components/TextField/index.tsx)

```tsx
<TextField
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error="Invalid email format"
/>
```

**Props:**
- `label`: `string` - Field label
- `placeholder`: `string` - Placeholder text
- `value`: `string` - Controlled value
- `onChange`: `(e: ChangeEvent<HTMLInputElement>) => void`
- `error`: `string` - Error message to display
- `disabled`: `boolean`

#### Checkbox
**File:** [design-system/components/Checkbox/index.tsx](design-system/components/Checkbox/index.tsx)

```tsx
<Checkbox
  label="Accept terms and conditions"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>
```

#### Radio
**File:** [design-system/components/Radio/index.tsx](design-system/components/Radio/index.tsx)

```tsx
<Radio
  name="plan"
  value="basic"
  label="Basic Plan"
  checked={plan === 'basic'}
  onChange={(e) => setPlan(e.target.value)}
/>
```

#### Select
**File:** [design-system/components/Select/index.tsx](design-system/components/Select/index.tsx)

```tsx
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' }
  ]}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>
```

#### TextArea
**File:** [design-system/components/TextArea/index.tsx](design-system/components/TextArea/index.tsx)

```tsx
<TextArea
  label="Description"
  rows={5}
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
```

#### ToggleSwitch
**File:** [design-system/components/ToggleSwitch/index.tsx](design-system/components/ToggleSwitch/index.tsx)

```tsx
<ToggleSwitch
  label="Enable notifications"
  checked={notifications}
  onChange={(e) => setNotifications(e.target.checked)}
/>
```

#### RangeSlider
**File:** [design-system/components/RangeSlider/index.tsx](design-system/components/RangeSlider/index.tsx)

```tsx
<RangeSlider
  label="Volume"
  min={0}
  max={100}
  value={volume}
  onChange={(e) => setVolume(Number(e.target.value))}
/>
```

---

## Demo Templates

Pre-built complex layouts for common patterns.

### WizardTemplate
**File:** [templates/WizardTemplate.tsx](templates/WizardTemplate.tsx)

Multi-step wizard with 5 page variants:
- **Intro Page** - Hero with CTA (simple, detailed, default layouts)
- **Form Page** - Multi-field form with navigation
- **Table Page** - Data table with editable fields
- **Loading Page** - Progress indicator with spinner
- **Transition Page** - Success/confirmation screen

**Preview:** `/wizard-template` route

### EmailTemplate
**File:** [templates/EmailTemplate.tsx](templates/EmailTemplate.tsx)

Email layouts with 5 branding variants:
- **Not-branded** - Ignition logo with graphics
- **Branded** - Custom logo with graphics
- **Not-branded-no-images** - Ignition text-only
- **Branded-no-images** - Custom brand text-only
- **Branded-no-logo** - No logo header

**Preview:** `/email-template` route

### ProposalsTemplate
**File:** [templates/ProposalsTemplate.tsx](templates/ProposalsTemplate.tsx)

Professional proposal document layout with sections, pricing tables, and signatures.

**Preview:** `/proposals-template` route

---

## Styling Approach

### CSS Modules

All components use CSS Modules for scoped styling:

```tsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click</button>;
}
```

### Token-First Architecture

**✅ DO:**
```css
.button {
  background-color: var(--color-primary-500);
  padding: var(--spacing-2-5) var(--spacing-4);
  font-size: var(--font-size-lg);
}
```

**❌ DON'T:**
```css
.button {
  background-color: #5A51E7; /* Hardcoded color */
  padding: 12px 16px; /* Hardcoded spacing */
  font-size: 16px; /* Hardcoded size */
}
```

### TypeScript Type Safety

Run `npm run css-types` to generate TypeScript definitions for CSS modules:

```tsx
import styles from './Button.module.css';

// ✅ TypeScript autocomplete works!
<button className={styles.button}>Click</button>

// ❌ TypeScript error - typo caught at compile time
<button className={styles.buttom}>Click</button>
```

---

## AI Prototyping Guide

This design system is optimized for AI code generation. Follow these best practices:

### When Prompting AI

**Be Specific About Components:**
```
"Create a signup form using TextField, Button, and Checkbox components
from the design system"
```

**Reference Token Categories:**
```
"Use primary color tokens for the CTA button and gray tokens for the form
background"
```

**Specify Layout Patterns:**
```
"Build a wizard flow similar to WizardTemplate but for user onboarding"
```

### Component Naming Conventions

All components follow these patterns:
- **PascalCase** for component names: `Button`, `TextField`, `ToggleSwitch`
- **camelCase** for props: `onClick`, `onChange`, `isDisabled`
- **kebab-case** for CSS classes: `button-primary`, `text-field-error`

### File Structure for New Components

```
design-system/components/NewComponent/
├── index.tsx              # Component implementation
├── NewComponent.module.css # Scoped styles (token-based)
└── NewComponent.module.css.d.ts # Auto-generated types
```

### Token Reference for AI

When AI generates styles, it should ALWAYS use these token patterns:

**Colors:**
- Primary actions: `var(--color-primary-500)`
- Backgrounds: `var(--color-gray-50)`
- Text: `var(--color-gray-800)`
- Borders: `var(--color-gray-200)`

**Spacing:**
- Small gaps: `var(--spacing-1-5)` or `var(--spacing-2)`
- Medium gaps: `var(--spacing-4)` or `var(--spacing-6)`
- Large gaps: `var(--spacing-8)` or `var(--spacing-10)`

**Typography:**
- Body text: `var(--font-size-base)` with `var(--font-weight-regular)`
- Labels: `var(--font-size-sm)` with `var(--font-weight-medium)`
- Headings: `var(--font-size-2xl)` with `var(--font-weight-semibold)`

---

## Development Workflow

### Adding New Components

1. **Create component directory:**
   ```bash
   mkdir -p design-system/components/NewComponent
   ```

2. **Create component file:**
   ```tsx
   // design-system/components/NewComponent/index.tsx
   import styles from './NewComponent.module.css';

   interface NewComponentProps {
     label: string;
     onClick: () => void;
   }

   function NewComponent({ label, onClick }: NewComponentProps) {
     return (
       <button className={styles.button} onClick={onClick}>
         {label}
       </button>
     );
   }

   export default NewComponent;
   ```

3. **Create CSS module with tokens:**
   ```css
   /* design-system/components/NewComponent/NewComponent.module.css */
   .button {
     background-color: var(--color-primary-500);
     color: var(--color-white);
     padding: var(--spacing-2-5) var(--spacing-4);
     border: none;
     border-radius: 3px;
     font-size: var(--font-size-lg);
     font-weight: var(--font-weight-semibold);
     cursor: pointer;
   }
   ```

4. **Generate types:**
   ```bash
   npm run css-types
   ```

### Testing Changes

```bash
# Run dev server
npm run dev

# TypeScript type checking
npm run typecheck

# Build production bundle
npm run build
```

---

## Accessibility

All components follow WCAG 2.1 AA standards:

- ✅ **Keyboard Navigation** - All interactive elements are keyboard accessible
- ✅ **ARIA Labels** - Screen reader support on all icon buttons
- ✅ **Focus States** - Visible focus indicators
- ✅ **Color Contrast** - Meets AA standards for text readability
- ✅ **Alt Text** - Decorative images marked with `alt=""`

### Accessibility Checklist for New Components

- [ ] Add `aria-label` to icon-only buttons
- [ ] Add `alt=""` to decorative images
- [ ] Test keyboard navigation (Tab, Enter, Space)
- [ ] Verify focus states are visible
- [ ] Check color contrast ratios (use browser DevTools)

---

## File Structure

```
ignition-spark-design-system/
├── design-system/              # Core design system
│   ├── components/             # 52 production-ready components
│   │   ├── Button/
│   │   ├── TextField/
│   │   ├── Card/
│   │   └── ...
│   └── tokens/
│       └── tokens.css          # 106 design tokens (CSS custom properties)
├── src/
│   ├── templates/              # Demo templates
│   │   ├── WizardTemplate.tsx
│   │   ├── EmailTemplate.tsx
│   │   └── ProposalsTemplate.tsx
│   ├── App.tsx                 # Demo app
│   └── App.css                 # Global utility styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── DESIGN-SYSTEM.md            # This file
```

---

## Scripts Reference

```bash
# Development
npm run dev                # Start dev server (localhost:5173)
npm run build              # Build for production
npm run preview            # Preview production build

# Type Safety
npm run typecheck          # TypeScript type checking
npm run css-types          # Generate CSS Module types
npm run css-types:watch    # Watch mode for CSS types

# Testing
npm run test               # Run Vitest tests
```

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Chrome Android 90+

---

## Known Limitations

### Current State (v0.1.0)

✅ **Completed:**
- 52 production-ready components
- 106 design tokens (100% coverage)
- TypeScript type safety for CSS modules
- Zero hardcoded values in components

⚠️ **Planned Improvements:**
- Add responsive breakpoints to demo templates
- Add visual regression testing (Playwright)
- Add component usage examples in Storybook
- Add more ARIA labels to complex interactions

---

## Contributing

### Code Style

- Use TypeScript for all components
- Use CSS Modules for styling
- Always reference design tokens
- Add JSDoc comments to props
- Follow existing naming conventions

### Pull Request Checklist

- [ ] All components use design tokens exclusively
- [ ] CSS Module types generated (`npm run css-types`)
- [ ] TypeScript compiles without errors (`npm run typecheck`)
- [ ] Components are accessible (keyboard + screen reader)
- [ ] Changes tested in dev server

---

## Support

- **Documentation:** This file + inline JSDoc comments
- **Issues:** Check existing components for patterns
- **Questions:** Review [CLAUDE.md](CLAUDE.md) for design system rules

---

## Changelog

### v0.1.0 (2025-11-03)
- ✅ Added 8 brand color tokens for email/marketing templates
- ✅ Replaced all 18 hardcoded colors with tokens
- ✅ Added TypeScript types for CSS modules
- ✅ Created comprehensive documentation
- ✅ Fixed critical accessibility issues
- ✅ Achieved 100% token coverage (zero hardcoded values)

---

**Ready to prototype!** Start building with `npm run dev` and reference this guide when working with AI code generation tools.
