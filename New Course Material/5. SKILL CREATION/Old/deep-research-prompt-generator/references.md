# References: Deep Research Prompt Generator Skill

## Claude Skills Documentation

| Resource | URL | Description |
|---|---|---|
| Agent Skills Specification | https://agentskills.io | Open format specification for AI agent skills — defines the SKILL.md schema, folder structure, and metadata fields |
| Agent Skills Best Practices | https://agentskills.io/best-practices | Guidelines for writing effective, reusable skills |
| Anthropic Claude Documentation | https://docs.anthropic.com | Official Claude documentation covering capabilities, prompt engineering, and API reference |
| Claude Skill Creator Tool | Built into Claude.ai | Interactive tool for creating and managing custom skills within the Claude interface |

## Claude Deep Research

| Resource | URL | Description |
|---|---|---|
| Claude Deep Research Announcement | https://www.anthropic.com/news/claude-deep-research | Anthropic's official announcement and capabilities overview for deep research mode |
| Claude Extended Thinking | https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking | Documentation on Claude's extended thinking capability that powers deeper reasoning |
| Anthropic Prompt Engineering Guide | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering | Official guide to crafting effective prompts for Claude |

## Competitive Intelligence: Deep Research Landscape

| Resource | Description |
|---|---|
| Google Gemini Deep Research | Google's competing deep research feature — uses multi-step search with Gemini's reasoning. Strengths: Google Search integration, real-time web access. Weaknesses: tends toward information aggregation over analytical synthesis; lower nuance in contested topics |
| ChatGPT Deep Research | OpenAI's deep research feature — uses browsing and code interpreter. Strengths: wide tool integration, code execution for quantitative analysis. Weaknesses: can be overly confident, less calibrated uncertainty handling, tendency to present single narrative |
| Perplexity Pro Research | Perplexity's research mode — citation-heavy, search-first. Strengths: excellent citation density. Weaknesses: synthesis depth limited, tends to summarise rather than analyse |

## Claude's Competitive Advantages for Deep Research

### 1. Reasoning Depth & Nuance
- Claude's extended thinking enables genuine multi-step reasoning chains (not just search-and-summarise)
- Superior at holding contradictory evidence simultaneously and synthesising a nuanced position
- Better calibrated uncertainty — more willing to say "this is uncertain" rather than presenting speculative claims with false confidence

### 2. Source Triangulation
- Claude excels at cross-referencing claims across different evidence types
- More reliable at distinguishing between "this is well-established" vs. "this is one study's finding"
- Better at identifying methodological limitations in cited research

### 3. Structured Analytical Frameworks
- Claude responds particularly well to prompts that specify analytical frameworks (PESTEL, Porter's, SWOT)
- Produces more rigorous framework application compared to competitors who tend to use frameworks superficially
- Better at identifying where frameworks break down or have limitations for a given context

### 4. Confidence Calibration
- Claude is notably more honest about the limits of its knowledge
- Responds well to explicit confidence-rating instructions
- Less likely to hallucinate sources or fabricate specific statistics

### 5. Long-Form Synthesis
- Claude handles long, structured outputs with consistent quality throughout
- Less prone to quality degradation in later sections of long reports
- Better at maintaining analytical coherence across a multi-section research output

## Competitor Weaknesses (Exploitable via Prompt Design)

| Competitor | Weakness | How This Skill Exploits It |
|---|---|---|
| Gemini Deep Research | Tends to aggregate information rather than synthesise analytically | Our prompts explicitly request synthesis, second-order effects, and "things a non-expert would miss" |
| Gemini Deep Research | Can be superficial with analytical frameworks | Our prompts specify framework application with explicit requirement to note where frameworks break down |
| ChatGPT Deep Research | Overconfidence — presents speculative claims as established fact | Our prompts include mandatory confidence calibration and uncertainty protocols |
| ChatGPT Deep Research | Single-narrative tendency — less likely to present competing viewpoints | Our prompts require "strongest version of each position" before synthesis |
| Both Competitors | Source quality often unexamined | Our prompts require source type classification and corroboration assessment |

## Further Reading

- **"The Art of Asking Claude"** — Anthropic's prompt engineering cookbook with advanced techniques
- **Community Skills Repository** — Browse examples at agentskills.io/explore for skill design patterns
- **Claude's System Prompt Guide** — Best practices for system-level instructions that shape Claude's behaviour
- **Structured Analytical Techniques for Intelligence Analysis** (Heuer & Pherson) — The analytical tradecraft frameworks referenced in this skill's prompt templates
