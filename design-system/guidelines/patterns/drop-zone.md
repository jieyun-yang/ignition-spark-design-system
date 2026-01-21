# Drop Zone

## Overview

The Drop zone component provides an interactive area for users to upload files. It supports both drag-and-drop functionality and traditional file selection via a button.

## When to Use

| Scenario | Description |
|:---------|:------------|
| **Uploading Images (Displaying)** | When uploaded image needs to be visible within the component |
| **Uploading Images (Not Displaying)** | For data processing/backend storage without preview |
| **Uploading CSVs** | Bulk data import scenarios |

## Anatomy

- **Select File Button:** Opens system file browser
- **Empty State:** Default appearance when no file uploaded
- **Uploaded File Display:** Shows thumbnail or file icon with name
- **Drop Zone Area:** Primary drag-and-drop region

## States

| State | Description |
|:------|:------------|
| **Default** | Standard, inactive state before interaction |
| **Hover with item** | File dragged over zone, indicating drop is possible |
| **Uploaded** | File successfully uploaded and ready for action |

## Interactions

| Interaction | Behavior |
|:------------|:---------|
| **Drag and Drop** | Show actual size or preview of file |
| **Choose File** | Opens file browser dialog |
| **Error** | Display feedback for unsupported type or size |
| **Success** | Visual confirmation of successful upload |

## Properties

| Property | Type | Description | Default |
|:---------|:-----|:------------|:--------|
| `acceptedFileTypes` | `string[]` | Permitted file extensions or MIME types | `null` |
| `maxFileSize` | `number` | Maximum file size in bytes | `null` |

## Variants

### Avatar Upload
Does not display empty state. Implies default avatar/placeholder replaced on file selection.

## Best Practices

### Do's
- Always provide a clear way to **remove** uploaded files
- Clearly list **accepted file types** and **maximum file size**
- Show preview or file representation after upload

### Don'ts
- Don't forget to communicate accepted file types and size limits
- Don't leave users without a way to remove/replace files
