import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AngebotStickyCTA from "@/components/angebot/AngebotStickyCTA";
import ProfBHero from "@/components/anbot-prof-b/ProfBHero";
import ProfBProblemAnker from "@/components/anbot-prof-b/ProfBProblemAnker";
import ProfBKapitel from "@/components/anbot-prof-b/ProfBKapitel";
import ProfBBonus from "@/components/anbot-prof-b/ProfBBonus";
import ProfBZielgruppe from "@/components/anbot-prof-b/ProfBZielgruppe";
import ProfBSocialProof from "@/components/anbot-prof-b/ProfBSocialProof";
import ProfBAutor from "@/components/anbot-prof-b/ProfBAutor";
import ProfBKauf from "@/components/anbot-prof-b/ProfBKauf";
import ProfBFAQ from "@/components/anbot-prof-b/ProfBFAQ";

const BuchAnbotProfB = () => {
  useBonusPageView("/buch/anbot-prof-b", "Buch Angebot Prof B");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mainRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Jetzt sichern | Philipp's Biohack</title>
        <meta
          name="description"
          content="Erfahre, warum dein Stoffwechsel blockiert und wie du ihn mit einem System statt einer Diät wieder in Bewegung bringst. E-Book inkl. Bonusbereich."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main ref={mainRef}>
        <ProfBHero />
        <ProfBProblemAnker />
        <ProfBKapitel />
        <ProfBBonus />
        <ProfBZielgruppe />
        <ProfBSocialProof />
        <ProfBAutor />
        <ProfBKauf />
        <ProfBFAQ />
      </main>

      <AngebotStickyCTA />
      <Footer />
    </>
  );
};

export default BuchAnbotProfB;
