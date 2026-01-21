# Feature Gating

## Overview

Feature gating indicates that certain UI components or features are locked and require an upgrade or specific plan to access. When users interact with a "locked" component, a benefits modal appears with information on how to unlock.

## Anatomy

### Locked UI Element
- Marked with a lock icon
- Provides tooltip on hover

### Benefits Modal

#### For Admin Users
- Hero image
- Heading
- Body copy
- Plan inclusions (feature list)
- Action buttons (Upgrade, Skip)

#### For Member Users
- Hero image
- Heading  
- Body copy
- Plan inclusions
- Alert ("Speak to your admin")
- Action buttons (Upgrade disabled, Dismiss)

## Lock Icon Placement

| UI Component | Position | Spacing | Color | Size |
|:-------------|:---------|:--------|:------|:-----|
| Menu item | Right | 4px | Text colour | - |
| Button | Right | 4px | Text colour | - |
| Tab | Right | 4px | Text colour | - |
| Toggle | Right of toggle | 8px | Gray 500 | 24px |
| Tile | Bottom-right | - | Gray 700 | 24px |

## Variants

### Premium Alert
Used in demo or preview contexts:

| Scenario | Description |
|:---------|:------------|
| **Demo Dashboard** | Alert on demo dashboard indicating need to upgrade for real data |
| **Feature Preview** | Alert above feature preview indicating upgrade needed |

## Content Guidelines

### Tooltip
**Copy:** `Upgrade plan to unlock`

### Premium Alert
**Copy:** `Upgrade your plan to {do this}`
- "{do this}" briefly describes the feature
- "Upgrade your plan" links to plan page

### Modal

| Element | Content |
|:--------|:--------|
| **Heading** | `Upgrade your plan to unlock more value` |
| **Description** | `This feature is only available on a higher tier plan. {Description - 2 lines max}.` |
| **Bullet list** | `Upgrade and get more features like:` + plan inclusions |
| **Primary button** | `Upgrade` |
| **Secondary button** | `Skip for now` |

### Info Alert (Member)
**Copy:** `Speak to your admin to upgrade your plan.`

## Plan Inclusions

| Icon | Description |
|:-----|:------------|
| `paper-plane` | Branded emails that look professional and build trust |
| `timer` | Bulk proposal renewals that save you time |
| `wand-magic-sparkles` | Integration with practice management systems |
| `signature` | Multiple e-signatures making it easy to stay compliant |
| `video` | Videos in proposals for a personalized touch |
| `envelope` | Multiple email templates |
| `users` | Up to 500 active clients |
| `clipboard-check` | Proposal reviews and approvals |
| `user-plus` | Unlimited users |
| `business-time` | Faster support response time |

## Best Practices

- Keep feature descriptions brief (max 2 lines in modal)
- Ensure clear call to action guiding user to upgrade
- Use additional copy only when necessary to avoid stacking alerts
- Differentiate user experiences for Admin vs. Member roles
- Link "Upgrade your plan" to appropriate plan page
