# Copy Field Guidelines

## Overview

The Copy field component provides a standardized way for users to quickly copy content, such as links or text, to their clipboard. It typically consists of an input-like field displaying the content and an associated control for the copy action. Upon successful copying, it provides clear visual feedback to the user.

## Anatomy

The Copy field comprises the following key elements:

*   **Control Field**: The area where the content to be copied is displayed.
*   **Content**: The actual text, URL, or data that the user intends to copy.
*   **Copy Control/Button**: The interactive element that triggers the copy action.
*   **Tick Icon**: A visual indicator displayed after content has been successfully copied.

## Usage Guidelines

The Copy field is primarily used in scenarios where users need to easily obtain specific information for sharing or further use.

*   **Context**: Use the Copy field when providing a mechanism to copy a link or other textual content.

## Best Practices

### Do

*   Show the entire URL if the context requires it.
*   Obscure the URL or content in the field if the full context is not necessary, for example, by truncating or masking.

### Don't

*   Use a different visual or interaction pattern for copying content to the clipboard across the system. Maintain consistency.

## Behaviour

### States

The Copy field component, including its associated button and the content field, transitions through various states to communicate its status and responsiveness to user interaction.

| Action | Copy Button State | Field State |
| :----- | :---------------- | :---------- |
| Copy   | Default           | Default     |
| Copy   | Default           | Hover       |
| Copy   | Default           | Active      |
| Copy   | Hover             | Default     |
| Copied | Hover             | Default     |
| Copied | Default           | Hover       |
| Copied | Default           | Active      |
| Copied | Default           | Default     |

### Interactions

The Copy field provides clear feedback during user interactions:

*   **Hover**: When the user hovers over the Copy action, its state changes to `Hover`.
*   **Click**:
    *   Upon clicking the Copy action, its label changes to "Copied".
    *   The "Copied" label remains displayed for 2.5 seconds.
    *   A tick icon appears within the field, positioned to the right of the content.
    *   The tick icon remains displayed for 2.5 seconds.
    *   If the content extends beyond the visible length of the field, the tick icon will display over the content.
