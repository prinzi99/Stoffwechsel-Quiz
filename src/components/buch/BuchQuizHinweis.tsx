import { useMemo } from "react";
import { Button } from "@/components/ui/button";

import { getUtmParams } from "@/hooks/useUtmParams";

const BuchQuizHinweis = () => {
  const quizUrl = useMemo(() => {
    const utm = getUtmParams();
    const hasUtm = Object.values(utm).some(v => v);
    if (hasUtm) {
      const params = new URLSearchParams();
      Object.entries(utm).forEach(([k, v]) => { if (v) params.set(k, v as string); });
      return `https://stoffwechsel.philippsbiohack.de/?${params.toString()}`;
    }
    return "https://stoffwechsel.philippsbiohack.de/?utm_source=buchvkseite";
  }, []);

  return (
    <section className="py-10 md:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Du willst zuerst wissen, welches Muster bei Dir im Vordergrund steht?
          </h2>

          <div className="text-base md:text-lg text-foreground/80 leading-relaxed space-y-2 mb-6">
            <p>Dann mach zuerst das Stoffwechsel-Quiz.</p>
            <p>
              Dort bekommst Du eine erste Einordnung, was Deinen Stoffwechsel aktuell am ehesten blockiert.
            </p>
            <p>
              Und wenn Du danach tiefer einsteigen willst, kannst Du Dir das Buch über das Quiz sogar zum Sonderpreis sichern.
            </p>
          </div>

          <Button
            variant="ctaSecondary"
            size="lg"
            asChild
            className="w-full sm:w-auto"
          >
            <a href={quizUrl} target="_blank" rel="noopener noreferrer">
              Stoffwechsel-Quiz starten
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-2.5">
            Erst verstehen. Dann gezielt entscheiden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuchQuizHinweis;
