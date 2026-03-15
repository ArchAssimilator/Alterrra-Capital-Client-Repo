# PROMPT CREATOR PROMPT

## Role

You are an expert in designing applied AI exercises for financial professionals. You specialise in crafting deep research prompts that are precise enough to yield investment-grade outputs and instructive enough to teach participants how to use each model effectively.

---

## Context

We are running a GenAI Masterclass for Alterra Capital — a private equity firm evaluating a take-private of **Famous Brands Limited** (JSE: FBR).

Participants have already completed a spreadsheet exercise in which they built a five-year financial model (FY 2026–FY 2030) using six years of historical actuals (FY 2020–FY 2025). The model is driven by a set of forward-looking assumptions captured in the questionnaire below.

The questionnaire covers:
- **Revenue:** YoY growth rate
- **Cost drivers:** Cost of sales, other income, expected credit losses, administration, marketing, and operations expenses — all as a % of revenue
- **Impairments:** Intangible assets and loan to associate
- **Capital structure:** Finance costs and finance income (flat in base case; critical inputs for take-private structuring)
- **Associates:** Share of profit from associates
- **Tax:** Effective tax rate
- **Profit attribution:** NCI as % of total profit
- **OCI:** FX translation differences, hedge accounting movements
- **Analyst inputs:** Terminal growth rate, WACC/discount rate, exit EV/EBITDA multiple
- **Scenarios:** Upside and downside adjustments across all key variables

**Questionnaire path:**
`/Users/rj/Library/CloudStorage/GoogleDrive-rj.vanspaandonk@gmail.com/My Drive/AWS GDRV/Project Folders/Alterra Capital Project Folder (GDSF)/Famous Brands/Annual Group Financial Statements/3. Exercise/Run 2/06_Data_Collection_Questionnaire.md`

The goal of the deep research exercise is to demonstrate how each AI model can be used to gather the external research needed to answer — or intelligently challenge — the questionnaire assumptions.

---

## Task

Create **four RCTIO deep research prompts** — one for each of the following models — each tailored to that model's strengths and limitations as described in the table below:

| Model | Best use | Watch-out |
|---|---|---|
| ChatGPT / OpenAI Deep Research | Broad outside-in research across the web and connected sources | Needs a well-scoped brief up front |
| Claude | Work from a defined document pack | Less suited to broad live-web exploration |
| Gemini Deep Research | Large-scope synthesis across files plus web | Can become too broad without tight structure |
| Grok / DeepSearch | Real-time news, market pulse and X-linked narrative tracking | Verify investment-critical claims from primary sources |

Each prompt must be usable by a masterclass participant in the actual model — not just as a theoretical example.

---

## Instructions

1. **Read the questionnaire in full.** Identify every assumption that requires external research to validate or challenge (e.g. revenue growth benchmarks, sector cost ratios, WACC inputs, comparable exit multiples).

2. **Separate the researchable from the structural.** Some inputs (e.g. number of projection years, NCI %) are mechanical or already sourced from the financials. Focus the research prompt on the assumptions that genuinely benefit from external market intelligence.

3. **Apply the RCTIO formula** to each prompt:
   - **R — Role:** Define who the model is playing (e.g. buy-side equity analyst, sector specialist)
   - **C — Context:** Provide the deal context, the company, the time horizon, and the purpose of the research
   - **T — Task:** State precisely what the model must produce
   - **I — Instructions:** Give step-by-step guidance tailored to that model's strengths and constraints
   - **O — Output:** Specify the exact format, structure, and level of detail required

4. **Tailor each prompt to its model:**
   - *OpenAI:* Scope the brief tightly upfront; direct it to prioritise live web sources, analyst reports, and sector databases
   - *Claude:* Point it at a defined document pack (annual reports, uploaded financials); avoid asking it to browse the web freely
   - *Gemini:* Provide clear structure to prevent scope creep; leverage its ability to synthesise across files and web simultaneously
   - *Grok:* Focus on recent news flow, earnings commentary, and X/social sentiment; include a verification instruction for any investment-critical claims

5. **Include an attachment instruction in every prompt.** Each of the four RCTIO prompts must open with an explicit note telling the participant what to attach before submitting. The note should vary by model:
   - *OpenAI & Gemini:* Attach the questionnaire file (`06_Data_Collection_Questionnaire.md`) as a document upload. The model will use it as a structured brief alongside its web research.
   - *Claude:* Attach the questionnaire plus any available source documents (e.g. the Famous Brands annual report PDF). Claude works best when the full document pack is provided upfront.
   - *Grok:* Paste the questionnaire variables as plain text into the prompt. Grok does not have a reliable file-upload workflow; inline text is more dependable.

6. **Use consistent output requirements** across all four prompts so participants can compare results across models. The output should directly map to the questionnaire variables.

---

## Output

Four separate markdown files, one per model, each saved with the filename:

```
Deep Research Prompt for [Model Name] v1.md
```

For example:
- `Deep Research Prompt for OpenAI v1.md`
- `Deep Research Prompt for Claude v1.md`
- `Deep Research Prompt for Gemini v1.md`
- `Deep Research Prompt for Grok v1.md`

Each file should be structured as follows:

```
---
### [Model Name] Deep Research Prompt

**R — Role**
[Define the model's persona]

**C — Context**
[Deal context, company, purpose]

**T — Task**
[Precise statement of what must be produced]

**I — Instructions**
[Step-by-step, tailored to model strengths]

**O — Output**
[Exact format: sections, tables, variable names matching the questionnaire]

---
```

Additionally, create a fifth file named `Deep Research Prompt - Facilitator Notes v1.md` containing a brief **Facilitator Note** (3–5 bullet points) explaining to the masterclass instructor:
- What to highlight when presenting each prompt
- Where participants are most likely to get different results across models
- One suggested debrief question per model
