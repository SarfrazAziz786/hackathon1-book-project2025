# Quickstart Guide: Spec-Driven Book on Physical AI & Humanoid Robotics

## Getting Started

This guide will help you set up, develop, and deploy the Spec-Driven Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot using Docusaurus.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git for version control
- GitHub account for deployment
- Basic knowledge of Markdown syntax

## Initial Setup

1. **Install Node.js and npm** (if not already installed):
   - Download from nodejs.org
   - Verify installation: `node --version` and `npm --version`

2. **Navigate to your project directory**:
   ```bash
   cd /path/to/your/hackathon1-book-project2025
   ```

3. **Install Docusaurus**:
   ```bash
   cd my-website
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```
   This will open a browser window at http://localhost:3000 with your site running.

## Book Structure Overview

The book is organized into 4 main modules:

1. **Module 1: The Robotic Nervous System (ROS 2)**
   - Focus: ROS 2 as the middleware layer connecting AI agents to robots

2. **Module 2: The Digital Twin (Gazebo & Unity)**
   - Focus: Building digital twins for humanoid robots using simulation

3. **Module 3: The AI-Robot Brain (NVIDIA Isaac™)**
   - Focus: Using NVIDIA Isaac technologies for robot AI systems

4. **Module 4: Vision-Language-Action (VLA)**
   - Focus: Integrating vision, language, and action for robot autonomy

## Adding Content

1. **Create new content files** in the `my-website/docs/` directory
2. **Organize content by module** in subdirectories
3. **Use Markdown (.md) format** for content files
4. **Follow the naming convention**: `module-{number}-{topic}.md`
5. **Update the sidebar configuration** in `sidebars.ts` to include new files

## Building and Testing

1. **Build the static site locally**:
   ```bash
   npm run build
   ```

2. **Serve the built site locally**:
   ```bash
   npm run serve
   ```
   This will serve the static site at http://localhost:3000 for testing

3. **Check for build errors** and fix any issues before deployment

## Deploying to GitHub Pages

1. **Set up GitHub Pages** in your repository settings

2. **Configure the deployment settings** in `docusaurus.config.ts` with your project details

3. **Deploy the site**:
   ```bash
   GIT_USER=<Your GitHub username> npm run deploy
   ```
   Or if using SSH:
   ```bash
   USE_SSH=true npm run deploy
   ```

## Content Quality Standards

- All content must follow APA citation format
- Technical accuracy must be verified against official documentation
- Code examples should be executable or clearly labeled as conceptual
- All claims must be verifiable through authoritative sources
- Content should be accessible to AI and robotics students and professionals

## RAG Chatbot Integration

- The chatbot should only respond based on information in the book content
- Responses must include proper attribution to source content
- No fabricated or hallucinated information should be generated
- The chatbot should guide users to specific sections of the book for more information

## Going Further

After completing this setup, you should be able to:

1. Develop and preview new book content
2. Build and test the site locally
3. Deploy updates to GitHub Pages
4. Maintain content quality standards
5. Ensure the RAG chatbot remains properly grounded in book content

## Support

For questions about Docusaurus, refer to the official documentation at https://docusaurus.io/

For questions about this book project, refer to the specifications in the `/specs` directory.