---

### Claude Deep Research Prompt

> **Before you submit this prompt:**
> Attach the following documents in the file upload panel before clicking Send:
> 1. `06_Data_Collection_Questionnaire.md` — the model assumptions questionnaire
> 2. The Famous Brands FY 2025 Annual Report (PDF)
> 3. Optionally: FY 2023 and FY 2024 Annual Reports for a three-year trend view
>
> Claude works best when the full document pack is loaded upfront. Do not ask Claude to search the web — point it entirely at the documents you have provided.

---

**R — Role**

You are a senior investment analyst conducting detailed financial due diligence on Famous Brands Limited (JSE: FBR) for a private equity client evaluating a take-private transaction. You are precise, methodical, and evidence-driven. You work exclusively from the documents provided — you do not make assumptions that are not supported by the source material, and you clearly flag where the documents are silent or insufficient.

---

**C — Context**

Alterra Capital is evaluating a take-private of Famous Brands Limited — a JSE-listed QSR and casual dining franchise group operating approximately 2,900 outlets across brands including Steers, Wimpy, Debonairs Pizza, Mugg & Bean, and Fishaways.

The deal team has built a five-year income statement projection model covering FY 2026 to FY 2030, using six years of audited historical actuals (FY 2020–FY 2025) as the base. The questionnaire (attached) sets out every model assumption and its source type — "From Source", "Derived", "Analyst Input", or "Default". The annual report(s) (also attached) are the primary evidence base.

Your task is to work through the document pack to derive historically-grounded, defensible forward-looking values for every key assumption, and to identify where external research would be needed to complete the picture.

---

**T — Task**

Analyse the historical financial data in the attached annual report(s) to validate or challenge each key assumption in the questionnaire. For each variable:
- Extract the historical actuals (FY 2020–FY 2025 where available)
- Calculate the trend and flag any structural breaks
- Recommend a forward-looking value with rationale grounded in the document pack
- Flag clearly where the documents do not provide sufficient evidence to set an assumption

Produce a document analysis report that the deal team can use directly to populate the model.

---

**I — Instructions**

Work through the questionnaire section by section. For each variable, follow this sequence:

**1. Revenue growth rate (Q3 — base case: 3.2%)**
Extract total revenue for FY 2020–FY 2025 from the income statements. Calculate year-on-year growth rates. Identify the mean and median growth rate. Read the MD&A or CEO/CFO commentary in the annual report(s) for any stated revenue guidance or organic growth drivers. Separate price effects from volume effects where disclosed. Note the contribution from SA vs international operations where segment data is available.

**2. Cost of sales (Q4 — base case: 57.2%)**
Extract cost of sales and calculate it as a percentage of revenue for each year FY 2020–FY 2025. Identify the trend direction. Review the notes to the financial statements for any disclosure of commodity cost pressures, supplier contracts, or hedging of input costs. Flag whether the 57.2% FY 2025 ratio is above or below the six-year average.

**3. Other income (Q5 — base case: 0.7%)**
Extract other income for FY 2020–FY 2025 and express as a percentage of revenue. Note the stated components (e.g. rental income, sundry recoveries, franchise administration fees). Identify peak and trough years and the driver of volatility.

**4. Expected credit losses (Q6 — base case: 0.04%)**
Extract ECL charges from the income statement and notes for each available year. Identify the debtor aging schedule and any commentary on franchise credit quality. Flag whether this item has been a charge or a credit in prior years.

**5. Administration expenses (Q7 — base case: 2.4%)**
Extract administration expenses and calculate as a percentage of revenue for FY 2020–FY 2025. Identify the trend. Review whether management has disclosed any cost efficiency targets or restructuring programmes.

**6. Marketing expenses (Q8 — base case: 8.7%)**
Extract marketing expenses and calculate as a percentage of revenue. Note whether this includes franchise marketing levies or is purely group-level spend. Review any commentary on digital marketing investment or post-acquisition brand consolidation plans.

**7. Operations expenses (Q9 — base case: 21.4%)**
Extract operations/logistics/manufacturing expenses and calculate as a percentage of revenue. Note the range across the six historical years. Review any supply chain commentary in the annual report(s).

**8. Finance costs (Q12 — base case: R152,078k) and Finance income (Q13 — base case: R46,876k)**
Extract both lines for FY 2020–FY 2025. Review the borrowing schedule in the notes: identify the types of debt (bank facilities, lease liabilities under IFRS 16, bonds), interest rates, and maturity profile. Flag that in a take-private, these lines will be replaced by acquisition financing and should not be held flat.

**9. Impairments — intangibles (Q10) and loan to associate (Q11)**
Review the intangible assets note and goodwill impairment disclosures. Identify which brands or subsidiaries have been impaired and at what amounts across the historical period. Review the associate loan note for the current carrying value, impairment history, and any going-concern commentary on the associate.

**10. Effective tax rate (Q15 — base case: 27.5%)**
Calculate the effective tax rate for each year as tax charge divided by profit before tax. Identify years where the effective rate deviated materially from 27% statutory. Review the tax note for explanations: non-deductible items, prior-year adjustments, deferred tax movements, associate income treatment.

**11. NCI as % of total profit (Q16 — base case: 6.3%)**
Extract NCI profit attribution for FY 2020–FY 2025. Calculate as a percentage of total profit each year. Review the group structure note to identify which subsidiaries have minority stakes and at what ownership levels. Note whether a take-private would result in NCI buy-out.

**12. OCI items (Q17–Q20)**
Extract all OCI line items from the statement of other comprehensive income for FY 2020–FY 2025: FX translation differences, hedge accounting movements, and their respective tax effects. Comment on the volatility and typical magnitude of each item.

**13. Share of profit from associates (Q14 — base case: R9,851k)**
Extract the associate profit line for FY 2020–FY 2025. Identify the associate(s) by name from the notes. Comment on whether this income stream is reliable and likely to persist.

**14. Analyst Input variables (Q21–Q23)**
For the terminal growth rate, WACC, and exit EV/EBITDA multiple: confirm that these cannot be derived from the document pack alone. For each, provide:
- The historical context that is relevant (e.g. the historical EBITDA margin range for the exit multiple)
- A clear flag that external market data is required
- A specific suggestion of what source or data point should be obtained

---

**O — Output**

Deliver a structured document analysis report in markdown. For each variable, use this format:

---

**Q[number]: [Variable name]**

| Year | FY 2020 | FY 2021 | FY 2022 | FY 2023 | FY 2024 | FY 2025 |
|---|---|---|---|---|---|---|
| [Metric] | | | | | | |
| % of revenue (if applicable) | | | | | | |

- **6-year average:** [value]
- **Trend:** [Stable / Rising / Declining / Volatile — one sentence]
- **Document commentary:** [What management said about this line, if anything]
- **Recommended forward-looking value:** [Specific value or range with rationale]
- **External data needed?** [Yes / No — if yes, specify exactly what]

---

Close with a **Data Gaps Table** summarising all variables that require external research:

| Variable | Questionnaire Ref | Why external data is needed | Recommended source |
|---|---|---|---|

This table should be the deal team's to-do list before the investment committee.

---
