import { defineMcp } from "@lovable.dev/mcp-js";
import getQuiz from "./tools/get-quiz";
import evaluateQuiz from "./tools/evaluate-quiz";
import calorieCalculator from "./tools/calorie-calculator";
import metabolismCheck from "./tools/metabolism-check";

export default defineMcp({
  name: "philipps-biohack-mcp",
  title: "Philipp's Biohack – Stoffwechsel Tools",
  version: "0.1.0",
  instructions:
    "Public tools from Philipp's Biohack. Use `get_stoffwechsel_quiz` to fetch the 6-question metabolism quiz and profile definitions, `evaluate_stoffwechsel_quiz` to determine the resulting profile from A/B/C answer counts, `calorie_calculator` for BMR/TDEE/macros using the same formulas as the site, and `metabolism_reset_check` to score the 8-question Reset Check.",
  tools: [getQuiz, evaluateQuiz, calorieCalculator, metabolismCheck],
});
