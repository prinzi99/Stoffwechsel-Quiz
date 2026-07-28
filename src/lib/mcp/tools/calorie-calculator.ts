import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { calculateAll } from "@/lib/calorieCalculator";

export default defineTool({
  name: "calorie_calculator",
  title: "Kalorienrechner (Mifflin-St Jeor + Harris-Benedict)",
  description:
    "Calculates BMI, BMR (average of Mifflin-St Jeor and Harris-Benedict), TDEE, target calories, and macro split (protein / fat / carbs) for the given person. Same formulas used by Philipp's Biohack Kalorienrechner.",
  inputSchema: {
    gender: z.enum(["male", "female"]),
    age: z.number().int().min(10).max(120),
    weight: z.number().min(20).max(400).describe("Body weight in kg."),
    height: z.number().min(100).max(250).describe("Height in cm."),
    targetWeight: z.number().min(20).max(400).optional()
      .describe("Optional target weight in kg. Only used for protein calculation when BMI >= 30."),
    activityFactor: z.number().min(1).max(2.5)
      .describe("PAL activity factor, e.g. 1.2 sedentary, 1.375 light, 1.55 moderate, 1.725 heavy."),
    goal: z.enum(["maintenance", "moderate", "aggressive"]),
    proteinFactor: z.enum(["2.0", "2.2", "2.4"]).describe("Protein grams per kg of reference weight.")
      .transform((v) => Number(v) as 2.0 | 2.2 | 2.4),
    fatMode: z.enum(["minimum", "standard"]),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (input) => {
    const result = calculateAll(input);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { ...result },
    };
  },
});
