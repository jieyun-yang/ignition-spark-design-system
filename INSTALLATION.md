# Getting Started with Ignition Spark Design System

A simple guide to get the design system running on your computer.

---

## 🚀 Quick Start (2 Steps)

### Step 1: Add Your FontAwesome Token

This project uses FontAwesome Pro icons.

1. Copy the file `.npmrc.example` and rename it to `.npmrc`
2. Go to https://fontawesome.com/account and copy your "Package Token"
3. Open the `.npmrc` file and replace `YOUR_FONTAWESOME_TOKEN` with your actual token:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=A1B2C3D4-E5F6-7890-ABCD-EF1234567890
```

> **Don't have FontAwesome Pro?** See [Alternative: Use Free Icons](#alternative-use-free-icons-instead) below.

---

### Step 2: Install and Run

In your project folder, run these commands one at a time:

```bash
npm install
npm run dev
```

**That's it!** Your browser will open to http://localhost:5173 showing all components.

---

## ✅ What You Should See

When everything works, you'll see:
- ✅ A webpage with 53+ design system components
- ✅ Buttons, forms, cards, and other UI elements
- ✅ Navigation to browse different component categories

---

## 🆘 Something Went Wrong?

### Error: "E401 - Incorrect or missing password"

**This means:** Your FontAwesome token isn't set up correctly.

**Fix it:**
1. Make sure you created a `.npmrc` file (not `.npmrc.example`)
2. Double-check you copied the full token from https://fontawesome.com/account
3. Make sure you replaced `YOUR_FONTAWESOME_TOKEN` with your actual token
4. Make sure there are NO spaces around the `=` sign
5. The line should look like: `//npm.fontawesome.com/:_authToken=A1B2C3D4-1234-5678-ABCD-1234567890AB`

---

### Error: "Port 5173 already in use"

**This means:** Something else is using that port.

**Fix it:**
```bash
npm run dev -- --port 3000
```

Now open http://localhost:3000 instead.

---

### Error: "Cannot find module" or "File not found"

**This means:** Dependencies didn't install properly.

**Fix it:**
```bash
npm install
```

Then try `npm run dev` again.

---

### The page is blank or looks broken

**Fix it:**

1. **Hard refresh your browser:**
   - **Mac:** Press `Cmd + Shift + R`
   - **Windows:** Press `Ctrl + Shift + R`

2. **Still broken?** Restart the dev server:
   - Press `Ctrl + C` in Terminal to stop it
   - Run `npm run dev` again

---

## 🎨 Using Components in Your Project

Once the dev server is running, you can start building with components:

### Basic Example

```tsx
import { Button, Alert, Card } from './design-system';

function MyApp() {
  return (
    <div>
      <Alert status="success">
        Welcome to Ignition Spark Design System!
      </Alert>

      <Button hierarchy="primary" size="large">
        Click Me
      </Button>

      <Card title="My Card" description="This is a card component">
        Card content goes here
      </Card>
    </div>
  );
}
```

### Available Components

**53 components including:**
- **Forms:** Button, TextInput, Select, Checkbox, RadioButton, Switch
- **Feedback:** Alert, Toast, Modal, Notification, Banner
- **Data Display:** Table, Card, Badge, Avatar, Tabs
- **Navigation:** SideNav, Menu, Pagination, Breadcrumb

See [COMPONENTS.md](./COMPONENTS.md) for the full list and API documentation.

---

## 📚 Important Files to Know

- **[COMPONENTS.md](./COMPONENTS.md)** - Complete list of all components and how to use them
- **[DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)** - Colors, spacing, fonts (design tokens)
- **[AI-PROMPT-GUIDE.md](./AI-PROMPT-GUIDE.md)** - Build prototypes faster with AI

---

## 🔄 Alternative: Use Free Icons Instead

If you don't have FontAwesome Pro, you can use free icons:

### Step 1: Edit package.json

Open `package.json` and **delete these 3 lines** (around line 67-69):

```json
"@fortawesome/pro-light-svg-icons": "^7.1.0",
"@fortawesome/pro-regular-svg-icons": "^7.1.0",
"@fortawesome/pro-solid-svg-icons": "^7.1.0",
```

### Step 2: Install

```bash
npm install
npm run dev
```

> **Note:** Some icons may look different or be missing with free icons only.

---

## 💡 Tips for Non-Technical Users

### What is a .npmrc file?

A `.npmrc` file tells npm (the package manager) where to download FontAwesome Pro icons from and what token to use. It's just a text file with settings.

**How to create it:**
1. Find the file `.npmrc.example` in this folder
2. Right-click it and choose "Duplicate" or "Copy"
3. Rename the copy to `.npmrc` (remove the `.example` part)
4. Open it in any text editor and replace `YOUR_FONTAWESOME_TOKEN` with your actual token

### What is Terminal/Command Prompt?

**Mac:**
- Press `Cmd + Space`, type "Terminal", press Enter
- You'll see a window with text and a cursor

**Windows:**
- Press `Windows Key`, type "Command Prompt", press Enter
- You'll see a black window with text

### What is npm?

npm is a tool that downloads and manages code libraries. It runs from Terminal/Command Prompt.

### What does "npm install" do?

It downloads all the code this project needs to run (called "dependencies").

### What does "npm run dev" do?

It starts a local web server on your computer so you can see the design system in your browser.

---

## 🎯 Next Steps

Once you're up and running:

1. **Browse components** - Click around in the dev server to see all 53 components
2. **Read component docs** - Open [COMPONENTS.md](./COMPONENTS.md) to learn how to use each component
3. **Try AI prototyping** - Check [AI-PROMPT-GUIDE.md](./AI-PROMPT-GUIDE.md) to build UIs 10x faster
4. **Build something!** - Start using components in your project

---

## 🆘 Still Need Help?

1. **Check if the dev server is running** - Look for "Local: http://localhost:5173" in Terminal
2. **Look for red error messages** - Share them with your developer or team
3. **Try restarting everything** - Close Terminal, reopen it, and run the commands again

---

## 🔧 Advanced Options (Optional)

<details>
<summary>Click to expand advanced installation options</summary>

### Using in a Different Project

To use this design system in another project:

1. **Copy the design-system folder:**
   ```bash
   cp -r /path/to/ignition-spark-design-system/design-system ./src/
   ```

2. **Install dependencies:**
   ```bash
   npm install clsx react react-dom
   npm install --save-dev typescript @types/react @types/react-dom
   ```

3. **Import the CSS tokens in your main file:**
   ```tsx
   import './design-system/tokens/tokens.css';
   ```

### Custom Colors and Styles

You can override design tokens by creating a custom CSS file:

```css
/* custom-tokens.css */
:root {
  --color-primary-500: #your-brand-color;
  --spacing-4: 20px;
  --font-size-base: 16px;
}
```

Import it after the design system tokens:
```tsx
import './design-system/tokens/tokens.css';
import './custom-tokens.css';
```

</details>

---

Built with ❤️ by the Ignition team
