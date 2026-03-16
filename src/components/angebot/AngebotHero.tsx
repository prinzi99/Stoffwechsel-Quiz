import { Button } from "@/components/ui/button";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotHero = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide text-center mb-6 md:mb-8">
            Exklusiv für Teilnehmer des Stoffwechsel-Quiz
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center mb-4 md:mb-6 max-w-3xl mx-auto">
            Vielleicht fehlt Dir nicht Disziplin.{" "}
            <span className="text-primary">
              Vielleicht bek&auml;mpfst Du seit Monaten nur das falsche Problem.
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-10 md:mb-14">
            Wenn Dein K&ouml;rper auf Stress, Unterversorgung oder fr&uuml;here Di&auml;ten mit Schutz und Sparmodus reagiert,
            bringen Dich noch mehr Kontrolle und noch weniger Essen oft nicht weiter. Dieses Buch hilft Dir zu verstehen,
            was bei Dir gerade vermutlich schiefl&auml;uft &ndash; und wie Du daraus wieder herauskommst.
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
              <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed mb-8">
                <p>
                  Du gibst Dir M&uuml;he.<br />
                  Du achtest auf Ern&auml;hrung.<br />
                  Du versuchst, alles richtig zu machen.
                </p>
                <p className="font-medium text-foreground">Und trotzdem geht es kaum voran.</p>
                <p>
                  Die Waage bleibt stehen.<br />
                  Die Energie wird weniger.<br />
                  Der Frust wird gr&ouml;&szlig;er.
                </p>
                <p>Irgendwann beginnt man, an sich selbst zu zweifeln.</p>
                <p>
                  Aber was, wenn das Problem nicht Dein Wille ist?<br />
                  Was, wenn Dein K&ouml;rper l&auml;ngst auf Druck, Mangel oder alte Di&auml;tmuster reagiert?
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 mb-6 shadow-sm">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99 &euro;</span>
                  <span className="text-3xl font-bold text-foreground">19,99 &euro;</span>
                </div>
                <Button variant="cta" size="xl" asChild className="w-full">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ich will verstehen, was meinen Stoffwechsel blockiert
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
                  Sofort als E-Book verf&uuml;gbar. Direkt nach dem Kauf lesen.
                </p>
              </div>

              <p className="text-sm text-foreground/60 leading-relaxed">
                Kein Motivationsgerede. Kein weiterer Standardplan.<br />
                Sondern endlich eine Erkl&auml;rung, die sich nicht nur gut anh&ouml;rt, sondern f&uuml;r viele zum ersten Mal wirklich Sinn ergibt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotHero;
