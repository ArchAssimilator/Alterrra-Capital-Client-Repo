# Prompt 5: Build the Assumptions Sheet

## Stage 3 — Assumptions Sheet (Scenario Inputs)

---

### Input

1. `03_Financial_Model.xlsx` (verified formula-driven workbook from Stage 2)
2. `03_Formula_Map.md` (formula documentation)
3. `01_Extracted_Tables.md` (for context notes and source document context)

**Provide all three to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer. Create a centralised Assumptions sheet that parameterises the key drivers of the model, enabling scenario analysis. Follow these steps exactly:

**1. Identify assumption variables.** Review the model and its context notes to identify every input variable that an analyst would reasonably want to adjust for scenario analysis. Organise them into these categories:

   **Revenue Drivers:**
   - Same-store sales growth (SSSG) or organic revenue growth rate
   - New unit/store openings (if applicable)
   - Average unit volume / revenue per unit
   - Pricing assumptions (price increases, mix shifts)
   - Volume assumptions
   - Any segment-specific revenue drivers visible in the source data

   **Cost Drivers:**
   - Cost of goods sold as % of revenue (or food cost %, material cost %)
   - Labour cost as % of revenue
   - Occupancy / rent costs
   - General & administrative (G&A) expenses
   - Depreciation & amortisation (D&A)
   - Other operating expenses
   - Any segment-specific cost drivers

   **Capital Structure:**
   - Total debt levels
   - Interest rate(s)
   - Debt repayment schedule / amortisation
   - Cash and equivalents
   - Working capital assumptions (DSO, DPO, DIO)

   **Capital Expenditure:**
   - Maintenance CapEx
   - Growth CapEx
   - Total CapEx as % of revenue

   **Valuation & Returns:**
   - Exit multiple (EV/EBITDA or other)
   - Discount rate / WACC
   - Terminal growth rate
   - Tax rate

**2. Extract base case values.** For each identified variable:
   - Pull the base case value from the most recent period in the source data (or calculate it from the source data, e.g., COGS % = COGS / Revenue)
   - Record the source: which cell(s) in the model this value comes from
   - Determine whether the variable should be editable (most should be; some structural inputs like historical actuals are not)

**3. Build the Assumptions sheet in the workbook.** Add a new sheet named "Assumptions" to `03_Financial_Model.xlsx` with:

   - **Layout:** Variables grouped by category (Revenue, Cost, Capital Structure, CapEx, Valuation)
   - **Columns:** `Variable Name` | `Base Case Value` | `Unit` | `Source / Rationale` | `Editable (Y/N)` | `Min` | `Max`
   - Editable cells formatted distinctly (blue font, light yellow background)
   - Non-editable cells locked/greyed out

**4. Wire assumptions into the model.** For every editable assumption:
   - Replace the corresponding hardcoded input(s) in the model sheets with a reference to the Assumptions sheet
   - Example: If COGS was hardcoded as 52.3% of revenue, replace the COGS formula with `=Revenue * 'Assumptions'!B5` where B5 contains 52.3%
   - Ensure that changing any editable assumption on the Assumptions sheet automatically recalculates all downstream outputs

**5. Validate wiring.** After wiring:
   - Confirm that the model still produces the same values as before (since base case assumptions match the original inputs)
   - If any value changed, the wiring has an error — fix it

**6. Document the assumptions.** Produce a companion Markdown file:

```markdown
# Assumptions Documentation

## Variable Registry

| # | Category | Variable Name | Model Reference | Base Case Value | Unit | Source / Rationale | Editable | Min | Max |
|---|----------|--------------|-----------------|-----------------|------|-------------------|----------|-----|-----|
| 1 | Revenue | Revenue Growth Rate | Assumptions!B3 | 5.2% | % | FY2023 YoY growth from IS | Y | -10% | 30% |
| 2 | Cost | COGS % of Revenue | Assumptions!B8 | 52.3% | % | FY2023 COGS/Revenue from IS | Y | 40% | 70% |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

## Wiring Map

| Assumption Cell | Wired To (Sheet / Cell) | Description |
|----------------|------------------------|-------------|
| Assumptions!B3 | Income Statement / C5 formula | Revenue growth rate applied to prior year revenue |
| Assumptions!B8 | Income Statement / C6 formula | COGS calculated as % of revenue |
| ... | ... | ... |

## Notes
- [Any assumptions that required judgement or interpretation]
- [Variables that could not be cleanly separated as single inputs]
```

---

### Output

1. **`05_Financial_Model.xlsx`** — the updated workbook with the Assumptions sheet added and all wiring complete
2. **`05_Assumptions_Documentation.md`** — the assumptions documentation with variable registry and wiring map

---

### Verification Step

Before considering this prompt complete, self-check:

1. Does the model still produce the exact same output values as `03_Financial_Model.xlsx` with base case assumptions? (All downstream calculated values should be unchanged.)
2. Change one editable assumption (e.g., increase Revenue Growth by 1 percentage point). Do all downstream values update? Then change it back — do original values restore exactly?
3. Is every editable assumption wired to at least one cell in the model?
4. Are all assumption cells correctly formatted and labelled?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `05_Financial_Model.xlsx` and `05_Assumptions_Documentation.md` to **Prompt 6** for data collection questionnaire creation.
