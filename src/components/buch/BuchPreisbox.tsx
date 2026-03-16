import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=promo";

const included = [
  'E-Book „Du bist nicht das Problem"',
  "sofort digital verfügbar",
  "verständlich und ohne Fachjargon erklärt",
  "inklusive praktischer Bonus-Hilfen",
  "direkt nach dem Kauf abrufbar",
];

const BuchPreisbox = () => {
  return (
    <section id="kaufen" className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-7 md:p-10 text-center shadow-xl">
            <p className="text-sm text-muted-foreground mb-2">
              Bevor der Preis wieder auf 34,99&nbsp;€ steigt
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5 leading-snug">
              Hol Dir das Buch jetzt zum Einführungspreis
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-base text-muted-foreground/50 line-through">34,99&nbsp;€</span>
              <span className="text-4xl md:text-5xl font-extrabold text-foreground">29,99&nbsp;€</span>
            </div>

            <div className="text-left space-y-2.5 mb-6">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="xl" asChild className="w-full text-base md:text-lg py-6 md:py-7 mb-3">
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Ja — ich will das Buch jetzt lesen
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              Direkt nach dem Kauf verfügbar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchPreisbox;
