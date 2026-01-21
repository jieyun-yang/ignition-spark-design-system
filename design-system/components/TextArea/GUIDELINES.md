# Text Area Guidelines

## Overview

A Text Area is a user interface component designed for accepting multi-line text input from users. It allows for longer, free-form text entry, such as messages, addresses, or notes. A key characteristic is its support for manual resizing.

## Usage Guidelines

Use a Text Area when users need to enter text that:

*   Requires multiple lines.
*   Is typically longer than a single sentence or phrase.
*   Does not require rich text formatting (e.g., bold, italics).

### Examples

*   Writing messages in emails that do not require formatting.
*   Entering multi-line addresses.
*   Adding notes or comments.

## Best Practices

### Do

*   Use a text area for multi-line input.

### Don't

*   Use a text area for one-line input. For single-line input, use a standard text input field.

## Variants and States

The Text Area component supports various states to indicate its current interaction or validation status.

### States

| State       | Description                                                                  |
| :---------- | :--------------------------------------------------------------------------- |
| Default     | The standard appearance of the text area when not interacted with.           |
| Hover       | The appearance when the user's cursor is over the text area.                 |
| Focus       | The appearance when the text area is selected or actively being edited.      |
| Disabled    | The appearance when the text area is inactive and cannot be interacted with. |
| Error       | The appearance when the input contains invalid data or fails validation.     |
| Placeholder | Text displayed within an empty text area to provide a hint to the user.      |
| With Input  | The appearance when the text area contains user-entered content.             |

## Properties and Options

| Property        | Type      | Description                                                 | Default      |
| :-------------- | :-------- | :---------------------------------------------------------- | :----------- |
| `Resize`        | `boolean` | Determines if the text area can be manually resized by the user. | `true`       |
| `Dynamic Growth`| `boolean` | Indicates if the field dynamically grows in height with more content. | `false`      |
| `Initial Height`| `number`  | The default height of the text area in lines.               | `3 lines`    |

### Behaviour

*   The field does not dynamically grow with more content.
*   Users can manually extend the height and width of the field by grabbing its corner.

## Spacing and Sizing

*   **Default Height:** The text area has a default height of `3 lines`.
