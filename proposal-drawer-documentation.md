# Ignition Proposal Drawer - Comprehensive Documentation

## Overview
The proposal drawer is a side panel/detail view that appears when clicking on a proposal row in the Ignition app. It provides a comprehensive view of proposal details, actions, and management capabilities.

---

## Drawer Structure

### Layout
- **Position**: Right-side panel/drawer (appears to overlay or push content)
- **Width**: Approximately 40-50% of viewport (estimated from screenshots)
- **Background**: White/light gray
- **Shadow**: Drop shadow to separate from main content

---

## Header Section

### Components:
1. **Client Name** - Large, prominent text (e.g., "John Cena")
2. **Client Email** - Smaller, secondary text below name (e.g., "john@youcantseeme.com")
3. **Proposal Title** - Below client info (e.g., "Accounting, Payroll, ITR")
4. **Status Badge** - Colored pill badge showing proposal state:
   - "Awaiting" (blue/purple background)
   - "Draft" (yellow/cream background)
   - "Active" (green background)
   - "Default" (green badge for accepted/active status)
   - "Inactive" (gray for completed proposals)

5. **Action Buttons**:
   - **"More actions" dropdown button** (gray, left side)
   - **Primary action button** (right side):
     - "Revoke & edit" (blue) for Awaiting proposals
     - "Edit" (red/orange) for Draft proposals
     - "Review and send" (checkmark + text) for Draft proposals

### Client Proposal View Section:
- **Label**: "Client proposal view - [Client Name]"
- **Copy Button**: Icon button with "Copy" label
- **URL Display**: Shows demo.ignitionapp.cc or similar
- **Client view Link**: Blue link to open client-facing proposal view

---

## Navigation Tabs

Located below the header, horizontal tab navigation:

### Tab Options:
1. **Details** (default selected)
2. **Introduction**
3. **Services**
4. **Pricing**
5. **Terms**

**Visual Style**:
- Selected tab: Blue underline, active state
- Unselected tabs: Gray text, no underline
- Clean, minimal design

---

## Content Area (Details Tab)

### Information Panel:
Displays key proposal metadata in a two-column layout:

**Left Column Labels** | **Right Column Values**
--------------------|--------------------
Review Status | [Status text or checkmark]
Assigned | Unassigned / [User name]
Client | Active 2001 / [Client name]
Start | On Acceptance / [Date]
Contract length | 12 months / [Duration]
Minimum value | $0.00 / [Amount]
Created | Friday, 7 June 2024 11:45 AM
Modified | Friday, 7 June 2024 11:46 AM

### Additional Sections:
- **Payments** section with expandable indicator (green circle with star/arrow)
- **Info banner** (blue background): "Proposal awaiting acceptance by John Cena"

---

## Footer Actions

### Primary Button:
- **"Review and send"** (checkmark icon + text)
- Positioned at bottom or top right of drawer
- Blue/primary color
- Full-width or right-aligned depending on state

---

## Proposal States & Variations

### 1. Draft Status
**Visual Indicators**:
- Yellow/cream "Draft" badge
- "Review and send" button enabled
- "More actions" menu available

**Available Actions** (More actions dropdown):
- Request review
- Accept on client's behalf
- Duplicate
- Mark as lost
- Save as template
- Delete

---

### 2. Awaiting Acceptance Status
**Visual Indicators**:
- Blue/purple "Awaiting" badge
- Info banner: "Proposal awaiting acceptance by [Client Name]"
- Client proposal view URL visible
- "Revoke & edit" button

**Available Actions** (More actions dropdown):
- Request review
- Accept on client's behalf
- Re-send the proposal
- Mark as lost
- Duplicate
- Revoke (move back to Draft)

**Special Features**:
- **Send dropdown** options:
  - Send via email
  - Share via link
  - Accept on client's behalf
  - Move to awaiting

---

### 3. Accepted Status
**Visual Indicators**:
- Green "Default" badge (or no status badge, shows as active)
- Activity log updated with acceptance details
- Shows who signed, time & location of acceptance

**Features**:
- Proposal becomes read-only
- Can view services and billing details
- Cannot edit directly (must edit active services instead)

---

### 4. Completed Status
**Visual Indicators**:
- "Inactive" label or similar
- Automatically applied when no active services remain

**Behavior**:
- All services from proposal have ended
- Can view but not modify
- Historical record maintained

---

### 5. Lost Status
**Visual Indicators**:
- Lost status designation
- Can be manually applied

**Available Actions**:
- Resend proposal (moves back to Awaiting Acceptance)
- Delete
- Duplicate

---

## Modal Dialogs

### "Accept on Client's Behalf" Modal

**Structure**:
- **Title**: "Accept on client's behalf"
- **Close button**: X icon in top-right

**Content**:
1. **Warning message**:
   "Make sure you have your client's permission to accept this proposal for them, as they won't be notified. Billings will be created for this client as detailed in the proposal."

2. **Reason field** (Required):
   - Label: "Reason *"
   - Text input field
   - Placeholder/example: "Paper contract already signed in office"

3. **Payment details section**:
   - Instructions: "If the client has confirmed they will make payment, select or enter payment details below."
   - Saved payment methods displayed (if available)
   - Example: Radio button with VISA •••• 4242 12/34, "TEST", "In Use" badge

4. **Action buttons**:
   - Cancel (secondary, left)
   - Accept (primary, right)

**Visual Style**:
- Modal overlay with backdrop
- Centered on screen
- White background
- Standard form styling

---

## List View Context

### Proposals Table/List
The drawer opens from clicking a row in the proposals list, which shows:

**Columns**:
- Checkbox (for bulk selection)
- Client name
- Proposal name (with ID)
- Start date
- End date
- Created date
- Activity status
- Value/Amount
- Actions menu (three dots)

**Filters Available**:
- All
- Draft
- Awaiting acceptance
- Lost
- Accepted
- Pricing error
- Completed

**Bulk Actions**:
- Send (bulk send proposals)
- Refine
- Adjust pricing
- More actions dropdown

---

## Interactions & Behaviors

### Opening the Drawer:
- Click on any proposal row in the table
- Drawer slides in from right side
- Previous content dims or shifts left

### Closing the Drawer:
- Click outside drawer (on backdrop)
- Press ESC key (assumed)
- Click close button (if present)
- Navigate to different section

### Status Changes:
- Moving from Draft → Awaiting: "Move to awaiting" option in send dropdown
- Awaiting → Draft: "Revoke" action
- Awaiting → Accepted: "Accept on client's behalf"
- Any → Lost: "Mark as lost" action

### Copy Functionality:
- Copy button next to proposal URL
- Copies client-facing link to clipboard
- Visual feedback (assumed)

---

## Design Tokens & Styling

### Colors (Approximate):
- **Primary Blue**: #4F46E5 or similar (buttons, links, selected tabs)
- **Success Green**: #10B981 or similar (Default/Active badge)
- **Warning Yellow**: #F59E0B or similar (Draft badge)
- **Info Blue**: #3B82F6 or similar (Awaiting badge, info banners)
- **Danger Red**: #EF4444 or similar (Delete, critical actions)
- **Gray Scale**:
  - Background: #F9FAFB
  - Borders: #E5E7EB
  - Text secondary: #6B7280
  - Text primary: #111827

### Typography:
- **Client Name**: ~20-24px, bold
- **Section Headers**: ~16-18px, semi-bold
- **Body Text**: ~14-16px, regular
- **Labels**: ~12-14px, medium, often gray
- **Status Badges**: ~12-14px, medium, all caps or title case

### Spacing:
- **Section padding**: 16-24px
- **Tab spacing**: 12-16px horizontal padding
- **Field spacing**: 8-12px vertical margin
- **Modal padding**: 24-32px

### Borders & Shadows:
- **Drawer shadow**: 0 10px 25px rgba(0, 0, 0, 0.1)
- **Border radius**: 4-8px for buttons, badges
- **Input borders**: 1px solid #E5E7EB
- **Dividers**: 1px solid #E5E7EB

---

## Accessibility Considerations

### Keyboard Navigation:
- Tab through interactive elements
- ESC to close drawer/modals
- Enter to submit forms/click buttons
- Arrow keys for dropdown navigation

### Screen Reader Support:
- Status badges should have aria-labels
- Action buttons have descriptive labels
- Form fields have associated labels
- Modal dialogs trap focus
- Proper heading hierarchy

### Focus States:
- Visible focus indicators on all interactive elements
- Focus returns to trigger element when drawer closes
- Focus trapped in modal dialogs

---

## Responsive Behavior

### Desktop (>1024px):
- Drawer appears as side panel
- ~40-50% viewport width
- Smooth slide-in animation

### Tablet (768-1024px):
- Drawer takes ~60-70% width
- May overlay more content
- Same functionality

### Mobile (<768px):
- Drawer becomes full-screen modal
- Slide up from bottom or right
- Back button in header to close

---

## Technical Implementation Notes

### Component Hierarchy:
```
ProposalDrawer
├── DrawerHeader
│   ├── ClientInfo
│   ├── ProposalTitle
│   ├── StatusBadge
│   └── ActionButtons
├── ProposalViewLink
├── TabNavigation
├── DrawerContent
│   ├── DetailsPanel (default)
│   ├── IntroductionPanel
│   ├── ServicesPanel
│   ├── PricingPanel
│   └── TermsPanel
└── DrawerFooter (optional)
    └── PrimaryAction
```

### State Management:
- Proposal ID
- Current tab
- Proposal status
- Loading states
- Error states
- Modal open/closed states

### Data Requirements:
- Proposal details
- Client information
- Status history
- Action permissions
- User permissions
- Payment methods (if applicable)

---

## Related Components

### Components Used Within Drawer:
- Badge component (status indicators)
- Button component (actions)
- Dropdown menu
- Tabs component
- Form inputs
- Modal dialogs
- Info banners/alerts
- Copy button
- Avatar/client icon

### Parent/Container Components:
- Proposals list/table
- Client detail view
- Dashboard

---

## User Workflows

### Common Tasks:

1. **Review and Send Draft Proposal**:
   - Open draft proposal
   - Review details in tabs
   - Click "Review and send"
   - Confirm and send

2. **Accept Proposal on Behalf of Client**:
   - Open awaiting proposal
   - Click "More actions" → "Accept on client's behalf"
   - Enter reason
   - Select/enter payment details
   - Confirm acceptance

3. **Mark Proposal as Lost**:
   - Open proposal
   - Click "More actions" → "Mark as lost"
   - Confirm action

4. **Copy Proposal Link**:
   - Open awaiting/active proposal
   - Click "Copy" button next to URL
   - Share link with client manually

---

## Edge Cases & Error States

### Error Scenarios:
- Proposal deleted while drawer open
- Permission changes mid-session
- Network errors when loading data
- Concurrent edits by multiple users
- Payment method validation failures

### Validation:
- Required fields in modals
- Date range validation
- Amount validation
- Status transition rules

---

## Screenshots Reference

All screenshots are located in `.playwright-mcp/` directory:
- `02-proposal-statuses-article.png` - Status overview
- `03-proposal-statuses-draft-screenshot.png` - Draft status in list
- `04-proposal-statuses-awaiting-detail.png` - Awaiting detail view
- `05-proposal-statuses-accepted.png` - Accepted status
- `06-proposal-statuses-lost.png` - Lost status
- `07-proposal-statuses-lost-screenshot.png` - Lost status in list
- `08-how-to-manage-proposals.png` - Management overview
- `09-manage-proposals-sending.png` - Send proposal interface
- `10-manage-proposals-bulk-send.png` - Details panel with tabs
- `11-manage-proposals-move-to-awaiting.png` - Send dropdown menu
- `12-manage-proposals-accept-on-behalf.png` - Full drawer view with menu
- `13-manage-proposals-accept-modal.png` - Accept on behalf modal

---

## Next Steps for Implementation

1. **Create base Drawer component** with slide-in animation
2. **Build Header section** with client info and status badge
3. **Implement Tab navigation** component
4. **Create Details panel** with metadata display
5. **Build action menus** and dropdowns
6. **Implement modals** for actions (Accept, Delete, etc.)
7. **Add status-specific logic** for different proposal states
8. **Implement copy functionality** for proposal URL
9. **Add responsive behaviors** for different screen sizes
10. **Test accessibility** features and keyboard navigation

---

## Questions for Design Team

1. Exact drawer width at different breakpoints?
2. Animation timing and easing preferences?
3. What happens when proposal is updated while drawer is open?
4. Should drawer auto-close after certain actions?
5. Maximum content height before scrolling?
6. Mobile drawer behavior - full screen or partial?
7. Can users open multiple drawers/proposals at once?
8. Offline behavior and state management?
