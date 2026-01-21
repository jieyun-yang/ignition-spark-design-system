# Switch Guidelines

## Overview

The Switch component allows users to toggle between two distinct states, typically "on" and "off" or "selected" and "deselected". It directly triggers a state change upon interaction, making it suitable for enabling/disabling settings or displaying/hiding data without requiring an explicit submission.

## Usage Guidelines

Use the Switch component for direct and immediate state changes.

*   **When to Use:**
    *   To represent the switching between two mutually exclusive states (on/off, active/inactive).
    *   To enable or disable a setting instantaneously.
    *   To show or hide data sections or elements.
    *   When the action should take effect immediately upon toggling, without needing a submit button.

*   **Switch vs. Checkbox:**
    *   A **Switch** triggers a state change directly upon toggle.
    *   A **Checkbox** is generally used for state marking or selection, and typically works in conjunction with a submit action.

*   **Switch vs. Radio Button Group:**
    *   Do not use a Radio Button Group to represent switching between two states. Switches are designed specifically for this purpose.

*   **Labeling:**
    *   The Switch label should clearly describe what the switch will control when it is in the "on" position.

*   **Interactions:**
    *   Displaying and hiding data.
    *   Enabling and disabling the ability to edit settings (no submit button required).
    *   Enabling or disabling features/settings (no submit button required).

## Anatomy/Structure

The Switch component consists of the following visual elements:

*   **Background**: Indicates the current state (e.g., a colored background for "on" and a neutral background for "off").
*   **Control/Thumb**: The movable part that visually shifts to the right when "on" and to the left when "off."
*   **Label**: Describes the function or setting the switch controls.
*   **Required Indicator** (Optional): A visual cue indicating the field is mandatory.
*   **Caption** (Optional): Supplementary descriptive text.

## Variants/States

### States

Switches display different visual states to communicate their status and interactivity.

| State        | Description                       |
| :----------- | :-------------------------------- |
| Default Off  | The initial, inactive state.      |
| Default On   | The initial, active state.        |
| Hover Off    | Visual feedback when hovering over an inactive switch. |
| Hover On     | Visual feedback when hovering over an active switch. |
| Disabled Off | An inactive switch that cannot be interacted with. |
| Disabled On  | An active switch that cannot be interacted with. |

### Sizing

Switches are available in different sizes for varying contexts.

| Size  | Usage                                          |
| :---- | :--------------------------------------------- |
| Small | Used primarily to show and hide data.          |
| Large | Used to enable and disable settings or functions. |

### Layout Variants

| Variant                         | Usage                                                           | Example                                    |
| :------------------------------ | :-------------------------------------------------------------- | :----------------------------------------- |
| Horizontal layout of label and small size switch | Use this variant above a layout to show/hide data or to enable/disable a specific component. | NPE Services tab > show/hide tax rates     |

## Properties/Options

The following properties can be configured for the Switch component:

| Property           | Type      | Description                               | Default |
| :----------------- | :-------- | :---------------------------------------- | :------ |
| `label`            | `string`  | The text label for the switch.            | `""`    |
| `requiredIndicator`| `boolean` | If `true`, displays a required indicator. | `false` |
| `caption`          | `string`  | Optional supplementary text.              | `""`    |
| `size`             | `enum`    | Sets the size of the switch (`small`, `large`). | `large` |
| `disabled`         | `boolean` | If `true`, the switch is not interactive. | `false` |

## Best Practices

### Do's

*   **Do** use a Switch to enable or disable a setting directly.
*   **Do** use a Switch to show or hide data instantly.
*   **Do** ensure the label clearly describes the "on" state's effect.

### Don'ts

*   **Don't** use a Switch as a selector that requires a separate submit action. Use a Checkbox for this purpose.
*   **Don't** use a radio button group to represent switching between two states; use a Switch instead.

## Related Components

*   **Checkbox**: Used for state marking and selection, typically requiring a submit action.
*   **Radio Button Group**: Used for selecting one option from a list of mutually exclusive options.
