import { BaseAgent } from "./baseAgent.js";

export class VerificationAgent extends BaseAgent {
  constructor() {
    super(
      "VerificationAgent",
      `
You verify if decision is valid.

Check:
- price <= budget

STRICT OUTPUT:
{
  "valid": true,
  "issue": "",
  "reasoning": ""
}
`
    );
  }
}