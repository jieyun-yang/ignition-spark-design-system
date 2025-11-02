# Setup Instructions

## ⚠️ Permission Issue Fix

The `node_modules` directory was created with root permissions. You need to fix this before running the project.

### Fix Permissions (Run in Terminal)

Open Terminal in this project directory and run:

```bash
# Remove node_modules with sudo (will ask for your password)
sudo rm -rf node_modules package-lock.json

# Install dependencies as your user
npm install

# Start the development server
npm run dev
```

### Alternative: Change Ownership

If you prefer to change ownership instead:

```bash
# Change ownership to your user
sudo chown -R $(whoami) node_modules

# Then install normally
npm install

# Start dev server
npm run dev
```

## 🚀 Quick Start (After Permission Fix)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 What You'll See

The demo app showcases all Button component variants:

- **Primary buttons** - Main CTAs in purple (#5A51E7)
- **Secondary buttons** - Secondary actions in light gray
- **Tertiary buttons** - Low emphasis ghost buttons
- **Destructive buttons** - Delete/remove actions in red
- **Text buttons** - Minimal text-only style

With all combinations of:
- **Sizes:** Small, Medium, Large, XLarge
- **Icons:** None, Left, Right, Only
- **States:** Default, Hover, Focus, Active, Disabled

## 🎨 Using the Design System

Import components and tokens:

```tsx
import { Button, tokens } from './design-system';

function MyComponent() {
  return (
    <div>
      <Button hierarchy="primary" variant="solid" size="large">
        Save Changes
      </Button>

      <Button
        hierarchy="secondary"
        iconLeft={<CheckIcon />}
        onClick={() => console.log('Clicked!')}
      >
        Confirm
      </Button>
    </div>
  );
}
```

## 📚 Documentation

- [README.md](./README.md) - Complete component documentation
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Technical implementation details
- [CLAUDE.md](./CLAUDE.md) - Design system development rules

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### TypeScript Errors

```bash
# Run type checking
npm run typecheck
```

### Clear Cache

```bash
# Remove all build artifacts
rm -rf dist node_modules/.vite

# Reinstall
npm install
```

## ✅ Verification

After setup, you should see:

1. ✅ No permission errors
2. ✅ Vite dev server running on http://localhost:5173
3. ✅ Browser opens with button showcase
4. ✅ All button variants visible and interactive
5. ✅ Hover/focus states working

## 🎯 Next Steps

1. Explore the demo app to see all button variants
2. Read [README.md](./README.md) for complete API documentation
3. Check [IMPLEMENTATION.md](./IMPLEMENTATION.md) for technical details
4. Start building additional components using Button as a reference

---

**Need help?** Check the documentation or refer to the design system rules in [CLAUDE.md](./CLAUDE.md)
