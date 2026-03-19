---
title: "Obsidian Quick-Start Guide — Markdown Basics and Copy-Paste Workflows"
type: "Quick Reference / How-To Guide"
topic: "Obsidian, Markdown, Note-Taking, Productivity, AI Workflows"
pages: 2
summary: "A concise quick-start guide covering what Markdown is, how to open and navigate Obsidian, how to create files and folders, and practical copy-paste workflows between Obsidian, AI tools (ChatGPT/Claude), Word/PowerPoint, and other apps. Includes a recommended settings tip to reduce confusion."
converted_from: "Obsidian.pdf"
---

# Obsidian Quick-Start Guide

*Markdown basics, navigation, and copy-paste workflows*

---

## What is Markdown?

Markdown is a simple text format that uses basic characters to structure content. Key points:

- It's just plain text with special characters: `##` for headings, `-` or `1.` for bullets
- Files are named with a `.md` extension instead of `.txt`
- Does **not** support coloured text
- AI apps understand Markdown headings and bullets — it truly helps with complex prompts
- `.md` files are very small and very easy to add to an AI chat, with no conversion or time losses
- Can be viewed by any app (it's plain text), but **Obsidian** is recommended for its copy/paste benefits

---

## Getting Started: Open a Folder in Obsidian

The first job in Obsidian is to open a **folder** and view files — as you would in any file manager.

> This is the only confusing part:
> 1. Click **"Open Obsidian vault"** in the bottom left
> 2. Select **"Manage Vaults"**
> 3. Choose the second option: **"Open folder as vault"**
> 4. Find or create a folder on your desktop or somewhere easy

---

## Create a New File or Sub-folder

- Icons in the **top left** are for new file (`.md`) and new folder
- The new file name shown on the left will be the same in several places — no matter where you change it, it updates everywhere
- In the right-hand editor, you can now type using:
  - `#`, `##`, `###` for headings
  - `-` for bullet points
  - `1.` for numbered lists

---

## Recommended Setting to Reduce Confusion

Go to **Settings → Appearance** and turn off **"Show inline title"**

---

## Copy-Paste Workflows

Obsidian is particularly useful for storing and transferring content between apps in universal `.md` format.

> Use **Ctrl+C** to copy and **Ctrl+V** to paste on Windows; **Command+C / Command+V** on Mac.

### Obsidian → ChatGPT / Claude (as Markdown)

1. Select text in Obsidian
2. Copy (Ctrl+C)
3. Switch to ChatGPT or Claude
4. Paste (Ctrl+V)

### ChatGPT / Claude Output → Obsidian (as Markdown)

1. Click the **copy button** in ChatGPT or Claude (preserves Markdown formatting)
2. Switch to Obsidian
3. Paste (Ctrl+V)

### Word / PowerPoint → Obsidian (as Markdown)

1. Select text in Word or PowerPoint
2. Copy (Ctrl+C)
3. Switch to Obsidian
4. Paste (Ctrl+V)

> **Note:** Headings from Word will be converted to **bold text** rather than Markdown `#` headings. You may need to manually convert these.

### Obsidian → Word / PowerPoint (formatted output)

1. Switch to **Reading View** in Obsidian (click the pen icon in the top right to toggle between Edit and Reading view)
2. Select text with the mouse in Reading View
3. Copy (Ctrl+C)
4. Switch to Word or PowerPoint
5. Paste (Ctrl+V) — the formatted (rendered) content will paste cleanly

> **Important:** You must be in Reading View for this to work. If you copy from Edit View, the raw Markdown syntax (e.g., `##`, `-`) will be pasted instead of the formatted output.
