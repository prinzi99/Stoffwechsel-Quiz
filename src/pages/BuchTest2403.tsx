import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AngebotStickyCTA from "@/components/angebot/AngebotStickyCTA";
import Test2403Hero from "@/components/angebot2/Test2403Hero";
import Test2403Body from "@/components/angebot2/Test2403Body";

const BuchTest2403 = () => {
  useBonusPageView("/buch/test2403", "Buch Angebot Test 2403");
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll past the header so the headline is at the top
    mainRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Sonderangebot | Philipp's Biohack</title>
        <meta
          name="description"
          content="Exklusives Angebot für Quiz-Teilnehmer: Erfahre, warum Dein Stoffwechsel blockiert und wie Du ihn wieder in Bewegung bringst."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main className="pb-16 md:pb-0" id="test2403-main">
        <Test2403Hero />
        <Test2403Body />

        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
              Die Inhalte dienen ausschließlich zu Informationszwecken und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-muted text-muted-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/impressum" className="hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>

      <AngebotStickyCTA />
    </>
  );
};

export default BuchTest2403;
