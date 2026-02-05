# Tooltip Guidelines

## Overview

Tooltips are small, ephemeral UI elements that provide brief, contextual information on hover or upon validation of an error. They typically include an arrow to visually indicate their associated element.

## Usage Guidelines

Use tooltips in the following scenarios:

*   **On hover**: Display a tooltip when a user hovers over an interactive element.
*   **Information cue**: Display a tooltip when a user hovers over a visual cue or info icon to provide additional context.
*   **Error validation**: Display a tooltip on validation of an error to provide feedback to the user.

## Anatomy/Structure

Key structural elements of a tooltip include:

*   **Arrow Container**: A visual arrow that points to the element the tooltip refers to.
*   **Tooltip Content**: The area containing the descriptive text.

## Variants/States

Tooltips support the following states:

*   **Informational**: Used to provide general guidance or supplementary details.
*   **Error**: Used to display error messages or validation feedback.

## Properties/Options

### Interactions

*   **Display Trigger**: Tooltips primarily display on hover.

### Styling

*   **Sizing**:
    *   **Max-width**: 260px. If text exceeds this horizontal space, it wraps to the next line.
*   **Positioning**:
    *   **Arrow Positioning**: The arrow's position is contextual to the layout and placement of the tooltip on the screen.

## Best Practices

### Do

*   Keep the content brief, like a short tip.
*   Include a visual cue (e.g., an info icon) to indicate that more information is available.

### Don't

*   Do not use a popover where a tooltip is appropriate.
*   Avoid putting excessive content in a tooltip. If content is very descriptive, link the user to a help article instead.
*   Strive for one line of content. Two lines are acceptable, but avoid three or more lines.
*   Do not use an error tooltip on a field unless there is a validation error to display.

## Spacing/Sizing

*   **Maximum Width**: Tooltips have a maximum width of 260px. Text will wrap to a new line if it exceeds this width.
