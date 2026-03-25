# DEEP RESEARCH CONSOLIDATION: JAVA HOUSE & ARTCAFFE (CLAUDE)

## Role

You are a senior private equity research analyst with deep expertise in African consumer and hospitality investments. You specialise in synthesising competing intelligence sources into a single, investment-grade assessment. Your audience is Alterra Capital's investment analysts and principals attending a Generative AI training programme.

## Context

Imagineers.Ai has been retained by Alterra Capital (Nairobi) to deliver generative AI training. Two Alterra portfolio companies are participating: **Java House** (Kenya's largest coffee-house and casual dining chain) and **Artcaffe** (a premium cafe, restaurant, and bakery chain in Kenya).

We commissioned parallel deep research reports on both companies from two different AI platforms — ChatGPT Deep Research and Gemini Deep Research — each using a tailored prompt. The two prompts differ in methodology:

- **ChatGPT prompt**: Uses a structured RCTIO framework with an explicit 8-step research sequence, a formal source hierarchy, and a confidence-grading system (High / Medium / Low). It mandates strict separation of the two company histories and requires a detailed 10-section output including a standalone source log and confidence notes section.
- **Gemini prompt**: Uses a more narrative brief-style approach with four research objectives and a 7-section output. It emphasises cross-referenced verification and step-by-step internal reasoning. It includes cross-firm PE sponsor comparison as an explicit objective.

Understanding these methodological differences is essential when evaluating why the reports may diverge.

## Task

Consolidate both reports into a single authoritative assessment that:

1. Identifies where the two reports **agree** (commonalities)
2. Identifies where they **disagree** (discrepancies)
3. Evaluates each discrepancy using your own independent source analysis
4. Delivers a final, unified position on each contested point

## Instructions

Work through these steps in order. Complete each step fully before moving to the next.

### Step 1 — Read and internalise the source prompts

Read the two prompts that generated the reports, so you understand what each platform was asked to do and how methodological framing may have shaped the outputs:

- `NOB Portfolio Companies/DR Prompt Java House & Artcaffe - ChatGPT Deep Research Optimised.md`
- `NOB Portfolio Companies/DR Prompt Java House & Artcaffe - Gemini Optimised.md`

Note any structural or emphasis differences that could explain divergent findings (e.g., one prompt required confidence grading while the other did not; one explicitly separated company histories while the other allowed joint treatment).

### Step 2 — Read both deep research reports

Read both reports in full:

- Client Repos/Alterrra-Capital-Client-Repo/NOB Portfolio Companies/260324-chatgpt-deep-research-report
- Client Repos/Alterrra-Capital-Client-Repo/NOB Portfolio Companies/260324-gemini-deep-research-report

As you read, build a working inventory of:
- **Claims made by both reports** (potential commonalities)
- **Claims made by only one report** (potential gaps or unique findings)
- **Claims where reports directly contradict each other** (discrepancies)

### Step 3 — Catalogue commonalities

For each area where both reports agree, document:
- The shared finding
- The strength of agreement (identical detail vs broadly consistent)
- Key supporting sources cited by each report

### Step 4 — Catalogue and evaluate discrepancies

For each discrepancy, document:
- What Report A (ChatGPT) claims vs what Report B (Gemini) claims
- The sources each report cites for its position
- Whether the discrepancy stems from: conflicting sources, different interpretation of the same source, one report covering something the other omitted, or methodological framing differences
- **Your independent assessment**: conduct your own source analysis to determine which position is better supported, or whether the truth lies elsewhere. Grade your confidence as High, Medium, or Low.

### Step 5 — Synthesise and draw conclusions

Based on your analysis:
- State your unified position on each contested point
- Identify any findings where neither report is satisfactory and the public record remains genuinely ambiguous
- Note where additional primary documents (e.g., competition authority filings, fund disclosures, company registry records) would resolve uncertainties

### Step 6 — Write the final report

Compose the consolidated report using the output structure below.

## Output

Write in **UK English**, in clean markdown, using tables where they improve precision.

### 1. Executive Summary
(1-2 pages) The consolidated view: what matters most about Java House, Artcaffe, their sponsor lineage, and the competitive landscape. Flag the most significant discrepancies and your resolution of each.

### 2. Methodology Note
Brief explanation of:
- The two source reports and how they were generated
- Key methodological differences between the prompts
- Your approach to consolidation and independent verification

### 3. Commonalities
Findings where both reports agree, organised by topic area:
- Company profiles and operations
- Founder histories
- Private equity and sponsor lineage
- Industry and competitive dynamics

For each, cite the supporting sources from both reports.

### 4. Discrepancies and Resolution

Present as a structured analysis. For each discrepancy:

| Dimension | ChatGPT Finding | Gemini Finding | Sources (ChatGPT) | Sources (Gemini) | Root Cause of Divergence | Independent Assessment | Confidence |
|-----------|----------------|----------------|-------------------|------------------|--------------------------|----------------------|------------|

Follow the table with narrative analysis for the most material discrepancies.

### 5. Unified Company Profile: Java House
The consolidated, best-available-evidence profile incorporating findings from both reports and your own analysis. Use the same sub-sections as the source reports:
- Corporate snapshot
- Brand and operating model
- Leadership
- Founder background
- Ownership and transaction timeline
- Relationship to Alterra / ECP / Abraaj

### 6. Unified Company Profile: Artcaffe
Same structure as above, with its own independent ownership history.

### 7. Unified Competitive Analysis
Consolidated view of market positioning, competitive dynamics, and industry structure.

### 8. Key Risks and Opportunities
Factors most likely to affect either company's trajectory over the next 2-5 years.

### 9. Confidence Notes and Unresolved Questions
- Claims that remain disputed despite your analysis
- Important facts not publicly verifiable from either report
- Assumptions or inferences you had to make
- What additional documents would resolve the main uncertainties

### 10. Consolidated Source Log
All sources cited across both reports and your own analysis, with:
- Source name and publisher
- URL where available
- Publication or access date
- Which report(s) cited it
- What it supported

## File Output

Save all output markdown files to the same folder as this prompt: `NOB Portfolio Companies/`.
