# Change Report: Prompt 5 — Build Assumptions Sheet

**Date:** 2026-03-15
**Scope:** Recommended changes to Prompt 5 in the Sequential Prompt Chain, Version 1
**Supersedes:** `Prompt 5 - Build Assumptions Sheet v1.md` (the current version, renamed from the original to indicate it will be replaced)
**Relates to:** GPT-5.4 review findings #2, #3, #4 (Errors) and #1, #2, #5 (Improvements)

---

## Problem Statement

Prompt 5 creates an Assumptions sheet and wires it into the existing model. However, the prompt chain has a structural gap: it never ensures that assumption-driven projected financial statements exist for the assumptions to feed into.

Two scenarios can arise depending on the source document:

**Scenario A — Source contains only historical financials.** The model after Prompts 1-4 contains only reconstructed actuals. Prompt 5 currently wires assumptions into these historical sheets, which rewrites history rather than creating a forecast. Assumptions like "Revenue Growth Rate" have no forward-looking target.

**Scenario B — Source already contains projected statements.** Some source documents include both historical actuals and projected/forecast tables (e.g., an LBO model with a projected income statement). Prompts 1-4 would extract and reconstruct these with formulas. In this case, Prompt 5 should wire assumptions into the existing projected sheets rather than creating new ones.

The current prompt does not distinguish between these cases. In both cases, it blindly replaces hardcoded inputs across all model sheets — historical and projected alike — with assumption references.

This creates three problems regardless of scenario:

1. **Historical actuals get overwritten.** Whether or not projections exist, the current wiring step modifies historical sheets. Historical financials are facts and should never change when an analyst adjusts assumptions.

2. **In Scenario A, assumptions have no forward-looking target.** Without projected statements, changing assumptions doesn't produce a meaningful forecast — it just modifies reconstructed historical values.

3. **Downstream prompts assume projections exist.** Prompt 7 (Scenarios) builds upside/downside comparisons with metrics like Revenue, EBITDA, and Net Income under each scenario. These only make sense applied to forward-looking projections.

---

## Recommended Changes

### Change 1: Detect whether projections already exist in the model

**Current behaviour:** No detection step. The prompt assumes a single model structure.

**Proposed behaviour:** Add an explicit first-pass instruction: review the workbook from Prompt 3/4 and the extracted tables from Prompt 1 to determine whether the source document included projected/forecast financial statements.

- If projected statements **already exist** in the model → proceed to wire assumptions into those existing projected sheets (do not create new ones).
- If the model contains **only historical actuals** → build projected financial statements before wiring.

**Rationale:** The prompt chain is designed to work with any source document. Some sources (e.g., investment memos, LBO models, analyst reports) include projections; others (e.g., annual reports, 10-Ks) do not. The prompt must handle both.

### Change 2: Split historical actuals from forecast logic

**Current behaviour:** Step 4 says "Replace the corresponding hardcoded input(s) in the model sheets with a reference to the Assumptions sheet." This modifies all sheets including historical actuals.

**Proposed behaviour:** Historical actuals remain untouched as locked, source-backed values. The Assumptions sheet feeds only into projected/forecast statements (whether pre-existing or newly created).

**Rationale:** Historical financials are facts. They should never change when an analyst adjusts assumptions. This is standard financial modelling practice — actuals and forecasts are clearly separated.

### Change 3: Add a conditional forecast-building step

**Current behaviour:** There is no step that creates projected financial statements.

**Proposed behaviour:** Add a new step (proposed as Step 4, before the current wiring step) that **conditionally** builds projected statements — only when the source document did not already include them.

The instruction should be generic, not prescriptive about specific line items:

1. **Create projected statement sheets** for each financial statement type present in the historical model. If the model contains an income statement, balance sheet, and cash flow statement, project all three. If it contains only an income statement, project only that. Mirror the line item structure from the corresponding historical sheet.

2. **Use the last historical period as the starting point.** The first projected column references the last historical column as its base. Each subsequent projected column references the prior projected column.

3. **Drive each line item from assumptions.** For each line item in the projected statements:
   - Identify which assumption variable controls it (from the Assumptions sheet built in Step 3)
   - Apply the assumption as a driver. The nature of the driver depends on the line item type:
     - Revenue lines: typically driven by a growth rate applied to the prior period
     - Cost lines: typically driven as a percentage of the relevant revenue line, or by a growth rate
     - Subtotals and totals: calculated by formula from projected line items (not driven directly by assumptions)
   - If a line item has no corresponding assumption (e.g., a one-time historical charge), either exclude it from projections or hold it flat — and flag it for analyst review

4. **Cross-link projected statements** using the same conventions established in Prompt 3 for historical statements (e.g., Net Income flowing between statements, ending cash tying to the balance sheet).

5. **Set the number of projection years** from a configurable parameter on the Assumptions sheet (default: 5 years).

**Rationale:** This is the missing architectural piece for Scenario A. Making it conditional avoids duplicating projections that the source document already provides. Keeping the line item structure generic (mirroring the source) ensures the prompt works for any industry or financial statement format.

### Change 4: Restructure the Assumptions sheet categories

**Current behaviour:** The Assumptions sheet includes categories that may not be supportable from the source data — specifically "Valuation & Returns" (exit multiple, WACC, terminal growth rate, discount rate). These are deal-level inputs that typically don't exist in the source financial statements.

**Proposed behaviour:**
- Keep the categories that are directly derivable or reasonably inferred from the source financials. The specific categories will vary by source document, but the prompt should instruct the AI to derive them from whatever line items exist in the model (not from a fixed list).
- Move any variables that cannot be sourced from the document to an optional section clearly labelled as **"Analyst Inputs — Not From Source"**. These should default to blank or placeholder values, not fabricated numbers.
- Add a **"Forecast Parameters"** category containing: Number of Projection Years, Base Year (auto-detected as last historical year).

**Rationale:** Assumptions sourced from the data and assumptions requiring analyst judgement should be visually and structurally separated. The current prompt's fixed category list (Revenue Drivers, Cost Drivers, Capital Structure, CapEx, Valuation & Returns) assumes a specific type of source document. The categories should emerge from the actual content of the model, not be imposed.

### Change 5: Add a source label to every assumption

**Current behaviour:** Each assumption has columns for Variable Name, Base Case Value, Unit, Source/Rationale, Editable (Y/N), Min, Max.

**Proposed behaviour:** Add a **Source Type** column with one of these values:
- `From Source` — directly observable in the source document (e.g., a ratio calculated from two reported figures)
- `Derived` — calculated from source data but requires interpretation (e.g., an implied growth rate between two reported periods)
- `Analyst Input` — not in the source; requires human judgement (e.g., exit multiple, discount rate)
- `Default` — a standard placeholder that the analyst should review (e.g., number of projection years)

**Rationale:** This prevents the AI from presenting invented assumptions as if they were extracted facts, and makes it clear to the analyst which values need their attention. This applies regardless of what the source document contains.

### Change 6: Update the wiring step

**Current behaviour:** Step 4 wires assumptions into the existing (historical) model sheets.

**Proposed behaviour:** The wiring step (now Step 5) wires assumptions into the **projected** financial statements only — whether those are pre-existing (from the source document) or newly created (from Step 4). Historical sheets are not modified.

The step should verify:
- Every editable assumption is referenced by at least one cell in the projected statements
- Changing any assumption recalculates projected outputs
- The projected Year 1 values are reasonable relative to the last historical period (no order-of-magnitude jumps unless assumptions dictate it)

### Change 7: Update the validation step

**Current behaviour:** Validation checks that the model "still produces the exact same output values as `03_Financial_Model.xlsx`" after wiring.

**Proposed behaviour:** Validation should check two things:
1. **Historical sheets are unchanged** — identical to `03_Financial_Model.xlsx` (since we no longer touch them)
2. **Projected sheets respond to assumptions** — change one editable assumption by a small amount, confirm all downstream projected values update in the expected direction, then restore the original value

### Change 8: Update the output file list

**Current behaviour:** Outputs are `05_Financial_Model.xlsx` and `05_Assumptions_Documentation.md`.

**Proposed behaviour:** Outputs remain the same two files, but the documentation should now also include:
- A **Projection Logic Map** section (similar to the Formula Map from Prompt 3, but for the projected sheets — documenting how each projected line item is driven by its assumption)
- A note on whether projected statements were pre-existing in the source or newly created
- Clear notation of which projected cells reference which assumption cells

---

## Impact on Downstream Prompts

| Prompt | Impact | Action Required |
|--------|--------|-----------------|
| Prompt 6 (Questionnaire) — currently `v1` | **Moderate — requires template update.** The current `Prompt 6 - Data Collection Questionnaire v1.md` hardcodes category headings ("Section 1: Revenue Assumptions", "Section 5: Valuation & Returns"). Since Change 4 makes assumption categories dynamic (derived from source content, not a fixed list), the Prompt 6 template must also use dynamic categories. The instruction should say "one section per assumption category from `05_Assumptions_Documentation.md`" rather than listing fixed sections. | Write `Prompt 6 - Data Collection Questionnaire v2.md` with dynamic categories matching the Assumptions sheet. |
| Prompt 7 (Scenarios) | **Positive — no structural conflict.** Scenarios now toggle assumptions that drive actual projections. The scenario summary dashboard will produce meaningful forward-looking numbers. The existing Prompt 7 circular reference issue (flagged in the GPT-5.4 review as Error #5, where Scenarios.BaseCase links to Assumptions which reads from Scenarios.ActiveValue) is **not worsened** by these changes, but also not fixed — that is a separate Prompt 7 fix. | None for this report. Prompt 7 circular reference fix is a separate item. |
| Prompt 8 (Verify Scenarios) — currently `v1` | **Requires update for Scenario A.** The current `Prompt 8 - Verify Scenarios v1.md` Step 1 ("Base Case restoration test") compares key output metrics against `01_Extracted_Tables.md`. This works in Scenario B (source had projections — the projected values exist in the extracted tables). But in Scenario A (projections were newly built by Prompt 5), there are **no source values to compare projected outputs against**. Prompt 8 needs a conditional validation path: for newly built projections, the Base Case restoration test should verify that projected outputs match the values produced by the base case assumptions (i.e., internal consistency), rather than comparing against the source document. | Write `Prompt 8 - Verify Scenarios v2.md` with conditional validation for both provenance cases. |
| Overview doc | **Requires update.** Gate 3 currently reads: "All editable assumptions wired; changing an input recalculates outputs." This should be updated to: "Historical sheets unchanged; all editable assumptions wired to projected statements; changing an input recalculates projected outputs." The flow diagram should also note that Stage 3 now includes conditional forecast construction. | Update Gate 3 definition and flow diagram description. |

---

## Summary of Step Renumbering Within Prompt 5

| Current Step | Proposed Step | Description |
|-------------|--------------|-------------|
| — | **1. Detect projection state (NEW)** | Determine whether projected statements already exist in the model |
| 1. Identify assumption variables | 2. Identify assumption variables | Updated: derive categories from actual model content, not a fixed list; add Source Type classification |
| 2. Extract base case values | 3. Extract base case values | Updated: add Source Type column |
| 3. Build the Assumptions sheet | 4. Build the Assumptions sheet | Updated layout with Source Type column, Forecast Parameters category, and separated Analyst Inputs section |
| — | **5. Build Projected Statements (NEW, conditional)** | Only if source did not include projections: create projected sheets mirroring historical structure, driven by assumptions |
| 4. Wire assumptions into the model | 6. Wire assumptions into projected statements | Now wires into projected sheets only (pre-existing or newly created), not historical |
| 5. Validate wiring | 7. Validate | Updated to check both historical preservation and projection responsiveness |
| 6. Document the assumptions | 8. Document | Expanded to include Projection Logic Map and projection provenance note |

---

## Consistency Check Against Full Prompt Chain

Each prompt was reviewed for conflicts, gaps, or required updates resulting from the proposed Prompt 5 changes.

| Prompt | Consistent? | Notes |
|--------|-------------|-------|
| **Prompt 1** (Extract Tables) | Yes | Extracts all tables from the source document agnostically — does not distinguish historical from projected. The extracted table names and context notes provide enough information for Prompt 5's new detection step (Change 1) to determine which tables are historical vs. projected. No changes needed. |
| **Prompt 2** (Verify Extraction) | Yes | Cell-by-cell reconciliation is source-agnostic. Unaffected by Prompt 5 changes. No changes needed. |
| **Prompt 3** (Reconstruct Formulas) | Yes | Creates "one sheet per financial table" with formulas. If the source contained projected tables, Prompt 3 would reconstruct them — classifying projected hardcoded inputs as INPUT and projected calculated cells as CALCULATED. Prompt 5's wiring step (Change 6) would then replace projected INPUT cells with assumption references. This is consistent. No changes needed. |
| **Prompt 4** (Verify Formulas) | Yes | Validates formulas against `01_Extracted_Tables.md`. Runs before Prompt 5 and is unaffected. No changes needed. |
| **Prompt 5** (Assumptions) — currently `v1` | N/A | This is the prompt being changed. Will produce `v2`. |
| **Prompt 6** (Questionnaire) — currently `v1` | **Needs update → v2** | The `v1` template hardcodes fixed category sections ("Section 1: Revenue Assumptions", ..., "Section 5: Valuation & Returns"). Change 4 makes categories dynamic. A `v2` must be written to derive sections from the actual categories in `05_Assumptions_Documentation.md` rather than using a fixed list. See Impact table above. |
| **Prompt 7** (Scenarios) | Yes (with caveat) | The Scenarios → Assumptions → Projected Sheets wiring chain is logically consistent with the proposed changes. The existing circular reference issue (GPT-5.4 review Error #5) is neither worsened nor fixed by these changes — it remains a separate Prompt 7 problem. No changes needed from this report. |
| **Prompt 8** (Verify Scenarios) — currently `v1` | **Needs update → v2** | The `v1` Step 1 ("Base Case restoration test") compares projected outputs against `01_Extracted_Tables.md`. This only works when the source document originally contained projections (Scenario B). For Scenario A (projections newly built by Prompt 5), there are no source values to compare against. A `v2` needs a conditional validation path. See Impact table above. |
| **Overview** (00) | **Needs update** | Gate 3 definition and Stage 3 description in the flow diagram need updating. See Impact table above. |

---

## Genericity Checklist

This report was reviewed against the following genericity requirements:

- [x] No specific company, industry, or case study referenced
- [x] No prescribed line items (e.g., "Labour", "COGS") — projected statements mirror whatever the source contains
- [x] Handles source documents with and without existing projections
- [x] Handles source documents with varying statement types (IS only, IS+BS, IS+BS+CF, etc.)
- [x] Assumption categories are derived from source content, not from a fixed template
- [x] No industry-specific driver logic assumed (growth rates and percentage-of-revenue are offered as typical patterns, not mandated)
- [x] Works for any financial statement format (GAAP, IFRS, management accounts, etc.)

---

## Decision Required

Approve this change report to proceed with writing the following v2 prompts, each superseding its current v1:

1. **`Prompt 5 - Build Assumptions Sheet v2.md`** — the primary rewrite (expanded with detection, conditional projections, dynamic categories, source typing)
2. **`Prompt 6 - Data Collection Questionnaire v2.md`** — updated to use dynamic categories from the Assumptions documentation
3. **`Prompt 8 - Verify Scenarios v2.md`** — updated with conditional validation for newly built vs. source-provided projections

The Prompt 5 rewrite will expand significantly but keeps it as a single prompt rather than splitting into two, preserving the existing chain numbering and file naming conventions. Prompts 6 and 8 require targeted updates, not full rewrites.
