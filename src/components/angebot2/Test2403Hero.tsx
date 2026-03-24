import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const bullets = [
  "Wie Du die Blockade Deines Stoffwechsels gezielt auflöst – selbst wenn bisher nichts funktioniert hat",
  "Warum Dein Körper genau dann dichtmacht, wenn Du alles richtig machst – und wie Du ihn wieder öffnest",
  "Der Punkt, an dem mehr Disziplin Deinen Fortschritt zerstört – und was stattdessen endlich wirkt",
  "Wie Du Deinen Körper aus dem Festhalten-Modus zurück in echte Fettverbrennung bringst",
  "Warum Dein Stoffwechsel nicht reagiert – bis Du genau diesen einen Mechanismus veränderst",
];

const Test2403Hero = () => {
  return (
    <section className="pt-6 pb-8 md:pt-12 md:pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">


          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-4 md:mb-5">
            Du machst alles richtig.
            <br />
            <span className="text-primary">
              Und genau das ist das Problem.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-foreground/75 leading-relaxed mb-5 md:mb-7 max-w-xl mx-auto">
            Wie Du Deinen <span className="font-semibold text-foreground">Stoffwechsel-Code</span> knackst,
            <br className="hidden sm:block" /> wenn Dein Körper blockiert
            <br className="hidden sm:block" /> und Abnehmen trotz Disziplin nicht funktioniert.
          </p>

          {/* Bridge */}
          <div className="mb-7 md:mb-10 py-4 md:py-5 border-y border-primary/15">
            <p className="text-base md:text-lg font-bold text-foreground leading-snug">
              Dein Stoffwechsel ist nicht kaputt.
              <br />
              Er hat sich angepasst.
            </p>
          </div>

          {/* Bullet Section with Book Mockup */}
          <p className="text-sm md:text-base font-semibold text-foreground mb-4 text-center">
            In diesem Buch zeige ich Dir:
          </p>

          <div className="flex flex-row items-start gap-4 md:gap-8 max-w-2xl mx-auto mb-7 md:mb-10">
            {/* Book Cover */}
            <div className="w-28 sm:w-32 md:w-48 flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                width={800}
                height={1067}
              />
            </div>

            {/* Bullets */}
            <div className="flex-1 min-w-0 space-y-3 md:space-y-3.5 text-left">
              {bullets.map((text, i) => (
                <div key={i} className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm md:text-base text-foreground/85 leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Preisbox + CTA */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-5 md:p-8 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              <p className="text-xs md:text-sm text-primary font-medium tracking-wide mb-1 mt-1">
                Exklusiv f&uuml;r Quiz-Teilnehmer
              </p>
              <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-2">
                <span className="text-sm md:text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                <span className="text-3xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
              </div>
              <Button
                variant="cta"
                size="xl"
                asChild
                className="w-full h-auto min-h-[3.25rem] whitespace-normal leading-snug text-sm md:text-lg py-5 md:py-6 shadow-xl"
                onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
              >
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Stoffwechsel-Code knacken &amp; abnehmen
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Test2403Hero;
