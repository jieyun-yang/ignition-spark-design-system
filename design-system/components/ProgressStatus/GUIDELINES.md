# Progress Status Guidelines

## Overview

The Progress status component is used to visually represent the advancement of a multi-stage process or workflow. It provides users with a clear, at-a-glance understanding of their current position within a defined sequence of steps.

## Usage Guidelines

Use the Progress status component in contexts where the user needs to track the completion or progression through a series of stages.

*   **Payments Collections table**: Used to visualise the progress of the payments process.
*   **Deals kanban board**: Used to visualise the progress of the proposal process.

## Anatomy

The Progress status component is composed of the following visual elements:

| Element             | Description                                                   |
| :------------------ | :------------------------------------------------------------ |
| Progress stage label| A textual label indicating the name of the current stage.     |
| Background          | The visual backdrop for the component elements.               |
| Stage counter       | A numerical or visual indicator showing the current stage in relation to the total stages. |
| Progress bar        | A graphical bar that visually fills to represent completion within a stage or overall process. |

## Best Practices

### Do

*   Use semantic colours to identify positive, critical, or negative aspects of the process, providing immediate context to the user.

### Don't

*   Do not leave out a label describing the stage of the process; every stage should be clearly identified.

---

## Related Patterns

### Step Indicator

The Step Indicator component visually guides users through a multi-step process, displaying their progress and the current step within a defined sequence. It helps users understand where they are in a journey, which steps they have completed, and what remains.

#### Anatomy

*   **Step Indicator**: The primary visual element representing an individual step (e.g., a numbered circle, a distinct icon).
*   **Step Title**: Descriptive text accompanying the indicator, providing a concise explanation of the step's content or purpose.

#### Variants

**In-app Variant** - Supports the following states:
*   **Active**: Denotes the current step the user is on or interacting with.
*   **Completed**: Indicates a step that has been successfully finished or passed.
*   **Inactive**: Represents a future step that has not yet been started.
*   **Warning**: Highlights a step that requires immediate attention, has encountered an issue, or needs review.

**Client Portal Variant** - Specifically tailored for client portal interfaces.

#### When to Use

*   **Onboarding tasks**: To guide new users through initial setup processes or introductory tours.
*   **Payments set up**: To illustrate the sequential stages involved in configuring payment methods or billing information.
*   **NPE (New Product Experience)**: To walk users through the introduction of new features, products, or significant updates.
*   **Client portal - proposal**: To track the status or various stages of a proposal within a client-facing portal.

---

### Progress Stepper

The Progress Stepper is a visual component used to guide users through a multi-step process, clearly indicating their current position within a defined sequence of tasks or stages.

#### When to Use

*   **Guiding Multi-Step Processes**: The user needs to complete a series of discrete steps to achieve a larger goal.
*   **Visualizing Progress**: It's important for users to understand how much progress they've made and what remains.
*   **Linear Workflows**: The process is inherently linear, requiring completion of one step before proceeding to the next.

#### When NOT to Use

*   **Single-Step Tasks**: The process can be completed on a single screen without distinct stages.
*   **Non-Linear Processes**: The user can jump between steps arbitrarily without completing them in order.
*   **Too Many Steps**: For processes with an excessive number of steps (e.g., more than 7-10), consider breaking down the process.

#### States

*   **Upcoming (Inactive)**: Represents a step that has not yet been started. Usually not clickable unless navigation is enabled.
*   **Active (Current)**: Represents the step the user is currently on. Highlighted with a primary brand color.
*   **Completed**: Represents a step that has been successfully finished. Often indicated with a checkmark icon.
*   **Error**: Represents a step that has encountered an error or requires attention. Uses danger/error color.

#### Best Practices

**Do:**
*   Keep step labels concise and clear (e.g., "Account Details" instead of "Tell us about your account").
*   Use the stepper for truly sequential processes.
*   Provide clear visual feedback for the active, completed, and upcoming states.
*   Allow users to go back to previous steps, especially for reviewing or editing information.
*   Provide "Save & Continue" or "Next" buttons within the step's content area for progression.

**Don't:**
*   Use a stepper for non-linear or optional-only processes where order doesn't matter.
*   Hide the stepper; it should always be visible to maintain user orientation.
*   Use too many steps (aim for 3-7 for optimal user experience).
*   Automatically advance the user to the next step without their explicit action.
