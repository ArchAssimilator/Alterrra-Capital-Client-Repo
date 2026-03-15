# Sequential Prompt Chain — Spreadsheet Recreation

**Version:** v2
**Change basis:** 260315-prompt-5-change-report.md — Stage 3 now includes conditional forecast construction; Gate 3 updated

## Overview

This prompt chain transforms financial tables from any source document into a fully dynamic, assumption-driven Excel model with scenario analysis. It consists of **4 Stages and 8 Prompts**, each self-contained and executable in any GenAI environment.

The chain handles two scenarios automatically: source documents that already contain projected/forecast financial statements (Scenario B), and those that contain only historical actuals (Scenario A). In Scenario A, Stage 3 conditionally builds projected statements before wiring assumptions.

## Flow Diagram

```
SOURCE DOCUMENT (PDF / Word / Excel / Scanned Image)
         |
         v
+---------------------------+
| STAGE 1: DATA EXTRACTION  |
+---------------------------+
| Prompt 1: Extract Tables  |  --> Extracted Tables (.md)
| Prompt 2: Verify Extract  |  --> Reconciliation Log (.md)
+---------------------------+
         | (100% match gate)
         v
+---------------------------+
| STAGE 2: FORMULA REBUILD  |
+---------------------------+
| Prompt 3: Reconstruct     |  --> Formula-driven Model (.xlsx) + Formula Map (.md)
| Prompt 4: Verify Formulas |  --> Validation Log (.md)
+---------------------------+
         | (zero failures gate)
         v
+------------------------------------+
| STAGE 3: ASSUMPTIONS & PROJECTIONS |
+------------------------------------+
| Prompt 5: Assumptions Sht |  --> Updated Model (.xlsx) + Assumptions Doc (.md)
|   - Detects projection     |      [Conditionally builds projected statements
|     state (Scenario A/B)   |       if source had only historical actuals]
| Prompt 6: Questionnaire   |  --> Data Collection Questionnaire (.md)
+------------------------------------+
         | (historical unchanged; wiring verified gate)
         v
+---------------------------+
| STAGE 4: SCENARIOS        |
+---------------------------+
| Prompt 7: Scenario Sheet  |  --> Final Model (.xlsx) + Scenario Summary (.md)
| Prompt 8: Verify Scenario |  --> Scenario Validation Log (.md)
+---------------------------+
         |
         v
   FINAL DELIVERABLE SET
```

## Deliverables per Stage

| Stage | Prompt | Primary Deliverable | Verification Deliverable |
|-------|--------|-------------------|------------------------|
| 1 | P1 | Extracted Tables (.md per sheet) | -- |
| 1 | P2 | -- | Reconciliation Log (.md) |
| 2 | P3 | Live Model (.xlsx) + Formula Map (.md) | -- |
| 2 | P4 | -- | Validation Log (.md) |
| 3 | P5 | Updated Model (.xlsx) + Assumptions Doc (.md) | -- |
| 3 | P6 | Data Collection Questionnaire (.md) | -- |
| 4 | P7 | Final Model (.xlsx) + Scenario Summary (.md) | -- |
| 4 | P8 | -- | Scenario Validation Log (.md) |

## Quality Gates

Each stage has a pass/fail gate. If verification fails, the prompt includes a remediation loop: fix the flagged issues, re-run the verification prompt, and repeat until the gate passes.

- **Gate 1 (after P2):** 100% cell-by-cell match rate
- **Gate 2 (after P4):** Zero formula failures, no circular references
- **Gate 3 (after P5):** Historical sheets unchanged; all editable assumptions wired to projected statements; changing an input recalculates projected outputs
- **Gate 4 (after P8):** All scenarios toggle correctly; Base Case restores original values; historical sheets unchanged throughout

## Best Practices Incorporated

### Document-to-Spreadsheet Extraction
- Process tables one at a time (income statement, then balance sheet, etc.) to reduce error rates
- Preserve original formatting markers (parentheses for negatives, footnote superscripts) before normalising
- Handle multi-page tables by looking for repeated headers and continuation indicators
- Flag merged cells explicitly rather than silently splitting them
- Capture surrounding narrative, footnotes, and management commentary as context notes

### Formula Reconstruction
- Classify every cell as either an **input** (hardcoded from source) or a **calculated** cell before writing any formulas
- Reconstruct formulas bottom-up: start with simple row/column totals, then ratios, then cross-sheet links
- Use named ranges for cross-sheet references to make formulas readable
- Document every formula's business logic, not just its cell reference syntax

### Assumption-Driven Model Design
- Strict separation: inputs on the Assumptions sheet, calculations on working sheets, outputs on summary sheets
- Historical actuals remain locked and untouched — assumptions drive projected statements only
- Every editable assumption must have a unit, source type, source/rationale, and acceptable range
- Assumption categories are derived from the model's actual content, not imposed from a fixed template
- Source Type classification (From Source, Derived, Analyst Input, Default) distinguishes extracted facts from analyst judgement
- Base case values come from the source document; analyst input values default to blank/placeholder
- Conditional projection construction: if the source document lacks projections, Stage 3 builds them; if projections already exist, it wires into them

### Scenario Analysis Architecture
- Use a single scenario selector cell that drives all scenario-dependent calculations
- Each scenario is a named column of assumption overrides — not a separate copy of the model
- Include conditional formatting to visually flag material differences (>10% deviation from Base Case)

## Known Limitations and Edge Cases

1. **Scanned/image-based PDFs:** OCR quality varies. Numbers may be misread (e.g., "1" vs "l", "0" vs "O"). The reconciliation step in Prompt 2 is critical for catching these errors.
2. **Multi-page tables:** Tables spanning pages may have repeated headers, page breaks mid-row, or footnotes inserted between sections. Prompt 1 instructs the AI to look for continuation markers.
3. **Merged cells:** Source documents often merge cells for visual grouping. These must be explicitly noted and handled during extraction.
4. **Currency and unit ambiguity:** Some documents mix units (thousands vs millions) across tables or change units mid-table. The extraction prompt requires unit identification per table.
5. **Footnote-dependent values:** Some cells have values that are only correct when read with their footnotes (e.g., "Adjusted EBITDA*" where * excludes one-time charges). Context notes capture this.
6. **Password-protected documents:** Cannot be read by most GenAI tools. The user must unlock them first.
7. **Very large documents (>50 pages):** May need to be split into sections and processed in multiple passes.
8. **Non-English documents:** Formula reconstruction logic assumes English-language financial statement conventions. Adjustments may be needed for IFRS vs GAAP terminology or non-English labels.
9. **Circular references:** Some financial models intentionally include circular references (e.g., interest expense depending on average debt, which depends on cash flow, which depends on interest expense). These must be identified and handled with iterative calculation or a plug.
10. **Conditional/contingent items:** Off-balance-sheet items, earn-outs, or contingent liabilities may not appear in standard tables but are referenced in footnotes. The context notes section captures these.
