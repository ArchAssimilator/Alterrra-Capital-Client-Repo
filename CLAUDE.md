# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is the **Alterra Capital GenAI Training Course** content repository. It contains course modules, prompt libraries, demonstration materials, and project management files for delivering AI skills training to business professionals.

## Repository Structure

```
New Course Material/          # Course modules and demo content
  Module 2 - opportunity screening/
  Module 3 - customGPTs/
  Module 4 - cowork demos/
    1 PDF conversion/         # PDFs + converted .md files
    2 Receipt tabulation/     # XLSX trackers and receipts
    3 Calendar Mail demo/     # HTML dashboards
    4 Analyst demo/
    5 Cowork skills test/
! Project Management/         # Internal admin (not course-facing)
  Alterra Capital DR/
  Contracting/
  Enrolment/
  Meetings/
  Planning/
  Programme/
.obsidian/                    # Obsidian vault config (do not edit manually)
```

## Content Format Conventions

- All course content is written in **Markdown** (`.md`), stored as an Obsidian vault
- **YAML frontmatter** is used on converted documents with fields: `title`, `author`/`authors`, `source`, `pages`, `type`, `topic`, `summary`, `converted_from`
- Prompt files are named `1. Prompt.md` or `Prompt.md` within each demo folder and contain the exact prompt to run for that demo
- HTML files (dashboards) are self-contained single-file artifacts

## PDF Conversion Workflow

When running the PDF conversion prompt (`Module 4 - Chris - cowork demos/1 PDF conversion/1. Prompt.md`):

- Use the **Read tool** natively to read PDFs — Claude Code reads PDFs without any external libraries
- For PDFs over 10 pages, use the `pages` parameter (e.g., `pages: "1-20"`, max 20 per call)
- Output `.md` files alongside the source PDFs in the same folder
- Include YAML frontmatter with metadata extracted from the document

## Obsidian Vault Notes

- The `.obsidian/` folder contains vault configuration — do not edit these files manually
- The `obsidian-terminal` community plugin is installed, enabling terminal access from within Obsidian
- Canvas files (`.canvas`) are Obsidian visual boards — treat as binary/config
