import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import AngebotHero from "@/components/angebot/AngebotHero";
import AngebotDenken from "@/components/angebot/AngebotDenken";
import AngebotAnders from "@/components/angebot/AngebotAnders";
import AngebotMuster from "@/components/angebot/AngebotMuster";
import AngebotBuchZeigt from "@/components/angebot/AngebotBuchZeigt";
import AngebotInhalt from "@/components/angebot/AngebotInhalt";
import AngebotZielgruppe from "@/components/angebot/AngebotZielgruppe";
import AngebotNicht from "@/components/angebot/AngebotNicht";
import AngebotPreisbox from "@/components/angebot/AngebotPreisbox";
import AngebotFAQ from "@/components/angebot/AngebotFAQ";
import AngebotAbschluss from "@/components/angebot/AngebotAbschluss";
import AngebotStickyCTA from "@/components/angebot/AngebotStickyCTA";

const BuchAnbot = () => {
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
        <AngebotHero />
        <AngebotDenken />
        <AngebotAnders />
        <AngebotMuster />
        <AngebotBuchZeigt />
        <AngebotInhalt />
        <AngebotZielgruppe />
        <AngebotNicht />
        <AngebotPreisbox />
        <AngebotFAQ />
        <AngebotAbschluss />

        {/* Medizinischer Hinweis */}
        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
              Die Inhalte dienen ausschließlich zu Informationszwecken und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </div>
      </main>

      {/* Schlichter Footer */}
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

export default BuchAnbot;
