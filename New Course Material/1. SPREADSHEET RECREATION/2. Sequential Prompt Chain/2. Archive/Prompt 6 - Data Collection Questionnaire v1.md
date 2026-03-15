# Prompt 6: Build Data Collection Questionnaire

## Stage 3 — Assumptions Sheet (Scenario Inputs)

---

### Input

1. `05_Assumptions_Documentation.md` (the assumptions variable registry from Prompt 5)
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
   - **Expected format** (e.g., "percentage", "dollar amount in millions", "integer count")
   - **Acceptable range** (min to max, from the assumptions registry)
   - **Default / base case value** (pre-filled from the model, used if the respondent skips the question)
   - **Why this matters** — one sentence explaining how this variable affects the model output

**3. Group questions by category** (matching the assumptions categories: Revenue, Cost, Capital Structure, CapEx, Valuation).

**4. Add guidance sections:**
   - **Introduction:** Brief explanation of what the questionnaire is for and how answers will be used
   - **Instructions:** How to fill it out (e.g., "If unsure, leave the default value")
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

---

## Section 1: Revenue Assumptions

*These inputs determine projected top-line growth.*

### Q1. [Plain-language question]
- **Model variable:** `Assumptions!B3 — Revenue Growth Rate`
- **Format:** Percentage (e.g., 5.2%)
- **Acceptable range:** -10% to 30%
- **Default (base case):** 5.2%
- **Why this matters:** A 1% change in revenue growth affects projected EBITDA by approximately $X million.
- **Your answer:** ___

### Q2. ...

---

## Section 2: Cost Assumptions
...

## Section 3: Capital Structure
...

## Section 4: Capital Expenditure
...

## Section 5: Valuation & Returns
...

---

## Section 6: Scenario Inputs

### Q[N]. Upside Scenario
Which assumptions would you adjust upward, and by how much? List the variable and your proposed upside value.

| Variable | Base Case | Your Upside Value |
|----------|-----------|-------------------|
| Revenue Growth | 5.2% | ___ |
| ... | ... | ___ |

### Q[N+1]. Downside Scenario
Which assumptions would you adjust downward to reflect key risks?

| Variable | Base Case | Your Downside Value |
|----------|-----------|---------------------|
| Revenue Growth | 5.2% | ___ |
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
5. Are the scenario input sections comprehensive?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `05_Financial_Model.xlsx`, `05_Assumptions_Documentation.md`, and `06_Data_Collection_Questionnaire.md` to **Prompt 7** for scenario sheet construction.
