# Prompt 7: Build the Scenario Sheet

## Stage 4 — Scenario Sheet (Scenario Comparison)

---

### Input

1. `05_Financial_Model.xlsx` (the model with Assumptions sheet wired in, from Prompt 5)
2. `05_Assumptions_Documentation.md` (variable registry and wiring map)
3. `06_Data_Collection_Questionnaire.md` (for scenario input guidance, if deal team responses are available)

**Provide all to the AI along with this prompt.** If the deal team has completed the questionnaire, also provide their responses.

---

### Action

You are a senior financial modelling engineer. Build a scenario analysis layer into the financial model that lets analysts compare outcomes under different assumption sets. Follow these steps exactly:

**1. Create the Scenario Sheet.** Add a new sheet named "Scenarios" to the workbook with the following structure:

   **Scenario Selector (Row 1):**
   - Cell A1: "Active Scenario"
   - Cell B1: Dropdown or manually entered value — one of: `Base Case`, `Upside`, `Downside`
   - This cell controls which scenario's assumptions are active throughout the model

   **Assumption Override Table (Rows 3+):**

   | Variable Name | Unit | Base Case | Upside | Downside | Active Value |
   |--------------|------|-----------|--------|----------|-------------|
   | Revenue Growth | % | 5.2% | 8.0% | 2.0% | =formula |
   | COGS % | % | 52.3% | 50.0% | 55.0% | =formula |
   | ... | ... | ... | ... | ... | ... |

   - **Base Case column:** Values from the Assumptions sheet (linked, not hardcoded)
   - **Upside column:** Optimistic assumptions (derive reasonable values from source data context — e.g., best historical period, management targets, or +20% improvement on key drivers)
   - **Downside column:** Pessimistic assumptions (derive from risk factors — e.g., worst historical period, recessionary benchmarks, or -20% deterioration on key drivers)
   - **Active Value column:** Uses a formula to select the correct scenario column based on the Scenario Selector. For example: `=IF($B$1="Base Case", C5, IF($B$1="Upside", D5, E5))` or use INDEX/MATCH.

**2. Rewire the Assumptions sheet.** Update the Assumptions sheet so that each editable assumption now reads from the "Active Value" column on the Scenarios sheet instead of its own hardcoded value. This means:
   - Changing the scenario selector automatically updates every assumption
   - Which automatically recalculates every downstream formula in the model

**3. Build the Scenario Summary section.** Below the assumption override table (or on a separate "Scenario Summary" area), add a comparison dashboard:

   | Metric | Base Case | Upside | Downside | Upside vs Base | Downside vs Base |
   |--------|-----------|--------|----------|----------------|-----------------|
   | Revenue | $X | $X | $X | +X% | -X% |
   | EBITDA | $X | $X | $X | +X% | -X% |
   | EBITDA Margin | X% | X% | X% | +Xbps | -Xbps |
   | Net Income | $X | $X | $X | +X% | -X% |
   | Free Cash Flow | $X | $X | $X | +X% | -X% |
   | Total Debt / EBITDA | X.Xx | X.Xx | X.Xx | delta | delta |
   | IRR | X% | X% | X% | +Xbps | -Xbps |
   | MOIC | X.Xx | X.Xx | X.Xx | delta | delta |

   - Each metric row pulls from the relevant model output sheet
   - The "vs Base" columns show the percentage or absolute difference
   - **Note:** IRR and MOIC may not be calculable if the source document does not contain deal-level cash flows. If so, note this and include the metrics that are available.

**4. Apply conditional formatting:**
   - Cells where Upside is >10% better than Base Case: green highlight
   - Cells where Downside is >10% worse than Base Case: red highlight
   - Neutral differences: no formatting
   - The scenario selector cell: bold, bordered, to draw attention

**5. Produce a scenario summary document.** Create a Markdown file documenting:
   - The rationale for each Upside and Downside assumption value
   - The key metrics comparison table
   - Observations: which assumptions have the largest impact on outcomes

---

### Output

1. **`07_Financial_Model.xlsx`** — the final workbook with Scenarios sheet, rewired Assumptions, conditional formatting, and scenario summary dashboard
2. **`07_Scenario_Summary.md`** — scenario documentation:

```markdown
# Scenario Analysis Summary

## Scenario Definitions

### Base Case
Source: Extracted from historical financials in the source document. Represents continuation of current trends.

### Upside
Rationale: [Explain the basis — e.g., management targets achieved, favourable market conditions, cost efficiency gains]

| Variable | Base Case | Upside | Rationale |
|----------|-----------|--------|-----------|
| Revenue Growth | 5.2% | 8.0% | Management target + favourable market |
| COGS % | 52.3% | 50.0% | Supply chain optimisation |
| ... | ... | ... | ... |

### Downside
Rationale: [Explain the basis — e.g., recessionary environment, competitive pressure, cost inflation]

| Variable | Base Case | Downside | Rationale |
|----------|-----------|----------|-----------|
| Revenue Growth | 5.2% | 2.0% | Recessionary demand environment |
| COGS % | 52.3% | 55.0% | Input cost inflation |
| ... | ... | ... | ... |

## Key Metrics Comparison

| Metric | Base Case | Upside | Downside | Sensitivity |
|--------|-----------|--------|----------|-------------|
| Revenue | $X | $X (+X%) | $X (-X%) | [High/Medium/Low] |
| EBITDA | $X | $X (+X%) | $X (-X%) | [High/Medium/Low] |
| ... | ... | ... | ... | ... |

## Key Observations
1. [Which assumptions drive the largest variance between scenarios?]
2. [Which metrics are most sensitive to assumption changes?]
3. [Are there non-linear effects or threshold risks?]
```

---

### Verification Step

Before considering this prompt complete, self-check:

1. Set the scenario selector to "Base Case" — do all model outputs match the original values from Stage 2?
2. Set the scenario selector to "Upside" — do all outputs change in the expected direction?
3. Set the scenario selector to "Downside" — do all outputs change in the expected direction?
4. Switch back to "Base Case" — are original values restored exactly?
5. Does the scenario summary table show correct percentage differences?
6. Is conditional formatting applied correctly?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `07_Financial_Model.xlsx` and `07_Scenario_Summary.md` to **Prompt 8** for final scenario verification.
