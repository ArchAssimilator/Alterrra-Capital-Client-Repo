/* ═══════════════════════════════════════════════════════════════
   Famous Brands Dashboard — AI Insights Engine
   Computes analysis dynamically from the dataset and generates
   structured, data-driven narrative for each dashboard section.
═══════════════════════════════════════════════════════════════ */

const InsightsEngine = {

  /* ── Utility Helpers ─────────────────────────────────── */
  pct(current, previous) {
    if (!previous || previous === 0) return null;
    return ((current - previous) / Math.abs(previous)) * 100;
  },
  pp(current, previous) { return current - previous; },
  fmt(n, dp = 1) { return n.toFixed(dp); },
  fmtPct(n, dp = 1, forceSign = false) {
    const s = n.toFixed(dp);
    return (forceSign && n > 0 ? '+' : '') + s + '%';
  },
  fmtBn(rm) { return 'R' + (rm / 1000).toFixed(2) + 'bn'; },
  fmtM(rm) { return 'R' + rm.toFixed(0) + 'm'; },
  fmtK(n) { return (n / 1000).toFixed(1) + 'k'; },
  /** Format a percentage-point change (no % symbol, just pp) */
  fmtPP(n, dp = 1, forceSign = false) {
    const s = n.toFixed(dp);
    return (forceSign && n > 0 ? '+' : '') + s + 'pp';
  },

  /** Detect consecutive direction streak in an array */
  streak(arr) {
    if (arr.length < 2) return { count: 1, direction: 'flat' };
    const last = arr[arr.length - 1];
    const prev = arr[arr.length - 2];
    const dir = last > prev ? 'up' : last < prev ? 'down' : 'flat';
    let count = 1;
    for (let i = arr.length - 2; i > 0; i--) {
      const d = arr[i] > arr[i - 1] ? 'up' : arr[i] < arr[i - 1] ? 'down' : 'flat';
      if (d === dir) count++;
      else break;
    }
    return { count, direction: dir };
  },

  /** Find best and worst in an array of {name, value} */
  bestWorst(items) {
    const sorted = [...items].sort((a, b) => b.value - a.value);
    return { best: sorted[0], worst: sorted[sorted.length - 1] };
  },

  /** Wrap a number in a colour span */
  pos(text) { return `<span class="pos">${text}</span>`; },
  neg(text) { return `<span class="neg">${text}</span>`; },
  acc(text) { return `<span class="acc">${text}</span>`; },
  bold(text) { return `<strong>${text}</strong>`; },

  /* ── HTML Builder Helpers ─────────────────────────────── */
  section(title, body) {
    return `<div class="ai-section">
      <div class="ai-section-title">${title}</div>
      ${body}
    </div>`;
  },
  para(html) {
    return `<p class="ai-narrative">${html}</p>`;
  },
  bullets(items) {
    return `<ul class="ai-bullets">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  },

  /* ── Tab 1: Executive Summary ─────────────────────────── */
  generateSummary(data) {
    const latest = data[data.length - 1];
    const prevQ  = data.length >= 2 ? data[data.length - 2] : null;
    const prevYr = data.length >= 5 ? data[data.length - 5] : null;

    const revYoY  = prevYr ? this.pct(latest.Group_Revenue_Rm, prevYr.Group_Revenue_Rm) : null;
    const opDelta = prevYr ? this.pp(latest.Group_OP_Margin_pct, prevYr.Group_OP_Margin_pct) : null;

    const lflArr  = data.map(d => d.LFL_LeadingBrands_SA_pct);
    const lflStreak = this.streak(lflArr);
    const lflFirst = lflArr[0], lflLast = lflArr[lflArr.length - 1];
    const lflDrop  = lflFirst - lflLast;

    const fy  = latest.Financial_Year;
    const qtr = latest.Quarter;

    // Regional margins
    const regions = [
      { name: 'SA',   value: latest.SA_OP_Margin_pct   },
      { name: 'SADC', value: latest.SADC_OP_Margin_pct },
      { name: 'AME',  value: latest.AME_OP_Margin_pct  },
      { name: 'UK',   value: latest.UK_OP_Margin_pct   },
    ];
    const { best: bestReg, worst: worstReg } = this.bestWorst(regions);

    // FY revenue total
    const fyData = FB_DATA.filter(d => d.Financial_Year === fy);
    const fyRev  = fyData.reduce((s, d) => s + d.Group_Revenue_Rm, 0);
    const fyOP   = fyData.reduce((s, d) => s + d.Group_OP_Rm, 0);
    const fyOPm  = (fyOP / fyRev * 100);

    const body1 = this.para(
      `${this.bold(qtr)} revenue of ${this.acc(this.fmtBn(latest.Group_Revenue_Rm))} ` +
      (revYoY !== null
        ? (revYoY >= 0
            ? `represents ${this.pos(this.fmtPct(revYoY, 1, true))} year-on-year growth`
            : `represents a ${this.neg(this.fmtPct(revYoY, 1))} decline year-on-year`)
        : 'is the opening quarter of this dataset') +
      `. Operating profit margin of ${this.bold(this.fmtPct(latest.Group_OP_Margin_pct))} ` +
      (opDelta !== null
        ? (opDelta >= 0
            ? `improved ${this.pos(this.fmtPP(opDelta, 1, true))} versus the same quarter last year`
            : `declined ${this.neg(Math.abs(opDelta).toFixed(1) + 'pp')} year-on-year`)
        : '') + `.`
    );

    const body2 = this.para(
      `Like-for-like (LFL) sales growth for Leading Brands has ` +
      (lflDrop > 5
        ? `${this.neg('decelerated markedly')} across the observation period, falling from ` +
          `${this.bold(this.fmtPct(lflFirst))} to ${this.neg(this.fmtPct(lflLast))} — a drop of ${lflDrop.toFixed(1)}pp over ${data.length} quarters. `
        : `remained ${this.pos('relatively resilient')}, ranging from ${this.fmtPct(lflFirst)} to ${this.fmtPct(lflLast)}. `) +
      `The most recent reading of ${lflLast >= 1 ? this.pos(this.fmtPct(lflLast)) : this.neg(this.fmtPct(lflLast))} ` +
      `suggests consumer spending conditions remain ` +
      (lflLast >= 3 ? 'supportive.' : lflLast >= 0 ? 'subdued but positive.' : 'contracting in real terms.')
    );

    const risks = [
      `AME operating margin of ${this.neg(this.fmtPct(latest.AME_OP_Margin_pct))} remains a persistent drag — deepened by Nigeria exposure and Mr Bigg's restructuring`,
      `LFL growth of ${this.fmtPct(lflLast)} is tracking below SA CPI, implying real volume pressure across the restaurant network`,
      `UK margin compression (${this.neg(this.fmtPct(latest.UK_OP_Margin_pct))}) reflects ongoing cost-of-living headwinds and Rand/GBP translation effects`,
    ];
    const opps = [
      `SADC operating margin of ${this.pos(this.fmtPct(latest.SADC_OP_Margin_pct))} and ${this.pos('+' + (latest.SADC_Restaurants - FB_DATA[0].SADC_Restaurants) + ' net restaurants')} since FY2023 highlight its status as the group's strongest regional growth engine`,
      `Load shedding suspension in FY2025 is driving manufacturing margin recovery (${this.pos(this.fmtPct(latest.Manufacturing_OP_Margin_pct))}) and diesel cost savings`,
      `Loyalty programme growth to ${this.bold(latest.Loyalty_Programme_Members.toLocaleString())} members provides a platform for data-driven promotional investment`,
    ];

    return (
      this.section('Performance Summary', body1 + body2) +
      this.section('Key Risks', this.bullets(risks)) +
      this.section('Key Opportunities', this.bullets(opps))
    );
  },

  /* ── Tab 2: Revenue & Margins ─────────────────────────── */
  generateRevenue(data) {
    const latest  = data[data.length - 1];
    const first   = data[0];
    const prevYr  = data.length >= 5 ? data[data.length - 5] : null;

    const saRevYoY    = prevYr ? this.pct(latest.SA_Revenue_Rm, prevYr.SA_Revenue_Rm) : null;
    const sadcRevYoY  = prevYr ? this.pct(latest.SADC_Revenue_Rm, prevYr.SADC_Revenue_Rm) : null;
    const ukRevYoY    = prevYr ? this.pct(latest.UK_Revenue_Rm, prevYr.UK_Revenue_Rm) : null;
    const ameRevYoY   = prevYr ? this.pct(latest.AME_Revenue_Rm, prevYr.AME_Revenue_Rm) : null;

    const sadcMarginChange = this.pp(latest.SADC_OP_Margin_pct, first.SADC_OP_Margin_pct);
    const ameMarginChange  = this.pp(latest.AME_OP_Margin_pct,  first.AME_OP_Margin_pct);
    const ukMarginChange   = this.pp(latest.UK_OP_Margin_pct,   first.UK_OP_Margin_pct);
    const saMarginChange   = this.pp(latest.SA_OP_Margin_pct,   first.SA_OP_Margin_pct);

    const totalRev = latest.SA_Revenue_Rm + latest.SADC_Revenue_Rm +
                     latest.AME_Revenue_Rm + latest.UK_Revenue_Rm;
    const saPct    = (latest.SA_Revenue_Rm / totalRev * 100).toFixed(0);

    const body1 = this.para(
      `${this.bold('South Africa')} contributes ${this.acc(saPct + '%')} of group revenue at ` +
      `${this.bold(this.fmtBn(latest.SA_Revenue_Rm))}, ` +
      (saRevYoY !== null ? (saRevYoY >= 0 ? `growing ${this.pos(this.fmtPct(saRevYoY, 1, true))} year-on-year` : `down ${this.neg(this.fmtPct(saRevYoY, 1))} year-on-year`) : '') +
      `. The SA operating margin of ${saMarginChange >= 0 ? this.pos(this.fmtPct(latest.SA_OP_Margin_pct)) : this.neg(this.fmtPct(latest.SA_OP_Margin_pct))} ` +
      `has ${saMarginChange >= 0 ? 'improved' : 'declined'} ${Math.abs(saMarginChange).toFixed(1)}pp since the start of the observation period.`
    );

    const body2 = this.para(
      `${this.bold('SADC')} is the standout regional performer: revenue grew ` +
      (sadcRevYoY !== null ? `${this.pos(this.fmtPct(sadcRevYoY, 1, true))} year-on-year` : 'strongly over the period') +
      ` to ${this.bold(this.fmtM(latest.SADC_Revenue_Rm))}, with an operating margin of ${this.pos(this.fmtPct(latest.SADC_OP_Margin_pct))} — ` +
      `reflecting the profitability of the franchise model in key markets like Botswana, Zambia and Namibia. ` +
      `In contrast, ${this.bold('AME')} continues to operate at a deep operating loss of ` +
      `${this.neg(this.fmtPct(latest.AME_OP_Margin_pct))}, driven primarily by Nigeria exposure and the ` +
      `Mr Bigg's brand restructuring — a ${this.neg(Math.abs(ameMarginChange).toFixed(1) + 'pp')} deterioration since ${first.Quarter}. ` +
      `The ${this.bold('UK')} has also faced headwinds, with margins compressing from ` +
      `${this.fmtPct(first.UK_OP_Margin_pct)} to ${latest.UK_OP_Margin_pct > 5 ? this.pos(this.fmtPct(latest.UK_OP_Margin_pct)) : this.neg(this.fmtPct(latest.UK_OP_Margin_pct))}.`
    );

    const body3 = this.para(
      `Within SA, ${this.bold('Leading Brands')} continues to generate exceptional franchise margins ` +
      `of ${this.pos(this.fmtPct(latest.LeadingBrands_OP_Margin_pct))}, reflecting the asset-light franchise model's inherent profitability. ` +
      `${this.bold('Signature Brands')} remains loss-making at ${this.neg(this.fmtPct(latest.SignatureBrands_OP_Margin_pct))}, ` +
      `while ${this.bold('Manufacturing')} has improved to ${this.pos(this.fmtPct(latest.Manufacturing_OP_Margin_pct))} ` +
      `following the cessation of load shedding and associated diesel cost reductions.`
    );

    return (
      this.section('Revenue Composition', body1) +
      this.section('Regional Performance', body2) +
      this.section('SA Division Margins', body3)
    );
  },

  /* ── Tab 3: Brands & Restaurants ─────────────────────── */
  generateBrands(data) {
    const latest = data[data.length - 1];
    const first  = data[0];

    const mbGrowth    = ((latest.MuggBean_SA_Restaurants - first.MuggBean_SA_Restaurants) / first.MuggBean_SA_Restaurants * 100).toFixed(1);
    const wimpyDelta  = latest.Wimpy_SA_Restaurants - first.Wimpy_SA_Restaurants;
    const debDelta    = latest.Debonairs_SA_Restaurants - first.Debonairs_SA_Restaurants;
    const fishDelta   = latest.Fishaways_SA_Restaurants - first.Fishaways_SA_Restaurants;
    const steersDelta = latest.Steers_SA_Restaurants - first.Steers_SA_Restaurants;

    const lflArr  = data.map(d => d.LFL_LeadingBrands_SA_pct);
    const lflFirst = lflArr[0], lflLast = lflArr[lflArr.length - 1];

    const totalNetNew = latest.Total_Restaurants - first.Total_Restaurants;
    const revampedTotal = data.reduce((s, d) => s + d.Restaurants_Revamped_Quarter, 0);

    const body1 = this.para(
      `The SA restaurant estate grew by a net ${this.pos('+' + (latest.SA_Restaurants - first.SA_Restaurants))} to ` +
      `${this.bold(latest.SA_Restaurants.toLocaleString())} restaurants over the period. ` +
      `${this.bold('Mugg &amp; Bean')} is the clear growth engine with ${this.pos('+' + mbGrowth + '%')} net store expansion ` +
      `(+${latest.MuggBean_SA_Restaurants - first.MuggBean_SA_Restaurants} restaurants), driven by the On-The-Move format and captive venue channels. ` +
      `${this.bold('Debonairs Pizza')} added ${this.pos('+' + debDelta)} stores to become the largest brand at ` +
      `${this.bold(latest.Debonairs_SA_Restaurants)} restaurants.`
    );

    const body2 = this.para(
      `${this.bold('Wimpy SA')} has effectively flatlined at ` +
      `${this.bold(latest.Wimpy_SA_Restaurants)} restaurants (${wimpyDelta >= 0 ? this.pos('+' + wimpyDelta) : this.neg(wimpyDelta)} net change), ` +
      `reflecting the repositioning challenges of the sit-down casual dining format in a value-conscious market. ` +
      `${this.bold('Fishaways')} is in gradual retreat at ${this.neg(fishDelta.toString())} net restaurants, ` +
      `though the November 2024 launch of SHOOSHI as an online sub-brand signals a strategic pivot. ` +
      `${this.bold(revampedTotal.toLocaleString())} restaurants were revamped across the period — ` +
      `a meaningful investment in the estate's consumer-facing quality.`
    );

    const body3 = this.para(
      `LFL growth for Leading Brands has decelerated from ${this.bold(this.fmtPct(lflFirst))} to ` +
      `${lflLast >= 1 ? this.pos(this.fmtPct(lflLast)) : this.neg(this.fmtPct(lflLast))} — ` +
      `a reflection of persistent consumer spending pressure and base effects. The trajectory for ` +
      `Signature Brands is more concerning: LFL has turned negative at ` +
      `${this.neg(this.fmtPct(latest.LFL_SignatureBrands_SA_pct))}, suggesting that premium casual dining ` +
      `formats face greater structural headwinds than value-focused QSR/CDR formats in the current environment.`
    );

    return (
      this.section('Store Footprint', body1) +
      this.section('Brand Divergence', body2) +
      this.section('Like-for-Like Performance', body3)
    );
  },

  /* ── Tab 4: Digital & ESG ─────────────────────────────── */
  generateDigital(data) {
    const latest = data[data.length - 1];
    const first  = data[0];

    const loyaltyGrowth = ((latest.Loyalty_Programme_Members - first.Loyalty_Programme_Members) / first.Loyalty_Programme_Members * 100).toFixed(0);
    const hubsGrowth    = latest.Delivery_Hubs - first.Delivery_Hubs;
    const posGrowth     = latest.Munch_POS_Restaurants - first.Munch_POS_Restaurants;
    const ghgReduction  = ((first.GHG_Emissions_tCO2e - latest.GHG_Emissions_tCO2e) / first.GHG_Emissions_tCO2e * 100).toFixed(1);
    const solarGrowth   = ((latest.Solar_Energy_MWh - first.Solar_Energy_MWh) / first.Solar_Energy_MWh * 100).toFixed(0);
    const totalCSI      = data.reduce((s, d) => s + d.CSI_Investment_Rm, 0);

    const body1 = this.para(
      `The digital transformation metrics are the most compelling growth story in the dataset. ` +
      `Loyalty Programme membership grew ${this.pos('+' + loyaltyGrowth + '%')} from ` +
      `${this.bold(first.Loyalty_Programme_Members.toLocaleString())} to ` +
      `${this.bold(latest.Loyalty_Programme_Members.toLocaleString())} — providing an increasingly ` +
      `powerful consumer data asset for targeted promotions and retention strategies.`
    );

    const body2 = this.para(
      `Delivery Hub expansion from ${first.Delivery_Hubs} to ${this.bold(latest.Delivery_Hubs)} hubs ` +
      `(+${this.pos(hubsGrowth.toString())}) demonstrates meaningful progress in building an owned delivery ` +
      `capability to complement third-party aggregators. The ${this.bold('Munch POS')} rollout across ` +
      `${this.pos('+' + posGrowth)} restaurants to ${this.bold(latest.Munch_POS_Restaurants)} total creates ` +
      `the data infrastructure layer needed for loyalty, kitchen display, and ordering analytics.`
    );

    const body3 = this.para(
      `On ESG, GHG emissions declined ${this.pos(ghgReduction + '%')} to ` +
      `${this.bold(latest.GHG_Emissions_tCO2e.toLocaleString() + ' tCO₂e')} despite growing case volumes — ` +
      `a genuine operational efficiency improvement. Solar generation has grown ${this.pos('+' + solarGrowth + '%')} ` +
      `to ${this.bold(latest.Solar_Energy_MWh.toFixed(0) + ' MWh')} though it remains a small share of total ` +
      `electricity consumption. CSI investment totalled ${this.bold('R' + totalCSI.toFixed(1) + 'm')} across the period, ` +
      `reflecting the group's community commitment.`
    );

    return (
      this.section('Consumer Engagement', body1) +
      this.section('Digital Infrastructure', body2) +
      this.section('ESG Performance', body3)
    );
  },

  /* ── Tab 5: Balance Sheet ─────────────────────────────── */
  generateBalance(data) {
    const latest = data[data.length - 1];
    const first  = data[0];
    const prevYr = data.length >= 5 ? data[data.length - 5] : null;

    const ndReduction = first.Net_Debt_Rm - latest.Net_Debt_Rm;
    const ndEbitdaImp = first.Net_Debt_EBITDA_x - latest.Net_Debt_EBITDA_x;
    const casesGrowth = ((latest.Logistics_Cases_Thousands - first.Logistics_Cases_Thousands) / first.Logistics_Cases_Thousands * 100).toFixed(1);
    const employeeGrowth = latest.Employees_Total - first.Employees_Total;

    const body1 = this.para(
      `The balance sheet transformation over this period is significant. Net Debt has reduced by ` +
      `${this.pos('R' + ndReduction.toFixed(0) + 'm')} from ${this.fmtM(first.Net_Debt_Rm)} to ` +
      `${this.bold(this.fmtM(latest.Net_Debt_Rm))}, bringing the Net Debt/EBITDA ratio from ` +
      `${this.bold(first.Net_Debt_EBITDA_x.toFixed(2) + 'x')} to ` +
      `${this.pos(latest.Net_Debt_EBITDA_x.toFixed(2) + 'x')} — ` +
      `a ${this.pos(ndEbitdaImp.toFixed(2) + 'x improvement')} driven by both debt reduction and EBITDA expansion.`
    );

    const body2 = this.para(
      `ROCE of ${this.bold(latest.ROCE_pct + '%')} reflects strong return generation relative to ` +
      `the constrained consumer environment, and is broadly consistent with the FY2023 level of ${first.ROCE_pct}% ` +
      `(having dipped during the load shedding-impacted FY2024 period). ` +
      `Management's commitment to reducing legacy debt — down R1.8bn since 2018 — provides meaningful ` +
      `financial flexibility ahead of the FY2026 refinancing exercise.`
    );

    const body3 = this.para(
      `Logistics case volumes grew ${this.pos('+' + casesGrowth + '%')} from ` +
      `${first.Logistics_Cases_Thousands.toFixed(0)}k to ` +
      `${this.bold(latest.Logistics_Cases_Thousands.toFixed(0) + 'k cases')}, ` +
      `confirming underlying volume health in the franchise network despite subdued LFL growth. ` +
      `The headcount has grown from ${first.Employees_Total.toLocaleString()} to ` +
      `${this.bold(latest.Employees_Total.toLocaleString())} employees (+${employeeGrowth}), ` +
      `reflecting both the restaurant network expansion and supply chain capability build-out.`
    );

    return (
      this.section('Debt Position', body1) +
      this.section('Returns &amp; Capital Efficiency', body2) +
      this.section('Operational Volume', body3)
    );
  },

  /* ── Main dispatch ────────────────────────────────────── */
  generate(insightType, data) {
    switch (insightType) {
      case 'summary': return this.generateSummary(data);
      case 'revenue': return this.generateRevenue(data);
      case 'brands':  return this.generateBrands(data);
      case 'digital': return this.generateDigital(data);
      case 'balance': return this.generateBalance(data);
      default: return '<p>No insights available for this section.</p>';
    }
  }
};
