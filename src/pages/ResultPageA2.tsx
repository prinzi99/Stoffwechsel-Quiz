import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';

const ResultPageA2 = () => {
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
      <Header />
      {/* Main Content */}
      <main className="container-wide section-padding">
        <div className="max-w-2xl mx-auto">
          
          {/* 1. Headline */}
          <header className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Was bei Deinem <span className="text-primary">Stoffwechsel</span> aktuell passiert
            </h1>
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

          {/* 6b. Book Offer Section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Wie Du Deinen Stoffwechsel wieder stabilisieren kannst
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Viele Menschen verstehen nach der Analyse zwar, warum ihr Stoffwechsel blockiert, 
                wissen aber nicht, wie sie das konkret verändern können.
              </p>
              <p>Oft entsteht dann der gleiche Kreislauf:</p>
              <ul className="space-y-2 pl-1">
                {['noch weniger essen', 'noch härter trainieren', 'noch strengere Regeln'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive/60 mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Doch genau diese Strategien können den Stoffwechsel zusätzlich unter Druck setzen.
              </p>
              <p>Deshalb habe ich einen klaren Leitfaden entwickelt, der erklärt:</p>
              <ul className="space-y-2 pl-1">
                {[
                  'warum der Stoffwechsel blockiert',
                  'welche Fehler viele Menschen unbewusst machen',
                  'wie man das System Schritt für Schritt wieder stabilisieren kann',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Showcase */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                {/* Book Mockup */}
                <div className="w-48 md:w-56 flex-shrink-0">
                  <img
                    src={bookCover}
                    alt="Buchcover: Du bist nicht das Problem"
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Book Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                    Du bist nicht das Problem
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Warum Dein Stoffwechsel blockiert –<br />
                    und wie Du ihn wieder in Bewegung bringst.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dieses Buch erklärt verständlich, wie Stoffwechselblockaden entstehen 
                    und welche einfachen Schritte helfen können, das System wieder zu stabilisieren.
                  </p>
                </div>
              </div>

              {/* Offer Box */}
              <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Sonderpreis für Teilnehmer des Stoffwechsel-Quiz
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-lg text-muted-foreground/50 line-through">24,99 €</span>
                  <span className="text-2xl font-bold text-foreground">19,99 €</span>
                </div>
                <Button
                  variant="cta"
                  size="lg"
                  className="group"
                  asChild
                >
                  <a href="/buch">
                    Mehr zum Buch erfahren
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* 7. CTA */}
          <section className="text-center">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Dein nächster Schritt
              </h3>
              <p className="text-muted-foreground mb-6">
                Erhalte eine ausführliche Auswertung mit konkreten Empfehlungen, 
                die zu Deinem Stoffwechsel-Typ passen.
              </p>
              <Button
                variant="cta"
                size="xl"
                className="w-full sm:w-auto group"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/14yKWsTsyruBggxHCcYNs6lqHpKPf8EYH/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Der Stoffwechsel-Code
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Kein Spam. Kein Abo. Nur Deine persönliche Auswertung.
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

export default ResultPageA2;
