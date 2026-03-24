# Claude Deep Research: Competitive Advantage Cheat Sheet

A quick-reference card for understanding **why** the Deep Research Prompt Generator skill is designed the way it is — and how it exploits Claude's specific strengths.

---

## Claude vs. The Competition: At a Glance

| Capability | Claude | Gemini Deep Research | ChatGPT Deep Research |
|---|---|---|---|
| **Reasoning depth** | Multi-step extended thinking; holds contradictions | Search-then-summarise; breadth over depth | Moderate reasoning; code-assisted analysis |
| **Uncertainty calibration** | Genuinely calibrated; says "I don't know" | Often over-aggregates; smooths over uncertainty | Tends toward overconfidence |
| **Source triangulation** | Cross-references evidence types; notes quality | Excellent Google Search access; less cross-validation | Browses web; variable citation quality |
| **Analytical frameworks** | Applies rigorously; notes where frameworks break down | Applies superficially; tends to force-fit | Moderate; better with quantitative frameworks |
| **Nuance & trade-offs** | Preserves complexity; presents multiple viewpoints | Can flatten nuance; single-narrative tendency | Presents balanced view but less depth |
| **Long-form coherence** | Maintains quality throughout | Quality can degrade in long outputs | Good but can lose thread in very long outputs |
| **Transparency** | Shows reasoning chain | Less visible reasoning | Shows some work via code interpreter |

---

## The 6 Prompt Design Principles (and Why They Work on Claude)

### 1. Layered Sub-Questions
**What:** Break the research into 4-6 distinct analytical dimensions
**Why Claude:** Activates extended thinking — Claude reasons through each dimension separately before synthesising, producing deeper analysis than a single monolithic question

### 2. Explicit Confidence Ratings
**What:** "Rate each finding High/Medium/Low with justification"
**Why Claude:** Claude is uniquely calibrated for honest uncertainty. This instruction surfaces Claude's natural tendency to be appropriately cautious, while competitors tend to present everything with equal (often false) confidence

### 3. Source Triangulation Requirements
**What:** "Cross-reference across at least 3 source types"
**Why Claude:** Claude excels at distinguishing evidence quality and identifying when claims rest on thin evidence. This makes its analysis more reliable than competitors who may cite freely without quality assessment

### 4. Named Analytical Frameworks
**What:** Specify PESTEL, Porter's, SWOT, DuPont, etc.
**Why Claude:** Claude applies named frameworks with genuine rigour — working through each element systematically. Competitors tend to use frameworks as organising headers without deep application

### 5. "Things a Non-Expert Would Miss"
**What:** "Identify 3-5 things a [persona] would most likely miss"
**Why Claude:** This prompt pattern triggers Claude's strength in surfacing non-obvious insights and second-order effects. It pushes beyond the obvious to the genuinely valuable

### 6. "Think Step by Step Before Synthesising"
**What:** Explicit instruction to reason through dimensions before concluding
**Why Claude:** Directly activates extended thinking mode. Claude produces qualitatively different output when instructed to reason step by step vs. jumping to conclusions

---

## Anti-Patterns to Avoid

| Don't Do This | Do This Instead | Why |
|---|---|---|
| "Research everything about X" | Scope to a specific decision or question | Broad prompts produce shallow aggregation, not deep analysis |
| "Give me a comprehensive report" | Specify output structure with word limits | Structure maintains quality throughout long outputs |
| "Be thorough" | "Think step by step through each dimension" | Specific metacognitive instructions activate extended thinking |
| Skip the confidence protocol | Always include confidence calibration | Without it, even Claude can present uncertain claims too confidently |
| Use a generic prompt | Tailor sub-questions to the specific domain | Domain-specific prompts produce dramatically better results |

---

## When to Use Claude Deep Research vs. Alternatives

| Scenario | Best Tool | Why |
|---|---|---|
| Need analytical depth and nuanced synthesis | **Claude** | Extended thinking + calibrated uncertainty |
| Need maximum breadth of web sources | **Gemini** | Google Search integration is unmatched for web coverage |
| Need quantitative analysis with code | **ChatGPT** | Code interpreter enables statistical analysis |
| Need fast, citation-heavy factual lookup | **Perplexity** | Search-first architecture optimised for citation density |
| Need investment-grade analytical rigour | **Claude** | Framework application + uncertainty handling + nuance preservation |

---

*This cheat sheet accompanies the Deep Research Prompt Generator skill. Share freely with masterclass participants.*
