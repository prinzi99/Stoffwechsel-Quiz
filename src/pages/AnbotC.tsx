import { useEffect } from "react";
import AnbotCSales from "@/components/anbot-c/AnbotCSales";
import { useBonusPageView } from "@/hooks/useBonusTracking";

const AnbotC = () => {
  useBonusPageView("/anbot-c", "Anbot C Aktionsplan");

  useEffect(() => {
    document.title = "Aktionsplan für gestressten Stoffwechsel – 4,99€";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Dein Körper ist nicht kaputt – er ist im Überlebensmodus. Hol dir deinen personalisierten Aktionsplan für 4,99€.";
    if (desc) desc.setAttribute("content", content);
  }, []);

  return <AnbotCSales />;
};

export default AnbotC;
