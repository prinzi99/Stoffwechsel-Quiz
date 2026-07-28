import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { evaluateCheck, questions, levelData } from "@/lib/metabolicCheck";

export default defineTool({
  name: "metabolism_reset_check",
  title: "Stoffwechsel-Reset Check",
  description:
    "Evaluates the 8-question Stoffwechsel-Reset Check. Pass an array of 8 booleans (index-aligned with the questions). Returns total score, level (0-2), per-area breakdown, and the matching recommendation.",
  inputSchema: {
    answers: z
      .array(z.boolean())
      .length(8)
      .describe("Array of exactly 8 yes/no answers, one per question in the fixed order."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ answers }) => {
    const map: Record<number, boolean> = {};
    answers.forEach((v, i) => (map[i] = v));
    const result = evaluateCheck(map);
    const recommendation = levelData[result.level];
    return {
      content: [
        {
          type: "text",
          text: `${recommendation.title}\n\n${recommendation.text}`,
        },
      ],
      structuredContent: { ...result, questions, recommendation },
    };
  },
});
