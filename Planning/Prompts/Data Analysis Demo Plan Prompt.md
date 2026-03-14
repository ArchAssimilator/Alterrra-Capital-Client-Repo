---
title: Data Analysis Demo Plan Prompt
date: 2026-03-11
version: 1
author: RJ van Spaandonk
model: GPT-5.4 Pro
capability: Reasoning + Writing
tags:
  - prompt
  - planning
  - demo
  - alterra
final: false
---
# Prompt For GPT-5.4 Pro

Use this prompt after the Deep Research step has been completed.

## Expected Input Files

Required:

- `Planning/Data Analysis Research Output.md` - output from the Deep Research prompt with ranked dataset options

Reference:

- `Planning/key-elements.md`
- `Planning/Comparables.md`
- `Meetings/260305 GC Alterra Capital RJ.md`
- `260304 Draft Programme.md`

Optional:

- a sample extract of the shortlisted dataset

Assume the contents of these files are provided in context.

## Objective

Turn the research output into a facilitator-ready live demo plan for an Alterra Capital masterclass.

Choose:

- one primary dataset for the live demo
- one backup dataset
- one clear investor-oriented analysis story anchored on a Metair-style acquisition discussion

## Task

1. Review the ranked research output and select the best primary and backup dataset.
2. Use the planning and meeting notes to align the demo to Alterra's audience, programme, and commercial priorities.
3. Design a 10-20 minute live ADA demo that shows practical business value, not just technical capability.
4. Prioritise analyses that are likely to work well in a live session and produce credible investor-style insights.

## Constraints

- Do not repeat the full research exercise unless a critical gap must be resolved.
- Prefer one strong analytical narrative over multiple weak branches.
- Keep the demo realistic in terms of data preparation and time.
- Focus on what ADA does well: data inspection, cleaning, descriptive analysis, trend analysis, comparisons, outlier detection, simple forecasting, and commercial interpretation.
- Avoid statistically weak, visually noisy, or over-engineered analyses.

## Output

Structure the answer in this order:

1. Executive decision:
- primary dataset
- backup dataset
- why these are the best choices

2. Demo objective:
- core business question
- why the audience will care
- what the demo should prove about ADA

3. Recommended live run of show:
- minute-by-minute flow
- what the facilitator says
- what ADA does
- what appears on screen

4. Analysis sequence:
- ordered analysis steps
- specific charts or tables to produce
- likely insight from each step

5. Exact prompts for the live session:
- first ADA prompt
- follow-up prompts
- backup prompts if the first path underperforms

6. Data preparation checklist:
- files to have ready
- required columns or fields
- cleaning steps to complete before the session
- pre-demo sanity checks

7. Risk log and fallback plan:
- likely failure points
- how to recover live
- when to switch to the backup dataset

8. Final recommendation:
- the simplest credible 10-minute version
- the fuller 20-minute version

## Style

Write concisely, commercially, and as an internal facilitator runbook.

## Downstream File

The output of this prompt is expected to feed the next step as:

- `Planning/Data Analysis Demo Plan.md`
