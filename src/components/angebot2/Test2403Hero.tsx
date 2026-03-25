import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const bullets = [
  "Warum weniger essen Deinen Fettverlust heimlich stoppt",
  "Warum Dein Körper Dich ausbremst – obwohl Du alles richtig machst",
  "Warum mehr Disziplin Deinen Stillstand verstärken kann",
  "Wie Du Deinen Körper wieder dazu bringst, Fett freizugeben",
  "Der eine Schalter, der darüber entscheidet, ob Du abnimmst – oder feststeckst",
];

const Test2403Hero = () => {
  return (
    <section className="pt-16 pb-4 md:pt-20 md:pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-center text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] mb-1.5 md:mb-2">
            Du isst weniger, trainierst mehr –
            <br />
            <span className="text-primary">
              und nimmst trotzdem nicht ab?
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-center text-sm md:text-lg text-foreground/70 leading-snug mb-1.5 md:mb-2">
            Warum Dein K&ouml;rper in einen Schutzmodus geht –
            <br />
            und Fett nicht mehr freigibt
          </p>

          {/* MECHANISMUS */}
          <div className="border-y border-primary/20 py-2 md:py-3 mb-1.5 md:mb-2">
            <p className="text-center text-sm md:text-lg font-bold text-foreground leading-snug">
              Dein K&ouml;rper h&auml;lt fest.
              <br />
              Weil er sich sch&uuml;tzt.
            </p>
          </div>

          {/* ERGEBNIS */}
          <p className="text-center text-sm md:text-base text-foreground/80 leading-snug mb-2 md:mb-3 italic">
            Damit sich die Waage endlich wieder bewegt –
            <br />
            ohne dass Du noch h&auml;rter k&auml;mpfen musst.
          </p>

          {/* BULLET SECTION */}
          <p className="text-sm md:text-base font-semibold text-foreground mb-1.5">
            In diesem Buch zeige ich Dir:
          </p>
          <div className="space-y-1 md:space-y-1.5 mb-2 md:mb-3">
            {bullets.map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base md:text-lg text-foreground/85 leading-snug font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* KONSEQUENZ */}
          <p className="text-center text-sm md:text-base font-semibold text-foreground/90 leading-snug mb-3 md:mb-4">
            Wenn Du das nicht verstehst, wirst Du weiter alles richtig machen –
            <br />
            und trotzdem keine Ergebnisse sehen.
          </p>

          {/* CTA BOX */}
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
                    Einmal verstehen. Endlich raus aus dem Stillstand.
                  </p>
                  <Button
                    variant="cta"
                    size="xl"
                    asChild
                    className="w-full h-auto min-h-[3rem] whitespace-normal leading-snug text-base py-4 shadow-xl"
                    onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
                  >
                    <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                      Ich will raus aus dem Stillstand
                    </a>
                  </Button>
                </div>
              </div>

              {/* MOBILE: Bild links, Inhalt rechts */}
              <div className="md:hidden mt-1">
                <div className="flex flex-row items-center gap-3 mb-2.5">
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
                    <p className="text-xs text-primary font-medium tracking-wide mb-1">
                      Exklusiv f&uuml;r Quiz-Teilnehmer
                    </p>
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-sm text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                      <span className="text-2xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                    </div>
                    <p className="text-xs text-foreground/70">
                      Einmal verstehen. Endlich raus aus dem Stillstand.
                    </p>
                  </div>
                </div>
                <Button
                  variant="cta"
                  size="xl"
                  asChild
                  className="w-full h-auto min-h-[3rem] whitespace-normal leading-snug text-sm py-4 shadow-xl"
                  onClick={() => trackButtonClick("/buch/test2403", "Hero CTA", DIGISTORE_URL)}
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ich will raus aus dem Stillstand
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
