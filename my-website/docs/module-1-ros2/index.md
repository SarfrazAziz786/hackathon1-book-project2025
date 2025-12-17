# Module 1: The Robotic Nervous System (ROS 2)

This module focuses on ROS 2 as the middleware layer that connects AI agents to humanoid robot hardware and simulators. 

Target audience: AI and robotics students with basic Python knowledge.

In this module, you will learn:
- ROS 2 fundamentals: nodes, topics, services, and the communication model
- How Python agents use rclpy to control robots
- The role of URDF in humanoid robot structure

## Chapter Overview

1. [ROS 2 Fundamentals](./chapter-1-fundamentals.md) - Understanding the ROS 2 middleware and communication model
2. [Bridging AI Agents to Robots](./chapter-2-bridging-ai-robots.md) - Python agents, rclpy, and control flow
3. [Robot Description with URDF](./chapter-3-urdf.md) - Structure, joints, links, and humanoid robot modeling

## Prerequisites

Before starting this module, you should:
- Have basic knowledge of Python programming
- Understand fundamental concepts of robotics
- Be familiar with basic Linux command line operations

## Module Structure

This module is structured to provide a comprehensive introduction to ROS 2. We begin with the fundamental concepts that underpin the entire system, then move on to practical implementation techniques for connecting AI agents to physical robots, and conclude with the robot description system that allows for simulation and visualization.

## Success Criteria

After completing this module, you should be able to:
- Understand the basic concepts of nodes, topics, and services
- Be able to describe how different robot components communicate
- Understand how Python agents use rclpy to control robots
- Write basic scripts to control simulated robots
- Understand the role of URDF in humanoid robot structure
- Create or modify simple URDF files
- Understand how links and joints define robot kinematics

## Learning Path

This module builds a foundation of knowledge that will be essential for understanding the more advanced topics in the subsequent modules. The knowledge gained here will be directly applicable to simulation, AI integration, and autonomous robot systems covered in later modules.

Each chapter includes theoretical concepts, practical examples, and exercises to reinforce learning. The progression from basic concepts to practical implementation is designed to build expertise incrementally.

## Resources

For additional information and reference materials, see:
- Official ROS 2 documentation
- Tutorials and examples in the ROS 2 ecosystem
- Community forums and support channels
- Additional readings and research papers on ROS 2

## Technical Standards

All content in this module adheres to the following technical standards:
- Code examples are verified against official ROS 2 documentation
- Concepts are explained with reference to current best practices
- All examples use the latest ROS 2 distributions
- Technical terminology is used consistently and correctly

## Chapter Summaries

### Chapter 1: ROS 2 Fundamentals
This chapter introduces the ROS 2 middleware and communication model. It covers the foundational concepts needed to understand how ROS 2 serves as the "nervous system" for robotic systems. You'll learn about nodes, topics, services, and the ROS 2 communication model with practical examples.

### Chapter 2: Bridging AI Agents to Robots
This chapter explores how Python agents use rclpy to control robots, covering the control flow from software to actuators. You'll learn about implementing Python agents, publisher/subscriber patterns, and service-based communication for robot control.

### Chapter 3: Robot Description with URDF
This chapter explains the role of URDF (Unified Robot Description Format) in defining humanoid robot structure. You'll learn about links, joints, visual and collision properties, and how to create robot models for simulation and control.