import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const included = [
  'E-Book \u201EDu bist nicht das Problem\u201C',
  "Sofortiger digitaler Zugriff",
  "Stoffwechsel-Reset-Check",
  "Kalorien-Startpunkt-Rechner",
  "Checklisten & Vorlagen",
  "Biohacking-Tools",
];

const AngebotPreisbox = () => {
  return (
    <section id="kaufen" className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-10 text-center shadow-lg">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Exklusiver Sonderpreis für Quiz-Teilnehmer
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-snug">
              Heute erhältst Du das komplette Buch inklusive Bonusbereich für nur 19,99 €
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-xl text-muted-foreground/50 line-through">34,99 €</span>
              <span className="text-4xl md:text-5xl font-bold text-foreground">19,99 €</span>
            </div>

            <div className="text-left space-y-2.5 mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="xl" asChild className="w-full mb-4">
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Jetzt Buch &amp; Bonus sichern
              </a>
            </Button>

            <p className="text-sm text-muted-foreground mb-1">
              Direkt nach dem Kauf verfügbar.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Dieses Angebot ist speziell für Teilnehmer des Stoffwechsel-Quiz gedacht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotPreisbox;
