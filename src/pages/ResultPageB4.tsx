import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';
import B4ExitIntentPopup from '@/components/buch/B4ExitIntentPopup';
import B4StickyMobileCTA from '@/components/buch/B4StickyMobileCTA';
import B4StickyDesktopCTA from '@/components/buch/B4StickyDesktopCTA';
import B4InactivityPopup from '@/components/buch/B4InactivityPopup';
import B4MiniClose from '@/components/buch/B4MiniClose';
import B4CountdownTimer from '@/components/buch/B4CountdownTimer';
import ActionPlanHighlight from '@/components/buch/ActionPlanHighlight';

const ResultPageB4 = () => {
  const typicalSigns = [
    'Ständige Müdigkeit – trotz genug Schlaf',
    'Gewicht stagniert – obwohl du wenig isst',
    'Heißhunger auf Süßes oder Fettiges',
  ];

  const learnings = [
    { title: 'Der große Denkfehler', desc: 'Warum „weniger essen" nicht funktioniert – und was die Forschung wirklich zeigt' },
    { title: 'Stoffwechsel ist kein Schicksal', desc: 'Wie Dein Körper auf Diäten, Einschränkungen und Stress reagiert – und warum er sich anpasst' },
    { title: 'Kein Sport ≠ mehr Fettverbrennung?', desc: 'Warum mehr Bewegung ohne ausreichende Versorgung nach hinten losgeht' },
    { title: 'Sicherheit statt Mangel', desc: 'Warum Dein Körper erst loslässt, wenn er genug bekommt – und wie Du dieses Signal sendest' },
    { title: 'Signale statt Regeln', desc: 'Warum Hunger und Müdigkeit keine Schwäche sind – sondern Informationen, die Du nutzen kannst' },
    { title: 'Dein persönlicher Startpunkt', desc: 'Wie Du Deinen Kalorienbedarf, Deine Makros und Deinen Alltag so aufstellst, dass Dein Körper kooperiert' },
  ];

  const valueStack: { emoji?: string; text: string; desc?: string; value: string }[] = [
    { text: 'E-Book „Du bist nicht das Problem" – Dein Fahrplan gegen den Stoffwechsel-Sparmodus (100+ Seiten)', value: '29,99 €' },
    { emoji: '📋', text: 'Dein persönlicher Aktionsplan für unterversorgten Stoffwechsel', desc: 'Ein maßgeschneiderter Schritt-für-Schritt-Plan mit konkreten Ernährungs-, Supplement- und Lifestyle-Empfehlungen, um deinen unterversorgten Fettstoffwechsel gezielt zu unterstützen. Sofort umsetzbar, wissenschaftlich fundiert.', value: '27,00 €' },
    { text: 'Online-Bonusbereich mit exklusiven Videos, Tools & Trackern', value: '20,00 €' },
    { text: '9 Checklisten & PDF-Vorlagen – speziell für unterversorgten Stoffwechsel, Schilddrüsen-Checks & Nährstoff-Protokolle', value: '15,00 €' },
    { text: 'Persönlicher Kalorien- & Makro-Rechner', value: '5,00 €' },
    { text: 'Regelmäßige Updates & neue Inhalte', value: 'gratis' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <B4ExitIntentPopup />
      <B4InactivityPopup />
      <B4StickyMobileCTA />
      <B4StickyDesktopCTA />
      <Header />

      <main className="container-wide px-3 sm:px-5 md:px-8 py-10 md:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">

          {/* 1. Headline */}
          <header className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
              Du gibst Dir Mühe.
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight mb-5">
              Und genau das reicht gerade nicht.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Unterversorgter Fettstoffwechsel</strong>
            </p>
          </header>

          {/* 2. Validation (kompakt) */}
          <section className="mb-8">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-7">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt kein Willenskraftproblem. Dein Körper ist <strong className="text-primary">unterversorgt</strong> – zu wenig Energie, Fett oder Protein. Er senkt den Grundumsatz, drosselt Hormone und verteidigt seine Reserven, statt sie freizugeben.
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

          {/* 6. Outlook */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Was Dein Körper jetzt braucht
            </h2>
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-5">
              <p className="text-foreground leading-relaxed">
                Dein Körper braucht keine weitere Reduktion. Er braucht <strong className="text-secondary">Versorgung</strong>. Ausreichend Energie, genug Protein, essenzielle Fette. Erst wenn er sich sicher fühlt, hört er auf, seine Reserven zu verteidigen.
              </p>
            </div>
          </section>

          {/* 7. Überleitung zum Buch */}
          <section className="mb-10">
            <div className="text-center mb-2">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Dein Körper hat nicht aufgehört zu funktionieren.
              </h2>
              <p className="text-lg md:text-xl font-bold text-secondary mb-3">
                Er schützt sich.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Wissenschaftlich nennt man das adaptive Thermogenese. Genau für diese Situation habe ich dieses Buch geschrieben – nicht als weiterer „Iss einfach mehr"-Ratschlag, sondern als wissenschaftlich fundierter Fahrplan.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center mt-6">
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
                  Warum weniger essen bei unterversorgtem Stoffwechsel nach hinten losgeht – und was dein Körper stattdessen braucht.
                </p>
                <p className="text-sm text-muted-foreground">
                  Von Philipp Prinz · 100+ Seiten · 10 Kapitel · Über 60 wissenschaftliche Quellen
                </p>
              </div>
            </div>
          </section>

          {/* Aktionsplan Highlight */}
          <ActionPlanHighlight profile="B" />

          {/* 8. Kapitel-Preview */}
          <section className="mb-8 bg-muted/50 rounded-2xl p-5 md:p-6">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              Was dich in diesem Buch erwartet:
            </h3>
            <ul className="space-y-2">
              {[
                'Warum „weniger essen" deinen Stoffwechsel weiter blockiert – und was die Forschung wirklich zeigt',
                'Was mit deiner Schilddrüse passiert, wenn die Energieverfügbarkeit unter 30 kcal/kg sinkt',
                'Sicherheit statt Mangel: Wie du das richtige Signal an deinen Körper sendest',
                'Dein persönlicher Startpunkt: Kalorien, Makros und ein System für deinen Alltag',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">✓</span>
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 9. Countdown vor erstem CTA */}
          <div className="mb-4">
            <B4CountdownTimer />
          </div>

          {/* 10. Mini-Close #1 */}
          <B4MiniClose id="mini-close-1" />

          {/* 11. Was Du in diesem Buch lernst */}
          <section className="mb-12 bg-muted/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Was Du in diesem Buch lernst
            </h2>
            <div className="space-y-5">
              {learnings.map((ch, i) => (
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
            <p className="text-center font-bold text-foreground mt-8">
              100+ Seiten. Über 60 wissenschaftliche Quellen. Kein Blabla. Kein Guru. Geschrieben für Menschen mit genau deinem Ergebnis.
            </p>
          </section>

          {/* Countdown vor Preis-Box */}
          <section className="mb-4">
            <B4CountdownTimer />
          </section>

          {/* 10. Preis-Box + CTA mit neuem Value Stack */}
          <section className="mb-12">
            <div id="preis-box-1" className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-5">Das bekommst Du zusammen:</h3>

              <div className="space-y-3 mb-2">
                {valueStack.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-2 flex-1">
                      <span className="flex-shrink-0 text-foreground text-sm leading-snug">{item.emoji ?? '✓'}</span>
                      <div className="flex-1">
                        <span className="text-foreground text-sm leading-snug block">{item.text}</span>
                        {item.desc && (
                          <span className="text-muted-foreground text-xs leading-snug block mt-0.5">{item.desc}</span>
                        )}
                      </div>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap self-start">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-semibold">Gesamtwert</span>
                  <span className="text-foreground font-semibold">96,99 €</span>
                </div>
                <p className="text-sm font-semibold text-secondary text-right mb-2">Du sparst 67€ (69% Rabatt)</p>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-bold text-lg">Dein Preis heute</span>
                  <div className="text-right">
                    <span className="text-muted-foreground line-through text-sm mr-2">96,99 €</span>
                    <span className="text-primary font-bold text-2xl">29,99 €</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Exklusiver Sonderpreis für Quiz-Teilnehmer:</p>
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="text-lg text-muted-foreground/50 line-through">96,99&nbsp;€</span>
                  <span className="text-3xl md:text-4xl font-extrabold text-secondary">29,99&nbsp;€</span>
                </div>
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full h-auto min-h-[4.5rem] whitespace-normal leading-snug text-sm md:text-base py-4 px-4"
                  asChild
                >
                  <a href="https://www.digistore24.com/product/693551?voucher=quizrabatt" target="_blank" rel="noopener noreferrer">
                    Jetzt für 29,99&nbsp;€ statt 96,99&nbsp;€ sichern →
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

          {/* 11. Für Dich, wenn… (3 Punkte) */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Dieses Buch ist für Dich, wenn…
            </h2>
            <ul className="space-y-4">
              {[
                'Du schon alles versucht hast – Diäten, Sport, Verzicht – und trotzdem stagnierst',
                'Du endlich verstehen willst, warum dein Körper sich wehrt',
                'Du bereit bist, deinen Stoffwechsel wieder auf Versorgung umzustellen',
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
              Kein Abo. Kein Hörensagen. Einmal kaufen, sofort loslegen.
            </p>
            <p className="text-xl text-primary-foreground/60 line-through mb-1">96,99&nbsp;€</p>
            <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">29,99&nbsp;€</p>
            <a
              href="https://www.digistore24.com/product/693551?voucher=quizrabatt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-normal text-center rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-auto min-h-[3.5rem] py-3 px-8"
            >
              Jetzt für 29,99&nbsp;€ statt <span className="line-through mx-1">96,99&nbsp;€</span> sichern →
            </a>
            <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-primary-foreground/80">
              <span>🔒 Sicherer Checkout</span>
              <span>📥 Sofort-Download</span>
              <span>🔄 14-Tage-Garantie</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 pb-24 md:pb-24 text-center">
        <p className="text-sm text-muted-foreground">
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <span className="mx-2">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </p>
      </footer>
    </div>
  );
};

export default ResultPageB4;
