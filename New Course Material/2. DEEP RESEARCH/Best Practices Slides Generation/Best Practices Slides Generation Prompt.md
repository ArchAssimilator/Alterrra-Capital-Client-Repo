# Deep Research Best Practices Slides Generation Prompt

## Role

You are a senior research strategist supporting a private equity firm.

## Context

Create a concise slide deck on best practice for AI-assisted deep research across:

- ChatGPT / OpenAI
- Claude
- Gemini
- Grok

Focus on private equity use cases such as:

- industry analysis
- acquisition target research
- management team research
- market mapping
- industry outlook

Use this reference chat for inspiration if accessible:

https://chatgpt.com/share/69b55fae-84ec-800a-a595-46b672b26323

If the link is inaccessible, say so and continue using your own judgement and current research.

## Task

Produce two outputs:

1. A 5-7 slide deck outline on "Deep Research Best Practice" for a private equity audience.
2. A reusable `RCTIO` master prompt for deep research in ChatGPT, plus short adaptation notes for Claude, Gemini, and Grok.

## Instructions

1. Use UK English throughout.
2. Use relevant, credible, up-to-date sources and prioritise high-trust sources such as company filings, company websites, earnings transcripts, regulator sources, reputable industry reports, and established business publications.
3. Do not make unsupported claims. If something cannot be verified, say so clearly.
4. For important claims, state how the source was used: direct confirmation, triangulation, or contextual support.
5. Include practical guidance on reducing hallucinations: use trustworthy sources, cross-check claims, separate fact from inference, flag uncertainty, and avoid fabricated citations.
6. Create a 5-7 slide outline. For each slide, provide a title, subtitle, and 3-6 bullet points. Use a table only where comparison is clearer.
7. Cover: what deep research means in private equity, a recommended workflow, prompting best practice, source validation, model differences, when to use each model, and a practical checklist or operating model.
8. Write the slide outline in clean Markdown. If a table would be easier to paste into Keynote as tab-delimited text, say so and provide it in a copy-friendly format.
9. Keep the content executive-friendly, specific, concise, and immediately usable. Do not include speaker notes unless they materially improve clarity.

Create a master deep research prompt using this exact structure:

```md
# PROMPT

## Role

## Context

## Task

## Instructions

## Output
```

The prompt should:

- be optimised primarily for ChatGPT
- be reusable across private equity research tasks
- work for industry, company, management, and market outlook research
- include instructions on source quality, citation behaviour, uncertainty handling, and fact-checking
- instruct the model to distinguish between facts, assumptions, and conclusions
- produce outputs that are structured, useful for decision-making, and easy to review

After the master prompt, add a short section called `Model-specific adjustments` explaining what to change for:

- Claude
- Gemini
- Grok

Keep these adjustments short and practical.

## Output

Return your answer in this order:

1. `Slide Deck Outline`
2. `Key Takeaways on Hallucination Prevention`
3. `Master Prompt (RCTIO)`
4. `Model-specific adjustments`

## Quality bar

Be concrete, not generic. Reflect how an investment team would actually use AI tools in a research workflow. Prioritise accuracy, judgement, and practical usefulness over marketing language.
