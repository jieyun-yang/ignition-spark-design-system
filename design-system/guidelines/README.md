# Design Guidelines

This folder contains design guidelines that complement the component library. These guidelines inform LLMs and developers about design decisions, best practices, and patterns that ensure consistent, high-quality user experiences.

## Structure

```
guidelines/
├── README.md                 # You are here
├── foundations/              # Visual design foundations
│   ├── colours.md           # Color palette and usage
│   ├── typography.md        # Type system and hierarchy
│   ├── spacing.md           # Spacing tokens and usage
│   ├── shadows.md           # Elevation and depth
│   ├── icons.md             # Iconography guidelines
│   └── illustrations.md     # Illustration principles
├── layouts/                  # Page and layout patterns
│   ├── layout-anatomy.md    # Content width system
│   ├── lists.md             # List patterns
│   └── page-layouts.md      # General page layouts
├── content/                  # Writing and content guidelines
│   ├── our-voice.md         # Brand voice and tone
│   ├── grammar.md           # Grammar and style rules
│   ├── product-vocabulary.md # Standard terminology
│   └── product-examples.md  # UI copy patterns
├── patterns/                 # Interaction patterns
│   ├── navigation.md        # Navigation patterns
│   ├── error-handling.md    # Error handling patterns
│   ├── feature-gating.md    # Feature gating patterns
│   ├── guided-wizard.md     # Multi-step wizard patterns
│   ├── first-use.md         # Onboarding patterns
│   ├── drop-zone.md         # File upload patterns
│   ├── rich-text-editor.md  # Rich text editing
│   └── intercom.md          # In-app messaging
├── unique-areas/             # Area-specific guidelines
│   ├── dashboard.md
│   ├── proposal-editor.md
│   ├── settings.md
│   └── onboarding.md
├── design-resources/         # Design tools and theory
│   ├── figma.md             # Figma workflow
│   ├── design-psychology.md # Cognitive principles
│   └── gestalt-principles.md # Visual perception
└── brand/
    └── brand.md             # Brand identity
```

## How to Use These Guidelines

### For LLMs Building Prototypes

1. **Read the relevant component GUIDELINES.md** in `design-system/components/*/GUIDELINES.md` for specific component rules
2. **Reference foundations** for colors, typography, spacing decisions
3. **Check content guidelines** for proper terminology and voice
4. **Follow patterns** for complex interactions

### Priority Order

When building a prototype:
1. Component guidelines (in component folders)
2. Foundations (colors, typography, spacing)
3. Content guidelines (voice, vocabulary)
4. Patterns (for complex features)

## Quick Reference

### Key Rules

1. **One primary button per screen** - See Button guidelines
2. **Use sentence case** - See Grammar guidelines
3. **Match existing patterns** - Check templates first
4. **Use design tokens** - Never hardcode values

### Common Mistakes to Avoid

- Creating new components when existing ones suffice
- Hardcoding colors, spacing, or typography
- Using inconsistent terminology
- Ignoring accessibility requirements
