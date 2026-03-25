import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Test2403MiniClose = () => {
  return (
    <>
      {/* SECTION 4 – KERNAUSSAGE */}
      <section className="py-8 md:py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-3xl font-extrabold text-primary leading-snug">
              Dieses Buch ist der Unterschied zwischen Stillstand
              <br />
              und echtem Fortschritt.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – ÜBERGANG */}
      <section className="pb-4 md:pb-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm md:text-base font-bold text-foreground leading-snug">
              Genau daf&uuml;r ist dieses Buch da.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 – CTA */}
      <section className="py-6 md:py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
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
                Beende den Stillstand – und bring Deinen K&ouml;rper wieder dazu, loszulassen.
              </p>
              <Button
                variant="cta"
                size="xl"
                asChild
                className="w-full h-auto min-h-[3.75rem] whitespace-normal leading-snug text-base md:text-lg py-6 md:py-7 shadow-2xl ring-2 ring-accent/20"
                onClick={() => trackButtonClick("/buch/test2403", "MiniClose CTA", DIGISTORE_URL)}
              >
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Bring Deinen K&ouml;rper wieder in Bewegung
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Test2403MiniClose;
