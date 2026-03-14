# Prompt 2: Verify Extraction (Cell-by-Cell Reconciliation)

## Stage 1 — Spreadsheet Recreation (Data Extraction)

---

### Input

1. The **source document** (same document used in Prompt 1)
2. `01_Extracted_Tables.md` (output from Prompt 1)

**Provide both to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer performing quality assurance on a data extraction. Compare every numerical value in `01_Extracted_Tables.md` against the original source document. Follow these steps exactly:

**1. Systematic comparison.** For each table in `01_Extracted_Tables.md`:
   - Go through every cell that contains a numerical value
   - Compare it against the corresponding cell in the source document
   - Record the result in the reconciliation log

**2. Check categories.** For each cell, verify:
   - **Value accuracy:** Does the number match exactly (including decimal places)?
   - **Sign convention:** Is the sign correct (positive/negative, parentheses)?
   - **Unit consistency:** Is the value in the correct unit (thousands, millions, %)?
   - **Row/column placement:** Is the value in the correct row and column?
   - **Footnote markers:** Are footnote references preserved?

**3. Flag discrepancies.** For any mismatch, classify it as:
   - `TRANSPOSED` — digits swapped (e.g., 1,234 vs 1,243)
   - `SIGN_ERROR` — correct magnitude, wrong sign
   - `ROUNDING` — differs by a rounding amount (e.g., 1,234.5 vs 1,235)
   - `MISSING` — value exists in source but not in extraction
   - `EXTRA` — value exists in extraction but not in source
   - `UNIT_MISMATCH` — value differs due to unit confusion (e.g., thousands vs millions)
   - `OTHER` — any other discrepancy (describe in notes)

**4. Check structural completeness:**
   - Are all tables from the source document present?
   - Are all rows and columns present in each table?
   - Are table headers correct?
   - Are merged cells correctly noted?

**5. Calculate match rate:** Total matching cells / Total cells checked = Match Rate %

---

### Output

A Markdown file named `02_Reconciliation_Log.md` containing:

**1. Summary**

```markdown
## Reconciliation Summary

| Metric | Value |
|--------|-------|
| Tables checked | X |
| Total cells checked | X |
| Matching cells | X |
| Mismatched cells | X |
| Match rate | X% |
| Missing rows/columns | X |
```

**2. Detailed Log** — one section per table:

```markdown
## [Table Name] — Reconciliation Detail

| Row Label | Column | Source Value | Extracted Value | Status | Error Type | Notes |
|-----------|--------|-------------|-----------------|--------|------------|-------|
| Revenue | FY2023 | 1,589.2 | 1,589.2 | MATCH | — | — |
| COGS | FY2023 | (812.1) | (812.1) | MATCH | — | — |
| ... | ... | ... | ... | ... | ... | ... |
```

**3. Remediation Actions** — if match rate < 100%:

```markdown
## Remediation Required

| # | Table | Cell | Error Type | Source Value | Action Required |
|---|-------|------|------------|-------------|-----------------|
| 1 | Income Statement | COGS / FY2022 | TRANSPOSED | (756.3) | Correct to (756.3) |
| ... | ... | ... | ... | ... | ... |
```

---

### Verification Step (Quality Gate 1)

- **Pass:** Match rate = 100% and no missing rows/columns. Proceed to Prompt 3.
- **Fail:** Match rate < 100% or structural issues found. Apply the following remediation loop:
  1. Correct all flagged discrepancies in `01_Extracted_Tables.md`
  2. Re-run this verification prompt (Prompt 2) on the corrected file
  3. Repeat until match rate = 100%

State clearly: **"GATE 1: PASS"** or **"GATE 1: FAIL — [X] issues require remediation"**

---

### Handoff

Pass the verified `01_Extracted_Tables.md` (with 100% match rate) and `02_Reconciliation_Log.md` to **Prompt 3** for formula reconstruction.
