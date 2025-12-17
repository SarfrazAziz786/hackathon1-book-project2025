<!--
Sync Impact Report:
- Version change: N/A → 1.0.0 (initial constitution)
- Modified principles: N/A (new constitution)
- Added sections: All principles and sections are new
- Removed sections: N/A
- Templates requiring updates: ⚠ pending (plan-template.md, spec-template.md, tasks-template.md, command files)
- Follow-up TODOs: None
-->
# Spec-Driven Book on Physical AI & Humanoid Robotics with Embedded RAG Chatbot Constitution

## Core Principles

### Technical Accuracy and Source Traceability
All content must be technically accurate with verifiable sources; Claims require citations to peer-reviewed papers, official documentation, or reproducible examples; Full traceability from content to authoritative sources

### Clarity for Technical Audiences
Content must be accessible and clear to AI, robotics, and computer science audiences; Complex concepts explained with progressive disclosure; Clear examples demonstrating practical application

### Spec-Driven, Reproducible Content
All content follows spec-driven development methodology with reproducible builds; Documentation and code examples must be verifiable and executable; Changes tracked through formal specification process

### Strict Grounding (No Hallucinations)
RAG chatbot responses must be fully grounded in book content or user-provided context; No generation of unverified or fabricated information; Clear distinction maintained between supported and unsupported claims

### Verifiable Standards Compliance
All technical claims, code examples, and implementations must meet verifiable standards; Prefer peer-reviewed papers and official documentation; Follow APA citation format consistently

### Quality and Success Verification
Zero plagiarism policy enforced; All code examples either executable or clearly labeled as conceptual; Successful deployment and operational verification required

## Technical Constraints and Implementation Standards
Format: Docusaurus (MD/MDX), deploy to GitHub Pages; RAG stack: OpenAI Agents/ChatKit, FastAPI, Neon Postgres, Qdrant; Chatbot answers must be fully context-grounded; Prefer ROS 2, URDF, Gazebo, Unity for robotics content; Include NVIDIA Isaac Sim & Isaac ROS; Cover sensors, VSLAM, Nav2; Address Vision-Language-Action systems; Include voice-to-action and LLM-based planning; Feature autonomous humanoid capstone content

## Content Scope and Coverage
Physical AI foundations; Robotics simulation and reality differences; ROS 2 ecosystem; Sensor systems and integration; Navigation and path planning; Vision-language-action systems; Voice interfaces and planning; Humanoid robotics capstone project

## Governance
Constitution governs all project practices and decisions; Amendments require documentation in project records with approval from project maintainers; All PRs and reviews must verify compliance with principles; Content changes must maintain grounding and verifiability; Use specification documents for development guidance

**Version**: 1.0.0 | **Ratified**: 2025-12-16 | **Last Amended**: 2025-12-16
