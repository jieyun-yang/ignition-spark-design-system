# Combo Button Guidelines

## Overview

A Combo button combines a primary, default action with a menu button that reveals a list of closely related, secondary actions. It provides a single point of interaction for a primary task while offering quick access to supplementary options.

## Anatomy

The Combo button is composed of two primary interactive elements:

- **Label (Default action)**: This is the main button area that triggers the primary action.
- **Menu button**: A distinct button, typically an icon, that, when clicked, opens a dropdown menu containing secondary actions.

## Usage Guidelines

Use Combo buttons to present a primary action alongside a set of related secondary actions, optimizing space and streamlining user workflows.

## Best Practices

### Do's

- Use combo buttons for closely related actions.

### Don'ts

- Don't group unrelated actions with combo buttons.

## Variants and States

The Combo button supports various visual and interactive states to indicate its availability and user interaction.

| State           | Description                                                                                             |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| **Default**     | The standard, inactive appearance of the button.                                                        |
| **Hover/Active** | The appearance when the mouse cursor is over the button or when the button is actively pressed. This state applies differently to its constituent parts: |
|                 | - **Hover/Active - Default button**: The visual feedback for the primary action area when hovered or active. |
|                 | - **Hover/Active - Menu button**: The visual feedback for the menu trigger area when hovered or active.   |
| **Disabled**    | The appearance when the button is non-interactive and cannot be clicked. This state also applies differently to its constituent parts: |
|                 | - **Disabled - Default button**: The visual style for the primary action area when disabled.             |
|                 | - **Disabled - Menu button**: The visual style for the menu trigger area when disabled.                 |

## Interactions

The Combo button supports the following interactions:

- **Default action**: Clicking the main button area triggers the primary action.
- **Opening the menu**: Clicking the menu button reveals the dropdown with secondary actions.
- **Closing the menu**: Clicking outside the menu or selecting an action closes the dropdown.

## Related Components

- [Menu Button](../MenuButton/GUIDELINES.md)
