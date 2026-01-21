# Intercom In-App Messaging

## Overview

Intercom components provide in-app messaging for user education, announcements, and calls to action.

## Message Types

| Type | Purpose | GTM Category |
|:-----|:--------|:-------------|
| **Product Tour** | Interactive popovers for guided assistance and in-context education | Bronze, Silver, Gold, Platinum |
| **Tooltip** | Non-disruptive pulsating beacon with tooltip on click | Bronze |
| **Small Post** | Less timely announcements or feature releases | Silver, Gold |
| **Large Post** | Major feature releases or urgent communications | Gold, Platinum |
| **Banner** | Floating box for small actions or FYIs | - |

## Usage Guidelines

### Tooltip
- Provide non-disruptive education
- Make contextual announcements about minor UI changes

### Product Tour
- In-context education on key functionality
- Call attention to minor functional changes (when tooltip insufficient)
- Keep to **less than 5 steps** for optional engagement

### Banner
Use for:
- Referral offers
- Book demo for trial users
- Buy now for trial users
- Webinar or workshop registration

### Small Post
- Less timely announcements
- Feature releases requiring proactive communication but no immediate action

### Large Post
- Major feature releases
- Urgent communications (incident responses)

## Anatomy

### Product Tour
- Heading
- Description
- Dismiss tour button (optional)
- Step counter
- CTA (optional)
- Close button

### Tooltip
- Tooltip
- Pulsating beacon

### Post
- Sender profile
- Image (optional)
- H2 Subtitle (optional)
- H1 Heading
- Description
- CTA (optional)
- Open Intercom widget

### Banner
- Body text
- CTA
- Close

## Configuration Settings

### Product Tour Settings

| Setting | Value |
|:--------|:------|
| Show sender | No |
| Snooze tour | On |
| Restart tour | Off |
| Custom button text | Off |
| Scheduling (new users) | Evergreen |
| Scheduling (existing users) | Set appropriate end date |

### Tooltip Settings

| Setting | Value |
|:--------|:------|
| Frequency | Show until engaged |
| Icon | Beacon |
| Color | `#e64d10` |
| Animated beacon | Off |
| Show content on | Hover |
| Background colour | `#403e3d` |
| Text colour | `#faf7fa` |
| Scheduling | Stop 1-2 months after sent |

### Banner Settings

| Setting | Value |
|:--------|:------|
| Show sender | Yes |
| Show dismiss button | On |
| Placement | Floating |
| Position | Bottom |
| Color | `#15514d` |
| Scheduling | Stop 1-2 months after launch |

## Code Example

For precise placement, work with developers to create HTML attributes:

```html
<div data-intercom-target="your-element-name">...</div>
```

Use this `data-intercom-target` in Intercom settings for placement.

## Best Practices

### Do's
- Encourage users to interact with the app
- Keep product tours under 5 steps for optional engagement

### Don'ts
- Don't create overly long product tours
- Don't use tooltips for major feature announcements
