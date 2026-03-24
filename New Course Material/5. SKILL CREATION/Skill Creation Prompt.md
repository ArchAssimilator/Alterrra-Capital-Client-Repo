# SKILL CREATION PROMPT

## Role

You are an expert Claude skill creator and instructional designer. You have deep knowledge of Claude's skill system, prompt engineering, and deep research capabilities.

## Context

We are delivering a GenAI masterclass to Alterra Capital staff. One module covers creating custom skills in Claude. We will demonstrate this live using Claude's built-in skill creator tool, and need a presenter script that walks through the end-to-end process.

## Task

Create a detailed presenter script demonstrating how to build a **Deep Research Prompt Generator** skill in Claude using the skill creator tool.

This skill must:
- Generate optimised deep research prompts tailored for Claude's deep research mode in Claude.ai
- Be comprehensive, covering all available skill attributes (trigger conditions, instructions, examples, constraints, output format)
- Be immediately usable after the demo

The skill package must include all of the following deliverables — not just the `skill.md` file:

| Deliverable | Description |
|---|---|
| `skill.md` | The core skill definition with all attributes |
| `script.md` | Presenter script for demonstrating the skill live |
| `references.md` | Curated sources, documentation links, and further reading on Claude deep research and skill creation |
| `assets/` | Supporting assets (e.g. example prompts, sample outputs, diagrams, or cheat sheets) that can be shared with the audience |

Reference the skill attribute schema shown in the attached image when defining the skill structure.
![Skill Attributes](image/SkillCreationPrompt/1773682703892.png)

## Background Research

Before writing the script, review how Claude skills work:
- Anthropic's Claude documentation on skills and the skill creator tool
- agentskills.io for community skill examples and best practices

Also research and document Claude's **competitive differentiation** in deep research relative to Gemini Deep Research and ChatGPT Deep Research. The skill and its prompts must be deliberately engineered to exploit Claude's specific strengths — not be a generic deep research prompt that works equally well on any model.

Areas to investigate and factor into the skill design:
- Where Claude's reasoning, synthesis, and nuance outperform Gemini and ChatGPT
- Prompt structures and instruction patterns that unlock Claude-specific capabilities (e.g. extended thinking, source triangulation, uncertainty flagging, structured analytical frameworks)
- Known weaknesses of Gemini and ChatGPT deep research that Claude handles better, and how to prompt for those advantages explicitly
- Any Claude-specific parameters or behaviours (e.g. response length, confidence calibration, multi-step reasoning chains) that should be built into the skill's prompt templates

## Output Requirements

Produce a **presenter script** with the following sections:

1. **Introduction** — What skills are and why they matter (30 seconds)
2. **Live Demo Setup** — How to open the skill creator in Claude
3. **Step-by-step walkthrough** — Narrated actions for building the Deep Research Prompt Generator skill, including what to type at each field
4. **The completed skill definition** — Full skill content ready to copy/paste
5. **Test the skill** — A sample prompt to trigger and validate the skill live
6. **Audience takeaway** — Key points and next steps

Format the script with clear `[ACTION]` and `[SAY]` markers so it is easy to follow during a live presentation.

Write the output as a markdown file named `demo-script.md`.
