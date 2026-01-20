# Component Documentation

Complete documentation for all design system components.

## Table of Contents

### Detailed Documentation
- [Button](#button) - Primary action component
- [Alert](#alert) - Banner notifications
- [Toast](#toast) - Floating messages

### Quick Reference (20+ Components)
- [Form Inputs](#textinput--select--checkbox--radiobutton) - TextInput, Select, Checkbox, Radio
- [Overlays](#modal--drawer--tooltip) - Modal, Drawer, Tooltip
- [Data Display](#card--table--badge) - Card, Table, Badge
- [Navigation](#navigation-tabs--sidenav--pagination--menu) - Tabs, SideNav, Pagination, Menu
- [Additional Components](#additional-components) - Full list of 51 components

---

## Button

A flexible button component matching the Figma design system.

**Figma:** [Button Component](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=7049-4830)

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button text content |
| `hierarchy` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'primary'` | Visual hierarchy |
| `variant` | `'solid' \| 'ghost' \| 'text'` | `'solid'` | Visual style |
| `size` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Button size |
| `icon` | `'none' \| 'left' \| 'right' \| 'only'` | `'none'` | Icon position |
| `iconLeft` | `ReactNode` | - | Icon element for left position |
| `iconRight` | `ReactNode` | - | Icon element for right position |
| `iconOnly` | `ReactNode` | - | Icon element for icon-only button |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `(event) => void` | - | Click handler |
| `className` | `string` | - | Additional CSS classes |
| `aria-label` | `string` | - | Accessibility label |

### Examples

```tsx
import { Button } from './design-system';

// Primary button
<Button hierarchy="primary" variant="solid" size="large">
  Save Changes
</Button>

// With icon
<Button hierarchy="secondary" iconLeft={<CheckIcon />}>
  Confirm
</Button>

// Destructive action
<Button hierarchy="destructive" variant="solid">
  Delete Account
</Button>

// Icon only
<Button iconOnly={<PlusIcon />} aria-label="Add item" />
```

---

## Alert

A banner alert component for important messages and notifications.

**Figma:** [Alert Component](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8281-9335)

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Alert body text |
| `status` | `'info' \| 'success' \| 'warning' \| 'error' \| 'premium'` | `'info'` | Alert status type |
| `title` | `string` | - | Alert title/heading |
| `action` | `{ label: string, onClick: () => void }` | - | Optional action button |
| `closeable` | `boolean` | `false` | Show close button |
| `onClose` | `() => void` | - | Close button handler |
| `className` | `string` | - | Additional CSS classes |
| `icon` | `ReactNode` | - | Custom icon (overrides default) |

### Status Types

- **Info** - Blue background, informational messages
- **Success** - Green background, success messages
- **Warning** - Yellow background, warning messages
- **Error** - Red background, error messages
- **Premium** - Purple background, premium/upgrade messages

### Content Configurations

1. **Body only** - Just body text
2. **HeadingBody** - Title + body text
3. **HeadingBodyCTA** - Title + body + action button

### Examples

```tsx
import { Alert } from './design-system';

// Info alert with heading and body
<Alert status="info" title="Information" closeable onClose={() => {}}>
  This is an informational message.
</Alert>

// Success alert with CTA button
<Alert
  status="success"
  title="Success!"
  action={{ label: "View Details", onClick: () => {} }}
  closeable
>
  Your changes have been saved.
</Alert>

// Warning alert without close button
<Alert status="warning" title="Warning">
  Please review your settings.
</Alert>

// Error alert with body only
<Alert status="error" closeable>
  Something went wrong. Please try again.
</Alert>
```

### Accessibility

- Uses `role="alert"` for screen readers
- Close button has `aria-label="Close alert"`
- Keyboard navigable
- Focus visible states

---

## Toast

A floating notification component for temporary messages.

**Figma:** [Toast Component](https://www.figma.com/design/pFe8ykz2F9QdvabPsTGl1L/Spark-%7C-Components?node-id=8286-8759)

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Toast body text |
| `status` | `'info' \| 'success' \| 'warning' \| 'error' \| 'waiting' \| 'premium'` | `'info'` | Toast status type |
| `heading` | `string` | **required** | Toast heading/title |
| `link` | `{ label: string, onClick: () => void }` | - | Optional link/action |
| `onClose` | `() => void` | - | Close button handler |
| `className` | `string` | - | Additional CSS classes |
| `icon` | `ReactNode` | - | Custom icon (overrides default) |

### Status Types

- **Info** - Blue icon, informational notifications
- **Success** - Green icon, success notifications
- **Warning** - Yellow icon, warning notifications
- **Error** - Red icon, error notifications
- **Waiting** - Gray icon, loading/processing notifications
- **Premium** - Purple icon, premium/upgrade notifications

### Content Configurations

1. **Heading** - Just heading text
2. **HeadingBody** - Heading + body text
3. **HeadingLink** - Heading + link/action
4. **HeadingBodyLink** - Heading + body + link

### Examples

```tsx
import { Toast } from './design-system';

// Success toast with heading and body
<Toast status="success" heading="Success!" onClose={() => {}}>
  Your changes have been saved.
</Toast>

// Info toast with link
<Toast
  status="info"
  heading="New update available"
  link={{ label: "Learn more", onClick: () => {} }}
  onClose={() => {}}
>
  Version 2.0 is now available.
</Toast>

// Error toast (heading only)
<Toast status="error" heading="Upload failed" onClose={() => {}} />

// Waiting toast (loading state)
<Toast status="waiting" heading="Processing..." onClose={() => {}}>
  Please wait while we process your request.
</Toast>
```

### Auto-dismiss Pattern

```tsx
import { useState, useEffect } from 'react';
import { Toast } from './design-system';

function ToastExample() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div>
      <button onClick={handleShowToast}>Show Toast</button>

      {showToast && (
        <div style={{ position: 'fixed', top: 20, right: 20 }}>
          <Toast
            status="success"
            heading="Success!"
            onClose={() => setShowToast(false)}
          >
            Operation completed.
          </Toast>
        </div>
      )}
    </div>
  );
}
```

### Toast Container Pattern

```tsx
// Position toasts in a fixed container
<div style={{
  position: 'fixed',
  top: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  zIndex: 9999,
}}>
  {toasts.map((toast) => (
    <Toast
      key={toast.id}
      status={toast.status}
      heading={toast.heading}
      onClose={() => removeToast(toast.id)}
    >
      {toast.body}
    </Toast>
  ))}
</div>
```

### Accessibility

- Uses `role="status"` and `aria-live="polite"` for screen readers
- Close button has `aria-label="Close notification"`
- Keyboard navigable
- Focus visible states
- Elevated shadow for clear visual separation

---

## Design Tokens Used

All components use centralized design tokens:

### Colors

- **Status Colors:** Info (blue), Success (green), Warning (yellow), Error (red), Premium (purple)
- **Text Colors:** Primary (#3C3D40), Secondary (#7B7D85), Muted (#9B9DA8)
- **Background Colors:** White, status-specific backgrounds

### Typography

- **Heading:** 16px, medium weight (500)
- **Body:** 14px, regular weight (400)
- **Paragraph:** 13px, regular weight (400)

### Spacing

- **Component padding:** 8px, 16px
- **Gap between elements:** 8px, 12px
- **Icon size:** 24px circle with 16px icon

### Shadows

- **Toast shadow:** Elevated with subtle shadow for depth

### Border Radius

- **Components:** 3-4px
- **Icons:** 100px (circular)

---

## Best Practices

### Alert Component

1. **Use appropriate status** - Match the message severity
2. **Keep titles concise** - 1-3 words is ideal
3. **Body text clarity** - Be specific about the issue or information
4. **Action buttons** - Use for primary actions only
5. **Dismissibility** - Make alerts closeable unless critical
6. **Placement** - Usually at top of page or section

### Toast Component

1. **Auto-dismiss** - Set timeout of 3-5 seconds
2. **One at a time** - Stack vertically, limit to 3-4 simultaneous
3. **Position** - Top-right or bottom-right corner
4. **Brief messages** - Toasts are temporary, keep text short
5. **Success feedback** - Great for confirming user actions
6. **Avoid critical info** - Use alerts for important persistent messages

### When to Use Alert vs Toast

**Use Alert when:**
- Message is important and persistent
- User needs to take action
- Context is page/section-specific
- Information shouldn't disappear

**Use Toast when:**
- Confirming user actions
- Temporary status updates
- Non-critical notifications
- Background process completion

---

## Component Comparison

| Feature | Button | Alert | Toast |
|---------|--------|-------|-------|
| **Purpose** | User action | Important message | Temporary notification |
| **Persistence** | Always visible | Persistent (dismissible) | Temporary (auto-dismiss) |
| **Position** | Inline | Block-level banner | Fixed floating |
| **Interaction** | Click to trigger | Read/dismiss/action | Read/dismiss |
| **Status Types** | 4 hierarchies | 5 status types | 6 status types |
| **Use Case** | Forms, CTAs | Warnings, info | Confirmations, updates |

---


---

## TextInput | Select | Checkbox | RadioButton

### TextInput
```tsx
<TextInput label="Email" type="email" placeholder="you@example.com" required caption="Helper text" />
```

### Select
```tsx
<Select label="Country" options={[{value: 'us', label: 'US'}]} value={country} onChange={setCountry} />
```

### Checkbox
```tsx
<Checkbox label="Accept terms" checked={accepted} onChange={setAccepted} />
```

### RadioButton
```tsx
<RadioButton label="Option 1" value="1" checked={selected==='1'} onChange={() => setSelected('1')} />
```

---

## Modal | Drawer | Tooltip

### Modal
```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
  <p>Modal content</p>
</Modal>
```

### Drawer
```tsx
<Drawer isOpen={isOpen} onClose={handleClose} title="Settings" position="right">
  <p>Drawer content</p>
</Drawer>
```

### Tooltip
```tsx
<Tooltip content="Helpful info"><Button>Hover me</Button></Tooltip>
```

---

## Card | Table | Badge

### Card
```tsx
<Card title="Title" description="Description" badge={<Badge variant="green">Active</Badge>}>
  Card content
</Card>
```

### Table
```tsx
<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status', render: (row) => <Badge>{row.status}</Badge> }
  ]}
  data={rows}
/>
```

### Badge
```tsx
<Badge variant="green">Active</Badge>
<Badge variant="red">Error</Badge>
```

---

## Navigation: Tabs | SideNav | Pagination | Menu

### Tabs
```tsx
<Tabs tabs={[{id: 'tab1', label: 'Tab 1'}]} activeTab={active} onChange={setActive} />
```

### SideNav
```tsx
<SideNav items={[{id: 'home', label: 'Home', icon: <HomeIcon />, active: true}]} />
```

### Pagination
```tsx
<Pagination currentPage={1} totalPages={10} onPageChange={setPage} />
```

### Menu
```tsx
<Menu options={[{value: 'edit', label: 'Edit'}]} onSelect={handleSelect} />
```

---

## TextArea

Multi-line text input component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `value` | `string` | - | Controlled value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `placeholder` | `string` | - | Placeholder text |
| `required` | `boolean` | `false` | Required field indicator |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `string` | - | Error message |
| `caption` | `string` | - | Helper text below input |
| `rows` | `number` | `4` | Number of visible rows |

### Example

```tsx
<TextArea
  label="Description"
  value={description}
  onChange={setDescription}
  placeholder="Enter a detailed description..."
  rows={6}
  caption="Maximum 500 characters"
  required
/>
```

---

## PasswordInput

Password input with show/hide toggle.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `value` | `string` | - | Controlled value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `placeholder` | `string` | - | Placeholder text |
| `required` | `boolean` | `false` | Required field indicator |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `string` | - | Error message |
| `caption` | `string` | - | Helper text |

### Example

```tsx
<PasswordInput
  label="Password"
  value={password}
  onChange={setPassword}
  placeholder="Enter secure password"
  caption="Must be at least 8 characters"
  required
/>
```

---

## Switch

Toggle switch for binary choices.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Checked state |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `label` | `string` | - | Label text |
| `disabled` | `boolean` | `false` | Disabled state |

### Example

```tsx
<Switch
  label="Enable notifications"
  checked={notificationsEnabled}
  onChange={setNotificationsEnabled}
/>
```

---

## CheckboxCard

Checkbox styled as a selectable card.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Checked state |
| `onChange` | `(checked: boolean) => void` | - | Change handler |
| `title` | `string` | **required** | Card title |
| `description` | `string` | - | Card description |
| `icon` | `ReactNode` | - | Card icon |
| `disabled` | `boolean` | `false` | Disabled state |

### Example

```tsx
<CheckboxCard
  title="Pro Plan"
  description="All features included"
  icon={<StarIcon />}
  checked={selectedPlan === 'pro'}
  onChange={(checked) => checked && setSelectedPlan('pro')}
/>
```

---

## DatePicker

Calendar-based date selection.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Input label text |
| `value` | `Date \| null` | `null` | Selected date |
| `onChange` | `(date: Date \| null) => void` | - | Change handler |
| `placeholder` | `string` | `'Select date'` | Placeholder text |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `string` | - | Error message |
| `minDate` | `Date` | - | Minimum selectable date |
| `maxDate` | `Date` | - | Maximum selectable date |

### Example

```tsx
<DatePicker
  label="Start Date"
  value={startDate}
  onChange={setStartDate}
  minDate={new Date()}
  placeholder="Select a date"
/>
```

---

## ComboButton

Button with dropdown menu.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Primary button text |
| `menuOptions` | `MenuOption[]` | **required** | Dropdown options |
| `onMenuSelect` | `(value: string) => void` | - | Menu selection handler |
| `hierarchy` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual hierarchy |
| `disabled` | `boolean` | `false` | Disabled state |

### Example

```tsx
<ComboButton
  hierarchy="primary"
  menuOptions={[
    { value: 'save', label: 'Save as Draft' },
    { value: 'template', label: 'Save as Template' }
  ]}
  onMenuSelect={(value) => console.log(value)}
>
  Save
</ComboButton>
```

---

## MenuButton

Button that opens a menu.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Button content |
| `menuOptions` | `MenuOption[]` | **required** | Menu options |
| `onSelect` | `(value: string) => void` | - | Selection handler |
| `icon` | `ReactNode` | - | Button icon |

### Example

```tsx
<MenuButton
  menuOptions={[
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete' }
  ]}
  onSelect={handleAction}
>
  Actions
</MenuButton>
```

---

## Accordion

Expandable content sections.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Section title |
| `children` | `ReactNode` | - | Content to expand/collapse |
| `defaultOpen` | `boolean` | `false` | Initially open |
| `icon` | `ReactNode` | - | Custom icon |

### Example

```tsx
<Accordion title="Advanced Settings" defaultOpen>
  <p>Additional configuration options...</p>
</Accordion>
```

---

## CopyField

Text field with copy-to-clipboard button.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Field label |
| `value` | `string` | **required** | Text to copy |
| `onCopy` | `() => void` | - | Callback after copy |

### Example

```tsx
<CopyField
  label="API Key"
  value="sk_test_abc123xyz"
  onCopy={() => showToast('Copied!')}
/>
```

---

## Avatar

User profile image or initials.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | - | Alt text |
| `name` | `string` | - | Name for initials |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Avatar size |
| `shape` | `'circle' \| 'square'` | `'circle'` | Avatar shape |

### Example

```tsx
<Avatar src="/user.jpg" alt="John Doe" size="large" />
<Avatar name="John Doe" /> {/* Shows "JD" */}
```

---

## DataList

Key-value pairs in a structured list.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{label: string, value: ReactNode}>` | **required** | Data items |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction |

### Example

```tsx
<DataList
  items={[
    { label: 'Status', value: <Badge variant="green">Active</Badge> },
    { label: 'Created', value: '2024-01-15' },
    { label: 'Owner', value: 'John Doe' }
  ]}
/>
```

---

## ProgressBar

Linear progress indicator.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | **required** | Progress value (0-100) |
| `max` | `number` | `100` | Maximum value |
| `label` | `string` | - | Progress label |
| `showPercentage` | `boolean` | `true` | Show percentage text |
| `variant` | `'blue' \| 'green' \| 'red'` | `'blue'` | Color variant |

### Example

```tsx
<ProgressBar
  value={75}
  label="Upload progress"
  variant="blue"
  showPercentage
/>
```

---

## ProgressStatus

Multi-step progress indicator.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Array<{label: string, status: 'complete' \| 'current' \| 'pending'}>` | **required** | Progress steps |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation |

### Example

```tsx
<ProgressStatus
  steps={[
    { label: 'Details', status: 'complete' },
    { label: 'Payment', status: 'current' },
    { label: 'Confirm', status: 'pending' }
  ]}
/>
```

---

## Skeleton

Loading placeholder.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string \| number` | `'100%'` | Skeleton width |
| `height` | `string \| number` | `'20px'` | Skeleton height |
| `variant` | `'text' \| 'circular' \| 'rectangular'` | `'text'` | Shape variant |
| `count` | `number` | `1` | Number of skeletons |

### Example

```tsx
<Skeleton width="100%" height="40px" count={3} />
<Skeleton variant="circular" width="60px" height="60px" />
```

---

## Divider

Visual separator line.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider orientation |
| `spacing` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Margin spacing |

### Example

```tsx
<Divider orientation="horizontal" spacing="large" />
```

---

## Link

Styled hyperlink component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | **required** | Link URL |
| `children` | `ReactNode` | - | Link text |
| `external` | `boolean` | `false` | Opens in new tab |
| `disabled` | `boolean` | `false` | Disabled state |

### Example

```tsx
<Link href="/help" external>View documentation</Link>
```

---

## EmptyState

Placeholder for empty data states.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Empty state title |
| `description` | `string` | - | Description text |
| `icon` | `ReactNode` | - | Empty state icon |
| `action` | `ReactNode` | - | Call-to-action button |

### Example

```tsx
<EmptyState
  title="No projects yet"
  description="Get started by creating your first project"
  icon={<FolderIcon />}
  action={<Button onClick={createProject}>Create Project</Button>}
/>
```

---

## AppCard

Application/integration card.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | App name |
| `description` | `string` | - | App description |
| `icon` | `ReactNode` | - | App icon |
| `installed` | `boolean` | `false` | Installation status |
| `onInstall` | `() => void` | - | Install handler |
| `onConfigure` | `() => void` | - | Configure handler |

### Example

```tsx
<AppCard
  title="Slack"
  description="Get notifications in Slack"
  icon={<SlackIcon />}
  installed={false}
  onInstall={handleInstall}
/>
```

---

## CardContainer

Grid container for cards.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card components |
| `columns` | `number` | `3` | Number of columns |
| `gap` | `string` | `'16px'` | Gap between cards |

### Example

```tsx
<CardContainer columns={3}>
  <Card title="Card 1" />
  <Card title="Card 2" />
  <Card title="Card 3" />
</CardContainer>
```

---

## Notification

Banner notification component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Notification title |
| `message` | `string` | - | Message content |
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status type |
| `onClose` | `() => void` | - | Close handler |
| `action` | `{label: string, onClick: () => void}` | - | Action button |

### Example

```tsx
<Notification
  title="System Update"
  message="New features available"
  status="info"
  onClose={handleClose}
  action={{ label: 'Learn More', onClick: viewDetails }}
/>
```

---

## Spinner

Loading spinner indicator.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Spinner size |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Color variant |
| `label` | `string` | - | Accessible label |

### Example

```tsx
<Spinner size="large" label="Loading content..." />
```

---

## Popover

Floating content container.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Trigger element |
| `content` | `ReactNode` | **required** | Popover content |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Position relative to trigger |
| `isOpen` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open state handler |

### Example

```tsx
<Popover content={<div>Popover content here</div>} position="top">
  <Button>Show Popover</Button>
</Popover>
```

---

## Banner

Full-width banner message.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Banner content |
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status type |
| `dismissible` | `boolean` | `false` | Show close button |
| `onDismiss` | `() => void` | - | Dismiss handler |

### Example

```tsx
<Banner status="warning" dismissible onDismiss={handleDismiss}>
  Scheduled maintenance on Saturday 3am-5am EST
</Banner>
```

---

## Overlayer

Modal backdrop overlay.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | **required** | Visibility state |
| `onClose` | `() => void` | - | Close handler |
| `opacity` | `number` | `0.5` | Backdrop opacity |

### Example

```tsx
<Overlayer isOpen={modalOpen} onClose={() => setModalOpen(false)} />
```

---

## Filter

Filtering controls component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filters` | `Array<{id: string, label: string, value: any}>` | **required** | Filter options |
| `onFilterChange` | `(filterId: string, value: any) => void` | - | Change handler |
| `onClear` | `() => void` | - | Clear all handler |

### Example

```tsx
<Filter
  filters={[
    { id: 'status', label: 'Status', value: 'active' },
    { id: 'date', label: 'Date', value: null }
  ]}
  onFilterChange={handleFilterChange}
  onClear={clearFilters}
/>
```

---

## Signature

Signature pad component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | - | Signature data URL |
| `onChange` | `(signature: string) => void` | - | Change handler |
| `onClear` | `() => void` | - | Clear handler |
| `disabled` | `boolean` | `false` | Disabled state |

### Example

```tsx
<Signature
  value={signature}
  onChange={setSignature}
  onClear={clearSignature}
/>
```

---

## ActionBar

Sticky action bar with buttons.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Action buttons |
| `position` | `'top' \| 'bottom'` | `'bottom'` | Bar position |
| `sticky` | `boolean` | `true` | Sticky positioning |

### Example

```tsx
<ActionBar position="bottom">
  <Button onClick={cancel}>Cancel</Button>
  <Button hierarchy="primary" onClick={save}>Save Changes</Button>
</ActionBar>
```

---

## SupportArticleLink

Link to help documentation.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `articleId` | `string` | **required** | Help article ID |
| `title` | `string` | - | Link text |
| `external` | `boolean` | `true` | Opens in new tab |

### Example

```tsx
<SupportArticleLink articleId="getting-started" title="Learn more" />
```

---

## Illustration

SVG illustration component.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | Illustration name |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Illustration size |
| `alt` | `string` | - | Alt text |

### Example

```tsx
<Illustration name="empty-folder" size="large" alt="No files" />
```

---

## TemplateLayout

Page layout wrapper for templates.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Page content |
| `sidebar` | `ReactNode` | - | Sidebar content |
| `header` | `ReactNode` | - | Header content |
| `maxWidth` | `string` | `'1200px'` | Content max width |

### Example

```tsx
<TemplateLayout
  header={<PageHeader title="Dashboard" />}
  sidebar={<SideNav items={navItems} />}
>
  <div>Main content here</div>
</TemplateLayout>
```

---

## PageHeader

Page title and actions header.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **required** | Page title |
| `subtitle` | `string` | - | Page subtitle |
| `breadcrumbs` | `Array<{label: string, href?: string}>` | - | Breadcrumb items |
| `actions` | `ReactNode` | - | Header action buttons |
| `tabs` | `ReactNode` | - | Tab navigation |

### Example

```tsx
<PageHeader
  title="Projects"
  subtitle="Manage your projects"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Projects' }
  ]}
  actions={<Button onClick={createProject}>New Project</Button>}
/>
```

---

## TableHeader

Table with filters and search.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Table title |
| `searchPlaceholder` | `string` | `'Search...'` | Search placeholder |
| `onSearch` | `(query: string) => void` | - | Search handler |
| `filters` | `ReactNode` | - | Filter components |
| `actions` | `ReactNode` | - | Action buttons |

### Example

```tsx
<TableHeader
  title="Users"
  searchPlaceholder="Search users..."
  onSearch={handleSearch}
  actions={<Button onClick={addUser}>Add User</Button>}
/>
```

---

## FieldSet

Group related form fields.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `legend` | `string` | **required** | Fieldset legend/title |
| `children` | `ReactNode` | - | Form fields |
| `description` | `string` | - | Description text |

### Example

```tsx
<FieldSet legend="Personal Information" description="Your basic details">
  <TextInput label="First Name" value={firstName} onChange={setFirstName} />
  <TextInput label="Last Name" value={lastName} onChange={setLastName} />
</FieldSet>
```

---

**For complete TypeScript interfaces and prop types, see component files in [design-system/components/](design-system/components/)**

**Last Updated:** 2024-11-04
**Version:** 1.0.0
**Components:** 53 total, all documented above

