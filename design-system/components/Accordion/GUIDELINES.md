# Accordion Guidelines

## Overview

The Accordion is a user interface component designed to help manage and organize content by allowing users to expand or collapse sections of information. It efficiently utilizes screen real estate, especially for pages with extensive or complex content, by revealing details only when needed.

## Usage Guidelines

Accordions are suitable for presenting information in various contexts, optimizing space and guiding users through content.

### When to use

*   **Full-page forms with multiple sections**:
    *   Proposal editor
    *   Service library (single accordion)
*   **Drawer forms with multiple sections**:
    *   Request payment methods and Client service edits
*   **Full-page content display**:
    *   Get started page (multiple accordions)
    *   Plans page (single accordion)

### Default Behavior

*   **Multiple Accordions**: When multiple accordions are present, the first accordion begins by default in the open state with its content panel expanded. Subsequent accordions start in a closed (collapsed) state.
*   **Single Accordion**: When a single accordion is used, it begins by default in the closed state with its content panel collapsed.

### Interaction

*   **Opening & Closing**: Users can expand an accordion by clicking or tapping its header and collapse it by clicking or tapping the header again. Content can also be expanded or collapsed via a Call to Action (CTA) button placed within the accordion's body.
*   **Multiple Open (Configurable)**: By default, only one accordion can be open at a time. If user workflows require simultaneous viewing of content across multiple sections, the system can be configured to allow multiple accordions to be open concurrently.

## Anatomy/Structure

An accordion is composed of several key elements:

*   **Stepper and icon (optional)**:
    *   **Stepper**: Visually indicates the relevant step in a process and its completion status.
    *   **Icon**: Can replace the stepper to improve comprehension and reduce cognitive load.
*   **Heading**: A concise summary of the content within the accordion. It should be a single line; if content exceeds this, it should be truncated.
*   **Badge (optional)**: A visual highlight to draw the user's attention to the accordion.
*   **State icon**: An icon that clearly indicates whether the accordion is currently open or closed.
*   **Subheading (optional)**: Provides additional context or supplementary information about the content.
*   **Divider**: A visual separator between the header and the body, visible only when the accordion is open.
*   **Body**: Contains the main content, which can include forms, plain text, or other UI elements.

## Variants/States

### States

Accordions can exist in the following states to reflect user interaction or system status:

*   Closed
*   Open
*   OnHover
*   Focus
*   Disabled
*   Error

### Style Variants

The accordion supports different visual styles based on the view it's used within:

| Variant | Description                                                      | Usage Context                                          |
| :------ | :--------------------------------------------------------------- | :----------------------------------------------------- |
| Large   | This variant is optimized for larger viewports.                  | Full page layouts, large modals, etc.                  |
| Small   | This variant is designed for environments with limited real estate. | Drawers, smaller modal windows, or confined sections. |

## Properties/Options

| Property         | Type    | Description                                                                                                                                                                                                                           | Default                                       |
| :--------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------- |
| Stepper/Icon     | Boolean | Determines whether a stepper or an alternative icon is displayed. Icons are preferred for maximizing comprehension and reducing cognitive load.                                                                                           | Stepper (or as per design system default)     |
| Badge            | Boolean | Controls the visibility of an optional badge to highlight the accordion.                                                                                                                                                                | False                                         |
| Subheading       | Boolean | Controls the visibility of an optional subheading to provide extra context.                                                                                                                                                             | False                                         |
| Multiple Open    | Boolean | When `true`, allows users to open more than one accordion simultaneously. Consider enabling this if users need to cross-reference content across multiple sections. When `false`, only one accordion can be open at a given time. | False (only one accordion can be open at once) |
| Initial State    | String  | Sets the default expanded/collapsed state for the accordion. For multiple accordions, the first one defaults to `open`. For a single accordion, it defaults to `closed`.                                                                  | `open` (first of multiple); `closed` (single) |

## Best Practices

### Do's

*   **Do** allow the entire accordion component (header and body) to vertically scroll if its content exceeds the viewport height.
*   **Do** place Call to Action (CTA) buttons within the body of the accordion.
*   **Do** ensure the Heading is concise and fits on a single line.
*   **Do** truncate the Heading if it cannot fit on a single line.

### Don'ts

*   **Don't** set a `max-height` on an accordion's body that causes inline scrolling within the content panel itself. The entire accordion should scroll.
*   **Don't** place any Call to Action (CTA) buttons within the header of the accordion.
*   **Don't** allow accordion content to scroll horizontally. If content is too wide, re-evaluate layout or content structure.
*   **Don't** let body content cause inline scrolling. If the body content height is larger than the viewport, consider shortening the content or breaking it down into multiple accordions instead of applying `max-height` to the body.

## Accessibility

*   **Reduce Cognitive Load**: The option to replace a stepper with an icon is provided to maximize comprehension and reduce the cognitive burden on users.
*   **Clear Interaction**: Accordions are designed to be easily operable via click/tap on the header or CTA buttons, ensuring broad usability.
