# Radio Button Guidelines

## Overview

Radio buttons allow users to select a single option from a predefined list of mutually exclusive choices. This component is crucial for guiding user decisions where only one selection is valid. Radio buttons can appear as standard buttons, grouped buttons, or within cards to accommodate various design contexts and information densities.

## Anatomy/Structure

The Radio component can be composed in different ways, each with distinct elements:

### Standard Radio Button

| Element   | Description           |
| :-------- | :-------------------- |
| `Control` | The clickable radio input element. |
| `Label`   | The text description associated with the control. |

### Radio Button Group

A collection of radio buttons presented as a cohesive group, often used for related choices.

| Element         | Description                                    |
| :-------------- | :--------------------------------------------- |
| `Button option` | An individual selectable button within the group. |
| `Selected Button option` | The currently chosen button option, visually distinct. |
| `Button label`  | The text label for the entire button group.   |

### Radio Card

A more visually prominent option, encapsulating a radio button within a card interface to provide richer information or action context.

| Element          | Description                              |
| :--------------- | :--------------------------------------- |
| `Icon`           | An optional visual icon. (Size: `24px`)   |
| `Radio button`   | The clickable radio input within the card. |
| `Title`          | A main heading for the card. (Style: `Body medium`) |
| `Description`    | Supplementary text providing more context. (Style: `Body`) |

## Usage Guidelines

Use Radio components when users need to select exactly one option from a limited set of choices.

### When to use Standard Radio Buttons

*   **Scannability**: Ideal for situations where options need to be easily scanned.
*   **Layout**: Generally displayed vertically.
*   **Option Count**: Best for 5 to 6 options.
*   **Context**: Provides a cleaner line-of-sight to a primary call-to-action positioned below the options.

### When to use Radio Button Groups or Cards

*   **Prominence**: Generally more visually prominent, making them suitable when the selection is a primary action on the page.
*   **Layout**: Typically displayed horizontally.
*   **Option Count**: Best for 3 or 4 options.

### When to use Alternatives (e.g., Dropdowns)

*   **Option Count**: When there are more than 5 or 6 options to select from.
*   **Scannability**: Dropdowns are less scannable than radio buttons but are more space-efficient for longer lists.

## Variants/States

Radio components support various visual states and sizes to indicate their interactive status and adapt to different contexts.

### Sizes

The Radio component is available in different sizes:
*   Small
*   Medium
*   Large

### States

All Radio components and their options can exist in the following states:

*   **Default**: The standard appearance of the component when no interaction has occurred.
*   **Hover**: The visual feedback when a user's pointer is over the component.
*   **Active**: The visual feedback when a user is actively interacting with the component (e.g., clicking down).
*   **Selected**: The state indicating that an option has been chosen.
*   **Disabled**: The component is inactive and cannot be interacted with.
*   **Invalid**: The component's current selection does not meet validation requirements.

## Best Practices

### Do's

*   **Vertical Listing**: List options vertically for standard radio buttons to enhance scannability.
*   **Conditional Display**: Only display secondary selections or additional inputs after a radio option has been selected.
*   **Default Selection**: Always have one option pre-selected by default for radio and radio button groups to provide a clear starting point.
*   **Contextual Actions**: Display contextual actions (e.g., "More actions" button to delete an option) when an option is selected.

### Don'ts

*   **No Premature Input**: Do not display input fields or secondary actions for a selection until the corresponding radio button or card is explicitly selected.
*   **No Secondary Actions Inside Card**: Avoid placing secondary actions directly inside a card unless they are triggered by the selection itself.
*   **No Navigation Tabs**: Do not use a radio button group as tabs for navigation. Radio buttons are for selecting an option within a form, not for switching between different views or sections of content.

## Spacing/Sizing

*   **Icon Size**: Icons within Radio Cards should be `24px`.
*   **Positioning**: Standard radio buttons are typically displayed vertically, while radio button groups and cards are often displayed horizontally.

## Accessibility

*   **Semantic Usage**: Ensure radio buttons are used semantically for single-option selection within forms. Misusing them (e.g., as navigation tabs) can create confusing experiences for users of assistive technologies, as their expected behavior differs significantly from actual tabs.
