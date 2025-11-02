# Design System Implementation Queue

This file tracks Figma components that need to be implemented, organized by category and priority order.

## Agent Instructions

**Mode**: Batch Implementation
- Implement all components in each category before requesting review
- Record questions/decisions in the Notes section after each category
- Update status from ⏳ to ✅ as you complete each component
- Report completion when a full category is done

**Demo Pages**:
- Forms components → `/src/FormsDemo.tsx`
- Alerts/Notifications → `/src/AlertToastDemo.tsx`

**Implementation Pattern**: Follow patterns in `/design-system/components/` and rules in `CLAUDE.md`

---

## Status Legend
- ✅ Completed & Tested
- 🚧 In Progress
- ⏳ Pending (Not Started)
- ❓ Question/Blocker
- ⏭️ Skipped (with reason)

---

## Already Implemented ✅

### Forms - Buttons
- ✅ Button (Primary, Secondary, Tertiary, Destructive)
- ✅ ComboButton
- ✅ MenuButton
- ✅ ActionBar

### Forms - Text Inputs
- ✅ TextInput
- ✅ PasswordInput
- ✅ TextArea
- ✅ Search
- ✅ CopyField

### Forms - Selection Controls
- ✅ Checkbox
- ✅ CheckboxCard
- ✅ RadioButton
- ✅ Switch
- ✅ Select (single/multi with variants)
- ✅ Menu

### Forms - Date & Time
- ✅ DatePicker

### Feedback
- ✅ Alert
- ✅ Toast
- ✅ Tooltip

---

## 📋 TO IMPLEMENT (Add your components below)

## Data display - Priority 1
### ✅ Badge `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1252-7971&t=vVBTIsXGAqQu53RA-4`
### ✅ Avatar `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1252-7920&t=vVBTIsXGAqQu53RA-4`
### ✅ Data list `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=2062-6928&t=vVBTIsXGAqQu53RA-4`
### ✅ Table `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=2064-6909&t=vVBTIsXGAqQu53RA-4`
- ✅ Sortable columns
- ✅ Row selection with checkboxes
- ✅ Pagination support
### ✅ Card `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=4060-8266&t=vVBTIsXGAqQu53RA-4`
- ✅ All 59 variants implemented (Small, Large, XLarge)
- ✅ States: Default, Hover, Selected, Disabled
- ✅ Features: Icon (default/primary/secondary), Logo, Badge, Preview/Illustration, Menu
- ✅ Demo organized by feature matching Figma structure
### ✅ Link `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5998-4772&t=vVBTIsXGAqQu53RA-4`
- ✅ All 9 typography variants (body, body-medium, small, small-medium, extra-small, h1, h2, h3, h4)
- ✅ Hover states and external link support
### ✅ Empty State `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5036-12381&t=vVBTIsXGAqQu53RA-4`
- ✅ All 3 size variants (large, medium, small)
- ✅ Primary and secondary action buttons
- ✅ Optional illustration/icon support
### ✅ Notification `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5762-6531&t=vVBTIsXGAqQu53RA-4`
- ✅ Avatar with initials
- ✅ Title, description, and timestamp
- ✅ Unread indicator
- ✅ Clickable with hover state

### ✅ Signature `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5998-4816&t=vVBTIsXGAqQu53RA-4`
- ✅ Size variants (small, medium, large)
- ✅ Name and role display
- ✅ Optional avatar image

### ✅ Support Article Link `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=6015-4921&t=vVBTIsXGAqQu53RA-4`
- ✅ Text variant (shows "Learn more")
- ✅ Icon variant (shows @ symbol)
- ✅ Purple link color with hover states

### ✅ Filter `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5773-12918&t=vVBTIsXGAqQu53RA-4`
- ✅ Pill-style button with dropdown popover
- ✅ With/without value states (purple/white background)
- ✅ Optional sub-filter label
- ✅ Radio button options or custom text input
- ✅ Close button on hover when has value
- ✅ Done button to apply filter

### ✅ Progress Status `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7893-6502&t=vVBTIsXGAqQu53RA-4`
- ✅ Color variants (green, yellow, red, gray)
- ✅ Progress dots/circles
- ✅ Optional counter display
- ✅ Label text


# Containers
### ✅ Card Container `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8255-13332&t=vVBTIsXGAqQu53RA-4`
- ✅ Header with heading and optional subheading
- ✅ Optional action button
- ✅ Divider
- ✅ Body content area
- ✅ Optional footer
- ✅ Collapsible variant

### ✅ Divider `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1252-7961&t=vVBTIsXGAqQu53RA-4`

### ⏭️ Drawer `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1337-6476&t=vVBTIsXGAqQu53RA-4`
- ⏭️ Skipped - Not published in Figma yet (marked as "Not published yet")

### ✅ Overlayer `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1337-6441&t=vVBTIsXGAqQu53RA-4`
- ✅ Semi-transparent dark overlay (#1e1e20, 70% opacity)
- ✅ Fixed positioning covering entire viewport
- ✅ Click handler for dismissal
- ✅ z-index support

### ✅ Popover `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1368-6681&t=vVBTIsXGAqQu53RA-4`
- ✅ Size variants (small: 240px, medium: 320px, large: 420px)
- ✅ Floating container with shadow and border
- ✅ Arrow pointer to anchor element
- ✅ Click outside to close
- ✅ Escape key to close
- ✅ Placement variants (top, bottom, left, right)

### ✅ Accordion `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=2933-7203&t=vVBTIsXGAqQu53RA-4`

### ✅ Page Header `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=4570-9845&t=vVBTIsXGAqQu53RA-4`
- ✅ Page title (H1) with optional icon
- ✅ Optional tabs navigation
- ✅ Primary action button (purple)
- ✅ Secondary action button (menu button, gray)
- ✅ Active tab indicator
- ✅ Responsive layout

### ✅ Modal `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=6242-6512&t=vVBTIsXGAqQu53RA-4`

### ✅ Banner `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8705-8623&t=vVBTIsXGAqQu53RA-4`

# Navigation
### ✅ Tabs `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=2744-7231&t=vVBTIsXGAqQu53RA-4`

### ✅ Side Nav `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=3992-7931&t=vVBTIsXGAqQu53RA-4`
- ✅ Level 1 navigation items with icons
- ✅ Level 2 nested navigation items (indented)
- ✅ Expandable/collapsible submenus with chevron
- ✅ Active state highlighting (purple background)
- ✅ Hover states
- ✅ User account section with avatar and email
- ✅ Optional CTA button (purple, positioned above user section)
- ✅ 209px fixed width
- ✅ Full height with scrolling

### ✅ Pagination `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=4522-8931&t=vVBTIsXGAqQu53RA-4`

### ✅ Progress Bar `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=5482-12449&t=vVBTIsXGAqQu53RA-4`

### ✅ Spinner `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=1332-6632&t=vVBTIsXGAqQu53RA-4`

### ✅ Skeleton `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7079-5202&t=vVBTIsXGAqQu53RA-4`


# Layout
### ✅ Email template `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7033-4973&t=vVBTIsXGAqQu53RA-4`
- ✅ Email Button (rounded 12px, inline styles)
- ✅ Email Header (branded)
- ✅ Email Footer (with star rating and social proof)
- ✅ Unsubscribe Text (with link)
- ✅ Complete Email Example (full layout)

### ✅ Intercom `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7319-6314&t=vVBTIsXGAqQu53RA-4`
- ✅ Banner (dark green notification with close button)
- ✅ Product Tour (multi-step walkthrough with progress)
- ✅ Tooltip (dark tooltips on hover)
- ✅ Post - Small (announcement cards with avatars)

### ✅ Guided wizard `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8345-9670&t=vVBTIsXGAqQu53RA-4`
- ✅ Intro layout (split design with illustration)
- ✅ Form step (personal information collection)
- ✅ Table step (preferences with checkboxes)
- ✅ Loading state (spinner with message)
- ✅ Transition/Success screen (completion message)
- ✅ Progress indicator (step tracking)

```markdown
## [Category] - [Priority Number]

### [Subcategory]
- ⏳ Component Name - `https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=XXXX-XXXXX`
  - Variants: [list variants if known]
  - Notes: [any special requirements]
```

**Example:**

```markdown
## Forms - Priority 1

### Advanced Inputs
- ⏳ File Upload - `https://www.figma.com/design/...?node-id=1234-5678`
  - Variants: Default, Drag & Drop, With Preview
  - Notes: Handle file size limits

- ⏳ Color Picker - `https://www.figma.com/design/...?node-id=2345-6789`
  - Variants: Swatch, Full Spectrum
  - Notes: Need color format conversion

### Layout Components
- ⏳ Card - `https://www.figma.com/design/...?node-id=3456-7890`
  - Variants: Basic, With Image, With Actions
```

---

## 📝 Implementation Notes

### Category: Card Component
**Started**: 2025-11-01
**Completed**: 2025-11-01

**Components Completed**:
1. Card - Added missing XLarge size variant with 52px circular icon background

**Questions/Decisions**:
1. Q: Were all Card variants from Figma implemented?
   A: Verified against Figma node 4060-8266. Found 59 total variants. Added missing XLarge size (300px max-width, 52px icon with #e8e7ff background, 16px/500 title, 12px description)

2. Q: How should Card demo be organized?
   A: Reorganized to match Figma structure - grouped by features (Icon/Logo/Badge/Illustration) rather than just by size, following Figma naming pattern "State=X, Icon=Y, Size=Z"

**Issues/Blockers**:
- None

**Files Modified**:
- `/design-system/components/Card/Card.tsx` - Added 'xlarge' to size type
- `/design-system/components/Card/Card.module.css` - Added 6 CSS rule sets for xlarge variant
- `/src/ContainersDemo.tsx` - Reorganized all Card demos by feature + added XLarge examples

### Category: Layout Components
**Started**: 2025-11-01
**Completed**: 2025-11-01

**Components Completed**:
1. Email Template - Created demo page with button, header, footer, unsubscribe, and complete example
2. Intercom - Created demo page with banner, product tour, tooltips, and post cards
3. Guided Wizard - Created demo page with 5-step flow (intro, form, table, loading, success)

**Questions/Decisions**:
1. Q: Should these be reusable components or demo pages?
   A: Decided on demo pages showcasing key layout patterns, as these are showcase/documentation pages in Figma rather than single reusable components

2. Q: How to handle email template styling?
   A: Used inline styles throughout for email client compatibility, avoiding CSS modules

3. Q: Where should demo pages be located?
   A: Created separate demo pages in `/src/` and added navigation to MainApp.tsx for easy access

**Issues/Blockers**:
- None

**Files Modified**:
- `/src/EmailDemo.tsx` - New demo page with email template patterns
- `/src/IntercomDemo.tsx` - New demo page with Intercom UI patterns
- `/src/GuidedWizardDemo.tsx` - New demo page with multi-step wizard
- `/src/MainApp.tsx` - Added navigation buttons and routing for three new pages

### Category: [Name]
**Started**: [Date]
**Completed**: [Date]

**Components Completed**:
1. Component Name - [Brief implementation note]
2. Component Name - [Brief implementation note]

**Questions/Decisions**:
1. Q: [Question about implementation]
   A: [Decision made]

**Issues/Blockers**:
- None / [List issues]

**Files Modified**:
- `/design-system/components/[ComponentName]/`
- `/design-system/index.ts`
- `/src/FormsDemo.tsx` or `/src/AlertToastDemo.tsx`

---

## 🎯 Quick Reference for Agent

### Before Starting
1. Count total pending components
2. Review all Figma links to ensure they're accessible
3. Note any dependencies between components

### For Each Component
1. Fetch design: `mcp__figma-desktop__get_design_context()` + `get_screenshot()`
2. Create component files following existing patterns
3. Add exports to `/design-system/index.ts`
4. Add demo to appropriate demo page
5. Run `npm run typecheck`
6. Update status ⏳ → ✅

### After Each Category
1. Document notes above
2. Report: "Category X completed: Y/Z components done"
3. Ask: "Continue to next category?"

### Common Values
- Border radius: `3px`
- Gap (tight): `8px`
- Gap (action bar): `12px`
- Gap (cards): `16px`
- Transition: `0.2s ease`
- Primary purple: `#5a51e7`
- Secondary grey: `#e4e7f5`
- Text primary: `#3c3d40`

---

## 📊 Progress Tracking

**Total Components**: [Auto-count from list above]
**Completed**: 27 ✅ (24 previous + 3 Layout pages)
**In Progress**: 0 🚧
**Pending**: 0 ⏳
**Blocked**: 0 ❓

---

**Ready for implementation!** Please fill in the "TO IMPLEMENT" section with your prioritized Figma components.
