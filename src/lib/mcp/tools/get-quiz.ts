import { defineTool } from "@lovable.dev/mcp-js";
import { quizQuestions, profiles } from "../../quizData";

export default defineTool({
  name: "get_stoffwechsel_quiz",
  title: "Get Stoffwechsel Quiz",
  description:
    "Returns the full 6-question Stoffwechsel-Quiz (questions + answer options with profile mapping) and the three metabolism profile definitions (A: gestresster Stoffwechsel, B: unterversorgter Fettstoffwechsel, C: überangepasster Diät-Stoffwechsel).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({ questions: quizQuestions, profiles }, null, 2),
      },
    ],
    structuredContent: { questions: quizQuestions, profiles },
  }),
});
