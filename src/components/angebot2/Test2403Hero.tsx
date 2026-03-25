import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const bullets = [
  "Warum weniger essen Deinen Fettverlust heimlich stoppt",
  "Was in Deinem K\u00f6rper passiert, wenn Du alles richtig machst",
  "Warum mehr Disziplin Deinen Stillstand verst\u00e4rken kann",
  "Wie Du Deinen K\u00f6rper wieder dazu bringst, Fett freizugeben",
  "Der Mechanismus, der entscheidet, ob Du Fortschritt siehst",
];

const Test2403Hero = () => {
  return (
    <section className="pt-16 pb-4 md:pt-20 md:pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-center text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] mb-1.5 md:mb-2">
            Du machst alles richtig.
            <br />
            <span className="text-primary">
              Und genau das ist das&nbsp;Problem.
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-center text-sm md:text-lg text-foreground/70 leading-snug mb-1.5 md:mb-2">
            Warum Dein <span className="font-semibold text-foreground">Stoffwechsel</span> blockiert &ndash;
            <br />
            und Du trotz Disziplin nicht abnimmst
          </p>

          {/* MECHANISMUS */}
          <div className="border-y border-primary/20 py-2 md:py-3 mb-2 md:mb-3">
            <p className="text-center text-sm md:text-lg font-bold text-foreground leading-snug">
              Dein K&ouml;rper h&auml;lt fest.
              <br />
              Weil er sich sch&uuml;tzt.
            </p>
          </div>

          {/* BULLET SECTION */}
          <p className="text-sm md:text-base font-semibold text-foreground mb-1.5">
            In diesem Buch zeige ich Dir:
          </p>
          <div className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
            {bullets.map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base md:text-lg text-foreground/85 leading-snug font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA BOX mit Buch-Mockup */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-4 md:p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              {/* DESKTOP: Bild links, Inhalt rechts */}
              <div className="hidden md:flex flex-row items-center gap-5 mt-1">
                <div className="w-36 flex-shrink-0">
                  <img
                    src={bookCover}
                    alt="Du bist nicht das Problem – Buchcover"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    width={800}
                    height={1067}
                  />
                </div>
                <div className="flex-1 text-center">
                  <p className="text-sm text-primary font-medium tracking-wide mb-1">
                    Exklusiv f&uuml;r Quiz-Teilnehmer
                  </p>
                  <div className="flex items-baseline justify-center gap-2 mb-1.5">
                    <span className="text-base text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                    <span className="text-4xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-3">
                    Einmal verstehen. Endlich wieder Fortschritt sehen.
                  </p>
                  <Button
                    variant="cta"
                    size="xl"
                    asChild
                    className="w-full h-auto min-h-[3rem] whitespace-normal leading-snug text-base py-4 shadow-xl"
                    onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
                  >
                    <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                      Ich will endlich wieder Fortschritt sehen
                    </a>
                  </Button>
                </div>
              </div>

              {/* MOBILE: Bild oben, Inhalt darunter */}
              <div className="md:hidden mt-1">
                <div className="flex justify-center mb-3">
                  <img
                    src={bookCover}
                    alt="Du bist nicht das Problem – Buchcover"
                    className="w-32 h-auto rounded-xl shadow-2xl"
                    width={800}
                    height={1067}
                  />
                </div>
                <p className="text-xs text-primary font-medium tracking-wide mb-1 text-center">
                  Exklusiv f&uuml;r Quiz-Teilnehmer
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-1.5">
                  <span className="text-sm text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-3xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <p className="text-xs text-foreground/70 mb-2.5 text-center">
                  Einmal verstehen. Endlich wieder Fortschritt sehen.
                </p>
                <Button
                  variant="cta"
                  size="xl"
                  asChild
                  className="w-full h-auto min-h-[3rem] whitespace-normal leading-snug text-sm py-4 shadow-xl"
                  onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ich will endlich wieder Fortschritt sehen
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
