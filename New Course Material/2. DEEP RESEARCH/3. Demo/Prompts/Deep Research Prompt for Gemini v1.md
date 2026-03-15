---

### Gemini Deep Research Prompt

> **Before you submit this prompt:**
> Upload `06_Data_Collection_Questionnaire.md` as a document attachment. Gemini Deep Research can simultaneously use your uploaded file and its live web search — so you do not need to upload the annual report unless you want clause-level detail from the financials. Keep your upload to the questionnaire only; let Gemini source the broader market data from the web. If you do have the Famous Brands Annual Report PDF available, add it to the upload — Gemini can handle large file volumes.
>
> **Important:** Use the step-by-step structure in the Instructions section strictly. Gemini can generate very broad output — the structure below is designed to keep the research focused and investment-relevant.

---

**R — Role**

You are a sector specialist and buy-side analyst at a global investment bank, covering African consumer, retail, and food service sectors. You have deep expertise in franchised restaurant business models, South African equity markets, and private equity take-private transactions. You are rigorous about sourcing: you distinguish between primary data (analyst reports, regulatory filings, central bank data) and secondary commentary (news articles, blogs).

---

**C — Context**

Alterra Capital is evaluating a take-private of Famous Brands Limited (JSE: FBR) — a South African franchise group operating approximately 2,900 outlets across brands including Steers, Wimpy, Debonairs Pizza, Mugg & Bean, Fishaways, and others. The group generates the majority of its revenue in South Africa, with additional operations across sub-Saharan Africa and the United Kingdom.

The deal team has built a five-year income statement projection model (FY 2026–FY 2030) based on six years of audited actuals (FY 2020–FY 2025). The attached questionnaire contains all key model assumptions. Your task is to synthesise the structured questionnaire with current market intelligence to produce a comprehensive, investment-grade research note that maps directly to the model variables.

---

**T — Task**

Produce a structured research note that combines document analysis (from the attached questionnaire) with live web research to benchmark, validate, and recommend values for all key model assumptions. Cover both operating assumptions (revenue, costs) and valuation inputs (WACC, terminal growth rate, exit multiple). The output must be directly usable as model inputs — not general commentary.

---

**I — Instructions**

Follow this exact five-step structure. Do not expand beyond the scope of each step.

---

**Step 1 — Macro and sector context (maximum one page)**

Summarise the following in bullet points only — no paragraphs:
- South African nominal GDP growth consensus for 2025–2030 (source: IMF, National Treasury, or major SA investment bank)
- SA Consumer Price Index (food component) forecast for 2025–2027
- QSR and casual dining sector growth rate in SA and sub-Saharan Africa (source: Euromonitor, Statista, or industry body)
- Key risks to the consumer spending outlook: load-shedding resolution, formal employment rate, rand depreciation
- Key tailwinds: infrastructure recovery, digital ordering penetration, franchise model resilience

---

**Step 2 — Operating assumption benchmarks**

For each variable below, provide: (a) the SA sector average or best-available benchmark, (b) the peer range using named comparable companies, and (c) your recommended model input. Be specific — give numbers, not descriptions.

**Q3: Revenue growth rate (YoY) — Base case: 3.2%**
Find: SA QSR sector revenue growth (2023–2025 actuals and 2026–2028 forecasts). Peer comparables: Spur Corporation (JSE: SUR), Grand Parade Investments (JSE: GPL), Restaurant Brands International, Yum! Brands. Note the organic vs network expansion split where available.

**Q4: Cost of sales (% of revenue) — Base case: 57.2%**
Find: SA and global QSR gross margin benchmarks. Research SA poultry, beef, and wheat price index trends for 2025–2026. Check whether food producer price inflation is rising or falling. Named peers: Spur Corporation gross margin, Yum! Brands system-level food cost ratios.

**Q7: Administration expenses (% of revenue) — Base case: 2.4%**
Find: comparable listed franchise group G&A ratios as % of revenue. Research SA wage inflation outlook (relevant to head-office costs). Note any known efficiency programmes at Famous Brands.

**Q8: Marketing expenses (% of revenue) — Base case: 8.7%**
Find: QSR marketing spend benchmarks as % of revenue, globally and in Africa. Research the shift from traditional to digital media spend in SA. Note whether franchise marketing levies are typically included or excluded in peer disclosures.

**Q9: Operations expenses (% of revenue) — Base case: 21.4%**
Find: SA logistics and supply chain cost benchmarks for food distribution businesses. Research diesel and transport cost trends in SA (relevant given logistics component). Note any peer supply chain metrics.

**Q15: Effective tax rate — Base case: 27.5%**
Confirm: SA corporate income tax statutory rate. Research any announced changes to the corporate tax regime in the 2025 or 2026 SA National Budget. Note whether the effective vs statutory rate gap is typical for franchise businesses with associate income.

---

**Step 3 — Valuation inputs (do not skip or abbreviate)**

**Q21: Terminal growth rate — No default (analyst input required)**
Build the terminal growth rate from: SA long-run nominal GDP growth + sector growth premium/discount. Cite: IMF 5-year GDP forecast for South Africa, National Treasury medium-term economic outlook, and any SA investment bank long-run growth estimate. Propose a base case, upside, and downside.

**Q22: WACC / Discount rate — No default (analyst input required)**
Build the WACC step by step:

| Component | Source | Value |
|---|---|---|
| Risk-free rate | SA 10-year government bond yield (current) | |
| Equity risk premium | Damodaran SA ERP (latest annual update) | |
| Beta (levered) | Comparable SA food franchise companies | |
| Size / illiquidity premium | PE take-private premium over public comps | |
| Pre-tax cost of debt | SA corporate credit spreads, food sector | |
| Target capital structure | Famous Brands current leverage as proxy | |
| WACC (mid) | | |

State your WACC range: low / mid / high.

**Q23: Exit EV/EBITDA multiple — No default (analyst input required)**
Find:
- Current trading multiple for Famous Brands (JSE: FBR) — most recent available
- Current trading multiples for Spur Corporation and comparable SA consumer stocks
- Recent comparable M&A transactions in SA and EM consumer / restaurant / franchise sectors (2020–2025)
- Global PE take-private transactions in QSR / franchise (for context)

Propose: base case exit multiple, upside multiple (sector re-rating), downside multiple (multiple compression).

---

**Step 4 — Scenario construction**

Identify the five model variables with the highest sensitivity impact (i.e. the variables where a 1 percentage point change most materially affects EBITDA or net income). For each:
- State the base case value
- Propose an upside value and justify it with one benchmark or market data point
- Propose a downside value and justify it with one risk factor or precedent

Present in a table.

---

**Step 5 — Source quality check**

List every source used in your research. For each source, confirm:
- Publication date
- Whether it is a primary source (regulatory filing, central bank, rating agency, sell-side equity research) or secondary source (news, blog, commentary)
- Flag any source that is more than 18 months old with a caution note

---

**O — Output**

Structured markdown report. Use exact questionnaire variable names as section headers (e.g. "Q3: Revenue growth rate"). For each variable, include:

- **Benchmark range:** [with source and date]
- **Base case recommendation:** [specific value]
- **Upside:** [specific value]
- **Downside:** [specific value]
- **One-line rationale:** [concise justification]

End the report with:

1. **Scenario Summary Table** — all variables, three scenarios in columns
2. **Source Log** — every source with name, URL or reference, and publication date

---
