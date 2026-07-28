import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { calculateResult, profiles, type QuizScores } from "../../quizData";

export default defineTool({
  name: "evaluate_stoffwechsel_quiz",
  title: "Evaluate Stoffwechsel Quiz",
  description:
    "Given the counts of A/B/C answers picked in the Stoffwechsel-Quiz, determines the resulting metabolism profile (A, B, or C) and returns its full description. Tiebreaker priority: C > A > B.",
  inputSchema: {
    a: z.number().int().min(0).describe("Number of profile A answers picked."),
    b: z.number().int().min(0).describe("Number of profile B answers picked."),
    c: z.number().int().min(0).describe("Number of profile C answers picked."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ a, b, c }) => {
    const scores: QuizScores = { A: a, B: b, C: c };
    const winner = calculateResult(scores);
    const profile = profiles[winner];
    return {
      content: [
        {
          type: "text",
          text: `Profil ${winner} – ${profile.name}\n\n${profile.fullResult.description}`,
        },
      ],
      structuredContent: { profileId: winner, profile },
    };
  },
});
