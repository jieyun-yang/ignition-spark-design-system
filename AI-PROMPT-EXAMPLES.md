# AI Prompt Examples for Ignition Spark Design System

**Learning library with detailed examples and use cases.**

This document contains comprehensive examples to help you understand how to use the AI prompts effectively. For quick copy-paste prompts, see [AI-PROMPT-GUIDE.md](./AI-PROMPT-GUIDE.md).

---

## 🔧 Testing Tools - Quick Reference for AI

**IMPORTANT: Use the right tool for the right job!**

| Task | Tool to Use | DO NOT Use |
|------|-------------|------------|
| **Inspect production app (demo.ignitionapp.com)** | ✅ Chrome DevTools MCP | ❌ Playwright MCP |
| **Compare design system vs production** | ✅ Chrome DevTools MCP → Playwright MCP | ❌ Native Playwright alone |
| **Quick visual check of prototype** | ✅ Playwright MCP | ❌ Chrome DevTools MCP |
| **Debug component behavior** | ✅ Playwright MCP | ❌ Chrome DevTools MCP |
| **Write automated tests** | ✅ Native Playwright | ❌ Playwright MCP |
| **Run test suite** | ✅ Native Playwright (npm run test:e2e) | ❌ Playwright MCP |
| **CI/CD integration** | ✅ Native Playwright | ❌ Any MCP tool |

**See [AI-PROMPT-GUIDE.md - Testing Tools Guide](./AI-PROMPT-GUIDE.md#-testing-tools-guide) for detailed explanations.**

---

## Table of Contents

- [🔧 Testing Tools](#-testing-tools---quick-reference-for-ai) - Which tool to use when
- [📖 Complete Workflow Example](#-complete-workflow-example) - Full 3-phase walkthrough
- [📋 Use Case Examples](#-use-case-examples) - 5 detailed scenarios
  - [Dashboard with Data Tables](#1-dashboard-with-data-tables)
  - [Multi-Step Form](#2-multi-step-form)
  - [Settings Page](#3-settings-page)
  - [Modal-Based Workflow](#4-modal-based-workflow)
  - [Analytics Dashboard](#5-analytics-dashboard)

---

## 📖 Complete Workflow Example

Here's a real example of the full 3-phase workflow showing user input and expected AI responses:

### Phase 1: User Provides Design

**User Input:**
```
I need to build a Settings page. Here's the Figma link:
https://figma.com/design/xxx/Settings-Page?node-id=123-456

PHASE 1 - DESIGN ANALYSIS (DO THIS FIRST):
[Pastes the Phase 1 prompt from AI-PROMPT-GUIDE.md]
```

**Expected AI Response:**
```
I've analyzed the Figma design. Here's my component mapping:

DESIGN ANALYSIS:

Header Section:
✅ PageHeader component
  - title: "Settings"
  - No breadcrumbs needed
  - Props: { title: "Settings" }

Profile Section:
✅ Card component with FieldSet
  - Avatar upload → Avatar component (size="large")
  - Name field → TextInput (label="Full Name")
  - Email field → TextInput (label="Email", type="email")
  - Bio → TextArea (label="Bio", rows={4})
  - Tokens: spacing[6] for card padding

Notifications Section:
✅ Card with Switch components
  - Email notifications → Switch
  - Push notifications → Switch
  - Tokens: spacing[4] between switches

⚠️ CLARIFYING QUESTIONS:
1. Should avatar upload be functional or just display?
2. Do you want validation on the email field?
3. Should changes auto-save or require a "Save" button?

⚠️ NEW TOKENS NEEDED:
None - all colors and spacing exist in design system

IMPLEMENTATION PLAN:
- File: src/pages/SettingsPage.tsx
- File: src/pages/SettingsPage.module.css (minimal, layout only)
- Components: PageHeader, Card, Avatar, TextInput, TextArea, Switch, Button, ActionBar
- Estimated complexity: Medium (2-3 hours)

Do you approve this plan?
```

---

### Phase 2: User Approves and Requests Implementation

**User Input:**
```
Approved! Avatar should be display-only for now, add email validation,
and use an ActionBar with Save/Cancel buttons.

[Pastes Phase 2 prompt with approved mapping]
```

**What the AI Does:**
- Creates `src/pages/SettingsPage.tsx`
- Creates `src/pages/SettingsPage.module.css`
- Imports all components from `./design-system`
- Uses design tokens for all spacing/colors
- Implements email validation
- Adds ActionBar with Save/Cancel

---

### Phase 3: User Requests Verification

**User Input:**
```
[Pastes Phase 3 verification prompt]
```

**Expected AI Response:**
```
VERIFICATION COMPLETE:

TESTING TOOLS USED:
- ✅ Playwright MCP: Interactive testing and screenshots
- ✅ Native Playwright: Automated test suite (npm run test:e2e)
- ❌ Chrome DevTools MCP: NOT used (only for production analysis)

1. TOKEN USAGE AUDIT:
   ✅ No hardcoded colors found
   ✅ No hardcoded spacing found
   ✅ All using design tokens:
      - colors.grayscale[100] for card backgrounds
      - spacing[6] for card padding
      - spacing[4] for form field gaps

2. COMPONENT USAGE AUDIT:
   ✅ All components from ./design-system:
      - PageHeader ✓
      - Card ✓ (3 instances)
      - Avatar ✓
      - TextInput ✓ (2 instances)
      - TextArea ✓
      - Switch ✓ (2 instances)
      - Button ✓ (2 instances)
      - ActionBar ✓

3. TYPESCRIPT CHECK:
   ✅ npm run typecheck - PASSED
   ✅ All props properly typed

4. FUNCTIONAL TESTING:
   ✅ Created: tests/settings-page.spec.ts
   ✅ Tests created for:
      - Page rendering
      - Form input (name, email, bio)
      - Switch toggles (email/push notifications)
      - Save button click
      - Cancel button click
      - Email validation
      - Mobile/tablet/desktop viewports
   ✅ Screenshots captured:
      - Default state
      - Form filled state
      - Validation error state
      - Mobile view (375px)
      - Tablet view (768px)
      - Desktop view (1440px)

5. ACCESSIBILITY CHECK:
   ✅ All form fields have labels
   ✅ Keyboard navigation works (Tab, Enter, Escape)
   ✅ ARIA labels on all buttons
   ✅ Color contrast > 4.5:1
   ✅ Screen reader friendly

6. SMOKE TEST RESULTS:
   ✅ Loaded page successfully
   ✅ All interactive elements functional
   ✅ No console errors
   ✅ No broken interactions found

7. FIGMA COMPARISON:
   ✅ Visual match confirmed
   Minor differences:
   - Font rendering slightly thinner (browser anti-aliasing)
   - Otherwise pixel-perfect match

8. CODE QUALITY:
   ✅ No console.log statements
   ✅ Clean, readable code
   ✅ Proper TypeScript types
   ✅ No unused imports

TEST EXECUTION:
✅ npm run test:e2e - ALL TESTS PASSED (12/12)

FINAL VERDICT: ✅ PRODUCTION READY

The Settings page is fully functional, accessible, and matches the Figma design.
Ready for deployment!
```

---

## 📋 Use Case Examples

### 1. Dashboard with Data Tables

**Scenario:** You need a user management dashboard with a data table, search, and pagination.

**Prompt:**
```
I need you to build a User Management Dashboard using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 53 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./src/templates/

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
3. ✅ FOLLOW patterns from ./src/templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
1. Use PageHeader, Table, TableHeader, Badge, Menu, Pagination, and SideNav components
2. Reference colors from design-system/tokens/colors.ts
3. Use TypeScript interfaces for user data
4. Make the table responsive
5. Follow the layout structure from ./src/templates/ProposalsTemplate.tsx

Please review the Table and Badge components in ./design-system/components before starting.
```

**When to use this:**
- Building admin dashboards
- Data management interfaces
- List views with actions

---

### 2. Multi-Step Form

**Scenario:** You need a multi-step onboarding form with validation and progress indicator.

**Prompt:**
```
I need you to build a Client Onboarding Form using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 53 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./src/templates/

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
3. ✅ FOLLOW patterns from ./src/templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
1. Use ProgressStatus, TextInput, Select, Checkbox, Button, and Alert components
2. Reference spacing tokens for consistent layout
3. Validate all required fields before allowing "Next"
4. Show success Alert when form is submitted
5. Follow the wizard pattern from ./src/templates/WizardTemplate.tsx

Please review the form components (TextInput, Select, Checkbox) in ./design-system/components before starting.
```

**When to use this:**
- Onboarding flows
- Checkout processes
- Survey or questionnaire interfaces
- Configuration wizards

---

### 3. Settings Page

**Scenario:** You need a settings page with multiple sections and form controls.

**Prompt:**
```
I need you to build a User Settings Page using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 53 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./src/templates/

WHAT I NEED:
A settings page with sections for:
- Profile: Avatar upload, Name, Email (TextInput), Bio (TextArea)
- Notifications: Email notifications (Switch), Push notifications (Switch)
- Security: Change password (PasswordInput), Two-factor auth (Switch)
- Danger Zone: Delete account button (destructive)
- Sticky action bar at bottom with "Cancel" and "Save Changes" buttons

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./src/templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
1. Use Card, TextInput, TextArea, Switch, PasswordInput, Avatar, Button, and ActionBar
2. Group related settings in Card components
3. Use FieldSet for semantic grouping
4. Show Toast notification on save
5. Use destructive Button variant for "Delete Account"
6. Reference the EmailTemplate.tsx for layout inspiration

Please review the Card, Switch, and ActionBar components before starting.
```

**When to use this:**
- User profile pages
- Application settings
- Preference management
- Account configuration

---

### 4. Modal-Based Workflow

**Scenario:** You need a page with cards that opens a modal for creating new items.

**Prompt:**
```
I need you to build a Project Creation Workflow using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 53 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./src/templates/

WHAT I NEED:
A project listing page with:
- Grid of project cards (title, description, status badge, last updated)
- "Create Project" button that opens a modal
- Modal with form: Project name, Description (TextArea), Template selection (CheckboxCard)
- Empty state when no projects exist
- Loading skeleton while projects load

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./src/templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
1. Use Card, CardContainer, Modal, TextInput, TextArea, CheckboxCard, Badge, EmptyState, Skeleton
2. Show EmptyState with illustration when no projects
3. Modal should have "Cancel" and "Create" buttons
4. Show Spinner while creating project
5. Close modal and show success Toast after creation
6. Use grid layout with CardContainer

Please review the Modal, EmptyState, and Skeleton components before starting.
```

**When to use this:**
- Creation workflows
- Item listing pages
- Gallery or portfolio views
- Resource management

---

### 5. Analytics Dashboard

**Scenario:** You need a dashboard with stats, filters, and data visualization placeholders.

**Prompt:**
```
I need you to build a Sales Analytics Dashboard using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 53 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./src/templates/

WHAT I NEED:
An analytics dashboard with:
- 4 stat cards at top (Total Revenue, New Customers, Conversion Rate, Avg Order Value)
- Date range filter (DatePicker)
- Filter by region (Select dropdown)
- Recent transactions table
- Charts placeholder (we'll integrate later - just show Card with title for now)
- Export button to download report

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./src/templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
1. Use Card, DataList, Table, DatePicker, Select, Button, Badge components
2. Use CardContainer for stat cards grid
3. Show ProgressBar for conversion rate
4. Use Menu component for "Export" options (CSV, PDF, Excel)
5. Make filters sticky when scrolling
6. Follow ProposalsTemplate.tsx structure

Please review the DataList, ProgressBar, and Filter components before starting.
```

**When to use this:**
- Analytics dashboards
- Reporting interfaces
- Metrics visualization
- Business intelligence tools

---

## 💡 Tips for Writing Effective Prompts

### Be Specific About Layout
Good: "4 stat cards in a grid at the top, then a table below"
Bad: "Show some stats and a table"

### Reference Existing Templates
Good: "Follow the layout structure from ./src/templates/ProposalsTemplate.tsx"
Bad: "Make it look professional"

### Specify Component Variants
Good: "Use destructive Button variant for 'Delete Account'"
Bad: "Add a delete button"

### Include User Flows
Good: "Click 'Add User' → Modal opens → Fill form → Submit → Modal closes → Table refreshes"
Bad: "Let users add users"

### Mention States
Good: "Show Spinner while loading, EmptyState when no data, error Alert on failure"
Bad: "Handle different situations"

---

## 🎯 Choosing the Right Approach

| Scenario | Recommended Approach |
|----------|---------------------|
| **Have Figma design** | Use 3-Phase Workflow (Phase 1 analyzes Figma) |
| **Know exact components needed** | Use Quick Build Mode |
| **Complex multi-page flow** | Use 3-Phase Workflow (Phase 1 breaks it down) |
| **Similar to existing template** | Reference template in Quick Build Mode |
| **Exploratory/prototype** | Use 3-Phase Workflow (get AI suggestions) |

---

## 📚 Additional Resources

- **[AI-PROMPT-GUIDE.md](./AI-PROMPT-GUIDE.md)** - Quick copy-paste prompts
- **[COMPONENTS.md](./COMPONENTS.md)** - Full component API documentation
- **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** - Design principles and tokens
- **[src/templates/](./src/templates/)** - Reference implementation examples

---

**Last Updated:** 2025-11-04
**Version:** 2.0.0
