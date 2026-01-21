# Alert Guidelines

## Overview

Alerts provide timely, prominent feedback about actions or situations. They appear to convey success, provide information, warn of potential issues, or indicate errors, either remaining on screen until resolved or dismissed by the user.

## Anatomy

Alerts are comprised of several configurable elements:

| Property               | Type         | Description                                                                 | Optional   |
| :--------------------- | :----------- | :-------------------------------------------------------------------------- | :--------- |
| Icon and background color | (Visual)     | Conveys the alert's type and status visually.                               |            |
| Title                  | String       | An optional heading for the alert, providing a concise summary.             | Optional   |
| Description            | String       | The main message of the alert, explaining the situation or action.          |            |
| CTA button             | Component    | An optional call-to-action button for the user to take a specific action.   | Optional   |
| Close button           | Component    | Allows the user to manually dismiss the alert.                              | Optional   |

## Usage Guidelines

Alerts are used to provide immediate feedback based on different situations and user needs.

### Variants

Alerts come in several semantic types, each designed for a specific context:

| Type        | Description                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| Success     | Provide feedback that an action was completed successfully.                                             |
| Information | Provide important information or helpful tips in the situation.                                         |
| Warning     | Tell a user that proceeding with the existing parameters may have potentially unwanted consequences.    |
| Error       | Tell a user something went wrong and that needs their attention before they can proceed.                |
| Premium     | Tell a user about premium features.                                                                     |

## Behaviour

### Interactions

Alerts remain on screen until the situation is resolved. If a Close (X) button is provided (which is optional), the user can dismiss the alert manually.

## Best Practices

### Do

*   If the user needs to take action, use an inline link.
*   Display one alert at one time. Consider the urgency and context when choosing which alert to display.

### Don't

*   Avoid using buttons for actions within alerts.
*   Avoid displaying multiple alerts at one time.
