---
title: Data Analysis ADA Prompt
date: 2026-03-11
version: 1
author: RJ van Spaandonk
model: ChatGPT Advanced Data Analysis
capability: Advanced Data Analysis
tags:
  - prompt
  - analysis
  - datasets
  - alterra
final: false
---
# Prompt For ChatGPT Advanced Data Analysis

Use this prompt once the dataset has been selected and uploaded.

## Expected Input Files

Required:

- selected dataset file or files in CSV, XLSX, or similarly structured format
- `Planning/Data Analysis Research Output.md`
- `Planning/Data Analysis Demo Plan.md`

Optional:

- data dictionary or codebook
- company description, annual report extract, or segment notes relevant to Metair

Assume the dataset file or files are uploaded and the contents of the other files are provided in context.

## Objective

Analyse the selected dataset and produce the strongest possible investor-oriented ADA walkthrough for an Alterra Capital masterclass.

The analysis should be commercially relevant to a Metair-style acquisition discussion and suitable for a live 10-20 minute session.

## Working Approach

1. Inspect the dataset before deciding what analysis to run.
2. Audit data quality before drawing conclusions.
3. Make only minimal, explicit cleaning assumptions.
4. Choose analyses that are robust, interpretable, and demo-friendly.
5. Translate findings into business implications an investment audience would care about.

## Task

1. Audit the dataset:
- structure
- key fields
- date coverage
- missing values
- duplicates
- anomalies

2. Propose the strongest analysis path for this specific dataset.

3. Run the most useful analyses, where justified by the data, such as:
- summary statistics
- trend and seasonality analysis
- segment or category comparison
- price, volume, mix, or demand analysis
- correlation analysis
- outlier detection
- clustering or grouping
- simple forecasting

4. Generate clear visuals suitable for a live business session.

5. Interpret the results in plain commercial language, linking them to relevant Metair-style drivers where appropriate.

6. Flag limitations, caveats, and any claims that should not be over-stated.

## Rules

- Do not force analyses the dataset does not support.
- If a planned analysis is weak, say so and choose a better one.
- Keep cleaning transparent and reversible.
- Label assumptions clearly.
- Prefer fewer, stronger visuals over many weak ones.
- Where relevant, connect findings to demand, pricing, mix, replacement cycles, trade exposure, operational performance, or market structure.

## Output

Structure the answer in this order:

1. Dataset audit:
- structure
- quality issues
- cleaning assumptions

2. Recommended analysis sequence:
- ordered steps for the live demo

3. Key findings:
- finding
- evidence
- business relevance

4. Visuals to show:
- chart title
- why it matters

5. Investor interpretation:
- what this may suggest for a Metair-style investment case
- what remains unknown

6. Presenter notes:
- short talking points for each step
- where to pause for audience discussion

7. Final live-demo package:
- the best 3-5 charts or tables
- the shortest credible 10-minute version
- the fuller 20-minute version

## Style

Be analytical, transparent, and commercially sharp. Avoid generic textbook commentary.
