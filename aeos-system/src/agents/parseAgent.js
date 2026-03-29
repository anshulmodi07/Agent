import { BaseAgent } from "./baseAgent.js";

export class ParseAgent extends BaseAgent {
  constructor() {
    super(
      "ParseAgent",
      `
You extract structured data from user request.

STRICT OUTPUT:
{
  "item": "",
  "quantity": number,
  "budget": number,
  "reasoning": ""
}
`
    );
  }
}