/* ═══════════════════════════════════════════════════════════════
   Famous Brands Dashboard — Main Application
   Chart.js 4.x charts, tab switching, FY filter, AI triggers
═══════════════════════════════════════════════════════════════ */

/* ── Global State ─────────────────────────────────────── */
let currentFY   = 'all';
let currentTab  = 'summary';
const charts    = {};
const rendered  = {};

/* ── Chart.js Global Defaults ─────────────────────────── */
Chart.defaults.font.family = "'Inter', -apple-system, sans-serif";
Chart.defaults.font.size   = 11;
Chart.defaults.color       = '#8494aa';
Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';

/* ── Data Helpers ──────────────────────────────────────── */
function getFilteredData(fy) {
  if (!fy || fy === 'all') return FB_DATA;
  return FB_DATA.filter(d => d.Financial_Year === fy);
}
function labels(data) { return data.map(d => d.Quarter); }
function col(data, key) { return data.map(d => d[key]); }

/* ── Quarter bar colours (blue→amber→emerald by FY) ───── */
const FY_COLORS = {
  FY2023: { base: '#3b82f6', rgba: (a) => `rgba(59,130,246,${a})` },
  FY2024: { base: '#f59e0b', rgba: (a) => `rgba(245,158,11,${a})` },
  FY2025: { base: '#22d3a5', rgba: (a) => `rgba(34,211,165,${a})` },
};
function qBarColors(data, alpha = 0.75) {
  return data.map(d => FY_COLORS[d.Financial_Year]?.rgba(alpha) || `rgba(150,150,150,${alpha})`);
}
function qBorderColors(data) {
  return data.map(d => FY_COLORS[d.Financial_Year]?.base || '#888');
}

/* ── Shared Chart Options ──────────────────────────────── */
function baseOptions(extra = {}) {
  return {
    responsive: true,
    maintainAspectRatio: true,
    animation: { duration: 600, easing: 'easeInOutQuart' },
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 10, padding: 14, font: { size: 11 } } },
      tooltip: {
        backgroundColor: 'rgba(15,22,35,0.95)',
        borderColor: 'rgba(249,115,22,0.3)',
        borderWidth: 1,
        padding: 10,
        titleFont: { size: 12, weight: 'bold' },
        bodyFont: { size: 11 },
        callbacks: {}
      },
    },
    scales: {},
    ...extra
  };
}

function gridStyle() {
  return { color: 'rgba(255,255,255,0.05)', lineWidth: 1 };
}
function tickStyle() {
  return { color: '#5c6b84', font: { size: 10 } };
}

/* ── KPI Cards ─────────────────────────────────────────── */
function pctChange(a, b) { return b ? ((a - b) / Math.abs(b)) * 100 : null; }

function setKPI(valueId, subId, value, subHtml) {
  const vEl = document.getElementById(valueId);
  const sEl = document.getElementById(subId);
  if (vEl) vEl.textContent = value;
  if (sEl) sEl.innerHTML  = subHtml;
}

function trendSpan(change, unit = '%', invertGood = false) {
  if (change === null) return '';
  const good     = invertGood ? change < 0 : change > 0;
  const cls      = good ? 'trend-up' : change === 0 ? 'trend-neutral' : 'trend-down';
  const arrow    = change > 0 ? '▲' : change < 0 ? '▼' : '—';
  const sign     = change > 0 ? '+' : '';
  const fmt      = unit === '%' ? sign + change.toFixed(1) + 'pp YoY' : sign + change.toFixed(1) + unit + ' YoY';
  return `<span class="${cls}">${arrow} ${fmt}</span>`;
}

function updateKPIs(data) {
  const lat   = data[data.length - 1];
  const prevY = data.length >= 5 ? data[data.length - 5] : null;
  const prevQ = data.length >= 2 ? data[data.length - 2] : null;

  // Revenue
  const revBn     = (lat.Group_Revenue_Rm / 1000).toFixed(2);
  const revChg    = prevY ? pctChange(lat.Group_Revenue_Rm, prevY.Group_Revenue_Rm) : null;
  const revCls    = revChg !== null ? (revChg >= 0 ? 'trend-up' : 'trend-down') : 'trend-neutral';
  const revArrow  = revChg !== null ? (revChg > 0 ? '▲' : '▼') : '';
  setKPI('kv-revenue', 'ks-revenue',
    `R${revBn}bn`,
    revChg !== null
      ? `<span class="${revCls}">${revArrow} ${revChg > 0 ? '+' : ''}${revChg.toFixed(1)}% YoY</span> · ${lat.Quarter}`
      : lat.Quarter
  );

  // OP Margin
  const opChg = prevY ? lat.Group_OP_Margin_pct - prevY.Group_OP_Margin_pct : null;
  setKPI('kv-op', 'ks-op',
    lat.Group_OP_Margin_pct.toFixed(1) + '%',
    opChg !== null ? trendSpan(opChg, '%') + ` · ${lat.Quarter}` : lat.Quarter
  );

  // LFL Growth
  const lfl    = lat.LFL_LeadingBrands_SA_pct;
  const lflChg = prevY ? lfl - prevY.LFL_LeadingBrands_SA_pct : null;
  const lflCls = lfl >= 2 ? 'trend-up' : lfl >= 0 ? 'trend-neutral' : 'trend-down';
  setKPI('kv-lfl', 'ks-lfl',
    (lfl >= 0 ? '+' : '') + lfl.toFixed(1) + '%',
    lflChg !== null ? trendSpan(lflChg, '%') + ` · ${lat.Quarter}` : lat.Quarter
  );

  // Restaurants
  const restChg = prevY ? lat.Total_Restaurants - prevY.Total_Restaurants : null;
  setKPI('kv-rest', 'ks-rest',
    lat.Total_Restaurants.toLocaleString(),
    restChg !== null
      ? `<span class="${restChg >= 0 ? 'trend-up' : 'trend-down'}">${restChg >= 0 ? '▲ +' : '▼ '}${restChg} YoY</span> · ${lat.Quarter}`
      : lat.Quarter
  );

  // HEPS
  const hepsChg = prevY ? pctChange(lat.HEPS_cents_FY, prevY.HEPS_cents_FY) : null;
  setKPI('kv-heps', 'ks-heps',
    lat.HEPS_cents_FY + 'c',
    hepsChg !== null
      ? `<span class="${hepsChg >= 0 ? 'trend-up' : 'trend-down'}">${hepsChg >= 0 ? '▲ +' : '▼ '}${Math.abs(hepsChg).toFixed(1)}% YoY</span>`
      : `FY ${lat.Financial_Year}`
  );

  // Net Debt / EBITDA
  const ndChg  = prevY ? lat.Net_Debt_EBITDA_x - prevY.Net_Debt_EBITDA_x : null;
  const ndGood = ndChg !== null && ndChg < 0;
  setKPI('kv-nd', 'ks-nd',
    lat.Net_Debt_EBITDA_x.toFixed(2) + 'x',
    ndChg !== null
      ? `<span class="${ndGood ? 'trend-up' : 'trend-down'}">${ndGood ? '▼ ' : '▲ +'}${Math.abs(ndChg).toFixed(2)}x YoY</span>`
      : `Net Debt: R${(lat.Net_Debt_Rm / 1000).toFixed(2)}bn`
  );
}

/* ══════════════════════════════════════════════════════════
   CHART DEFINITIONS
══════════════════════════════════════════════════════════ */

/* ── Tab 1: Revenue + OP Margin Combo ─────────────────── */
function initRevOPChart(data) {
  const ctx = document.getElementById('revOPChart');
  if (!ctx) return;
  if (charts.revOP) { charts.revOP.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      type: 'linear', position: 'left',
      grid: gridStyle(), ticks: { ...tickStyle(), callback: v => 'R' + v.toFixed(0) + 'm' },
      title: { display: true, text: 'Revenue (Rm)', color: '#5c6b84', font: { size: 10 } },
    },
    y1: {
      type: 'linear', position: 'right',
      grid: { display: false },
      ticks: { ...tickStyle(), callback: v => v.toFixed(1) + '%' },
      title: { display: true, text: 'OP Margin %', color: '#f97316', font: { size: 10 } },
      min: 6, max: 16,
    },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => {
    if (ctx.dataset.yAxisID === 'y1') return ` OP Margin: ${ctx.raw.toFixed(1)}%`;
    return ` Revenue: R${ctx.raw.toFixed(0)}m`;
  };

  charts.revOP = new Chart(ctx, {
    data: {
      labels: labels(data),
      datasets: [
        {
          type: 'bar', label: 'Revenue (Rm)',
          data: col(data, 'Group_Revenue_Rm'),
          backgroundColor: qBarColors(data, 0.7),
          borderColor: qBorderColors(data),
          borderWidth: 1, borderRadius: 3,
          yAxisID: 'y', order: 2,
        },
        {
          type: 'line', label: 'OP Margin %',
          data: col(data, 'Group_OP_Margin_pct'),
          borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.1)',
          borderWidth: 2.5, pointRadius: 4, pointBackgroundColor: '#f97316',
          tension: 0.3, fill: false,
          yAxisID: 'y1', order: 1,
        },
      ],
    },
    options: opts,
  });
}

/* ── Tab 1: OP Margin Trend ────────────────────────────── */
function initOpTrendChart(data) {
  const ctx = document.getElementById('opTrendChart');
  if (!ctx) return;
  if (charts.opTrend) { charts.opTrend.destroy(); }

  const opts = baseOptions();
  opts.plugins.legend.display = false;
  opts.scales = {
    y: {
      grid: gridStyle(), ticks: { ...tickStyle(), callback: v => v + '%' },
      min: 6, max: 16,
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };

  const values = col(data, 'Group_OP_Margin_pct');
  charts.opTrend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [{
        label: 'Group OP Margin %',
        data: values,
        borderColor: '#22d3a5',
        backgroundColor: 'rgba(34,211,165,0.08)',
        borderWidth: 2.5, pointRadius: 4,
        pointBackgroundColor: values.map(v => v >= 11 ? '#22d3a5' : v >= 9 ? '#fbbf24' : '#f1533e'),
        tension: 0.3, fill: true,
      }],
    },
    options: opts,
  });
}

/* ── Tab 1: LFL Summary ────────────────────────────────── */
function initLflSummaryChart(data) {
  const ctx = document.getElementById('lflSummaryChart');
  if (!ctx) return;
  if (charts.lflSummary) { charts.lflSummary.destroy(); }

  const opts = baseOptions();
  opts.plugins.legend.display = false;
  opts.scales = {
    y: {
      grid: gridStyle(), ticks: { ...tickStyle(), callback: v => v + '%' },
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };

  const values = col(data, 'LFL_LeadingBrands_SA_pct');
  charts.lflSummary = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels(data),
      datasets: [{
        label: 'LFL Growth %',
        data: values,
        backgroundColor: values.map(v => v >= 5 ? 'rgba(34,211,165,0.7)' : v >= 1 ? 'rgba(251,191,36,0.7)' : 'rgba(241,83,62,0.7)'),
        borderColor: values.map(v => v >= 5 ? '#22d3a5' : v >= 1 ? '#fbbf24' : '#f1533e'),
        borderWidth: 1, borderRadius: 3,
      }],
    },
    options: opts,
  });
}

/* ── Tab 1: Region Donut ───────────────────────────────── */
function initRegionDonutChart(data) {
  const ctx = document.getElementById('regionDonutChart');
  if (!ctx) return;
  if (charts.regionDonut) { charts.regionDonut.destroy(); }

  // Use the latest FY available in the filtered data
  const fy    = data[data.length - 1].Financial_Year;
  const fyDat = FB_DATA.filter(d => d.Financial_Year === fy);
  const sa    = fyDat.reduce((s, d) => s + d.SA_Revenue_Rm, 0);
  const sadc  = fyDat.reduce((s, d) => s + d.SADC_Revenue_Rm, 0);
  const ame   = fyDat.reduce((s, d) => s + d.AME_Revenue_Rm, 0);
  const uk    = fyDat.reduce((s, d) => s + d.UK_Revenue_Rm, 0);

  const opts = baseOptions();
  opts.plugins.tooltip.callbacks.label = (ctx) => {
    const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
    return ` ${ctx.label}: R${ctx.raw.toFixed(0)}m (${(ctx.raw / total * 100).toFixed(1)}%)`;
  };
  delete opts.scales;

  charts.regionDonut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['South Africa', 'SADC', 'AME', 'UK'],
      datasets: [{
        data: [sa, sadc, ame, uk],
        backgroundColor: ['rgba(249,115,22,0.8)', 'rgba(96,165,250,0.8)', 'rgba(241,83,62,0.8)', 'rgba(167,139,250,0.8)'],
        borderColor: ['#f97316', '#60a5fa', '#f1533e', '#a78bfa'],
        borderWidth: 2,
        hoverOffset: 8,
      }],
    },
    options: { ...opts, cutout: '60%' },
  });
}

/* ── Tab 2: Regional Stacked Revenue ──────────────────── */
function initRegionalStackChart(data) {
  const ctx = document.getElementById('regionalStackChart');
  if (!ctx) return;
  if (charts.regionalStack) { charts.regionalStack.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    x: { stacked: true, grid: { display: false }, ticks: tickStyle() },
    y: {
      stacked: true, grid: gridStyle(),
      ticks: { ...tickStyle(), callback: v => 'R' + v.toFixed(0) + 'm' },
    },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` ${ctx.dataset.label}: R${ctx.raw.toFixed(0)}m`;

  charts.regionalStack = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels(data),
      datasets: [
        { label: 'South Africa', data: col(data, 'SA_Revenue_Rm'),   backgroundColor: 'rgba(249,115,22,0.75)', borderColor: '#f97316', borderWidth: 1, stack: 'a' },
        { label: 'SADC',         data: col(data, 'SADC_Revenue_Rm'), backgroundColor: 'rgba(96,165,250,0.75)', borderColor: '#60a5fa', borderWidth: 1, stack: 'a' },
        { label: 'UK',           data: col(data, 'UK_Revenue_Rm'),   backgroundColor: 'rgba(167,139,250,0.75)',borderColor: '#a78bfa', borderWidth: 1, stack: 'a' },
        { label: 'AME',          data: col(data, 'AME_Revenue_Rm'),  backgroundColor: 'rgba(241,83,62,0.75)',  borderColor: '#f1533e', borderWidth: 1, stack: 'a' },
      ],
    },
    options: opts,
  });
}

/* ── Tab 2: Regional Margins Multi-line ───────────────── */
function initRegionalMarginsChart(data) {
  const ctx = document.getElementById('regionalMarginsChart');
  if (!ctx) return;
  if (charts.regionalMargins) { charts.regionalMargins.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      grid: gridStyle(), ticks: { ...tickStyle(), callback: v => v + '%' },
      title: { display: true, text: 'Operating Margin %', color: '#5c6b84', font: { size: 10 } },
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` ${ctx.dataset.label}: ${ctx.raw.toFixed(1)}%`;

  const ds = (label, key, color, dash = []) => ({
    label, data: col(data, key),
    borderColor: color, backgroundColor: color.replace(')', ',0.05)').replace('rgb', 'rgba'),
    borderWidth: 2, pointRadius: 3, tension: 0.3,
    borderDash: dash, fill: false,
  });

  charts.regionalMargins = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [
        ds('South Africa', 'SA_OP_Margin_pct',   '#f97316'),
        ds('SADC',         'SADC_OP_Margin_pct',  '#60a5fa'),
        ds('UK',           'UK_OP_Margin_pct',    '#a78bfa', [4,2]),
        ds('AME',          'AME_OP_Margin_pct',   '#f1533e'),
      ],
    },
    options: opts,
  });
}

/* ── Tab 2: Division Heatmap (HTML table) ─────────────── */
function renderDivisionHeatmap(data) {
  const el = document.getElementById('divisionHeatmap');
  if (!el) return;

  function cellColor(v) {
    if (v >= 40)  return { bg: 'rgba(34,211,165,0.75)',  fg: '#000' };
    if (v >= 10)  return { bg: 'rgba(34,211,165,0.45)',  fg: '#e0fff8' };
    if (v >= 5)   return { bg: 'rgba(251,191,36,0.45)',  fg: '#fffbe6' };
    if (v >= 1)   return { bg: 'rgba(251,191,36,0.25)',  fg: '#fef9e7' };
    if (v >= -10) return { bg: 'rgba(241,83,62,0.35)',   fg: '#ffe8e5' };
    return               { bg: 'rgba(241,83,62,0.65)',   fg: '#fff0ee' };
  }

  const cols = [
    { label: 'Leading Brands', key: 'LeadingBrands_OP_Margin_pct' },
    { label: 'Signature',      key: 'SignatureBrands_OP_Margin_pct' },
    { label: 'Manufacturing',  key: 'Manufacturing_OP_Margin_pct' },
    { label: 'Logistics',      key: 'Logistics_OP_Margin_pct' },
    { label: 'Retail',         key: 'Retail_OP_Margin_pct' },
  ];

  let html = '<table class="heatmap-table"><thead><tr>';
  html += '<th>Quarter</th>';
  cols.forEach(c => { html += `<th>${c.label}</th>`; });
  html += '</tr></thead><tbody>';

  data.forEach(row => {
    html += `<tr><td>${row.Quarter}</td>`;
    cols.forEach(c => {
      const v  = row[c.key];
      const cc = cellColor(v);
      html += `<td style="background:${cc.bg};color:${cc.fg}">${v.toFixed(1)}%</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  el.innerHTML = html;
}

/* ── Tab 3: Brand Count Multi-line ────────────────────── */
function initBrandCountChart(data) {
  const ctx = document.getElementById('brandCountChart');
  if (!ctx) return;
  if (charts.brandCount) { charts.brandCount.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      grid: gridStyle(), ticks: tickStyle(),
      title: { display: true, text: 'SA Restaurant Count', color: '#5c6b84', font: { size: 10 } },
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}`;

  const ds = (label, key, color) => ({
    label, data: col(data, key),
    borderColor: color, backgroundColor: 'transparent',
    borderWidth: 2.5, pointRadius: 3.5, tension: 0.3, fill: false,
    pointBackgroundColor: color,
  });

  charts.brandCount = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [
        ds('Debonairs Pizza', 'Debonairs_SA_Restaurants', '#f97316'),
        ds('Wimpy',           'Wimpy_SA_Restaurants',     '#eab308'),
        ds('Steers',          'Steers_SA_Restaurants',    '#ef4444'),
        ds('Mugg & Bean',     'MuggBean_SA_Restaurants',  '#8b5cf6'),
        ds('Fishaways',       'Fishaways_SA_Restaurants', '#3b82f6'),
        ds('Milky Lane',      'MilkyLane_SA_Restaurants', '#ec4899'),
      ],
    },
    options: opts,
  });
}

/* ── Tab 3: LFL Detail ─────────────────────────────────── */
function initLflDetailChart(data) {
  const ctx = document.getElementById('lflDetailChart');
  if (!ctx) return;
  if (charts.lflDetail) { charts.lflDetail.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      grid: gridStyle(), ticks: { ...tickStyle(), callback: v => v + '%' },
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` ${ctx.dataset.label}: ${ctx.raw.toFixed(1)}%`;

  charts.lflDetail = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [
        {
          label: 'Leading Brands SA',
          data: col(data, 'LFL_LeadingBrands_SA_pct'),
          borderColor: '#22d3a5', backgroundColor: 'rgba(34,211,165,0.08)',
          borderWidth: 2.5, pointRadius: 4, tension: 0.35, fill: true,
        },
        {
          label: 'Signature Brands SA',
          data: col(data, 'LFL_SignatureBrands_SA_pct'),
          borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.05)',
          borderWidth: 2, pointRadius: 3, tension: 0.35, fill: true, borderDash: [4, 2],
        },
      ],
    },
    options: opts,
  });
}

/* ── Tab 3: Net Opens/Closes ───────────────────────────── */
function initNetOpensChart(data) {
  const ctx = document.getElementById('netOpensChart');
  if (!ctx) return;
  if (charts.netOpens) { charts.netOpens.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: { grid: gridStyle(), ticks: tickStyle() },
    x: { grid: { display: false }, ticks: tickStyle() },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}`;

  charts.netOpens = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels(data),
      datasets: [
        {
          label: 'New Opened',
          data: col(data, 'New_Restaurants_Quarter'),
          backgroundColor: 'rgba(34,211,165,0.65)', borderColor: '#22d3a5',
          borderWidth: 1, borderRadius: 3,
        },
        {
          label: 'Closed',
          data: col(data, 'Restaurants_Closed_Quarter').map(v => -v),
          backgroundColor: 'rgba(241,83,62,0.55)', borderColor: '#f1533e',
          borderWidth: 1, borderRadius: 3,
        },
        {
          label: 'Revamped',
          data: col(data, 'Restaurants_Revamped_Quarter'),
          backgroundColor: 'rgba(251,191,36,0.55)', borderColor: '#fbbf24',
          borderWidth: 1, borderRadius: 3,
          type: 'bar',
        },
      ],
    },
    options: opts,
  });
}

/* ── Tab 4: Loyalty Members ────────────────────────────── */
function initLoyaltyChart(data) {
  const ctx = document.getElementById('loyaltyChart');
  if (!ctx) return;
  if (charts.loyalty) { charts.loyalty.destroy(); }

  const opts = baseOptions();
  opts.plugins.legend.display = false;
  opts.scales = {
    y: {
      grid: gridStyle(),
      ticks: { ...tickStyle(), callback: v => (v / 1000).toFixed(0) + 'k' },
      title: { display: true, text: 'Members', color: '#5c6b84', font: { size: 10 } },
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` Members: ${ctx.raw.toLocaleString()}`;

  charts.loyalty = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [{
        label: 'Loyalty Members',
        data: col(data, 'Loyalty_Programme_Members'),
        borderColor: '#8b5cf6', backgroundColor: 'rgba(139,92,246,0.1)',
        borderWidth: 2.5, pointRadius: 4, tension: 0.3, fill: true,
      }],
    },
    options: opts,
  });
}

/* ── Tab 4: Digital Ops (Hubs + POS) ──────────────────── */
function initDigitalOpsChart(data) {
  const ctx = document.getElementById('digitalOpsChart');
  if (!ctx) return;
  if (charts.digitalOps) { charts.digitalOps.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      type: 'linear', position: 'left',
      grid: gridStyle(), ticks: tickStyle(),
      title: { display: true, text: 'Munch POS Restaurants', color: '#22d3ee', font: { size: 10 } },
    },
    y1: {
      type: 'linear', position: 'right',
      grid: { display: false }, ticks: tickStyle(),
      title: { display: true, text: 'Delivery Hubs', color: '#f97316', font: { size: 10 } },
    },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => {
    if (ctx.dataset.yAxisID === 'y1') return ` Delivery Hubs: ${ctx.raw}`;
    return ` Munch POS Restaurants: ${ctx.raw}`;
  };

  charts.digitalOps = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [
        {
          label: 'Munch POS Restaurants',
          data: col(data, 'Munch_POS_Restaurants'),
          borderColor: '#22d3ee', backgroundColor: 'rgba(34,211,238,0.08)',
          borderWidth: 2.5, pointRadius: 4, tension: 0.3, fill: true,
          yAxisID: 'y',
        },
        {
          label: 'Delivery Hubs',
          data: col(data, 'Delivery_Hubs'),
          borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.08)',
          borderWidth: 2.5, pointRadius: 4, tension: 0.3, fill: true,
          yAxisID: 'y1',
        },
      ],
    },
    options: opts,
  });
}

/* ── Tab 4: ESG Chart ──────────────────────────────────── */
function initEsgChart(data) {
  const ctx = document.getElementById('esgChart');
  if (!ctx) return;
  if (charts.esg) { charts.esg.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      type: 'linear', position: 'left',
      grid: gridStyle(),
      ticks: { ...tickStyle(), callback: v => (v / 1000).toFixed(0) + 'k tCO₂e' },
      title: { display: true, text: 'GHG Emissions', color: '#f1533e', font: { size: 10 } },
    },
    y1: {
      type: 'linear', position: 'right',
      grid: { display: false },
      ticks: { ...tickStyle(), callback: v => v.toFixed(0) + ' MWh' },
      title: { display: true, text: 'Solar MWh', color: '#fbbf24', font: { size: 10 } },
    },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => {
    if (ctx.dataset.yAxisID === 'y1') return ` Solar: ${ctx.raw.toFixed(0)} MWh`;
    return ` GHG: ${ctx.raw.toFixed(0)} tCO₂e`;
  };

  charts.esg = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels(data),
      datasets: [
        {
          type: 'bar', label: 'GHG Emissions (tCO₂e)',
          data: col(data, 'GHG_Emissions_tCO2e'),
          backgroundColor: 'rgba(241,83,62,0.5)', borderColor: '#f1533e',
          borderWidth: 1, borderRadius: 2, yAxisID: 'y',
        },
        {
          type: 'line', label: 'Solar Energy (MWh)',
          data: col(data, 'Solar_Energy_MWh'),
          borderColor: '#fbbf24', backgroundColor: 'rgba(251,191,36,0.1)',
          borderWidth: 2.5, pointRadius: 4, tension: 0.3, fill: true, yAxisID: 'y1',
        },
      ],
    },
    options: opts,
  });
}

/* ── Tab 4: ESG Scorecard (HTML) ───────────────────────── */
function renderEsgScorecard(data) {
  const el = document.getElementById('esgScorecard');
  if (!el) return;

  const first  = FB_DATA[0];
  const latest = FB_DATA[FB_DATA.length - 1];

  const items = [
    {
      label: 'GHG Emissions',
      value: latest.GHG_Emissions_tCO2e.toFixed(0) + ' tCO₂e (quarterly)',
      change: (((first.GHG_Emissions_tCO2e - latest.GHG_Emissions_tCO2e) / first.GHG_Emissions_tCO2e) * 100).toFixed(1) + '% reduction',
      fill: 100 - (latest.GHG_Emissions_tCO2e / first.GHG_Emissions_tCO2e * 100),
      color: '#22d3a5',
      good: true,
    },
    {
      label: 'Solar Generation',
      value: latest.Solar_Energy_MWh.toFixed(0) + ' MWh (quarterly)',
      change: '+' + (((latest.Solar_Energy_MWh - first.Solar_Energy_MWh) / first.Solar_Energy_MWh) * 100).toFixed(0) + '% since FY2023',
      fill: Math.min(100, (latest.Solar_Energy_MWh / 700) * 100),
      color: '#fbbf24',
      good: true,
    },
    {
      label: 'Loyalty Members',
      value: latest.Loyalty_Programme_Members.toLocaleString(),
      change: '+' + (((latest.Loyalty_Programme_Members - first.Loyalty_Programme_Members) / first.Loyalty_Programme_Members) * 100).toFixed(0) + '% since FY2023',
      fill: (latest.Loyalty_Programme_Members / 1200000) * 100,
      color: '#8b5cf6',
      good: true,
    },
    {
      label: 'CSI Investment',
      value: 'R' + latest.CSI_Investment_Rm.toFixed(2) + 'm (quarterly)',
      change: 'R' + FB_DATA.reduce((s, d) => s + d.CSI_Investment_Rm, 0).toFixed(1) + 'm total FY2023–25',
      fill: (latest.CSI_Investment_Rm / 6) * 100,
      color: '#60a5fa',
      good: true,
    },
  ];

  el.innerHTML = items.map(item => `
    <div class="esg-item">
      <div class="esg-item-header">
        <span class="esg-item-label">${item.label}</span>
        <span class="esg-item-value">${item.value}</span>
      </div>
      <div class="esg-bar-track">
        <div class="esg-bar-fill" style="width:${Math.min(100, Math.max(0, item.fill))}%;background:${item.color}"></div>
      </div>
      <div style="font-size:10px;color:var(--text-3);margin-top:2px">${item.change}</div>
    </div>
  `).join('');
}

/* ── Tab 5: Debt Chart ─────────────────────────────────── */
function initDebtChart(data) {
  const ctx = document.getElementById('debtChart');
  if (!ctx) return;
  if (charts.debt) { charts.debt.destroy(); }

  const opts = baseOptions();
  opts.scales = {
    y: {
      type: 'linear', position: 'left',
      grid: gridStyle(),
      ticks: { ...tickStyle(), callback: v => 'R' + v.toFixed(0) + 'm' },
      title: { display: true, text: 'Net Debt (Rm)', color: '#60a5fa', font: { size: 10 } },
    },
    y1: {
      type: 'linear', position: 'right',
      grid: { display: false },
      ticks: { ...tickStyle(), callback: v => v.toFixed(2) + 'x' },
      title: { display: true, text: 'ND / EBITDA', color: '#f97316', font: { size: 10 } },
      min: 0, max: 2,
    },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => {
    if (ctx.dataset.yAxisID === 'y1') return ` ND/EBITDA: ${ctx.raw.toFixed(2)}x`;
    return ` Net Debt: R${ctx.raw.toFixed(0)}m`;
  };

  charts.debt = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels(data),
      datasets: [
        {
          type: 'bar', label: 'Net Debt (Rm)',
          data: col(data, 'Net_Debt_Rm'),
          backgroundColor: qBarColors(data, 0.5),
          borderColor: qBorderColors(data),
          borderWidth: 1, borderRadius: 3, yAxisID: 'y',
        },
        {
          type: 'line', label: 'Net Debt / EBITDA',
          data: col(data, 'Net_Debt_EBITDA_x'),
          borderColor: '#f97316', backgroundColor: 'rgba(249,115,22,0.08)',
          borderWidth: 2.5, pointRadius: 4, tension: 0.3, fill: false, yAxisID: 'y1',
        },
      ],
    },
    options: opts,
  });
}

/* ── Tab 5: ROCE ───────────────────────────────────────── */
function initRoceChart(data) {
  const ctx = document.getElementById('roceChart');
  if (!ctx) return;
  if (charts.roce) { charts.roce.destroy(); }

  const opts = baseOptions();
  opts.plugins.legend.display = false;
  opts.scales = {
    y: {
      grid: gridStyle(),
      ticks: { ...tickStyle(), callback: v => v + '%' },
      min: 20, max: 45,
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };

  charts.roce = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels(data),
      datasets: [{
        label: 'ROCE %',
        data: col(data, 'ROCE_pct'),
        borderColor: '#22d3a5', backgroundColor: 'rgba(34,211,165,0.1)',
        borderWidth: 2.5, pointRadius: 5, tension: 0, fill: true,
        pointBackgroundColor: '#22d3a5',
      }],
    },
    options: opts,
  });
}

/* ── Tab 5: Logistics Cases ────────────────────────────── */
function initCasesChart(data) {
  const ctx = document.getElementById('casesChart');
  if (!ctx) return;
  if (charts.cases) { charts.cases.destroy(); }

  const opts = baseOptions();
  opts.plugins.legend.display = false;
  opts.scales = {
    y: {
      grid: gridStyle(),
      ticks: { ...tickStyle(), callback: v => (v / 1000).toFixed(1) + 'M' },
      title: { display: true, text: 'Cases (Thousands)', color: '#5c6b84', font: { size: 10 } },
    },
    x: { grid: { display: false }, ticks: tickStyle() },
  };
  opts.plugins.tooltip.callbacks.label = (ctx) => ` Cases: ${ctx.raw.toFixed(0)}k`;

  charts.cases = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels(data),
      datasets: [{
        label: 'Logistics Cases (k)',
        data: col(data, 'Logistics_Cases_Thousands'),
        backgroundColor: qBarColors(data, 0.65),
        borderColor: qBorderColors(data),
        borderWidth: 1, borderRadius: 3,
      }],
    },
    options: opts,
  });
}

/* ══════════════════════════════════════════════════════════
   TAB RENDERER
══════════════════════════════════════════════════════════ */
function renderTab(tabId, data) {
  switch (tabId) {
    case 'summary':
      initRevOPChart(data);
      initOpTrendChart(data);
      initLflSummaryChart(data);
      initRegionDonutChart(data);
      break;
    case 'revenue':
      initRegionalStackChart(data);
      initRegionalMarginsChart(data);
      renderDivisionHeatmap(data);
      break;
    case 'brands':
      initBrandCountChart(data);
      initLflDetailChart(data);
      initNetOpensChart(data);
      break;
    case 'digital':
      initLoyaltyChart(data);
      initDigitalOpsChart(data);
      initEsgChart(data);
      renderEsgScorecard(data);
      break;
    case 'balance':
      initDebtChart(data);
      initRoceChart(data);
      initCasesChart(data);
      break;
  }
}

/* ══════════════════════════════════════════════════════════
   TAB SWITCHING
══════════════════════════════════════════════════════════ */
function switchTab(tabId) {
  currentTab = tabId;

  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  const pane = document.getElementById(tabId);
  const btn  = document.querySelector(`[data-tab="${tabId}"]`);
  if (pane) pane.classList.add('active');
  if (btn)  btn.classList.add('active');

  // Slight delay so canvas is visible before Chart.js measures it
  setTimeout(() => renderTab(tabId, getFilteredData(currentFY)), 30);
}

/* ══════════════════════════════════════════════════════════
   AI INSIGHTS TRIGGER
══════════════════════════════════════════════════════════ */
function showGenerating(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = `
    <div class="ai-generating">
      <span>AI is analysing your data</span>
      <div class="ai-dots">
        <span></span><span></span><span></span>
      </div>
    </div>`;
}

function generateInsightWithAnimation(insightType, data) {
  const targetId  = `ai-${insightType}`;
  const isPanel   = insightType === 'summary';

  showGenerating(targetId);

  setTimeout(() => {
    const html = InsightsEngine.generate(insightType, data);
    const el   = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = `<div class="ai-content">${html}</div>`;
  }, 1800);
}

/* ══════════════════════════════════════════════════════════
   FY FILTER
══════════════════════════════════════════════════════════ */
function setFY(fy) {
  currentFY = fy;
  const data = getFilteredData(fy);

  updateKPIs(data);
  renderTab(currentTab, data);

  // Reset AI panels
  const aiIds = ['ai-summary','ai-revenue','ai-brands','ai-digital','ai-balance'];
  aiIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === 'ai-summary') {
      el.innerHTML = `<div class="ai-placeholder">
        <div class="ai-placeholder-icon">✦</div>
        <p>Click <strong>Generate</strong> to analyse the selected period.</p>
      </div>`;
    } else {
      el.innerHTML = `<span class="ai-placeholder-inline">Click Generate for AI commentary on this section.</span>`;
    }
  });

  // Update footer
  const footer = document.getElementById('footer-filter');
  if (footer) footer.textContent = 'Showing: ' + (fy === 'all' ? 'All Periods (FY2023–FY2025)' : fy);
}

/* ══════════════════════════════════════════════════════════
   THEME TOGGLE
══════════════════════════════════════════════════════════ */
function toggleTheme() {
  const html  = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';

  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = isDark ? '☾' : '☀';

  // Update Chart.js defaults and redraw
  Chart.defaults.color       = isDark ? '#334155' : '#8494aa';
  Chart.defaults.borderColor = isDark ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.06)';

  setTimeout(() => renderTab(currentTab, getFilteredData(currentFY)), 50);
}

/* ══════════════════════════════════════════════════════════
   INITIALISE
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Initial KPIs and first tab
  updateKPIs(getFilteredData('all'));
  switchTab('summary');

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // FY filter buttons
  document.querySelectorAll('.fy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fy-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setFY(btn.dataset.fy);
    });
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // AI Generate buttons (event delegation on whole document)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.generate-btn');
    if (btn && btn.dataset.insight) {
      generateInsightWithAnimation(btn.dataset.insight, getFilteredData(currentFY));
    }
  });
});
