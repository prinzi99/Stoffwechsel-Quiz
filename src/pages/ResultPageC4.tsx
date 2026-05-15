import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';
import C4StickyMobileCTA from '@/components/buch/C4StickyMobileCTA';
import C4StickyDesktopCTA from '@/components/buch/C4StickyDesktopCTA';
import C4MiniClose from '@/components/buch/C4MiniClose';
import C4InactivityPopup from '@/components/buch/C4InactivityPopup';
import C4ExitIntentPopup from '@/components/buch/C4ExitIntentPopup';
import C4CountdownTimer from '@/components/buch/C4CountdownTimer';

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

const ResultPageC4 = () => {
  const typicalSigns = [
    'Abnehmen wird trotz Disziplin immer schwieriger',
    'Gewicht stagniert – oder geht trotz Defizit hoch',
    'Ständige Beschäftigung mit Essen und Kalorien',
    'Heißhunger trotz „satter" Mahlzeiten',
    'Das Gefühl, dass der eigene Körper nicht mehr mitmacht',
  ];

  const commonMistakes = [
    'Neue Diät starten – der Körper kennt das Muster und reagiert noch schneller mit Anpassung',
    'Kalorien weiter senken – verstärkt den Spareffekt',
    'Mehr Cardio – verbrennt Struktur statt Fett',
  ];

  const learnings = [
    { title: 'Der große Denkfehler', desc: 'Warum „weniger essen = abnehmen" nicht funktioniert – und was die Forschung wirklich zeigt' },
    { title: 'Stoffwechsel ist kein Schicksal', desc: 'Wie Dein Körper auf Diäten, Einschränkungen und Disziplin reagiert – und warum er sich anpasst' },
    { title: 'Kein Sport ≠ mehr Fettverbrennung?', desc: 'Warum mehr Bewegung ohne die richtige Versorgung nach hinten losgeht' },
    { title: 'Dein System entschlüsselt', desc: 'Welche Stellschrauben und Bedingungen genau bestimmen, ob Dein Körper Fett freigibt oder festhält' },
    { title: 'Sicherheit statt Kampf', desc: 'Warum Dein Körper erst loslässt, wenn er sich sicher fühlt – und wie Du dieses Signal sendest' },
    { title: 'Signale statt Regeln', desc: 'Warum Hunger und Erschöpfung keine Schwäche sind – sondern Informationen, die Du nutzen kannst' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <C4ExitIntentPopup />
      <C4InactivityPopup />
      <C4StickyMobileCTA />
      <C4StickyDesktopCTA />
      <Header />

      <main className="container-wide px-3 sm:px-5 md:px-8 py-10 md:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">

          {/* 1. Headline */}
          <header className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
              Du bist diszipliniert.
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight mb-5">
              Und genau das ist das Problem.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Überangepasster Diät-Stoffwechsel</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Dein Körper hat sich an deine Kontrolle angepasst – und reagiert nicht mehr so, wie er sollte. Nicht weil du zu wenig machst, sondern weil du zu lange zu viel gemacht hast.
            </p>
          </header>

          {/* 2. Validation */}
          <section className="mb-8">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-7">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt kein Willenskraftproblem. Dein Körper hat sich an Jahre mit Kontrolle und Disziplin angepasst – metabolisch, hormonell, systemisch. <strong className="text-primary">Sein Grundumsatz ist heruntergeregelt, seine Effizienz maximiert.</strong> Er hat die Spielregeln geändert – und arbeitet jetzt gegen deine Anstrengung.
              </p>
            </div>
          </section>

          {/* 3. Typische Anzeichen (3 Punkte) */}
          <section className="mb-8">
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

          {/* 4. Häufige Fehler */}
          <section className="mb-8">
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

          {/* 5. Was Dein Körper jetzt braucht */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Was Dein Körper jetzt braucht
            </h2>
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-5">
              <p className="text-foreground leading-relaxed">
                Dein Körper braucht keine weitere Diät. Er braucht das Gegenteil: <strong className="text-secondary">Struktur und Flexibilität</strong>. Ein System, das ihm signalisiert – die Sparphase ist vorbei. Erst dann lässt er los, was er festhält.
              </p>
            </div>
          </section>

          {/* 6. Überleitung zum Buch */}
          <section className="mb-10">
            <div className="text-center mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Genau für diese Situation habe ich dieses Buch geschrieben.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Kein neues Regelwerk. Kein Ernährungsplan. Sondern eine ehrliche Erklärung, warum dein Körper deine Disziplin gegen dich verwendet – und wie du aus diesem Kreislauf aussteigst.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <div className="w-44 md:w-52 flex-shrink-0">
                <img
                  src={bookCover}
                  alt="Buchcover: Du bist nicht das Problem"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Du bist nicht das Problem
                </h3>
                <p className="text-lg text-secondary font-semibold mb-3">
                  Warum dein Körper deine Disziplin gegen dich verwendet – und wie du ihn Schritt für Schritt wieder in Bewegung bringst.
                </p>
                <p className="text-sm text-muted-foreground">
                  Von Philipp Prinz · 100+ Seiten · 10 Kapitel · Über 60 wissenschaftliche Quellen
                </p>
              </div>
            </div>
          </section>

          {/* 7. Kapitel-Preview */}
          <section className="mb-8 bg-muted/50 rounded-2xl p-5 md:p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              Was dich in diesem Buch erwartet:
            </h3>
            <ul className="space-y-2">
              {[
                'Warum wiederholte Diäten deinen Grundumsatz dauerhaft senken – und wie du ihn wieder anhebst',
                'Der große Denkfehler: Disziplin ist kein Stoffwechselhormon',
                'Raus aus dem Sparmodus: Das konkrete 4-Phasen-Protokoll',
                'Vom Plan zur Architektur: Ein System, das sich an dein Leben anpasst',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">✓</span>
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Countdown Timer */}
          <section className="mb-4">
            <C4CountdownTimer />
          </section>

          {/* EARLY CTA – Preis-Box #1 */}
          <section className="mb-12">
            <div id="preis-box-1" className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-5 text-center">
                Das komplette Stoffwechsel-Reset System
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  { text: 'E-Book „Du bist nicht das Problem" (100+ Seiten)', value: '29,99 €' },
                  { text: 'Online-Bonusbereich mit Strategien & Mindset', value: '20,00 €' },
                  { text: '9 PDFs & Checklisten (u.a. 3-Phasen-Plan)', value: '15,00 €' },
                  { text: 'Kalorien-Rechner & Makro-Tools', value: '5,00 €' },
                  { text: 'Alle zukünftigen Updates', value: 'Kostenlos' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="text-foreground text-sm">✓ {item.text}</span>
                    <span className="text-muted-foreground text-sm whitespace-nowrap font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-primary/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-foreground">Gesamtwert</span>
                  <span className="text-xl font-extrabold text-primary">69,99&nbsp;€</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mb-4">
                Alles was du brauchst, um aus dem Diät-Teufelskreis rauszukommen – für weniger als die Hälfte des Wertes.
              </p>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Exklusiver Sonderpreis für Quiz-Teilnehmer:</p>
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="text-lg text-muted-foreground/50 line-through">69,99&nbsp;€</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-secondary">29,99&nbsp;€</span>
                </div>
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full h-auto min-h-[4.5rem] whitespace-normal leading-snug text-sm md:text-base py-4 px-4"
                  asChild
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ja – ich will endlich meinen Stoffwechsel verstehen
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 self-center" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">Sofort verfügbar als E-Book</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-muted-foreground">
                  <span>🔒 Sicherer Checkout</span>
                  <span>📥 Sofort-Download</span>
                  <span>🔄 14-Tage-Garantie</span>
                </div>
              </div>
            </div>
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
                Dein Körper braucht keine weitere Ernährungsumstellung – und erst recht nicht noch mehr Kontrolle. Er braucht <strong className="text-secondary">Struktur und Flexibilität</strong>. Ein System, das ihm zeigt, dass die Sparphase vorbei ist – und dass er wieder normal arbeiten darf.
              </p>
            </div>
          </section>

          {/* Mini-Close (mobile re-engagement) */}
          <div className="md:hidden">
            <C4MiniClose
              id="mini-close-1"
              headline="Genau das löst dieses Buch."
              cta="Jetzt für 29,99 € sichern"
            />
          </div>

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
                  Dieses Buch zeigt Dir, warum Dein Körper gerade gegen Deine Disziplin arbeitet – und wie Du ihn Schritt für Schritt wieder in Bewegung bringst.
                </p>
                <p className="text-foreground leading-relaxed">
                  Dieses Buch zeigt Dir, warum Disziplin und Kontrolle Deinen Fettstoffwechsel blockieren – und was Dein Körper stattdessen braucht, um wieder Fett zu verbrennen.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Was Du in diesem Buch lernst */}
          <section className="mb-12 bg-muted/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Was Du in diesem Buch lernst
            </h2>
            <ul className="space-y-4">
              {learnings.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5 text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-foreground leading-relaxed">
                    <strong className="block">{item.title}</strong>
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-center font-bold text-foreground mt-8">
              100+ Seiten. Über 60 wissenschaftliche Quellen. Geschrieben für Menschen mit genau deinem Ergebnis.
            </p>
          </section>

          {/* 9. Online-Tools KOMPAKT */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
              Nicht nur lesen – direkt anwenden
            </h2>
            <p className="text-center text-muted-foreground mb-6">
              Inklusive kostenlose Online-Tools für Deinen Alltag.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '📋', title: '9 Checklisten & PDFs' },
                { icon: '🧮', title: 'Kalorien- & Makro-Rechner' },
                { icon: '✅', title: 'Wöchentlicher Online-Bereich' },
              ].map((card, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                  <span className="text-3xl mb-2 block">{card.icon}</span>
                  <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* 10. Finaler CTA mit Countdown */}
      <section className="bg-[image:var(--hero-gradient)] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6">
              <C4CountdownTimer />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Bereit für deinen Stoffwechsel-Reset?
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-6">
              Kein Abo. Kein Hörensagen. Einmal kaufen, sofort loslegen.
            </p>
            <p className="text-xl text-primary-foreground/60 line-through mb-1">69,99&nbsp;€</p>
            <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">29,99&nbsp;€</p>
            <a
              href={DIGISTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
            >
              Jetzt für nur 29,99&nbsp;€ holen →
            </a>
            <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-primary-foreground/80">
              <span>🔒 Sicherer Checkout</span>
              <span>📥 Sofort-Download</span>
              <span>🔄 14-Tage-Garantie</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 pb-32 md:pb-24 text-center">
        <p className="text-sm text-muted-foreground">
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <span className="mx-2">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </p>
      </footer>
    </div>
  );
};

export default ResultPageC4;
