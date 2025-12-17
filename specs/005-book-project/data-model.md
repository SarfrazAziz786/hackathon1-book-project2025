# Data Model: Spec-Driven Book on Physical AI & Humanoid Robotics

## Entities

### Docusaurus Book Platform
- **Description**: A modern static website generator configured to host the Physical AI & Humanoid Robotics book
- **Fields**: 
  - Name: string
  - Version: string
  - Configuration: object (docusaurus.config.js settings)
  - Theme: string (custom styling and layout)
- **Relationships**: 
  - Contains: Book modules and chapters
  - Uses: Markdown/MDX content files
  - Provides: Navigation and search functionality
- **Validation Rules**: 
  - Must build without errors
  - All internal links must be valid
  - Search functionality must work across all content

### Book Module
- **Description**: A major section of the book focusing on a specific aspect of Physical AI & Humanoid Robotics
- **Fields**: 
  - ModuleId: string (unique identifier like "module-1-ros2")
  - Title: string (display title)
  - Chapters: list (Chapter entities)
  - Learning Objectives: list (specific educational goals)
  - Prerequisites: list (required knowledge areas)
- **Relationships**: 
  - Contains: Multiple chapters
  - Connected to: Other modules via cross-references
- **Validation Rules**: 
  - Must have at least one chapter
  - Content must align with learning objectives
  - Prerequisites must be clearly defined

### Module 1 (ROS 2 - The Robotic Nervous System)
- **Description**: Focuses on ROS 2 as the middleware layer that connects AI agents to humanoid robot hardware and simulators
- **Fields**: 
  - Title: string
  - Focus: string (ROS 2 middleware and communication)
  - Target Audience: string (AI and robotics students with basic Python knowledge)
  - Success Criteria: list (specific measurable outcomes)
- **Relationships**: 
  - Prerequisite for: Other modules that build on ROS 2 concepts
  - Contains: Chapters on fundamentals, bridging AI to robots, and URDF
- **Validation Rules**: 
  - All core ROS 2 concepts must be explained (nodes, topics, services)
  - Code examples must be technically accurate

### Module 2 (Simulation - The Digital Twin)
- **Description**: Covers building digital twins for humanoid robots using Gazebo and Unity
- **Fields**: 
  - Title: string
  - Focus: string (physics simulation, sensor modeling, human-robot interaction)
  - Target Audience: string (students with basic ROS 2 and simulation knowledge)
  - Success Criteria: list (specific measurable outcomes)
- **Relationships**: 
  - Builds on: Module 1 concepts
  - Uses: Gazebo and Unity tools
- **Validation Rules**: 
  - Explanation of both Gazebo and Unity must be provided
  - Sensor simulation concepts must be clearly explained

### Module 3 (AI-Brain - NVIDIA Isaac™)
- **Description**: Using NVIDIA Isaac technologies to build the AI "brain" of humanoid robots
- **Fields**: 
  - Title: string
  - Focus: string (perception, synthetic data generation, localization, navigation, path planning)
  - Target Audience: string (students with prior knowledge of ROS 2 and robot simulation)
  - Success Criteria: list (specific measurable outcomes)
- **Relationships**: 
  - Builds on: Module 1 (ROS 2) and Module 2 (Simulation)
  - Uses: NVIDIA Isaac tools
- **Validation Rules**: 
  - Isaac Sim and Isaac ROS concepts must be explained
  - Navigation and path planning must be covered

### Module 4 (VLA - Vision-Language-Action)
- **Description**: Integrating vision, language, and action to enable humanoid robots to understand voice commands
- **Fields**: 
  - Title: string
  - Focus: string (voice commands, LLM planning, action execution)
  - Target Audience: string (students with knowledge of ROS 2, simulation, and basic LLM concepts)
  - Success Criteria: list (specific measurable outcomes)
- **Relationships**: 
  - Integrates concepts from: Modules 1, 2, and 3
  - Uses: Whisper, LLMs for planning
- **Validation Rules**: 
  - VLA paradigm must be clearly explained
  - Voice-to-action pipelines must be detailed

### Chapter
- **Description**: A subsection within a module that covers specific topics in detail
- **Fields**: 
  - ChapterId: string (unique identifier)
  - Title: string
  - Content: text (the actual content)
  - WordCount: number (to meet length requirements)
  - Sections: list (subsections within the chapter)
- **Relationships**: 
  - Belongs to: One module
  - Contains: Multiple sections
- **Validation Rules**: 
  - Must be between 500-800 words (for 2000-2500 word modules with 3-4 chapters)
  - Content must align with parent module's objectives

### Content File (Markdown/MDX)
- **Description**: Individual files containing the book content in Markdown or MDX format
- **Fields**: 
  - FilePath: string (path within the docs directory)
  - Format: string ("MD" or "MDX")
  - WordCount: number
  - Citations: list (APA format references)
- **Relationships**: 
  - Represents: One chapter or section
  - Referenced by: Docusaurus sidebar configuration
- **Validation Rules**: 
  - Must follow proper Markdown/MDX syntax
  - All citations must be in APA format
  - File paths must match sidebar configuration

### RAG Chatbot System
- **Description**: Retrieval-Augmented Generation chatbot embedded in the book to answer questions about the content
- **Fields**: 
  - Implementation: string (technology used, e.g., OpenAI, LangChain, etc.)
  - Knowledge Base: object (indexed content from the book)
  - Response Format: string (structured responses)
- **Relationships**: 
  - Grounded in: Book content
  - Accessible from: All book pages
- **Validation Rules**: 
  - Responses must be fully grounded in book content (no hallucinations)
  - Must cite specific sections where information comes from

### GitHub Pages Deployment
- **Description**: The hosting and deployment infrastructure for the published book
- **Fields**: 
  - Repository: string (GitHub repository name)
  - Branch: string (typically gh-pages)
  - URL: string (public URL of the deployed site)
  - Build Process: object (GitHub Actions configuration)
- **Relationships**: 
  - Hosts: The Docusaurus book platform
  - Serves: All book content files
- **Validation Rules**: 
  - Site must be publicly accessible
  - All pages must load correctly
  - Search functionality must work

## State Transitions

### Book Development Lifecycle
- **Planning** → **Content Creation** (when specs are finalized)
- **Content Creation** → **Review** (when initial drafts are complete)
- **Review** → **Revision** (when feedback is received)
- **Revision** → **Review** (if major changes are made)
- **Review** → **Final Approval** (when content meets all requirements)
- **Final Approval** → **Deployment** (when ready for publication)
- **Deployment** → **Maintenance** (ongoing updates and fixes)

### Module Development Lifecycle
- **Module Design** → **Chapter Creation** (when module structure is defined)
- **Chapter Creation** → **Module Assembly** (when all chapters are written)
- **Module Assembly** → **Module Testing** (when module is integrated into book)
- **Module Testing** → **Module Approved** (when module meets quality standards)
- **Module Approved** → **Integrated into Book** (when all modules are ready)

### Deployment Pipeline
- **Local Build** → **Validation** (when build completes successfully locally)
- **Validation** → **Staging Deployment** (for preview and testing)
- **Staging Deployment** → **Production Deployment** (when validated)
- **Production Deployment** → **Monitoring** (ongoing performance checks)