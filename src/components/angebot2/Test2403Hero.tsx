import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const bullets = [
  "Blockade lösen – trotz Stillstand",
  "Warum Dein Körper dichtmacht",
  "Der Fehler, der alles schlimmer macht",
  "Wie Du ihn wieder loslassen lässt",
  "Der Mechanismus, der alles verändert",
];

const Test2403Hero = () => {
  return (
    <section className="pt-6 pb-6 md:pt-12 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-center text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] mb-3 md:mb-4">
            Du machst alles richtig.
            <br />
            <span className="text-primary">
              Und genau das ist das&nbsp;Problem.
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-center text-base md:text-lg text-foreground/70 leading-snug mb-3 md:mb-4">
            Warum Dein <span className="font-semibold text-foreground">Stoffwechsel</span> blockiert –
            <br />
            und Du trotz Disziplin nicht abnimmst.
          </p>

          {/* PUNCH-LINE */}
          <div className="border-y border-primary/20 py-4 md:py-5 mb-5 md:mb-7">
            <p className="text-center text-base md:text-xl font-bold text-foreground leading-snug">
              Dein Körper hält fest.
              <br />
              Bis Du das hier änderst.
            </p>
          </div>

          {/* BULLETS + BOOK MOCKUP */}
          <p className="text-sm md:text-base font-semibold text-foreground mb-3">
            In diesem Buch zeige ich Dir:
          </p>
          <div className="flex flex-row items-start gap-4 md:gap-8 mb-5 md:mb-7">
            <div className="w-28 sm:w-32 md:w-44 flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                width={800}
                height={1067}
              />
            </div>
            <div className="flex-1 min-w-0 space-y-2 md:space-y-2.5">
              {bullets.map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base md:text-lg text-foreground/85 leading-snug font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA BOX */}
          <div className="max-w-md mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-5 md:p-7 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              <p className="text-xs md:text-sm text-primary font-medium tracking-wide mb-1 mt-1">
                Exklusiv f&uuml;r Quiz-Teilnehmer
              </p>
              <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-3">
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
                  Blockade l&ouml;sen &amp; wieder abnehmen
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
