# Chapter 1: ROS 2 Fundamentals

This chapter introduces the ROS 2 middleware and communication model. It covers the foundational concepts needed to understand how ROS 2 serves as the "nervous system" for robotic systems.

## Topics Covered

- Introduction to ROS 2
- Nodes, topics, and services
- The ROS 2 communication model
- Practical examples of communication patterns

## Learning Objectives

By the end of this chapter, readers should:
- Understand the basic concepts of nodes, topics, and services
- Be able to describe how different robot components communicate
- Have a foundational understanding of ROS 2's architecture

## Introduction to ROS 2

ROS 2 (Robot Operating System 2) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

ROS 2 differs from its predecessor in several key ways, most notably in its use of DDS (Data Distribution Service) as the underlying middleware. This provides improved security, better real-time capabilities, and more reliable communication patterns.

### The Evolution from ROS 1 to ROS 2

ROS 1 utilized a custom TCPROS/Rosbridge communication system, which had certain limitations for production robotics applications. ROS 2 addresses these limitations by using DDS, a well-established middleware solution that provides:

- Better real-time performance
- Improved security features
- Platform independence
- Built-in discovery mechanisms

### Core Concepts

The fundamental building blocks of ROS 2 are nodes, topics, services, and actions. Understanding these concepts is crucial for designing and implementing robotic systems.

#### Nodes

A node is a fundamental component of any ROS 2 program. It's a process that performs computation and communicates with other nodes. All ROS 2 programs are structured as one or more nodes to modularize the computation.

In ROS 2, nodes are implemented as objects that inherit from the generic Node class. They provide a means to:
- Create publishers, subscribers, services, clients, and action servers or clients
- Acquire parameters
- Get access to the clock used for time operations

#### Topics and Message Passing

Topics are named buses over which nodes exchange messages. They provide asynchronous, decoupled communication between nodes using a publish/subscribe pattern.

When a node publishes a message to a topic, it doesn't know or care whether any other nodes are subscribed to that topic. Similarly, a node that subscribes to a topic receives messages published to it without knowing which node published them.

The publish/subscribe pattern is ideal for sensor streams, actuator commands, and other data streams that need to be shared between multiple nodes.

#### Services

Services provide a more direct request/response communication pattern. A client sends a request to a server, which processes the request and returns a response.

Unlike topics, services are synchronous and provide confirmation that a request was received and processed. They are ideal for tasks that require immediate responses, such as setting parameters, triggering actions, or requesting specific computations.

### The ROS 2 Communication Model

ROS 2's communication model is built on top of DDS (Data Distribution Service). DDS provides a publish/subscribe model that enables applications to communicate without knowing the location of other applications or how they communicate.

The communication model includes several quality of service (QoS) settings that allow fine-tuning of the communication behavior:
- Reliability: Best effort vs. reliable delivery
- Durability: Volatile vs. persistent data
- History: Keep all samples vs. keep last sample
- Deadline: Time constraints for data delivery
- Lifespan: Maximum data age before expiration

These QoS settings allow ROS 2 applications to be configured for various use cases, from reliable command and control to high-frequency sensor data streams.

## Practical Examples

Let's look at how these concepts work together in practice with a simple robot control example. Consider a robot with a laser scanner, motor controllers, and a navigation system.

The laser scanner node would publish laser scan data to a `/scan` topic. The navigation system would subscribe to this topic to receive sensor data. The navigation system would then use a service to request path planning from a path planner when needed.

When the navigation system has a new path, it would publish velocity commands to a `/cmd_vel` topic that the motor controllers subscribe to.

This decoupled architecture allows for flexible robot systems where components can be replaced or updated independently as long as they maintain the same interface.

## Technical Accuracy Note

All content in this chapter is based on official ROS 2 documentation and follows best practices for technical accuracy.