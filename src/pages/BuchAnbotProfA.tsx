import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AngebotStickyCTA from "@/components/angebot/AngebotStickyCTA";
import ProfAHero from "@/components/anbot-prof-a/ProfAHero";
import ProfAProblemAnker from "@/components/anbot-prof-a/ProfAProblemAnker";
import ProfAKapitel from "@/components/anbot-prof-a/ProfAKapitel";
import ProfABonus from "@/components/anbot-prof-a/ProfABonus";
import ProfAZielgruppe from "@/components/anbot-prof-a/ProfAZielgruppe";
import ProfASocialProof from "@/components/anbot-prof-a/ProfASocialProof";
import ProfAAutor from "@/components/anbot-prof-a/ProfAAutor";
import ProfAKauf from "@/components/anbot-prof-a/ProfAKauf";
import ProfAFAQ from "@/components/anbot-prof-a/ProfAFAQ";

const BuchAnbotProfA = () => {
  useBonusPageView("/buch/anbot-prof-a", "Buch Angebot Prof A");
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
        <ProfAHero />
        <ProfAProblemAnker />
        <ProfAKapitel />
        <ProfABonus />
        <ProfAZielgruppe />
        <ProfASocialProof />
        <ProfAAutor />
        <ProfAKauf />
        <ProfAFAQ />
      </main>

      <AngebotStickyCTA />
      <Footer />
    </>
  );
};

export default BuchAnbotProfA;
