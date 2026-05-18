import { useEffect } from "react";
import ProfBSalesV3 from "@/components/anbot-prof-b/ProfBSalesV3";
import { useBonusPageView } from "@/hooks/useBonusTracking";

const BuchAnbotProfB = () => {
  useBonusPageView("/buch/anbot-prof-b", "Buch Angebot Profil B");

  useEffect(() => {
    document.title = "Profil B: Unterversorgter Stoffwechsel – Buch + Aktionsplan für 29,99€";
  }, []);

  return <ProfBSalesV3 />;
};

export default BuchAnbotProfB;
