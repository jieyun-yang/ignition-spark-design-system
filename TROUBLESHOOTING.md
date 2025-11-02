# Troubleshooting Guide

## ✅ Dev Server is Running

The Vite dev server is running successfully on **http://localhost:5173/**

## 🔧 If You See a Blank Page

### Solution 1: Hard Refresh Your Browser

The page was updated after the server started. Try:

**Chrome/Edge:**
- **Mac:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + Shift + R`

**Firefox:**
- **Mac:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + F5`

**Safari:**
- **Mac:** `Cmd + Option + R`

### Solution 2: Clear Browser Cache

1. Open DevTools (F12 or Cmd+Option+I on Mac)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

### Solution 3: Check Browser Console

1. Open DevTools (F12)
2. Click the "Console" tab
3. Look for any red errors
4. If you see errors, share them for help

### Solution 4: Restart Dev Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

## 🎯 What You Should See

When the page loads correctly, you should see:

1. **Header**: "OnBrand Design System" title with "Button Component Showcase" subtitle
2. **Sections** showing different button variants:
   - Primary + Solid (purple buttons)
   - Secondary + Solid (light gray buttons)
   - Tertiary + Ghost (transparent buttons)
   - Destructive + Solid (red buttons)
   - Destructive + Ghost (red transparent buttons)
   - Secondary + Text (text-only buttons)
   - Interactive Demo (clickable buttons)

3. **Buttons** in various sizes: Small, Medium, Large, XLarge
4. **Buttons** with icons: Left icon, Right icon, Icon only
5. **Interactive** hover and focus states

## 🐛 Common Issues

### Issue: Permission Errors

**Solution:** See [SETUP.md](./SETUP.md)

```bash
sudo rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Port 5173 Already in Use

**Error:** `Port 5173 is already in use`

**Solution:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### Issue: TypeScript Errors

**Check for errors:**
```bash
npm run typecheck
```

**Current status:** ✅ All TypeScript errors fixed!

### Issue: CSS Not Loading

**Symptoms:** You see text but no styling

**Solution:**
1. Check if `App.css` and `Button.module.css` exist
2. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
3. Check browser DevTools Network tab for failed CSS requests

## 📊 Verification Checklist

Run these commands to verify everything is working:

```bash
# Check if dev server is running
lsof -i :5173

# Check TypeScript
npm run typecheck

# Check if all files exist
ls design-system/components/Button/
ls src/
```

Expected output:
- `lsof` should show a Node process
- `typecheck` should pass with no errors
- `ls` should show Button.tsx, Button.module.css, etc.

## 🔍 Debug Mode

If issues persist, run in debug mode:

```bash
# Set debug environment variable
DEBUG=vite:* npm run dev
```

This will show detailed Vite logs.

## 📞 Getting Help

If none of these solutions work:

1. **Check the browser console** for JavaScript errors
2. **Check the terminal** for server errors
3. **Share the error messages** for further assistance

## ✨ Success!

Once working, you should be able to:
- ✅ See all button variants
- ✅ Hover over buttons to see hover states
- ✅ Tab through buttons to see focus states
- ✅ Click buttons to test interactions
- ✅ Resize window to test responsive behavior

---

**Current Status:**
- ✅ TypeScript: No errors
- ✅ Dev Server: Running on port 5173
- ✅ HMR: Working (Hot Module Replacement active)
- ✅ All files: Present and correct

**Next Step:** Hard refresh your browser at http://localhost:5173/
