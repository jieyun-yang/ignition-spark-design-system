# Link Guidelines

## Overview

Links are used to enable navigation within a system or to external resources. They are visually distinguished by their purple color, which signifies their interactive nature.

## Usage Guidelines

Links should be used in the following contexts to navigate users:

*   Inline within text.
*   Within layouts.
*   Within tables to navigate to specific items (note: this has been used as a workaround in the UI due to the lack of inline actions).
*   In header breadcrumbs.
*   Within alerts.

## Anatomy/Structure

Links are primarily defined by their interactive state and styling.

*   **Color**: Links are typically purple to represent interactivity.

## Variants and States

### States

The Link component supports the following interactive states:

*   **Default**: The standard appearance of the link.
*   **Hover**: The appearance of the link when a user's cursor is over it.

## Properties/Options

### Styling Options

The Link component supports various styling options, primarily related to size and hierarchical emphasis, aligning with typographic scales:

| Style Name | Description |
| :--------- | :---------- |
| Extra small | For minimal text sizes. |
| Small, Small medium | For smaller body text sizes. |
| Body, Body medium | For standard body text sizes. |
| H4 | For heading level 4 text sizes. |
| H3 | For heading level 3 text sizes. |
| H2 | For heading level 2 text sizes. |
| H1 | For heading level 1 text sizes. |

## Best Practices

### Do's

*   Use links in breadcrumbs for navigation.
*   Use links inline to navigate users within content.
*   Use links in context to navigate users to help documentation or related information.
*   Use links in tables to navigate to specific items or details.

### Don'ts

*   **Do not** use links for actions that modify data or trigger immediate operations. Instead, use a **Button** component for actions.
*   **Do not** use links with an accompanying icon. If an icon is needed for an action, use a **Button** component instead.

## Related Components

*   **Button**: Use a Button component instead of a Link for actions or when an icon is needed to signify an action.
