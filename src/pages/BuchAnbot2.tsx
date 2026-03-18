import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AngebotStickyCTA from "@/components/angebot/AngebotStickyCTA";
import Anbot2Content from "@/components/angebot2/Anbot2Content";

const BuchAnbot2 = () => {
  useBonusPageView("/buch/anbot3g4a3e-2", "Buch Angebot V2");

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

      <main className="pb-16 md:pb-0">
        <Anbot2Content />

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

export default BuchAnbot2;
