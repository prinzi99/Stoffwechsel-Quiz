import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

const included = [
  'E-Book „Du bist nicht das Problem"',
  "sofort digital verfügbar",
  "verständlich und ohne Fachjargon erklärt",
  "inklusive praktischer Bonus-Hilfen",
  "direkt nach dem Kauf abrufbar",
];

const BuchPreisbox = () => {
  return (
    <section id="kaufen" className="py-12 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-9 text-center shadow-2xl relative overflow-hidden">
            {/* Subtle top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

            <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 mt-1">
              Aktuell noch zum Einführungspreis erhältlich
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
              Hol Dir das Buch jetzt für 29,99&nbsp;€
            </h2>

            <div className="flex items-baseline justify-center gap-3 mb-5">
              <span className="text-sm text-muted-foreground/50 line-through">34,99&nbsp;€</span>
              <span className="text-4xl md:text-5xl font-extrabold text-foreground">29,99&nbsp;€</span>
            </div>

            <div className="text-left space-y-2 mb-5">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="cta"
              size="xl"
              asChild
              className="w-full h-auto min-h-[3.25rem] whitespace-normal leading-snug text-sm md:text-base lg:text-lg py-5 mb-2 shadow-xl"
            >
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Ja — ich will das Buch jetzt lesen
              </a>
            </Button>

            <p className="text-xs sm:text-sm text-muted-foreground">
              Direkt nach dem Kauf verfügbar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchPreisbox;
