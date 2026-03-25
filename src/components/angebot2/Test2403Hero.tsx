import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const bullets = [
  "Warum weniger essen Deinen Fettverlust heimlich stoppt",
  "Was in Deinem Körper passiert, wenn Du „alles richtig" machst",
  "Warum mehr Disziplin Deinen Stillstand verstärken kann",
  "Wie Du Deinen Körper wieder dazu bringst, Fett freizugeben",
  "Der Mechanismus, der entscheidet, ob Du Fortschritt siehst",
];

const Test2403Hero = () => {
  return (
    <section className="pt-16 pb-6 md:pt-20 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* HEADLINE */}
          <h1 className="text-center text-[1.75rem] sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] mb-2 md:mb-3">
            Du hältst Dich an alles –
            <br />
            <span className="text-primary">
              Und Dein Körper weigert sich trotzdem abzunehmen?
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-center text-sm md:text-lg text-foreground/70 leading-snug mb-2 md:mb-3">
            Du isst wenig. Du bist diszipliniert. Du machst Sport.
            <br />
            Und trotzdem passiert nichts.
          </p>

          {/* MECHANISMUS */}
          <div className="border-y border-primary/20 py-3 md:py-4 mb-3 md:mb-4">
            <p className="text-center text-sm md:text-lg font-bold text-foreground leading-snug">
              Der Grund ist nicht mangelnde Disziplin.
              <br />
              Sondern ein Schutzmechanismus Deines Körpers, der Fett festhält.
            </p>
          </div>

          {/* BULLET SECTION */}
          <p className="text-sm md:text-base font-semibold text-foreground mb-2">
            In diesem Buch zeige ich Dir:
          </p>
          <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-5">
            {bullets.map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base md:text-lg text-foreground/85 leading-snug font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* PRODUKTBILD */}
          <div className="flex justify-center mb-4 md:mb-5">
            <img
              src={bookCover}
              alt="Du bist nicht das Problem – Buchcover"
              className="w-40 sm:w-48 md:w-56 h-auto rounded-xl shadow-2xl"
              width={800}
              height={1067}
            />
          </div>

          {/* CTA BOX */}
          <div className="max-w-md mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-5 md:p-7 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              <p className="text-xs md:text-sm text-primary font-medium tracking-wide mb-1 mt-1">
                Exklusiv für Quiz-Teilnehmer
              </p>
              <div className="flex items-baseline justify-center gap-2 md:gap-3 mb-2">
                <span className="text-sm md:text-lg text-muted-foreground/50 line-through">34,99&nbsp;€</span>
                <span className="text-3xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;€</span>
              </div>
              <p className="text-xs md:text-sm text-foreground/70 mb-3">
                Einmal verstehen. Endlich wieder Fortschritt sehen.
              </p>
              <Button
                variant="cta"
                size="xl"
                asChild
                className="w-full h-auto min-h-[3.25rem] whitespace-normal leading-snug text-sm md:text-lg py-5 md:py-6 shadow-xl"
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
    </section>
  );
};

export default Test2403Hero;
