import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotHero = () => {
  return (
    <section className="pt-6 pb-8 md:pt-10 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide text-center mb-4 md:mb-5">
            Nur f&uuml;r Teilnehmer des Stoffwechsel-Quiz
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-[1.15] text-center mb-3 md:mb-4 max-w-3xl mx-auto">
            Du bist nicht das Problem.{" "}
            <span className="text-primary">
              Du folgst nur einem Plan, der bei Deinem K&ouml;rper nicht funktioniert.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-6 md:mb-8">
            Wenn Stress, Unterversorgung oder alte Di&auml;ten im Hintergrund wirken,
            bringen Dich noch mehr Kontrolle und noch weniger Essen oft tiefer in denselben Stillstand.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-56 sm:w-64 md:w-80 lg:w-[22rem] flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                fetchPriority="high"
                width={800}
                height={1067}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-foreground/90 font-medium">endlich verstehen, warum nichts richtig greift</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-foreground/90 font-medium">die 3 h&auml;ufigsten Stoffwechsel-Blockaden klar erkennen</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base md:text-lg text-foreground/90 font-medium">sofort als E-Book plus Bonusbereich verf&uuml;gbar</span>
                </div>
              </div>

              <div className="bg-card border-2 border-primary/25 rounded-2xl p-6 md:p-7 shadow-lg">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Exklusiver Quiz-Preis
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full text-base md:text-lg py-5 md:py-6">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ja &mdash; ich will endlich verstehen, was meinen Stoffwechsel blockiert
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
                  Sofort verf&uuml;gbar als E-Book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotHero;
