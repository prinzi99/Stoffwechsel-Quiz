import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb, Check } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';

const ResultPageA3 = () => {
  const typicalSigns = [
    'Ständiger Hunger, obwohl du wenig isst',
    'Gewicht stagniert – oder steigt sogar',
    'Erschöpfung trotz ausreichend Schlaf',
    'Fett lagert sich bevorzugt am Bauch ein',
    'Stimmung im Keller, Antrieb weg',
    'Heißhungerattacken, besonders abends',
  ];

  const commonMistakes = [
    'Noch weniger essen – dein Körper ist bereits im Sparmodus',
    'Noch mehr trainieren – dein System interpretiert das als weiteren Stress',
    'Die nächste Diät starten – dein Stoffwechsel fährt noch weiter runter',
    'Sich für mangelnde Disziplin verurteilen – Disziplin ist kein Stoffwechselhormon',
  ];

  const learnings = [
    'Warum dein Körper trotz Disziplin nicht mehr reagiert – und warum das kein Versagen ist',
    'Wie Cortisol, Leptin und Ghrelin gerade gegen dich arbeiten – und wie du sie wieder auf deine Seite bringst',
    'Warum „noch weniger essen" deinen Stoffwechsel weiter runterfährt – belegt mit über 60 wissenschaftlichen Quellen',
    'Das konkrete 4-Phasen-Protokoll, das deinen Körper Schritt für Schritt aus dem Sparmodus führt',
    'Warum Schlaf, Stress und Trainingsbelastung wichtiger sind als jeder Ernährungsplan',
    'Wie du Heißhunger als Signal liest statt dagegen anzukämpfen',
    'Ein System, das sich an DEIN Leben anpasst – nicht umgekehrt',
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
              Du machst alles richtig.
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight mb-5">
              Und genau das ist das Problem.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Gestresster Stoffwechsel</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Dein Körper steht unter Dauerstress – und macht genau das, wofür er gebaut wurde: überleben statt abnehmen.
            </p>
          </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt kein Willensproblem. Dein Körper steht unter Dauerstress – hormonell, metabolisch, systemisch. <strong className="text-primary">Cortisol auf Dauerhoch, Leptin am Boden, Ghrelin auf Maximum.</strong> Er hat die Notbremse gezogen. Noch eine Diät zu starten, kann den Stoffwechsel weiter blockieren.
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Dein Stoffwechsel hat gelernt, mit immer weniger Energie auszukommen.</p>
              <p>Dein <strong className="text-foreground">Cortisol</strong> – das Stresshormon – läuft auf Dauerhoch. Dein <strong className="text-foreground">Leptin</strong> – das Sättigungshormon – ist am Boden. Dein <strong className="text-foreground">Ghrelin</strong> – das Hungerhormon – dreht auf Maximum.</p>
              <p>Das Ergebnis: Dein Körper denkt, er steckt in einer Hungersnot. Egal was du isst. Egal wie diszipliniert du bist. Er hält fest, was er hat – und fordert mehr.</p>
              <p>Studien zeigen: Schon zwei Nächte mit nur vier Stunden Schlaf lassen Leptin um <strong className="text-foreground">18% sinken</strong> und Ghrelin um <strong className="text-foreground">28% steigen</strong>. Dein Körper simuliert eine Hungersnot – obwohl du gerade gegessen hast.</p>
            </div>
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
                    <XCircle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
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
                Dein Körper braucht keine weitere Diät. Er braucht das Gegenteil: <strong className="text-secondary">Sicherheit</strong>. Ein System, das ihm signalisiert – die Krise ist vorbei. Erst dann lässt er los, was er festhält.
              </p>
            </div>
          </section>

          {/* 6b. Emotionaler Fließtext */}
          <section className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Dein Körper hat nicht aufgehört zu funktionieren.
              </h2>
              <p className="text-lg md:text-xl font-bold text-secondary">
                Er hat sich angepasst.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Dein Ergebnis zeigt nicht, dass du etwas falsch machst. Es zeigt, dass dein System unter Dauerstress steht.</p>
              <p>Du hast kontrolliert gegessen. Kalorien reduziert. Dich diszipliniert durchgezogen. Und am Anfang hat es funktioniert.</p>
              <p>Aber jetzt: Stillstand. Rückschritte. Oder dein Körper reagiert einfach gar nicht mehr.</p>
              <p>Und genau das ist der Punkt, an dem es nicht mehr logisch wirkt. Irgendwann denkst du: <span className="italic text-foreground">„Ich muss einfach noch konsequenter sein."</span></p>
              <p className="font-semibold text-foreground">Genau das macht es schlimmer.</p>
              <p>Dein Körper ist kein Kalorienrechner. Er ist ein <strong className="text-foreground">Überlebenssystem</strong>. Und Überlebenssysteme reagieren nicht auf deine Absichten – sondern auf das, was sie wahrnehmen.</p>
              <p>Wenn er chronisch Energiemangel, Stress und Schlafentzug registriert, zieht er eine klare Schlussfolgerung: <strong className="text-foreground">Bedrohungslage</strong>. Und in einer Bedrohungslage gibt man keine Reserven frei – man verteidigt sie.</p>
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
                <p className="text-lg text-secondary font-semibold mb-4">
                  Warum wiederholte Diäten deinen Stoffwechsel blockieren können – und wie du ihn Schritt für Schritt wieder in Bewegung bringst.
                </p>
                <p className="text-foreground leading-relaxed">
                  Dieses Buch zeigt dir, warum dein Körper nach vielen Diäten, viel Kontrolle und immer neuen Anläufen oft nicht mehr so reagiert, wie du es erwarten würdest. Gerade beim gestressten Stoffwechsel liegt das Problem nicht in fehlender Disziplin, sondern in einem System, das sich über längere Zeit an Mangel, Kontrolle und wiederholte Einschränkung angepasst hat. Dieses Buch erklärt dir, warum dein Körper so reagiert – und gibt dir ein konkretes System, um ihn Schritt für Schritt wieder auf deine Seite zu bringen.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Was Du in diesem Buch lernst */}
          <section className="mb-12 bg-muted/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Was du in diesem Buch lernst
            </h2>
            <ul className="space-y-4">
              {learnings.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center font-bold text-foreground mt-8">
              100+ Seiten. Über 60 wissenschaftliche Quellen. Kein Blabla. Kein Guru. Geschrieben für Menschen mit genau deinem Ergebnis.
            </p>
          </section>

          {/* 9. Nicht nur lesen – direkt anwenden */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
              Nicht nur lesen – direkt anwenden
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Zum Buch bekommst Du kostenlose Online-Tools – entwickelt für Deinen Alltag.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '📋', title: '9 Downloads & Checklisten', desc: 'Stoffwechsel-Reset-Check, Defizit-Phase-Checkliste, Alltags-Checkliste, Ernährungs-Beobachtungsblatt und mehr. Sofort ausdrucken und nutzen.' },
                { icon: '🧮', title: 'Kalorien- & Makro-Rechner', desc: 'Dein persönlicher Online-Rechner. Berechnet deinen individuellen Startpunkt – angepasst an deinen Stoffwechsel-Typ.' },
                { icon: '✅', title: 'Wöchentlicher Bereich', desc: 'Wochenübersicht für Training & Energie, Schlaf- und Erholungsprotokoll, Alltags-Checkliste. Alles online, jederzeit abrufbar.' },
              ].map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 md:py-8 text-center">
                  <span className="text-3xl mb-3 block">{card.icon}</span>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm italic text-muted-foreground mt-6">
              Alles sofort nutzbar. Kein Abo. Kein Upsell.
            </p>
          </section>

          {/* 10. Preis-Box + CTA */}
          <section className="mb-12">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Exklusiver Sonderpreis für Quiz-Teilnehmer:</p>
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;€</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-secondary">9,99&nbsp;€</span>
                </div>
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full h-auto min-h-[4.5rem] whitespace-normal leading-snug text-sm md:text-base py-4 px-4"
                  asChild
                >
                  <a href="https://www.digistore24.com/product/675804?voucher=quizrabatt" target="_blank" rel="noopener noreferrer">
                    Ja – ich will endlich wieder Fortschritt sehen
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 self-center" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">Sofort verfügbar als E-Book</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span>🔒 Sicherer Checkout</span>
                  <span>📱 Auf allen Geräten</span>
                  <span>⚡ Sofortige Lieferung</span>
                </div>
              </div>
            </div>
          </section>

          {/* 11. Dieses Buch ist für Dich, wenn… */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Dieses Buch ist für Dich, wenn…
            </h2>
            <ul className="space-y-4">
              {[
                'Du schon alles versucht hast – weniger essen, mehr Sport, Intervallfasten, Low Carb – und trotzdem nicht weiterkommst',
                'Du das Gefühl hast, dein Stoffwechsel arbeitet gegen dich',
                'Du verstehen willst, warum es nicht funktioniert – statt dem nächsten Trend zu folgen',
                'Du einen Weg suchst, der ohne extreme Diäten, tägliches Wiegen oder ständige Kontrolle funktioniert',
                'Du bereit bist, deinen Körper zu verstehen – statt ihn weiter zu bekämpfen',
                'Du endlich einen klaren Blick auf Ernährung und Stoffwechsel bekommen willst',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary mt-0.5 flex-shrink-0">✅</span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>

      {/* 12. Finaler CTA */}
      <section className="bg-[image:var(--hero-gradient)] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Bereit, das Spiel zu verändern?
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-6">
              Kein Abo. Kein Mengenzählen. Einmal kaufen, sofort loslegen.
            </p>
            <p className="text-xl text-primary-foreground/60 line-through mb-1">34,99&nbsp;€</p>
            <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">9,99&nbsp;€</p>
            <a
              href="https://www.digistore24.com/product/675804?voucher=quizrabatt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
            >
              Jetzt für 9,99&nbsp;€ statt <span className="line-through mx-1">34,99&nbsp;€</span> sichern →
            </a>
            <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-primary-foreground/80">
              <span>🔒 Sicherer Checkout</span>
              <span>📱 Auf allen Geräten</span>
              <span>⚡ Sofortige Lieferung</span>
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

export default ResultPageA3;
