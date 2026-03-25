## The Exercise: The Logistics RFP Challenge

**The Scenario:**

Your fast food outlet,  *Fastway Burgers* , is looking to replace its logistics supplier. You need to hire a new third-party logistics provider that specializes in carbon-neutral shipping. You have a list of three potential vendors (EcoFreight, GlobalBlue, and TerraLink) and their pricing Tiers. You need a professional analysis to present to the board, such that they agree with your decision.

| RCTIO humanised                                                                                                                                       | Some Context                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Role**: Expertise<br />**Context**: Background<br />**Task**: What<br />**Instructions**: How<br />**Output**: Format | I am the Operations Manager at Fastway.<br />We need to pick a new shipping partner because our current <br />one is too slow and not eco-friendly.<br />I have data on EcoFreight (cheap but slower), GlobalBlue (fast <br />but expensive), and TerraLink (mid-range and carbon-neutral). <br />I need to figure out which one fits our R150,000 monthly budget <br />while keeping our 'Green Initiative' promise. |

## 2. The "Trap" (Common Student Errors)

If students fall into the common pitfalls you mentioned, their prompt will look like this:

| **Component** | **Student Error Example**                                                                   | **Why it's wrong**                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Role**      | "I am an Operations Manager at a tech company..."                                                 | **The AI needs the persona** , not the user's bio. It should be "You are a Procurement Consultant."     |
| **Context**   | "We need to select a shipping partner from three options: EcoFreight, GlobalBlue, and TerraLink." | **This is the Task.**Context should describe the company's values, the industry, or the urgency.              |
| **Task**      | "Compare the three vendors based on price and eco-friendliness."                                  | **This is too vague.**It confuses the "goal" with the "steps" (Instructions).                                 |
| **Output**    | "Give me a comparison of the three shipping companies."                                           | **This just repeats the Task.**It fails to specify if it's a Markdown table, a JSON file, or a SWOT analysis. |

---

## 3. The "Golden" RCTIO Solution

Here is how the prompt *should* be structured to get the best results from the AI:

### **Role**

> **You are a Senior Procurement Expert** specializing in sustainable supply chain management and vendor ROI analysis.

### **Context**

> Fastway Burgersis transitioning to a 100% carbon-neutral supply chain by 2027. We are currently evaluating three 3PL providers to handle our North American distribution. We have a strict monthly budget of R150,000 and a corporate mandate to prioritize "Green" certifications over raw speed.

### **Task**

> **Conduct a comparative vendor analysis** to determine which of the three providers (EcoFreight, GlobalBlue, or TerraLink) offers the best balance of sustainability and cost-efficiency.

### **Instructions**

* Prioritize carbon-neutrality as 60% of the decision weight.
* Flag any vendor that exceeds the R150,000 monthly cap.
* Analyze the trade-offs between "GlobalBlue’s" speed and "TerraLink’s" eco-certifications.
* Do not recommend "EcoFreight" unless their carbon offset program is industry-certified.

### **Output**

> **Provide a Markdown table** comparing the three vendors across four columns: Cost, Sustainability Rating, Delivery Speed, and Recommendation Score (1-10). Follow the table with a **3-sentence Executive Summary** for the Board of Directors.
