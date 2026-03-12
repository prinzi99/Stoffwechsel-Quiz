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
      <Header />
      {/* Main Content */}
      <main className="container-wide section-padding">
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
              Das bedeutet: Dein Körper bekommt aktuell zu wenig Energie und schützt deshalb seine Reserven.
            </p>
          </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt kein Willensproblem, sondern <strong className="text-primary">einen Körper, 
                der auf Mangel reagiert.</strong>
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
              anstatt sie freizugeben.
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

          {/* 6b. Book Offer Section */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Wie Du Deinen Stoffwechsel wieder in Bewegung bringen kannst
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Gerade wenn Dein Körper aktuell auf Sparflamme läuft
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-4">
              Für Menschen mit einem unterversorgten Stoffwechsel
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Gerade wenn Dein Körper dauerhaft zu wenig Energie bekommt, können typische 
                Strategien wie noch weniger essen oder noch mehr Verzicht das Problem sogar verstärken.
              </p>
              <p>
                Viele Menschen verstehen nach der Analyse zwar, warum ihr Stoffwechsel blockiert, 
                wissen aber nicht, wie sie das konkret verändern können.
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
              <p className="mt-4">
                Der Leitfaden richtet sich speziell an Menschen, deren Stoffwechsel durch Unterversorgung oder zu strenge Einschränkungen blockiert ist.
              </p>
            </div>

            {/* Social Proof */}
            <p className="text-xs text-muted-foreground/70 text-center mb-4">
              Viele Teilnehmer mit einem unterversorgten Stoffwechsel nutzen an dieser Stelle den Leitfaden, um ihr System wieder zu stabilisieren.
            </p>

            {/* Book Showcase */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md">
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
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dieses Buch erklärt verständlich, wie Stoffwechselblockaden entstehen 
                    und welche einfachen Schritte helfen können, das System wieder zu stabilisieren.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">Du erfährst:</p>
                  <ul className="space-y-1.5">
                    {[
                      'warum Dein Stoffwechsel blockiert',
                      'welche Fehler viele Menschen unbewusst machen',
                      'wie Du Dein System Schritt für Schritt wieder in Bewegung bringen kannst',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm font-medium text-foreground mt-5 mb-2">Viele Leser berichten bereits nach kurzer Zeit von:</p>
                  <ul className="space-y-1.5">
                    {[
                      'mehr Energie im Alltag',
                      'weniger Frieren und Müdigkeit',
                      'klareren Entscheidungen bei Ernährung und Training',
                      'weniger Frust beim Abnehmen',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Offer Box */}
              <div className="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Exklusiver Sonderpreis für Teilnehmer des Stoffwechsel-Quiz
                </p>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-lg text-muted-foreground/50 line-through">24,99 €</span>
                  <span className="text-2xl font-bold text-foreground">19,99 €</span>
                </div>
                <p className="text-xs text-muted-foreground/60 mb-4">Dieses Angebot gilt nur für Teilnehmer des Stoffwechsel-Quiz.</p>
                <Button
                  variant="cta"
                  size="lg"
                  className="group"
                  asChild
                >
                  <a href="/buch">
                    Mehr zum Buch & Bonus erfahren
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground/50 mt-2">Sofort verfügbar als E-Book.</p>
                <p className="text-xs text-muted-foreground/50 mt-1">Bereits von vielen Lesern genutzt, um ihren Stoffwechsel besser zu verstehen.</p>
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