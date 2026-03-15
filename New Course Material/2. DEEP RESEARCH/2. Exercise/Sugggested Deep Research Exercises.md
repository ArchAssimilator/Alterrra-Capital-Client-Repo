# Deep Research Exercises — Famous Brands Take-Private
## Alterra Capital AI Training Programme

---

## Validated Model Strengths Table

| Model | Best use | Watch-out | Notes vs. original |
|---|---|---|---|
| ChatGPT / OpenAI Deep Research | Broad outside-in research across the web and connected sources — now runs as a dedicated async agent (5–30 min) synthesising dozens of sources in one pass | Needs a well-scoped brief up front; verify primary numbers independently | **Updated:** OpenAI Deep Research is now a dedicated agentic research product (launched early 2025), not just standard web search. The async depth and multi-source synthesis capability are substantially stronger than implied. |
| Claude | Work from a defined document pack — strongest for close reading, cross-document reconciliation, and structured analytical frameworks applied to uploaded files | Less suited to broad live-web exploration (without search tools enabled) | **No material change.** Remains the best choice for rigorous document-pack analysis. Claude Projects reinforces this use case. |
| Gemini Deep Research | Large-scope synthesis across files **plus** live web — the 2M-token context window enables simultaneous ingestion of many large documents alongside real-time web search | Can become too broad without tight structure; output can be verbose | **Updated:** The 2M-token context window is a genuine differentiator — Gemini can hold all five years of Famous Brands annual reports in a single context, a capability that should be exploited explicitly in prompts. |
| Grok / DeepSearch | Real-time news, market pulse and X-linked narrative tracking | Verify investment-critical claims from primary sources | **No material change.** Best used for current-sentiment and media-narrative exercises, not included in this set given the document-driven focus of this training module. |

---

### OpenAI Deep Research

---

**Exercise 1 — South African QSR & Casual Dining Competitive Landscape** ⭐ `Recommended`

- **Research topic:** Map the structure, key players, market share dynamics and competitive intensity of the South African quick-service and casual dining sector, framed around Famous Brands' position
- **Why this tool:** OpenAI Deep Research can synthesise wide-ranging public sources (industry reports, news, company filings, analyst commentary) across the full competitive universe in a single agentic pass — a task that would take hours manually
- **Why this rank:** Competitive landscaping is the highest-value outside-in question for a PE deal team that has already modelled the target; it cannot be answered from Famous Brands' own documents alone

**Prompt:**

> You are a private equity analyst preparing for an investment committee meeting on a potential take-private of Famous Brands Limited (JSE: FBR), the South African food-service franchisor. I need a structured competitive landscape report on the South African quick-service restaurant (QSR) and casual dining sector.
>
> Please research and synthesise the following:
>
> 1. **Sector overview** — Current size (revenue, outlet count), growth rate, and structural trends in the SA restaurant and food-service sector (2022–2025). Include any credible market sizing from Euromonitor, Stats SA, industry associations, or analyst research.
>
> 2. **Competitive map** — Identify all material competitors to Famous Brands across its key segments:
>    - QSR: Steers, Wimpy, Debonairs (owned by Famous Brands), versus KFC/Yum! Brands, McDonald's, Burger King SA, Nando's, Chicken Licken, Spur Corporation, RocoMamas
>    - Casual dining and signature: Mugg & Bean, Tashas, Vida e Caffè, Doppio Zero, etc.
>    - Delivery-first and dark kitchen operators
>
> 3. **Market share and competitive dynamics** — Where Famous Brands leads, trails, or faces structural threat. Note any recent shifts in outlet counts, franchisee economics, or brand performance for key competitors.
>
> 4. **Structural headwinds and tailwinds** — Consumer spending pressures, loadshedding impact on restaurants, delivery channel growth, health and dietary trends, minimum wage dynamics, and any regulatory changes affecting the sector.
>
> 5. **PE and strategic investor activity** — Any recent M&A, take-private or minority investment activity in SA food-service businesses since 2020.
>
> Format the output as: (a) Executive Summary (one page), (b) Sector Structure diagram described in words, (c) Competitor profiles (one paragraph each), (d) Competitive positioning heat map for Famous Brands (table format), (e) Key risks and opportunities for a PE buyer.

**Expected outputs:**
- SA food-service market size and growth rate with source references
- Structured competitor profiles for 8–12 named players
- A positioning matrix comparing Famous Brands against peers on key dimensions (scale, brand strength, vertical integration, digital maturity, franchisee economics)
- List of structural headwinds and tailwinds relevant to a PE investment thesis
- Summary of recent M&A/PE activity in the sector

---

**Exercise 2 — Global PE Take-Private Precedent Transactions in Food-Service Franchising** ⭐ `Alternative`

- **Research topic:** Identify and analyse comparable PE take-private and sponsor-led acquisitions of listed food-service franchise businesses globally, with a focus on deal structure, valuation multiples, and value-creation strategies
- **Why this tool:** OpenAI Deep Research can synthesise deal announcements, press releases, analyst reports and news across global markets simultaneously, covering a breadth of transaction sources that document-only tools cannot access
- **Why this rank:** Highly relevant but secondary to competitive landscape — precedents inform pricing and structuring rather than the investment thesis itself

**Prompt:**

> You are an M&A advisor preparing transaction comparables for a PE client considering a take-private of Famous Brands Limited (JSE: FBR), a South African food-service franchisor with ~R8.3 billion in revenue and ~R914 million in operating profit (FY2025). The business operates 2,979 restaurants across 16 brands in 20 countries, primarily in South Africa.
>
> Please research and compile a set of comparable PE-led take-private and control acquisitions of listed or previously listed food-service and restaurant franchise businesses. Focus on transactions from 2015 to 2025. Include both global comparables (for multiple benchmarking) and any African or emerging-market precedents (for structural insight).
>
> For each transaction, provide:
> 1. Target name, domicile, and business description
> 2. Acquirer name and type (PE, strategic, consortium)
> 3. Transaction date and deal value (USD or local currency)
> 4. EV/EBITDA and EV/Revenue multiples (at announcement)
> 5. Deal structure (full take-private, partial, leveraged buyout, etc.)
> 6. Key stated rationale and value-creation thesis
> 7. Post-acquisition outcome (where known): exit, IPO re-listing, operational transformation
>
> Also include:
> - A section on **typical PE value-creation playbooks** in franchise food-service take-privates (e.g. refranchising, supply chain monetisation, digital acceleration, international expansion, add-ons)
> - Commentary on **typical leverage levels** used in these transactions (Net Debt / EBITDA at entry)
> - Any notes on **JSE or South African regulatory considerations** specific to taking a listed company private
>
> Present the output as a structured comparables table followed by analytical commentary.

**Expected outputs:**
- Comparables table with 8–15 transactions (target, buyer, date, EV, multiples, structure)
- Summary of value-creation playbooks observed across the comparable set
- Leverage and returns benchmarks
- South Africa-specific take-private regulatory notes (Companies Act, JSE requirements, minority squeeze-out thresholds)

---

**Exercise 3 — Famous Brands Management Team and Board External Profile Research** ⭐ `Stretch`

- **Research topic:** Build an external profile of Famous Brands' key management team and board members — drawing on public sources — to assess management quality, track record, and alignment risks relevant to a PE take-private
- **Why this tool:** OpenAI Deep Research can aggregate biographical, media, corporate governance and directorship data across the open web in a single research pass
- **Why this rank:** Useful for early-stage people diligence but lower priority than competitive and transaction context; management assessment ultimately requires direct interaction

**Prompt:**

> You are a private equity analyst conducting preliminary management diligence on Famous Brands Limited (JSE: FBR), a South African food-service franchisor being considered for a take-private transaction.
>
> Please research and compile external profiles on the following individuals using public sources (company website, JSE regulatory announcements, LinkedIn, news articles, interviews, conference appearances, analyst calls, other board positions):
>
> 1. **Group CEO** — Darren Hele
> 2. **Group Finance Director / CFO** — (identify from public sources)
> 3. **Chairman of the Board** — (identify from public sources)
> 4. **Other executive directors** — (identify from public sources)
> 5. **Lead Independent Non-Executive Director** — (identify from public sources)
>
> For each individual, provide:
> - Full name, title, and tenure at Famous Brands
> - Career history (prior roles, industries, employers)
> - Educational background
> - Other current board or advisory positions
> - Any notable public statements about strategy, growth or capital allocation
> - Any relevant media coverage (positive or negative)
> - Directorship overlap with PE firms, institutional investors or potential competing bidders
>
> Close with a section on:
> - **Management rollover risk**: indicators of whether leadership would stay or leave in a PE transaction
> - **Incentive structure**: any public information on management shareholding, share schemes or remuneration structures
> - **Board independence**: assessment of how independent the board appears based on disclosed connections and tenures

**Expected outputs:**
- Individual profiles for 5–7 executives and directors
- Summary table of board composition (independence, tenure, relevant expertise)
- Management rollover risk assessment
- Incentive and ownership structure summary
- Red flags or areas requiring deeper confidential diligence

---

### Gemini Deep Research

---

**Exercise 1 — Five-Year Integrated Performance Narrative Across All Annual Reports** ⭐ `Recommended`

- **Research topic:** Construct a longitudinal performance narrative for Famous Brands from FY2021 to FY2025 by synthesising all five annual reports simultaneously, identifying trend lines, inflection points, and strategic evolution
- **Why this tool:** Gemini's 2M-token context window allows all five annual reports to be ingested in a single session alongside web search, enabling genuine cross-year synthesis that would exceed the context limits of most other models
- **Why this rank:** This is the exercise that most uniquely exploits Gemini's structural advantage — multi-document, multi-year synthesis at scale — and produces the highest-value longitudinal view for a deal team

**Prompt:**

> You are a private equity analyst building a five-year performance narrative for Famous Brands Limited (JSE: FBR), a South African food-service franchisor. I am attaching all five annual group financial statements and integrated reports for FY2021, FY2022, FY2023, FY2024, and FY2025.
>
> [Attach: FY2025, FY2024, FY2023, FY2022, FY2021 annual reports]
>
> Please synthesise across all five documents to produce the following:
>
> **Section 1 — Financial Performance Trends (FY2021–FY2025)**
> Build a structured five-year summary table covering: Revenue, Operating Profit, EBITDA (estimate if not disclosed), HEPS, Dividends per share, Net Debt/EBITDA, Cash generated from operations, Capex, Restaurant count (SA and total), and any disclosed same-store sales data.
>
> **Section 2 — Strategic Evolution**
> Identify the 3–5 most significant strategic decisions or inflection points over the period. For each: describe the initiative, when it was signalled and executed, what it cost or invested, and what the measurable outcome was by FY2025.
>
> **Section 3 — Brand Portfolio Changes**
> Track which brands were added, exited, converted, or repositioned across the five years. Note any meaningful changes in brand-level outlet counts where disclosed.
>
> **Section 4 — Geographic Performance**
> Summarise how SA, SADC, AME and UK each evolved across the five years. Identify which geography improved, which deteriorated, and what management attributed the changes to.
>
> **Section 5 — Management Commentary Consistency**
> Cross-reference key management claims across five CEO letters. Identify where stated priorities were executed versus deferred, and flag any recurring themes that have not resolved.
>
> **Section 6 — Value Creation Assessment**
> Using the five-year data, assess: (a) which value levers have already been executed, (b) which remain available for a new owner, and (c) what a PE owner would face as a baseline versus a tailwind.
>
> Where the documents do not contain data, note the gap explicitly rather than estimating.

**Expected outputs:**
- Five-year financial summary table (all key metrics)
- Strategic evolution narrative (3–5 inflection points with evidence and outcome)
- Brand portfolio tracker across five years
- Geographic performance summary table
- Management commentary consistency analysis
- Value-creation lever map (executed vs. available)

---

**Exercise 2 — ESG, Regulatory and Governance Risk Synthesis** ⭐ `Alternative`

- **Research topic:** Synthesise Famous Brands' ESG commitments, governance structure, and regulatory obligations across the five-year document pack, cross-referenced against current SA regulatory trends, to assess ESG-related risks for a PE buyer
- **Why this tool:** Gemini can cross-reference the large multi-year document pack with live web sources on regulatory changes, enabling a synthesis that neither pure document analysis (Claude) nor pure web research (OpenAI) would match as efficiently
- **Why this rank:** ESG and governance diligence is increasingly material in PE transactions but is lower priority than the financial and competitive exercises; the exercise also depends on web access making Gemini more appropriate than Claude

**Prompt:**

> You are an ESG and governance analyst conducting due diligence on Famous Brands Limited (JSE: FBR), a South African food-service franchisor being considered for a PE take-private.
>
> I am attaching the FY2025 and FY2024 integrated annual reports, which contain detailed ESG disclosures.
>
> [Attach: FY2025 Integrated Annual Report, FY2024 Annual Financial Statements]
>
> Using the attached documents and web research, please produce:
>
> **Section 1 — ESG Scorecard**
> Extract all quantitative ESG metrics disclosed in the documents. Build a comparison table: FY2024 vs FY2025 for environmental (energy, water, waste, carbon), social (employment, B-BBEE, CSI, YES Programme, franchisee demographics), and governance (board composition, independence, remuneration structure, audit findings).
>
> **Section 2 — B-BBEE and Transformation Risk**
> Assess Famous Brands' B-BBEE Level 1 status in detail: which elements drive the score, how sustainable is it, and what are the risks of B-BBEE status deteriorating under foreign or PE ownership? Research current SA B-BBEE regulatory direction and any proposed changes to the Codes of Good Practice.
>
> **Section 3 — Regulatory Landscape**
> Using web research, identify the most material regulatory risks to Famous Brands over a 5-year PE hold period. Consider: National Minimum Wage escalations, food safety regulation, franchise legislation (Consumer Protection Act amendments if any), sugar tax or nutritional labelling requirements, JSE delisting process requirements, and Competition Commission considerations for a take-private.
>
> **Section 4 — Governance Assessment**
> Assess the quality of Famous Brands' corporate governance against King IV principles as disclosed. Identify any audit qualifications, related-party transactions, or governance concerns.
>
> **Section 5 — ESG Risk Summary for PE**
> Summarise the top five ESG and governance risks a PE buyer should price into the deal, and any ESG upside (e.g. sustainability credentials supporting franchise partner retention, consumer brand reputation).

**Expected outputs:**
- Quantitative ESG scorecard table (FY2024 vs FY2025)
- B-BBEE status deep-dive with sustainability risk assessment
- Regulatory risk register (top 8–10 items with probability and impact)
- King IV governance compliance summary
- ESG risk and opportunity summary for the deal team

---

**Exercise 3 — UK Operations: Turnaround Potential or Exit Candidate?** ⭐ `Stretch`

- **Research topic:** Assess the Famous Brands UK business (Wimpy UK and Steers UK) using multi-year financial disclosures combined with web research on the UK casual dining market, to determine whether the UK is a turnaround opportunity or a drag to be exited
- **Why this tool:** Gemini can combine the multi-year financial statements (which require large-context document reading) with live web research on the UK foodservice market — a task requiring both document and web synthesis simultaneously
- **Why this rank:** The UK is a relatively small part of the Famous Brands portfolio but carries strategic optionality; this is a stretch exercise because the UK disclosure in the annual reports is limited, requiring more inference and web supplementation

**Prompt:**

> You are a strategy consultant advising a PE firm on the UK operations of Famous Brands Limited, a South African food-service franchisor. The UK business primarily operates the Wimpy brand and a small number of Steers outlets. The annual reports note that the UK is "under pressure" and performance has been below expectations.
>
> I am attaching the FY2023, FY2024 and FY2025 annual reports.
>
> [Attach: FY2025 Integrated Annual Report, FY2024 Annual Financial Statements, FY2023 Annual Financial Statements]
>
> Using the attached documents and web research, please produce:
>
> **Section 1 — UK Financial Performance Extraction**
> Extract all UK-specific financial disclosures across the three years. Include: revenue, operating profit/loss, outlet count, management commentary, and any impairments or restructuring charges related to the UK. Build a three-year trend table.
>
> **Section 2 — UK Foodservice Market Context**
> Using web research, describe the current state of the UK casual dining and QSR market (2023–2025). Identify key structural trends: cost pressures (labour, energy, rates), consumer demand, brand consolidation, delivery platform dynamics, and any recent material restaurant group failures or restructurings.
>
> **Section 3 — Wimpy UK Brand Assessment**
> Research the Wimpy brand in the UK specifically. What is its current positioning, outlet count, franchisee profile, and consumer perception? Is it growing, stable or declining? How does it compare to UK QSR peers?
>
> **Section 4 — Strategic Options Analysis**
> For each of the following options, assess feasibility, financial logic, and likely PE preference:
> (a) Turnaround and grow — invest in the UK and expand
> (b) Maintain and harvest — hold the UK as a stable cash contributor
> (c) Refranchise or sell — sell or refranchise the UK business to a local operator
> (d) Wind down — close or consolidate the UK footprint
>
> **Section 5 — Recommendation**
> Recommend the most defensible strategic posture for the UK under PE ownership, with supporting rationale.

**Expected outputs:**
- Three-year UK financial trend table (all available metrics)
- UK market context summary (key trends, competitive dynamics)
- Wimpy UK brand assessment
- Four strategic options with pros, cons and financial logic
- Strategic recommendation with rationale

---

### Claude

---

**Exercise 1 — Franchise Economics and Royalty Structure Deep-Dive** ⭐ `Recommended`

- **Research topic:** Reconstruct the economics of the Famous Brands franchise model using the five-year document pack — royalty rates, fee structures, supply chain margin capture, same-store sales trends, and franchisee financial health indicators — to determine the quality and durability of earnings for a PE buyer
- **Why this tool:** This exercise requires close, precise reading of financial statement notes, accounting policy disclosures and management commentary across a defined document set — exactly what Claude is optimised for
- **Why this rank:** Understanding what drives the P&L at the franchise level is the single most important analytical question for a PE buyer; the answer is buried in the documents and requires structured extraction and reconciliation

**Prompt:**

> You are a private equity analyst performing due diligence on Famous Brands Limited (JSE: FBR), a South African food-service franchisor. I am providing you with the following documents:
> - FY2025 Integrated Annual Report
> - FY2025 Group Financial Statements (consolidated)
> - FY2024 Group Financial Statements
> - FY2023 Group Financial Statements
>
> Your task is to reconstruct the economics of the Famous Brands franchise model from these documents. Work carefully through the notes to the financial statements, segment reports, and management commentary.
>
> **Section 1 — Revenue Model Architecture**
> Identify and explain every revenue stream within the business: franchise royalties (rate and base), supply chain sales to franchisees, logistics income, company-owned restaurant revenue, retail product revenue, and any other material income lines. For each stream, note the revenue recognised in FY2025 (absolute and % of total) and how it has evolved since FY2023.
>
> **Section 2 — Royalty Rate and Fee Structure**
> Extract any disclosed royalty rates, franchise fee structures, and contractual terms. Note any differences by brand, geography or franchise tier. If specific rates are not disclosed, infer from the relationship between system-wide sales (if disclosed) and royalty income.
>
> **Section 3 — Supply Chain Margin Analysis**
> From the segment reports and notes, extract Manufacturing and Logistics segment revenue and profitability. Calculate implied margins. Assess the strategic value of the supply chain to the franchise system: is it a profit centre, a cost centre subsidising franchisees, or both?
>
> **Section 4 — Franchisee Health Indicators**
> Extract all available indicators of franchisee financial health and system strength: average tenure (disclosed as 11 years), % of new sites to existing franchisees (disclosed as 72%), churn data if available, any bad debt provisions or franchisee failures noted, and management commentary on franchisee economics.
>
> **Section 5 — Same-Store Sales and Volume Data**
> Extract any same-store sales (SSS) or comparable sales data disclosed. Note where it is absent and what management uses as a proxy.
>
> **Section 6 — Earnings Quality Assessment**
> Based on the above, assess: What proportion of Famous Brands' EBITDA is high-quality recurring royalty income versus lower-quality supply chain manufacturing and logistics income? What would the business be worth if valued only on its royalty stream?
>
> Flag any inconsistencies, gaps or areas where the document pack is silent, and note what additional information would be required in a full due diligence process.

**Expected outputs:**
- Revenue model breakdown table (all streams, FY2023–FY2025)
- Royalty rate and fee structure summary (with inference where not disclosed)
- Supply chain margin table and strategic assessment
- Franchisee health indicator summary
- SSS data extraction (or documented gap)
- Earnings quality split and implied royalty-only valuation framework

---

**Exercise 2 — Divisional P&L Reconstruction and Operating Leverage Analysis** ⭐ `Alternative`

- **Research topic:** Reconstruct divisional profitability and the corporate cost structure from the five-year document pack to identify where operating leverage exists and which segments are margin dilutive — informing the PE value-creation thesis
- **Why this tool:** Reconstructing divisional P&Ls from notes and segment reports requires close, iterative reading of financial statements where all relevant data is already in the document pack — Claude's precision document analysis is the right tool
- **Why this rank:** Important for modelling but secondary to franchise economics; the segment disclosures are relatively limited and the analytical output requires more estimation than the royalty exercise

**Prompt:**

> You are a financial analyst performing due diligence on Famous Brands Limited (JSE: FBR). I am providing the FY2025 and FY2024 consolidated financial statements, including the segment reports, notes to the financial statements, and the directors' report.
>
> [Attach: FY2025 Group Financial Statements, FY2024 Group Financial Statements]
>
> Your task is to reconstruct divisional profitability from the disclosed segment information and notes.
>
> **Section 1 — Segment Report Extraction**
> Extract the full segment report for FY2025 and FY2024. Present revenue, operating profit, assets, and liabilities by segment for both years. Calculate segment operating margins and note year-on-year changes.
>
> **Section 2 — Corporate Cost Structure**
> Identify and quantify corporate/head office costs not allocated to segments. Assess what these costs represent and whether they are reasonable relative to group revenue. Flag any line items that appear unusual or one-off.
>
> **Section 3 — Operating Leverage Analysis**
> Using the five-year revenue and operating profit data (extract from the directors' report where available), calculate the relationship between revenue growth and operating profit growth. Identify the implied operating leverage in the model and at what revenue growth rate margins expand or contract.
>
> **Section 4 — Capex and Reinvestment Requirements**
> Extract all capex disclosures (maintenance versus growth capex where split is available). Calculate capex as a percentage of revenue and EBITDA. Assess the reinvestment requirement of the business and its free cash flow conversion.
>
> **Section 5 — Working Capital and Cash Conversion**
> From the balance sheet and cash flow statement, analyse working capital dynamics: receivables, payables, inventory. Calculate cash conversion cycle and note any trends. Assess whether the business is structurally cash generative before or after growth capex.
>
> **Section 6 — Value-Creation Lever Map**
> Based on the above, produce a prioritised list of financial value-creation levers for a PE owner, with quantified estimates of potential impact where the data supports it. Distinguish between levers that improve earnings (EBITDA growth) and those that improve cash conversion (working capital, capex discipline).

**Expected outputs:**
- Segment P&L table (FY2024 and FY2025 with margin analysis)
- Corporate cost structure breakdown
- Operating leverage calculation and revenue sensitivity analysis
- Capex analysis table (FY2021–FY2025 where available)
- Working capital and cash conversion analysis
- Prioritised value-creation lever map with quantified estimates

---

**Exercise 3 — Supply Chain Vertical Integration: Strategic Asset or PE Complexity?** ⭐ `Stretch`

- **Research topic:** Assess the strategic value and financial contribution of Famous Brands' vertically integrated manufacturing and logistics business using the document pack, to determine whether the supply chain is a moat that should be retained or a complexity that PE should simplify
- **Why this tool:** This requires structured extraction of manufacturing and logistics disclosures, capex histories, and management commentary across multiple years — all within the document pack, making Claude the right tool
- **Why this rank:** A stretch exercise because supply chain disclosure is relatively limited in the public documents, requiring more inferential analysis; the strategic question is highly relevant but the evidence base is thinner than for the royalty or P&L exercises

**Prompt:**

> You are a strategy and operations analyst advising a PE firm on the supply chain of Famous Brands Limited (JSE: FBR), a vertically integrated South African food-service franchisor. The company operates its own manufacturing facilities (producing sauces, burger patties, coffee and other branded products) and logistics infrastructure serving its franchise network.
>
> I am providing the FY2025 Integrated Annual Report, FY2025 Group Financial Statements, FY2024 Group Financial Statements, and FY2023 Group Financial Statements.
>
> [Attach: FY2025 Integrated Annual Report, FY2025 Group Financial Statements, FY2024 Group Financial Statements, FY2023 Group Financial Statements]
>
> **Section 1 — Supply Chain Structure and Scope**
> From the documents, map the full scope of the Famous Brands supply chain: which manufacturing facilities are operated, what products are produced (vs. sourced externally), how logistics is structured, and how the supply chain connects to the franchise network. Note the R55.3 million supply chain investment disclosed in FY2025 and what it was directed toward.
>
> **Section 2 — Financial Contribution**
> Extract all available financial data for the Manufacturing and Logistics segments. Calculate revenue, operating profit, and margins for FY2023–FY2025. Assess whether the supply chain is accretive or dilutive to group margins.
>
> **Section 3 — Strategic Value Assessment**
> Using management commentary and financial data, assess the five claimed benefits of vertical integration: (a) price certainty for franchisees, (b) product innovation capability, (c) margin management, (d) service consistency, and (e) supply chain resilience. For each benefit, rate the evidence as Strong / Moderate / Weak based on what the documents disclose.
>
> **Section 4 — Comparator Framework**
> Describe how the Famous Brands model compares to alternative franchise models (asset-light franchisors that outsource supply chain entirely, vs. fully integrated operators). What are the margin, capital and risk trade-offs? Reference any comparative data disclosed in the documents or management commentary.
>
> **Section 5 — PE Strategic Options**
> For a PE owner, assess three options:
> (a) Retain and invest — treat the supply chain as a core moat and accelerate investment
> (b) Monetise selectively — sell non-core manufacturing assets while retaining strategic logistics
> (c) Separate and optimise — carve out the supply chain into a standalone entity (co-packer model)
>
> For each option, note: strategic logic, financial impact (where estimable from the documents), execution risk, and franchisee relationship risk.
>
> **Section 6 — Recommendation**
> Based on the document evidence, recommend the most defensible supply chain strategy for a PE owner, with the key assumptions that would change the recommendation.

**Expected outputs:**
- Supply chain structure map (facilities, products, logistics network)
- Manufacturing and Logistics financial table (FY2023–FY2025)
- Strategic value assessment scorecard (5 claimed benefits, rated by evidence strength)
- Comparator framework summary
- Three strategic options with pros, cons, financial logic and franchisee impact
- Recommended strategy with key assumptions

---

*Document prepared for the Alterra Capital AI Training Programme — Famous Brands Take-Private Case Study.*
*March 2026*
