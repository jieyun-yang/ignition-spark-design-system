# Progress Bar Guidelines

## Overview

The Progress bar component visually communicates the completion status of a process or a set of tasks, providing users with immediate feedback on their progress.

## Usage Guidelines

### When to use

*   **Personalised Onboarding**: Specifically on the "Get started" page, to communicate the number of onboarding tasks the user has completed and/or still needs to complete.

## Anatomy/Structure

The Progress bar is composed of the following key elements:

| Element   | Description                                                     |
| :-------- | :-------------------------------------------------------------- |
| **Progress** | The overall visual representation of advancement.               |
| **FillTrack** | The primary bar that fills to indicate the current completion level. |
| **Steps** | *(Optional)* Discrete markers that can represent stages within the overall progress. |

## Properties/Options

The following properties define the visual styling and layout of the Progress bar:

| Property            | Value                       | Description                                                                                                   |
| :------------------ | :-------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Size**            |                             |                                                                                                               |
| Height              | 8px                         | The fixed height of the progress bar track.                                                                   |
| Width               | fill container              | The progress bar will expand to occupy the full width of its parent container.                                |
| **Margin**          |                             |                                                                                                               |
| Between track + steps | 16px                        | The spacing applied between the main progress track and any optional step indicators.                         |
| **Border Radius**   | 2px                         | The curvature applied to the corners of the progress bar elements.                                            |
| **Colour**          |                             |                                                                                                               |
| Track               | Gray/200                    | The colour of the unfulfilled portion of the progress bar track.                                              |
| Fill                | Primary/DarkGreen/500       | The colour of the fulfilled portion of the progress bar, indicating progress.                                 |
| **Text**            | *(For associated labels)*  |                                                                                                               |
| Size                | Body/Extra small            | The font size for any text associated with the progress bar (e.g., step labels, percentage complete).         |
| Colour              | Gray/600                    | The text colour for any text associated with the progress bar.                                                |

## Best Practices

*   **Clarity**: Ensure the progress bar clearly communicates the user's progress through a sequence of tasks or a process.
*   **Consistency**: Apply the progress bar consistently within the Personalised Onboarding flow to maintain a predictable user experience.
*   **Accuracy**: The progress indicated should always accurately reflect the user's actual completion status.
