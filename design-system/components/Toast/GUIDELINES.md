# Toast Guidelines

## Overview

Toasts are temporary, non-modal messages designed to provide brief, non-intrusive feedback to users regarding an outcome or event without interrupting their current workflow.

## Anatomy/Structure

A default toast comprises the following visual elements:

*   **Icon**: Indicates the specific type of toast (e.g., success, error) and utilizes default styles.
*   **Heading**: A concise textual description of the situation or outcome.
*   **Close button**: An interactive element (typically an "X" icon) that allows the user to manually dismiss the toast.
*   **Body**: An optional area that provides additional context or more detailed information related to the situation.

## Usage Guidelines

Toasts should be employed to deliver timely and relevant feedback to users following an action. The selection of the toast type is determined by the nature of the feedback:

| Type          | Description                                                                                                                                                                                                                                                                         |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Success**   | Confirms a successful action or task completion. It closes automatically after 5 seconds, unless an action button is present, in which case it remains visible until manually dismissed.                                                                                              |
| **Error**     | Informs the user that an error occurred or that a task was unsuccessful. Depending on the configured close behavior, it either remains until closed manually (Dual action) or closes automatically (Single action).                                                                    |
| **Warning**   | Warns the user of an issue. Depending on the configured close behavior, it either remains until closed manually (Dual action) or closes automatically (Single action).                                                                                                                  |
| **Information** | Provides neutral, general information. Depending on the configured close behavior, it either remains until closed manually (Dual action) or closes automatically (Single action).                                                                                                   |
| **Waiting**   | Displayed while the system is actively processing a task. Once the process is complete, this toast will transition to a corresponding success or error toast.                                                                                                                         |

## Variants/States

Toasts can be configured into different variants to suit various informational needs:

| Variant             | Description                                                                                              |
| :------------------ | :------------------------------------------------------------------------------------------------------- |
| **Without body copy** | Used when the heading provides sufficient information and no additional contextual details are required. |
| **With a link**     | Includes one link to direct the user to an area where further action is required or recommended.         |
| **With 2 links**    | A unique variant exclusively used for bulk actions that involve two distinct lists or options.           |

## Properties/Options

### Trigger

Toasts are triggered as a result of a user action and appear immediately after the action.
*Example: After submitting a form to provide feedback that the submission was successful.*

### Close Behavior

The auto-closing behavior of a toast can be adjusted per toast instance. Users can also manually close any toast by clicking the close icon (X).

**Dual action:**
- **Success:** Closes automatically after 5 seconds, unless there is an action button (then remains until closed manually).
- **Error, Warning, Information:** Remain until closed manually.
- **Waiting:** Remains until the process it's waiting on has completed, then transitions to a success or error toast.

**Single action:**
- **Success:** Closes automatically after 5 seconds, unless there is an action button.
- **Error, Warning, Information:** Close automatically.
- **Waiting:** Remains until the process it's waiting on has completed.

### Sizing

When the text is too long for the available horizontal space, it wraps to form another line.

### Position

Toasts are positioned as an overlay on the bottom-left of the page.

## Best Practices

### Do

*   **Use an informative heading**: Heading should be 1 line in length and briefly tell the user what's happened. If body copy is not needed, leave it out.
*   **Use plain language**: Explain the problem briefly and clearly in a way that a user would understand it. Try to limit the text to 2 lines or less.

### Don't

*   **Avoid generic headings**: Avoid generic headings like "Success". Exception: "Error" toasts where content must come from the backend.
*   **Avoid jargon and technical speak**: Most of our customers aren't software developers, so explain the problem like a human would to another human.
