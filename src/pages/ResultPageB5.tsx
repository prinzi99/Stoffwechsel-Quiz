import { Helmet } from "react-helmet-async";
import { AlertCircle, XCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';

const ResultPageB5 = () => {
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
              <p className="font-bold text-foreground text-lg mt-6 mb-4">Dafür habe ich dieses Buch geschrieben.</p>
            </div>
          </section>

          {/* 7. Buch-Intro mit Cover */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-48 md:w-56 flex-shrink-0">
                <img
                  src={bookCover}
                  alt="Buchcover: Du bist nicht das Problem"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Du bist nicht das Problem
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Warum Dein Stoffwechsel auf Mangel mit Stillstand reagiert – und wie Du ihn Schritt für Schritt wieder in Bewegung bringst.
                </p>
                <p className="text-foreground leading-relaxed mb-5">
                  Dieses Buch zeigt Dir, warum Disziplin und Kontrolle Deinen Fortschritt blockieren – und was Dein Körper stattdessen braucht, um wieder Fett zu verbrennen.
                </p>
                <span className="inline-flex items-center gap-2 bg-secondary/15 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full">
                  ✅ Über 500 Leser
                </span>
              </div>
            </div>
          </section>

          {/* 8. Abschluss */}
          <section className="mb-12">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Dein persönlicher Aktionsplan kommt jetzt per E-Mail
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du hast gerade verstanden, WAS bei deinem Stoffwechsel passiert. Den genauen Fahrplan – deinen kompletten Aktionsplan für den unterversorgten Fettstoffwechsel, mit Phasen, Kennzahlen und täglicher Struktur – schicke ich dir gleich per E-Mail. Kostenlos.
              </p>
              <p className="text-foreground font-medium">
                Schau in den nächsten Minuten in dein Postfach (auch im Spam-Ordner).
              </p>
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

export default ResultPageB5;
