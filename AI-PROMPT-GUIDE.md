# AI Prompt Guide for Ignition Spark Design System

**Quick plug-and-play prompts for building prototypes with AI assistants like Claude Code, Cursor, or GitHub Copilot.**

Use the 3-phase workflow below to build production-ready prototypes 10x faster. The AI will analyze your design, use existing components, and autonomously verify everything works correctly.

---

## Table of Contents

- [⚡ 3-Phase Workflow](#-3-phase-workflow) - **Start here - copy-paste prompts**
- [🤖 What is Autonomous Testing?](#-what-is-autonomous-testing) - How AI tests without explicit requirements
- [🚀 Quick Build Mode](#-quick-build-mode) - Skip analysis if you know what you need
- [🎨 Component Reference](#-component-reference) - Quick lookup
- [✅ Best Practices](#-best-practices) - Checklist for AI
- [🚫 Common Mistakes](#-common-mistakes) - What to avoid
- [💡 Pro Tips](#-pro-tips) - Iteration & refinement
- [📖 Learning & Examples](./AI-PROMPT-EXAMPLES.md) - **Detailed examples and use cases**

---

## ⚡ 3-Phase Workflow

**This workflow enables AI to build and test prototypes with minimal human intervention. The AI will autonomously verify functionality, accessibility, and quality.**

### 🔍 Phase 1: Design Analysis (Start Here)

**📋 COPY THIS PROMPT** - Add your Figma link/screenshots/description:

```
I need you to help me build a prototype using the Ignition Spark Design System.

IMPORTANT: After building (Phase 2), you will autonomously test and verify the prototype works correctly (Phase 3) without needing me to specify test cases.

PHASE 1 - DESIGN ANALYSIS (DO THIS FIRST):

Before writing any code:

1. REVIEW DOCUMENTATION:
   - Read ./COMPONENTS.md (all 53 components)
   - Read ./design-system/tokens/index.ts (design tokens)
   - Review ./src/templates/ (existing patterns)

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

### 🎯 Phase 2: Build (After Phase 1 Approval)

**📋 COPY THIS PROMPT** - After approving the AI's analysis:

```
Build approved! Please implement using:

APPROVED MAPPING:
[Paste the component mapping from Phase 1]

RULES:
1. ✅ USE only components from ./design-system
2. ✅ USE design tokens (NO hardcoded values)
3. ✅ FOLLOW patterns from ./src/templates/
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

### ✅ Phase 3: Verify & Test (After Build)

**📋 COPY THIS PROMPT** - After the AI builds the prototype:

```
Now that the prototype is built, please verify and test it AUTONOMOUSLY:

AUTOMATED VERIFICATION CHECKLIST:

1. TOKEN USAGE AUDIT:
   - Search the code for ANY hardcoded values:
     • Colors (hex codes like #5A51E7 or rgb())
     • Spacing (px values like 16px, margin/padding numbers)
     • Font sizes (hardcoded px/rem values)
     • Border radius, shadows, etc.
   - Replace ALL hardcoded values with design tokens
   - Show me a summary of what you found and fixed

2. COMPONENT USAGE AUDIT:
   - List all components used and verify they're from ./design-system
   - Check for any custom components created (should be minimal/none)
   - Verify all imports are from './design-system' not recreated

3. TYPESCRIPT CHECK:
   - Run: npm run typecheck
   - Fix any TypeScript errors
   - Ensure all props are properly typed

4. FUNCTIONAL TESTING (AUTONOMOUS - NO USER INPUT NEEDED):
   Create a comprehensive Playwright test in ./tests/ that:

   a) COMPONENT RENDERING:
      - Verify all components render without errors
      - Check that all expected UI elements are present
      - Validate data displays correctly

   b) INTERACTIVE BEHAVIOR:
      - Test ALL button clicks (primary actions, secondary actions, close buttons)
      - Test form field inputs (type text, select options, check boxes)
      - Test dropdown menus (open, select, close)
      - Test modals/drawers (open, interact, close)
      - Test tabs/navigation (switch between tabs, verify content changes)
      - Test pagination (if applicable)
      - Test search/filter functionality (if applicable)

   c) STATE CHANGES:
      - Verify loading states appear/disappear correctly
      - Verify error states display when expected
      - Verify success states after actions
      - Verify disabled states prevent interactions
      - Verify form validation works

   d) EDGE CASES:
      - Test empty states (no data scenarios)
      - Test with maximum data (full tables, long text)
      - Test rapid interactions (double clicks, quick navigation)
      - Test escape key, outside clicks (for modals/dropdowns)

   e) RESPONSIVE BEHAVIOR:
      - Screenshot and verify: Mobile (375px), Tablet (768px), Desktop (1440px)
      - Verify layout adjusts properly
      - Verify no horizontal scroll
      - Verify touch-friendly hit areas on mobile

   f) VISUAL REGRESSION:
      - Capture screenshots of ALL states discovered during testing
      - Compare with existing templates for consistency
      - Verify spacing, alignment, typography match design system

   Then RUN the test: npm run test:e2e

5. ACCESSIBILITY AUDIT (AUTONOMOUS):
   - Verify all interactive elements have ARIA labels or accessible names
   - Test keyboard navigation:
     • Tab through all interactive elements in logical order
     • Enter/Space activate buttons
     • Escape closes modals/dropdowns
     • Arrow keys work in menus/selects
   - Verify semantic HTML (headers, nav, main, buttons not divs)
   - Check focus indicators are visible
   - Verify form labels are associated with inputs
   - Check that error messages are announced

6. FUNCTIONAL SMOKE TEST (AUTONOMOUS):
   Without me telling you what to test, use the Playwright browser tool to:
   - Load the prototype in a browser
   - Interact with EVERY interactive element you can find
   - Try to "break" the prototype (click rapidly, type invalid data, etc.)
   - Verify it works as a reasonable user would expect
   - Document any bugs, broken interactions, or confusing UX

7. FIGMA COMPARISON (if Figma design provided):
   - Use Playwright to screenshot the prototype
   - Use Figma MCP tool to get design screenshots
   - Compare side-by-side
   - List any visual differences

8. CODE QUALITY:
   - No console.log statements left in code
   - Meaningful variable/function names
   - Comments for complex logic only
   - Consistent formatting
   - No unused imports or variables

DELIVERABLES:
Provide a complete verification report with:
✅ Summary of all tests performed
✅ List of issues found and fixed
✅ Playwright test file path and code
✅ Test execution results (pass/fail counts)
✅ Screenshots of all tested states
✅ Bugs found during smoke testing (if any)
✅ Final verdict: "PRODUCTION READY" or "NEEDS FIXES" with specific action items
```

---

## 🤖 What is Autonomous Testing?

**Phase 3 includes autonomous testing, which means the AI will:**

1. **Infer Expected Behavior**: The AI analyzes your prototype and determines what *should* work based on:
   - Component types used (buttons should click, forms should submit, etc.)
   - Common UI patterns (modals should open/close, tabs should switch content)
   - Accessibility standards (keyboard navigation, screen reader support)

2. **Generate Test Cases Automatically**: Without you specifying test scenarios, the AI will:
   - Identify all interactive elements
   - Create tests for each interaction
   - Test edge cases (empty states, long text, rapid clicks)
   - Test responsive behavior across devices

3. **Execute & Verify**: The AI will:
   - Run Playwright tests with the dev server
   - Interact with the live prototype in a browser
   - Capture screenshots of all states
   - Report bugs and UX issues it discovers

4. **Fix Issues Automatically**: When the AI finds problems, it will:
   - Fix TypeScript errors
   - Replace hardcoded values with tokens
   - Improve accessibility
   - Fix broken interactions

**Result**: You get a production-ready prototype with comprehensive test coverage, requiring minimal manual testing or intervention.

---

## 🚀 Quick Build Mode

**Use this if you already know what components you need and want to skip Phase 1 analysis:**

**📋 COPY THIS PROMPT** - Fill in your requirements:

```
I need you to build a [DESCRIBE WHAT YOU NEED] using the Ignition Spark Design System.

CONTEXT:
- Complete design system with 53 components in ./design-system
- Design tokens in ./design-system/tokens
- Reference templates in ./src/templates/

RULES:
1. ✅ USE existing components from ./design-system
2. ✅ USE design tokens (colors, spacing, typography)
3. ✅ FOLLOW patterns from ./src/templates/
4. ❌ DO NOT create new UI components
5. ❌ DO NOT hardcode colors/spacing
6. ❌ DO NOT use inline styles

REQUIREMENTS:
- TypeScript with full type safety
- Responsive and accessible
- CSS Modules for custom styles
- Match existing template visual style

[DESCRIBE YOUR SPECIFIC NEEDS HERE]

Please review ./COMPONENTS.md and ./src/templates/ before starting.
```

---

## 🎨 Component Reference

### Available Components by Category

**Forms & Inputs (14):**
- Button, ComboButton, MenuButton
- TextInput, TextArea, PasswordInput
- Checkbox, CheckboxCard, RadioButton
- Select, DatePicker, Search
- Switch, FieldSet

**Data Display (15):**
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
colors.status.info.background    // #E6F0FE

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

## ✅ Best Practices

**Tell the AI to ensure:**

```
Before you start building, confirm you will:
☐ Import components from ./design-system (NOT create new ones)
☐ Use design tokens for ALL colors, spacing, typography
☐ Add TypeScript types for all props and state
☐ Use CSS Modules for custom styling (create .module.css file)
☐ Make it responsive (mobile-friendly)
☐ Include ARIA labels for accessibility
☐ Follow the file structure of existing templates
☐ Test all interactive states (hover, focus, disabled)
☐ Show loading/error states where appropriate
☐ Add meaningful comments for complex logic
```

---

## 🚫 Common Mistakes

**Tell the AI to NOT do:**

```
DO NOT:
❌ Create new Button/Input/Card components (use design-system ones)
❌ Use hardcoded colors like '#5A51E7' (use colors.primary[500])
❌ Use hardcoded spacing like '16px' (use spacing[4])
❌ Use inline styles (use CSS Modules instead)
❌ Import from external UI libraries (MUI, Chakra, etc.)
❌ Copy-paste code from templates (understand and adapt)
❌ Skip TypeScript types (this is a strict TypeScript project)
❌ Forget error handling and loading states
```

---

## 💡 Pro Tips

### For Faster Iteration

After building the initial prototype, you can ask:
- "Add loading states to the table"
- "Make the modal form validate required fields"
- "Add error handling for API calls"
- "Make it responsive for mobile"
- "Add keyboard navigation support"
- "Replace placeholder data with mock API calls"

### For Refinement

- "Match the spacing used in ProposalsTemplate"
- "Use the same color scheme as WizardTemplate"
- "Add the same SideNav from EmailTemplate"
- "Make the buttons consistent with existing templates"

### For Expansion

- "Add a search filter to this table"
- "Add bulk actions for selected items"
- "Add export functionality"
- "Add sorting to table columns"

---

## 📚 Documentation Reference

Before building, the AI should review:
1. **./COMPONENTS.md** - Complete API documentation for all 53 components
2. **./design-system/tokens/index.ts** - All available design tokens
3. **./src/templates/** - Reference implementations
4. **./DESIGN-SYSTEM.md** - Design system principles and usage
5. **./design-system/components/[ComponentName]/** - Specific component implementation

---

## 📞 Getting Help

If the AI is not using the design system correctly, use this reminder:

```
REMINDER: This project already has a complete design system.
Please use ONLY the components from ./design-system/components.

Specifically:
- Use <Button> from './design-system' (NOT <button> HTML element)
- Use colors.primary[500] (NOT '#5A51E7')
- Use spacing[4] (NOT '16px')

Please review ./COMPONENTS.md for the full list of available components and their props.
```

---

## 📖 Want More Examples?

See **[AI-PROMPT-EXAMPLES.md](./AI-PROMPT-EXAMPLES.md)** for:
- Complete workflow walkthrough (Settings page example)
- 5 detailed use case examples (Dashboard, Forms, Settings, Modals, Analytics)
- When to use which approach
- Advanced scenarios and customization

---

**Last Updated:** 2025-11-04
**Version:** 2.0.0
**Compatible with:** Claude Code, GitHub Copilot, Cursor, and other AI coding assistants
