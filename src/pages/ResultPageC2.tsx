import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';

const ResultPageC2 = () => {
  const typicalSigns = [
    'Abnehmen wird trotz Disziplin immer schwieriger',
    'Schnelle Gewichtszunahme nach Diäten',
    'Kaum Spielraum bei Ernährung',
    'Frust trotz Kontrolle',
  ];

  const commonMistakes = [
    'Neue Diät starten',
    'Erneutes Kaloriendefizit',
    'immer neue Diäten ausprobieren',
    'Angst vor Erhöhungen',
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
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Überangepasster Diät-Stoffwechsel</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Dein Körper hat sich an wiederholte Diäten angepasst und schützt seine Reserven besonders stark.
            </p>
          </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt <strong className="text-primary">kein Willensproblem.</strong>
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-3">
                Viele Diäten hinterlassen Spuren – Dein Körper zeigt ein sehr typisches Muster nach wiederholten Einschränkungen.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-3">
                Noch eine Diät zu starten, kann den Stoffwechsel <strong className="text-primary">weiter blockieren.</strong>
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dein Stoffwechsel hat gelernt, mit immer weniger Energie auszukommen. Dadurch 
              werden Fettreserven besonders stark geschützt – selbst bei strenger Ernährung 
              passiert wenig oder gar nichts. Der Körper reagiert darauf, indem er den Verbrauch weiter senkt und Fettreserven noch stärker festhält.
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
                Hier braucht es <strong className="text-secondary">Strategie und Individualisierung</strong> – nicht noch 
                mehr Verzicht. Dein Stoffwechsel muss wieder lernen, dass Energie verfügbar ist.
              </p>
            </div>
          </section>

          {/* 6b. Überleitung zum Buch */}
          <section className="mb-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-foreground">Dein Ergebnis zeigt nicht, dass Du etwas falsch machst.</p>
              <p className="text-foreground">Es zeigt, dass Dein Körper sich angepasst hat.</p>
              <div className="pt-2">
                <p>Du hast kontrolliert gegessen.</p>
                <p>Kalorien reduziert.</p>
                <p>Dich diszipliniert durchgezogen.</p>
              </div>
              <p className="text-foreground">Und am Anfang hat es funktioniert.</p>
              <div className="pt-2">
                <p>Aber jetzt:</p>
                <p>Stillstand.</p>
                <p>Rückschritte.</p>
                <p>Oder Dein Körper reagiert gar nicht mehr.</p>
              </div>
              <p className="text-foreground font-semibold">Und genau das ist der Punkt, an dem alles kippt.</p>
              <div className="pt-2">
                <p>Irgendwann denkst Du:</p>
                <p className="italic text-foreground">„Ich muss einfach noch konsequenter sein."</p>
              </div>
              <p className="font-semibold text-foreground">Genau das macht es schlimmer.</p>
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
                    Warum wiederholte Di&auml;ten Deinen Stoffwechsel blockieren k&ouml;nnen &ndash;<br />
                    und wie Du wieder in Bewegung kommst
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dieses Buch hilft Dir zu verstehen, warum Dein K&ouml;rper nach vielen Di&auml;ten, viel Kontrolle und immer neuen Anl&auml;ufen oft nicht mehr so reagiert, wie Du es erwarten w&uuml;rdest.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Gerade beim &uuml;berangepassten Di&auml;t-Stoffwechsel liegt das Problem oft nicht in fehlender Disziplin, sondern in einem System, das sich &uuml;ber l&auml;ngere Zeit an Mangel, Kontrolle und wiederholte Einschr&auml;nkung angepasst hat.
                  </p>

                  <p className="text-sm font-semibold text-foreground mb-3">Du erf&auml;hrst:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'warum wiederholte Di\u00e4ten Deinen Fortschritt immer schwerer machen k\u00f6nnen',
                      'welche typischen Fehler viele trotz Ehrgeiz immer wiederholen',
                      'wie Du Deinen Stoffwechsel Schritt f\u00fcr Schritt wieder stabilisierst',
                      'warum noch mehr Druck oft genau das falsche Signal ist',
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
                      'mehr Ruhe im Kopf beim Essen',
                      'weniger Frust nach R\u00fcckschl\u00e4gen',
                      'klareren Entscheidungen im Alltag',
                      'einem besseren Verst\u00e4ndnis f\u00fcr den eigenen K\u00f6rper',
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
                    Ja &mdash; ich will verstehen, warum mein Stoffwechsel nach vielen Di&auml;ten blockiert
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

export default ResultPageC2;
