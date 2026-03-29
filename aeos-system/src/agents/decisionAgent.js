import { BaseAgent } from "./baseAgent.js";

export class DecisionAgent extends BaseAgent {
  constructor() {
    super(
      "DecisionAgent",
      `
You choose best vendor based on price and budget.

INPUT will contain:
- vendors list
- budget

STRICT OUTPUT:
{
  "selectedVendor": "",
  "price": number,
  "reasoning": ""
}
`
    );
  }
}