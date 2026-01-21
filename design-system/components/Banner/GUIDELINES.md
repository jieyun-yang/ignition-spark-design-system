# Banner Guidelines

## Overview

The Banner component is a prominent, non-modal message display area used to communicate important, system-level, or contextual information to users. It appears at the top of a page, within a specific section, or can be sticky to remain visible while scrolling.

Banners are designed to be noticeable without completely interrupting the user's workflow.

## When to Use

Use Banners for:
- **System-wide announcements:** Maintenance, new features, or critical updates
- **Success messages:** Confirm action completion (e.g., "Settings saved successfully!")
- **Warning messages:** Alert to potential issues (e.g., "Your session will expire soon.")
- **Error messages:** Non-blocking errors requiring attention
- **Informational messages:** Context or helpful tips for the current view
- **Promotional/Discovery content:** Highlight new features or offers subtly

## When NOT to Use

- **Minor, ephemeral feedback** - Use Toast instead
- **Blocking user interaction** - Use Modal or Alert instead
- **Displaying complex or extensive information**
- **Multiple banners simultaneously** - Avoid information overload

## Anatomy

1. **Container:** Main wrapper with background color based on type
2. **Icon (Optional):** Visual cue for message type
3. **Message Text:** Primary content, concise and clear
4. **Call to Action (Optional):** Link or button for immediate action
5. **Dismiss Button (Optional):** 'X' icon to close the banner

## Variants

| Variant | Purpose | Color | Icon |
|:--------|:--------|:------|:-----|
| **Info** | General information, updates, tips | Blue or neutral gray | `info-circle` |
| **Success** | Confirm successful completion | Green | `check-circle` |
| **Warning** | Alert to potential issues | Yellow or orange | `exclamation-triangle` |
| **Error** | Critical but non-blocking errors | Red | `times-circle` |
| **Neutral** | Less urgent, descriptive information | Light gray | Optional |

## Placement

- **Top of the page:** For system-wide messages
- **Within a specific section:** For contextual messages related to that area

## Best Practices

### Do's

- Keep messages concise and clear - get straight to the point
- Provide clear calls to action when action is required
- Use appropriate variant type matching urgency and sentiment
- Ensure high contrast for text readability
- Make critical banners persistent (remove dismiss button)
- Implement ARIA live regions for screen reader announcements

### Don'ts

- Don't overuse banners - too many diminishes impact
- Don't use for minor, transient feedback (use Toast)
- Don't put complex forms or extensive content in banners
- Don't rely solely on color to convey meaning - pair with icon and clear message
- Don't use banners to block user interaction (use Modal instead)
- Don't show multiple banners simultaneously

## Accessibility

- **ARIA Live Regions:**
  - For `info` and `success`: `role="status"` and `aria-live="polite"`
  - For `warning` and `error`: `role="alert"` and `aria-live="assertive"`
- All interactive elements must be keyboard-focusable and activatable
- Ensure WCAG 2.1 AA color contrast requirements
- Use semantic HTML elements (`button` for dismiss, `a` for links)
- Provide `aria-label` for icons without accompanying text

---

## Global Banner Pattern

The global banner communicates critical messages relevant across multiple pages.

**Important:** Avoid using global banners that block interactive UI elements. Position carefully to not cover interface elements.

### Global Banner Categories

| Category | Description | Example |
|:---------|:------------|:--------|
| **Critical messaging** | Issues requiring immediate resolution | Billing issues that prevent app usage |
| **Non-critical messaging** | Important but not urgent messages | Preview mode notifications |

### Global Banner Variants

| Variant | Purpose |
|:--------|:--------|
| Success | Feedback that an action was completed successfully |
| Info | Important information or helpful tips |
| Warning | Information that may affect user experience |
| Error | Critical information affecting user experience |

### Global Banner Sizing

- Occupy the entire width of the page
- Display at the top of the page
- Fixed position when scrolling

### Global Banner Best Practices

**Do:**
- Position to not cover interactive UI elements
- Remove banner when the issue it addresses is resolved

**Don't:**
- Block interactive UI elements
- Use without ensuring it functions without blocking UI

---

## Intro Banner Pattern

The Intro banner provides essential context or announcements at the top of a page, typically for onboarding or highlighting new features.

### When to Use Intro Banner

- Provide context about a page for onboarding new users
- Raise awareness and encourage engagement with new features

### Intro Banner Anatomy

- **Background:** Visual backdrop
- **Illustration:** Graphic element representing the message
- **Title:** Concise heading
- **Paragraph content:** Detailed explanatory text
- **Close Action bar:** Element to dismiss the banner

### Intro Banner Sizing

| Property | Value |
|:---------|:------|
| Width | 25% |
| minWidth | 350px |
| maxWidth | 400px |
| maxHeight | 140px |

### Intro Banner Positioning

- Position at top of page, directly beneath main page title bar
- If message relates to content within a specific tab, position beneath that tab

### Intro Banner Variants

**Subscription Banner:**
- Larger than standard
- Includes space for displaying 3 benefits
- Replaces tertiary button with static "Have a question?" text
- Includes "Chat with us now" link opening Intercom

### Intro Banner Best Practices

**Do:**
- Use to onboard new users to a page, especially when demo data is displayed

**Don't:**
- Show Intro banner and empty state on the same page - integrate content into empty state instead
- Show Intro banner and contextual modal simultaneously - prevents information overload
