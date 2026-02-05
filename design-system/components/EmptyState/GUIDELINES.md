# Empty State Guidelines

## Overview

Empty states are UI components displayed when a section or page has no content or data to show. They serve to inform users about the current state, provide context, and guide them on how to populate the empty area. They fall into two main categories: Empty states (for areas that have never had content, or content was removed) and Zero states (for search or filter results with no matches).

## Anatomy

Empty states are typically composed of the following structural elements:

| Component | Description |
| :-------- | :---------- |
| Visual    | An image, illustration, or icon that conveys a mood or context. |
| Header    | A concise title explaining the current state. |
| Body      | Additional explanatory text, often including instructions or next steps. |
| Action    | An optional call-to-action (CTA), typically a button, to help users add content or resolve the empty state. |

## Usage Guidelines

Empty states should always provide context and guidance rather than leaving users guessing.

### When to use Empty States

*   **Empty state (Full page)**:
    *   **Context**: Displayed in prominent areas when content or data hasn't been created yet, or data was deleted or moved. (e.g., Client billing schedule)
    *   **Imagery Mood**: Neutral (e.g., "nothing to show at this time").
    *   **Guideline**: Ensure pending collection and rejected collections utilize the large empty state if there are no items to display.
*   **Empty state (Medium container)**:
    *   **Context**: Displayed in a medium container on a page when content or data hasn't been created yet, or data was deleted or moved. (e.g., Client summary payment details)
    *   **Imagery Mood**: Neutral (e.g., "nothing to show at this time").
*   **Empty state (Small container)**:
    *   **Context**: Displayed in a small container that may be repeated on a page when content or data hasn't been created yet, or data was moved or deleted. (e.g., Client summary)
*   **Zero state**:
    *   **Context**: Displayed when a search or filter yields no results. (e.g., Pipeline search results)
    *   **Imagery Mood**: Negative (e.g., "no results").
    *   **Content**: The copy should communicate actionable steps to resolve the no-results state.
    *   **Guideline**: Implement the zero state component in searchable tables like the client list and service library when no data matches a search or filter.

## Behaviour

The behavior of empty states is dictated by the context and the type of information displayed.

*   **Zero state (Pipeline)**:
    *   Is displayed when a search is performed or a filter is selected that doesn't display results.
*   **Empty state - Large (Library/Proposals/Templates)**:
    *   **Primary Use**: Displayed in prominent areas that have never had items added to them, serving to educate a new user.
    *   **Secondary Use**: Displayed in areas where data has yet to be added, was deleted, or moved.
    *   **Affordance**: The empty state prominently features a button to add content.
*   **Empty state - Medium**:
    *   **Primary Use**: Displayed in less prominent containers where data has yet to be added, was deleted, or moved.
    *   **Affordance**: The empty state displays a button to add content.
*   **Empty state - Small**:
    *   **Primary Use**: Is displayed in less prominent containers where data has yet to be added, was deleted, or moved.
    *   **Affordance**: The empty state does not display a button.

## Variants

Empty states come in several variants, each tailored for specific contexts and informational needs.

| Variant             | Imagery                                     | Content                      | Action                                          |
| :------------------ | :------------------------------------------ | :--------------------------- | :---------------------------------------------- |
| **Zero state**      | Negative imagery                            | Header and body              | No button                                       |
| **Empty state Large** | Option of Large neutral imagery, lofi-illustration, or icon | Header, body                 | Primary CTA and optional Secondary CTA          |
| **Empty state Medium** | Medium icon (Font awesome, can be changed) | Header, body                 | 1 button                                        |
| **Empty state small** | None                                        | No Header, body (body only) | None                                            |

## Properties/Options

### Imagery

*   **Zero state**: Negative mood imagery.
*   **Empty state Large**: Options include large neutral imagery, lofi-illustrations, or an icon.
*   **Empty state Medium**: Uses a medium icon (e.g., Font Awesome, configurable).
*   **Empty state Small**: No imagery.

### Content

*   **Zero state**: Includes a header and body text.
*   **Empty state Large**: Includes a header and body text.
*   **Empty state Medium**: Includes a header and body text.
*   **Empty state Small**: Includes body text only (no header).

### Action

*   **Zero state**: No action button.
*   **Empty state Large**: Includes a primary Call-to-Action (CTA) button and an optional secondary CTA.
*   **Empty state Medium**: Includes a single action button.
*   **Empty state Small**: No action button.

## Best Practices

### Do's

*   **Add Affordance**: If it makes sense for the user to add content or data, provide a clear affordance (e.g., a button) to do so.
*   **Include Mood**: In large empty or zero states, include imagery that conveys an appropriate mood (positive, neutral, or negative) relevant to the situation.
*   **Position Correctly**: Place the empty state in the exact position where the actual items would normally be displayed.

### Don'ts

*   **Avoid Ambiguity**: Do not leave users wondering why an area is empty or how they can add content to it. Always provide context and guidance.

## Spacing/Sizing

*   **Zero State Imagery**: The height of the imagery in a zero state is typically 152px.
*   **Empty State Full Page Imagery**: Imagery sizes for full-page empty states can be inconsistent and depend on the specific context of the page.
