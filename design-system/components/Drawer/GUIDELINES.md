# Drawer Guidelines

## Overview

Drawers are UI components used to display supplementary content or facilitate complex tasks without navigating away from the main page context. They typically slide in from the side, providing a focused view for summary information or multi-step editing/creation workflows.

## Anatomy

A Drawer component typically comprises the following elements:

| Element             | Description                                                                                                                                                                                                                                                                 |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Drawer title**    | The main title of the drawer. If creating something new, use "New <noun>" (e.g., "New invoice", "New client"). If editing, use the name of the item (e.g., the client's name, proposal name). For workflow drawers, the title should be consistent, with step titles in the scrollable content area. |
| **Scrollable content** | The primary area for displaying information or form fields.                                                                                                                                                                                                             |
| **Client name**     | (Optional) The name of the client associated with the item, placed above the drawer header. For example, when creating an instant bill for a particular client.                                                                                                           |
| **Help link**       | (Optional) A link to provide additional help or information.                                                                                                                                                                                                                |
| **Status**          | (Optional) An indicator showing the current status of the item.                                                                                                                                                                                                             |
| **Action bar**      | A bottom bar containing primary and secondary actions related to the drawer's purpose.                                                                                                                                                                                      |
| **Close button**    | A button to dismiss the drawer.                                                                                                                                                                                                                                             |

## Usage Guidelines

Drawers are used for two primary purposes: summarizing information or facilitating complex edit/create workflows.

### When to Use

*   **Summary/Information Drawers**: To present a summary in the context of viewing a list of items.
*   **Edit/Create Drawers**: To edit or create an item within the context of viewing an item or list, especially for complex tasks usually with multiple steps (typically an edit and a review step).

### Interactions

Drawers are triggered by user actions, such as clicking to view an item's summary or clicking an action to edit or create a new item.

### Specific Guidelines by Drawer Type

#### Summary/Information Drawers

The purpose of this drawer is to present a summary in the context of viewing a list of items.

*   **Action Bar Guidelines**:
    *   If the item is actionable, an action bar is displayed in the header.
    *   Primary action button should be on the right.
    *   "More actions" button should be on the left.
    *   If the drawer isn't actionable, display a subtle close button.
*   **Header Guidelines**:
    *   The header title should be the name of the item this drawer summarizes (e.g., "Accounting services", "Bookkeeping proposal").
    *   If the item relates to a specific client, place the client's name above the drawer header.
*   **Tabs Guidelines**:
    *   Display tabs to organize summarized information.

#### Edit/Create Drawers (Workflow Drawers)

The purpose of this drawer is to edit or create an item in the context of viewing an item or a list. The task is in a drawer because it is a complex task usually with multiple steps.

*   **Action Bar Guidelines**:
    *   **Step 1**:
        *   Primary action (e.g., "Next") on the right, with an icon.
        *   Tertiary "Cancel" button on the left.
    *   **Step 2**:
        *   Primary action on the right, with an icon.
        *   Secondary "Back" button with an icon on the left.
        *   Tertiary "Cancel" button on the left.
*   **Content**: For workflow drawers, the drawer title should be consistent throughout. You can put the title of the step in the scrollable content area.
*   **Primary button**: For workflow drawers, use "Next" to progress to the next step.

## Best Practices

### Do's

*   **Do** use a drawer to display the summary of an item in a list, keeping the context of the list.
*   **Do** use a drawer for complex tasks. Keep the steps to 2 (edit and review).
*   **Do** allow for navigating back a step and cancelling on an 'edit and review' drawer.

### Don'ts

*   **Don't** use a drawer for simple tasks. Consider an Input modal instead.

## Spacing & Sizing

Drawers support various widths:

| Size        | Width           |
| :---------- | :-------------- |
| `md` (Default) | 720px           |
| `lg`        | 896px           |
| `xl`        | 1200px (Not recommended) |
| `full`      | full width (mobile) |

## Related Components

*   [Modal](../Modal/GUIDELINES.md) - General modal component, applicable for summary or complex tasks
*   Consider Modal for simple, single-step tasks
