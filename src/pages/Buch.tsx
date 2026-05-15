import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import BuchQuizHinweis from "@/components/buch/BuchQuizHinweis";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import BuchAllgemeinHero from "@/components/buch/BuchAllgemeinHero";
import AnbotTestProblemAnker from "@/components/anbot-test/AnbotTestProblemAnker";
import BuchAllgemeinKapitel from "@/components/buch/BuchAllgemeinKapitel";
import BuchAllgemeinBonus from "@/components/buch/BuchAllgemeinBonus";
import AnbotTestZielgruppe from "@/components/anbot-test/AnbotTestZielgruppe";
import BuchAllgemeinSocialProof from "@/components/buch/BuchAllgemeinSocialProof";
import AnbotTestAutor from "@/components/anbot-test/AnbotTestAutor";
import BuchAllgemeinKauf from "@/components/buch/BuchAllgemeinKauf";
import BuchAllgemeinValueStack from "@/components/buch/BuchAllgemeinValueStack";
import AnbotTestFAQ from "@/components/anbot-test/AnbotTestFAQ";
import BuchAllgemeinStickyCTA from "@/components/buch/BuchAllgemeinStickyCTA";

const Buch = () => {
  useBonusPageView("/buch", "Buch Landingpage");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mainRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Das Buch | Philipp's Biohack</title>
        <meta name="description" content="Warum dein Stoffwechsel blockiert und wie du ihn wieder in Bewegung bringst. Das E-Book von Philipp Prinz." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main ref={mainRef} className="pb-16 md:pb-0">
        <BuchAllgemeinHero />
        <AnbotTestProblemAnker />
        <BuchAllgemeinKapitel />
        <BuchAllgemeinBonus />
        <AnbotTestZielgruppe />
        <BuchAllgemeinSocialProof />
        <AnbotTestAutor />
        <BuchAllgemeinValueStack />
        <BuchAllgemeinKauf />
        <AnbotTestFAQ />

        <BuchQuizHinweis />

        {/* Medizinischer Hinweis */}
        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
              Die Inhalte dienen ausschließlich zu Informationszwecken und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </div>
      </main>

      <BuchAllgemeinStickyCTA />
      <Footer />
    </>
  );
};

export default Buch;
