# Skeleton Guidelines

## Overview

Skeletons should be considered while designing new pages to provide a better user experience during loading states.

## Usage Guidelines

### When to Use

*   **Long Load Times:** Use skeletons for pages or components that are expected to have longer initial load times, especially if they exceed 2 seconds.
*   **Multiple Components:** Ideal for pages, modals, or drawers that have several components loading simultaneously, such as a list or grid of cards.
*   **Consult Frontend Team:** Ask your frontend development team if the page you are designing will require longer load times.

### How to Use

*   **Mimic Layout:** Design the skeleton to accurately mimic the layout, height, and/or width of the actual components it represents.
*   **Solid Boxes:** Utilize solid boxes to indicate the overall height and width of individual components on the page, modal, or drawer.
*   **Lines:** Use lines of varying heights and widths to represent the layout and approximate content structure within components.

## Anatomy/Structure

The core elements of a skeleton component include:

*   **Single "Line":** These lines can be of any height and width, designed to fill the fixed amount of space a component's text content would occupy.
*   **Solid Box:** A solid rectangular box that can be of any height and width, designed to fill the fixed amount of space a larger component or image would occupy.

## Behaviour

### Interactions

*   **Content Animation:** When components load after a skeleton has been displayed, the new content should animate into place, and the rest of the page content should adjust smoothly (e.g., animate down).
*   **Mixed Loading Indicators:** Some components on a page may load using a skeleton, while others might use a different loading indicator, such as a spinner, depending on their specific loading behavior or data dependency.

## Variants

*   **Circular Placeholder:** A circle element can be incorporated alongside lines or solid boxes, typically used to represent avatars, icons, or other circular content placeholders.

## Best Practices

### Do

*   Design a skeleton for components within a page that are loading simultaneously and are expected to take more than 2 seconds to load.

### Don't

*   Design a skeleton that is bigger or smaller than the actual component that is loading. This helps to avoid disruptive screen jumps or reflows once the content loads.
