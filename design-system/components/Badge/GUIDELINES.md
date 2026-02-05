# Badge Guidelines

## Overview

Badges are compact visual indicators used to display a concise piece of information, typically a status or category, about an associated item or section. They are designed for quick scanning and recognition.

## Usage Guidelines

### When to Use a Badge

Use badges to communicate:

*   Status in a workflow.
*   If an item is enabled or in use.
*   A role that needs to be identified (e.g., principal, signatory).

**Important Considerations:**

*   In a table or list, there should only be one status category per row to ensure easy scanning and recognition.
*   If you find you need to highlight another category beyond the primary status, consider using a tag or text in another column instead of a second badge.

### Sizing

Badges are available in three sizes, each suited for specific contexts:

*   **Tiny**:
    *   Used for "Classic proposals" in "Client summary".
*   **Small**:
    *   Used in lists to indicate `Default`, `Primary`, and `In use` items.
    *   Used in a workflow context.
*   **Large**:
    *   Used in table lists to indicate the status of items for easy scanning and filtering.
    *   Used in page and drawer headers.

### Placement

Optimal placement of badges ensures scannability and clarity:

*   **In lists**: Place badges in their own column for best scannability.
*   **In cards**: Place badges to the right of the content for best scannability.
*   **In headers**: Place badges beside the title.

### Colors and Meanings

Badge colors convey specific semantic meanings:

*   **Green**: Positive, on, selected, default, enabled, in use.
*   **Yellow**: Warning, draft, pending.
*   **Blue**: Neutral, information.
*   **Red**: Error, missing information, blocker.
*   **Grey**: Neutral, off, deselected, disabled, complete.

## Anatomy/Structure

A badge consists of a single visual element:

*   **Badge label**: The text content displayed within the badge.

## Variants/States

### States

*   **Default**: The standard, non-interactive visual appearance of the badge.

### Styling Variants

Badges offer visual customization through size and color:

*   **Sizes**: Tiny, Small, Large (refer to Sizing guidelines for usage).
*   **Colors**: Green, Yellow, Blue, Red, Grey (refer to Colors and Meanings guidelines for semantic usage).

## Properties/Options

The following properties can be configured for a badge:

| Property | Type | Description | Values |
| :------- | :--- | :---------- | :----- |
| `label`  | String | The text content displayed within the badge. | Any string |
| `size`   | String | Determines the visual size of the badge. Refer to Usage Guidelines for specific recommendations. | `tiny`, `small`, `large` |
| `color`  | String | Defines the semantic color of the badge. Refer to Usage Guidelines for color meanings. | `green`, `yellow`, `blue`, `red`, `grey` |

## Best Practices

### Do's

*   **Do** use badges in a table list, placed in the same column for optimal scannability.
*   **Do** use a badge to indicate status in a page header, such as a client page header.
*   **Do** use a badge to indicate status in a drawer header.
*   **Do** use small-sized badges to indicate the status of a card, placed on the right for better scannability.

### Don'ts

*   **Don't** place a badge under content, as it reduces scannability.
*   **Don't** place badges in the same column and mix categories within that column.
