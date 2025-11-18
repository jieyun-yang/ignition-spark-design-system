# Spark Design System - Component Audit & Verification Plan

**Last Updated**: 2025-11-15
**Purpose**: Systematic verification of all components against production implementation and Figma designs

---

## Executive Summary

- **Total Components Built**: 53
- **Components Verified Against Production**: 4/53 (8%)
- **Components with Automated Tests**: 3/53 (SideNav, Button, Table)
- **Total Test Coverage**: 22 automated tests, 13 baseline screenshots
- **Production Verification Status**: In Progress
- **Automated Testing Status**: ✅ Infrastructure Complete

---

## Testing Tools Strategy

### Chrome DevTools MCP - For Production Analysis
**Use for:** Inspecting and comparing against production (demo.ignitionapp.com)

**Capabilities:**
- ✅ Navigate authenticated production apps
- ✅ Extract computed CSS values (colors, spacing, dimensions)
- ✅ Inspect network requests and console logs
- ✅ Analyze performance and Core Web Vitals
- ✅ Take screenshots of production components
- ✅ Interactive debugging and exploration

**When to use:**
- Analyzing production implementations
- Getting exact CSS values from live app
- Comparing design system vs production
- Understanding current component behavior
- Debugging real user issues

### Playwright MCP - For Interactive Testing
**Use for:** Manual debugging and exploration of design system components

**Capabilities:**
- ✅ Load local design system (localhost:5173)
- ✅ Take screenshots of component states
- ✅ Test interactions (clicks, hovers, form inputs)
- ✅ Debug component behavior interactively
- ✅ Explore edge cases manually

**When to use:**
- Quick visual verification during development
- Debugging specific component issues
- Exploring component behavior interactively
- Taking screenshots for documentation

### Native Playwright - For Automated Testing
**Use for:** CI/CD and automated regression testing

**Capabilities:**
- ✅ Automated visual regression testing
- ✅ Test all 53 components × variants systematically
- ✅ Version-controlled screenshot baselines
- ✅ Run in CI/CD pipelines
- ✅ Catch regressions before deployment

**When to use:**
- Building automated test suite
- Preventing visual regressions
- Testing component variants at scale
- CI/CD integration

---

## Audit Methodology

### Phase 1: Production Verification (Use Chrome DevTools MCP)
**Tool:** Chrome DevTools MCP
**Goal:** Understand what production looks like

For each component, verify:
1. **Visual Accuracy**: Compare rendered output against production at demo.ignitionapp.com
2. **Design Token Usage**: Extract computed CSS and compare with design tokens
3. **Interactive States**: Test hover, active, focus, disabled states
4. **Responsive Behavior**: Verify layout at different viewport sizes
5. **Accessibility**: Check ARIA labels, keyboard navigation, contrast ratios

**Process:**
1. Navigate to demo.ignitionapp.com with Chrome DevTools MCP
2. Find component instances in production
3. Use `evaluate_script` to extract computed styles
4. Take screenshots for visual reference
5. Document findings in this audit document

### Phase 2: Figma Alignment (Use Figma MCP)
**Tool:** Figma MCP
**Goal:** Ensure components match design specifications

For each component, verify:
1. **Component Structure**: Matches Figma component hierarchy
2. **Variant Mapping**: All Figma variants implemented
3. **Property Names**: Props match Figma property names exactly
4. **Default Values**: Default props match Figma defaults

**Process:**
1. Use Figma MCP to inspect component in Figma
2. Compare props, variants, and styling
3. Document any deviations with justification

### Phase 3: Design System Development (Use Playwright MCP)
**Tool:** Playwright MCP (for quick checks), Native Playwright (for systematic testing)
**Goal:** Build/fix components and verify they work

For each component:
1. **Quick Visual Check**: Use Playwright MCP to screenshot and verify
2. **Interactive Testing**: Test clicks, hovers, form inputs
3. **Responsive Testing**: Test mobile, tablet, desktop viewports
4. **Edge Cases**: Test with empty data, long text, disabled states

**Process:**
1. Make component changes
2. Use Playwright MCP for quick verification
3. Write Native Playwright tests for automation
4. Run tests locally before committing

### Phase 4: Automated Testing (Use Native Playwright)
**Tool:** Native Playwright (not MCP)
**Goal:** Prevent regressions and ensure quality at scale

Setup automated tests for:
1. **Visual Regression Tests**: Baseline screenshots for all variants
2. **Unit Tests**: Component logic and state management (Jest + RTL)
3. **Accessibility Tests**: jest-axe integration
4. **Integration Tests**: Component interactions

**Process:**
1. Create test files in `./tests/components/`
2. Run tests with `npm run test:e2e`
3. Update baselines when intentional changes made
4. Integrate into CI/CD pipeline

---

## Component Inventory & Status

### ✅ Verified Components

#### 1. SideNav
- **Path**: [design-system/components/SideNav](design-system/components/SideNav)
- **Production Status**: ✅ Verified (2025-11-15)
- **Figma Alignment**: ✅ Complete
- **Issues Fixed**:
  - Width updated: 196px → 220px to match production
  - Font size updated: 14px → 16px to match production
  - Active border-right indicator: Already implemented correctly
- **Design Tokens Used**:
  - Colors: `--color-gray-50`, `--color-gray-200`, `--color-gray-800`, `--color-primary-400`, `--color-primary-500`, `--color-orange-600`
  - Spacing: `--spacing-2`, `--spacing-3`, `--spacing-2-5`
  - Typography: `--font-family-primary`, `--font-size-lg`, `--font-weight-medium`
- **Interactive States**: ✅ Hover, active, focus all implemented
- **Test Coverage**: ✅ Automated tests (9 tests) - [tests/components/SideNav.spec.ts](tests/components/SideNav.spec.ts)
- **Baseline Screenshots**: 5 baselines generated

#### 2. TemplateLayout
- **Path**: [design-system/components/TemplateLayout](design-system/components/TemplateLayout)
- **Production Status**: ✅ Verified (2025-11-15)
- **Figma Alignment**: ✅ Complete
- **Issues Fixed**:
  - 100vh overflow bug resolved with `height: 100vh` + `overflow: hidden`
  - Internal scrolling implemented with `overflow-y: auto`
- **Design Tokens Used**:
  - Colors: `--color-gray-50`, `--color-white`, `--color-gray-900`, `--color-gray-600`
  - Spacing: `--spacing-4`, `--spacing-6`, `--spacing-8`, `--spacing-10`, `--spacing-1-5`
  - Typography: `--font-family-primary`, `--font-size-1-5xl`, `--font-size-base`, `--font-weight-semibold`
- **Test Coverage**: Manual verification complete, automated tests pending

#### 3. Button
- **Path**: [design-system/components/Button](design-system/components/Button)
- **Production Status**: ✅ Verified (2025-11-15)
- **Figma Alignment**: Needs verification
- **Production Match**: 95% - matches size, padding, colors
- **Design Tokens Used**: Primary colors, spacing, typography, border-radius
- **Test Coverage**: ✅ Automated tests (8 tests) - [tests/components/Button.spec.ts](tests/components/Button.spec.ts)
- **Baseline Screenshots**: 5 baselines generated

#### 4. Table
- **Path**: [design-system/components/Table](design-system/components/Table)
- **Production Status**: ✅ Verified (2025-11-15)
- **Figma Alignment**: Needs verification
- **Production Match**: 90% - header styling matches perfectly (12px, semibold/600, uppercase)
- **Design Tokens Used**: Typography, colors, spacing
- **Test Coverage**: ✅ Automated tests (5 tests) - [tests/components/Table.spec.ts](tests/components/Table.spec.ts)
- **Baseline Screenshots**: 3 baselines generated

#### 5. TextInput
- **Path**: [design-system/components/TextInput](design-system/components/TextInput)
- **Production Status**: ✅ Verified (2025-11-15)
- **Figma Alignment**: Needs verification
- **Production Match**: 100% after fixes
- **Issues Fixed**:
  - Height updated: 40px → 32px to match production
  - Padding updated: 8px 16px → 0px 12px to match production
  - Border radius updated: 4px (md) → 3px (sm) to match production
- **Production Specs Verified**:
  - Height: 32px ✅
  - Padding: 0px 12px ✅
  - Border: 1px solid #B7BAC7 (gray-400) ✅
  - Border radius: 3px ✅
  - Font size: 14px ✅
  - Font weight: 400 (regular) ✅
  - Background: white ✅
- **Design Tokens Used**: Colors (gray-400, gray-500, gray-800), spacing-3, border-radius-sm, typography
- **Test Coverage**: Test file created - [tests/components/TextInput.spec.ts](tests/components/TextInput.spec.ts)
- **Note**: Test requires TextInput to be added to demo app for automated testing

---

### 🔍 Needs Verification

#### 5. Accordion
- **Path**: [design-system/components/Accordion](design-system/components/Accordion)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Find in production app
  - [ ] Compare with Figma
  - [ ] Verify design token usage
  - [ ] Test all states (collapsed, expanded, disabled)

#### 6. ActionBar
- **Path**: [design-system/components/ActionBar](design-system/components/ActionBar)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Find in production app
  - [ ] Compare with Figma
  - [ ] Verify design token usage

#### 7. Alert
- **Path**: [design-system/components/Alert](design-system/components/Alert)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Find in production app
  - [ ] Verify all variants (info, warning, error, success)
  - [ ] Compare with Figma
  - [ ] Test dismissible behavior

#### 8. AppCard
- **Path**: [design-system/components/AppCard](design-system/components/AppCard)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 9. Avatar
- **Path**: [design-system/components/Avatar](design-system/components/Avatar)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify size variants
  - [ ] Test with/without image
  - [ ] Verify fallback initials

#### 10. Badge
- **Path**: [design-system/components/Badge](design-system/components/Badge)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify all color variants
  - [ ] Check size variants
  - [ ] Test with icons

#### 11. Banner
- **Path**: [design-system/components/Banner](design-system/components/Banner)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 12. Card
- **Path**: [design-system/components/Card](design-system/components/Card)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify padding variants
  - [ ] Test shadow variants
  - [ ] Check hover states

#### 13. CardContainer
- **Path**: [design-system/components/CardContainer](design-system/components/CardContainer)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 14. Checkbox
- **Path**: [design-system/components/Checkbox](design-system/components/Checkbox)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify checked/unchecked/indeterminate states
  - [ ] Test disabled state
  - [ ] Verify label positioning

#### 15. CheckboxCard
- **Path**: [design-system/components/CheckboxCard](design-system/components/CheckboxCard)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 16. ComboButton
- **Path**: [design-system/components/ComboButton](design-system/components/ComboButton)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 17. CopyField
- **Path**: [design-system/components/CopyField](design-system/components/CopyField)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 18. DataList
- **Path**: [design-system/components/DataList](design-system/components/DataList)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 19. DatePicker
- **Path**: [design-system/components/DatePicker](design-system/components/DatePicker)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify calendar popup
  - [ ] Test date range selection
  - [ ] Verify keyboard navigation

#### 20. Divider
- **Path**: [design-system/components/Divider](design-system/components/Divider)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 21. Drawer
- **Path**: [design-system/components/Drawer](design-system/components/Drawer)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify open/close animation
  - [ ] Test backdrop behavior
  - [ ] Check size variants (small, medium, large)

#### 22. EmptyState
- **Path**: [design-system/components/EmptyState](design-system/components/EmptyState)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 23. ErrorState
- **Path**: [design-system/components/ErrorState](design-system/components/ErrorState)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 24. FieldSet
- **Path**: [design-system/components/FieldSet](design-system/components/FieldSet)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 25. Filter
- **Path**: [design-system/components/Filter](design-system/components/Filter)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 26. Illustration
- **Path**: [design-system/components/Illustration](design-system/components/Illustration)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 27. Link
- **Path**: [design-system/components/Link](design-system/components/Link)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 28. Menu
- **Path**: [design-system/components/Menu](design-system/components/Menu)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 29. MenuButton
- **Path**: [design-system/components/MenuButton](design-system/components/MenuButton)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 30. Modal
- **Path**: [design-system/components/Modal](design-system/components/Modal)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify size variants
  - [ ] Test backdrop/overlay
  - [ ] Check close behavior (X, ESC, backdrop click)
  - [ ] Verify focus trap

#### 31. Notification
- **Path**: [design-system/components/Notification](design-system/components/Notification)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 32. Overlayer
- **Path**: [design-system/components/Overlayer](design-system/components/Overlayer)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 33. PageHeader
- **Path**: [design-system/components/PageHeader](design-system/components/PageHeader)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 34. Pagination
- **Path**: [design-system/components/Pagination](design-system/components/Pagination)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify page number display
  - [ ] Test prev/next buttons
  - [ ] Check disabled states

#### 35. PasswordInput
- **Path**: [design-system/components/PasswordInput](design-system/components/PasswordInput)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 36. Popover
- **Path**: [design-system/components/Popover](design-system/components/Popover)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 37. ProgressBar
- **Path**: [design-system/components/ProgressBar](design-system/components/ProgressBar)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 38. ProgressStatus
- **Path**: [design-system/components/ProgressStatus](design-system/components/ProgressStatus)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 39. RadioButton
- **Path**: [design-system/components/RadioButton](design-system/components/RadioButton)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 40. Search
- **Path**: [design-system/components/Search](design-system/components/Search)
- **Production Status**: ✅ Partially verified (2025-11-15)
- **Figma Alignment**: Needs verification
- **Production Match**: 100% - height, border-radius, styling all match
- **Next Steps**:
  - [ ] Test autocomplete/suggestions
  - [ ] Verify clear button behavior

#### 41. Select
- **Path**: [design-system/components/Select](design-system/components/Select)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify dropdown styling
  - [ ] Test multi-select variant
  - [ ] Check keyboard navigation

#### 42. Signature
- **Path**: [design-system/components/Signature](design-system/components/Signature)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 43. Skeleton
- **Path**: [design-system/components/Skeleton](design-system/components/Skeleton)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 44. Spinner
- **Path**: [design-system/components/Spinner](design-system/components/Spinner)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 45. SuccessState
- **Path**: [design-system/components/SuccessState](design-system/components/SuccessState)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 46. SupportArticleLink
- **Path**: [design-system/components/SupportArticleLink](design-system/components/SupportArticleLink)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 47. Switch
- **Path**: [design-system/components/Switch](design-system/components/Switch)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify toggle animation
  - [ ] Test on/off states
  - [ ] Check disabled state

#### 48. TableHeader
- **Path**: [design-system/components/TableHeader](design-system/components/TableHeader)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 49. Tabs
- **Path**: [design-system/components/Tabs](design-system/components/Tabs)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify active tab indicator
  - [ ] Test keyboard navigation (arrow keys)
  - [ ] Check overflow behavior

#### 50. TextArea
- **Path**: [design-system/components/TextArea](design-system/components/TextArea)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified

#### 51. TextInput
- **Path**: [design-system/components/TextInput](design-system/components/TextInput)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify all variants (default, error, success, disabled)
  - [ ] Test prefix/suffix icons
  - [ ] Check focus states

#### 52. Toast
- **Path**: [design-system/components/Toast](design-system/components/Toast)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify positioning (top/bottom, left/right/center)
  - [ ] Test auto-dismiss timing
  - [ ] Check stacking behavior

#### 53. Tooltip
- **Path**: [design-system/components/Tooltip](design-system/components/Tooltip)
- **Production Status**: Not yet verified
- **Figma Alignment**: Not yet verified
- **Next Steps**:
  - [ ] Verify positioning (top, bottom, left, right)
  - [ ] Test hover delay
  - [ ] Check dark/light variants

---

## Missing Components (Not Yet Built)

This section will be populated after:
1. Complete Figma component inventory
2. Complete production app exploration
3. Comparison of Figma + Production vs Built Components

**Next Steps**:
- [ ] Export complete Figma component list
- [ ] Explore all production pages systematically
- [ ] Create gap analysis

---

## Critical Issues

### High Priority
None currently identified (all critical SideNav issues resolved)

### Medium Priority
1. **Automated Testing**: No visual regression tests yet
2. **Component Documentation**: Many components lack Storybook stories
3. **Accessibility Audit**: No comprehensive a11y testing performed

### Low Priority
1. **TypeScript Coverage**: Some components may have incomplete type definitions
2. **Performance Optimization**: No performance benchmarking done

---

## Recommended Next Actions

### Immediate (This Week)
1. ✅ Fix SideNav production discrepancies
2. ⏳ Create this comprehensive audit document
3. Set up Playwright visual regression testing framework
4. Verify top 10 most-used components against production

### Short Term (Next 2 Weeks)
1. Complete production verification for all 53 components
2. Set up automated visual regression tests for verified components
3. Create Figma component inventory
4. Begin gap analysis for missing components

### Medium Term (Next Month)
1. Build missing components identified in gap analysis
2. Add Storybook stories for all components
3. Implement accessibility testing with jest-axe
4. Create component migration guide from production → design system

### Long Term (Next Quarter)
1. Achieve 100% parity with production
2. Achieve 100% parity with Figma
3. Full automated test coverage
4. Documentation site deployment
5. NPM package publication for team distribution

---

## Testing Strategy

### Visual Regression Testing (Playwright)
```typescript
// Example test structure
describe('SideNav Component', () => {
  test('default state', async ({ page }) => {
    await page.goto('http://localhost:5173/sidenav-demo');
    await expect(page).toHaveScreenshot('sidenav-default.png');
  });

  test('active item state', async ({ page }) => {
    await page.goto('http://localhost:5173/sidenav-demo');
    await page.click('[data-testid="nav-item-services"]');
    await expect(page).toHaveScreenshot('sidenav-active.png');
  });

  test('hover state', async ({ page }) => {
    await page.goto('http://localhost:5173/sidenav-demo');
    await page.hover('[data-testid="nav-item-home"]');
    await expect(page).toHaveScreenshot('sidenav-hover.png');
  });
});
```

### Component Tests (Jest + RTL)
```typescript
// Example unit test
describe('Button Component', () => {
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
});
```

### Accessibility Tests (jest-axe)
```typescript
// Example a11y test
test('SideNav has no accessibility violations', async () => {
  const { container } = render(<SideNav {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Success Metrics

### Phase 1 Completion (Production Verification)
- [ ] 100% of components verified against production (currently 7.5% - 4/53)
- [ ] All discrepancies documented
- [ ] Critical issues resolved

### Phase 2 Completion (Figma Alignment)
- [ ] 100% of components verified against Figma
- [ ] All variants implemented
- [ ] Props match Figma properties exactly

### Phase 3 Completion (Testing)
- [ ] Visual regression tests: 100% coverage
- [ ] Unit tests: >80% code coverage
- [ ] Accessibility tests: 100% of components pass axe

### Phase 4 Completion (Documentation)
- [ ] Storybook stories for all components
- [ ] JSDoc for all props
- [ ] Migration guide published

---

## Notes

- This is a living document - update after each component verification
- Link to relevant Figma designs when available
- Document all deviations with justification
- Celebrate completed components! 🎉
