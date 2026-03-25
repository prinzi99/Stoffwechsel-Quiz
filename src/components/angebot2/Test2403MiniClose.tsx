import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Test2403MiniClose = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">

          {/* MINI CLOSE */}
          <div className="space-y-1.5">
            <p className="text-sm md:text-lg text-foreground/80 leading-snug">
              Das ist der Punkt, an dem die meisten weiter k&auml;mpfen.
            </p>
            <p className="text-base md:text-xl font-extrabold text-foreground leading-snug">
              Oder endlich erleben, wie sich wieder etwas bewegt.
            </p>
          </div>

          {/* PRODUKT-ÜBERGANG */}
          <p className="text-sm md:text-base font-bold text-foreground leading-snug">
            Genau daf&uuml;r ist dieses Buch da.
          </p>

          {/* CTA BOX */}
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
      </div>
    </section>
  );
};

export default Test2403MiniClose;
