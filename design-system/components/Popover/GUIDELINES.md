# Popover Guidelines

## Overview

A Popover is a temporary, contextual overlay that appears on user action to display focused information or controls. It is designed to provide immediate feedback or functionality without navigating away from the current context, aiming to keep the triggering action visible and user activity unblocked.

## Anatomy/Structure

The Popover component consists of:

*   **Content area**: The region that houses the primary information or controls.
*   **Container with arrow**: The visual wrapper that includes an arrow, typically pointing towards the triggering element, indicating its contextual origin.

## Usage Guidelines

Use Popovers to display specific, concise information or configuration options directly related to a user action. The size of the Popover should be determined by the amount of content it needs to display.

*   **NPE smart billing**:
    *   **Context**: Displayed on an action in NPE to configure smart billing functionality.
    *   **Size**: Uses `Small` (240px) due to the concise nature of the content.
*   **NPE billing group editing**:
    *   **Context**: Displayed on an action in NPE to configure billing group settings.
    *   **Size**: Uses `Large` (400px) as it requires more space for settings.
*   **Editing filters in Pipeline**:
    *   **Context**: Displayed on an action in Pipeline to select or adjust filters.
    *   **Size**: Uses `Medium` (320px) for filter selections.

## Behaviour

The Popover's interaction and closing behaviour can vary based on its content and context:

*   **Standard Popover**:
    *   **Trigger**: User clicks a Call To Action (CTA).
    *   **Position**: Popover displays either above or below the CTA.
    *   **Closing**: Users can click outside the Popover to close it (click-out behaviour).
    *   **Interaction**: Does not block underlying interactions.
*   **Popover requiring save**:
    *   **Trigger**: User clicks a Call To Action (CTA).
    *   **Position**: Popover displays either above or below the CTA.
    *   **Closing**: Users **cannot** click outside to close the Popover, as it requires an explicit save action.
    *   **Interaction**: Does not block underlying interactions.

## Variants/States

Popovers can be positioned relative to their trigger element:

*   **Bottom**: The Popover appears below the triggering element.
    *   **Elevation**: E200
*   **Top**: The Popover appears above the triggering element.
    *   **Elevation**: E200

## Properties/Options

| Property   | Type      | Description                                                 | Options / Default                                 |
| :--------- | :-------- | :---------------------------------------------------------- | :------------------------------------------------ |
| `size`     | `enum`    | Controls the fixed width of the popover.                    | `Small` (240px), `Medium` (320px), `Large` (400px) |
| `position` | `enum`    | Determines if the popover appears above or below its trigger. | `Top`, `Bottom`                                   |
| `elevation`| `string`  | Defines the visual depth of the popover, casting a shadow.  | `E200`                                            |

## Best Practices

### Do

*   Display the overlay above or below the action that triggered it, ensuring the original action remains visible and accessible.

### Don't

*   **Don't** block user activity with the Popover. It should be dismissible or not interfere with essential workflows.
*   **Don't** use Popovers for content that can be as long as an entire page. If content is too extensive, consider using a different component like a Drawer.

## Related Components

*   **Drawer**: If content for a Popover becomes too long or complex, it should be placed in a Drawer component instead.
