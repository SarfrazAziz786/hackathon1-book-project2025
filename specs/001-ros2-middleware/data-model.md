# Data Model: ROS 2 Middleware Educational Module

## Entities

### ROS 2
- **Description**: The Robot Operating System version 2, which serves as the middleware layer for connecting AI agents to robotic hardware
- **Fields**: 
  - Name: string
  - Version: string
  - Middleware Type: string (distributed message-passing)
  - Communication Model: string (publish-subscribe and service calls)
- **Relationships**: 
  - Contains: Nodes, Topics, Services
  - Uses: rclpy (for Python)
- **Validation Rules**: 
  - Must follow official ROS 2 documentation specifications
  - Version must be current and maintained

### rclpy
- **Description**: The Python client library for ROS 2 that allows Python-based AI agents to communicate with and control robots
- **Fields**: 
  - Library Name: string
  - Language: string (Python)
  - Functionality: string (Node creation, topic subscription/publishing, service calls)
- **Relationships**: 
  - Used by: Python agents
  - Interfaces with: ROS 2
- **Validation Rules**: 
  - Code examples must be executable or clearly labeled as conceptual
  - Must follow official rclpy documentation

### URDF (Unified Robot Description Format)
- **Description**: An XML format used to describe robot models including links, joints, and other physical properties of humanoid robots
- **Fields**: 
  - Format Type: string (XML)
  - Purpose: string (robot structure description)
  - Components: string (links, joints, materials)
- **Relationships**: 
  - Describes: Robot models
  - Used by: ROS 2 ecosystem
- **Validation Rules**: 
  - Must conform to URDF XML schema
  - Examples must be valid and functional

### Node
- **Description**: Individual processes in ROS 2 that perform specific functions and communicate with other nodes
- **Fields**: 
  - Name: string
  - Function: string (specific role/purpose)
  - Communication: list (topics subscribed/published, services provided/consumed)
- **Relationships**: 
  - Part of: ROS 2 network
  - Communicates with: other nodes
- **Validation Rules**: 
  - Must follow ROS 2 node specifications
  - Examples must demonstrate real functionality

### Topic
- **Description**: Named buses over which ROS nodes exchange messages related to robot control and sensing
- **Fields**: 
  - Name: string
  - Message Type: string
  - Direction: string (published/subscribed)
- **Relationships**: 
  - Used by: Nodes
  - Part of: ROS 2 communication model
- **Validation Rules**: 
  - Must follow ROS 2 topic standards
  - Examples must be technically accurate

### Service
- **Description**: Request/response communication pattern in ROS 2 for direct node-to-node interactions
- **Fields**: 
  - Name: string
  - Request Type: string
  - Response Type: string
  - Provider: string (node providing the service)
- **Relationships**: 
  - Used by: Nodes
  - Part of: ROS 2 communication model
- **Validation Rules**: 
  - Must follow ROS 2 service specifications
  - Examples must demonstrate proper request/response patterns

## State Transitions

### Node Lifecycle
- **Inactive** → **Active** (when initialized and started)
- **Active** → **Inactive** (when shutdown)
- **Active** → **Error** (when errors occur)

### Learning Module Progression
- **Not Started** → **Reading** (student begins module)
- **Reading** → **Understanding** (student grasps concepts)
- **Understanding** → **Applying** (student applies knowledge)
- **Applying** → **Mastery** (student demonstrates proficiency)