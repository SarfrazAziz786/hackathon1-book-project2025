---
id: 1
title: Create project constitution for Physical AI book
stage: constitution
date: 2025-12-16
surface: agent
model: Qwen
feature: none
branch: main
user: user
command: /sp.constitution Project: Spec-Driven Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot
labels: [constitution,book,physical-ai,rag-chatbot]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

\$ARGUMENTS
\[\]
Project: Spec-Driven Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot

Overview:
Write and publish a technical book using Docusaurus and GitHub Pages on Physical AI, Embodied Intelligence, and Humanoid Robotics. The book is authored using Spec-Kit Plus and Claude Code and includes a grounded RAG chatbot for answering questions strictly from book content or user-selected text.

Core Principles:
- Technical accuracy and source traceability
- Clarity for AI, robotics, and CS audiences
- Spec-driven, reproducible content
- Strict grounding (no hallucinations)

Standards:
- Verifiable claims only
- Prefer peer-reviewed papers and official docs
- APA citations
- Clear distinction between simulation and real-world robotics

Content Scope:
- Physical AI foundations
- ROS 2, URDF, Gazebo, Unity
- NVIDIA Isaac Sim & Isaac ROS
- Sensors, VSLAM, Nav2
- Vision-Language-Action systems
- Voice-to-action and LLM-based planning
- Autonomous humanoid capstone

Technical Constraints:
- Format: Docusaurus (MD/MDX), deploy to GitHub Pages
- RAG stack: OpenAI Agents/ChatKit, FastAPI, Neon Postgres, Qdrant
- Chatbot answers must be fully context-grounded

Quality & Success:
- Zero plagiarism
- Executable or clearly labeled code
- Successful site deployment
- Grounded, accurate chatbot responses

## Response snapshot

The project constitution has been successfully created with the following details:

**New Version**: 1.0.0 (initial version)
**Bump Rationale**: This is the initial constitution for the "Spec-Driven Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot" project, establishing the foundational principles and governance structure.

**Files flagged for manual follow-up**:
- `.specify/templates/plan-template.md` - Needs updates to align "Constitution Check" section with the new principles
- `.specify/templates/spec-template.md` - Requirements and success criteria should align with quality and accuracy principles
- `.specify/templates/tasks-template.md` - Task definitions should reflect principles of reproducible content and quality verification

**Suggested commit message**: `docs: add initial constitution v1.0.0 for physical AI book project`

The constitution includes six core principles focusing on technical accuracy, clarity for technical audiences, spec-driven content, strict grounding, verifiable standards, and quality verification. It also defines technical constraints, content scope, and governance procedures for the project.

## Outcome

- ✅ Impact: Created initial project constitution with 6 core principles and governance structure
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with new project constitution
- 🔁 Next prompts: Update templates to align with new constitution principles
- 🧠 Reflection: The constitution effectively captures the project requirements and principles in a structured, enforceable format

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): standard constitution creation
- Next experiment (smallest change to try): Update templates to align with new constitution principles