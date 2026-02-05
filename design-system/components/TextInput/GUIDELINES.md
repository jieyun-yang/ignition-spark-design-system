# Text Input Guidelines

## Overview

The Text Input component is a fundamental UI element designed for users to enter single-line text data. It is a versatile component that adapts to various contexts within forms, supporting features like labels, optional captions, validation, and character limits.

## Anatomy/Structure

The Text Input component is comprised of several elements, some mandatory and some optional:

| Element                 | Optional?       | Description                                                                                                                                                                                                                                  |
| :---------------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Label                   | No              | Text that informs the user about the content they need to enter in the field. All fields require a Label.                                                                                                                                      |
| Required (*)            | Yes             | A red asterisk (*) next to the label informs the user when this is a required field.                                                                                                                                                           |
| Caption                 | Yes             | Assistive text that can provide additional aid or context to the user. A caption cannot be present without a Label.                                                                                                                            |
| Border                  | No              | The color of the border changes depending on the input's state (e.g., default, hover, focus, error, disabled).                                                                                                                               |
| Left icon               | Yes             | Can be used to help with scan-ability and provide a visual cue as to what data is required (e.g., currency symbol for price input).                                                                                                              |
| Input or Placeholder text | No              | The content that the user has entered into the field. Where there is no user input or pre-populated data, placeholder text should be shown instead.                                                                                         |
| Right icon              | Yes             | An icon placed on the far right side of the input is usually interactive (e.g., an 'i' icon for more information, a calendar icon to indicate a date-picker, or an 'X' icon to clear the input).                          |
| Count                   | Yes             | A number or count can be shown (e.g., 60) to indicate how many characters are remaining in a limit placed on the field.                                                                                                         |
| Error message           | On validation   | Text that appears when the user's input isn't accepted, or when required input isn't detected when the user tries to progress.                                |

## Usage Guidelines

### General Usage in Forms

*   **Labels**: All text inputs must have a Label.
*   **Captions**: Captions are optional and used to provide additional context when needed.
*   **Required Fields**: An asterisk (*) icon next to the label indicates mandatory fields.
*   **Character Limit/Count**: Where a character limit exists, show the remaining number of characters within the input as the user types.

### Icon Usage

*   **Leading Icon**: Primarily used to communicate price-only inputs.
*   **Trailing Icon**: Used when the icon/field is interactive:
    *   `X` (`isClearable`) = clears the input.
    *   Calendar icon = triggers a date picker.

### Inline Error Validation

*   When an error occurs, move inputs down to accommodate the error message.
*   Change the text input to red when that field has an error.
*   Keep the field border red, even when focused, if there is an error.

### Call-to-Action (CTA) Button States

*   Keep CTA buttons enabled when the user cannot progress or there is an error, as long as they can resolve the issue themselves within the UI.

## Best Practices

### Placeholder Text

*   **Do**: Show placeholder text with a lighter text color when the input is empty.
*   **Don't**: Have placeholder text which is the same color as the input text.

### Labels and Captions

*   **Do**: The label should always be visible unless the input is used in specific variants (e.g., Search component).
*   **Don't**: Show an input with only a Caption and no Label.
*   **Don't**: Use a dark colored text for captions.

### Input Sizing and Width

*   **Do**: Use appropriate-sized text fields:
    *   **Text Input** for single-line entries.
    *   **Text Area** for longer, multi-line entries.
*   **Don't**: Use the Text Input component for longer entries, e.g., descriptions.
*   **Do**: Use shorter width inputs where expected characters will be approximately 4 (e.g., Postcode, State/Province, Year).
*   **Don't**: Use different fixed widths within the same form unless inputs are likely to contain less than 10 characters.

### Icon Usage

*   **Caution**: Unless the input is used in the separate Search component, avoid using two icons in the same input.

### Inline Error Validation

*   **Do**:
    *   Move inputs down to accommodate for error messages.
    *   Change text input to red when that field has an error.
    *   Keep field border red (rather than blue), even when focused.
*   **Don't**:
    *   Fix position of inputs so error message overlaps others.
    *   Keep text input neutral colored when that field has an error.

## Variants/States

### States

| State       | Description                                                                                                                                                                                                        |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default** | Standard appearance with optional placeholder text.                                                                                                                                                                |
| **Hover**   | Visual feedback when a user's cursor is over the input.                                                                                                                                                            |
| **Focus**   | Clicking into the field triggers the blue border or focus state. Can also be triggered via keyboard (Tab).                                                                                                         |
| **Error**   | Red border and error message displayed below the input.                                                                                                                                                            |
| **Disabled** | Greyed out, non-interactive state.                                                                                                                                                                                 |

## Properties/Options

### Styling

| Property        | Variants / Value                                                                                                        |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Size**        | **Medium**: Height: 32px (everywhere in app) <br/> **Large**: Height: 40px (Sign-in pages only) |
| **Width**       | Auto (fill container) OR predefined sizes: `small`: 92px, 175px; `medium`: 335px; `large`: 580px |
| **Border**      | 1px solid. Colors: Default: Gray 300, Hover: Gray 400, Focus: Purple 500, Disabled: Gray 400, Error: Red 500 |
| **Border radius** | 4px |
| **Padding**     | Input container: Vertical: 6px, Horizontal: 12px |

## Related Components

*   [TextArea](../TextArea/GUIDELINES.md) - For multi-line text input
*   [Search](../Search/GUIDELINES.md) - Specialized search input
*   [Select](../Select/GUIDELINES.md) - For dropdown selection
*   [DatePicker](../DatePicker/GUIDELINES.md) - Date selection with calendar icon
