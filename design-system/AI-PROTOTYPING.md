# AI Prototyping Guide

**Build production-ready prototypes 10x faster using AI assistants like Cursor, Claude Code, or Codex.**

This guide provides ready-to-use prompts and examples for building UIs with the Ignition Spark Design System.

---

## Table of Contents

- [3-Phase Workflow](#-3-phase-workflow) - Copy-paste prompts for building prototypes
- [Quick Build Mode](#-quick-build-mode) - Skip analysis if you know what you need
- [Component Reference](#-component-reference) - Quick lookup
- [Use Case Examples](#-use-case-examples) - Detailed scenarios
- [Testing Tools](#-testing-tools) - How AI should verify work
- [Best Practices](#-best-practices) - Guidelines for AI
- [Troubleshooting](#-troubleshooting) - Common issues

---

## 3-Phase Workflow

**This workflow enables AI to build and test prototypes with minimal human intervention.**

### Phase 1: Design Analysis (Start Here)

**Copy this prompt** - Add your Figma link/screenshots/description:

```
I need you to help me build a prototype using the Ignition Spark Design System.

PHASE 1 - DESIGN ANALYSIS (DO THIS FIRST):

Before writing any code:

1. REVIEW DOCUMENTATION:
   - Read ./COMPONENTS.md (all 51 components)
   - Read ./design-system/tokens/index.ts (design tokens)
   - Review ./templates/ (existing patterns)

2. ANALYZE MY DESIGN:
   [If I provide a Figma link, use the Figma MCP tool to analyze it]
   [If I provide screenshots or descriptions, analyze those]

   For each UI element in the design, identify:
   - Which existing component to use (Button, Card, Table, etc.)
   - Which design tokens apply (colors, spacing, typography)
   - Any custom components that DON'T exist yet
   - Any colors/styles that AREN'T in our token system

3. CREATE COMPONENT MAPPING:
   List every UI element and map it to:
   ✅ Existing component name and props
   ✅ Design tokens to use
   ⚠️ Components that need to be created (ask me first!)
   ⚠️ Tokens that don't exist (ask me first!)

4. ASK CLARIFYING QUESTIONS:
   - Are there any interactions not shown in the design?
   - Should I use [Component A] or [Component B] for [element]?
   - I don't see a token for [color/spacing] - should I add one or use [alternative]?
   - Any specific error/loading states needed?

5. PROPOSE IMPLEMENTATION PLAN:
   - List of components to use
   - File structure you'll create
   - Any custom CSS needed (with justification)
   - Estimated complexity

ONLY AFTER I APPROVE YOUR PLAN, proceed to Phase 2 (implementation).

MY DESIGN/REQUIREMENTS:
[Paste Figma link, upload screenshots, or describe the feature here]

ADDITIONAL CONTEXT:
[Any specific requirements, user flows, or constraints]
```

---

### Phase 2: Build (After Phase 1 Approval)

**Copy this prompt** - After approving the AI's analysis:

```
Build approved! Please implement using:

APPROVED MAPPING:
[Paste the component mapping from Phase 1]

RULES:
1. ✅ USE only components from ./design-system
2. ✅ USE design tokens (NO hardcoded values)
3. ✅ FOLLOW patterns from ./templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
- TypeScript with full type safety
- Responsive and accessible
- CSS Modules for custom styles only
- Match existing template visual style

After implementation, run verification (Phase 3).
```

---

### Phase 3: Verify & Test (After Build)

**Copy this prompt** - After the AI builds the prototype:

```
Now that the prototype is built, please verify and test it:

1. TOKEN USAGE AUDIT:
   - Search the code for ANY hardcoded values (hex colors, px values)
   - Replace ALL hardcoded values with design tokens
   - Show me a summary of what you found and fixed

2. COMPONENT USAGE AUDIT:
   - List all components used and verify they're from ./design-system
   - Check for any custom components created (should be minimal/none)

3. TYPESCRIPT CHECK:
   - Run: npm run typecheck
   - Fix any TypeScript errors

4. FUNCTIONAL TESTING:
   - Use Playwright MCP to load the prototype
   - Test all interactive elements (buttons, forms, modals)
   - Take screenshots of all states

5. ACCESSIBILITY CHECK:
   - Verify all interactive elements have ARIA labels
   - Test keyboard navigation (Tab, Enter, Escape)
   - Check focus indicators are visible

DELIVERABLES:
✅ Summary of all tests performed
✅ List of issues found and fixed
✅ Screenshots of tested states
✅ Final verdict: "PRODUCTION READY" or "NEEDS FIXES"
```

---

## Quick Build Mode

**Use this if you already know what components you need:**

```
I need you to build a [DESCRIBE WHAT YOU NEED] using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 51 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./templates/

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
- TypeScript with full type safety
- Responsive and accessible
- CSS Modules for custom styles
- Match existing template visual style

[DESCRIBE YOUR SPECIFIC NEEDS HERE]

Please review ./COMPONENTS.md and ./templates/ before starting.
```

---

## Component Reference

### Available Components by Category

**Forms & Inputs (14):**
- Button, ComboButton, MenuButton
- TextInput, TextArea, PasswordInput
- Checkbox, CheckboxCard, RadioButton
- Select, DatePicker, Search
- Switch, FieldSet

**Data Display (13):**
- Table, TableHeader, DataList
- Badge, Avatar, Card, AppCard, CardContainer
- ProgressBar, ProgressStatus, Skeleton
- Divider, Link, EmptyState

**Feedback (5):**
- Alert, Toast, Notification
- Spinner, Tooltip

**Navigation (5):**
- Menu, Tabs, Pagination
- SideNav, PageHeader

**Overlays (6):**
- Modal, Drawer, Popover
- Banner, Overlayer, Filter

**Content (8):**
- Accordion, CopyField, Signature
- ActionBar, SupportArticleLink
- Illustration, TemplateLayout

### Design Tokens Quick Reference

```tsx
import { colors, spacing, typography } from './design-system/tokens';

// Colors
colors.primary[500]              // #5A51E7 (Purple)
colors.secondary.blue[500]       // #0F65F0 (Info)
colors.secondary.green[500]      // #08A674 (Success)
colors.secondary.yellow[500]     // #D97706 (Warning)
colors.secondary.red[500]        // #DD2222 (Error)

// Spacing
spacing[4]                       // 16px
spacing[6]                       // 24px

// Typography
typography.fontSize.lg           // Large text
typography.fontWeight.semibold   // 600
```

### Reference Templates

- **EmailTemplate.tsx** - Cards and forms layout
- **WizardTemplate.tsx** - Multi-step forms
- **ProposalsTemplate.tsx** - Tables and data

---

## Use Case Examples

### 1. Dashboard with Data Tables

```
I need you to build a User Management Dashboard using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 51 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./templates/

WHAT I NEED:
A user management dashboard with:
- Page header with title "User Management" and "Add User" button
- Search bar to filter users
- Data table showing: Name, Email, Role, Status, Last Login
- Each row should have action menu (Edit, Disable, Delete)
- Status badges (Active = green, Inactive = gray, Suspended = red)
- Pagination at the bottom
- Side navigation matching the Proposals template style

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing

REQUIREMENTS:
1. Use PageHeader, Table, TableHeader, Badge, Menu, Pagination, and SideNav
2. Reference colors from design-system/tokens/colors.ts
3. Use TypeScript interfaces for user data
4. Follow the layout structure from ./templates/ProposalsTemplate.tsx
```

**When to use:** Admin dashboards, data management interfaces, list views with actions

---

### 2. Multi-Step Form

```
I need you to build a Client Onboarding Form using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 51 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./templates/

WHAT I NEED:
A multi-step onboarding form with:
- Step 1: Basic Information (Company name, Industry, Company size)
- Step 2: Contact Details (Name, Email, Phone, Address)
- Step 3: Preferences (Newsletter opt-in, Communication preferences)
- Progress indicator showing current step
- "Next" and "Back" buttons
- Form validation with error messages
- Success state when complete

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./templates/

REQUIREMENTS:
1. Use ProgressStatus, TextInput, Select, Checkbox, Button, and Alert
2. Validate all required fields before allowing "Next"
3. Show success Alert when form is submitted
4. Follow the wizard pattern from ./templates/WizardTemplate.tsx
```

**When to use:** Onboarding flows, checkout processes, configuration wizards

---

### 3. Settings Page

```
I need you to build a User Settings Page using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 51 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./templates/

WHAT I NEED:
A settings page with sections for:
- Profile: Avatar upload, Name, Email (TextInput), Bio (TextArea)
- Notifications: Email notifications (Switch), Push notifications (Switch)
- Security: Change password (PasswordInput), Two-factor auth (Switch)
- Danger Zone: Delete account button (destructive)
- Sticky action bar at bottom with "Cancel" and "Save Changes" buttons

REQUIREMENTS:
1. Use Card, TextInput, TextArea, Switch, PasswordInput, Avatar, Button, ActionBar
2. Group related settings in Card components
3. Use FieldSet for semantic grouping
4. Use destructive Button variant for "Delete Account"
5. Reference the EmailTemplate.tsx for layout inspiration
```

**When to use:** User profile pages, application settings, preference management

---

### 4. Modal-Based Workflow

```
I need you to build a Project Creation Workflow using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 51 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./templates/

WHAT I NEED:
A project listing page with:
- Grid of project cards (title, description, status badge, last updated)
- "Create Project" button that opens a modal
- Modal with form: Project name, Description (TextArea), Template selection (CheckboxCard)
- Empty state when no projects exist
- Loading skeleton while projects load

REQUIREMENTS:
1. Use Card, CardContainer, Modal, TextInput, TextArea, CheckboxCard, Badge, EmptyState, Skeleton
2. Show EmptyState with illustration when no projects
3. Modal should have "Cancel" and "Create" buttons
4. Close modal and show success Toast after creation
```

**When to use:** Creation workflows, item listing pages, gallery views

---

## Testing Tools

### Which Tool to Use

| Task | Tool |
|------|------|
| Inspect production app (demo.ignitionapp.com) | Chrome DevTools MCP |
| Quick visual check of prototype | Playwright MCP |
| Debug component behavior | Playwright MCP |
| Write automated tests | Native Playwright |
| Run test suite | Native Playwright (`npm run test:e2e`) |

### Decision Tree

```
Testing LOCAL prototype on localhost?
  ├─→ Quick check? → Playwright MCP
  └─→ Full test suite? → Native Playwright

Comparing vs PRODUCTION (demo.ignitionapp.com)?
  └─→ Chrome DevTools MCP
```

---

## Best Practices

**Tell the AI to ensure:**

```
Before you start building, confirm you will:
☐ Import components from ./design-system (NOT create new ones)
☐ Use design tokens for ALL colors, spacing, typography
☐ Add TypeScript types for all props and state
☐ Use CSS Modules for custom styling
☐ Make it responsive (mobile-friendly)
☐ Include ARIA labels for accessibility
☐ Follow the file structure of existing templates
☐ Test all interactive states (hover, focus, disabled)
```

**Tell the AI NOT to do:**

```
DO NOT:
❌ Create new Button/Input/Card components (use design-system ones)
❌ Use hardcoded colors like '#5A51E7' (use colors.primary[500])
❌ Use hardcoded spacing like '16px' (use spacing[4])
❌ Use inline styles (use CSS Modules instead)
❌ Import from external UI libraries (MUI, Chakra, etc.)
❌ Skip TypeScript types
```

---

## Troubleshooting

### AI Not Using Design System Components

```
REMINDER: This project already has a complete design system.
Please use ONLY the components from ./design-system/components.

Specifically:
- Use <Button> from './design-system' (NOT <button> HTML element)
- Use colors.primary[500] (NOT '#5A51E7')
- Use spacing[4] (NOT '16px')

Please review ./COMPONENTS.md for the full list of available components.
```

### Quick Iteration Prompts

After building the initial prototype:
- "Add loading states to the table"
- "Make the modal form validate required fields"
- "Add error handling for API calls"
- "Make it responsive for mobile"
- "Add keyboard navigation support"

---

## Documentation Reference

Before building, the AI should review:
1. **./COMPONENTS.md** - Complete API documentation for all 51 components
2. **./design-system/tokens/index.ts** - All available design tokens
3. **./templates/** - Reference implementations
4. **./TOKENS.md** - Design system principles and usage

---

**Last Updated:** 2026-01-20
**Compatible with:** Cursor, Claude Code, Codex, and other AI coding assistants
