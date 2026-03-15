# Prompt 5: Build the Assumptions Sheet

## Stage 3 — Assumptions Sheet (Scenario Inputs)

**Version:** v2
**Supersedes:** Prompt 5 - Build Assumptions Sheet v1.md (archived)
**Change basis:** 260315-prompt-5-change-report.md

---

### Input

1. `03_Financial_Model.xlsx` (verified formula-driven workbook from Stage 2)
2. `03_Formula_Map.md` (formula documentation)
3. `01_Extracted_Tables.md` (for context notes and source document context)

**Provide all three to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer. Create a centralised Assumptions sheet that parameterises the key drivers of the model, enabling scenario analysis. This prompt handles two scenarios: source documents that already include projected/forecast financial statements, and those that contain only historical actuals. Follow these steps exactly:

**1. Detect projection state.** Review the workbook from Prompt 3/4 and the extracted tables from Prompt 1. Determine whether the source document included projected or forecast financial statements.

   - Examine sheet names, column headers, and context notes for indicators such as: "Projected", "Forecast", "Pro Forma", "Budget", future year labels, or explicit forward-looking language in `01_Extracted_Tables.md`.
   - Classify each financial statement sheet in the model as **Historical** or **Projected**.
   - Record your finding:
     - **Scenario B** — The model already contains projected/forecast statements from the source document. List which sheets are projected.
     - **Scenario A** — The model contains only historical actuals. Projected statements will need to be built in Step 5.
   - Document this classification at the top of the output documentation. This determination governs whether Step 5 executes.

**2. Identify assumption variables.** Review the model and its context notes to identify every input variable that an analyst would reasonably want to adjust for scenario analysis. **Do not use a fixed category list.** Instead, derive categories from the actual content of the model:

   - Examine every line item across all financial statement sheets in the model.
   - Group related variables into categories that reflect the structure of *this specific model* (e.g., if the model has revenue segments, create a category per segment; if it has a single revenue line, one revenue category suffices).
   - Typical categories that *may* emerge (but should not be imposed if the model doesn't support them): Revenue Drivers, Cost Drivers, Capital Structure, Capital Expenditure, Working Capital, Tax, etc.
   - For each variable, assign a **Source Type** classification:
     - `From Source` — directly observable in the source document (e.g., a reported revenue figure, an explicitly stated tax rate)
     - `Derived` — calculated from source data but requires interpretation (e.g., an implied growth rate between two reported periods, a cost ratio calculated from two line items)
     - `Analyst Input` — not in the source document; requires human judgement (e.g., exit multiple, discount rate, WACC, terminal growth rate)
     - `Default` — a standard placeholder that the analyst should review (e.g., number of projection years)

   - **Separate analyst inputs:** Any variables classified as `Analyst Input` should be grouped into a distinct section labelled **"Analyst Inputs — Not From Source"**. These must default to blank or placeholder values, not fabricated numbers.

   - **Add Forecast Parameters:** Include a category called **"Forecast Parameters"** containing at minimum:
     - Number of Projection Years (default: 5)
     - Base Year (auto-detected as the last historical year in the model)

**3. Extract base case values.** For each identified variable:
   - Pull the base case value from the most recent period in the source data (or calculate it from the source data, e.g., COGS % = COGS / Revenue)
   - Record the source: which cell(s) in the model this value comes from
   - Assign the Source Type (from Step 2)
   - Determine whether the variable should be editable (most should be; some structural inputs like historical actuals are not)
   - For `Analyst Input` variables: leave the value blank or as a clearly marked placeholder — do not invent values

**4. Build the Assumptions sheet in the workbook.** Add a new sheet named "Assumptions" to `03_Financial_Model.xlsx` with:

   - **Layout:** Variables grouped by the categories derived in Step 2, with `Analyst Inputs — Not From Source` as a visually separated section at the bottom, and `Forecast Parameters` as its own section
   - **Columns:** `Variable Name` | `Base Case Value` | `Unit` | `Source Type` | `Source / Rationale` | `Editable (Y/N)` | `Min` | `Max`
   - Editable cells formatted distinctly (blue font, light yellow background)
   - Non-editable cells locked/greyed out
   - `Analyst Input` cells formatted with a different highlight (e.g., light orange background) to visually distinguish them from source-backed assumptions

**5. Build Projected Statements (conditional).** This step executes **only if Step 1 determined Scenario A** (model contains only historical actuals). If the model already contains projected statements from the source (Scenario B), **skip this step entirely** and proceed to Step 6.

   For Scenario A, build projected financial statements as follows:

   a. **Create projected statement sheets** for each financial statement type present in the historical model. If the model contains an income statement, balance sheet, and cash flow statement, project all three. If it contains only an income statement, project only that. Mirror the line item structure from the corresponding historical sheet.

   b. **Use the last historical period as the starting point.** The first projected column references the last historical column as its base. Each subsequent projected column references the prior projected column.

   c. **Drive each line item from assumptions.** For each line item in the projected statements:
      - Identify which assumption variable controls it (from the Assumptions sheet built in Step 4)
      - Apply the assumption as a driver. The nature of the driver depends on the line item type:
        - Revenue lines: typically driven by a growth rate applied to the prior period
        - Cost lines: typically driven as a percentage of the relevant revenue line, or by a growth rate
        - Subtotals and totals: calculated by formula from projected line items (not driven directly by assumptions)
      - If a line item has no corresponding assumption (e.g., a one-time historical charge), either exclude it from projections or hold it flat — and flag it for analyst review

   d. **Cross-link projected statements** using the same conventions established in Prompt 3 for historical statements (e.g., Net Income flowing between statements, ending cash tying to the balance sheet).

   e. **Set the number of projection years** from the Forecast Parameters on the Assumptions sheet (default: 5 years).

**6. Wire assumptions into projected statements.** For every editable assumption:
   - Replace the corresponding hardcoded input(s) in the **projected** financial statement sheets with a reference to the Assumptions sheet
   - This applies to projected sheets only — whether they are pre-existing from the source (Scenario B) or newly created in Step 5 (Scenario A)
   - **Do not modify historical sheets.** Historical actuals are facts and must remain unchanged.
   - Example: If Revenue Growth was hardcoded as 5.2% in the projected income statement, replace the formula with a reference to `'Assumptions'!B3` where B3 contains 5.2%
   - Ensure that changing any editable assumption on the Assumptions sheet automatically recalculates all downstream projected outputs

   After wiring, verify:
   - Every editable assumption is referenced by at least one cell in the projected statements
   - Changing any assumption recalculates projected outputs
   - The projected Year 1 values are reasonable relative to the last historical period (no order-of-magnitude jumps unless assumptions dictate it)

**7. Validate.** After wiring, perform two checks:

   a. **Historical preservation check:** Compare every cell in the historical sheets against `03_Financial_Model.xlsx`. All values must be identical — the historical sheets must not have been modified.

   b. **Projection responsiveness check:** Change one editable assumption by a small amount (e.g., increase a growth rate by 1 percentage point). Confirm that all downstream projected values update in the expected direction. Then restore the original value and confirm all projected values return exactly to their prior state.

   If either check fails, fix the issue before proceeding.

**8. Document the assumptions.** Produce a companion Markdown file:

```markdown
# Assumptions Documentation

## Projection Provenance

- **Projection state:** [Scenario A — projections newly built by this prompt / Scenario B — projections pre-existing from source document]
- **Projected sheets:** [List of projected statement sheet names]
- **Historical sheets (unchanged):** [List of historical statement sheet names]
- **Base year:** [Last historical year]
- **Projection years:** [Number and range, e.g., "5 years (2024–2028)"]

## Variable Registry

| # | Category | Variable Name | Model Reference | Base Case Value | Unit | Source Type | Source / Rationale | Editable | Min | Max |
|---|----------|--------------|-----------------|-----------------|------|-------------|-------------------|----------|-----|-----|
| 1 | [Category] | [Variable] | Assumptions!B3 | [Value] | [Unit] | From Source | [Rationale] | Y | [Min] | [Max] |
| 2 | [Category] | [Variable] | Assumptions!B4 | [Value] | [Unit] | Derived | [Rationale] | Y | [Min] | [Max] |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
| N | Analyst Inputs | [Variable] | Assumptions!B[N] | [Blank/Placeholder] | [Unit] | Analyst Input | Requires analyst judgement | Y | [Min] | [Max] |
| N+1 | Forecast Parameters | Number of Projection Years | Assumptions!B[N+1] | 5 | years | Default | Standard default — review | Y | 1 | 10 |

## Wiring Map

| Assumption Cell | Wired To (Sheet / Cell) | Description |
|----------------|------------------------|-------------|
| Assumptions!B3 | Projected IS / C5 formula | Revenue growth rate applied to prior year revenue |
| Assumptions!B4 | Projected IS / C6 formula | COGS calculated as % of revenue |
| ... | ... | ... |

## Projection Logic Map

*How each projected line item is driven by its assumption. This section documents the formula logic in the projected sheets.*

| Projected Sheet | Line Item | Driving Assumption | Formula Logic |
|----------------|-----------|-------------------|---------------|
| [Projected IS] | Revenue | Revenue Growth Rate (Assumptions!B3) | = Prior Period Revenue * (1 + Growth Rate) |
| [Projected IS] | COGS | COGS % of Revenue (Assumptions!B4) | = Revenue * COGS % |
| [Projected IS] | Gross Profit | (Calculated) | = Revenue - COGS |
| ... | ... | ... | ... |

## Notes
- [Any assumptions that required judgement or interpretation]
- [Variables that could not be cleanly separated as single inputs]
- [Line items excluded from projections or held flat, with rationale]
- [Any Analyst Input variables that need attention before scenario analysis]
```

---

### Output

1. **`05_Financial_Model.xlsx`** — the updated workbook with the Assumptions sheet added, projected statements (if newly built), and all wiring complete. Historical sheets unchanged.
2. **`05_Assumptions_Documentation.md`** — the assumptions documentation with projection provenance, variable registry (including Source Type), wiring map, and projection logic map

---

### Verification Step

Before considering this prompt complete, self-check:

1. **Historical preservation:** Do all historical sheets produce the exact same values as `03_Financial_Model.xlsx`? (They must be untouched.)
2. **Projection responsiveness:** Change one editable assumption (e.g., increase a growth rate by 1 percentage point). Do all downstream projected values update? Then change it back — do projected values restore exactly?
3. **Wiring completeness:** Is every editable assumption wired to at least one cell in the projected statements?
4. **Source Type accuracy:** Does every assumption have a correct Source Type label? Are `Analyst Input` variables clearly separated and defaulted to blank/placeholder?
5. **Formatting:** Are all assumption cells correctly formatted and labelled? Are Analyst Input cells visually distinct?
6. **Projection logic (Scenario A only):** Do projected Year 1 values follow logically from the last historical period given the base case assumptions?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `05_Financial_Model.xlsx` and `05_Assumptions_Documentation.md` to **Prompt 6** for data collection questionnaire creation.
