# Date Picker Guidelines

## Overview

A Date picker is a user interface component that allows users to select a single date from a calendar. It typically consists of a date input field and an interactive calendar overlay, providing a guided way to select specific dates for various purposes.

## Anatomy/Structure

The Date picker component is composed of the following visual elements and their functions:

*   **Date field**: This is the primary text input area. Selecting this field opens the calendar component. Users have the option to manually input dates directly into this field. Once a date is selected from the calendar, it will be displayed in this text input.
*   **Calendar**: This is the interactive menu or overlay that appears when the Date field is activated, allowing a date to be visually selected.
*   **Previous and next month controls**: These are navigation elements within the calendar that enable the user to move forward or backward one month at a time to find the desired date.
*   **Today's date**: A specific indicator on the calendar highlighting the current day.
*   **Outside month date**: Refers to dates displayed within the calendar grid that technically belong to the preceding or succeeding month, often styled to differentiate them from the current month's dates.
*   **Selected date**: The date that has been chosen by the user, typically shown with distinct visual styling (e.g., a background highlight).
*   **Unselected date**: Any date on the calendar that has not been chosen by the user.

## Usage Guidelines

The Date picker component should be utilized in contexts where users need to specify a date. Key usage scenarios include:

*   Specifying proposal start dates or "Bill on" dates within systems like the New Payment Experience (NPE).
*   Scheduling invoice or payment collection dates.
*   Applying date-based filters on data displays, such as in pipeline or client pages (e.g., filtering by "Billing due date").

## Variants/States

### Date field States

The date input field can display in several states, each indicating a different interaction or condition:

| State    | Description                                                                     |
| :------- | :------------------------------------------------------------------------------ |
| Default  | The date field defaults to displaying today's date in both its placeholder and within the calendar when the calendar is opened. |
| Focus    | The state when the field is actively selected for input.                        |
| Invalid  | The state when an invalid date has been entered.                                |
| Disabled | The state when the field is not interactive.                                    |

### Calendar date States

Individual date cells within the calendar can also exhibit various states, often indicated by distinct visual styling. These states can apply differently depending on whether the date falls within the current month, a previous/next month, or if it is today's date.

| State           | Current month | Prev/Next month | Today |
| :-------------- | :------------ | :-------------- | :---- |
| Default state   | Normal style  | Muted style     | Highlighted |
| Hover state     | Hover highlight | Hover highlight | Hover highlight |
| Disabled        | Grayed out    | Grayed out      | Grayed out |
| Selected        | Selected highlight | Selected highlight | Selected highlight |

## Behavior

### Opening the calendar

The calendar opens when the user clicks or focuses on the date field.

### Selecting a date

Users can select a date by clicking on a date cell in the calendar. The selected date is then displayed in the date field.

### Next and previous month

Users can navigate between months using the previous and next month controls in the calendar header.

### Closing the calendar

The calendar closes when a date is selected, when the user clicks outside the calendar, or when the user presses Escape.
