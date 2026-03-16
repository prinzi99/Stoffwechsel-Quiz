import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotHero = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide text-center mb-6 md:mb-8">
            Exklusiv f&uuml;r Teilnehmer des Stoffwechsel-Quiz
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center mb-4 md:mb-6 max-w-3xl mx-auto">
            Du bist nicht undiszipliniert.{" "}
            <span className="text-primary">
              Du bek&auml;mpfst sehr wahrscheinlich nur die falsche Ursache.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-10 md:mb-14">
            Wenn Dein K&ouml;rper auf Stress, Unterversorgung oder alte Di&auml;tmuster mit Sparmodus reagiert,
            helfen Dir noch mehr Kontrolle und noch weniger Essen oft nicht weiter.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
            <div className="w-48 sm:w-56 md:w-72 lg:w-80 flex-shrink-0">
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
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-base text-foreground/85">verst&auml;ndlich statt widerspr&uuml;chlich</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-base text-foreground/85">alltagstauglich statt extrem</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-base text-foreground/85">sofort verf&uuml;gbar inklusive Bonusbereich</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 mb-6 shadow-sm">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-3xl font-bold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ja, ich will verstehen, was meinen Stoffwechsel blockiert
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
                  Sofort als E-Book verf&uuml;gbar.
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
