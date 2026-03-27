import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AnbotTestHero from "@/components/anbot-test/AnbotTestHero";
import AnbotTestProblemAnker from "@/components/anbot-test/AnbotTestProblemAnker";
import AnbotTestKapitel from "@/components/anbot-test/AnbotTestKapitel";
import AnbotTestBonus from "@/components/anbot-test/AnbotTestBonus";
import AnbotTestZielgruppe from "@/components/anbot-test/AnbotTestZielgruppe";
import AnbotTestSocialProof from "@/components/anbot-test/AnbotTestSocialProof";
import AnbotTestAutor from "@/components/anbot-test/AnbotTestAutor";
import AnbotTestKauf from "@/components/anbot-test/AnbotTestKauf";
import AnbotTestFAQ from "@/components/anbot-test/AnbotTestFAQ";

const BuchAnbotTest = () => {
  useBonusPageView("/buch/anbot-test", "Buch Angebot Test");
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
        <AnbotTestHero />
        <AnbotTestProblemAnker />
        <AnbotTestKapitel />
        <AnbotTestBonus />
        <AnbotTestZielgruppe />
        <AnbotTestSocialProof />
        <AnbotTestAutor />
        <AnbotTestKauf />
        <AnbotTestFAQ />
      </main>

      <Footer />
    </>
  );
};

export default BuchAnbotTest;
