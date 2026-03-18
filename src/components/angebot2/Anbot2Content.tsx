import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const Anbot2Content = () => {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <section className="pt-2 pb-3 md:pt-5 md:pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* HEADLINE */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground leading-[1.08] text-center mb-1.5 md:mb-3">
              Du machst alles richtig.{" "}
              <span className="text-primary">
                Und genau das ist das Problem.
            </span>
          </h1>

          {/* NACH HEADLINE */}
          <p className="text-sm md:text-lg text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-1 md:mb-2">
            Denn genau das bringt Dich immer wieder zur&uuml;ck an denselben Punkt.
          </p>
          <p className="text-sm md:text-base text-foreground/80 leading-snug text-center max-w-2xl mx-auto mb-0 md:mb-2">
            Du f&auml;ngst neu an &ndash; Du ziehst durch.<br />
            Und trotzdem landest Du wieder genau da, wo Du vorher warst.
          </p>

          {/* DESKTOP: 2-column / MOBILE: stacked */}
          {/* PRODUKT + TEASER */}
          <p className="text-sm md:text-base text-foreground/80 leading-snug text-center md:text-left max-w-2xl mx-auto mb-1 md:mb-2">
            Dieses Buch zeigt Dir, warum Dein K&ouml;rper blockiert
            &ndash; und warum alles, was Du bisher versucht hast, Dein Problem verst&auml;rkt hat.
          </p>

          {/* 2-column: Book + Bullets (always side by side) */}
          <div className="flex flex-row items-start gap-3 md:gap-8 mb-2 md:mb-3">
            {/* LEFT – Book image */}
            <div className="w-28 sm:w-36 md:w-60 flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                fetchPriority="high"
                width={800}
                height={1067}
              />
            </div>

            {/* RIGHT – Bullets */}
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base font-semibold text-foreground mb-0.5">
                Im Buch lernst Du:
              </p>
              <div className="space-y-0.5 text-xs md:text-sm text-foreground/80">
                <p>&ndash; warum Dein K&ouml;rper Deinen Fortschritt aktiv ausbremst &ndash; obwohl Du alles richtig machst</p>
                <p>&ndash; warum Dein Kalorienverbrauch sinkt, ohne dass Du es bemerkst</p>
                <p>&ndash; warum mehr Disziplin Dein Problem verst&auml;rkt statt l&ouml;st</p>
                <p>&ndash; und wie Du diesen Kreislauf endlich durchbrichst</p>
              </div>
            </div>
          </div>

          {/* Full-width below */}
          <div className="space-y-1.5 md:space-y-2.5 max-w-2xl mx-auto md:mx-0">
            {/* MECHANISMUS */}
            <div className="text-xs md:text-sm text-foreground/80 leading-snug">
              <p>
                Dein K&ouml;rper ist kein Taschenrechner.
                <span className="font-medium text-foreground"> Er ist ein Schutzsystem.</span>
              </p>
            </div>

            {/* MIC DROP – freigestellt */}
            <div className="py-2 md:py-3">
              <p className="text-sm md:text-base font-bold text-primary leading-snug">
                Je mehr Du versuchst abzunehmen,<br />
                desto besser wird Dein K&ouml;rper darin, es zu verhindern.
              </p>
            </div>

            {/* PUNCH-SATZ */}
            <p className="text-xs md:text-sm font-medium text-foreground/70 italic leading-snug">
              Danach wei&szlig;t Du, warum es bisher nicht funktioniert hat.
            </p>

            {/* PREIS + CTA */}
            <div className="bg-card border-2 border-primary/30 rounded-xl p-3 md:p-5 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              <p className="text-xs md:text-sm text-primary font-medium tracking-wide mb-1">
                Exklusiv f&uuml;r Quiz-Teilnehmer
              </p>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-sm md:text-base text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
              </div>
              <Button variant="cta" size="xl" asChild className="w-full text-sm md:text-base py-3 md:py-5 h-auto whitespace-normal">
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Jetzt verstehen, warum es bisher nicht funktioniert hat
                </a>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Änderung 6 – IDENTIFIKATION */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl font-bold text-foreground mb-5">
              Du kennst das:
            </p>
            <div className="space-y-2 text-base md:text-lg text-foreground/80 mb-6">
              <p>– Du isst weniger und erwartest Fortschritt</p>
              <p>– Du bist diszipliniert, aber nichts ver&auml;ndert sich</p>
              <p>– Du strengst Dich an – und bleibst trotzdem stehen</p>
            </div>
            <p className="text-lg md:text-xl font-bold text-primary">
              Und genau hier beginnt der Denkfehler.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 – PERSONALISIERUNG (Änderung 7) */}
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

      {/* SECTION 3 – ESKALATION (Änderung 8) */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
              Die meisten machen jetzt genau das – und genau dadurch verschlimmern sie das Problem:
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

      {/* SECTION 4 – MECHANISMUS (Änderung 9) */}
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

            <p className="text-lg md:text-xl font-bold text-primary leading-snug mb-5">
              Die eigentliche Frage ist nicht, wie Du mehr machst.<br />
              Sondern wie Du Dein System wieder dazu bringst, loszulassen.
            </p>

            {/* Änderung 9 – Ergänzung */}
            <p className="text-base md:text-lg font-medium text-foreground">
              Stillstand ist kein Fehler.<br />
              Es ist eine Reaktion.
            </p>
          </div>
        </div>
      </section>

      {/* Änderung 10 – POINT OF NO RETURN */}
      <section className="py-8 md:py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl font-bold text-primary leading-snug">
              Wenn Du das einmal verstanden hast,<br />
              kannst Du nicht mehr so weitermachen wie bisher.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – MINI LÖSUNG */}
      <section className="py-8 md:py-12 bg-section-alt">
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

      {/* SECTION 6 – PRODUKT (Änderung 11) */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-5">
              Genau darum geht es in diesem Buch.
            </h2>

            <div className="space-y-1 text-base md:text-lg text-foreground/80 mb-6">
              <p>Kein Plan.</p>
              <p>Keine Regeln.</p>
              <p>Keine Motivation.</p>
            </div>

            <p className="text-base md:text-lg font-medium text-foreground mb-5">
              Sondern ein klares Verst&auml;ndnis davon, was wirklich passiert.
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

      {/* SECTION 7 – PREIS (Änderung 12) */}
      <section className="py-8 md:py-12 bg-section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-7 md:p-10 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

              <p className="text-sm text-primary font-medium tracking-wide mb-2 mt-1">
                Exklusiver Rabatt f&uuml;r Quiz-Teilnehmer
              </p>
              <p className="text-base text-foreground/80 mb-4">
                Statt 34,99&nbsp;&euro; heute nur
              </p>

              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 – CTA (Änderung 13) */}
      <section className="py-8 md:py-12 bg-background">
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
                Jetzt verstehen, warum Dein K&ouml;rper blockiert
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 9 – RISIKO (Änderung 14) */}
      <section className="py-6 md:py-8 bg-section-alt">
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
