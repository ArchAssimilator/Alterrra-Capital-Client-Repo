---

### Grok / DeepSearch Deep Research Prompt

> **Before you submit this prompt:**
> Do **not** upload a file. Grok does not have a reliable file-upload workflow. Instead, the model variables are pasted as plain text at the end of this prompt — scroll to the **[QUESTIONNAIRE VARIABLES]** section and paste them directly into your Grok message along with this prompt. Inline text is more dependable than file attachments in Grok / DeepSearch.

---

**R — Role**

You are a real-time market intelligence analyst specialising in South African equity markets and the QSR / casual dining sector. You are the deal team's live intelligence feed — your job is not to synthesise historical data but to surface what the market, media, analysts, and X/social platforms are saying RIGHT NOW about the key assumptions in our financial model. You are sceptical, precise, and always flag when a claim needs primary source verification.

---

**C — Context**

A private equity firm is evaluating a take-private of Famous Brands Limited (JSE: FBR) — a JSE-listed quick service restaurant and franchise group operating approximately 2,900 outlets across South Africa and sub-Saharan Africa. Brands include Steers, Wimpy, Debonairs Pizza, Mugg & Bean, and Fishaways.

The deal team has built a five-year financial model (FY 2026–FY 2030). The base-case assumptions are listed in the **[QUESTIONNAIRE VARIABLES]** section below. The model is largely populated — what we need now is a current-events scan to confirm whether those assumptions are still valid, or whether recent news flow, earnings commentary, or macro data should prompt a revision.

Time sensitivity is critical. We need the most recent signals, not a review of what was true 12 months ago.

---

**T — Task**

Conduct a real-time news and sentiment scan across all available sources — including X/Twitter, news wires, analyst notes, earnings releases, SARB communications, and government publications — to surface current intelligence relevant to each model assumption. For each finding, clearly state whether it supports, challenges, or is neutral to our base case. Flag any claim that is investment-critical and would require primary source verification before being used in the model.

---

**I — Instructions**

**1. Prioritise recency**
For each variable, search for content published in the last 90 days. If nothing relevant is available from the last 90 days, extend to 180 days and flag the age of the finding. Do not surface findings older than 18 months as current intelligence.

**2. Cover these specific search topics:**

- **Famous Brands (FBR) company-specific:**
  - Most recent earnings release, trading update, or SENS announcement
  - Most recent analyst price target changes or recommendation changes
  - Any management commentary on revenue outlook, cost pressures, or strategic direction
  - Any news or market commentary relating to a potential take-private or corporate action

- **SA QSR and consumer sector:**
  - Recent consumer spending data (StatsSA retail trade, Mastercard SpendingPulse, BankservAfrica consumer confidence)
  - QSR or restaurant sector trading commentary (competitor results: Spur Corporation, Taste Holdings, Nando's where available)
  - SA food inflation — most recent CPI food component print from SARB / StatsSA
  - Load-shedding status and its documented impact on restaurant foot traffic (if any recent updates)

- **SA macroeconomic signals:**
  - SARB Monetary Policy Committee most recent decision and forward guidance on interest rates
  - SA 10-year government bond yield (current level — relevant to WACC)
  - SA rand exchange rate trend (relevant to FX translation and import costs)
  - National Treasury medium-term budget and any announced changes to corporate tax rates

- **M&A and valuation signals:**
  - Any recent M&A transactions in SA consumer, food service, or franchise sectors (announced or closed in the last 12 months)
  - Current EV/EBITDA trading multiples for SA consumer/QSR listed peers
  - Any PE take-private activity in JSE-listed consumer stocks

- **X/Twitter sentiment scan:**
  - Search for mentions of Famous Brands, Steers, Wimpy, Debonairs, Mugg & Bean, and Fishaways in the last 30 days
  - Identify dominant consumer sentiment themes: positive (value, quality, promotions) or negative (service, price increases, closures)
  - Note any trending topics that could signal a same-store sales inflection

**3. For every finding, state:**
- The specific claim or data point
- The source name and publication date
- Whether it **supports**, **challenges**, or is **neutral** to the base case assumption

**4. Verification flag:**
For any finding that would change a model assumption by more than 0.5 percentage points (e.g. a new SARB rate cut that affects WACC, or a revenue warning that challenges the 3.2% growth assumption), add:
> ⚠️ **VERIFY BEFORE USE** — [Name the primary source that should confirm this, e.g. FBR SENS filing, StatsSA CPI release, SARB MPC statement]

---

**O — Output**

Structured markdown report. One section per model variable (use the exact variable names from the list below). Within each section:

- **Latest signal:** [Most current relevant finding — one sentence]
- **Source:** [Name of source, publication date]
- **Model implication:** [Supports / Challenges / Neutral to base case — quantify if possible, e.g. "suggests revenue growth closer to 5% vs base case 3.2%"]
- **Verification needed?** [Yes / No — if Yes, specify the primary source to check]

After covering all variables, close with:

**Top 5 Risks / Opportunities**
A ranked list of the five most material findings from your scan, ordered by potential impact on the model's projected EBITDA or valuation. For each, state: the finding, its directional impact (positive / negative), and the model variable most affected.

---

**[QUESTIONNAIRE VARIABLES]**

Paste the following directly into your Grok message alongside this prompt:

  # Financial Model -- Data Collection Questionnaire

  ## Introduction

  This questionnaire gathers the key assumptions needed to run the financial model for **Famous Brands Limited**. Your inputs will drive scenario analysis for the investment committee as part of the take-private evaluation.

  The model projects five years of income statements (FY 2026 to FY 2030) from a base of six years of historical actuals (FY 2020 to FY 2025). Each question below corresponds to a single editable variable on the Assumptions sheet of the model. Your answers will be entered directly into the model to generate base case, upside and downside projections.

  **Instructions:** Answer each question with your best forward-looking estimate. If you are unsure, leave the default (base case) value in place -- it will be used automatically. All monetary values are in R000 (South African Rand, thousands) unless stated otherwise.

  **Source Type Guide:** Each question indicates where the current default value comes from:

  - **From Source** -- directly taken from the audited financial statements. The default is reliable; adjust only if you have updated information.
  - **Derived** -- calculated from reported data (e.g. a ratio or growth rate implied by two reported figures). The default is a reasonable estimate; review and adjust as needed.
  - **Analyst Input** -- not available in the source financial statements. Your input is required.
  - **Default** -- a standard modelling placeholder. Review and confirm or adjust.

  ---

  ## Section 1: Revenue Drivers

  *This section covers the top-line growth assumption that drives all projected revenue.*

  ### Q3. What annual revenue growth rate do you expect for Famous Brands over the projection period?

  - **Model variable:** `Assumptions!B10 -- Revenue growth rate (YoY)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 3.2%)
  - **Acceptable range:** -10.0% to 20.0%
  - **Default (base case):** 3.2% (FY 2025 year-on-year growth)
  - **Why this matters:** Revenue is the single largest driver of the model. A 1 percentage point change compounds across all five projection years and flows through to gross profit, operating profit and net income.
  - **Your answer:** ___

  ---

  ## Section 2: Cost Drivers

  *These assumptions control the major cost and income lines below revenue. Each is expressed as a percentage of revenue, so the projected rand amount scales automatically with the revenue assumption above.*

  ### Q4. What percentage of revenue should cost of sales represent?

  - **Model variable:** `Assumptions!B13 -- Cost of sales (% of revenue)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 57.2%)
  - **Acceptable range:** 40.0% to 70.0%
  - **Default (base case):** 57.2% (FY 2025 actual)
  - **Why this matters:** Cost of sales is the largest single expense. A 1 percentage point change shifts gross profit by approximately R85m per year at current revenue levels.
  - **Your answer:** ___

  ### Q5. What percentage of revenue should other income represent?

  - **Model variable:** `Assumptions!B14 -- Other income (% of revenue)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 0.7%)
  - **Acceptable range:** 0.0% to 3.0%
  - **Default (base case):** 0.7% (FY 2025 actual)
  - **Why this matters:** Other income (e.g. rental income, sundry recoveries) adds to operating profit. This line has been volatile historically, ranging from 0.3% to 1.7% of revenue.
  - **Your answer:** ___

  ### Q6. What percentage of revenue should expected credit losses represent?

  - **Model variable:** `Assumptions!B15 -- Expected credit loss (% of revenue)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 0.04%)
  - **Acceptable range:** 0.0% to 2.0%
  - **Default (base case):** 0.04% (FY 2025 actual)
  - **Why this matters:** Expected credit losses reflect franchise debtor risk. This item has occasionally been a credit (net recovery), but the model applies it as a cost for conservatism.
  - **Your answer:** ___

  ### Q7. What percentage of revenue should administration expenses represent?

  - **Model variable:** `Assumptions!B16 -- Administration expenses (% of revenue)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 2.4%)
  - **Acceptable range:** 1.0% to 5.0%
  - **Default (base case):** 2.4% (FY 2025 actual)
  - **Why this matters:** Administration expenses cover head office and corporate overheads. This ratio has been relatively stable at 2.2% to 2.6% since FY 2022.
  - **Your answer:** ___

  ### Q8. What percentage of revenue should marketing expenses represent?

  - **Model variable:** `Assumptions!B17 -- Marketing expenses (% of revenue)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 8.7%)
  - **Acceptable range:** 5.0% to 15.0%
  - **Default (base case):** 8.7% (FY 2025 actual)
  - **Why this matters:** Marketing expenses support brand awareness across Famous Brands' portfolio. This is a significant cost line and a potential area for post-acquisition efficiency gains.
  - **Your answer:** ___

  ### Q9. What percentage of revenue should operations expenses represent?

  - **Model variable:** `Assumptions!B18 -- Operations expenses (% of revenue)`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 21.4%)
  - **Acceptable range:** 15.0% to 30.0%
  - **Default (base case):** 21.4% (FY 2025 actual)
  - **Why this matters:** Operations expenses (supply chain, logistics, manufacturing) are the second-largest cost line after cost of sales. This ratio has ranged from 21.4% to 23.4% since disaggregation began in FY 2022.
  - **Your answer:** ___

  ---

  ## Section 3: Impairment

  *Impairment charges are inherently unpredictable. The base case holds these at FY 2025 levels. You may wish to zero them for a "clean" operating projection or adjust based on known exposures.*

  ### Q10. What annual impairment charge (if any) do you expect on intangible assets?

  - **Model variable:** `Assumptions!B21 -- Impairment of intangible assets`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (negative value, e.g. -2,063)
  - **Acceptable range:** (100,000) to 0
  - **Default (base case):** (2,063) (FY 2025 actual)
  - **Why this matters:** Intangible asset impairments (primarily goodwill and brand values) reduce operating profit. Historical charges have ranged from (2,063) to (175,485).
  - **Your answer:** ___

  ### Q11. What annual impairment charge (if any) do you expect on the loan to associate?

  - **Model variable:** `Assumptions!B22 -- Impairment of loan to associate`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (negative value, e.g. -12,392)
  - **Acceptable range:** (50,000) to 0
  - **Default (base case):** (12,392) (FY 2025 actual)
  - **Why this matters:** This relates to the group's exposure to its associate investment. The charge reduces profit before tax and has been a recurring drag on earnings.
  - **Your answer:** ___

  ---

  ## Section 4: Capital Structure

  *Finance costs and income are held flat in the base case because the model does not yet include a balance sheet or debt schedule. Adjust these if you have visibility on the expected post-acquisition capital structure.*

  ### Q12. What annual finance costs do you expect?

  - **Model variable:** `Assumptions!B25 -- Finance costs`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (negative value, e.g. -152,078)
  - **Acceptable range:** (300,000) to 0
  - **Default (base case):** (152,078) (FY 2025 actual)
  - **Why this matters:** Finance costs (interest on borrowings, lease liabilities) directly reduce profit before tax. In a take-private, this will change materially depending on the acquisition financing structure.
  - **Your answer:** ___

  ### Q13. What annual finance income do you expect?

  - **Model variable:** `Assumptions!B26 -- Finance income`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (positive value, e.g. 46,876)
  - **Acceptable range:** 0 to 100,000
  - **Default (base case):** 46,876 (FY 2025 actual)
  - **Why this matters:** Finance income (interest on cash balances, intercompany loans) partially offsets finance costs. Post-acquisition, this may decrease if excess cash is used to fund the transaction.
  - **Your answer:** ___

  ---

  ## Section 5: Associates

  *This section covers the group's share of profits from associate investments.*

  ### Q14. What annual share of profit from associates do you expect?

  - **Model variable:** `Assumptions!B29 -- Share of profit from associates`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (positive value, e.g. 9,851)
  - **Acceptable range:** 0 to 50,000
  - **Default (base case):** 9,851 (FY 2025 actual)
  - **Why this matters:** Associate profit contributes to pre-tax income. This has been relatively small but stable, ranging from R260k to R10,095k over the historical period.
  - **Your answer:** ___

  ---

  ## Section 6: Tax

  *The effective tax rate determines the tax charge applied to projected profit before tax.*

  ### Q15. What effective tax rate do you expect for the projection period?

  - **Model variable:** `Assumptions!B32 -- Effective tax rate`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 27.5%)
  - **Acceptable range:** 20.0% to 35.0%
  - **Default (base case):** 27.5% (FY 2025 derived: R221,694k tax on R806,253k PBT)
  - **Why this matters:** The tax rate directly determines how much of pre-tax profit converts to net income. South Africa's statutory corporate rate is 27%; the effective rate may differ due to non-deductible items, associate income and prior-year adjustments.
  - **Your answer:** ___

  ---

  ## Section 7: Profit Attribution

  *This determines how total profit is split between the group's shareholders and non-controlling interests (minority stakes in subsidiaries).*

  ### Q16. What percentage of total profit should be attributed to non-controlling interests?

  - **Model variable:** `Assumptions!B35 -- NCI as % of total profit`
  - **Source Type:** Derived
  - **Format:** Percentage (e.g. 6.3%)
  - **Acceptable range:** 0.0% to 20.0%
  - **Default (base case):** 6.3% (FY 2025 derived: R36,945k NCI on R584,559k total profit)
  - **Why this matters:** NCI reduces the profit attributable to Famous Brands' owners. If the take-private involves acquiring minority stakes, this percentage may change.
  - **Your answer:** ___

  ---

  ## Section 8: Other Comprehensive Income

  *OCI items are volatile and difficult to forecast. The base case holds them flat at FY 2025 levels. These are typically less material to the investment thesis than operating items, but should be reviewed if you expect significant currency movements or changes to the hedging programme.*

  ### Q17. What pre-tax foreign exchange translation difference do you expect on foreign operations?

  - **Model variable:** `Assumptions!B38 -- Pre-tax FX differences on foreign operations`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (e.g. -19,001)
  - **Acceptable range:** (100,000) to 100,000
  - **Default (base case):** (19,001) (FY 2025 actual)
  - **Why this matters:** FX translation gains/losses arise from consolidating foreign subsidiaries and affect total comprehensive income.
  - **Your answer:** ___

  ### Q18. What tax effect on foreign exchange differences do you expect?

  - **Model variable:** `Assumptions!B39 -- Tax effect on FX differences`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (e.g. -589)
  - **Acceptable range:** (20,000) to 20,000
  - **Default (base case):** (589) (FY 2025 actual)
  - **Why this matters:** The tax effect adjusts the net OCI impact of foreign exchange movements.
  - **Your answer:** ___

  ### Q19. What pre-tax change in fair value of cash flow hedges do you expect?

  - **Model variable:** `Assumptions!B40 -- Pre-tax change in fair value of cash flow hedges`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (e.g. -3,925)
  - **Acceptable range:** (50,000) to 50,000
  - **Default (base case):** (3,925) (FY 2025 actual)
  - **Why this matters:** Cash flow hedge movements affect total comprehensive income and reflect the group's commodity and currency hedging activity.
  - **Your answer:** ___

  ### Q20. What tax effect on hedge accounting movements do you expect?

  - **Model variable:** `Assumptions!B41 -- Tax on movement in hedge accounting reserve`
  - **Source Type:** From Source
  - **Format:** Rand amount in R000 (e.g. 1,060)
  - **Acceptable range:** (10,000) to 10,000
  - **Default (base case):** 1,060 (FY 2025 actual)
  - **Why this matters:** The tax effect adjusts the net OCI impact of hedge accounting movements.
  - **Your answer:** ___

  ---

  ## Section 9: Analyst Inputs -- Not From Source

  *These variables were not present in the source financial statements. Your judgement is required to set these values. If you are unsure, leave them blank and flag them for discussion with the deal team.*

  ### Q21. What long-term sustainable growth rate do you assume beyond the projection period?

  - **Model variable:** `Assumptions!B44 -- Terminal growth rate`
  - **Source Type:** Analyst Input
  - **Format:** Percentage (e.g. 3.0%)
  - **Acceptable range:** 0.0% to 10.0%
  - **Default (base case):** No default -- requires your input
  - **Why this matters:** The terminal growth rate is used in DCF valuation to estimate the perpetuity value beyond the explicit projection period. It should reflect long-term GDP growth or sector growth expectations.
  - **Your answer:** ___

  ### Q22. What weighted average cost of capital (WACC) or discount rate should be used?

  - **Model variable:** `Assumptions!B45 -- WACC / Discount rate`
  - **Source Type:** Analyst Input
  - **Format:** Percentage (e.g. 12.5%)
  - **Acceptable range:** 5.0% to 25.0%
  - **Default (base case):** No default -- requires your input
  - **Why this matters:** The discount rate determines the present value of all projected cash flows. A higher WACC reduces the implied valuation. For South African equity, consider the risk-free rate, equity risk premium and any country risk premium.
  - **Your answer:** ___

  ### Q23. What exit EV/EBITDA multiple do you assume at the end of the projection period?

  - **Model variable:** `Assumptions!B46 -- Exit EV/EBITDA multiple`
  - **Source Type:** Analyst Input
  - **Format:** Multiple (e.g. 8.0x)
  - **Acceptable range:** 4.0x to 15.0x
  - **Default (base case):** No default -- requires your input
  - **Why this matters:** The exit multiple is applied to terminal-year EBITDA to estimate enterprise value at exit. It is a critical input for IRR and MOIC calculations in the returns analysis.
  - **Your answer:** ___

  ---

  ## Section 10: Forecast Parameters

  *These parameters control the structural setup of the projection model.*

  ### Q1. How many years should the model project forward?

  - **Model variable:** `Assumptions!B6 -- Number of projection years`
  - **Source Type:** Default
  - **Format:** Integer (number of years)
  - **Acceptable range:** 1 to 10
  - **Default (base case):** 5
  - **Why this matters:** Determines the time horizon of all projected financial statements. The current model projects FY 2026 to FY 2030. Changing this requires rebuilding the projected statement structure.
  - **Your answer:** ___

  ---

  ## Scenario Inputs

  ### Q24. Upside Scenario

  Which assumptions would you adjust upward, and by how much? List the variable and your proposed upside value.

  | Variable | Base Case | Your Upside Value |
  |----------|-----------|-------------------|
  | Revenue growth rate (YoY) | 3.2% | ___ |
  | Cost of sales (% of revenue) | 57.2% | ___ |
  | Other income (% of revenue) | 0.7% | ___ |
  | Administration expenses (% of revenue) | 2.4% | ___ |
  | Marketing expenses (% of revenue) | 8.7% | ___ |
  | Operations expenses (% of revenue) | 21.4% | ___ |
  | Effective tax rate | 27.5% | ___ |
  | Finance costs | (152,078) | ___ |
  | Finance income | 46,876 | ___ |
  | Impairment of intangible assets | (2,063) | ___ |
  | Impairment of loan to associate | (12,392) | ___ |
  | Other (specify): ___ | ___ | ___ |

  ### Q25. Downside Scenario

  Which assumptions would you adjust downward to reflect key risks?

  | Variable | Base Case | Your Downside Value |
  |----------|-----------|---------------------|
  | Revenue growth rate (YoY) | 3.2% | ___ |
  | Cost of sales (% of revenue) | 57.2% | ___ |
  | Other income (% of revenue) | 0.7% | ___ |
  | Administration expenses (% of revenue) | 2.4% | ___ |
  | Marketing expenses (% of revenue) | 8.7% | ___ |
  | Operations expenses (% of revenue) | 21.4% | ___ |
  | Effective tax rate | 27.5% | ___ |
  | Finance costs | (152,078) | ___ |
  | Finance income | 46,876 | ___ |
  | Impairment of intangible assets | (2,063) | ___ |
  | Impairment of loan to associate | (12,392) | ___ |
  | Other (specify): ___ | ___ | ___ |

  ### Q26. Missing Assumptions

  Are there any material assumptions not covered above that you believe are important to this deal? If so, describe them and provide your estimate.

  Examples to consider: segment-level revenue growth (branded food vs logistics vs manufacturing), capital expenditure requirements, working capital changes, acquisition/disposal plans, dividend policy, management incentive costs, or regulatory changes.

  **Your answer:** ___

  ---

  ## Respondent Information

  - **Name:** ___
  - **Role:** ___
  - **Date:** ___
  - **Notes / caveats on your responses:** ___


---

**Famous Brands Limited — Financial Model Assumptions (Base Case)**
*Five-year projection: FY 2026 to FY 2030*

| Ref | Variable | Base Case Value | Source Type |
|---|---|---|---|
| Q3 | Revenue growth rate (YoY) | 3.2% | Derived |
| Q4 | Cost of sales (% of revenue) | 57.2% | Derived |
| Q5 | Other income (% of revenue) | 0.7% | Derived |
| Q6 | Expected credit losses (% of revenue) | 0.04% | Derived |
| Q7 | Administration expenses (% of revenue) | 2.4% | Derived |
| Q8 | Marketing expenses (% of revenue) | 8.7% | Derived |
| Q9 | Operations expenses (% of revenue) | 21.4% | Derived |
| Q10 | Impairment of intangible assets | R(2,063)k per annum | From Source |
| Q11 | Impairment of loan to associate | R(12,392)k per annum | From Source |
| Q12 | Finance costs | R(152,078)k per annum | From Source |
| Q13 | Finance income | R46,876k per annum | From Source |
| Q14 | Share of profit from associates | R9,851k per annum | From Source |
| Q15 | Effective tax rate | 27.5% | Derived |
| Q16 | NCI as % of total profit | 6.3% | Derived |
| Q17 | Pre-tax FX translation differences | R(19,001)k | From Source |
| Q18 | Tax effect on FX differences | R(589)k | From Source |
| Q19 | Pre-tax change in fair value of cash flow hedges | R(3,925)k | From Source |
| Q20 | Tax on hedge accounting reserve movement | R1,060k | From Source |
| Q21 | Terminal growth rate | No default — analyst input required | Analyst Input |
| Q22 | WACC / Discount rate | No default — analyst input required | Analyst Input |
| Q23 | Exit EV/EBITDA multiple | No default — analyst input required | Analyst Input |

*All monetary values in R000 (South African Rand, thousands). Model base year: FY 2025 audited actuals.*

---
