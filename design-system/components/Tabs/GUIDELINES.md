# Tabs Guidelines

## Overview

Line tabs are used to organise and group related content within the same context, for example within a page or drawer.

## Usage Guidelines

Tabs are suitable for grouping related content within a shared context.

### When to Use

| Use Case          | Example                                                                     |
| :---------------- | :-------------------------------------------------------------------------- |
| Same content      | The templates page groups proposal templates by creator                     |
| Related content   | The client record organises different but related content types for a specific client |

## Anatomy/Structure

Tab groups typically follow a specific structural and styling approach.

### Positioning

Tab groups are typically positioned at the top of the page or drawer beneath the title, and left aligned.

### Line Width

The active or hover state line is equal in length to the label.

## Best Practices

### Do

*   Organise content into complementary groupings that work as a set and strengthen user mental models.
*   Limit the number of tabs to avoid issues at low screen resolutions.
*   One tab must always be active, and only one tab may be active at a time.
*   Use the stepper component to indicate progress through a multi-step process.

### Don't

*   Avoid arbitrary groupings that are difficult to learn or remember.
*   Avoid nesting tabs.

## Variants

Tabs can appear in several variations depending on the use case.

| Variant             | Description                                                                                                                                                                                          |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| With summary        | Used in Payments / Collections, an item count and $ total is included in the tab.                                                                                                                    |
| Dynamic tabs        | Used in editor to display proposal options. Tabs may be added, edited, removed and re-ordered.                                                                                                       |
| Fitted              | Tabs that span the width of the container.                                                                                                                                                           |
| Radio button group  | **[NOT USED FOR NEW PROJECTS]** Used in the client portal to represent different proposal pages.                                                                                                     |
| Quick filters       | **[DEPRECATED PATTERN]** Previously used in Pipeline and Clients, this pattern is being deprecated.                                                                                                  |

## States

Tabs have distinct interactive states to communicate their status to the user.

| State     | Description                                             |
| :-------- | :------------------------------------------------------ |
| Default   | Inactive or unselected tab that may be interacted with. |
| Hover     | State when the user hovers over the tab.                |
| Active    | The currently active tab.                               |
| Disabled  | [Available in Chakra but not currently used].           |

## Accessibility

Refer to ChakraUI for more information on accessibility and keyboard control of tabs.

## Related Components

*   **Stepper**: Use the Stepper component to indicate progress through a multi-step process.
