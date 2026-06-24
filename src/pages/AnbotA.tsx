import { useEffect } from "react";
import AnbotASales from "@/components/anbot-a/AnbotASales";
import { useBonusPageView } from "@/hooks/useBonusTracking";

let digistorePromoLoaded = false;

const AnbotA = () => {
  useBonusPageView("/anbot-a", "Anbot A Aktionsplan");

  useEffect(() => {
    document.title = "Aktionsplan für gestressten Stoffwechsel – 4,99€";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Dein Körper ist nicht kaputt – er ist im Überlebensmodus. Hol dir deinen personalisierten Aktionsplan für 4,99€.";
    if (desc) desc.setAttribute("content", content);

    if (digistorePromoLoaded) return;
    digistorePromoLoaded = true;

    const dsScript = document.createElement("script");
    dsScript.src = "https://www.digistore24-scripts.com/service/digistore.js";
    dsScript.async = true;
    dsScript.onload = () => {
      const promoScript = document.createElement("script");
      promoScript.type = "text/javascript";
      promoScript.text = `digistorePromocode({ "product_id": 705642, "adjust_domain": true });`;
      document.body.appendChild(promoScript);
    };
    document.head.appendChild(dsScript);
  }, []);

  return <AnbotASales />;
};

export default AnbotA;
