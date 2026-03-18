import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Anbot2Content = () => {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <section className="pt-4 pb-8 md:pt-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] text-center mb-4 md:mb-5">
              Du bist nicht das Problem.{" "}
              <span className="text-primary">
                Dein Stoffwechsel reagiert nur genau so, wie er soll.
              </span>
            </h1>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto mb-8">
              Und genau deshalb bringen Dich Di&auml;ten, mehr Disziplin oder mehr Training
              immer wieder zur&uuml;ck an denselben Punkt.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
              <div className="w-56 sm:w-64 md:w-72 flex-shrink-0">
                <img
                  src={bookCover}
                  alt="Du bist nicht das Problem – Buchcover"
                  className="w-full h-auto rounded-xl shadow-2xl"
                  fetchPriority="high"
                  width={800}
                  height={1067}
                />
              </div>

              <div className="flex-1 space-y-4">
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Dein K&ouml;rper ist kein Taschenrechner.<br />
                  Er ist ein Schutzsystem.
                </p>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  Sobald Du:
                </p>
                <div className="space-y-1 text-sm md:text-base text-foreground/80">
                  <p>– weniger isst</p>
                  <p>– mehr Druck machst</p>
                  <p>– mehr Kontrolle aus&uuml;bst</p>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  passiert etwas, das die meisten nie verstehen:
                </p>

                <div className="space-y-1 text-sm md:text-base text-foreground font-medium">
                  <p>👉 Dein K&ouml;rper reduziert Verbrauch</p>
                  <p>👉 erh&ouml;ht Hunger</p>
                  <p>👉 blockiert Fortschritt</p>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  Nicht weil Du versagst.<br />
                  Sondern weil er Dich sch&uuml;tzt.
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center mb-6">
              <p className="text-lg md:text-xl font-bold text-primary leading-snug">
                Das Problem ist nicht, dass Du zu wenig tust.<br />
                Sondern dass Du immer wieder genau das Falsche verst&auml;rkst.
              </p>
            </div>

            <div className="text-center">
              <Button variant="cta" size="xl" asChild className="text-base md:text-lg py-6 md:py-7 px-8">
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Jetzt verstehen, was wirklich passiert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – PERSONALISIERUNG */}
      <section className="py-8 md:py-12 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center mb-8">
              Dein Ergebnis zeigt nicht, dass Du undiszipliniert bist.<br />
              Es zeigt, wie Dein K&ouml;rper aktuell reagiert.
            </p>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Gestresster Stoffwechsel",
                  text: "Dein Körper steht unter Dauerstress. In diesem Zustand priorisiert er Sicherheit – nicht Fettverlust.",
                },
                {
                  title: "Unterversorgter Stoffwechsel",
                  text: "Dein Körper bekommt zu wenig Energie. Deshalb hält er fest, statt loszulassen.",
                },
                {
                  title: "Überangepasster Diät-Stoffwechsel",
                  text: "Dein Körper hat gelernt, mit weniger Energie auszukommen. Und je öfter Du Diäten gemacht hast, desto stärker blockiert er Fortschritt.",
                },
              ].map((block, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                    {block.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – ESKALATION */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
              Die meisten machen jetzt genau das:
            </h2>

            <div className="space-y-1 text-base md:text-lg text-foreground/80 mb-5">
              <p>– noch weniger essen</p>
              <p>– noch mehr trainieren</p>
              <p>– noch mehr Kontrolle</p>
            </div>

            <p className="text-lg md:text-xl font-bold text-primary mb-6">
              Und genau dadurch verst&auml;rken sie das Problem,
              das sie eigentlich l&ouml;sen wollen.
            </p>

            <div className="space-y-2 text-sm md:text-base text-foreground/80">
              <p>– Mehr Disziplin l&ouml;st kein hormonelles Problem</p>
              <p>– Mehr Training l&ouml;st keinen Energiemangel</p>
              <p>– Mehr Kontrolle verst&auml;rkt oft nur den Stress</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – MECHANISMUS */}
      <section className="py-8 md:py-12 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
              Was wirklich in Deinem K&ouml;rper passiert
            </h2>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Dein K&ouml;rper passt sich an.
            </p>

            <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-3">
              Je l&auml;nger Du ihm signalisierst, dass Energie knapp ist oder Stress hoch bleibt,
              desto st&auml;rker reagiert er:
            </p>

            <div className="space-y-1 text-sm md:text-base text-foreground/80 mb-5">
              <p>– er spart Energie</p>
              <p>– er ver&auml;ndert Hormone</p>
              <p>– er reduziert unbewusst Bewegung</p>
            </div>

            <p className="text-base md:text-lg font-medium text-foreground mb-5">
              Stillstand ist kein Fehler.<br />
              Es ist eine Reaktion.
            </p>

            <p className="text-lg md:text-xl font-bold text-primary leading-snug">
              Die eigentliche Frage ist nicht, wie Du mehr machst.<br />
              Sondern wie Du Dein System wieder dazu bringst, loszulassen.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – MINI LÖSUNG */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-bold text-foreground mb-5">
              Die L&ouml;sung ist nicht mehr Druck.
            </p>

            <div className="space-y-2 text-sm md:text-base text-foreground/80">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Dein System aus dem Schutzmodus holen</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>die richtigen Signale setzen</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>wieder Bedingungen schaffen, in denen Ver&auml;nderung m&ouml;glich ist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – PRODUKT */}
      <section className="py-8 md:py-12 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-5">
              Genau darum geht es in diesem Buch.
            </h2>

            <div className="space-y-1 text-base md:text-lg text-foreground/80 mb-6">
              <p>Nicht um mehr Regeln.</p>
              <p>Nicht um mehr Disziplin.</p>
              <p>Nicht um noch eine Di&auml;t.</p>
            </div>

            <p className="text-base md:text-lg font-medium text-foreground mb-5">
              Sondern darum, zu verstehen, was wirklich passiert.
            </p>

            <div className="space-y-2 text-sm md:text-base text-foreground/80">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>warum Dein K&ouml;rper blockiert</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>welche Signale Du bisher falsch interpretierst</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>warum mehr Disziplin das Problem versch&auml;rft</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>wie Du wieder Fortschritt m&ouml;glich machst</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – PREIS */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-7 md:p-10 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              <p className="text-sm text-primary font-medium tracking-wide mb-4 mt-1">
                Exklusiver Rabatt f&uuml;r Quiz-Teilnehmer
              </p>

              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – CTA */}
      <section className="py-8 md:py-12 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-2">
              Du brauchst keinen neuen Plan.
            </p>
            <p className="text-lg md:text-xl font-bold text-foreground mb-6">
              Du brauchst ein neues Verst&auml;ndnis.
            </p>

            <Button variant="cta" size="xl" asChild className="text-base md:text-lg py-6 md:py-7 px-8">
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Jetzt verstehen statt weiter k&auml;mpfen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 – RISIKO */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
              Wenn Du nach dem Lesen keine klare Erkenntnis hast,
              war es nicht das richtige Buch f&uuml;r Dich.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Anbot2Content;
