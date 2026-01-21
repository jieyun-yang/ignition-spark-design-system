# Checkbox Guidelines

## Overview

A checkbox is a UI element that allows users to select one or more items from a list of options. It typically indicates a binary state (selected/deselected) and is commonly used in forms, tables, and multi-selection lists where users need to make independent choices.

## Anatomy/Structure

The Checkbox component is composed of the following visual elements:

| Element            | Description                                  | Styling/Context          |
| :----------------- | :------------------------------------------- | :----------------------- |
| Checkbox Control   | The interactive square input element.        |                          |
| Icon Label         | An optional icon associated with the checkbox. | CardIcon (24px)          |
| Checkbox Title     | The primary label or text for the checkbox.  | Body medium typography   |
| Description        | Supplementary text providing additional details for the checkbox. | Body typography          |

## Usage Guidelines

Use the Checkbox component in the following scenarios:

*   **Multi-selection**: For allowing users to select multiple options from a group, such as items in a table or a list within a form.
*   **Individual selection/deselection**: To enable users to select or deselect single items independently.
*   **Select/deselect all or multiple**: In lists where users need to perform bulk actions, such as selecting or deselecting multiple items simultaneously (e.g., in a `Pipeline` view).
*   **Card selection**: For enabling the selection of entire content cards (e.g., in `Client/Edit client/email preferences` interfaces).

## Variants and States

The Checkbox component supports different visual variants and interaction states.

### Variants

The Checkbox component can appear in these variants:

*   **Checkbox**: The standard square input used for general selections.
*   **Card**: A variant where the checkbox functionality is integrated with a card component, allowing the card itself to be selected.

### States

Both the `Checkbox` and `Card` variants support the following interaction states:

*   **Default**: The standard appearance when not interacted with.
*   **Hover**: The visual change when a user's cursor is over the component.
*   **Active**: The state when the component is being pressed or activated.
*   **Disabled**: The state when the component is not interactive and cannot be selected or deselected.
*   **Invalid**: The state indicating an error or an invalid selection, often accompanied by visual feedback like a red border.

## Properties/Options

The Checkbox component has configurable properties to control its appearance and behavior.

| Property | Type                                  | Description                                           | Default |
| :------- | :------------------------------------ | :---------------------------------------------------- | :------ |
| `size`   | `'Sm'` \| `'Md'` \| `'Lg'` (string) | Defines the overall size of the checkbox control and associated typography. | `Md`    |

## Best Practices

### Do

*   **Use for independent choices**: Employ checkboxes when users can select zero, one, or multiple items from a list.
*   **Contextual use**: Integrate checkboxes into tables or forms where multi-selection is a primary interaction.

### Don't

*   **Placement**: Do not place the checkbox on the right side of its associated label or content. Always position the checkbox to the left.

## Spacing and Sizing

*   **CardIcon**: `24px`
*   **Checkbox Title**: Uses `Body medium` typography.
*   **Description**: Uses `Body` typography.
*   **Default Component Size**: `Md`
