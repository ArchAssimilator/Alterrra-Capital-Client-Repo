# Prompt 3: Reconstruct Formulas

## Stage 2 — Formula Recreation (Logic Reconstruction)

---

### Input

1. `01_Extracted_Tables.md` (verified, 100% match rate from Stage 1)
2. `02_Reconciliation_Log.md` (confirming Gate 1 passed)

**Provide both to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer. Transform the hardcoded extracted tables into a live, formula-driven Excel workbook. Follow these steps exactly:

**1. Classify every cell.** For each table, go through every cell and classify it as:
   - **INPUT** — a raw data point from the source (will remain hardcoded)
   - **CALCULATED** — derived from other cells via a formula

Use these rules to classify:
   - Subtotals and totals (e.g., "Total Revenue", "Gross Profit", "Net Income") are CALCULATED
   - Ratios, margins, and percentages (e.g., "Gross Margin %", "YoY Growth") are CALCULATED
   - Per-share metrics (e.g., "EPS") are CALCULATED (shares outstanding is INPUT, EPS = Net Income / Shares)
   - Line items that are not sums of other visible line items are INPUT (e.g., individual revenue lines, individual expense lines)
   - If ambiguous, check: can this number be reproduced by combining other visible numbers in the table? If yes, it is CALCULATED.

**2. Reconstruct formulas bottom-up.** Work in this order:
   a. **Row/column totals and subtotals** within each sheet (e.g., Total Revenue = sum of revenue line items)
   b. **Ratios and margins** within each sheet (e.g., Gross Margin = Gross Profit / Revenue)
   c. **Growth rates** (e.g., YoY Revenue Growth = (Current Year Revenue / Prior Year Revenue) - 1)
   d. **Cross-sheet references** — identify values that flow between statements:
      - Net Income from the Income Statement to the Cash Flow Statement
      - Net Income from the Income Statement to Retained Earnings on the Balance Sheet
      - D&A from the Income Statement to the Cash Flow Statement
      - CapEx from the Cash Flow Statement to PP&E on the Balance Sheet
      - Ending Cash from the Cash Flow Statement to Cash on the Balance Sheet
      - Any other cross-references implied by the data

**3. Build the Excel workbook.** Create an `.xlsx` file with:
   - One sheet per financial table (matching the names from `01_Extracted_Tables.md`)
   - INPUT cells contain hardcoded values
   - CALCULATED cells contain Excel formulas
   - Cross-sheet references use the format `'Sheet Name'!CellRef`
   - Use named ranges for key cross-sheet links where it improves readability
   - Format cells appropriately: number format with commas, negative numbers in parentheses, percentages with %, dates formatted consistently
   - INPUT cells visually distinguished (e.g., blue font or light blue fill — standard financial modelling convention)

**4. Document in a Formula Map.** Produce a companion Markdown file documenting every formula:

```markdown
| Sheet | Cell | Cell Label | Formula | Description |
|-------|------|------------|---------|-------------|
| Income Statement | C10 | Gross Profit | =C5-C6 | Revenue minus COGS |
| Income Statement | C15 | Operating Income | =C10-SUM(C11:C14) | Gross Profit minus OpEx items |
| Cash Flow | C5 | Net Income | ='Income Statement'!C20 | Cross-ref from IS |
| ... | ... | ... | ... | ... |
```

**5. Handle edge cases:**
   - **Rounding differences:** If a formula produces a value that differs from the source by a small rounding amount (< 0.5 in the displayed unit), note it in the Formula Map but keep the formula (do not hardcode to force a match)
   - **Plugs and adjustments:** If the source includes "Other" or "Adjustment" lines that make a total work, keep these as INPUT cells and note them
   - **Intentional circular references:** If you identify a circular reference (e.g., interest expense <-> debt balance <-> cash flow), flag it in the Formula Map and implement it as a broken-out iterative calculation or leave the circular cell as INPUT with a note

---

### Output

1. **`03_Financial_Model.xlsx`** — the live Excel workbook with formulas
2. **`03_Formula_Map.md`** — the Formula Map documenting every formula, structured as:

```markdown
# Formula Map

## Summary

| Sheet | Total Cells | Input Cells | Calculated Cells | Cross-Sheet References |
|-------|------------|-------------|------------------|----------------------|
| Income Statement | X | X | X | X |
| Balance Sheet | X | X | X | X |
| Cash Flow Statement | X | X | X | X |
| ... | ... | ... | ... | ... |

## Formulas by Sheet

### Income Statement

| Cell | Label | Formula | Description | Notes |
|------|-------|---------|-------------|-------|
| ... | ... | ... | ... | ... |

### Balance Sheet
...

## Cross-Sheet Reference Map

| From Sheet | From Cell | To Sheet | To Cell | Description |
|-----------|-----------|----------|---------|-------------|
| Income Statement | C20 | Cash Flow | C5 | Net Income |
| ... | ... | ... | ... | ... |

## Edge Cases and Notes
- [Any rounding differences, plugs, or circular references identified]
```

---

### Verification Step

Before considering this prompt complete, self-check:

1. Does every CALCULATED cell produce a value that matches the original hardcoded value from `01_Extracted_Tables.md`? (Rounding differences < 0.5 in displayed units are acceptable.)
2. Are all cross-sheet references correctly linked?
3. Are there any #REF, #NAME, #VALUE, or #DIV/0 errors?
4. Is the Formula Map complete — does it document every formula in the workbook?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `03_Financial_Model.xlsx` and `03_Formula_Map.md` to **Prompt 4** for formula integrity verification.
