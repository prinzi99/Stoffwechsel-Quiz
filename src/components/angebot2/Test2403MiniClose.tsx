import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Test2403MiniClose = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">

          {/* MINI-CLOSE */}
          <div className="space-y-2">
            <p className="text-base md:text-xl font-extrabold text-foreground leading-snug">
              Das hier ist kein weiterer Versuch.
            </p>
            <p className="text-sm md:text-lg text-foreground/80 leading-snug">
              Das ist der Moment, in dem Du verstehst,
              <br />
              warum es bisher nicht funktioniert hat –
              <br />
              und wie Du es endlich &auml;nderst.
            </p>
          </div>

          {/* FINALER DRUCK-SATZ */}
          <div className="my-5 md:my-8 py-4 md:py-5 border-y border-primary/20">
            <p className="text-base md:text-xl font-extrabold text-primary leading-snug">
              Wenn Du so weitermachst wie bisher, bleibt alles gleich.
            </p>
          </div>

          {/* VERSTÄRKTE 2. CTA BOX */}
          <div className="max-w-lg mx-auto pt-2 md:pt-4">
            <div className="bg-card border-2 border-primary/50 rounded-2xl p-7 md:p-10 text-center shadow-[0_12px_50px_-10px_hsl(var(--primary)/0.3)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              <p className="text-xs md:text-sm text-primary font-semibold tracking-wide mb-1.5 mt-1">
                Exklusiv f&uuml;r Quiz-Teilnehmer
              </p>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                <span className="text-3xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
              </div>
              <p className="text-sm md:text-base text-foreground/70 mb-4">
                Einmal verstehen – statt immer wieder neu anfangen.
              </p>
              <Button
                variant="cta"
                size="xl"
                asChild
                className="w-full h-auto min-h-[3.75rem] whitespace-normal leading-snug text-base md:text-lg py-6 md:py-7 shadow-2xl ring-2 ring-accent/20"
                onClick={() => trackButtonClick("/buch/test2403", "MiniClose CTA", DIGISTORE_URL)}
              >
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Jetzt verstehen, warum Dein K&ouml;rper blockiert
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Test2403MiniClose;
