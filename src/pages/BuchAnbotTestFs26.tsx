import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import Fs26TopBanner from "@/components/anbot-test-fs26/Fs26TopBanner";
import Fs26Hero from "@/components/anbot-test-fs26/Fs26Hero";
import Fs26Kapitel from "@/components/anbot-test-fs26/Fs26Kapitel";
import Fs26Bonus from "@/components/anbot-test-fs26/Fs26Bonus";
import Fs26Kauf from "@/components/anbot-test-fs26/Fs26Kauf";
import Fs26StickyCTA from "@/components/anbot-test-fs26/Fs26StickyCTA";
import AnbotTestProblemAnker from "@/components/anbot-test/AnbotTestProblemAnker";
import AnbotTestZielgruppe from "@/components/anbot-test/AnbotTestZielgruppe";
import AnbotTestSocialProof from "@/components/anbot-test/AnbotTestSocialProof";
import AnbotTestAutor from "@/components/anbot-test/AnbotTestAutor";
import AnbotTestFAQ from "@/components/anbot-test/AnbotTestFAQ";

const BuchAnbotTestFs26 = () => {
  useBonusPageView("/buch/anbot3g4a3e_fs26", "Buch Angebot Frühlings Special 2026");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mainRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Frühlings Special – Buch nur 9,99 € | Philipp's Biohack</title>
        <meta
          name="description"
          content="Frühlings Special: Das Buch 'Du bist nicht das Problem' für nur 9,99 € statt 34,99 €. Inkl. Online-Bonusbereich. Zeitlich begrenzt."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Fs26TopBanner />
      <Header />

      <main ref={mainRef}>
        <Fs26Hero />
        <AnbotTestProblemAnker />
        <Fs26Kapitel />
        <Fs26Bonus />
        <AnbotTestZielgruppe />
        <AnbotTestSocialProof />
        <AnbotTestAutor />
        <Fs26Kauf />
        <AnbotTestFAQ />
      </main>

      <Fs26StickyCTA />
      <Footer />
    </>
  );
};

export default BuchAnbotTestFs26;
