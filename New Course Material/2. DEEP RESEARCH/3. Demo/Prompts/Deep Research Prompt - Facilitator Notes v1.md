# Facilitator Notes — Deep Research Exercise
## Famous Brands Take-Private | GenAI Masterclass | Alterra Capital

---

### Purpose of this exercise

Participants use the same underlying brief — validating assumptions for a Famous Brands take-private model — but each group works with a different AI model. The debrief compares what each model produced, where outputs diverged, and why. The goal is not to find the "right answer" but to develop a structured view of each model's strengths, failure modes, and appropriate use cases in investment work.

---

### Before the session

- Distribute the questionnaire (`06_Data_Collection_Questionnaire.md`) and the relevant prompt file to each group
- Ensure each group knows which model they are using and has access to it (ChatGPT Plus / Team for OpenAI; Claude.ai Pro for Claude; Gemini Advanced or Google One AI Premium for Gemini; Grok.com for Grok)
- For the Claude group: ensure participants have the Famous Brands Annual Report PDF available to upload
- For the Grok group: confirm participants understand how to copy-paste the variable list inline — file upload may not behave as expected
- Allow 20–30 minutes for participants to run their prompts and review the outputs before the debrief

---

## Model-by-Model Facilitator Notes

---

### OpenAI / ChatGPT Deep Research

**What to highlight when presenting:**
- OpenAI Deep Research is the most capable model for broad, unsupervised web trawling — it will autonomously search multiple sources before synthesising
- The strength of the RCTIO prompt here is the front-loaded brief: the step-by-step instructions (Steps 1–8) act as a search roadmap, preventing the model from spending time on irrelevant material
- Point out the WACC build-up instruction — asking the model to decompose WACC step by step forces it to make its assumptions explicit and auditable
- Note: OpenAI Deep Research may take 5–15 minutes to complete. This is normal — it is running multiple parallel searches in the background

**Where participants are most likely to get different results:**
- The exit EV/EBITDA multiple (Q23) — OpenAI may surface global comps (US fast food, UK casual dining) that are not directly comparable to a JSE-listed franchise business; participants should be prompted to evaluate comparability
- The WACC (Q22) — the model may default to a US or global risk-free rate if the SA bond yield instruction is not followed precisely; check whether the output explicitly cites the SA 10-year government bond

**Suggested debrief question:**
> "OpenAI found a revenue growth benchmark of X% for SA QSR. How did it get there — and would you trust that number enough to put it in the model?"

---

### Claude

**What to highlight when presenting:**
- Claude is not a web search tool — it is a document intelligence tool. The prompt is designed to exploit this: it asks Claude to extract, trend, and interpret historical data from the annual report rather than speculate
- Highlight the historical data tables in the output format — these are the most valuable artefact. If Claude has populated a six-year actuals table for each variable, that is a significant time saving vs manual extraction
- Point out the **Data Gaps Table** at the end of the output — this is Claude's honest acknowledgement of what it cannot answer from documents alone. A good Data Gaps Table is a sign that Claude has done its job correctly; it should be used as the to-do list for the other model groups
- If Claude has produced hallucinated figures for variables not in the documents, flag this immediately as a teachable moment: Claude should refuse to speculate, not invent

**Where participants are most likely to get different results:**
- NCI (Q16) and associate profit (Q14) — these require navigating the group structure notes in the annual report; Claude may struggle if the notes are complex or if the PDF quality is poor
- Finance costs (Q12) — Claude may produce a useful IFRS 16 lease liability breakdown if the notes are detailed enough; or it may flag that the split between financial debt and lease liabilities is unclear and recommend the balance sheet schedule

**Suggested debrief question:**
> "Claude produced a Data Gaps Table with five items it couldn't answer from the documents. Are those the right gaps — or did it miss anything important?"

---

### Gemini Deep Research

**What to highlight when presenting:**
- Gemini's unique strength is simultaneous file + web synthesis — it can hold the questionnaire structure in mind while independently searching the web. This makes it potentially the most complete single-model output
- The five-step structure in the prompt is critical: without it, Gemini tends to produce very long, broad reports that cover many topics superficially rather than a few topics deeply. Point out that the structure is doing the heavy lifting
- The WACC build-up table (Step 3) is a good discussion anchor: ask participants whether Gemini filled in every row, and whether the sources it cited are credible (Damodaran is reliable; random financial blog posts are not)
- The **Source Log** at the end of the output is a key quality signal — participants should check whether Gemini's sources are primary (regulatory filings, sell-side research, SARB) or secondary (news articles, Wikipedia)

**Where participants are most likely to get different results:**
- The macro section (Step 1) — Gemini may produce a thorough SA macro picture or an overly generic "Africa consumer" narrative; the quality depends heavily on how recently it has indexed SA-specific data
- The scenario construction (Step 4) — Gemini may produce an impressive table or may produce a generic sensitivity analysis that doesn't engage with Famous Brands specifically; this is a good test of whether it used the questionnaire effectively

**Suggested debrief question:**
> "Gemini produced a scenario table. Compare it to what OpenAI produced. Where do they agree — and where do they disagree? What does the disagreement tell us about the reliability of each model's sources?"

---

### Grok / DeepSearch

**What to highlight when presenting:**
- Grok's differentiated capability is real-time signal detection — recent news, X/social sentiment, and earnings call commentary that the other models may not have indexed yet
- The inline variable list is the key instructional point: explain why file upload is unreliable in Grok and why pasting the variables directly is more robust. This is a practical workflow tip that participants can apply immediately
- The **⚠️ VERIFY BEFORE USE** flag in the output format is an important teaching moment: Grok should surface signals quickly, but investment-critical claims must always be traced back to a primary source (SENS filing, SARB MPC statement, StatsSA release) before entering the model
- Point out the **Top 5 Risks / Opportunities** section — this is Grok at its best, synthesising current news flow into a ranked actionable list

**Where participants are most likely to get different results:**
- Grok's output will diverge most from the other three models on any variable where something material has happened recently (e.g. a SARB rate decision, a Famous Brands profit warning, or a competitor acquisition). If nothing material has happened in the last 90 days, Grok may produce thinner output than expected
- The X/Twitter sentiment scan is the most variable output: participants in JSE-listed company exercises sometimes find that X-based commentary is dominated by retail investor noise rather than investment-grade signal. This is a useful discussion about the limitations of social sentiment as a research input

**Suggested debrief question:**
> "Grok found a news item suggesting SA food inflation is falling, which would support a lower cost-of-sales assumption. What's your verification protocol before you update the model?"

---

## Plenary Debrief — Suggested Structure (15 minutes)

1. **Compare the WACC outputs** from OpenAI and Gemini — do they agree? If not, why not? (5 minutes)
2. **Read out Claude's Data Gaps Table** — did the web-searching models (OpenAI, Gemini, Grok) actually fill those gaps? (5 minutes)
3. **Final question for the room:** If you had to put a WACC, terminal growth rate, and exit multiple into the model right now, which model's output would you trust most — and why? (5 minutes)

---

## Key teaching points (summarise on a slide or whiteboard)

- No single model does everything well. The highest-quality research brief combines all four outputs: document intelligence (Claude) + broad web research (OpenAI) + structured synthesis (Gemini) + live signals (Grok)
- Prompt structure is leverage. The RCTIO formula prevents model drift and makes outputs comparable across groups
- Source quality matters more than output volume. A 10-page Gemini report with weak sources is less valuable than a 2-page Claude extract with audited actuals
- The model is only as good as the brief. If a participant gets a poor output, the first question is always: was the prompt specific enough?

---
