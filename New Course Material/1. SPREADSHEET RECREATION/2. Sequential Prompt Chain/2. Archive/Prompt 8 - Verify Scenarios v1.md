# Prompt 8: Verify Scenarios (Final Validation)

## Stage 4 — Scenario Sheet (Scenario Comparison)

---

### Input

1. `07_Financial_Model.xlsx` (the final model with Scenarios sheet from Prompt 7)
2. `07_Scenario_Summary.md` (scenario documentation)
3. `01_Extracted_Tables.md` (original source of truth for Base Case values)

**Provide all three to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer performing final quality assurance on the complete financial model. Validate that the scenario mechanics work correctly and that the model is ready for investment committee use. Follow these steps exactly:

**1. Base Case restoration test.**
   - Set the scenario selector to "Base Case"
   - Compare every key output metric against the original values from `01_Extracted_Tables.md`
   - Record: Match, Rounding Difference, or Mismatch
   - All values must match (rounding differences < 0.5 in displayed units are acceptable)

**2. Scenario toggle test.** For each scenario (Base Case, Upside, Downside):
   - Set the scenario selector to that scenario
   - Record all key output metrics (Revenue, EBITDA, Net Income, FCF, Debt/EBITDA, and any available IRR/MOIC)
   - Verify that:
     - Upside metrics are directionally better than Base Case (higher revenue, higher EBITDA, etc.)
     - Downside metrics are directionally worse than Base Case
     - The magnitude of changes is reasonable given the assumption differences

**3. Round-trip test.**
   - Start at Base Case, record all output values
   - Switch to Upside, record values
   - Switch to Downside, record values
   - Switch back to Base Case, record values
   - Confirm: Base Case values at start = Base Case values at end (exact match, no drift)

**4. Assumption wiring audit.** For each editable assumption:
   - Change it by a small amount (e.g., +1 percentage point)
   - Verify that at least one downstream output changes
   - Change it back and verify values restore
   - This confirms every assumption is actually wired into the model (not orphaned)

**5. Structural integrity check.**
   - No Excel errors (#REF, #NAME, #VALUE, #DIV/0, #N/A) in any cell
   - No broken cross-sheet references
   - Conditional formatting applied correctly (green for >10% upside, red for >10% downside)
   - All sheets properly named and organised

**6. Documentation completeness check.**
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
| Base Case restoration | PASS/FAIL | X of Y metrics match |
| Scenario toggle (Upside) | PASS/FAIL | Directionally correct: Yes/No |
| Scenario toggle (Downside) | PASS/FAIL | Directionally correct: Yes/No |
| Round-trip test | PASS/FAIL | Base Case values restored: Yes/No |
| Assumption wiring audit | PASS/FAIL | X of Y assumptions wired correctly |
| Structural integrity | PASS/FAIL | Errors found: X |
| Documentation completeness | PASS/FAIL | Issues: X |
| **Overall** | **PASS/FAIL** | — |
```

**2. Base Case Restoration Detail**

```markdown
## Base Case Restoration

| Metric | Original Value (from Source) | Model Base Case Value | Delta | Status |
|--------|---------------------------|----------------------|-------|--------|
| Revenue | $1,589.2M | $1,589.2M | 0.0 | PASS |
| EBITDA | ... | ... | ... | ... |
| ... | ... | ... | ... | ... |
```

**3. Scenario Toggle Detail**

```markdown
## Scenario Comparison — Actuals from Model

| Metric | Base Case | Upside | Downside | Upside Direction | Downside Direction |
|--------|-----------|--------|----------|-----------------|-------------------|
| Revenue | $X | $X | $X | Correct/Incorrect | Correct/Incorrect |
| EBITDA | $X | $X | $X | Correct/Incorrect | Correct/Incorrect |
| ... | ... | ... | ... | ... | ... |
```

**4. Round-Trip Test**

```markdown
## Round-Trip Test

| Metric | Base Case (Start) | Base Case (End) | Match |
|--------|--------------------|-----------------|-------|
| Revenue | $X | $X | Yes/No |
| ... | ... | ... | ... |
```

**5. Assumption Wiring Audit**

```markdown
## Assumption Wiring Audit

| # | Variable | Tested Change | Downstream Impact Observed | Restored Correctly | Status |
|---|----------|--------------|---------------------------|-------------------|--------|
| 1 | Revenue Growth | +1pp | Revenue increased by $X | Yes | PASS |
| 2 | COGS % | +1pp | Gross Profit decreased by $X | Yes | PASS |
| ... | ... | ... | ... | ... | ... |
```

**6. Remediation Actions** (if any failures):

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
| `05_Assumptions_Documentation.md` | Variable registry and wiring map |
| `06_Data_Collection_Questionnaire.md` | Questionnaire for deal team assumption inputs |
| `07_Financial_Model.xlsx` | The live, formula-driven, scenario-enabled financial model |
| `07_Scenario_Summary.md` | Scenario definitions, rationale, and key observations |
| `08_Scenario_Validation_Log.md` | Final validation confirming model integrity |
