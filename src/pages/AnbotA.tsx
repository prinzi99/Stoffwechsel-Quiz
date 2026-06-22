import { useEffect } from "react";
import AnbotASales from "@/components/anbot-a/AnbotASales";
import { useBonusPageView } from "@/hooks/useBonusTracking";

const AnbotA = () => {
  useBonusPageView("/anbot-a", "Anbot A Aktionsplan");

  useEffect(() => {
    document.title = "Aktionsplan für gestressten Stoffwechsel – 4,99€";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Dein Körper ist nicht kaputt – er ist im Überlebensmodus. Hol dir deinen personalisierten Aktionsplan für 4,99€.";
    if (desc) desc.setAttribute("content", content);
  }, []);

  return <AnbotASales />;
};

export default AnbotA;
