import { Helmet } from "react-helmet-async";
import { AlertCircle, XCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';

const ResultPageA5 = () => {
  const typicalSigns = [
    'Gewicht stagniert trotz gesunder Ernährung',
    'Heißhunger in stressigen Phasen',
    'Müdigkeit am Morgen',
    'Besonders hartnäckiges Bauchfett',
  ];

  const commonMistakes = [
    'Noch weniger essen',
    'Noch striktere Diäten',
    'Mahlzeiten auslassen',
    'Mehr Training statt mehr Erholung',
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
              Was bei Deinem <span className="text-primary">Stoffwechsel</span> aktuell passiert
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Gestresster Stoffwechsel</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Das bedeutet: Dein Körper befindet sich aktuell eher im Stressmodus als im Fettverbrennungsmodus.
            </p>
           </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Viele Menschen kämpfen nicht mit fehlender Disziplin, sondern mit einem Körper, 
                der dauerhaft unter Spannung steht. <strong className="text-primary">Dein Ergebnis passt sehr gut zu diesem Muster.</strong>
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dein Stoffwechsel befindet sich aktuell in einem Stressmodus. Das kann durch mentalen 
              Druck, Schlafmangel oder ständige Einschränkungen entstehen. In diesem Zustand 
              priorisiert der Körper Sicherheit – nicht Fettverbrennung.
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
                Dein Körper braucht <strong className="text-secondary">Beruhigung, Struktur und Planung</strong> – nicht mehr 
                Disziplin oder Druck. Die gute Nachricht: Mit den richtigen Signalen kann sich 
                Dein Stoffwechsel wieder normalisieren.
              </p>
            </div>
          </section>

          {/* NEW: Two things to do today */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Zwei Dinge, die du ab heute tun kannst
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Du musst nicht auf den kompletten Plan warten. Diese zwei Schritte kannst du sofort umsetzen – und sie sind wichtiger, als die meisten glauben:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  <strong>Kein aggressives Defizit.</strong> Dein Körper braucht zuerst Sicherheit, nicht weniger Kalorien. Iss vorerst auf Erhaltungsniveau – ein Defizit kommt später, in kleinen Schritten.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  <strong>Protein bei jeder Hauptmahlzeit.</strong> Das signalisiert deinem Körper Stabilität und schützt deine Muskeln – gerade in stressigen Phasen.
                </span>
              </li>
            </ul>
          </section>
          <section className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Du machst alles richtig.
              </h2>
              <p className="text-lg md:text-xl font-bold text-primary">
                Und genau das ist das Problem.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Dein Ergebnis zeigt nicht, dass Du zu wenig Disziplin hast.</p>
              <p>Es zeigt, dass Dein K&ouml;rper unter Stress reagiert.</p>
              <div className="pt-2">
                <p>Du gibst Dir mehr M&uuml;he als die meisten.</p>
                <p>Kontrollierst mehr. Planst mehr. Verzichtest mehr.</p>
                <p>Und merkst, dass es immer weniger bringt.</p>
              </div>
              <p className="font-semibold text-foreground">Und genau das h&auml;lt Dich fest.</p>
              <div className="pt-2">
                <p>Irgendwann denkst Du:</p>
                <p className="italic text-foreground">&bdquo;Ich muss mich einfach mehr zusammenrei&szlig;en.&ldquo;</p>
              </div>
              <p className="font-semibold text-foreground">Tut es nicht.</p>
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
                  Warum Dein Stoffwechsel auf Stress reagiert – und wie Du ihn Schritt für Schritt wieder in Bewegung bringst.
                </p>
                <p className="text-foreground leading-relaxed mb-5">
                  Dieses Buch zeigt Dir, warum Disziplin und Kontrolle Deinen Fortschritt blockieren – und was Dein Körper stattdessen braucht, um wieder Fett zu verbrennen. Das gesamte Wissen auf dieser Seite stammt aus meinem Buch. Deinen konkreten Aktionsplan bekommst du gleich – dazu unten mehr.
                </p>
                <span className="inline-flex items-center gap-2 bg-secondary/15 text-secondary font-semibold text-sm px-4 py-1.5 rounded-full">
                  ✅ Über 500 Leser
                </span>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* NEW: Email action plan */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
                Dein persönlicher Aktionsplan kommt jetzt per E-Mail
              </h2>
              <p className="text-foreground leading-relaxed text-center">
                Du hast gerade verstanden, WAS bei deinem Stoffwechsel passiert. Den genauen Fahrplan – deinen kompletten Aktionsplan für den gestressten Stoffwechsel, mit Phasen, Kennzahlen und täglicher Struktur – schicke ich dir gleich per E-Mail. Kostenlos.
              </p>
              <p className="text-foreground leading-relaxed text-center mt-4">
                Schau in den nächsten Minuten in dein Postfach (auch im Spam-Ordner).
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default ResultPageA5;
