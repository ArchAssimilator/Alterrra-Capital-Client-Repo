# Prompt 6: Build Data Collection Questionnaire

## Stage 3 — Assumptions Sheet (Scenario Inputs)

**Version:** v2
**Supersedes:** Prompt 6 - Data Collection Questionnaire v1.md (archived)
**Change basis:** 260315-prompt-5-change-report.md — dynamic categories to match Prompt 5 v2

---

### Input

1. `05_Assumptions_Documentation.md` (the assumptions variable registry from Prompt 5, including Source Type classifications and dynamic categories)
2. `05_Financial_Model.xlsx` (the model with Assumptions sheet, for reference)

**Provide both to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer. Create a structured questionnaire that deal teams can use to gather assumption inputs for the model. This questionnaire should be usable as an interview guide, a form, or a checklist. Follow these steps exactly:

**1. Map every editable assumption to a question.** For each editable variable in `05_Assumptions_Documentation.md`, write a plain-language question that a non-technical deal team member can understand.

**2. Structure each question with:**
   - **Question number** (matching the variable number from the assumptions registry)
   - **Question** in plain, jargon-free language
   - **Model variable** it populates (e.g., `Assumptions!B3 — Revenue Growth Rate`)
   - **Source Type** (From Source, Derived, Analyst Input, or Default — from the assumptions registry)
   - **Expected format** (e.g., "percentage", "dollar amount in millions", "integer count")
   - **Acceptable range** (min to max, from the assumptions registry)
   - **Default / base case value** (pre-filled from the model, used if the respondent skips the question). For `Analyst Input` variables where no base case exists, state "No default — requires your input"
   - **Why this matters** — one sentence explaining how this variable affects the model output

**3. Group questions by category.** Use the categories from `05_Assumptions_Documentation.md` — **do not use a fixed list of sections.** Create one section per assumption category as it appears in the assumptions registry. The number and names of sections will vary by model.

   - If the assumptions registry includes a separate **"Analyst Inputs — Not From Source"** section, reflect this as a distinct section in the questionnaire with a note explaining that these variables were not present in the source document and require the respondent's judgement.
   - Include the **"Forecast Parameters"** section if present in the registry.

**4. Add guidance sections:**
   - **Introduction:** Brief explanation of what the questionnaire is for and how answers will be used
   - **Instructions:** How to fill it out (e.g., "If unsure, leave the default value"). Include a note explaining the Source Type labels so respondents understand which values came from the source document vs. which require their input.
   - **Category introductions:** One sentence before each category explaining what it covers

**5. Include scenario-specific questions** at the end:
   - "For an upside scenario, which assumptions would you adjust and by how much?"
   - "For a downside scenario, what are the key risks and how would they affect these variables?"
   - "Are there any assumptions not listed here that you believe are material to this deal?"

---

### Output

A Markdown file named `06_Data_Collection_Questionnaire.md` with the following structure:

```markdown
# Financial Model — Data Collection Questionnaire

## Introduction

This questionnaire gathers the key assumptions needed to run the financial model for [Company Name]. Your inputs will drive scenario analysis for the investment committee.

**Instructions:** Answer each question with your best estimate. If unsure, the default (base case) value will be used. All values should be forward-looking estimates unless otherwise specified.

**Source Type Guide:** Each question indicates where the current default value comes from:
- **From Source** — directly taken from the source document. The default is reliable; adjust only if you have updated information.
- **Derived** — calculated from source data. The default is a reasonable estimate; review and adjust as needed.
- **Analyst Input** — not available in the source document. Your input is required.
- **Default** — a standard placeholder. Review and confirm or adjust.

---

## Section 1: [Category Name from Assumptions Registry]

*[One sentence describing what this category covers.]*

### Q1. [Plain-language question]
- **Model variable:** `Assumptions!B3 — [Variable Name]`
- **Source Type:** [From Source / Derived / Analyst Input / Default]
- **Format:** [Expected format, e.g., Percentage (e.g., 5.2%)]
- **Acceptable range:** [Min] to [Max]
- **Default (base case):** [Value, or "No default — requires your input" for Analyst Input variables]
- **Why this matters:** [One sentence on model impact]
- **Your answer:** ___

### Q2. ...

---

## Section 2: [Next Category Name]
...

---

## Section N: Analyst Inputs — Not From Source

*These variables were not present in the source document. Your judgement is required to set these values. If you are unsure, leave them blank and flag them for discussion.*

### Q[X]. [Plain-language question]
- **Model variable:** `Assumptions!B[X] — [Variable Name]`
- **Source Type:** Analyst Input
- **Format:** [Expected format]
- **Acceptable range:** [Min] to [Max]
- **Default (base case):** No default — requires your input
- **Why this matters:** [One sentence on model impact]
- **Your answer:** ___

---

## Section [N+1]: Forecast Parameters

### Q[Y]. How many years should the model project forward?
- **Model variable:** `Assumptions!B[Y] — Number of Projection Years`
- **Source Type:** Default
- **Format:** Integer (number of years)
- **Acceptable range:** 1 to 10
- **Default (base case):** 5
- **Why this matters:** Determines the time horizon of all projected financial statements.
- **Your answer:** ___

---

## Scenario Inputs

### Q[N]. Upside Scenario
Which assumptions would you adjust upward, and by how much? List the variable and your proposed upside value.

| Variable | Base Case | Your Upside Value |
|----------|-----------|-------------------|
| [Variable from registry] | [Value] | ___ |
| ... | ... | ___ |

### Q[N+1]. Downside Scenario
Which assumptions would you adjust downward to reflect key risks?

| Variable | Base Case | Your Downside Value |
|----------|-----------|---------------------|
| [Variable from registry] | [Value] | ___ |
| ... | ... | ___ |

### Q[N+2]. Missing Assumptions
Are there any material assumptions not covered above? If so, describe them and provide your estimate.

---

## Respondent Information

- **Name:** ___
- **Role:** ___
- **Date:** ___
```

---

### Verification Step

Before considering this prompt complete, self-check:

1. Does every editable assumption from the registry have a corresponding question?
2. Are all default values consistent with the Assumptions sheet?
3. Are acceptable ranges reasonable for each variable?
4. Is the language clear enough for a non-technical deal team member?
5. Do the section headings match the categories in `05_Assumptions_Documentation.md` (not a hardcoded list)?
6. Are `Analyst Input` variables clearly flagged as requiring the respondent's judgement?
7. Does the Source Type for each question match the registry?
8. Are the scenario input sections comprehensive?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `05_Financial_Model.xlsx`, `05_Assumptions_Documentation.md`, and `06_Data_Collection_Questionnaire.md` to **Prompt 7** for scenario sheet construction.
