---
name: brainstorming
description: Explores user intent, requirements, and design before implementation. Use when the user requests to brainstorm, create features, build components, add functionality, or modify behavior.
---

# Brainstorming Ideas Into Designs

## When to use this skill
- When starting a new feature, component, or behavior modification.
- When the user explicitly asks to "brainstorm" or explore ideas.
- Before transitioning to writing implementation plans.

## Workflow
You MUST create a task for each of these items and complete them in order:
- [ ] **Explore project context**: Check files, docs, and recent commits.
- [ ] **Ask clarifying questions**: Ask questions one at a time to understand purpose, constraints, and success criteria.
- [ ] **Propose approaches**: Propose 2-3 approaches with trade-offs and your recommendation.
- [ ] **Present design**: Present the design in logical sections and get user approval after each section.
- [ ] **Write design doc**: Save to `docs/plans/YYYY-MM-DD-<topic>-design.md` or the appropriate artifact directory, and await approval.
- [ ] **Transition**: Invoke the planning phase or related skills to create an implementation plan.

## Instructions

### Understanding the Idea
- Explore the current project state (files, docs) first.
- Ask questions one at a time to refine the idea. Focus on understanding purpose, constraints, and success criteria.
- Prefer multiple-choice questions when possible.

### Exploring Approaches
- Always propose 2-3 different approaches with trade-offs before settling on one.
- Present options conversationally with your recommendation and reasoning. Lead with your recommended option.

### Presenting the Design
- Once the requirements are understood, present the design.
- Scale each section to its complexity (a few sentences if straightforward, up to 200-300 words if nuanced).
- Ask the user if it looks right after presenting the sections.
- Cover architecture, components, data flow, error handling, and testing as relevant.

### Post-Design Actions
- **HARD GATE**: Do NOT invoke any implementation skill or write code until the design is presented and approved by the user.
- Document the validated design in a markdown file in the appropriate planning directory.
- Use concise writing.
- **Anti-Pattern**: Do not skip this process for "simple" projects. Unexamined assumptions cause wasted work.

## Resources
- No additional scripts required.
