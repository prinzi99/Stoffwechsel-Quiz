import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb } from 'lucide-react';
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
              <p className="font-bold text-foreground text-lg mt-6 mb-4">Genau dafür habe ich dieses Buch geschrieben.</p>
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

          {/* 8. Was Du in diesem Buch lernst */}
          <section className="mb-12 bg-muted/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Was Du in diesem Buch lernst
            </h2>
            <div className="space-y-5">
              {[
                { title: 'Der große Denkfehler', desc: 'Warum „weniger essen = abnehmen" nicht funktioniert – und was die Forschung wirklich zeigt.' },
                { title: 'Stoffwechsel ist kein Schicksal', desc: 'Wie Dein System auf Stress, Schlafmangel und Diäten reagiert – und warum es sich anpasst.' },
                { title: 'Kein Sport = mehr Fettverbrennung?', desc: 'Warum das richtige Maß an Bewegung wichtiger ist als hartes Training.' },
                { title: 'Dein System entschlüsselt', desc: 'Wie Du erkennst, was Dein Körper gerade braucht – statt blind dem nächsten Plan zu folgen.' },
                { title: 'Sicherheit statt Kampf', desc: 'Warum Dein Körper erst loslässt, wenn er sich sicher fühlt – und wie Du das erreichst.' },
                { title: 'Signale statt Regeln', desc: 'Wie Du lernst, Deinem Körper wieder zu vertrauen – statt gegen ihn zu arbeiten.' },
              ].map((ch, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{ch.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
                { icon: '📋', title: '11 Downloads & Checklisten', desc: 'Ernährungs-Beobachtungsblatt, Makronährstoff-Übersicht, Defizit-Phase-Checkliste, Stoffwechsel-Reset-Checkliste u.v.m.' },
                { icon: '🧮', title: 'Kalorien- & Makro-Rechner', desc: 'Dein persönlicher Startpunkt, individuell berechnet. Kein Rätselraten.' },
                { icon: '✅', title: 'Wöchentlicher Bereich', desc: 'Wochenübersicht für Training & Energie, Schlaf- und Erholungsprotokoll, Alltags-Checkliste.' },
              ].map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 md:py-8 text-center">
                  <span className="text-3xl mb-3 block">{card.icon}</span>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10. Wert-Übersicht + CTA */}
          <section className="mb-12">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-5">Das bekommst Du zusammen:</h3>
              <div className="space-y-3 mb-6">
                {[
                  { text: 'Buch (10 Kapitel + Bonuskapitel)', value: '34,99 €' },
                  { text: 'Online-Begleitbereich mit Tools & Rechnern', value: '29,99 €' },
                  { text: '11 Downloads (PDF-Checklisten, Protokolle, Übersichten)', value: '19,99 €' },
                  { text: 'Persönliche Kalorien- & Makro-Berechnung', value: '14,99 €' },
                  { text: 'Regelmäßige Updates & neue Inhalte', value: 'Gratis' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="text-foreground text-sm">✓ {item.text}</span>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-primary/20 pt-4 mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-lg font-bold text-foreground">Gesamtwert</span>
                  <span className="text-xl font-extrabold text-primary line-through">~100&nbsp;€</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Exklusiver Sonderpreis für Quiz-Teilnehmer:</p>
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;€</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-foreground">19,99&nbsp;€</span>
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
                'Du schon alles versucht hast – weniger essen, mehr Sport, Intervallfasten, Low Carb – und trotzdem nicht weiterkommst.',
                'Du das Gefühl hast, Dein Stoffwechsel arbeitet gegen Dich.',
                'Du verstehen willst, warum es nicht funktioniert hat – statt Dich zu fragen, was mit Dir nicht stimmt.',
                'Du einen Weg suchst, der ohne extreme Diäten, tägliches Wiegen oder ständige Kontrolle funktioniert.',
                'Du bereit bist, Deinen Körper zu verstehen – statt ihn weiter zu bekämpfen.',
                'Du endlich einen klaren Blick auf Ernährung und Stoffwechsel bekommen willst.',
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
            <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">19,99&nbsp;€</p>
            <a
              href="https://www.digistore24.com/product/675804?voucher=quizrabatt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
            >
              Jetzt für 19,99&nbsp;€ statt <span className="line-through mx-1">34,99&nbsp;€</span> sichern
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

export default ResultPageB2;