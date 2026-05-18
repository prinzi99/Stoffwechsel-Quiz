import { useEffect } from "react";
import ProfASalesV3 from "@/components/anbot-prof-a/ProfASalesV3";
import { useBonusPageView } from "@/hooks/useBonusTracking";

const BuchAnbotProfA = () => {
  useBonusPageView("/buch/anbot-prof-a", "Buch Angebot Profil A");

  useEffect(() => {
    document.title = "Profil A: Gestresster Stoffwechsel – Buch + Aktionsplan für 29,99€";
  }, []);

  return <ProfASalesV3 />;
};

export default BuchAnbotProfA;
