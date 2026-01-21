# Lists

## Overview

Lists organize and display information in a structured, readable format. They help users quickly scan and understand groups of related items, steps, or definitions.

## List Types

### Ordered Lists (`<ol>`)
Use for items where sequence or order is important.

**Examples:** Step-by-step instructions, rankings, chronological events

**Do:** Use when count or position matters ("Step 1 of 5")
**Don't:** Use for items where order is arbitrary

### Unordered Lists (`<ul>`)
Use for items where order is not significant.

**Examples:** Features, ingredients, requirements

**Do:** Use when items are equally important without specific sequence
**Don't:** Use when sequence or hierarchy is critical

### Description Lists (`<dl>`)
Use to display terms and their corresponding descriptions.

**Examples:** Glossaries, metadata, key-value pairs, product specifications

**Do:** Ensure each term (`<dt>`) has at least one description (`<dd>`)
**Don't:** Use for general lists without term-definition relationships

## Code Examples

### Unordered List
```html
<ul>
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>
```

### Ordered List
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Description List
```html
<dl>
  <dt>Term 1</dt>
  <dd>Description for term 1.</dd>
  <dt>Term 2</dt>
  <dd>Description for term 2.</dd>
</dl>
```

## Nested Lists

Lists can be nested to create hierarchical structures. **Limit nesting depth to three levels** for readability.

```html
<ul>
  <li>Parent item 1</li>
  <li>
    Parent item 2
    <ul>
      <li>Child item 2.1</li>
      <li>
        Child item 2.2
        <ol>
          <li>Grandchild item 2.2.1</li>
          <li>Grandchild item 2.2.2</li>
        </ol>
      </li>
    </ul>
  </li>
</ul>
```

## Styled Lists

In some contexts, default markers may be replaced with custom icons or removed (navigation menus, card lists).

```html
<ul class="list-unstyled">
  <li>Item without marker</li>
</ul>

<ul class="list-icon-check">
  <li>Feature with checkmark</li>
</ul>
```

## Best Practices

- Choose list type based on content relationship
- Keep list items concise
- Use parallel grammatical structure for list items
- Limit nesting to maintain readability
