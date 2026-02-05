# Menu Guidelines

## Overview

A Menu list displays a collection of secondary actions or options, often hidden by default, providing contextual functionality to users. It helps organize actions efficiently without cluttering the primary interface.

## Anatomy/Structure

The core structural element of a Menu list is the `Menu itemContainer`, which houses individual menu items.

## Usage Guidelines

### When to Use

*   To display secondary actions that are hidden by default.
*   To display similar actions within a combo button.
*   To display options originating from a button.
*   To display options within a select input.
*   To display actions in an action button.

## Best Practices

*   **Placement of Destructive Actions**: Destructive (e.g., Delete, End) and negative (e.g., Mark as lost, Revoke, Remove) items should always be displayed at the bottom of the list.
*   **Visual Indication for Destructive Actions**: Destructive actions should be displayed in red to clearly signify their impact.
*   **Icons for Action Items**: Action items should be accompanied by relevant icons (refer to Icons documentation for available options).
*   **Active Item Display**: Always clearly display the active menu item that is currently selected within the list.

## Behavior

### Interactions

*   **Selection State**: A selected item within the menu will display an active state.
*   **Dismissal**: If no selection is made from the menu, clicking outside of the menu's boundary will close it.
*   **Adding New Items**:
    *   Adding a new item to the list typically triggers the opening of a drawer component to display the form required to create the item.
    *   If the new item being created is a simple text input, it can be displayed directly within the menu for immediate entry.

## Variants

Menu lists can be customized with the following variants:

| Variant                        | Description                                          |
| :----------------------------- | :--------------------------------------------------- |
| **Icons**                      | Menu items include leading icons for visual context. |
| **Destructive**                | Specific styling (e.g., red text) for destructive actions. |
| **Captions**                   | Menu items include secondary descriptive text or captions. |
| **Logos**                      | Menu items include logos, often for branding or specific entities. |
| **Add or create new on the bottom** | A specific variant that includes an option to add/create a new item, positioned at the bottom of the menu list. |

## States

Menu items can exist in the following interaction states:

| State      | Description                                     |
| :--------- | :---------------------------------------------- |
| **Default** | The standard appearance of an un-interacted menu item. |
| **Hover**  | The visual style when the user's cursor is over the menu item. |
| **Active** | The visual style indicating the menu item is currently selected or engaged. |
| **Disabled** | The visual style indicating the menu item is not interactive. |
