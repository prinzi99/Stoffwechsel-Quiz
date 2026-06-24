import { useEffect } from "react";
import AnbotBSales from "@/components/anbot-b/AnbotBSales";
import { useBonusPageView } from "@/hooks/useBonusTracking";

const AnbotB = () => {
  useBonusPageView("/anbot-b", "Anbot B Aktionsplan");

  useEffect(() => {
    document.title = "Aktionsplan für gestressten Stoffwechsel – 4,99€";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Dein Körper ist nicht kaputt – er ist im Überlebensmodus. Hol dir deinen personalisierten Aktionsplan für 4,99€.";
    if (desc) desc.setAttribute("content", content);
  }, []);

  return <AnbotBSales />;
};

export default AnbotB;
