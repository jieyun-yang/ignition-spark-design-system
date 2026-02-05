# Modal Guidelines

## Overview

Modals are temporary, superimposed UI elements that display focused content or require user interaction without navigating away from the current page. They prevent interaction with the underlying content until dismissed.

## Anatomy

| Element | Description |
|:--------|:------------|
| **Header** | Title clearly indicating the modal's purpose. Keep short, include a verb and noun. Close icon (X) provides explicit dismissal. |
| **Content area** | Primary information or functionality for task completion. Avoid nesting modals and excessive scrollable content. |
| **Action bar** | Positioned at bottom, buttons typically aligned right. Include primary action button for task completion. |
| **Container** | The modal wrapper with overlay background |

### Content Guidelines

| Element | Guideline |
|:--------|:----------|
| **Header** | Briefly explain what the modal is about. Use "Verb Noun" format. |
| **Content area** | Provide important information about the task, consequence of an action, or next steps. |
| **Buttons** | Primary action button can contain a verb only, matching the modal title. Secondary button should typically be "Cancel". If only one button to close the modal, label it "Done". |

## Behavior

| Property | Description |
|:---------|:------------|
| **Trigger** | Typically triggered by user actions. System-triggered modals should be used judiciously. |
| **Close** | Closes via primary action (submitting data), clicking outside, or close icon (X). |
| **Position** | Horizontally centered, vertically positioned with header close to page top. |
| **Content overflow** | Default overflow is `inside`. Action bar should be sticky, scrolling occurs within content area with shadow to indicate overflow. |

## Variants

### Confirmation Modals

Provide users with a final choice before committing to an action (e.g., deleting a client).

**Guidance:**
- Secondary action: "Cancel" button should use subtle variant
- Primary action: Add an icon to the primary action button
- Content: Clearly state the outcome or consequence
- Header content: Use "Verb Noun" format (present tense)
- Icon in header: Only use warning icon if action is irreversible (e.g., "Delete", "End")
  - Revoking is reversible = no warning icon needed
  - Ending services is irreversible = display warning icon

### Decision Modals

Present users with a choice between two equally weighted actions.

**Guidance:**
- Header content: Frame as a question

### Context Modals

Provide information about the current task or inform of a system action.

**Guidance:**
- Primary action: Use "Done" as subtle variant
- Content: Clearly state the action the system is taking
- Header content: Use "Noun Verbed" format (past tense)

### Preview Modals

Preview the result of a task (e.g., previewing client emails for proposals).

**Guidance:**
- Header content: Use "Verb Noun" format (e.g., "Preview proposal email")
- Content overflow: Header and footer remain sticky while content scrolls
- Action bar: Use subtle "Done" button

### Input-Edit Modals

Allow users to add or change data without leaving the current page.

**Guidance:**
- Header content: Use "Verb Noun" format (present tense)
- Action bar: Primary action button should match header. "Cancel" should be subtle variant.
- **When to use modal instead of drawer for input:**
  - If the task is a single step
  - If the task is a sub-step originating from a drawer
  - If the UI is accessed from multiple flows

### Brand Promise Modals

System-triggered modals shown first time users navigate to specific areas.

### Benefits Modals

System-triggered modals displayed after first-time actions are completed.

## Sizing

| Size | Width |
|:-----|:------|
| XXSmall | 364px |
| XSmall | 416px |
| Small | 468px |
| Medium | 546px |
| Large | 624px |
| XLarge | 728px |
| XXLarge | 768px |
| One-off 90% | 90% of viewport width |

## Best Practices

### Do's

- Appropriately label the modal and its buttons
- Provide enough context to enable confident task completion
- Make the action bar sticky when scrolling is required
- Position buttons on the right of the action bar
- Always include a primary action button for task completion
- Button labels should include a verb and match the modal title

### Don'ts

- **Don't use modals for displaying error messages**
- **Don't nest modals** (opening a modal from within another modal)
- Don't use system-triggered modals unless critical - they interrupt mid-task

## Accessibility

- Ensure focus is trapped within the modal while open
- Return focus to the triggering element when modal closes
- Provide clear keyboard navigation (Tab to cycle, Esc to close)
- Use appropriate ARIA attributes (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`)
- Ensure sufficient color contrast for all text and controls
