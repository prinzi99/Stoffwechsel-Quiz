import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

const BuchHeroV2 = () => {
  return (
    <section className="pt-16 pb-4 md:pt-20 md:pb-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-left text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] mb-1.5 md:mb-2">
            Du isst weniger, trainierst mehr – <span className="text-primary">und Dein K&ouml;rper macht einfach dicht?</span>
          </h1>

          {/* MOCKUP + TEXTE nebeneinander */}
          <div className="flex flex-row items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="w-24 md:w-36 flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                width={800}
                height={1067}
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1.5 md:space-y-2">
              <p className="text-sm md:text-lg text-foreground/80 leading-snug">
                Dann liegt das nicht an Dir.
              </p>
              <p className="text-sm md:text-lg text-foreground/80 leading-snug">
                Dein K&ouml;rper h&auml;lt fest, weil er sich sch&uuml;tzt.
                <br />
                Er geht in einen Zustand, in dem er kein Fett mehr freigibt –
                <br className="hidden md:inline" />
                egal, wie diszipliniert Du bist.
              </p>
              <p className="text-base md:text-xl font-extrabold text-foreground leading-snug">
                Die Waage bewegt sich nicht.
              </p>
              <p className="text-sm md:text-lg text-foreground/80 leading-snug">
                Damit sich das endlich &auml;ndert…
              </p>
            </div>
          </div>

          {/* PRODUKT-VERANKERUNG */}
          <p className="text-center text-xs md:text-base font-semibold text-foreground/90 leading-snug mb-2 md:mb-3">
            Dieses Buch zeigt Dir, wie Du diesen Mechanismus aufl&ouml;st
            <br />
            und Deinen K&ouml;rper wieder dazu bringst, Fett freizugeben.
          </p>

          {/* CTA BOX */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/50 rounded-2xl p-6 md:p-8 shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.25)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              <div className="text-center mt-1">
                <p className="text-xs md:text-sm text-muted-foreground font-semibold tracking-wide mb-1">
                  Aktuell noch zum Einf&uuml;hrungspreis erh&auml;ltlich
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-1.5">
                  <span className="text-sm md:text-base text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-2xl md:text-4xl font-extrabold text-foreground">29,99&nbsp;&euro;</span>
                </div>
                <p className="text-xs md:text-sm text-foreground/70 mb-3">
                  Beende den Stillstand – und bring Deinen K&ouml;rper wieder in Bewegung.
                </p>
                <Button
                  variant="cta"
                  size="xl"
                  asChild
                  className="w-full h-auto min-h-[3.5rem] whitespace-normal leading-snug text-sm md:text-base py-5 shadow-2xl ring-2 ring-accent/20"
                  onClick={() => trackButtonClick("/buch", "Hero CTA", DIGISTORE_URL)}
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ja — ich will verstehen, was meinen Stoffwechsel blockiert
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

export default BuchHeroV2;
