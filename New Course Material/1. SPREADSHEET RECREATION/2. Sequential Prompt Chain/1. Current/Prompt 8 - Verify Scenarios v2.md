# Prompt 8: Verify Scenarios (Final Validation)

## Stage 4 — Scenario Sheet (Scenario Comparison)

**Version:** v2
**Supersedes:** Prompt 8 - Verify Scenarios v1.md (archived)
**Change basis:** 260315-prompt-5-change-report.md — conditional validation for newly built vs. source-provided projections

---

### Input

1. `07_Financial_Model.xlsx` (the final model with Scenarios sheet from Prompt 7)
2. `07_Scenario_Summary.md` (scenario documentation)
3. `05_Assumptions_Documentation.md` (for projection provenance — determines whether projections were pre-existing or newly built)
4. `01_Extracted_Tables.md` (original source of truth — used for Base Case comparison only when projections came from the source document)

**Provide all four to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer performing final quality assurance on the complete financial model. Validate that the scenario mechanics work correctly and that the model is ready for investment committee use. Follow these steps exactly:

**1. Determine projection provenance.** Read the **Projection Provenance** section of `05_Assumptions_Documentation.md` to determine:
   - **Scenario B** — Projections were pre-existing in the source document.
   - **Scenario A** — Projections were newly built by Prompt 5 (no source values exist for projected outputs).

   This determination governs how the Base Case restoration test (Step 2) is performed.

**2. Base Case restoration test.** Set the scenario selector to "Base Case", then validate depending on provenance:

   **If Scenario B (projections from source):**
   - Compare every key output metric in the projected statements against the corresponding values from `01_Extracted_Tables.md`
   - Record: Match, Rounding Difference, or Mismatch
   - All values must match (rounding differences < 0.5 in displayed units are acceptable)

   **If Scenario A (projections newly built):**
   - There are no source values to compare projected outputs against. Instead, verify **internal consistency**:
     - Confirm that projected outputs are the values produced by the base case assumptions on the Assumptions sheet (i.e., the model is internally consistent, not that it matches an external source)
     - Verify that projected Year 1 values follow logically from the last historical period given the base case assumptions (e.g., if revenue growth is 5%, projected Year 1 revenue should be approximately 1.05x the last historical revenue)
     - Check that all projected subtotals and totals are correct sums/calculations of their component line items
   - Record: Consistent, Rounding Difference, or Inconsistent

   **In both scenarios:**
   - Verify that all **historical sheets are unchanged** — identical to the values in `01_Extracted_Tables.md`. Historical actuals must not have been modified at any point in the chain.

**3. Scenario toggle test.** For each scenario (Base Case, Upside, Downside):
   - Set the scenario selector to that scenario
   - Record all key output metrics (Revenue, EBITDA, Net Income, FCF, Debt/EBITDA, and any available IRR/MOIC) from the **projected** statements
   - Verify that:
     - Upside metrics are directionally better than Base Case (higher revenue, higher EBITDA, etc.)
     - Downside metrics are directionally worse than Base Case
     - The magnitude of changes is reasonable given the assumption differences

**4. Round-trip test.**
   - Start at Base Case, record all projected output values
   - Switch to Upside, record values
   - Switch to Downside, record values
   - Switch back to Base Case, record values
   - Confirm: Base Case values at start = Base Case values at end (exact match, no drift)

**5. Assumption wiring audit.** For each editable assumption:
   - Change it by a small amount (e.g., +1 percentage point)
   - Verify that at least one downstream projected output changes
   - Change it back and verify values restore
   - This confirms every assumption is actually wired into the model (not orphaned)

**6. Structural integrity check.**
   - No Excel errors (#REF, #NAME, #VALUE, #DIV/0, #N/A) in any cell
   - No broken cross-sheet references
   - Conditional formatting applied correctly (green for >10% upside, red for >10% downside)
   - All sheets properly named and organised

**7. Documentation completeness check.**
   - Does `07_Scenario_Summary.md` include rationale for every Upside and Downside assumption?
   - Does the key metrics comparison table match the actual model outputs?
   - Are key observations substantive and accurate?

---

### Output

A Markdown file named `08_Scenario_Validation_Log.md` containing:

**1. Summary**

```markdown
## Final Validation Summary

| Test | Status | Details |
|------|--------|---------|
| Projection provenance | — | [Scenario A: newly built / Scenario B: from source] |
| Historical preservation | PASS/FAIL | All historical sheets unchanged: Yes/No |
| Base Case restoration | PASS/FAIL | [Scenario B: X of Y metrics match source / Scenario A: X of Y metrics internally consistent] |
| Scenario toggle (Upside) | PASS/FAIL | Directionally correct: Yes/No |
| Scenario toggle (Downside) | PASS/FAIL | Directionally correct: Yes/No |
| Round-trip test | PASS/FAIL | Base Case values restored: Yes/No |
| Assumption wiring audit | PASS/FAIL | X of Y assumptions wired correctly |
| Structural integrity | PASS/FAIL | Errors found: X |
| Documentation completeness | PASS/FAIL | Issues: X |
| **Overall** | **PASS/FAIL** | — |
```

**2. Historical Preservation Check**

```markdown
## Historical Preservation

| Historical Sheet | Cells Checked | All Match Source | Status |
|-----------------|---------------|-----------------|--------|
| [Sheet name] | [Count] | Yes/No | PASS/FAIL |
| ... | ... | ... | ... |
```

**3. Base Case Restoration Detail**

*For Scenario B (projections from source):*

```markdown
## Base Case Restoration (Scenario B — Source Projections)

| Metric | Original Value (from Source) | Model Base Case Value | Delta | Status |
|--------|---------------------------|----------------------|-------|--------|
| Revenue | $X | $X | 0.0 | PASS |
| EBITDA | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
```

*For Scenario A (projections newly built):*

```markdown
## Base Case Restoration (Scenario A — Newly Built Projections)

| Metric | Base Case Assumption | Expected Year 1 Value | Actual Year 1 Value | Internally Consistent | Status |
|--------|---------------------|----------------------|--------------------|-----------------------|--------|
| Revenue | Growth: X% | $X (= Last Historical * 1.0X) | $X | Yes/No | PASS/FAIL |
| COGS | COGS %: X% | $X (= Projected Revenue * X%) | $X | Yes/No | PASS/FAIL |
| ... | ... | ... | ... | ... | ... |

### Subtotal / Total Verification
| Line Item | Expected Calculation | Actual Value | Correct | Status |
|-----------|---------------------|-------------|---------|--------|
| Gross Profit | Revenue - COGS | $X | Yes/No | PASS/FAIL |
| ... | ... | ... | ... | ... |
```

**4. Scenario Toggle Detail**

```markdown
## Scenario Comparison — Actuals from Model (Projected Statements)

| Metric | Base Case | Upside | Downside | Upside Direction | Downside Direction |
|--------|-----------|--------|----------|-----------------|-------------------|
| Revenue | $X | $X | $X | Correct/Incorrect | Correct/Incorrect |
| EBITDA | $X | $X | $X | Correct/Incorrect | Correct/Incorrect |
| ... | ... | ... | ... | ... | ... |
```

**5. Round-Trip Test**

```markdown
## Round-Trip Test

| Metric | Base Case (Start) | Base Case (End) | Match |
|--------|--------------------|-----------------|-------|
| Revenue | $X | $X | Yes/No |
| ... | ... | ... | ... |
```

**6. Assumption Wiring Audit**

```markdown
## Assumption Wiring Audit

| # | Variable | Tested Change | Downstream Impact Observed | Restored Correctly | Status |
|---|----------|--------------|---------------------------|-------------------|--------|
| 1 | [Variable] | +1pp | [Description of change] | Yes | PASS |
| 2 | [Variable] | +1pp | [Description of change] | Yes | PASS |
| ... | ... | ... | ... | ... | ... |
```

**7. Remediation Actions** (if any failures):

```markdown
## Remediation Required

| # | Test | Issue | Action Required |
|---|------|-------|-----------------|
| ... | ... | ... | ... |
```

---

### Verification Step (Quality Gate 4 — Final Gate)

- **Pass:** All tests pass. The model is complete and ready for use.
- **Fail:** Any test fails. Apply the following remediation loop:
  1. Fix all flagged issues in `07_Financial_Model.xlsx`
  2. Update `07_Scenario_Summary.md` if documentation issues were found
  3. Re-run this verification prompt (Prompt 8) on the corrected files
  4. Repeat until all tests pass

State clearly: **"GATE 4 (FINAL): PASS — Model is complete and validated"** or **"GATE 4 (FINAL): FAIL — [X] issues require remediation"**

---

### Final Deliverable Set

Upon passing Gate 4, the complete deliverable set is:

| File | Description |
|------|-------------|
| `01_Extracted_Tables.md` | Raw extraction of all financial tables from source |
| `02_Reconciliation_Log.md` | Cell-by-cell verification of extraction accuracy |
| `03_Formula_Map.md` | Documentation of all formulas and cross-references |
| `04_Formula_Validation_Log.md` | Formula integrity verification results |
| `05_Assumptions_Documentation.md` | Variable registry, wiring map, projection logic map, and source type classifications |
| `06_Data_Collection_Questionnaire.md` | Questionnaire for deal team assumption inputs |
| `07_Financial_Model.xlsx` | The live, formula-driven, scenario-enabled financial model |
| `07_Scenario_Summary.md` | Scenario definitions, rationale, and key observations |
| `08_Scenario_Validation_Log.md` | Final validation confirming model integrity |
