# Guided Wizard

## Overview

A Guided Wizard is a UI pattern that guides users through a structured, multi-step process. It breaks down complex tasks, forms, or onboarding flows into smaller, manageable sections.

## Key Benefits

- **Streamlined Onboarding:** Facilitates new user setup, preference customization, and feature learning
- **Simplified Complex Processes:** Breaks down long forms into digestible steps, enhancing accuracy and completion rates

## When to Use

### Good Use Cases

- **Onboarding new users:**
  - Account setup
  - Customizing preferences
  - Learning key product features
  - *Example:* Creating a demo proposal

- **Complex forms and data collection:**
  - Breaking long forms into digestible sections
  - Improving accuracy and completion rates
  - *Example:* CMI flow after sign-up

### When NOT to Use

| Scenario | Better Alternative |
|:---------|:-------------------|
| Simple content organization | **Accordions** - for expandable sections without rigid flow |
| Contextual input (fields appear based on input) | **Dynamic Forms** - smoother, more intuitive experience |
| Clear, smaller stages | **Steppers** - linear progress indicator may suffice |

## Variants/States

### Intro
Initial state introducing the process, explaining its purpose, or gathering initial information.

### Loading
Content or data being fetched or processed, displayed between steps or on initial load.

### Transition
Visual and interactive changes when moving between steps.

## Best Practices

### Do's
- **Prioritize clarity:** Each step should have a clear purpose
- **Minimize steps:** Only include necessary steps to avoid user fatigue
- **Provide progress indication:** Show where users are in the process
- **Allow back navigation:** Users should revisit previous steps
- **Offer exit points:** Clear options to save progress and exit

### Don'ts
- Don't include unnecessary steps
- Don't hide progress from users
- Don't trap users without ability to go back or exit

## Related Components

- **Accordions** - For expandable sections without sequential flow
- **Dynamic Forms** - For progressive field display based on input
- **Steppers** - For simpler linear progress indication
