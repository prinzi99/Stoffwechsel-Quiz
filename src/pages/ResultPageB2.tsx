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
              Du gibst Dir Mühe.<br />
              <span className="text-primary">Und genau das reicht gerade nicht.</span>
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

          {/* 6b. Überleitung zum Buch */}
          <section className="mb-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-foreground">Dein Ergebnis zeigt nicht, dass Du undiszipliniert bist.</p>
              <p className="text-foreground">Es zeigt, dass Dein Körper unterversorgt ist.</p>
              <div className="pt-2">
                <p>Du isst bewusst.</p>
                <p>Achte auf Qualität.</p>
                <p>Versuchst, alles richtig zu machen.</p>
              </div>
              <div className="pt-2">
                <p>Und trotzdem fühlst Du Dich:</p>
                <p>müde</p>
                <p>leer</p>
                <p>und fragst Dich, warum selbst das nicht reicht.</p>
              </div>
              <div className="pt-2">
                <p>Irgendwann denkst Du:</p>
                <p className="italic text-foreground">„Ich esse doch schon so wenig… warum passiert nichts?"</p>
              </div>
              <p className="font-semibold text-foreground">Genau das ist das Problem.</p>
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

                  <p className="text-sm font-semibold text-foreground mb-3">Genau deshalb brauchst Du dieses Buch.</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'warum Dein Körper Energie zurückhält, obwohl Du wenig isst',
                      'warum „weniger essen" Deinen Stoffwechsel noch weiter ausbremst',
                      'warum gesunde Ernährung allein nicht reicht, wenn Deinem System Energie fehlt',
                      'und wie Du Deinen Körper wieder versorgst, ohne zuzunehmen',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="py-6 my-2 border-y border-primary/20">
                    <p className="text-base md:text-lg font-extrabold text-primary leading-snug">
                      Je weniger Du Deinem Körper gibst,<br />
                      desto mehr hält er zurück.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm md:text-base font-medium text-muted-foreground mb-6">
                Wenn Du das hier nicht verstehst, wird genau das so bleiben.
              </p>
              <div className="bg-primary/5 border-2 border-primary/15 rounded-xl p-6 text-center">
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
                    Ja – ich will endlich wieder Fortschritt sehen
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