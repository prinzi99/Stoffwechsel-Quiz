import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const included = [
  "sofort verf\u00FCgbar",
  "verst\u00E4ndlich erkl\u00E4rt",
  "direkt umsetzbar",
  "inkl. Bonus-Tools",
];

const AngebotPreisbox = () => {
  return (
    <section id="kaufen" className="py-6 md:py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          {/* Pre-box tension */}
          <div className="text-center mb-6">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Wenn Du das hier nicht verstehst, wird sich nichts &auml;ndern.<br />
              Du wirst wieder anfangen.<br />
              Wieder abbrechen.<br />
              Und wieder denken, es liegt an Dir.
            </p>
          </div>

          <div className="bg-card border-2 border-primary/30 rounded-2xl p-7 md:p-10 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

            <p className="text-sm text-muted-foreground mb-1 mt-1">
              Einmal verstehen &mdash; statt immer wieder neu anfangen
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
              Hol Dir die Erkl&auml;rung, die Dir bisher gefehlt hat
            </h2>

            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
              <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
            </div>

            <p className="text-sm text-foreground/70 mb-5">
              Exklusiver Sonderpreis f&uuml;r Quiz-Teilnehmer
            </p>

            <div className="text-left space-y-2 mb-4">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/85">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="cta" size="xl" asChild className="w-full h-auto min-h-[3.25rem] whitespace-normal leading-snug text-base md:text-lg py-6 md:py-7 mb-3">
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Ich will aufh&ouml;ren, gegen mich selbst zu arbeiten
              </a>
            </Button>

            <p className="text-sm text-muted-foreground">
              Sofort verf&uuml;gbar als E-Book
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotPreisbox;
