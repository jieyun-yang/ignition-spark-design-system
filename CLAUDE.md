# Design System Development Rules

## Project Overview
This is a design system implementation based on our Figma designs. All components, tokens, and patterns must match our Figma design system exactly. Consistency and reusability are paramount.

## Design System Principles

### 1. Single Source of Truth
- All design tokens (colors, spacing, typography, shadows, etc.) must be defined in a central tokens file
- Never hardcode values - always reference tokens
- Component variants should map 1:1 with Figma component properties

### 2. Component Hierarchy
- Atomic components first (Button, Input, Typography)
- Molecule components use atomic components (SearchBar, Card)
- Organism components use molecules (Header, ProductCard)
- Never skip levels or create dependencies that bypass this hierarchy

### 3. Figma Alignment
- Component names must match Figma component names exactly
- Variant names must match Figma property names (e.g., size="large" not size="lg")
- Layer naming conventions from Figma should be preserved in DOM structure when semantic

## Technical Standards

### File Structure
```
/design-system
  /tokens
    colors.ts
    spacing.ts
    typography.ts
    shadows.ts
    breakpoints.ts
  /components
    /Button
      Button.tsx
      Button.stories.tsx
      Button.test.tsx
      index.ts
    /[ComponentName]
      ...
  /utils
    theme.ts
  /types
    components.ts
```

### Token Management
- Use TypeScript for type-safe tokens
- Export tokens as const objects
- Provide semantic naming: `color.primary.500` not `color.blue`
- Include comments with Figma variable names for reference

### Component Development Rules

#### Always Include:
1. **TypeScript interfaces** - Define all props with JSDoc comments
2. **Variant handling** - Support all Figma variants explicitly
3. **Default props** - Match Figma's default property values
4. **Responsive behavior** - If component has responsive variants in Figma
5. **Accessibility** - ARIA labels, keyboard navigation, focus states
6. **Documentation** - JSDoc with usage examples

#### Component Template:
```typescript
/**
 * [Component Name] - Brief description
 * 
 * Figma: [Link to Figma component or "Matches [Component Name] in Figma"]
 * 
 * @example
 * <Button size="large" variant="primary">Click me</Button>
 */

import { tokens } from '@/tokens';

interface ButtonProps {
  /** Button text - maps to Figma "Label" property */
  children: React.ReactNode;
  
  /** Size variant - maps to Figma "Size" property */
  size?: 'small' | 'medium' | 'large';
  
  /** Visual style - maps to Figma "Variant" property */
  variant?: 'primary' | 'secondary' | 'ghost';
  
  /** Disabled state - maps to Figma "State" property */
  disabled?: boolean;
  
  onClick?: () => void;
}

export const Button = ({ 
  children, 
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick 
}: ButtonProps) => {
  // Implementation using tokens
};
```

### Styling Approach
**Use: [Choose one and specify]**
- [ ] Tailwind CSS (with custom theme matching tokens)
- [ ] CSS Modules
- [ ] Styled Components
- [ ] Emotion

**Rules:**
- Never use inline styles with hardcoded values
- All styling must reference design tokens
- Maintain specificity hierarchy
- Use CSS custom properties for runtime theming if needed

### Component Variants

When Figma component has variants:
```typescript
// ✅ DO: Explicit variant handling
const sizeStyles = {
  small: { padding: tokens.spacing[2], fontSize: tokens.fontSize.sm },
  medium: { padding: tokens.spacing[3], fontSize: tokens.fontSize.base },
  large: { padding: tokens.spacing[4], fontSize: tokens.fontSize.lg },
};

// ❌ DON'T: Conditional logic that doesn't match Figma
const padding = isLarge ? '16px' : '8px';
```

### States and Interactions

Handle all interactive states explicitly:
- Default
- Hover
- Active/Pressed
- Focus
- Disabled
- Loading (if applicable)

Match Figma's interaction patterns exactly.

## Development Workflow

### Starting New Components
1. Review the Figma component and all its variants
2. Extract design tokens if new ones are needed
3. Create component file with interface first
4. Implement default variant
5. Add all other variants
6. Test all state combinations
7. **CRITICAL: Use Playwright MCP to verify component**
   - Navigate to the component's demo page
   - Take screenshots of all variants and states
   - Verify visual appearance matches Figma exactly
   - Test all interactive behaviors (clicks, hovers, state changes)
   - Compare side-by-side with Figma design if discrepancies found
8. Add documentation

### When Building from Figma Selections
When I provide a Figma component via MCP:
1. First ask: "Should I check if similar components already exist?"
2. Extract any new design tokens needed
3. Identify reusable sub-components
4. Build using existing components where possible
5. Match layer structure semantically (don't mirror every frame)
6. Preserve component and variant naming exactly

### Quality Checklist
Before marking any component complete:
- [ ] All props match Figma properties
- [ ] All variants implemented
- [ ] All states implemented (hover, focus, disabled, etc.)
- [ ] Uses design tokens exclusively
- [ ] TypeScript types defined
- [ ] Accessible (keyboard nav, ARIA, focus management)
- [ ] Responsive if Figma shows breakpoints
- [ ] Documentation with examples
- [ ] No hardcoded values
- [ ] **Playwright verification completed - screenshots taken and visually compared with Figma**
- [ ] **All interactive behaviors tested with Playwright (clicks, hovers, selections, etc.)**

## Naming Conventions

### Components
- PascalCase: `Button`, `TextField`, `ProductCard`
- Match Figma component names exactly
- Prefix compound names: `NavigationMenu` not `NavMenu`

### Props
- camelCase: `isDisabled`, `backgroundColor`, `onClick`
- Boolean props: `is*`, `has*`, `should*`
- Event handlers: `on*`

### Tokens
- Nested object notation: `tokens.color.primary[500]`
- Semantic not descriptive: `color.error` not `color.red`

### Files
- PascalCase for components: `Button.tsx`
- camelCase for utilities: `formatDate.ts`
- kebab-case for CSS: `button-styles.module.css`

## Don't Do This

### ❌ Never:
- Hardcode colors, spacing, or any design values
- Create one-off components that bypass the design system
- Use arbitrary values: `className="mt-[13px]"` or `margin: 13px`
- Skip accessibility features
- Create variants not present in Figma
- Rename Figma properties for "better DX"
- Mix different styling approaches in same project

### ❌ Avoid:
- Overly complex component APIs
- Tight coupling between unrelated components
- Premature optimization
- Magic numbers or unexplained calculations
- Breaking changes without discussion

## Communication Preferences

### When Uncertain:
Ask before:
- Creating new design tokens not explicitly in Figma
- Making architectural decisions
- Deviating from Figma designs
- Installing new dependencies

### Show Me:
- Design token extraction from Figma selections
- Component interface before implementation
- Trade-offs when multiple approaches are valid

### Updates:
After completing each component:
1. List what was built
2. Note any new tokens added
3. Highlight any deviations from Figma (if necessary)
4. Suggest next component to build

## Testing Approach
- Unit tests for component logic
- Visual regression tests for variants
- Accessibility tests (jest-axe)
- Interaction tests for stateful components

## Dependencies

### Required:
- React 18+
- TypeScript 5+
- [Your styling solution]

### Allowed:
- Radix UI (for accessible primitives)
- clsx (for conditional classes)
- [Other approved libraries]

### Prohibited:
- Component libraries that conflict with design system (MUI, Chakra, etc.)
- CSS frameworks other than specified above
- Utility libraries that duplicate token functionality

## Success Metrics

A well-implemented component:
✅ Looks identical to Figma across all variants
✅ Uses only design tokens
✅ Passes accessibility audit
✅ Has full TypeScript support
✅ Is documented with examples
✅ Is reusable across different contexts
✅ Maintains consistent API with other components

## Design Guidelines

When making design decisions, consult the embedded guidelines:

### Component-Specific Guidelines
Each component folder has a `GUIDELINES.md` file with:
- When and why to use the component
- Best practices and accessibility requirements
- Do's and don'ts

```
./design-system/components/Button/GUIDELINES.md
./design-system/components/Modal/GUIDELINES.md
./design-system/components/[Component]/GUIDELINES.md
```

### General Guidelines
For broader design decisions, see `./design-system/guidelines/`:

| Category | Path | Use For |
|----------|------|---------|
| Foundations | `guidelines/foundations/` | Colours, typography, spacing, shadows, icons |
| Content | `guidelines/content/` | Voice, grammar, product vocabulary |
| Patterns | `guidelines/patterns/` | Error handling, feature gating, wizards |
| Layouts | `guidelines/layouts/` | Page layouts, content width |

### Decision Workflow

1. **Check component GUIDELINES.md** for component-specific rules
2. **Check foundations** for colors, typography, spacing decisions
3. **Check content guidelines** for proper terminology and voice
4. **Check patterns** for complex interactions (wizards, errors, etc.)

### Key Rules from Guidelines

- **One primary button per screen** (Button guidelines)
- **Use sentence case** for all headings and labels (Grammar guidelines)
- **Use design tokens** - never hardcode values (Colours/Spacing guidelines)
- **Provide tooltips for icon-only buttons** (Button/Icons guidelines)

## Notes
- When in doubt, check Figma first
- Consistency > cleverness
- Build for the team, not just yourself
- Document decisions that aren't obvious from code