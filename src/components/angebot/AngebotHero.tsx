import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotHero = () => {
  return (
    <section className="pt-4 pb-6 md:pt-8 md:pb-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide text-center mb-3">
            Nur f&uuml;r Teilnehmer des Stoffwechsel-Quiz
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-foreground leading-[1.1] text-center mb-2 md:mb-3 max-w-3xl mx-auto">
            Du bist nicht das Problem.{" "}
            <span className="text-primary">
              Du bek&auml;mpfst nur die falsche Ursache.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-5">
            Wenn Dein K&ouml;rper l&auml;ngst auf Stress, Mangel oder alte Di&auml;ten reagiert, machen Dich noch mehr Disziplin und noch weniger Essen oft nur noch m&uuml;der, frustrierter und unbeweglicher.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <div className="w-60 sm:w-72 md:w-80 lg:w-[24rem] flex-shrink-0">
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
              <div className="space-y-1.5 mb-4">
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

              <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-xl">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Exklusiver Quiz-Preis
                </p>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                  <span className="text-base text-muted-foreground">Heute nur</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                  <span className="text-base text-muted-foreground">statt</span>
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full text-base md:text-lg py-6 md:py-7 text-lg">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ja &mdash; ich will endlich verstehen, was meinen Stoffwechsel blockiert
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
                  Sofort verf&uuml;gbar als E-Book
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
