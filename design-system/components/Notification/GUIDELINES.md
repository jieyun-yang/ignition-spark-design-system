# Notification Guidelines

## Overview

Notifications inform users about important, time-sensitive events within the system. They are designed to highlight actions that attribute to revenue, sales, or client activities, ensuring users are aware of critical updates without disrupting their workflow. Notifications are typically displayed in a bell icon popover.

## Anatomy/Structure

The Notification component comprises several key visual elements:

*   **Bell icon**: Indicates unread notifications.
*   **Avatar**: Displays the actor's initials (e.g., KN).
*   **Event**: A concise description of the event (refer to content guidelines).
*   **Time Elapsed**: Shows how long ago the event occurred (e.g., 4h ago, 1m ago, 2d ago, 4w ago).
*   **Unread Indicator**: A visual cue for unread notifications.
*   **Client Name**: The name of the client associated with the event (e.g., Neely Family Trust).
*   **Object Involved**: The specific object related to the event (e.g., PROP 1234).
*   **User Performed Event**: The user who performed the event (e.g., by Kara Neely).
*   **Popover Header**: The title area of the notifications popover.
*   **Mark all as read button**: An action to clear all unread indicators.
*   **Notifications settings button**: Provides access to notification preferences.

## Usage Guidelines

Notifications are categorized by urgency to determine when and how they should be used.

### Medium Urgency

For non-actionable events that users want to know about, typically attributing to revenue, sales, or client actions.

**Events:**
*   Payment collected
*   Payment disbursed
*   New payment method added
*   Verification email sent
*   Bank account verified
*   Payment request reminder sent
*   Payment receipt sent

### High Urgency

For important events that users need to know about when they occur, typically requiring action on the same day of receiving the notification.

**Events:**
*   Billing due today
*   Credit card expires today
*   Payment failed
*   Invoice failed to send
*   Bank account needs verification
*   Proposal assigned to you (review/approval)
*   Email bounced
*   Integration disabled (lost connection)
*   Proposal accepted

### Critical Urgency

For critical events requiring immediate action, which if unaddressed, can disrupt a customer's business or cashflow. These notifications have special rules:

*   Users cannot unsubscribe from them.
*   They are sent to all administrators.
*   They might have a slightly higher visual prominence.

**Events:**
*   Disbursals disabled
*   Account subscription issues

### When NOT to use a bell notification

Avoid using bell notifications for:

*   **Low urgency events:** Reminders about future events (e.g., upcoming due dates, expiring proposals/cards, tasks).
*   **Tasks:** Reminding users of tasks is a different initiative and should not be handled by bell notifications.

## Behaviour

### States

Notifications have several visual states:

*   **Unread Default**
*   **Unread Hover**
*   **Read Default**
*   **Read Hover**

### Interactions

*   **Bell Icon Badge**: The number on the bell icon represents the count of **unseen** notifications. Once the bell icon is clicked and the notification menu opens, this badge disappears.
*   **Unread Indicator (Purple Dot)**: A purple dot indicates an **unread** notification. This dot disappears once the specific notification has been clicked.
*   **Mark all as read**: Clicking the "Mark all as read" button will remove all purple unread dots from visible notifications.
*   **Notification Retention**: Read notifications automatically disappear after 8 weeks.
*   **Empty State**: If a user does not receive any new notifications within an 8-week period, an empty state will be displayed in the notification popover.

## Variants

*   **Comment/Note Variant**: If a notification includes a comment or a note, this additional text is displayed directly below the main notification content and timestamp. The comment/note is truncated to appear on a single line.

## Content

### Writing Patterns

| Event Type          | Example                                                                 | Writing Pattern                                                                                                                                                                                                                                                                                        |
| :------------------ | :---------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Assigned Events     | "You have a review request" or "Kim Berry has a review request"         | Used for tasks assigned to a specific user (e.g., proposal reviews). The actor field will contain the preposition "from" followed by the name of the person who assigned the event (e.g., "from Kara Lemon").                                                                                          |
| Non-Assigned Events | "3 invoices deployed to Xero"                                           | Used for general events that cannot be assigned to a particular user. The actor field will contain the proposition "by" followed by the name of the person who performed the event, if applicable (e.g., "by Kara Lemon").                                                                                |

## Best Practices

### Do's

*   **Use the actor's initials** as the avatar.
*   **Display a spark icon** if the notification doesn't have an actor and the event is triggered by the system.
*   **Truncate content** of the second line of text to only appear on one line.
*   **Truncate notes/comments** to only appear on one line.

### Don'ts

*   **Do not create notifications for tasks**. Tasks are handled by a separate initiative.
