import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1-ros2/index',
        'module-1-ros2/chapter-1-fundamentals',
        'module-1-ros2/chapter-2-bridging-ai-robots',
        'module-1-ros2/chapter-3-urdf',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2-simulation/index',
        'module-2-simulation/chapter-1-digital-twin-concept',
        'module-2-simulation/chapter-2-gazebo-physics',
        'module-2-simulation/chapter-3-unity-rendering',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module-3-ai-brain/index',
        'module-3-ai-brain/chapter-1-isaac-sim',
        'module-3-ai-brain/chapter-2-slam-navigation',
        'module-3-ai-brain/chapter-3-nav2-planning',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module-4-vla/index',
        'module-4-vla/chapter-1-vla-paradigm',
        'module-4-vla/chapter-2-voice-to-action',
        'module-4-vla/chapter-3-llm-planning',
      ],
    },
  ],
};

export default sidebars;
