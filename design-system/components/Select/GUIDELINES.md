# Select Guidelines

## Overview

The Select component allows users to choose one or more options from a predefined list. It is typically used when there are many options, or when options need to be searchable. The Select component utilizes the **Menu list** component to display its options.

## Usage Guidelines

### When to use

*   When a single option needs to be selected for input.
*   When multiple options need to be selected for input.
*   When users can add a new option to the list.
*   When options are dynamic or there is a long list of choices.

### Single Selection

Use when only one option can be chosen.
*   The options presented are always searchable by typing in the input field.

### Multiple Selections

Use when more than one option can be chosen.
*   To improve usability, checkboxes should be considered for options within the menu.
*   Be mindful of the width of this component to ensure it can accommodate the number of selected tags without excessive wrapping or truncation.

### Add to Menu Items

Use when users can input and add a new, custom option to the existing list.
*   Communicate clearly with a placeholder text that the user must type to view existing options or create new ones.

## Anatomy

The Select component consists of the following visual elements:

*   **Field**: The interactive input area where the selected option(s) are displayed.
*   **Selected Option**: The text or tag(s) representing the current selection(s) within the field.
*   **Dropdown Icon**: A visual indicator (e.g., an arrow or chevron) that signifies the field will open a menu upon interaction.
*   **Menu**: The list of available options that appears when the field is activated.

## States

The Select component can exist in the following states:

*   **Default**: The standard, inactive appearance of the component.
*   **Hover**: The appearance when a user's cursor is over the component.
*   **Focus**: The appearance when the component is actively selected by the user (e.g., via tab key or click).
*   **Disabled**: The appearance when the component is non-interactive and users cannot make selections.
*   **Error**: The appearance when there is a validation error associated with the selection.

## Interactions

### Single Select with Default Selection

*   The field displays a previously selected or default item.
*   The menu, when opened, visually indicates the selected item.
*   Clicking on another item in the menu replaces the current selection displayed in the field.

### Single Select with Placeholder

*   The field displays a placeholder text (e.g., "Select an option...").
*   Upon clicking the field, the menu of options is displayed.
*   Users can type in the item name, and the menu will dynamically display matching results.
*   A clear 'X' icon is displayed in the field after an item has been selected.
*   Clicking the 'X' icon removes the current selection from the field.

### Multi-select

*   The field displays a placeholder text or the selected options as tags.
*   Upon clicking the field, the menu of options is displayed.
*   Selecting an item from the menu displays it as a tag within the field.
*   Each tag includes a clear 'X' icon. Clicking the 'X' within a tag removes that specific item from the selection.
*   A general clear 'X' icon may also be displayed after selections, allowing removal of the entire selection.

## Best Practices

### Do

*   Allow users to search options when there is a long list to select from.

### Don't

*   Do not use the Select component if there are only 2-3 options. Instead, use the **Radio** component for fewer choices.

## Sizing

*   For multi-select components, ensure the width is sufficient to accommodate the expected number of tags without causing layout issues or truncation.

## Related Components

*   **Radio**: Recommended for a small, fixed number of options (2-3).
*   **Menu list**: The underlying component used by Select to display options.
