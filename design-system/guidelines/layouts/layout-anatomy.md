# Layout Anatomy

## Overview

This guideline establishes a consistent system for defining content widths across the design system. It specifies predefined maximum widths for content areas, ensuring predictable and responsive layout structures.

## Layout Sizes

| Size | Max-Width | Token | When to Use |
|:-----|:----------|:------|:------------|
| **Small** | 768px | 3xl | Highly focused content, minimal forms, legal documents, payment processes |
| **Medium** | 1280px | 7xl | Dashboard views, overview pages, moderate content density |
| **Large** | 1600px | 9xl | Rich content, detailed presentations, complex visual elements |
| **Full width** | 100% | - | Dense data tables, extensive horizontal information display |

## Examples by Size

### Small (768px)
- NPE pages: General information, payments, terms and conditions, send
- Single-focus tasks

### Medium (1280px)
- Dashboard views
- Overview pages

### Large (1600px)
- NPE pages: Services, presentations
- Content-rich pages

### Full Width
- Clients pages
- Pipelines pages
- Collections pages

## Structure

Content areas are horizontally constrained by `max-width`. When the screen exceeds this width, the content remains centered with symmetrical margins for visual balance.

## Best Practices

### Do's
- Consider primary goal and content density when choosing layout size
- Use Small layouts for highly focused tasks (forms, alerts, single-purpose interactions)
- Use Full width judiciously for content that genuinely requires expansive horizontal space

### Don'ts
- Don't arbitrarily select layout size without rationale
- Don't apply Full width to pages with sparse content (creates awkward gaps)
- Don't override or exceed defined Max-width values (compromises consistency)
