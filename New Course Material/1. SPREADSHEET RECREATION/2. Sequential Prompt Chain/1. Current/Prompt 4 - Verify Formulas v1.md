# Prompt 4: Verify Formulas (Formula Integrity Check)

## Stage 2 — Formula Recreation (Logic Reconstruction)

---

### Input

1. `01_Extracted_Tables.md` (verified source of truth for expected values)
2. `03_Financial_Model.xlsx` (the formula-driven workbook from Prompt 3)
3. `03_Formula_Map.md` (the formula documentation from Prompt 3)

**Provide all three to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer performing quality assurance on a formula-driven model. Verify that every formula produces the correct result and that the model has no structural errors. Follow these steps exactly:

**1. Value integrity check.** For every CALCULATED cell in `03_Financial_Model.xlsx`:
   - Evaluate the formula
   - Compare the result against the expected value from `01_Extracted_Tables.md`
   - Record: Match, Rounding Difference (state the delta), or Mismatch

**2. Formula logic audit.** For each formula:
   - Is the formula logically correct for what it represents? (e.g., Gross Profit should = Revenue - COGS, not Revenue + COGS)
   - Does it reference the correct cells?
   - Are SUM ranges complete (no missing rows)?

**3. Error scan.** Check the entire workbook for:
   - `#REF!` errors (broken references)
   - `#NAME?` errors (undefined names)
   - `#VALUE!` errors (type mismatches)
   - `#DIV/0!` errors (division by zero)
   - `#N/A` errors (lookup failures)
   - Circular references (flag whether intentional or accidental)

**4. Cross-sheet reference verification.** For every cross-sheet reference in the Formula Map:
   - Confirm the source cell contains the expected value
   - Confirm the destination cell correctly references the source
   - Confirm the values match

**5. Completeness check.**
   - Are there any cells that should be CALCULATED but are still hardcoded?
   - Are there any formulas not documented in the Formula Map?
   - Does the Formula Map match the actual formulas in the workbook?

---

### Output

A Markdown file named `04_Formula_Validation_Log.md` containing:

**1. Summary**

```markdown
## Formula Validation Summary

| Metric | Value |
|--------|-------|
| Total calculated cells checked | X |
| Exact matches | X |
| Rounding differences (< 0.5) | X |
| Mismatches | X |
| Excel errors found | X |
| Circular references | X (intentional: X, accidental: X) |
| Undocumented formulas | X |
| Missing formulas (should be calculated) | X |
```

**2. Detailed Validation Log** — one section per sheet:

```markdown
## [Sheet Name] — Formula Validation

| Cell | Label | Expected Value | Formula Result | Delta | Status | Notes |
|------|-------|---------------|----------------|-------|--------|-------|
| C10 | Gross Profit | 555.6 | 555.6 | 0.0 | PASS | — |
| C15 | Operating Income | 321.4 | 321.3 | 0.1 | ROUNDING | Within tolerance |
| ... | ... | ... | ... | ... | ... | ... |
```

**3. Error Report** (if any errors found):

```markdown
## Errors Found

| # | Sheet | Cell | Error Type | Formula | Root Cause | Fix Required |
|---|-------|------|------------|---------|------------|-------------|
| 1 | Balance Sheet | D15 | #REF! | ='Old Name'!C20 | Sheet renamed | Update reference |
| ... | ... | ... | ... | ... | ... | ... |
```

**4. Remediation Actions** (if any failures):

```markdown
## Remediation Required

| # | Issue | Action |
|---|-------|--------|
| 1 | Cell D15 has #REF error | Update sheet reference |
| ... | ... | ... |
```

---

### Verification Step (Quality Gate 2)

- **Pass:** Zero mismatches (rounding differences are acceptable), zero Excel errors, zero accidental circular references, and Formula Map is complete. Proceed to Prompt 5.
- **Fail:** Any mismatch, error, or undocumented formula found. Apply the following remediation loop:
  1. Fix all flagged issues in `03_Financial_Model.xlsx` and update `03_Formula_Map.md`
  2. Re-run this verification prompt (Prompt 4) on the corrected files
  3. Repeat until all checks pass

State clearly: **"GATE 2: PASS"** or **"GATE 2: FAIL — [X] issues require remediation"**

---

### Handoff

Pass the verified `03_Financial_Model.xlsx`, `03_Formula_Map.md`, and `04_Formula_Validation_Log.md` to **Prompt 5** for assumptions sheet construction.
