# Typography

## Overview

This document outlines the typographic system, defining the core font stack, hierarchical heading styles, and their appropriate usage across various components and platforms.

## Font Stack

### OS-Specific Font Families

| OS | Font Family |
|:---|:------------|
| Windows | Helvetica Neue |
| Mac OS | SF Pro Text |

### CSS Declaration

```css
font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

## Heading Hierarchy

### Display1
Large, prominent display style for key introductory content.

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (600) |
| Size | 48px |
| Line height | 110% |
| Letter spacing | -1px |

**Usage:** Exclusively for prominent, top-level headers in guided wizards.

### Display2

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (600) |
| Size | 32px |
| Line height | 110% |
| Letter spacing | -1px |

**Usage:** Guided wizard headers and new page titles.

### H1

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (500) |
| Size | 24px |
| Line height | 150% |
| Letter spacing | 0px |

**Usage:** Main page headers, top-level client portal document headers (e.g., Pricing, Service).

### H2

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (500) |
| Size | 20px |
| Line height | 150% |
| Letter spacing | 0px |

**Usage:** Significant page section headers, empty state headers, drawer headers, modal headers.

### H3

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (500) |
| Size | 18px |
| Line height | 150% |
| Letter spacing | 0px |

**Usage:** NPE titles, section headers within NPE, dashboard data, card headers, large accordion titles.

### H4

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (500) |
| Size | 16px |
| Line height | 150% |
| Letter spacing | 0px |

**Usage:** Small accordion headers, rich button titles, alert titles.

### H5

| Property | Value |
|:---------|:------|
| Family | SF Pro Text (500) |
| Size | 12px |
| Line height | 150% |
| Letter spacing | 0px |

**Usage:** Small informational text like table headers and captions.

## Best Practices

### Do's
- Maintain clear visual hierarchy by consistently applying defined heading levels
- Use display headings (`Display1`, `Display2`) sparingly for maximum impact
- Ensure heading choice aligns with semantic importance and content type

### Don'ts
- Don't skip heading levels (e.g., going directly from H1 to H3)
- Don't use display headings for regular content
- Don't deviate from the defined type scale
