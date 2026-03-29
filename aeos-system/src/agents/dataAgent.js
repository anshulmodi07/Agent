import { BaseAgent } from "./baseAgent.js";

export class DataAgent extends BaseAgent {
  constructor() {
    super(
  "DataAgent",
  `
You are a data retrieval agent.

Given an item and budget (in INR), return vendors.

STRICT OUTPUT:
{
  "vendors": [
    { "name": "", "price": number }
  ],
  "reasoning": ""
}

Rules:
- Prices MUST be in INR
- Prices should be realistic (30000–70000 for laptops)
- At least 3 vendors
- Some vendors should be within budget
`
);
  }
}