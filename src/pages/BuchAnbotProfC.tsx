import { useEffect } from "react";
import ProfCSalesV3 from "@/components/anbot-prof-c/ProfCSalesV3";
import { useBonusPageView } from "@/hooks/useBonusTracking";

const BuchAnbotProfC = () => {
  useBonusPageView("/buch/anbot-prof-c", "Buch Angebot Profil C");

  useEffect(() => {
    document.title = "Profil C: Überangepasster Stoffwechsel – Buch + Aktionsplan für 29,99€";
  }, []);

  return <ProfCSalesV3 />;
};

export default BuchAnbotProfC;
