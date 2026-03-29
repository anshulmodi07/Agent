import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export class BaseAgent {
  constructor(name, systemPrompt) {
    this.name = name;
    this.systemPrompt = systemPrompt;

    // ✅ USE THIS MODEL
    this.model = genAI.getGenerativeModel({
      model:  "gemini-2.5-flash"
    });
  }

  async run(input) {
    try {
      const prompt = `
${this.systemPrompt}

INPUT:
${JSON.stringify(input)}

IMPORTANT:
- Respond ONLY in JSON
- Include reasoning
`;

      const result = await this.model.generateContent(prompt);
      const text = result.response.text();

      // Clean JSON
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      const json = text.substring(start, end + 1);

      const output = JSON.parse(json);

      return {
        agent: this.name,
        input,
        output,
        reasoning: output.reasoning || "No reasoning",
        timestamp: new Date().toISOString()
      };

    } catch (err) {
      console.error(`${this.name} ERROR:`, err);
      throw err;
    }
  }
}