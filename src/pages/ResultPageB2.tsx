import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';

const ResultPageB2 = () => {
  const typicalSigns = [
    'Starke Müdigkeit',
    'Frieren',
    'Konzentrationsprobleme',
    'Stillstand trotz wenig Essen',
  ];

  const commonMistakes = [
    'Weitere Reduktion',
    'Angst vor Fett',
    '„Clean Eating" ohne ausreichende Energie',
    'Zu wenig Protein',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Header />
      {/* Main Content */}
      <main className="container-wide px-3 sm:px-5 md:px-8 py-10 md:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          
          {/* 1. Headline */}
          <header className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-3">
              Was bei Deinem Stoffwechsel <span className="text-primary">aktuell passiert</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Unterversorgter Stoffwechsel</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Dein Körper bekommt aktuell zu wenig Energie und schützt deshalb seine Reserven.
            </p>
          </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt <strong className="text-primary">kein Willensproblem.</strong>
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-3">
                Dein Körper reagiert aktuell auf Energiemangel.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-3">
                Viele Menschen versuchen in dieser Situation noch weniger zu essen –
                <br />doch genau das kann den Stoffwechsel <strong className="text-primary">weiter blockieren.</strong>
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dein Fettstoffwechsel ist aktuell unterversorgt. Zu wenig Energie, Fett oder 
              Protein über längere Zeit führen dazu, dass der Körper Fettreserven schützt – 
              anstatt sie freizugeben. Der Körper reagiert darauf, indem er Energie spart und Fettreserven eher schützt, statt sie freizugeben.
            </p>
          </section>

          {/* 4. Typical Signs */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Typische Anzeichen
            </h2>
            <ul className="space-y-3">
              {typicalSigns.map((sign, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground">{sign}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-destructive" />
              Häufige Fehler
            </h2>
            <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-5">
              <ul className="space-y-3">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Outlook */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Was Dein Körper jetzt braucht
            </h2>
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-5">
              <p className="text-foreground leading-relaxed">
                Fettverbrennung funktioniert nur, wenn der Körper sich <strong className="text-secondary">sicher und 
                versorgt</strong> fühlt. Das bedeutet: gezielte Nährstoffversorgung statt 
                weitere Einschränkung.
              </p>
            </div>
          </section>

          {/* 6b. Wie Du Deinen Stoffwechsel wieder versorgst */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Wie Du Deinen Stoffwechsel wieder versorgst und in Bewegung bringst
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Gerade wenn Dein K&ouml;rper aktuell auf Sparflamme l&auml;uft
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Wenn Dein K&ouml;rper &uuml;ber l&auml;ngere Zeit zu wenig Energie, Eiwei&szlig; oder Fett bekommt, reagiert er oft nicht mit mehr Freigabe, sondern mit Schutz. Genau deshalb machen noch weniger Essen, noch mehr Verzicht oder noch strengere Kontrolle das Problem h&auml;ufig noch gr&ouml;&szlig;er.
              </p>
              <p>
                Viele merken zwar, dass sie m&uuml;de, frustriert und blockiert sind, reagieren aber trotzdem mit weiterer Reduktion. Das Problem ist nur: Ein unterversorgter Stoffwechsel braucht nicht noch weniger. Er braucht zuerst wieder Versorgung und Sicherheit.
              </p>
              <p>Deshalb habe ich einen klaren Leitfaden entwickelt, der Dir verst&auml;ndlich zeigt,</p>
              <ul className="space-y-2 pl-1">
                {[
                  'warum Unterversorgung Deinen Stoffwechsel ausbremsen kann',
                  'welche Fehler viele in genau dieser Situation machen',
                  'wie Du Dein System wieder stabilisierst, ohne in blinden Verzicht zu rutschen',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Wenn Du verstehen willst, warum Dein K&ouml;rper gerade auf Mangel mit Stillstand reagiert und was ihm wirklich helfen kann, dann ist dieser Leitfaden der richtige n&auml;chste Schritt.
              </p>
            </div>
          </section>

          {/* 7. Buch-Teaser */}
          <section className="mb-12">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                {/* Book Mockup */}
                <div className="w-52 md:w-64 flex-shrink-0">
                  <img
                    src={bookCover}
                    alt="Buchcover: Du bist nicht das Problem"
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>

                {/* Book Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Du bist nicht das Problem
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground mb-5 leading-relaxed">
                    Warum Dein Stoffwechsel auf Mangel mit Stillstand reagiert &ndash;<br />
                    und wie Du wieder in Bewegung kommst
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dieses Buch hilft Dir zu verstehen, warum Dein K&ouml;rper trotz Disziplin oft nicht so reagiert, wie Du es erwartest.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Gerade beim unterversorgten Stoffwechsel liegt das Problem oft nicht in fehlender Konsequenz, sondern in einem System, das &uuml;ber l&auml;ngere Zeit zu wenig bekommen hat und deshalb Reserven sch&uuml;tzt, statt sie freizugeben.
                  </p>

                  <p className="text-sm font-semibold text-foreground mb-3">Du erf&auml;hrst:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'warum zu wenig Energie den Stoffwechsel sp\u00fcrbar ausbremsen kann',
                      'welche typischen Fehler viele aus Angst vor Gewichtszunahme machen',
                      'wie Du Deinem K\u00f6rper wieder mehr Sicherheit und Versorgung gibst',
                      'warum noch mehr Reduktion das Problem oft versch\u00e4rft',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-semibold text-foreground mb-3">Viele Leser berichten schon nach kurzer Zeit von:</p>
                  <ul className="space-y-2">
                    {[
                      'mehr Energie im Alltag',
                      'weniger Frieren und M\u00fcdigkeit',
                      'klareren Entscheidungen bei Ern\u00e4hrung',
                      'weniger Frust beim Abnehmen',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Offer Box */}
              <div className="mt-8 bg-primary/5 border-2 border-primary/15 rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Exklusiver Sonderpreis f&uuml;r Teilnehmer des Stoffwechsel-Quiz
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full h-auto min-h-[3.5rem] whitespace-normal leading-snug text-xs sm:text-sm md:text-base py-4 px-4"
                  asChild
                >
                  <a href="/buch/anbot3g4a3e">
                    Ja &mdash; ich will verstehen, warum mein Stoffwechsel auf Mangel blockiert
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 self-center" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">Sofort verf&uuml;gbar als E-Book</p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <span className="mx-2">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </p>
      </footer>
    </div>
  );
};

export default ResultPageB2;