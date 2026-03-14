# Prompt 1: Extract Financial Tables

## Stage 1 — Spreadsheet Recreation (Data Extraction)

---

### Input

A source document containing financial tables. This can be any format: PDF, Word (.docx), Excel (.xlsx), scanned image, or other readable format. The document may contain one or more financial statements (income statement, balance sheet, cash flow statement, supporting schedules) along with narrative sections, footnotes, and management commentary.

**Provide the source document to the AI along with this prompt.**

---

### Action

You are a senior financial modelling engineer. Read the attached source document and extract every financial table into structured Markdown format. Follow these steps exactly:

**1. Survey the document.** Scan the entire document and list every financial table found. For each table, note:
   - Table name (e.g., "Consolidated Income Statement")
   - Page number(s) or section location
   - Time periods covered (e.g., "FY2021, FY2022, FY2023")
   - Unit of measurement (e.g., "$ in millions", "$ in thousands")
   - Whether the table spans multiple pages

**2. Extract each table.** For each table identified, produce a Markdown table with:
   - **Row headers** exactly as they appear in the source (preserve original labels, indentation hierarchy, and grouping)
   - **Column headers** exactly as they appear (time periods, scenarios, segments)
   - **All numerical values** preserved exactly — including:
     - Sign conventions (parentheses for negatives, minus signs)
     - Decimal precision as shown in the source
     - Percentage values with the % symbol
     - "N/A", "—", or blank cells reproduced as-is
   - **Footnote markers** (superscripts like *, (1), (a)) preserved inline next to the relevant cell or row label

**3. Capture contextual information.** After each table, include a "Context Notes" section with:
   - Any footnotes referenced in the table
   - Relevant narrative from surrounding text that affects interpretation (e.g., "Revenue includes $X from discontinued operations")
   - Accounting policy notes that affect how numbers should be read (e.g., "Fiscal year ends in June")
   - Unit or currency clarifications
   - Any restatements or reclassifications mentioned

**4. Handle edge cases:**
   - **Multi-page tables:** Look for repeated column headers, "continued" markers, or page breaks mid-table. Combine into a single continuous table.
   - **Merged cells:** Note merged cells explicitly in the Context Notes (e.g., "Rows 3-5 are grouped under 'Operating Expenses' header")
   - **Nested/sub-tables:** If a table contains sub-tables (e.g., a revenue breakdown within the income statement), extract these as indented rows within the parent table, preserving the hierarchy
   - **Charts/graphs:** Do not extract charts. If a chart contains data not found in any table, note this in Context Notes.

**5. Produce a Table of Contents.** At the top of the output, list every extracted table with its name and the corresponding section heading in the output document.

---

### Output

A single Markdown file named `01_Extracted_Tables.md` containing:

1. **Table of Contents** listing every extracted table
2. **Each table** as a Markdown table under its own heading (## Table Name), with:
   - A header line stating: time periods covered, unit of measurement, source page(s)
   - The extracted Markdown table
   - A "Context Notes" subsection
3. **Document-Level Notes** at the end, capturing:
   - Overall currency and unit conventions
   - Fiscal year-end date
   - Accounting standard (GAAP/IFRS)
   - Any document-wide caveats

**Format example for each table:**

```markdown
## Consolidated Income Statement

**Periods:** FY2021, FY2022, FY2023 | **Units:** $ in millions | **Source:** Pages 4-5

| Line Item | FY2021 | FY2022 | FY2023 |
|-----------|--------|--------|--------|
| Revenue | 1,234.5 | 1,456.7 | 1,589.2 |
| Cost of Goods Sold | (678.9) | (756.3) | (812.1) |
|   Gross Profit | 555.6 | 700.4 | 777.1 |
| ... | ... | ... | ... |

### Context Notes
- (1) Revenue includes $45.2M from discontinued operations in FY2021
- Fiscal year ends March 31
- All figures audited by [Auditor Name]
```

---

### Verification Step

Before considering this prompt complete, self-check:

1. Count the total number of tables in the source document. Does your extraction include all of them?
2. Spot-check at least 5 numerical values per table against the source. Do they match exactly?
3. Are all footnote markers preserved and their text captured in Context Notes?
4. Are units and sign conventions consistent within each table?
5. Are multi-page tables correctly combined?

If any check fails, fix the issue before finalising the output.

---

### Handoff

Pass `01_Extracted_Tables.md` to **Prompt 2** for cell-by-cell reconciliation against the source document.
