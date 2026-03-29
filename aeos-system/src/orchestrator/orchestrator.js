import { ParseAgent } from "../agents/parseAgent.js";
import { DecisionAgent } from "../agents/decisionAgent.js";
import { VerificationAgent } from "../agents/verificationAgent.js";
import { logStep } from "../utils/logger.js";
import { DataAgent } from "../agents/dataAgent.js";
import fs from "fs";
export class Orchestrator {
  constructor() {
    this.parseAgent = new ParseAgent();
    this.decisionAgent = new DecisionAgent();
    this.verificationAgent = new VerificationAgent();
    this.dataAgent = new DataAgent();
    this.agentMap = {
  parse: this.parseAgent,
  data: this.dataAgent,
  decision: this.decisionAgent,
  verification: this.verificationAgent
};
this.workflow = JSON.parse(
  fs.readFileSync(new URL("../workflows/procurement.json", import.meta.url))
);
  }

async run(userInput) {
  try {

    let context = { input: userInput };

    for (const step of this.workflow.steps){
      const agent = this.agentMap[step];

      if (!agent) {
        console.log(`❌ No agent found for step: ${step}`);
        continue;
      }

      console.log(`\n🚀 Running step: ${step}`);

      const result = await agent.run(context);

      logStep(result);

      // update context for next agent
      context = {
        ...context,
        ...result.output
      };
    }

    console.log("\n✅ WORKFLOW COMPLETE");

  } catch (err) {
    console.error("Workflow failed:", err);
  }
}
}