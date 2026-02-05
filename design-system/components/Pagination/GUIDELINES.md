# Pagination Guidelines

## Overview

The Pagination component provides controls for navigating through large sets of data, allowing users to access different pages of results. It is often used in conjunction with or as an alternative to a "Load more" pattern, depending on the specific use case and data volume.

## Usage Guidelines

Use Pagination or Load more components to manage the display of extensive lists and data tables effectively.

**When to use Pagination:**
*   For data tables.
*   For dedicated pages where users need to navigate specific result sets.

**When to use Load more:**
*   For smaller lists, such as summaries or dashboard pages, where the total number of items is not expected to be excessively large.

**Placement:**
*   Display pagination controls at the bottom of a list or table.
*   Display the Load more button at the bottom center of the results.

**Pagination Display:**
*   Display a maximum of 10 pages by default.
*   Always display the selected page.
*   Always display 'Previous page', 'Next page', 'First page', and 'Last page' navigation controls.

## Anatomy/Structure

The Pagination component includes several interactive elements for navigation, while the Load more component is a single action button.

**Pagination Elements:**

*   **First page icon button:** Navigates the user to the first page of results (`<<`).
*   **Previous page icon button:** Navigates the user to the previous page of results (`<`).
*   **Selected page button:** Indicates the currently active page.
*   **Default page button:** Represents other available pages.
*   **Next page icon button:** Navigates the user to the next page of results (`>`).
*   **Last page icon button:** Navigates the user to the last page of results (`>>`).

**Load more Element:**

*   **Load more button:** An interactive button that, when clicked, displays additional items in the list.

## Variants/States

The system supports both traditional pagination and a "Load more" pattern, with specific behaviors and styling variations across different contexts.

**General Behaviors:**

*   **Pagination:** Typically displays fixed navigation controls for moving between discrete pages.
*   **Load more:** Extends the current list by fetching and appending more items, often with a visual loader.

## Properties/Options

| Property/Context           | Type/Value                                            | Description                                                                                             | Default/Preferred                                                                                                                                              |
| :------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxPagesDisplayed`        | Number                                                | Maximum number of page buttons displayed at one time in the pagination component.                       | 10                                                                                                                                                             |
| `itemsPerPage` (Load more) | Number                                                | Number of items loaded per 'Load more' action.                                                          | Varies by context (5-25)                                                                                                                                       |
| `loadMoreButtonPosition`   | String (`bottom-center`, `bottom-left`)             | Placement of the 'Load more' button relative to the displayed results.                                  | `bottom-center` (general), `bottom-left` (preferred for billing/payments)                                                                                      |
| `loadMoreLoaderColor`      | String (`orange`, `purple`)                           | Color of the loader animation displayed during a 'Load more' action.                                    | `purple` (preferred)                                                                                                                                           |
| `loadMoreButtonText`       | String                                                | Text displayed on the 'Load more' button.                                                               | "Load more..." (preferred)                                                                                                                                     |

## Best Practices

### Do's

*   Display pagination controls at the bottom of a list or table.
*   Display a maximum of 10 page numbers by default in the pagination component.
*   Always display the selected page number.
*   Always display 'First page', 'Previous page', 'Next page', and 'Last page' navigation controls.
*   Display the Load more button at the bottom center of the results (general).
*   Ensure pagination is always visible at the bottom of tables, even while scrolling.
*   Use "Load more..." as the default text for the Load more button.
*   Use a purple loader for Load more actions.

### Don'ts

*   Do not display pagination controls at the top of a list.
*   Do not display more than 10 page numbers at a time in the component.
*   Do not display the Load more button at the top of a list.
*   Do not make pagination visibility dependent on user scroll (i.e., hide it until scroll to bottom).
*   Do not use specific, bolded text for the 'Load more' button (e.g., "Load more active services").

## Related Components

*   **Data Tables:** Primary context for Pagination.
*   **Summary Pages:** Suitable for "Load more" pattern.
*   **Dashboard Pages:** Suitable for "Load more" pattern.
