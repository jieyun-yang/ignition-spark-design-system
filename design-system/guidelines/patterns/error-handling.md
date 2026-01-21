# Error Handling

## Overview

Error handling provides clear, timely, and actionable feedback to users when issues arise, helping them understand what went wrong and how to resolve it.

## Error Types

| Error Type | Display Method | When to Use |
|:-----------|:---------------|:------------|
| **Input errors - text** | Red text below field | Display close to error source |
| **Field error - tooltip** | Tooltip near field | When space doesn't allow text below |
| **Alert errors** | Error alert + disabled button | When user attempts to complete workflow |
| **Table activity errors** | Red text + hover tooltip | Show error reason on hover |
| **Bulk process toast errors** | Toast with link to failed items | Navigate to list of failed items |
| **404 / Access denied** | Full page error | URL content removed or no permissions |
| **List error** | Red text warning | Low impact, doesn't block but warns of missing data |

## Error Anatomy

- **Text:** Red, positioned close to error source (below input field)
- **Tooltips:** For field errors when space is limited, or hover details for table errors
- **Alerts:** System-level messages, may disable further workflow actions
- **Links:** Red links to navigate to detailed error lists

## Triggers and Behavior

| Scenario | Trigger & Behavior |
|:---------|:-------------------|
| **Form errors** | Trigger on form submission or navigating to next step |
| **Placeholder errors** | Red placeholder if user edits HTML; tooltip on hover |
| **Bulk process errors** | Warning toast on submission; link to view failed items |
| **List error** | "Email missing" on submission when contact lacks email |
| **Table activity errors** | Triggered on bulk action failure; red text + tooltip |

## Best Practices

### Do's
- Display error close to error source
- Safeguard against mistakes - warn users before errors occur
- State the issue, cause, and clear resolution
- Use plain language, avoiding technical jargon

### Don'ts
- Don't display errors prematurely (before submission)
- Don't over-explain how the system works
- Don't blame the user
- Don't use generic terms like "invalid" without context

## Related Components

- Alert
- Toast
- Modal
- Tooltip
