import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotHero = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Preheadline */}
          <p className="text-sm font-medium text-primary tracking-wide text-center mb-6 md:mb-8">
            Exklusiv für Teilnehmer des Stoffwechsel-Quiz
          </p>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center mb-4 md:mb-6 max-w-3xl mx-auto">
            Du bist nicht undiszipliniert.{" "}
            <span className="text-primary">
              Du kämpfst sehr wahrscheinlich gegen die falsche Ursache.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-10 md:mb-14">
            Wenn Dein Körper auf Stress, Unterversorgung oder frühere Diäten mit Sparmodus reagiert,
            helfen Dir noch weniger Essen und noch mehr Kontrolle oft nicht weiter. Dieses Buch zeigt Dir,
            warum Dein Stoffwechsel blockiert – und wie Du ihn Schritt für Schritt wieder in Bewegung bringst.
          </p>

          {/* Main content: Book + Text */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
            {/* Book Cover */}
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

            {/* Problem text + Price + CTA */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed mb-8">
                <p>
                  Du gibst Dir Mühe.<br />
                  Du achtest auf Ernährung.<br />
                  Du versuchst, alles richtig zu machen.
                </p>
                <p className="font-medium text-foreground">Und trotzdem:</p>
                <p>
                  Die Waage stagniert.<br />
                  Die Energie sinkt.<br />
                  Der Frust wächst.
                </p>
                <p>
                  Vielleicht liegt das Problem nicht bei Deiner Disziplin.<br />
                  Vielleicht reagiert Dein Körper einfach längst auf Mangel, Druck oder alte Diätmuster.
                </p>
              </div>

              {/* Price box */}
              <div className="bg-card border border-border rounded-xl p-5 mb-6 shadow-sm">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99 €</span>
                  <span className="text-3xl font-bold text-foreground">19,99 €</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt Buch &amp; Bonus sichern
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
                  Sofort als E-Book verfügbar. Direkt nach dem Kauf lesen.
                </p>
              </div>

              {/* Zusatz-Hinweis */}
              <p className="text-sm text-foreground/60 leading-relaxed">
                Kein Motivationsgerede. Kein neuer Diätplan.<br />
                Sondern endlich eine verständliche Erklärung dafür, warum Dein Körper gerade nicht mitspielt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotHero;
