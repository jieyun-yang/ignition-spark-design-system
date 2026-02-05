# Action Bar Guidelines

## Overview

An Action bar provides a dedicated area for user actions, typically related to the content or context of the screen. It helps users quickly perform key tasks by presenting a set of primary, secondary, and tertiary actions, often with responsive behaviors like collapsing into an overflow menu.

## Anatomy/Structure

An Action bar can consist of the following elements:

*   **Primary Action**: The most important or frequently used action within the bar.
*   **Secondary Action**: A less prominent but still important action.
*   **Tertiary Action**: A less critical or supplementary action, often related to cancelling or dismissing.
*   **Overflow "More actions" button**: A button that, when clicked, reveals additional actions typically hidden when space is limited or the number of actions exceeds the recommended maximum.
*   **Split buttons**: A single button that combines a primary action with a dropdown for closely related secondary actions.
*   **Menu buttons**: A button that, when clicked, reveals a dropdown menu containing multiple actions.

## Usage Guidelines

### General Principles

*   **Action Limit**: Display a maximum of 3 actions directly in the action bar. Any additional actions should be placed within an overflow "More actions" button.
*   **Responsiveness**: The action bar is designed to be responsive. Actions will automatically collapse into the overflow button when the available layout space is limited.
*   **Space Optimization**: Consider using split buttons and menu buttons to reduce the amount of visible actions and optimize space within the bar.

### Scenarios

*   **Equal weight (no primary action)**:
    *   **Use when**: There is an equally weighted decision, meaning no single action takes clear precedence over others.
*   **Primary action (space constrained)**:
    *   **Use when**: Space is lacking in the layout (e.g., within a modal) to limit the number of visible actions.
    *   **Configuration**: Display a single primary action and an overflow button for any additional actions.
*   **Workflow**:
    *   **Use when**: The pattern is primarily for workflows, especially those where the workflow can be cancelled.
    *   **Configuration**: Display a single primary action, or a primary and secondary action, alongside a tertiary "Cancel" or "Dismiss" action.

### Placement

The placement of the Action bar within a layout depends on the context and content it serves.

*   **Top Right Positioning**:
    *   **Place action bar in**:
        *   Drawer
        *   Page
        *   Full page layout
        *   Table (for adding items to a table)
    *   **Primary action alignment**: The primary action is positioned on the right-hand side within the action bar.
*   **Top Left Positioning**:
    *   **Place action bar in**:
        *   Table (for searching and filtering)
        *   Table (when items are bulk selected)
*   **Bottom Right Positioning**:
    *   **Place action bar in**:
        *   Modal
    *   **Primary action alignment**: The primary action is positioned on the right-hand side within the action bar.
*   **Center Aligned**:
    *   **Place action bar in**:
        *   An empty state
        *   A benefits modal
    *   **Primary action alignment**: The primary action is positioned on the right-hand side within the action bar.

## Best Practices

### Do

*   Place the primary action to the right of other actions within the action bar when the action bar itself is positioned to the top-right, bottom-right, or center of the layout.

### Don't

*   Use two primary actions in a single action bar.

## Properties/Options

The Action bar can be configured based on the type and number of actions it contains, and its intended behavior.

| Property/Concept | Description                                                               |
| :--------------- | :------------------------------------------------------------------------ |
| **Actions**      | Can include Primary, Secondary, and Tertiary actions.                     |
| **Overflow**     | Automatically triggered to house actions exceeding the display limit.     |
| **Responsiveness** | Inherent behavior; actions collapse into an overflow button as needed.  |
| **Button Types** | Supports standard buttons, split buttons, and menu buttons.               |
| **Usage Scenario** | Can be configured for 'Equal weight', 'Primary action (space constrained)', or 'Workflow' scenarios. |
