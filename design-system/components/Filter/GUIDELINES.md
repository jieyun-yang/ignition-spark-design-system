# Filter Guidelines

## Overview

The Filter component provides a user interface element designed to narrow down and refine the data displayed in a table or list. It allows users to apply specific criteria to reduce the visible information, improving data manageability and focus. The component includes various interactive elements, labels, and an optional popover for detailed attribute selection.

## Usage Guidelines

The Filter component should be implemented when there is a need to provide users with a clear and intuitive way to reduce the amount of data presented in a structured view, such as a table or a list.

### When to Use

- To reduce down the data displayed in a table or list.

## Anatomy/Structure

The Filter component is composed of several distinct visual and interactive elements:

| Element                    | Description                                                        |
| :------------------------- | :----------------------------------------------------------------- |
| `Filter`                   | The main interactive component that encapsulates the filtering functionality. |
| `Filter label`             | A primary text label identifying the purpose of the filter.        |
| `Sub filter label`         | A secondary text label, often used to indicate more granular filtering options or current selection. |
| `FilterDropdown icon`      | An icon (e.g., a caret or chevron) indicating that the filter has a dropdown menu or popover. |
| `Control`                  | An interactive element (e.g., a button or input field) that triggers the filter functionality or input. |
| `Filter popover`           | A temporary overlay panel that appears on interaction, containing detailed filter options and attributes. |
| `PopoverFilter attributes` | Individual options or criteria presented within the filter popover that users can select. |
| `Sub-attribute`            | Nested attributes or options, providing further refinement within a parent attribute. |
| `Submit`                   | An action button within the popover to confirm and apply the selected filter criteria. |

## Variants/States

The Filter component supports various visual states to indicate its status and user interaction, as well as distinct interaction types.

### States

The Filter component can display the following states:

| State                                 | Description                                                         |
| :------------------------------------ | :------------------------------------------------------------------ |
| `Default`                             | The standard, unengaged appearance of the filter component.         |
| `Hover`                               | The appearance of the filter when a user's pointer is over it.      |
| `Active`                              | The appearance when the filter component is engaged, clicked, or open. |
| `Remove hover`                        | The appearance after the hover state has been exited.               |
| `Default - filter has no value`       | The standard appearance when no filter value has been applied.      |
| `Hover - filter has no value`         | The hover appearance when no filter value has been applied.         |
| `Active - filter has no value`        | The active appearance when no filter value has been applied.        |
| `Remove hover - filter has no value`  | The post-hover appearance when no filter value has been applied.    |

### Interactions

Users can perform the following interactions with the Filter component:

- **Editing a filter**: Modifying the currently applied filter criteria.
- **Removing a filter**: Deactivating or clearing a single applied filter.
- **Adding a filter**: Applying new filter criteria.
- **Clear filters**: Removing all currently applied filters.
- **Adding a filter that doesn't have a default value**: Applying a filter where an initial value needs to be explicitly chosen by the user.

## Best Practices

### Do's

- **Placement**: Place the Filter component consistently at the top of a table or list to ensure discoverability.
- **Availability**: If there are more filter options available than initially displayed, include a 'More filters' button to provide access to the full range of options.
- **Reset**: Always provide a clear and easily accessible mechanism for users to clear all applied filters.

### Don'ts

- **Component Misuse**: Do not use alternative components, such as a `Switch` component, to filter a list. The Filter component is specifically designed for this purpose.

## Related Components

- **Switch**: This component is explicitly mentioned as an alternative *not* to use for filtering lists, implying it serves a different purpose within the design system.
