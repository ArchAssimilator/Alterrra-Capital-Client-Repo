---

### OpenAI Deep Research Prompt

> **Before you submit this prompt:**
> Upload `06_Data_Collection_Questionnaire.md` as a document attachment. OpenAI Deep Research will use it as a structured brief alongside its live web research. Do not paste it inline — let the model read the file directly.

---

**R — Role**

You are a buy-side equity analyst at a private equity firm conducting investment due diligence on Famous Brands Limited (JSE: FBR), a leading South African quick service restaurant (QSR) and casual dining franchise group. You are preparing an external research note to support a take-private evaluation. Your output will be used directly by the deal team to populate and stress-test a five-year financial model.

---

**C — Context**

Alterra Capital is evaluating a take-private of Famous Brands Limited — a JSE-listed company operating approximately 2,900 restaurant outlets across brands including Steers, Wimpy, Debonairs Pizza, Mugg & Bean, and Fishaways. The group operates primarily in South Africa, with additional presence across sub-Saharan Africa and the United Kingdom.

The deal team has built a five-year income statement model covering FY 2026 to FY 2030, anchored to six years of audited historical actuals (FY 2020–FY 2025). The attached questionnaire sets out all key forward-looking assumptions that drive the model — revenue growth, cost ratios, valuation inputs, and scenario parameters.

Your job is to source the external market intelligence needed to validate or challenge each of those assumptions before the investment committee presentation.

---

**T — Task**

Produce a structured external research brief that provides benchmarks, comparables, and directional guidance for each of the key researchable assumptions in the attached questionnaire. The output must map directly to the questionnaire variable names and give the deal team a basis for populating the model with defensible, market-informed inputs across base, upside, and downside scenarios.

---

**I — Instructions**

Work through the attached questionnaire systematically. Focus on the variables marked "Derived" or "Analyst Input" — these are the ones that benefit most from external research. Skip structural parameters (e.g. number of projection years) and hard accounting items (e.g. OCI tax effects).

**Step 1 — Macro and sector backdrop**
Research the South African consumer spending and QSR/franchise sector outlook for 2025–2030. Include: GDP growth consensus, household disposable income trends, load-shedding resolution impact on foot traffic, and food inflation forecasts. Keep this section to one concise page.

**Step 2 — Revenue growth (Q3: 3.2% base case)**
Find comparable annual revenue growth rates for listed QSR and franchise peers: Spur Corporation (JSE: SUR), Restaurant Brands International, Yum! Brands, Nando's group where disclosed. Also research SA same-store sales trends and QSR category growth rates from industry sources (Euromonitor, StatsSA, Mastercard SpendingPulse, or similar). Propose a base, upside, and downside growth rate for FY 2026–FY 2030.

**Step 3 — Cost of sales (Q4: 57.2% base case)**
Research SA food commodity price trends (poultry, beef, wheat, cooking oil) and food producer price inflation forecasts. Find gross margin benchmarks for comparable listed QSR and franchise groups. Assess whether Famous Brands' 57.2% cost ratio is in line with, above, or below peers.

**Step 4 — Operating expense ratios (Q7–Q9)**
For each of administration expenses (2.4%), marketing expenses (8.7%), and operations/logistics expenses (21.4%):
- Find SA and global QSR peer benchmarks as a percentage of revenue
- Identify any post-acquisition efficiency levers commonly applied in PE-backed franchise roll-ups (e.g. shared services rationalisation, marketing mix optimisation, supply chain consolidation)
- Propose whether these ratios are likely to expand or compress over the projection period

**Step 5 — Effective tax rate (Q15: 27.5%)**
Confirm South Africa's current corporate income tax rate (statutory rate: 27%). Research any known changes to the SA corporate tax regime planned for 2025–2030. Note the difference between the statutory rate and Famous Brands' effective rate and whether the gap is likely to persist.

**Step 6 — Terminal growth rate (Q21: Analyst input required)**
Source South Africa's long-term nominal GDP growth consensus from the IMF, World Bank, National Treasury, and major South African investment banks. Add a sector growth premium or discount for the QSR/franchise category. Propose a defensible terminal growth rate range.

**Step 7 — WACC / Discount rate (Q22: Analyst input required)**
Build a bottom-up WACC estimate:
- Risk-free rate: current South African 10-year government bond yield (R2030 or R2035 series)
- Equity risk premium: Damodaran SA ERP estimate or local equivalent
- Beta: calculate or source beta for SA food franchise/QSR sector (use Spur Corporation and regional peers)
- Size/illiquidity premium: appropriate for a take-private of a mid-cap JSE company
- Cost of debt: current SA credit spreads for investment-grade food and beverage issuers
- Capital structure: use Famous Brands' current leverage as a starting point; note that post-acquisition leverage will differ

Present your WACC derivation step by step, then give a range (low / mid / high).

**Step 8 — Exit EV/EBITDA multiple (Q23: Analyst input required)**
Research:
- Current public market EV/EBITDA multiples for SA-listed food franchise and QSR companies (Spur Corporation, Grand Parade Investments, Famous Brands' own historical trading multiple)
- Recent M&A transactions in SA and sub-Saharan African consumer, restaurant, and franchise sectors (2020–2025)
- Global QSR PE take-private comparable transactions
- Propose a base case exit multiple and a range, with rationale for compression or expansion vs entry multiple

**Source requirements:**
Prioritise live web sources, analyst reports, and sector databases. Where exact South African data is unavailable, use emerging-market or global proxies and flag the limitation clearly. Cite every source with publication date.

---

**O — Output**

Deliver a structured research note in markdown. Use the following format for each variable:

---

**Q[number]: [Variable name]**
- **External benchmark / range:** [Specific figures with sources and dates]
- **Peer comparison:** [Named peers and their metrics]
- **Rationale:** [Why this benchmark applies to Famous Brands]
- **Recommended values:**
  - Base case: [value]
  - Upside: [value]
  - Downside: [value]

---

Cover all of the following variables in this order:
- Q3: Revenue growth rate (YoY)
- Q4: Cost of sales (% of revenue)
- Q7: Administration expenses (% of revenue)
- Q8: Marketing expenses (% of revenue)
- Q9: Operations expenses (% of revenue)
- Q15: Effective tax rate
- Q21: Terminal growth rate
- Q22: WACC / Discount rate
- Q23: Exit EV/EBITDA multiple

Close with a **Scenario Sensitivity Summary Table** in this format:

| Variable | Downside | Base Case | Upside | Primary Source |
|---|---|---|---|---|
| Revenue growth rate (YoY) | | 3.2% | | |
| Cost of sales (% of revenue) | | 57.2% | | |
| Administration expenses (% of revenue) | | 2.4% | | |
| Marketing expenses (% of revenue) | | 8.7% | | |
| Operations expenses (% of revenue) | | 21.4% | | |
| Effective tax rate | | 27.5% | | |
| Terminal growth rate | | TBD | | |
| WACC / Discount rate | | TBD | | |
| Exit EV/EBITDA multiple | | TBD | | |

End with a **Source Log**: list every source used, with name, URL or database reference, and publication date.

---
