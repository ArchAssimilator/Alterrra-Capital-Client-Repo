Below is a simplified view of how Deep research operates internally compared with the older Legacy research workflow. The difference is essentially the research pipeline and how many analytical passes are performed over the information.

⸻

How Deep research works (step-by-step)

1. Problem decomposition

The system first breaks the user query into multiple sub-questions.

Example
User question:

“What are the economic impacts of AI on labour markets?”

Deep research decomposes it into tasks such as:
	•	historical automation effects
	•	current AI adoption statistics
	•	wage effects across sectors
	•	productivity changes
	•	policy responses
	•	expert forecasts

This decomposition step is usually absent or minimal in legacy research.

⸻

2. Source discovery

The system searches for many candidate sources relevant to each sub-question.

Typical sources include:
	•	academic papers
	•	industry reports
	•	news analysis
	•	government publications
	•	datasets
	•	expert commentary

Deep research deliberately over-collects sources to improve coverage.

Legacy research typically gathers far fewer sources.

⸻

3. Source filtering and credibility checks

Collected sources are evaluated for:
	•	credibility
	•	recency
	•	relevance
	•	duplication
	•	conflicting claims

Lower-quality or redundant sources are discarded.

This stage ensures the final synthesis is based on higher-quality information.

Legacy research generally performs lighter filtering.

⸻

4. Evidence extraction

Instead of summarising entire documents, Deep research extracts specific claims, statistics, and arguments, such as:
	•	numerical data
	•	causal explanations
	•	expert opinions
	•	historical comparisons

Each extracted element becomes part of a structured evidence pool.

Legacy research often relies more heavily on document-level summarisation.

⸻

5. Cross-source comparison

The system then compares claims across sources.

This stage identifies:
	•	agreement between sources
	•	disagreements or controversies
	•	outlier claims
	•	consensus trends

Example:

Claim	Source A	Source B	Source C	Result
AI increases productivity	Yes	Yes	Yes	Strong consensus
AI reduces total employment	Yes	No	Mixed	Contested

Legacy research typically does not perform explicit consensus mapping.

⸻

6. Structured synthesis

The system builds a structured report using the evidence pool.

Typical sections include:
	•	background context
	•	key findings
	•	supporting data
	•	competing viewpoints
	•	implications

The goal is to synthesise knowledge, not merely summarise sources.

⸻

7. Logical verification

Deep research performs additional reasoning checks:
	•	internal consistency
	•	causal logic
	•	numerical plausibility
	•	whether conclusions follow from evidence

Legacy research usually has fewer verification passes.

⸻

8. Report generation

Finally, the system generates a long-form report with:
	•	clear sections
	•	integrated evidence
	•	analytical conclusions
	•	occasionally citations or references

⸻

Why Deep research takes longer

Deep research is slower because it:
	1.	Runs multiple research cycles
	2.	Analyses more sources
	3.	Performs cross-comparison
	4.	Synthesises structured insights

In short, the system behaves more like a research analyst conducting a briefing report rather than a summarisation engine.

⸻

Conceptual difference in one sentence
	•	Legacy research: summarises information.
	•	Deep research: investigates, cross-checks, and synthesises information.

⸻

When using Deep research, the quality of the output depends heavily on how the request is framed. Many users unintentionally write prompts that prevent the system from performing proper multi-step investigation. Below are the most common mistakes and how to avoid them.

⸻

Common mistakes when using Deep research

1. Asking vague questions

Deep research works best with clearly defined analytical problems. Vague prompts produce shallow reports.

Weak prompt

Tell me about artificial intelligence.

Better prompt

Analyse how artificial intelligence is affecting employment in manufacturing between 2015 and 2025.

Why it matters

A precise question allows the system to:
	•	identify relevant datasets
	•	locate specialised sources
	•	structure the report around specific subtopics.

⸻

2. Asking multiple unrelated questions in one request

Combining unrelated topics forces the system to split its research bandwidth.

Weak prompt

Analyse AI regulation, cryptocurrency trends, and climate policy impacts.

Better approach

Run separate Deep research reports for each topic.

Deep research performs best when the investigation has a single coherent objective.

⸻

3. Requesting conclusions without specifying criteria

If you ask for recommendations without defining evaluation criteria, the report becomes subjective.

Weak prompt

Which electric car company will dominate the market?

Better prompt

Compare Tesla, BYD, and Volkswagen in the EV market using production capacity, battery supply chains, and global sales growth as evaluation criteria.

Specifying criteria enables structured comparison.

⸻

4. Not defining the scope

Research can become unfocused without limits.

Important scope elements include:
	•	timeframe
	•	geography
	•	industry
	•	technology
	•	policy environment

Example

Instead of:

Analyse renewable energy.

Use:

Analyse the growth of offshore wind power in Europe between 2018 and 2025.

⸻

5. Asking for summaries rather than analysis

Deep research excels at analysis and synthesis, not just summarisation.

Weak prompt

Summarise the latest news about AI.

Better prompt

Analyse the strategic competition between US and Chinese AI companies and the implications for global technology supply chains.

⸻

6. Not specifying the desired output structure

If you specify the structure, the research report becomes far more useful.

Example structure request:

Produce a report with sections covering:
	•	background context
	•	key market drivers
	•	major companies
	•	risks and uncertainties
	•	five-year outlook

This guides the synthesis stage.

⸻

Example of a strong Deep research prompt

Produce a detailed research report on the global semiconductor supply chain.

Include analysis of:
	•	major fabrication regions (Taiwan, South Korea, US, China)
	•	geopolitical risks affecting chip production
	•	supply chain bottlenecks since 2020
	•	the impact of government industrial policies
	•	expected changes by 2030.

Why this works:
	•	clear topic
	•	defined sub-questions
	•	analytical focus
	•	time horizon.

⸻

Practical template for writing good Deep research prompts

You can reliably produce strong reports using this template:

Topic

Investigate [specific topic].

Scope

Focus on [geography / timeframe / industry].

Key questions

Analyse:
	•	factor 1
	•	factor 2
	•	factor 3

Output

Produce a structured report including findings, supporting evidence, and future implications.

⸻

One useful rule

If your question could be answered with a short paragraph, you probably do not need Deep research.

Deep research is most valuable for complex questions requiring synthesis across many sources.
