import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb, Check } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';
import ExitIntentPopup from '@/components/buch/ExitIntentPopup';
import A3StickyMobileCTA from '@/components/buch/A3StickyMobileCTA';
import A3InactivityPopup from '@/components/buch/A3InactivityPopup';
import A3MiniClose from '@/components/buch/A3MiniClose';

const ResultPageC3 = () => {
  const typicalSigns = [
    'Abnehmen wird trotz Disziplin immer schwieriger',
    'Gewicht stagniert – oder geht trotz Defizit hoch',
    'Ständige Beschäftigung mit Essen und Kalorien',
    'Kein Spielraum mehr bei der Ernährung',
    'Frust trotz Kontrolle',
    'Heißhunger trotz „satter" Mahlzeiten',
    'Das Gefühl, dass der eigene Körper nicht mehr mitmacht',
  ];

  const commonMistakes = [
    'Neue Diät starten – der Körper kennt das Muster und reagiert noch schneller mit Anpassung',
    'Kalorien weiter senken – verstärkt den Spareffekt',
    'Mehr Cardio – verbrennt Struktur statt Fett',
    'Immer neue Regeln aufstellen – erhöht die mentale Belastung ohne körperlichen Effekt',
    'Angst vor Veränderung – das Bekannte fühlt sich sicher an, hält aber den Kreislauf am Laufen',
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
      <ExitIntentPopup />
      <A3InactivityPopup />
      <A3StickyMobileCTA />
      <Header />
      {/* Main Content */}
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
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                <strong className="text-primary">Dein Ergebnis zeigt kein Willenskraftproblem.</strong> Dein Körper zeigt ein sehr typisches Muster nach wiederholten Diätphasen und dauerhafter Kontrolle: Er hat gelernt, mit immer weniger auszukommen. Noch eine Diät zu starten, kann den Stoffwechsel weiter blockieren.
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Dein Stoffwechsel ist nicht kaputt – er ist <strong className="text-foreground">überangepasst</strong>. Nach Monaten oder Jahren mit Kalorienreduktion, strikten Ernährungsplänen und hoher Disziplin hat dein Körper seine Spielregeln geändert: Er verbraucht weniger, speichert effizienter und gibt Reserven nicht mehr frei.</p>
              <p>Das Ergebnis: Dein Körper reagiert kaum noch auf das, was früher funktioniert hat – weniger essen bringt nichts mehr, mehr Training auch nicht. Der Stoffwechsel hat sich nach unten reguliert.</p>
              <p>Studien zeigen: Nach wiederholten Diätzyklen kann der Grundumsatz um <strong className="text-foreground">10–15 % unter dem erwarteten Wert</strong> liegen – selbst bei normalem Gewicht. Dein Körper hat gelernt, mit weniger zu funktionieren. Und genau das macht jede weitere Diät schwieriger als die letzte.</p>
              <p>Das Problem ist nicht, dass du zu wenig Disziplin hast. Das Problem ist, dass dein Körper deine Disziplin gegen dich verwendet.</p>
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
                Dein Körper braucht keine weitere Ernährungsumstellung – und erst recht nicht noch mehr Kontrolle. Er braucht <strong className="text-secondary">Struktur und Flexibilität</strong>. Ein System, das ihm zeigt, dass die Sparphase vorbei ist – und dass er wieder normal arbeiten darf.
              </p>
            </div>
          </section>

          {/* Mini-Close #1 (mobile re-engagement) */}
          <div className="md:hidden">
            <A3MiniClose
              id="mini-close-1"
              headline="Genau das löst dieses Buch."
              cta="Buch jetzt für 9,99 € sichern"
            />
          </div>

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
              <p>Dein Ergebnis zeigt nicht, dass Du etwas falsch machst. Es zeigt, dass Dein Körper überangepasst ist.</p>
              <p>Du hast kontrolliert.<br />Reduziert.<br />Durchgezogen.</p>
              <p>Und trotzdem: nichts passiert.</p>
              <p>Oder schlimmer – es wurde schwieriger.</p>
              <p>Das liegt nicht an Dir. Das liegt daran, dass Dein Körper nach Jahren der Kontrolle gelernt hat, mit immer weniger auszukommen. Er hat den Verbrauch gesenkt, die Effizienz erhöht und seine Reserven gesichert.</p>
              <p>Dein Stoffwechsel ist kein Kalorienrechner. Er ist ein <strong className="text-foreground">Anpassungssystem</strong>. Und Anpassungssysteme optimieren sich – auch wenn das bedeutet, dass sie gegen Dein Ziel arbeiten.</p>
              <p className="font-semibold text-foreground">Noch disziplinierter sein ist bei überangepasstem Stoffwechsel nicht die Lösung – es ist das, was den Kreislauf am Laufen hält.</p>
              <p>Wissenschaftlich nennt man das <strong className="text-foreground">metabolische Adaptation</strong>: Dein Körper senkt den Grundumsatz, drosselt Schilddrüsenhormone und hält Fett fest – nicht weil er gegen Dich arbeitet, sondern weil er gelernt hat, dass Mangel der Normalzustand ist.</p>
              <p>Genau das ist das Problem.</p>
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
                  Dieses Buch zeigt Dir, warum Dein Körper gerade gegen Deine Disziplin arbeitet – und wie Du ihn Schritt für Schritt wieder in Bewegung bringst.
                </p>
                <p className="text-foreground leading-relaxed">
                  Dieses Buch zeigt Dir, warum Chapeau und Kontrolle Deinen Fettstoffwechsel blockieren – und was Dein Körper stattdessen braucht, um wieder Fett zu verbrennen.
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
                { icon: '📋', title: '9 Checklisten & Arbeitsblätter', desc: 'Stoffwechsel-Reset-Checkliste, Defizit-Phase-Checkliste, Schlaf-Protokoll, Ernährungs-Beobachtungsblatt, Makronährstoff-Übersicht u.v.m. Zum Ausdrucken und sofort nutzen.' },
                { icon: '🧮', title: 'Kalorien- & Makro-Rechner', desc: 'Dein persönlicher Online-Rechner für Deinen individuellen Startpunkt. Kein Raten, kein Standardwert.' },
                { icon: '✅', title: 'Wöchentlicher Online-Bereich', desc: 'Training & Energie-Tracker, Schlaf-Protokoll, Alltags-Checkliste. Alles an einem Ort.' },
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
            <div id="preis-box-1" className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-lg font-bold text-foreground mb-5">Das bekommst Du zusammen:</h3>
              <div className="space-y-3 mb-6">
                {[
                  { text: 'Buch „Du bist nicht das Problem" (100+ Seiten)', value: '19,99 €' },
                  { text: 'Online-Begleitbereich mit Tools & Trackern', value: '29,99 €' },
                  { text: '9 Checklisten/PDF-Vorlagen, Protokolle, Beobachtungsblätter', value: '19,99 €' },
                  { text: 'Persönlicher Kalorien- & Makro-Rechner', value: '9,99 €' },
                  { text: 'Regelmäßige Updates & neue Inhalte', value: '–' },
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
                  <span className="text-xl font-extrabold text-primary line-through">~80&nbsp;€</span>
                </div>
              </div>

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
                  <a href="https://www.digistore24.com/product/675804?voucher=specialdeal" target="_blank" rel="noopener noreferrer">
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

          {/* 11. Dieses Buch ist für Dich, wenn… */}
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Dieses Buch ist für Dich, wenn…
            </h2>
            <ul className="space-y-4">
              {[
                'Du schon alles versucht hast – weniger essen, mehr Sport, Intervallfasten, Low Carb – und trotzdem nichts weitergeht',
                'Du das Gefühl hast, Dein Stoffwechsel arbeitet gegen Dich',
                'Du verstehen willst, warum es nicht funktioniert hat – statt Dir zu sagen, was Du als nächstes streichen sollst',
                'Du einen Weg suchst, der ohne extreme Diäten, tägliches Wiegen oder ständige Kontrolle funktioniert',
                'Du bereit bist, Deinen Körper zu versorgen – statt ihn weiter zu bestrafen',
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
              Kein Abo. Kein Hörensagen. Einmal kaufen, sofort loslegen.
            </p>
            <p className="text-xl text-primary-foreground/60 line-through mb-1">34,99&nbsp;€</p>
            <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">9,99&nbsp;€</p>
            <a
              href="https://www.digistore24.com/product/675804?voucher=specialdeal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
            >
              Jetzt für 9,99&nbsp;€ statt <span className="line-through mx-1">34,99&nbsp;€</span> sichern →
            </a>
            <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-primary-foreground/80">
              <span>🔒 Sicherer Checkout</span>
              <span>📥 Sofort-Download</span>
              <span>🔄 14-Tage-Garantie</span>
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

export default ResultPageC3;
