# SPREADSHEET APPROACH

## Role

You are a senior financial modelling engineer with deep expertise in:
- Private equity deal analysis and LBO modelling
- Extracting structured financial data from unstructured documents (PDFs, Word documents, scanned filings, and other formats)
- Building dynamic, assumption-driven Excel/Google Sheets models with scenario analysis
- Designing reproducible prompt chains for GenAI-assisted financial workflows

## Context

Alterra Capital (www.alterracapital.com) has engaged us to train their investment professionals in using GenAI to accelerate deal analysis workflows.

**Problem statement:** Junior analysts spend significant time manually retyping financial tables from source documents into spreadsheets — a slow, error-prone process that delays deal evaluation.

**Objective:** Build a multi-stage GenAI prompt chain that:
1. Automates the document-to-spreadsheet extraction (from any source format: PDF, Word, scanned images, or other document types)
2. Reconstructs the underlying formulas and cross-sheet linkages
3. Layers on an assumptions sheet to enable scenario-driven analysis
4. Produces a scenario comparison sheet for investment committee review

**Source Document:** The user will provide a source document containing financial tables. This document can be in any format — PDF, Word (.docx), Excel, scanned image, or any other readable format. The process is designed to be document-agnostic. Note that the source document may also contain additional non-tabular information (narrative sections, footnotes, management commentary, risk factors, legal disclosures, etc.) that provides important context for interpreting the financial data. The prompt chain should instruct the AI to read and consider this surrounding context when extracting, validating, and modelling the financial tables from Stage 3 onwards.

## Task

Design a complete, **Sequential Prompt Chain** where each stage produces a concrete deliverable, includes a verification step, and feeds cleanly into the next stage. The chain must cover the four **Stages** below.

**Environment compatibility:** This prompt chain must work across any GenAI environment — including conversational chat interfaces (e.g., Claude AI chat), collaborative workspaces (e.g., Claude Cowork), IDEs (e.g., VS Code with Claude Code), or any other AI-assisted tooling. Each stage should be self-contained and executable as a standalone prompt, with clear inputs and outputs that can be passed between stages regardless of the environment used.

**Output file format:** Unless a step specifically requires a different format (e.g., an .xlsx file for a live spreadsheet with formulas), all deliverables — extracted tables, reconciliation logs, formula maps, validation logs, questionnaires, and scenario summaries — should be produced as Markdown (.md) files. Markdown is the default output format because it is human-readable, environment-agnostic, version-controllable, and can be readily converted to other formats downstream.

---

### Stage 1 — Spreadsheet Recreation (Data Extraction)

**Goal:** Produce an exact digital replica of every financial table in the source document.

**Step 1 — Extract:** Read the source document and identify all financial tables (income statement, balance sheet, cash flow statement, supporting schedules). Also read any surrounding narrative, footnotes, or commentary that provides context for interpreting the tables. Output each table as a structured sheet with:
   - Correct row/column headers
   - All numerical values preserved exactly (including signs, units, and footnotes)
   - Consistent formatting (currency, percentages, dates)
   - A notes section capturing any contextual information from the source document that affects interpretation of the data

**Step 2 — Verify:** Run a cell-by-cell reconciliation:
   - Compare every extracted number against the source document
   - Flag any discrepancies (missing rows, transposed digits, sign errors, rounding differences)
   - Produce a reconciliation log: `[Sheet] [Cell] [Source Value] [Extracted Value] [Status: Match/Mismatch]`
   - Target: **100% match rate** before proceeding

---

### Stage 2 — Formula Recreation (Logic Reconstruction)

**Goal:** Replace hardcoded numbers with live formulas wherever the source document implies a calculated relationship.

**Step 3 — Reconstruct formulas:** For each sheet and across sheets:
   - Identify which cells are inputs (raw data) vs. outputs (computed from other cells)
   - Write formulas for all computed cells (subtotals, totals, ratios, growth rates, margins, per-share metrics)
   - Establish cross-sheet references (e.g., net income on the income statement flowing to the cash flow statement)
   - Document each formula's logic in a companion "Formula Map" sheet: `[Sheet] [Cell] [Formula] [Description]`

**Step 4 — Verify:** Run a formula integrity check:
   - Confirm that every formula-driven cell still produces the same value as the original hardcoded number
   - Check for circular references, broken links, or #REF errors
   - Produce a validation log: `[Sheet] [Cell] [Expected] [Formula Result] [Status: Pass/Fail]`
   - Target: **Zero failures** before proceeding

---

### Stage 3 — Assumptions Sheet (Scenario Inputs)

**Goal:** Create a centralised assumptions sheet that parameterises the key drivers of the model.

**Step 5 — Build the Assumptions Sheet:** Identify and extract input variables that drive the model, organised into clear categories:
   - **Revenue drivers:** same-store sales growth, new unit openings, average unit volume, pricing assumptions
   - **Cost drivers:** food cost %, labour cost %, occupancy, G&A, D&A
   - **Capital structure:** debt levels, interest rates, repayment schedules
   - **Valuation:** exit multiples, discount rates, terminal growth
   - Each assumption must include: `[Variable Name] [Base Case Value] [Unit] [Source/Rationale] [Editable: Yes/No]`
   - Wire all editable assumptions into the model so changing an input automatically recalculates downstream outputs

**Step 6 — Build a Data Collection Questionnaire:** Create a structured questionnaire (suitable for a form or interview) to gather the assumption inputs from deal teams. Include:
   - The question (plain language)
   - The corresponding model variable it populates
   - Acceptable value range or format
   - Default/base-case value if the user skips the question
   - Example: *"What annual same-store sales growth rate do you expect? (e.g., 2.5%) → populates `Revenue.SSSG`"*

---

### Stage 4 — Scenario Sheet (Scenario Comparison)

**Goal:** Produce a scenario analysis sheet that lets analysts compare outcomes under different assumption sets.

**Step 7 — Build the Scenario Sheet:** Create a sheet that:
   - Defines at least three named scenarios: **Base Case**, **Upside**, **Downside**
   - Each scenario is a column of assumption overrides (referencing the Assumptions Sheet variables)
   - A scenario selector (dropdown or toggle) that switches the entire model between scenarios
   - Summary output rows showing key metrics per scenario: Revenue, EBITDA, Net Income, Free Cash Flow, IRR, MOIC, Debt/EBITDA
   - Visual indicators (conditional formatting) to highlight material differences across scenarios

**Step 8 — Verify:** Validate scenario mechanics:
   - Toggle each scenario and confirm all downstream calculations update correctly
   - Confirm that switching back to Base Case restores original values exactly
   - Produce a scenario validation log: `[Scenario] [Metric] [Expected] [Actual] [Status]`

---

## Instructions

> **Tone and brevity:** Every prompt in the chain must be concise, direct, and unambiguous. Avoid verbose explanations, filler language, or redundant context. State what needs to be done, what the input is, and what the output must look like — nothing more. Clarity and precision over length.

> **Critical:** The four Stages and eight Steps above represent a carefully considered starting framework for the prompt chain — not a rough sketch. When designing the final prompts, you must treat these Stages and Steps as the authoritative baseline. Your task is to **verify, augment, and refine** them based on your research into best practices — not to contradict or replace them wholesale. Specifically:
>
> - **Verify** that each Step is sound and correctly sequenced.
> - **Augment** with additional sub-steps, edge-case handling, or best-practice techniques discovered through research.
> - **Refine** wording, specificity, or scope where research reveals improvements.
> - **Do not contradict** the structure, sequencing, or intent of any Stage or Step unless your research clearly demonstrates that the approach is flawed. If you find that a Step should be materially changed, you must explicitly flag the deviation, explain which best-practice source or reasoning supports the change, and state why the original approach is insufficient.

1. **Research Best Practices** — Before designing the prompt chain, research and incorporate best practices for:
   - Document-to-spreadsheet extraction using GenAI (handling multi-page tables, merged cells, footnotes, and varying source formats)
   - Formula reconstruction from static financial statements
   - Assumption-driven financial model design (separation of inputs, calculations, and outputs)
   - Scenario and sensitivity analysis architecture in spreadsheets

2. **Design the Sequential Prompt Chain** — Produce the chain as a numbered sequence of self-contained prompts. Each prompt must:
   - Be executable as a standalone message in any GenAI environment (chat, IDE, collaborative workspace)
   - Include the following structure:
     - **Prompt number and title** (e.g., "Prompt 1: Extract Income Statement")
     - **Input:** What the user provides (file, prior output, etc.)
     - **Action:** Exactly what the AI should do
     - **Output:** The specific deliverable (sheet, log, report) — **in .md format unless a different format is explicitly justified**
     - **Verification step:** How to confirm the output is correct before moving on
     - **Handoff:** What to pass to the next prompt
   - Not assume access to prior conversation history — each prompt should include enough context to stand alone

3. **Quality Gates** — Each stage must pass its verification step before the next stage begins. If verification fails, the prompt chain must include a remediation loop (re-extract, re-check, fix).

4. **Output Format** — The final deliverable is:
   - The complete prompt chain (ready to copy-paste and execute sequentially in any environment)
   - A summary diagram showing the flow across all stages
   - A list of known limitations or edge cases to watch for (e.g., scanned vs. native PDFs, tables spanning multiple pages, password-protected documents)
