import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Test2403Hero = () => {
  return (
    <section className="pt-16 pb-4 md:pt-20 md:pb-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-center text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] mb-1.5 md:mb-2">
            Du isst weniger, trainierst mehr –
            <br />
            <span className="text-primary">
              und Dein K&ouml;rper macht einfach dicht?
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-center text-sm md:text-lg text-foreground/80 leading-snug mb-1.5 md:mb-2">
            Warum Dein K&ouml;rper in einen Schutzmodus geht –
            <br />
            und Fett nicht mehr freigibt
          </p>

          {/* MECHANISMUS */}
          <div className="border-y border-primary/20 py-2 md:py-3 mb-2 md:mb-3">
            <p className="text-center text-sm md:text-lg font-bold text-foreground leading-snug">
              Dein K&ouml;rper h&auml;lt fest.
              <br />
              Weil er sich sch&uuml;tzt.
            </p>
          </div>

          {/* ERGEBNIS */}
          <p className="text-center text-sm md:text-lg font-bold text-primary leading-snug mb-3 md:mb-4">
            Damit sich die Waage endlich wieder bewegt…
          </p>

          {/* CTA BOX */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/40 rounded-2xl p-5 md:p-7 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              {/* DESKTOP */}
              <div className="hidden md:flex flex-row items-center gap-5 mt-1">
                <div className="w-40 flex-shrink-0">
                  <img
                    src={bookCover}
                    alt="Du bist nicht das Problem – Buchcover"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    width={800}
                    height={1067}
                  />
                </div>
                <div className="flex-1 text-center">
                  <p className="text-sm text-primary font-semibold tracking-wide mb-1">
                    Exklusiv f&uuml;r Quiz-Teilnehmer
                  </p>
                  <div className="flex items-baseline justify-center gap-2 mb-1.5">
                    <span className="text-base text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                    <span className="text-4xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">
                    Beende den Stillstand – indem Du verstehst, was wirklich passiert.
                  </p>
                  <Button
                    variant="cta"
                    size="xl"
                    asChild
                    className="w-full h-auto min-h-[3.5rem] whitespace-normal leading-snug text-base py-5 shadow-2xl ring-2 ring-accent/20"
                    onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
                  >
                    <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                      Ich will, dass sich endlich wieder etwas bewegt
                    </a>
                  </Button>
                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden mt-1">
                <div className="flex flex-row items-center gap-3 mb-3">
                  <div className="w-24 flex-shrink-0">
                    <img
                      src={bookCover}
                      alt="Du bist nicht das Problem – Buchcover"
                      className="w-full h-auto rounded-xl shadow-2xl"
                      width={800}
                      height={1067}
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center">
                    <p className="text-xs text-primary font-semibold tracking-wide mb-1">
                      Exklusiv f&uuml;r Quiz-Teilnehmer
                    </p>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                      <span className="text-2xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                    </div>
                    <p className="text-xs text-foreground/70">
                      Beende den Stillstand – indem Du verstehst, was wirklich passiert.
                    </p>
                  </div>
                </div>
                <Button
                  variant="cta"
                  size="xl"
                  asChild
                  className="w-full h-auto min-h-[3.5rem] whitespace-normal leading-snug text-sm py-5 shadow-2xl ring-2 ring-accent/20"
                  onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ich will, dass sich endlich wieder etwas bewegt
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Test2403Hero;
