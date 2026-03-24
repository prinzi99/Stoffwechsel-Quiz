import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const handleBuyClick = (buttonLabel: string) => {
  trackButtonClick("/buch/test2403", buttonLabel, DIGISTORE_URL);
};

const Test2403Body = () => {
  return (
    <>
      {/* SECTION 2 – Reframing */}
      <section className="py-6 md:py-10 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold text-foreground mb-3 md:mb-5">
              Du bist nicht das Problem.
            </h2>

            <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-1 mb-3 md:mb-5">
              <p>Dein Ergebnis zeigt nicht, dass Du undiszipliniert bist.</p>
              <p>Es zeigt, wie Dein K&ouml;rper aktuell reagiert.</p>
              <p className="pt-1">Und genau das hast Du bisher falsch eingeordnet.</p>
            </div>

            <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-1 mb-3 md:mb-5">
              <p>Du hast versucht, das Problem zu l&ouml;sen,</p>
              <p>indem Du mehr machst.</p>
              <p className="pt-1">Mehr Kontrolle.</p>
              <p>Mehr Disziplin.</p>
              <p>Mehr Verzicht.</p>
              <p className="pt-1 font-semibold text-foreground">Und genau hier liegt der Denkfehler.</p>
            </div>

            <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-1 mb-3 md:mb-5">
              <p>Dein K&ouml;rper arbeitet nicht gegen Dich.</p>
              <p>Er reagiert auf das, was Du ihm gibst.</p>
              <p className="pt-1">Und je mehr Druck Du erzeugst,</p>
              <p>desto st&auml;rker geht er in den Schutzmodus.</p>
            </div>

            <div className="my-5 md:my-8 py-4 md:py-5 border-y border-primary/20">
              <p className="text-lg md:text-xl font-extrabold text-primary leading-snug">
                Der Fehler ist nicht Dein Verhalten.<br />
                Der Fehler ist, wie Du es interpretierst.
              </p>
            </div>

            <div className="inline-block text-left space-y-1 text-sm md:text-base text-foreground/80 mb-3 md:mb-5">
              <p>&ndash; Dein K&ouml;rper reduziert Energie nicht zuf&auml;llig</p>
              <p>&ndash; Stillstand ist kein Versagen, sondern eine Reaktion</p>
              <p>&ndash; Mehr Disziplin verst&auml;rkt genau das, was Dich blockiert</p>
              <p>&ndash; Dein System folgt klaren Regeln &ndash; nur nicht denen, die Du aktuell nutzt</p>
            </div>

            <div className="text-sm md:text-base text-foreground leading-relaxed space-y-1 mb-3 md:mb-5">
              <p className="font-medium">Wenn Du das verstehst, h&ouml;rst Du auf, gegen Deinen K&ouml;rper zu arbeiten.</p>
              <p className="font-medium">Und genau dann wird Ver&auml;nderung wieder m&ouml;glich.</p>
            </div>

            <div className="text-sm md:text-base text-foreground/80 leading-relaxed space-y-1">
              <p>Wenn Du das hier gerade erkennst,</p>
              <p>dann wei&szlig;t Du, warum es bisher nicht funktioniert hat.</p>
              <p className="pt-1 font-medium text-foreground">Und genau deshalb ist dieses Buch der n&auml;chste Schritt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – CTA BLOCK */}
      <section className="py-6 md:py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              <p className="text-sm text-primary font-medium tracking-wide mb-2 mt-1">
                Exklusiv f&uuml;r Quiz-Teilnehmer
              </p>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
              </div>
              <p className="text-sm text-foreground/70 mb-4">
                Einmal verstehen &mdash; statt immer wieder neu anfangen.
              </p>
              <Button variant="cta" size="xl" asChild className="w-full h-auto min-h-[3.25rem] whitespace-normal leading-snug text-base md:text-lg py-6 md:py-7" onClick={() => handleBuyClick("Abschluss CTA")}>
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Jetzt verstehen, warum Dein K&ouml;rper blockiert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test2403Body;
