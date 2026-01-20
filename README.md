# Ignition Spark Prototyping Toolkit

A ready-to-use environment for building prototypes with the Ignition Spark Design System.

## Quick Start

1. **Setup** - Follow [SETUP-GUIDE.md](SETUP-GUIDE.md) to install dependencies
2. **Run** - `npm run dev` to start the development server
3. **Build** - Create your prototype in the `src/` folder

## Project Structure

```
/
├── /design-system       # Design system (components, tokens, docs)
│   ├── /components      # 51 React components
│   ├── /tokens          # Design tokens (colors, spacing, typography)
│   ├── README.md        # Design system overview
│   ├── COMPONENTS.md    # Component API reference
│   ├── TOKENS.md        # Token reference
│   └── AI-PROTOTYPING.md # AI prompts for building
├── /src                 # Your prototype code goes here
│   ├── /templates       # Layout templates to start from
│   └── App.tsx          # Main entry point
├── SETUP-GUIDE.md       # Installation instructions
├── CLAUDE.md            # Claude Code AI context
├── AGENTS.md            # Codex AI context
└── .cursorrules         # Cursor AI context
```

## For AI-Assisted Prototyping

This repo is configured for use with AI coding tools:

| Tool | Context File |
|------|--------------|
| Cursor | `.cursorrules` |
| Claude Code | `CLAUDE.md` |
| Codex | `AGENTS.md` |

See [design-system/AI-PROTOTYPING.md](design-system/AI-PROTOTYPING.md) for prompts and examples.

## Design System Docs

All design system documentation is in the `/design-system` folder:

- [README.md](design-system/README.md) - Overview & component list
- [COMPONENTS.md](design-system/COMPONENTS.md) - Component API reference
- [TOKENS.md](design-system/TOKENS.md) - Design tokens
- [AI-PROTOTYPING.md](design-system/AI-PROTOTYPING.md) - AI prompts & examples
- [ILLUSTRATIONS_GUIDE.md](design-system/ILLUSTRATIONS_GUIDE.md) - Illustration system

## Demo

Run `npm run dev` and visit http://localhost:5173 to see all components in action.
