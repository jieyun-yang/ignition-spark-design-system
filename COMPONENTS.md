# Component Documentation

Complete documentation for all design system components.

## Table of Contents

- [Button](#button)
- [Alert](#alert)
- [Toast](#toast)

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

## Future Components

Suggested next components to build:

1. **Input/TextField** - Form input fields
2. **Checkbox** - Checkbox input
3. **Radio** - Radio button input
4. **Select** - Dropdown select
5. **Badge** - Small status indicator
6. **Modal** - Dialog/modal overlay
7. **Card** - Content container
8. **Tabs** - Tab navigation

---

**Last Updated:** 2025-10-30
**Version:** 0.1.0
