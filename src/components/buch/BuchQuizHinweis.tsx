import { useMemo } from "react";
import { ArrowRight } from "lucide-react";

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
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-primary to-[hsl(330,85%,30%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm mb-6">
            <span aria-hidden="true">🎯</span>
            Exklusiv für Quizteilnehmer
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Hol dir deinen persönlichen Stoffwechsel-Aktionsplan
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
            Mach das kostenlose Stoffwechsel-Quiz und erfahre, welches Muster dich blockiert – plus einen individuellen Plan, der zu deinem Körper passt.
          </p>

          {/* Preisvergleich-Box */}
          <div className="bg-white rounded-xl shadow-xl p-6 mb-8 text-left md:text-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8">
              {/* Normalpreis */}
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Buch Normalpreis</span>
                <span className="text-2xl font-bold text-muted-foreground line-through decoration-2 decoration-foreground/40">
                  59,99 €
                </span>
              </div>

              {/* Divider on desktop */}
              <div className="hidden md:block w-px h-12 bg-border" />

              {/* Quiz-Preis */}
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Dein Quiz-Preis</span>
                <span className="text-3xl md:text-4xl font-extrabold text-primary">
                  29,99 €
                </span>
              </div>
            </div>

            {/* Ersparnis */}
            <p className="mt-4 text-base font-semibold text-emerald-600">
              Du sparst 30 € (50 %)
            </p>
          </div>

          {/* CTA-Button */}
          <a
            href={quizUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-primary text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] animate-pulse-soft"
          >
            Jetzt Quiz starten & Aktionsplan sichern
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>

          {/* Vertrauenstext */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-6 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <span aria-hidden="true">✓</span> Kostenlos
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">✓</span> Dauert nur 2 Minuten
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">✓</span> Sofort dein Ergebnis
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuchQuizHinweis;
