# Product Examples

## Overview

Guidelines and best practices for various UI components and content patterns, ensuring consistency and optimal user experience.

## Activity Log

### Writing Patterns

| Type | Pattern | Example |
|:-----|:--------|:--------|
| Info | `[Event] by [user][Additional info]` | "Payment collection scheduled for 21 September 2023 by Kimberley Peters" |
| Warning | `[Event][Additional info]` | "Refund request declined" |
| Success | `[Event][Additional info]` | "Proposal automatically accepted as all Signatories have signed" |
| Error | `[Event]: <Reason>` | "VISA •••• 4242 marked as invalid. Reason: Bank account closed" |

### Edit Activities

**Pattern:** `{Item} edited by {user}. Reason: <reason>{FieldName}: {Old value} → {New value})`

**Example:** "Service edited by Kimberley Peters. Reason: Price increase. Billing mode: Automatic → Manual. Price: $200.00 → $220.00"

- **Do:** Create 1 entry per field in the same session
- **Don't:** Combine multiple field edits into a single entry

## Button Labels

### Action Buttons

- Use verb + noun to clearly indicate action: "Add service"
- Use 1-word verb when action is clear from context: "Export"
- Omit pronouns (your, my), adjectives (new), articles (a, the)
- Global action button: labeled "New" for dropdown flexibility
- Index pages: format "New <noun>" for consistency

## Error Messages

### Principles

- Use plain language, avoid technical jargon
- Tone: neutral and approachable (never blame user)
- Be specific: avoid generic terms like "invalid"
- State issue, cause, and clear resolution

### Inline Errors

| Context | Do | Avoid |
|:--------|:---|:------|
| Required field empty | "Enter an email address" | "Invalid email:" |
| Wrong format | "Email must be in format someone@example.com" | "Invalid email" |

## Field Labels

### Label Guidelines

- Communicate clearly what information to input
- Keep concise
- Use regionalized labels where required
- **Don't:** Use verbs like "enter", "select" in labels
- **Don't:** Add colons to field labels

### Caption Guidelines

- Provide clarity on field purpose
- Guide how to complete the field
- Specify formatting requirements
- Omit if field is self-explanatory

## Modals

### Confirmation Modal

| Element | Guideline |
|:--------|:----------|
| **Title** | `<Verb><noun>?` (max 30 chars) |
| **Content** | Communicate consequences |
| **Primary Button** | `<Verb>` or `<Verb><noun>` matching title |
| **Secondary Button** | "Cancel" |

- **Don't:** Ask if user is "sure"
- **Don't:** Use "Cancel" as both primary and secondary action

### Completed Modal

| Element | Guideline |
|:--------|:----------|
| **Title** | `<Verb><past-tense noun>` (max 30 chars) |
| **Content** | What happens next |
| **Action** | "Done" |

### Task Modal

| Element | Guideline |
|:--------|:----------|
| **Title** | `<Verb><noun>` (max 30 chars) |
| **Content** | What to do (omit if clear from heading) |
| **Primary** | `<Verb>` matching title, or "Done" |
| **Secondary** | "Cancel" |

## Toasts

### Success Toast

| Element | Guideline |
|:--------|:----------|
| **Header** | `<Noun> <Past tense verb>` (1 line) |
| **Body** | Optional, more context (max 2-3 lines) |
| **Action** | Optional, `<Verb><Noun>` |

### Failure Toast

| Element | Guideline |
|:--------|:----------|
| **Header** | `<Noun> failed to <verb>` (1 line) |
| **Body** | Explain why or how to resolve (max 2 lines) |
| **Action** | Optional, button to resolve or view details |

## Alerts

| Type | Tone | Content | Example |
|:-----|:-----|:--------|:--------|
| **Warning** | Calm but cautionary | What's happening, what's at stake | "This proposal will be moved to draft" |
| **Error** | Resourceful, neutral | Issue, why, solution | "Failed to send. Make sure it's in draft and try again." |
| **Info** | Informative, neutral | Important context user must know now | "Client will be created when proposal is accepted" |
| **Success** | Positive, straight up | What was done, what's next | "Payment collected (May 7, 2025)" |

## Table Data

### Display Guidelines

| Data Type | Guidelines |
|:----------|:-----------|
| **Non-numerical** | Yes/No: check icon for "Yes", hyphen for "No". No data: hyphen. Align left. |
| **Numerical (dollars)** | Include currency symbol. $0 or $0.00 matching precision. Align right. |
| **Numerical (count)** | If 0, display "0" |

## Switch Labels

- Clearly describe what happens when ON
- For multiple similar switches, ensure consistent framing
- Avoid ambiguous actions and negative constructions
- Set overall context in list title rather than individual switches
