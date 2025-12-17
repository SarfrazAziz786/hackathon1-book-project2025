# Chapter 3: Robot Description with URDF

This chapter explains the role of URDF (Unified Robot Description Format) in defining humanoid robot structure, including structure, joints, links, and humanoid robot modeling.

## Topics Covered

- Introduction to URDF
- Structure, joints, and links concepts
- Humanoid robot modeling examples
- Practical URDF exercises

## Learning Objectives

By the end of this chapter, readers should:
- Understand the role of URDF in humanoid robot structure
- Be able to create or modify simple URDF files
- Understand how links and joints define robot kinematics

## Introduction to URDF

URDF (Unified Robot Description Format) is an XML format used to describe robot models in ROS. It defines the physical and visual properties of a robot, including its structure, joints, and inertial properties. URDF is essential for robot simulation, visualization, and planning tasks.

A URDF file describes a robot as a collection of links connected by joints. This tree structure represents the kinematic chain of the robot, allowing for the computation of forward and inverse kinematics.

### Basic URDF Structure

A URDF model consists primarily of two elements: links and joints.

Links represent rigid bodies with physical properties such as mass, inertia, and visual appearance. Each link can have multiple visual and collision elements that define how the link appears and interacts with the environment.

Joints connect links and specify the type of motion allowed between them. There are several joint types in URDF:
- Fixed: No motion allowed (welded connection)
- Revolute: Single axis of rotation with limits
- Continuous: Single axis of rotation without limits
- Prismatic: Single axis of translation with limits
- Floating: Six degrees of freedom
- Planar: Motion on a plane

### URDF for Humanoid Robots

Humanoid robots present unique challenges in URDF modeling due to their complex structure with multiple limbs and degrees of freedom. A humanoid robot typically includes:

- A torso or base link
- A head with sensors
- Two arms with multiple joints for dexterity
- Two legs for locomotion
- Hands with multiple degrees of freedom

Modeling a humanoid robot requires careful attention to joint limits, center of mass, and inertial properties to ensure stable simulation and control.

### Visual and Collision Properties

URDF files define both visual and collision properties for each link. Visual properties determine how the robot appears in simulation and visualization tools. Collision properties define how the robot interacts with the environment in physics simulation.

The collision model can be simplified compared to the visual model for computational efficiency. For example, a complex visual mesh might use a simpler geometric shape for collision detection.

### Inertial Properties

Accurate inertial properties are crucial for realistic simulation and control. Each link must define its mass, center of mass, and inertia tensor. For complex shapes, these properties might be computed using CAD software or estimated using simplified geometric approximations.

## Structure, Joints, and Links

### Links

A link in URDF represents a rigid component of the robot. Each link includes:

- Visual elements: Define the appearance of the link
- Collision elements: Define the collision properties
- Inertial elements: Define the mass and inertia properties

Links can be described using geometric primitives (box, cylinder, sphere), meshes (for complex shapes), or combinations of these elements.

### Joints

Joints define the kinematic and dynamic relationships between links. The joint specification includes:

- Joint type (as defined above)
- Axis of rotation or translation
- Limits (for revolute and prismatic joints)
- Dynamics properties (damping, friction)

The joint relationships determine the degrees of freedom of the robot and are essential for kinematic computations.

### Materials

URDF allows for the definition of materials to specify visual appearance. Materials define color and texture properties that are used in visualization tools.

## Humanoid Robot Modeling Examples

Let's examine a simplified URDF for a humanoid robot structure:

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">
  <!-- Base link -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.2 0.5"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.2 0.5"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="10.0"/>
      <inertia ixx="0.1" ixy="0.0" ixz="0.0" iyy="0.2" iyz="0.0" izz="0.1"/>
    </inertial>
  </link>

  <!-- Torso -->
  <link name="torso">
    <visual>
      <geometry>
        <box size="0.3 0.6 0.2"/>
      </geometry>
      <material name="white">
        <color rgba="1 1 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.3 0.6 0.2"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="5.0"/>
      <inertia ixx="0.1" ixy="0.0" ixz="0.0" iyy="0.1" iyz="0.0" izz="0.1"/>
    </inertial>
  </link>

  <!-- Joint connecting base to torso -->
  <joint name="base_to_torso" type="fixed">
    <parent link="base_link"/>
    <child link="torso"/>
    <origin xyz="0 0 0.35" rpy="0 0 0"/>
  </joint>

  <!-- Left leg -->
  <link name="left_thigh">
    <visual>
      <geometry>
        <cylinder length="0.4" radius="0.05"/>
      </geometry>
      <material name="gray">
        <color rgba="0.5 0.5 0.5 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.4" radius="0.05"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="2.0"/>
      <inertia ixx="0.02" ixy="0.0" ixz="0.0" iyy="0.02" iyz="0.0" izz="0.001"/>
    </inertial>
  </link>

  <joint name="left_hip" type="revolute">
    <parent link="torso"/>
    <child link="left_thigh"/>
    <origin xyz="0 -0.1 -0.3" rpy="0 0 0"/>
    <axis xyz="0 0 1"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  </joint>

  <!-- Similar definitions for other limbs... -->
</robot>
```

This example shows the basic structure of a humanoid robot with a base, torso, and one leg. A complete humanoid model would include all limbs with appropriate joints and constraints.

## Practical URDF Exercises

To gain hands-on experience with URDF, try these exercises:

1. Create a URDF model for a simple robot with a base, one rotating joint, and an end effector
2. Visualize your URDF in RViz to verify the structure
3. Add collision properties to your model and test in Gazebo simulation
4. Create a simple humanoid model with at least two limbs

## Tools for Working with URDF

Several tools can help with creating and working with URDF models:

- **RViz**: For visualization of robot models
- **Gazebo**: For physics simulation of URDF models
- **URDF Tutorials**: Official ROS tutorials for learning URDF
- **CAD Exporters**: Tools to export robot models from CAD software to URDF

## Validation and Testing

Validating URDF models is important for ensuring they work correctly in simulation and real-world applications. Common checks include:

- Valid XML syntax
- Proper kinematic chain (no loops in the tree structure)
- Correct units for all parameters
- Reasonable inertial properties
- Proper joint limits and ranges

## Technical Accuracy Note

All URDF examples in this chapter follow official ROS 2 documentation standards and are valid XML.