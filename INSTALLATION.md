# Installation Guide

This guide explains how to install and use the Ignition Spark Design System in your project.

## 📦 Installation Options

### Option 1: Direct File Import (Recommended for Now)

Since this design system is not yet published to npm, you can use it by importing directly from the source:

#### 1. Clone or Copy the Repository

```bash
# Clone the repository
git clone <repository-url>

# Or copy the design-system folder to your project
cp -r /path/to/ignition-spark-design-system/design-system ./src/
```

#### 2. Install Dependencies

```bash
npm install clsx react react-dom
npm install --save-dev typescript @types/react @types/react-dom
```

#### 3. Import Components

```tsx
// Import from the design system folder
import { Button, Alert, Card } from './design-system';

// Or with full path
import { Button } from './design-system/components/Button';
```

#### 4. Import Design Tokens CSS

Add this to your main entry file (`main.tsx` or `App.tsx`):

```tsx
import './design-system/tokens/tokens.css';
```

This loads all CSS custom properties for colors, spacing, typography, etc.

---

### Option 2: Git Submodule

If you want to track updates to the design system:

```bash
# Add as submodule
git submodule add <repository-url> src/design-system

# Update submodule
git submodule update --remote
```

---

### Option 3: NPM Package (Coming Soon)

Once published to npm:

```bash
npm install @ignition/spark-design-system
```

```tsx
import { Button, Alert } from '@ignition/spark-design-system';
import '@ignition/spark-design-system/tokens.css';
```

---

## 🎨 Basic Setup

### 1. TypeScript Configuration

Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "types": ["vite/client"]
  },
  "include": ["src", "design-system"]
}
```

### 2. CSS Modules Support

If using Vite (recommended):

```bash
npm install -D typescript-plugin-css-modules
```

Add to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "plugins": [{ "name": "typescript-plugin-css-modules" }]
  }
}
```

### 3. Font Awesome Icons

Some components use Font Awesome icons, including Pro icons which require authentication.

#### For FontAwesome Pro Users

If you have a FontAwesome Pro subscription, you'll need to configure npm authentication:

```bash
# Set up FontAwesome Pro registry
npm config set "@fortawesome:registry" https://npm.fontawesome.com/

# Add your FontAwesome Pro token (get from https://fontawesome.com/account)
npm config set "//npm.fontawesome.com/:_authToken" YOUR_FONTAWESOME_TOKEN
```

Then install the required packages:

```bash
npm install @fortawesome/fontawesome-svg-core@^7.1.0 \
            @fortawesome/react-fontawesome@^3.1.0 \
            @fortawesome/free-solid-svg-icons@^7.1.0 \
            @fortawesome/pro-light-svg-icons@^7.1.0 \
            @fortawesome/pro-regular-svg-icons@^7.1.0 \
            @fortawesome/pro-solid-svg-icons@^7.1.0
```

#### For Free Icons Only

If you don't have FontAwesome Pro, you can use free icons only:

```bash
npm install @fortawesome/fontawesome-svg-core \
            @fortawesome/react-fontawesome \
            @fortawesome/free-solid-svg-icons
```

You'll need to update component imports to use free icons instead of pro icons.

---

## 🧪 Local Development & Testing

### Running the Development Server

To test the design system locally and see all components in action:

#### 1. Configure FontAwesome Pro (Required)

```bash
# Get your token from https://fontawesome.com/account
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" YOUR_FONTAWESOME_TOKEN
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Start the Dev Server

```bash
npm run dev
```

The development server will start at `http://localhost:5173` where you can:
- View all 53+ components with live examples
- Test different component variants and states
- See the complete design token system in action
- Navigate through different component categories (Forms, Data Display, Navigation, etc.)

### Testing Without FontAwesome Pro

If you don't have FontAwesome Pro access and just want to review the code:

**Option 1: Visual Code Review (No Install Needed)**
- Check component CSS files - All use `var(--*)` design tokens
- Review [COMPLETION-REPORT.md](COMPLETION-REPORT.md) - Shows 100% token coverage verification
- Inspect [tokens.css](design-system/tokens/tokens.css) - All CSS custom properties

**Option 2: Use Free Icons Only**
1. Remove Pro packages from `package.json` (lines 67-69):
   - `@fortawesome/pro-light-svg-icons`
   - `@fortawesome/pro-regular-svg-icons`
   - `@fortawesome/pro-solid-svg-icons`

2. Install with free icons:
   ```bash
   npm install
   ```

3. Update component imports to use `@fortawesome/free-solid-svg-icons`

### What to Look For When Testing

When you run the dev server, verify:
- ✅ All components render correctly with no visual regressions
- ✅ Typography is consistent across all components
- ✅ Transitions/animations are smooth (200ms default)
- ✅ Spacing is uniform using the design token scale
- ✅ Border radii match Figma specifications
- ✅ Interactive states work (hover, focus, disabled)
- ✅ All components use design tokens (no hardcoded values)

---

## 🚀 Quick Start

### Create Your First Component

```tsx
// src/App.tsx
import { Button, Alert, Card } from './design-system';
import './design-system/tokens/tokens.css';

function App() {
  return (
    <div>
      <Alert status="success" closeable>
        Welcome to Ignition Spark Design System!
      </Alert>

      <Card
        title="Getting Started"
        description="Build beautiful prototypes with our component library"
      >
        <Button hierarchy="primary" size="large">
          Start Building
        </Button>
      </Card>
    </div>
  );
}
```

---

## 📚 Using Design Tokens

### In TypeScript/JavaScript

```tsx
import { colors, spacing, typography } from './design-system/tokens';

const customStyles = {
  backgroundColor: colors.primary[500],
  padding: spacing[4],
  fontSize: typography.fontSize.lg,
};
```

### In CSS

```css
.my-component {
  /* Use CSS custom properties */
  background-color: var(--color-primary-500);
  padding: var(--spacing-4);
  font-size: var(--font-size-lg);
  border-radius: var(--border-radius-md);
}
```

### Available Token Categories

- **Colors:** Primary, secondary, grayscale, status colors
- **Spacing:** 0.5 to 10 (4px to 40px scale)
- **Typography:** Font sizes, weights, line heights
- **Borders:** Border radius values
- **Shadows:** Elevation system

See [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) for complete token reference.

---

## 🎯 Component Examples

### Forms

```tsx
import { TextInput, Checkbox, Select, Button } from './design-system';

<form>
  <TextInput
    label="Email"
    placeholder="Enter your email"
    required
  />

  <Checkbox
    label="Subscribe to newsletter"
    checked={subscribed}
    onChange={setSubscribed}
  />

  <Select
    label="Country"
    options={countries}
    value={country}
    onChange={setCountry}
  />

  <Button hierarchy="primary" type="submit">
    Submit
  </Button>
</form>
```

### Data Display

```tsx
import { Table, Badge, Avatar, Card } from './design-system';

<Table
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status',
      render: (row) => <Badge variant={row.status}>{row.status}</Badge>
    }
  ]}
  data={users}
/>
```

### Navigation

```tsx
import { Tabs, SideNav, Pagination } from './design-system';

<Tabs
  tabs={[
    { id: 'overview', label: 'Overview', onClick: () => {} },
    { id: 'settings', label: 'Settings', onClick: () => {} }
  ]}
  activeTab="overview"
/>
```

### Overlays

```tsx
import { Modal, Drawer, Tooltip } from './design-system';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
>
  <p>Are you sure you want to proceed?</p>
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>
```

---

## 🔧 Build Configuration

### Vite Configuration

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
```

### Webpack Configuration

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
```

---

## 🎨 Customizing Tokens

### Override CSS Custom Properties

Create a custom CSS file:

```css
/* custom-tokens.css */
:root {
  /* Override primary color */
  --color-primary-500: #your-brand-color;

  /* Override spacing */
  --spacing-4: 20px; /* instead of 16px */

  /* Override typography */
  --font-size-base: 16px; /* instead of 14px */
}
```

Import after the design system tokens:

```tsx
import './design-system/tokens/tokens.css';
import './custom-tokens.css'; // Your overrides
```

---

## ♿ Accessibility Setup

### Screen Reader Testing

```bash
# macOS
VoiceOver: Cmd + F5

# Windows
NVDA: Download from nvaccess.org
```

### Keyboard Navigation

All components support keyboard navigation:
- **Tab/Shift+Tab:** Navigate between focusable elements
- **Enter/Space:** Activate buttons and controls
- **Escape:** Close modals, dropdowns, tooltips
- **Arrow keys:** Navigate menus, tabs, pagination

---

## 📱 Responsive Design

Components are mobile-friendly by default. To customize breakpoints:

```css
/* Your custom responsive styles */
@media (max-width: 768px) {
  .your-component {
    /* Mobile styles */
  }
}

@media (min-width: 769px) {
  .your-component {
    /* Desktop styles */
  }
}
```

---

## 🐛 Troubleshooting

### FontAwesome Pro Authentication Error

**Problem:** `npm error code E401 - Incorrect or missing password` when running `npm install`

**Cause:** FontAwesome Pro packages require authentication

**Solution:**
```bash
# Option 1: Add your FontAwesome Pro token
npm config set "@fortawesome:registry" https://npm.fontawesome.com/
npm config set "//npm.fontawesome.com/:_authToken" YOUR_TOKEN

# Get your token from: https://fontawesome.com/account

# Option 2: Use free icons only (see "Testing Without FontAwesome Pro" above)
```

### CSS Modules Not Working

**Problem:** TypeScript errors for CSS module imports

**Solution:**
```bash
# Generate CSS module types
npm run css-types

# Or add to package.json scripts
"css-types": "tcm design-system src"
```

### Font Awesome Icons Missing

**Problem:** Icon components don't render

**Solution:** Install Font Awesome packages (see step 3 in Basic Setup) and ensure FontAwesome Pro is configured if using Pro icons

### Build Errors

**Problem:** TypeScript compilation fails

**Solution:**
```bash
# Check TypeScript version
npm install typescript@^5.5.3

# Run type checking
npm run typecheck
```

### Dev Server Won't Start

**Problem:** Cannot run `npm run dev`

**Solution:**
```bash
# Check if node_modules exists
ls node_modules

# If missing, install dependencies first
npm install

# Ensure FontAwesome Pro is configured (see above)
```

---

## 📖 Next Steps

1. **Explore Components:** Run `npm run dev` to see all components in action
2. **Read Documentation:** Check [COMPONENTS.md](./COMPONENTS.md) for API details
3. **View Examples:** See [src/](./src/) for template examples
4. **Design Guidelines:** Read [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)

---

## 🤝 Need Help?

- **Documentation:** [COMPONENTS.md](./COMPONENTS.md), [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
- **Issues:** Check [QA-REVIEW.md](./QA-REVIEW.md) for known issues
- **Troubleshooting:** See [SETUP.md](./SETUP.md)

---

Built with ❤️ by the Ignition team
