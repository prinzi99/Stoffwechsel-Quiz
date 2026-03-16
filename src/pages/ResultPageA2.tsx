import { Helmet } from "react-helmet-async";
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
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Header />
      {/* Main Content */}
      <main className="container-wide section-padding">
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

          {/* 6b. Wie Du Deinen Stoffwechsel wieder beruhigst */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Wie Du Deinen Stoffwechsel wieder beruhigst und in Bewegung bringst
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Gerade wenn Dein K&ouml;rper aktuell im Stressmodus l&auml;uft
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Wenn Dein Stoffwechsel unter Stress steht, bringen Dich noch mehr Kontrolle, noch weniger Essen oder noch mehr Training oft nicht weiter. Im Gegenteil: Genau das kann den Druck im System weiter erh&ouml;hen.
              </p>
              <p>
                Viele merken zwar, dass ihr K&ouml;rper blockiert, reagieren aber mit noch mehr Disziplin. Das Problem ist nur: Ein gestresster Stoffwechsel braucht nicht noch mehr H&auml;rte. Er braucht zuerst die richtigen Signale.
              </p>
              <p>Deshalb habe ich einen klaren Leitfaden entwickelt, der Dir verst&auml;ndlich zeigt,</p>
              <ul className="space-y-2 pl-1">
                {[
                  'warum Stress Deinen Stoffwechsel sp\u00fcrbar ausbremsen kann',
                  'welche Fehler viele in genau dieser Situation machen',
                  'wie Du wieder mehr Ruhe, Stabilit\u00e4t und Struktur in Dein System bringst',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Wenn Du verstehen willst, warum Dein K&ouml;rper gerade auf Druck mit Widerstand reagiert und was ihm wirklich helfen kann, dann ist dieser Leitfaden der richtige n&auml;chste Schritt.
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
                    Warum Dein Stoffwechsel unter Stress blockiert &ndash;<br />
                    und wie Du wieder in Bewegung kommst
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dieses Buch hilft Dir zu verstehen, warum Dein K&ouml;rper trotz Bem&uuml;hen oft nicht so reagiert, wie Du es erwartest.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    Gerade beim gestressten Stoffwechsel liegt das Problem oft nicht in fehlender Disziplin, sondern in einem System, das dauerhaft unter Druck steht und deshalb Sicherheit vor Fortschritt priorisiert.
                  </p>

                  <p className="text-sm font-semibold text-foreground mb-3">Du erf&auml;hrst:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'warum Stress die Fettverbrennung sp\u00fcrbar ausbremsen kann',
                      'welche typischen Fehler viele in Stressphasen machen',
                      'wie Du Deinem K\u00f6rper wieder mehr Ruhe und Stabilit\u00e4t gibst',
                      'warum noch mehr Verzicht das Problem oft versch\u00e4rft',
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
                      'weniger innerer Unruhe',
                      'weniger Hei\u00dfhunger in stressigen Phasen',
                      'stabilerer Energie \u00fcber den Tag',
                      'mehr Klarheit bei Ern\u00e4hrung und Training',
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
                  className="w-full max-w-md whitespace-normal leading-snug text-xs sm:text-sm md:text-base py-6"
                  asChild
                >
                  <a href="/buch/anbot3g4a3e">
                    Ja &mdash; ich will verstehen, warum mein Stoffwechsel unter Stress blockiert
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
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

export default ResultPageA2;
