# Demo Script: Building a Deep Research Prompt Generator Skill

> **Module:** Skill Creation
> **Duration:** ~15 minutes
> **Prerequisites:** Claude Pro/Team account with skill creator access
> **Deliverable:** A working skill that generates optimised deep research prompts

---

## 1. Introduction — What Are Skills and Why They Matter (30 seconds)

[SAY]
> "Before we build something, let me explain what we're working with. **Skills** are a way to teach Claude new capabilities. Think of them as reusable instruction sets — you create them once, and then Claude can use them in any conversation.
>
> A skill is essentially a folder containing a `SKILL.md` file with metadata and instructions. It can also include scripts, reference materials, and templates. The format is open — you can find the specification at agentskills.io.
>
> Today we're going to build a skill that's directly useful for your work: a **Deep Research Prompt Generator**. This skill will help you write better prompts for Claude's deep research mode — prompts that are specifically engineered to exploit what Claude does better than Gemini or ChatGPT."

---

## 2. Live Demo Setup — Opening the Skill Creator (1 minute)

[ACTION]
Open Claude.ai in your browser. Make sure you're logged in with a Pro or Team account.

[SAY]
> "Let's open the skill creator. There are two ways to create a skill in Claude."

[ACTION]
**Option A — Via the interface:**
1. Click your profile icon (bottom-left)
2. Navigate to **Settings** → **Skills**
3. Click **"Create a new skill"**

**Option B — Via chat:**
1. In any conversation, type: `/skill-creator`
2. Claude will launch the interactive skill creation workflow

[SAY]
> "I'm going to use the skill creator tool, which walks us through each field step by step. This is the recommended approach because it ensures we don't miss any attributes."

[ACTION]
Launch the skill creator using either method above.

---

## 3. Step-by-Step Walkthrough — Building the Skill (8 minutes)

### Step 3.1: Name and Description

[SAY]
> "First, we need to give our skill a name and description. The name is what identifies it, and the description tells Claude when this skill is relevant. Think of the description as a trigger condition."

[ACTION]
When prompted for the **name**, type:

```
Deep Research Prompt Generator
```

[ACTION]
When prompted for the **description**, type:

```
Generates optimised deep research prompts tailored specifically for Claude's deep research mode, exploiting Claude's unique strengths in reasoning, synthesis, and nuanced analysis.
```

[SAY]
> "Notice that the description isn't just 'makes research prompts'. It's specific about **what makes this different** — it's tailored for Claude's strengths. This specificity helps Claude understand when to activate the skill."

---

### Step 3.2: Trigger Conditions

[SAY]
> "Next, we define when this skill should activate. These are the trigger conditions — the phrases or contexts that tell Claude to use this skill."

[ACTION]
When prompted for **trigger conditions**, type:

```
When the user asks to create a deep research prompt, needs help formulating a research question, says "research prompt", "deep research", "investigate", "research brief", or wants to explore a topic in depth using Claude's deep research mode.
```

[SAY]
> "We've included both explicit triggers — like the phrase 'deep research' — and intent-based triggers — like 'wants to explore a topic in depth'. This gives us broad but relevant activation."

---

### Step 3.3: Core Instructions

[SAY]
> "Now the heart of the skill — the instructions. This is where we encode the expertise. I'm going to paste in a carefully designed instruction set that does something very specific: it **engineers Claude's deep research prompts to exploit capabilities that Gemini and ChatGPT don't match**."

[ACTION]
When prompted for **instructions**, paste the following:

```
You are an expert research prompt engineer specialising in crafting prompts that maximise the effectiveness of Claude's deep research mode. You understand Claude's unique cognitive architecture and design prompts that exploit its specific strengths over competing models.

When the user provides a research topic, domain, or question, generate a comprehensive deep research prompt using these Claude-specific principles:

1. EXTENDED THINKING ACTIVATION
- Break complex questions into 4-6 layered sub-questions that activate multi-step reasoning chains
- Request "think step by step through each dimension before synthesising"
- Ask for reasoning chains to be made visible, not just conclusions

2. CONFIDENCE CALIBRATION
- Include mandatory confidence ratings (High/Medium/Low) for each major finding
- Require distinction between: established fact, emerging consensus, informed speculation, unknown
- Instruct: "Where experts disagree, present the strongest version of each position"

3. SOURCE TRIANGULATION
- Require cross-referencing across at least 3 independent source types (academic, industry, regulatory, journalistic)
- Request explicit notation when a claim rests on a single source vs. corroborated evidence
- Ask for source quality assessment alongside findings

4. STRUCTURED ANALYTICAL FRAMEWORKS
- Embed appropriate named frameworks (PESTEL, Porter's Five Forces, SWOT, scenario planning, DuPont analysis) based on the domain
- Instruct to apply rigorously and note where frameworks break down

5. NUANCE PRESERVATION
- Instruct against false dichotomies and oversimplification
- Request acknowledgement of trade-offs, edge cases, and minority viewpoints
- Include: "Identify the 3-5 things a non-expert would miss about this topic"

Generate prompts using this structure:
- Research Brief title
- Context & Motivation (why this research matters)
- Primary Research Question (single, scoped)
- Sub-Questions to Investigate (4-6 dimensions)
- Analytical Framework (named, domain-appropriate)
- Source & Evidence Requirements (triangulation instructions)
- Confidence & Uncertainty Protocol (calibration instructions)
- Output Structure (numbered sections with executive summary)
- Quality Criteria (meta-instructions for depth)
```

[SAY]
> "Let me highlight **why** this instruction set is designed the way it is. There are five Claude-specific principles baked in:
>
> 1. **Extended thinking activation** — layered questions trigger Claude's unique ability to reason through multiple dimensions before synthesising. Gemini and ChatGPT tend to search-then-summarise instead.
>
> 2. **Confidence calibration** — Claude is genuinely better calibrated about uncertainty. ChatGPT in particular tends to present speculative claims with false confidence. Our prompts force the uncertainty to be visible.
>
> 3. **Source triangulation** — Claude excels at cross-referencing and noting evidence quality. This makes the analysis more reliable.
>
> 4. **Framework rigour** — Claude applies named analytical frameworks with genuine depth, not just as organising headers. This is a measurable advantage over both competitors.
>
> 5. **Nuance preservation** — Claude's willingness to hold contradictions and present trade-offs is one of its strongest differentiators."

---

### Step 3.4: Examples

[SAY]
> "Good skills include examples. These show Claude what the expected input and output looks like, which dramatically improves consistency."

[ACTION]
When prompted for **examples**, paste:

```
Example input: "I need to research the impact of AI on the South African financial services sector"

Example output: A structured research prompt with:
- Title: "Research Brief: AI Transformation in South African Financial Services"
- Context anchored to a specific decision (investment evaluation)
- 5 sub-questions covering: adoption landscape, competitive dynamics, regulatory environment, talent/infrastructure, risk dimensions
- Analytical framework: Porter's Five Forces + PESTEL
- Source requirements specifying SA Reserve Bank, FSCA, McKinsey/BCG, academic research, business journalism
- Confidence protocol with High/Medium/Low ratings
- Structured output with executive summary, detailed analysis, synthesis, knowledge gaps, and next steps
- Quality criteria including "identify the 3-5 things an investor without SA financial services expertise would most likely miss"
```

---

### Step 3.5: Constraints

[SAY]
> "Constraints tell the skill what NOT to do. These are guardrails."

[ACTION]
When prompted for **constraints**, type:

```
- Never generate generic prompts that would work equally well on any LLM — every prompt must leverage Claude's specific strengths
- Never omit the confidence calibration and uncertainty protocol sections
- Always include at least one analytical framework appropriate to the domain
- Always request structured output with an executive summary
- Always include source triangulation requirements
- If the topic is too broad, suggest a scoped-down version before generating
- Adapt sub-questions and frameworks to the specific domain
```

[SAY]
> "The first constraint is the most important one: **never generate a generic prompt**. The whole point of this skill is that it produces prompts deliberately designed for Claude. If it works equally well on Gemini, we've failed."

---

### Step 3.6: Output Format

[SAY]
> "Finally, we specify how the skill should format its output."

[ACTION]
When prompted for **output format**, type:

```
Output the generated prompt in a clean markdown code block, ready for the user to copy and paste directly into Claude's deep research mode. Precede the prompt with a 2-3 sentence explanation of why it's structured the way it is, highlighting which Claude-specific capabilities it activates.
```

[ACTION]
Save/confirm the skill creation.

[SAY]
> "And that's it — our skill is created. Let's see the full folder structure that was generated."

[ACTION]
Show the skill folder structure:

```
deep-research-prompt-generator/
├── SKILL.md          # Core skill definition (what we just built)
├── references.md     # Documentation and further reading
├── assets/
│   ├── example-prompts.md              # Full example prompts ready to use
│   └── claude-advantages-cheatsheet.md # Quick-reference competitive comparison
└── demo-script.md    # This presenter script
```

---

## 4. The Completed Skill Definition

[SAY]
> "Here's the complete `SKILL.md` file that we just created. This is the full skill definition — you can copy this directly."

[ACTION]
Display the complete SKILL.md content (provided separately in the skill package).

[SAY]
> "This file contains everything Claude needs: the name, description, trigger conditions, instructions with all five Claude-specific principles, examples, constraints, and output format. It's a complete, self-contained skill."

---

## 5. Test the Skill — Live Validation (3 minutes)

[SAY]
> "Now let's test it live. I'll give Claude a research topic and we'll see if the skill activates and produces a properly structured prompt."

[ACTION]
In a new Claude conversation (or the same one), type:

```
I need a deep research prompt to investigate the competitive landscape for Famous Brands in South Africa, focusing on investment implications.
```

[SAY]
> "Watch what happens. The skill should trigger on 'deep research prompt' and 'investigate', and it should generate a structured prompt with all the elements we defined."

[ACTION]
Wait for Claude to generate the research prompt. As it appears, narrate:

[SAY]
> "Look at the output. You should see:
>
> - A **brief explanation** of why the prompt is structured this way — that's our output format instruction at work
> - A **Research Brief title** and **Context & Motivation** section
> - A **Primary Research Question** — single and scoped
> - **Sub-Questions** — notice they're domain-specific, not generic. For Famous Brands, they cover QSR market share, consumer behaviour shifts, supply chain pressures, and strategic risks
> - An **Analytical Framework** — probably Porter's Five Forces given the competitive landscape focus
> - **Source & Evidence Requirements** — with triangulation instructions
> - The **Confidence & Uncertainty Protocol** — this is the section that most competitors' prompts completely lack
> - A **structured output format** with executive summary first
>
> This prompt is now ready to paste into Claude's deep research mode. It will produce a dramatically better research output than just asking 'research Famous Brands in South Africa'."

[ACTION]
If time permits, copy the generated prompt and paste it into Claude's deep research mode to show the difference in output quality.

---

## 6. Audience Takeaway — Key Points and Next Steps (1 minute)

[SAY]
> "Let me wrap up with the key takeaways:
>
> **1. Skills are reusable expertise.** You built this once, and now every time you or your team types 'deep research prompt', Claude knows exactly how to help. It's like training a new analyst — except you only have to do it once.
>
> **2. Prompt engineering matters more than you think.** The difference between 'research X' and a properly structured research brief with confidence calibration, source triangulation, and analytical frameworks is the difference between a Wikipedia summary and an analyst-grade report.
>
> **3. Claude has specific strengths — exploit them.** Extended thinking, calibrated uncertainty, nuance preservation, and rigorous framework application are genuine differentiators. Our skill is designed to activate these capabilities deliberately.
>
> **4. You can build your own skills for anything.** Investor memo formatting, due diligence checklists, risk assessment frameworks — anything where you have repeatable expertise that you want Claude to apply consistently.
>
> For next steps, I'd encourage you to:
> - Use the skill creator to build a skill for a workflow you repeat frequently
> - Browse agentskills.io for community examples and inspiration
> - Share your skills with your team — they're just files, so they're easy to distribute
>
> The complete skill package including the SKILL.md, example prompts, competitive cheat sheet, and reference materials will be shared with you after this session."

---

## Appendix: Presenter Notes

### Timing Guide
| Section | Duration | Cumulative |
|---|---|---|
| Introduction | 0:30 | 0:30 |
| Demo Setup | 1:00 | 1:30 |
| Step-by-Step Build | 8:00 | 9:30 |
| Completed Definition | 1:00 | 10:30 |
| Live Test | 3:00 | 13:30 |
| Takeaway | 1:00 | 14:30 |

### Common Questions to Prepare For

**Q: Can I share skills with my team?**
A: Yes — skills are just folders with markdown files. You can share them via email, Slack, or a shared drive. Anyone can add them to their Claude setup.

**Q: Do skills work in Claude Code as well?**
A: Yes. Skills work across Claude.ai and Claude Code. In Claude Code, skills are stored in your project directory and can be invoked via slash commands.

**Q: How is this different from just saving a good prompt?**
A: Three ways: (1) Skills trigger automatically based on context — you don't have to remember to use them. (2) Skills include metadata like constraints and examples that make them more reliable. (3) Skills can include supporting assets like templates and reference materials.

**Q: Can Claude deep research access the internet?**
A: Yes, Claude's deep research mode can search the web and access online sources. The skill's source triangulation instructions help Claude use this capability more effectively by cross-referencing across different source types.

**Q: Why not just use Gemini Deep Research since it has better Google Search integration?**
A: Gemini excels at breadth of web sources, but Claude excels at analytical depth, nuance, and uncertainty calibration. For investment-grade research where you need rigorous analysis — not just information aggregation — Claude's strengths are more valuable. The right tool depends on the task; our cheat sheet covers when to use which.

### Backup Plan
If the skill creator tool is unavailable during the live demo:
1. Have the complete SKILL.md file ready to show
2. Walk through each section of the file explaining the structure
3. Create the skill manually by pasting the SKILL.md content
4. Proceed to the testing step as normal
