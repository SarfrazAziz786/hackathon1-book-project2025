# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a **Docusaurus-based educational website** for the "Spec-Driven Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot". The site documents robotics concepts across 4 modules:

- **Module 1**: The Robotic Nervous System (ROS 2)
- **Module 2**: The Digital Twin (Gazebo & Unity simulation)
- **Module 3**: The AI-Robot Brain (NVIDIA Isaac™)
- **Module 4**: Vision-Language-Action (VLA) for humanoid autonomy

The site is deployed to GitHub Pages and includes a placeholder for an embedded RAG (Retrieval-Augmented Generation) chatbot.

## Project Structure

```
/my-website/                    # Main Docusaurus project
├── docs/                       # Book content (Markdown files)
│   ├── intro.md               # Introduction chapter
│   ├── module-1-ros2/         # ROS 2 module (index + 3 chapters)
│   ├── module-2-simulation/   # Digital Twin module (index + 3 chapters)
│   ├── module-3-ai-brain/     # NVIDIA Isaac module (index + 3 chapters)
│   └── module-4-vla/          # VLA module (index + 3 chapters)
├── src/
│   ├── components/            # React components
│   │   ├── RAGChatbot/        # Embedded chatbot component (placeholder)
│   │   └── HomepageFeatures/  # Homepage feature cards
│   ├── pages/                 # Custom pages (index.tsx = homepage)
│   ├── css/                   # Styling
│   └── ...
├── static/                    # Static assets (images, icons, etc.)
├── blog/                      # Blog posts (optional)
├── docusaurus.config.ts       # Main Docusaurus configuration
├── sidebars.ts                # Navigation sidebar configuration
├── package.json               # NPM dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## Tech Stack

- **Docusaurus 3.9.2**: React-based static site generator for documentation
- **React 19**: UI framework
- **TypeScript ~5.6**: Type safety for components
- **Node.js ≥ 20.0**: Required runtime

## Common Commands

All commands are run from `/my-website/` directory:

```bash
# Development
npm start                 # Start dev server (http://localhost:3000)
npm run typecheck        # Run TypeScript type checking

# Building
npm run build            # Build production-ready site (outputs to build/)
npm run clear            # Clear .docusaurus build cache

# Testing/Serving
npm run serve            # Serve the built site locally for testing

# Deployment
npm run deploy           # Deploy to GitHub Pages (gh-pages branch)

# Other
npm run docusaurus       # Run raw docusaurus CLI
npm run write-translations  # Generate translation files
npm run write-heading-ids   # Auto-generate heading IDs
```

## High-Level Architecture

### Content Organization

The book is organized using **Docusaurus's docs preset**:
- Content is authored in Markdown (`.md`) files in the `docs/` folder
- The sidebar navigation is defined in `sidebars.ts`, mapping folder structure to UI
- Each module has an `index.md` (module overview) and chapter files
- MDX (Markdown with JSX) is supported, allowing React components inline in docs

### Build & Deployment

- **Dev server**: `npm start` watches files and hot-reloads via Webpack
- **Production build**: `npm run build` generates static HTML in `build/` directory
- **GitHub Pages deployment**: Uses `gh-pages` branch; configure in `docusaurus.config.ts`
  - Organization: `SarfrazAziz786`
  - Repository: `hackathon1-book-project2025`
  - Base URL: `/hackathon1-book-project2025/`

### RAG Chatbot Component

The embedded RAG chatbot (`src/components/RAGChatbot/index.js`) is currently a **placeholder**:
- Renders a chat UI using React hooks (useState, useRef, useEffect)
- Uses Docusaurus's `useDoc()` hook to access current page context
- The actual RAG backend (embeddings, retrieval, LLM) is not yet implemented
- Integration point documented in `src/components/RAGChatbot/indexing-approach.md`

### Configuration

- **`docusaurus.config.ts`**: Configures theme, navbar, footer, Algolia search integration
- **`sidebars.ts`**: Defines the tutorial sidebar structure and navigation order
- **GitHub Pages**: Configured to deploy to `gh-pages` branch with `trailingSlash: true`
- **Search**: Algolia search is integrated but needs `appId` and `apiKey` (currently placeholders)

## Key Development Patterns

### Adding a New Page/Chapter

1. Create a `.md` or `.mdx` file in `docs/` (or a subfolder like `docs/module-1-ros2/`)
2. Add an entry to the appropriate sidebar in `sidebars.ts`
3. Use Markdown syntax; JSX/React components are supported via MDX
4. Docusaurus will auto-generate navigation and table of contents

### Editing Components

- Homepage is `src/pages/index.tsx`
- Components are in `src/components/` and can be imported into Markdown via MDX
- Styling uses CSS modules (`.module.css`) and global CSS (`src/css/custom.css`)

### Type Checking

Run `npm run typecheck` before committing to catch TypeScript errors in components.

## Important Notes

- The site is built with **TypeScript** but `tsconfig.json` is used only for editor experience; compilation is handled by Docusaurus
- The `build/` directory is generated and should not be committed (use `.gitignore`)
- Algolia search is configured but requires credentials to be active
- The RAG chatbot is a stub awaiting backend implementation
- GitHub Pages deployment requires the `gh-pages` branch to exist (created by `npm run deploy`)

## Useful Resources

- [Docusaurus 3.x Documentation](https://docusaurus.io/)
- [MDX Documentation](https://mdxjs.com/)
- [React Hooks Documentation](https://react.dev/reference/react/hooks)
