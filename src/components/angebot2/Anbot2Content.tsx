import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Anbot2Content = () => {
  return (
    <>
      {/* SECTION 1 – HERO (unverändert) */}
      <section className="pt-2 pb-3 md:pt-5 md:pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* HEADLINE */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] text-center mb-1.5 md:mb-3">
              Du machst alles richtig.{" "}
              <span className="text-primary">
                Und genau das ist das Problem.
            </span>
          </h1>

          {/* NACH HEADLINE */}
          <p className="text-sm md:text-lg text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-0.5 md:mb-1">
            Denn genau das bringt Dich immer wieder zur&uuml;ck an denselben Punkt.
          </p>
          <p className="text-sm md:text-base text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-0.5 md:mb-1">
            Du f&auml;ngst neu an. Du ziehst durch.
          </p>
          <p className="text-sm md:text-base text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-0.5 md:mb-1">
            Und trotzdem passiert&hellip; nichts.
          </p>
          <p className="text-sm md:text-base text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-1.5 md:mb-2">
            Genau deshalb steckst Du fest.
          </p>

          {/* EMOTIONALER BLOCK */}
          <p className="text-sm md:text-base text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-0.5 md:mb-1">
            Irgendwann denkst Du:
          </p>
          <p className="text-sm md:text-base text-foreground italic leading-snug text-center max-w-2xl mx-auto mb-0.5 md:mb-1">
            &bdquo;Vielleicht liegt es an mir.&ldquo;
          </p>
          <p className="text-sm md:text-base font-semibold text-foreground leading-snug text-center max-w-2xl mx-auto mb-1 md:mb-2">
            Tut es nicht.
          </p>

          {/* DESKTOP: classic 2-col (book left, all text right) */}
          <div className="hidden md:flex flex-row items-start gap-8">
            <div className="w-60 flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                fetchPriority="high"
                width={800}
                height={1067}
              />
            </div>
            <div className="flex-1 space-y-2.5">
              <div>
                <p className="text-base font-semibold text-foreground mb-0.5">Genau das erkl&auml;rt dieses Buch.</p>
                <div className="space-y-0.5 text-sm text-foreground/80">
                  <p>&ndash; warum Dein K&ouml;rper Deinen Fortschritt aktiv ausbremst &ndash; obwohl Du alles richtig machst</p>
                  <p>&ndash; wie Dein Kalorienverbrauch sinkt, ohne dass Du es bemerkst</p>
                  <p>&ndash; weshalb mehr Disziplin Dein Problem verst&auml;rkt statt l&ouml;st</p>
                  <p>&ndash; und wie Du diesen Kreislauf endlich durchbrichst</p>
                </div>
              </div>
              <div className="py-3">
                <p className="text-base font-bold text-primary leading-snug">
                  Je mehr Du versuchst abzunehmen,<br />
                  desto besser wird Dein K&ouml;rper darin, es zu verhindern.
                </p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-xl p-5 text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                <p className="text-sm text-primary font-medium tracking-wide mb-1">Exklusiv f&uuml;r Quiz-Teilnehmer</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-base text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-4xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full text-base py-5 h-auto whitespace-normal">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt verstehen, warum Dein K&ouml;rper blockiert
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* MOBILE: book+bullets side by side, rest full-width */}
          <div className="md:hidden">
            <div className="flex flex-row items-start gap-3 mb-2">
              <div className="w-28 sm:w-36 flex-shrink-0">
                <img
                  src={bookCover}
                  alt="Du bist nicht das Problem – Buchcover"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  fetchPriority="high"
                  width={800}
                  height={1067}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-0.5">Genau das erkl&auml;rt dieses Buch.</p>
                <div className="space-y-0.5 text-xs text-foreground/80">
                  <p>&ndash; warum Dein K&ouml;rper Deinen Fortschritt aktiv ausbremst &ndash; obwohl Du alles richtig machst</p>
                  <p>&ndash; wie Dein Kalorienverbrauch sinkt, ohne dass Du es bemerkst</p>
                  <p>&ndash; weshalb mehr Disziplin Dein Problem verst&auml;rkt statt l&ouml;st</p>
                  <p>&ndash; und wie Du diesen Kreislauf endlich durchbrichst</p>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="py-2">
                <p className="text-sm font-bold text-primary leading-snug">
                  Je mehr Du versuchst abzunehmen,<br />
                  desto besser wird Dein K&ouml;rper darin, es zu verhindern.
                </p>
              </div>
              <div className="bg-card border-2 border-primary/30 rounded-xl p-3 text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
                <p className="text-xs text-primary font-medium tracking-wide mb-1">Exklusiv f&uuml;r Quiz-Teilnehmer</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-3xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full text-sm py-3 h-auto whitespace-normal">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt verstehen, warum Dein K&ouml;rper blockiert
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* SECTION 2 – EINZIGE SECTION NACH HERO */}
      <section className="py-6 md:py-10 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-3 md:mb-5">
              Du bist nicht das Problem.
            </h2>

            <div className="text-sm md:text-base text-foreground/80 leading-relaxed text-center space-y-1 mb-3 md:mb-4">
              <p>Dein Ergebnis zeigt nicht, dass Du undiszipliniert bist.</p>
              <p>Es zeigt, wie Dein K&ouml;rper aktuell reagiert.</p>
              <p className="pt-1">Dein K&ouml;rper arbeitet nicht gegen Dich.</p>
              <p>Er sch&uuml;tzt Dich.</p>
              <p className="pt-1">Und genau das ist der Punkt, den die meisten nicht verstehen.</p>
            </div>

            <p className="text-base md:text-lg font-bold text-primary text-center leading-snug mb-3 md:mb-5">
              Der Fehler ist nicht Dein Verhalten.<br />
              Der Fehler ist, wie Du es einordnest.
            </p>

            <div className="inline-block text-left space-y-1 text-sm md:text-base text-foreground/80 mb-3 md:mb-5 mx-auto">
              <p>&ndash; Dein K&ouml;rper reduziert Energie, um Dich zu sch&uuml;tzen</p>
              <p>&ndash; Fortschritt stoppt nicht ohne Grund</p>
              <p>&ndash; Mehr Druck verst&auml;rkt genau das Problem</p>
              <p>&ndash; Dein System folgt klaren Regeln &ndash; nur nicht den falschen</p>
            </div>

            <p className="text-sm md:text-base font-medium text-foreground text-center">
              Wenn Du das verstehst, ver&auml;ndert sich Dein Ansatz automatisch.
            </p>
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
              <Button variant="cta" size="xl" asChild className="w-full h-auto min-h-[3.25rem] whitespace-normal leading-snug text-base md:text-lg py-6 md:py-7">
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

export default Anbot2Content;
