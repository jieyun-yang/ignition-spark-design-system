# Setup Guide for Design Team

This guide walks you through setting up a clean Mac to work with the Ignition Spark Design System.

**Supported AI Tools:**
- **Cursor** (built-in AI) → configure with `AGENTS.md` content
- **Claude Code** (Anthropic CLI) → reads `CLAUDE.md`
- **Codex** (OpenAI CLI) → reads `AGENTS.md`

---

## Table of Contents

1. [Prerequisites](#1-prerequisites) - Install required apps
2. [Get the Project](#2-get-the-project) - Download or clone
3. [Run the Project](#3-run-the-project) - Install and start
4. [AI Setup](#4-ai-setup) - Configure your AI tool
5. [MCP Setup](#5-mcp-setup) - Optional AI enhancements
6. [Troubleshooting](#6-troubleshooting) - Common issues
7. [Quick Reference](#7-quick-reference) - Commands and shortcuts
8. [Creating New Prototype Projects](#8-creating-new-prototype-projects) - Use symlinks

---

## 1. Prerequisites

### Install Homebrew (Package Manager)

Open **Terminal** (press `Cmd + Space`, type "Terminal", press Enter) and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. When done, **run the commands it shows** to add Homebrew to your PATH.

### Install Node.js

```bash
brew install node
```

Verify:
```bash
node --version   # Should show v18+ or v20+
npm --version    # Should show 9+ or 10+
```

### Install Cursor

1. Go to [cursor.sh](https://cursor.sh)
2. Download the Mac version
3. Open the `.dmg` file and drag Cursor to Applications
4. Open Cursor from Applications

---

## 2. Get the Project

### Option A: Download ZIP (Simplest)

1. Go to the [GitHub repository](https://github.com/anthropics/ignition-spark-design-system)
2. Click the green **Code** button
3. Click **Download ZIP**
4. Unzip to `~/Documents/ignition-spark-design-system`

### Option B: Clone with Git

```bash
brew install git
cd ~/Documents
git clone https://github.com/anthropics/ignition-spark-design-system.git
cd ignition-spark-design-system
```

---

## 3. Run the Project

### Step 1: Configure FontAwesome Pro

This project uses FontAwesome Pro icons.

1. In Finder, navigate to the project folder
2. Find `.npmrc.example` and duplicate it
3. Rename the copy to `.npmrc` (remove `.example`)
4. Open `.npmrc` in any text editor
5. Replace `YOUR_FONTAWESOME_TOKEN` with your token from [fontawesome.com/account](https://fontawesome.com/account)

The file should look like:
```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=A1B2C3D4-YOUR-ACTUAL-TOKEN
```

> **Don't have FontAwesome Pro?** See [Using Free Icons](#using-free-icons-instead) below.

### Step 2: Install and Run

In Terminal, navigate to the project and run:
```bash
cd ~/Documents/ignition-spark-design-system
npm install
npm run dev
```

### Step 3: View in Browser

Open [http://localhost:5173](http://localhost:5173) - you should see the design system with 51 components.

---

## 4. AI Setup

### Option A: Cursor (Recommended)

Open the project in Cursor:
```bash
cursor ~/Documents/ignition-spark-design-system
```

Or use `File > Open Folder` in Cursor.

**Configure rules:** Go to Cursor Settings > Rules and paste the content from `AGENTS.md` to teach Cursor the design system rules.

To chat with AI: Press `Cmd + K`

---

### Option B: Claude Code (CLI)

Install:
```bash
npm install -g @anthropic-ai/claude-code
```

Run in project folder:
```bash
cd ~/Documents/ignition-spark-design-system
claude
```

Claude Code automatically reads `CLAUDE.md` for project rules.

---

### Option C: Codex (OpenAI CLI)

Install:
```bash
npm install -g @openai/codex
```

Run in project folder:
```bash
cd ~/Documents/ignition-spark-design-system
codex
```

Codex automatically reads `AGENTS.md` for project rules.

---

### AI Context Files

| File | Used By | Auto-reads? |
|------|---------|-------------|
| `CLAUDE.md` | Claude Code | Yes |
| `AGENTS.md` | Codex, Cursor (manual) | Yes / Manual |
| `design-system/AI-PROTOTYPING.md` | All tools | Manual (copy prompts) |

---

## 5. MCP Setup (Optional)

MCPs give AI additional capabilities like reading Figma and testing in browsers.

> **Note:** MCPs work with Claude Code and Cursor (when using Claude model).

### Playwright MCP (Browser Testing)

Lets AI interact with browsers to test your prototypes.

**Configure in Cursor:**

1. Open Cursor Settings (`Cmd + ,`)
2. Search for "MCP" or go to **Features > MCP Servers**
3. Add this configuration:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic/mcp-playwright"]
    }
  }
}
```

### Figma MCP (Read Designs)

Lets AI read your Figma designs directly.

**Get a Figma token:**
1. Go to [Figma](https://www.figma.com) → Profile → Settings
2. Scroll to **Personal access tokens**
3. Generate new token and copy it

**Add to Cursor MCP config:**
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@anthropic/mcp-playwright"]
    },
    "figma": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-figma"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}
```

**Restart Cursor** after configuring MCPs.

---

## 6. Troubleshooting

### "Command not found: node"

Homebrew didn't add itself to your PATH. Run:
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

### "E401 - Incorrect or missing password"

FontAwesome token issue. Check:
1. File is named `.npmrc` (not `.npmrc.example`)
2. Token is your actual token, not `YOUR_FONTAWESOME_TOKEN`
3. No spaces around the `=` sign
4. Token looks like: `A1B2C3D4-1234-5678-ABCD-1234567890AB`

### "Port 5173 already in use"

Something else is using that port. Run on a different port:
```bash
npm run dev -- --port 3000
```
Then open http://localhost:3000

### "Cannot find module" or "File not found"

Dependencies didn't install properly:
```bash
npm install
```
Then try `npm run dev` again.

### Page is blank or looks broken

1. Hard refresh: `Cmd + Shift + R`
2. If still broken, restart the server:
   - Press `Ctrl + C` in Terminal to stop
   - Run `npm run dev` again

### MCP not working

1. Restart Cursor after configuring
2. Check JSON is valid (no trailing commas)
3. Test manually: `npx @anthropic/mcp-playwright`

---

## 7. Quick Reference

### Commands

| Command | What it does |
|---------|--------------|
| `npm install` | Download dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run typecheck` | Check TypeScript |
| `cursor .` | Open in Cursor |

### Cursor Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd + K` | Open AI chat |
| `Cmd + L` | Open AI panel |
| `Cmd + P` | Quick file open |
| `Cmd + Shift + P` | Command palette |

### Key Documentation

| File | Purpose |
|------|---------|
| [COMPONENTS.md](./design-system/COMPONENTS.md) | Component API docs |
| [TOKENS.md](./design-system/TOKENS.md) | Design tokens |
| [AI-PROTOTYPING.md](./design-system/AI-PROTOTYPING.md) | AI prompts & examples |

### AI Prototyping Workflow

1. Open [AI-PROTOTYPING.md](./design-system/AI-PROTOTYPING.md)
2. Copy the Phase 1 prompt
3. Add your Figma link or description
4. Paste into Cursor AI chat (`Cmd + K`)
5. Review and approve the AI's plan
6. Let the AI build!

---

## Using Free Icons Instead

If you don't have FontAwesome Pro:

1. Open `package.json`
2. Delete these lines (around line 67-69):
   ```json
   "@fortawesome/pro-light-svg-icons": "^7.1.0",
   "@fortawesome/pro-regular-svg-icons": "^7.1.0",
   "@fortawesome/pro-solid-svg-icons": "^7.1.0",
   ```
3. Run `npm install` and `npm run dev`

> Some icons may look different or be missing.

---

## 8. Creating New Prototype Projects

Once the design system is set up, create new prototypes using symlinks:

```bash
# 1. Create and enter project folder
mkdir ~/Documents/my-prototype
cd ~/Documents/my-prototype

# 2. Symlink the design system (inner folder)
ln -s ~/Documents/ignition-spark-design-system/design-system ./design-system

# 3. Copy agent instructions
cp ~/Documents/ignition-spark-design-system/AGENTS.md ./AGENTS.md
ln -s AGENTS.md ./CLAUDE.md
```

Then start your AI tool (Cursor, Claude Code, Codex) and ask it to set up a React project. The agent can handle `npm init`, installing dependencies, etc.

**Why symlink the inner folder?**
- Keeps import paths clean: `./design-system/COMPONENTS.md`
- Components, tokens, and guidelines all accessible
- Updates to central design system apply to all projects

---

## Glossary for Non-Technical Users

**Terminal** - The app where you type commands. Press `Cmd + Space`, type "Terminal".

**npm** - A tool that downloads code libraries. Runs in Terminal.

**npm install** - Downloads all the code this project needs.

**npm run dev** - Starts a local web server so you can see the design system.

**.npmrc file** - A settings file that tells npm where to get FontAwesome icons.

**localhost:5173** - Your computer acting as a web server. Only you can see it.

---

Happy prototyping! 🚀
