import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AngebotStickyCTA from "@/components/angebot/AngebotStickyCTA";
import ProfCHero from "@/components/anbot-prof-c/ProfCHero";
import ProfCProblemAnker from "@/components/anbot-prof-c/ProfCProblemAnker";
import ProfCKapitel from "@/components/anbot-prof-c/ProfCKapitel";
import ProfCBonus from "@/components/anbot-prof-c/ProfCBonus";
import ProfCZielgruppe from "@/components/anbot-prof-c/ProfCZielgruppe";
import ProfCSocialProof from "@/components/anbot-prof-c/ProfCSocialProof";
import ProfCAutor from "@/components/anbot-prof-c/ProfCAutor";
import ProfCKauf from "@/components/anbot-prof-c/ProfCKauf";
import ProfCFAQ from "@/components/anbot-prof-c/ProfCFAQ";

const BuchAnbotProfC = () => {
  useBonusPageView("/buch/anbot-prof-c", "Buch Angebot Prof C");
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
        <ProfCHero />
        <ProfCProblemAnker />
        <ProfCKapitel />
        <ProfCBonus />
        <ProfCZielgruppe />
        <ProfCSocialProof />
        <ProfCAutor />
        <ProfCKauf />
        <ProfCFAQ />
      </main>

      <AngebotStickyCTA />
      <Footer />
    </>
  );
};

export default BuchAnbotProfC;
