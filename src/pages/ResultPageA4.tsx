import { Helmet } from "react-helmet-async";
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, Lightbulb, Check, Flame } from 'lucide-react';
import Header from '@/components/Header';
import bookCover from '@/assets/book-cover-mockup3.jpeg';
import A4ExitIntentPopup from '@/components/buch/A4ExitIntentPopup';
import A4StickyMobileCTA from '@/components/buch/A4StickyMobileCTA';
import A4InactivityPopup from '@/components/buch/A4InactivityPopup';
import CountdownTimer from '@/components/buch/CountdownTimer';
import ScrollProgressBar from '@/components/buch/ScrollProgressBar';
import { PRICING } from '@/lib/pricing';

const ResultPageA4 = () => {
  // Top 3 strongest signs (gekürzt von 6 auf 3)
  const typicalSigns = [
    'Gewicht stagniert – oder steigt sogar, trotz Disziplin',
    'Ständiger Hunger und Heißhungerattacken, besonders abends',
    'Erschöpfung trotz ausreichend Schlaf – Antrieb weg',
  ];

  const valueStack = [
    { emoji: '📖', text: 'E-Book "Du bist nicht das Problem" (10 Kapitel + Bonuskapitel)', value: '29,99 €' },
    { emoji: '🔧', text: 'Online-Bonusbereich mit Tools & Rechnern', value: '20,00 €' },
    { emoji: '🎁', text: '9 herunterladbare PDFs (Checklisten, Arbeitsblätter, Übersichten)', value: '15,00 €' },
    { emoji: '📱', text: 'Kuratierte App- & Tool-Empfehlungen', value: '5,00 €' },
    { emoji: '↩️', text: 'Regelmäßige Updates im Bonusbereich', value: 'kostenlos' },
  ];

  const PriceBox = ({ id }: { id: string }) => (
    <div id={id} className="relative bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-xl">
      {/* Animiertes Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md animate-pulse">
          <Flame className="w-3.5 h-3.5" /> Limitiertes Angebot
        </span>
      </div>

      <div className="text-center pt-2">
        <p className="text-sm text-muted-foreground mb-1">Exklusiver Sonderpreis für Quiz-Teilnehmer:</p>
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="relative text-lg text-muted-foreground">
            <span>{PRICING.anchorPrice}&nbsp;{PRICING.currency}</span>
            <span className="absolute left-0 top-1/2 w-full h-[2px] bg-destructive rotate-[-8deg]" />
          </span>
          <span className="text-3xl md:text-4xl font-extrabold text-secondary">{PRICING.price}&nbsp;{PRICING.currency}</span>
        </div>
        <p className="text-sm font-semibold text-secondary mb-4">Du sparst über {PRICING.discount}</p>
        <Button
          variant="cta"
          size="xl"
          className="w-full h-auto min-h-[4.5rem] whitespace-normal leading-snug text-sm md:text-base py-4 px-4"
          asChild
        >
          <a href={PRICING.digistoreUrl} target="_blank" rel="noopener noreferrer">
            Ja – ich will endlich wieder Fortschritt sehen
            <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 self-center" />
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-3">Über 2.400 Leser vertrauen bereits auf dieses Buch</p>

        {/* Trust Signals */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-5 mt-4 text-xs md:text-sm text-muted-foreground">
          <span>🔒 Sicherer Kauf über Digistore24</span>
          <span>📱 Sofort-Zugang nach Kauf</span>
          <span>💯 14 Tage Geld-zurück-Garantie</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <ScrollProgressBar />
      <A4ExitIntentPopup />
      <A4InactivityPopup />
      <A4StickyMobileCTA />
      <Header />

      <main className="container-wide px-3 sm:px-5 md:px-8 py-10 md:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto">

          {/* 1. Headline */}
          <header className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
              Du machst alles richtig.
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary leading-tight mb-5">
              Und genau das ist das Problem.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Dein Stoffwechsel-Profil: <strong className="text-foreground">Gestresster Stoffwechsel</strong>
            </p>
          </header>

          {/* 2. Validation (mit integrierter Erklärung – kompakt) */}
          <section className="mb-8">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-7">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Dein Ergebnis zeigt kein Willensproblem. Dein Körper steht unter Dauerstress – hormonell, metabolisch, systemisch. <strong className="text-primary">Cortisol auf Dauerhoch, Leptin am Boden, Ghrelin auf Maximum.</strong> Er hat die Notbremse gezogen und denkt, er steckt in einer Hungersnot – egal was du isst.
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

          {/* 4. Was Dein Körper jetzt braucht (kurz) */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Was Dein Körper jetzt braucht
            </h2>
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-5">
              <p className="text-foreground leading-relaxed">
                Dein Körper braucht keine weitere Diät. Er braucht das Gegenteil: <strong className="text-secondary">Sicherheit</strong>. Ein System, das ihm signalisiert – die Krise ist vorbei. Erst dann lässt er los, was er festhält.
              </p>
            </div>
          </section>

          {/* 5. Countdown Timer */}
          <section className="mb-4">
            <CountdownTimer />
          </section>

          {/* 6. Preis-Box #1 (FRÜHER CTA) */}
          <section className="mb-12">
            <PriceBox id="preis-box-1" />
          </section>

          {/* 7. Buch-Intro mit Cover */}
          <section className="mb-10">
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Du bist nicht das Problem
                </h2>
                <p className="text-lg text-secondary font-semibold mb-3">
                  Warum wiederholte Diäten deinen Stoffwechsel blockieren – und wie du ihn wieder in Bewegung bringst.
                </p>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>Dein Körper hat nicht aufgehört zu funktionieren. Er hat sich angepasst.</p>
                  <p>Du hast kontrolliert gegessen, dich diszipliniert durchgezogen – und am Anfang hat es funktioniert. Jetzt: Stillstand. Genau das löst dieses Buch.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Was du in diesem Buch lernst (5 Punkte) */}
          <section className="mb-10 bg-muted/50 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
              Was du in diesem Buch lernst
            </h2>
            <ul className="space-y-3">
              {learnings.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center font-bold text-foreground mt-6">
              100+ Seiten. Über 60 wissenschaftliche Quellen. Kein Blabla. Kein Guru.
            </p>
          </section>

          {/* 9. Value Stack */}
          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
              Alles, was du bekommst:
            </h2>
            <div className="bg-accent/5 border border-primary/20 rounded-xl p-5 md:p-6">
              <ul className="space-y-3 mb-5">
                {valueStack.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="flex-shrink-0 text-lg leading-none mt-0.5">{item.emoji}</span>
                    <span className="flex-1 leading-snug">{item.text}</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap font-medium">
                      {item.value === 'kostenlos' ? 'kostenlos' : `Wert: ${item.value}`}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 text-center">
                <p className="text-sm text-muted-foreground line-through mb-1">
                  Gesamtwert: {PRICING.totalValue}&nbsp;{PRICING.currency}
                </p>
                <p className="text-3xl md:text-4xl font-extrabold text-secondary mb-1">
                  Dein Preis heute: {PRICING.price}&nbsp;{PRICING.currency}
                </p>
                <p className="text-sm font-semibold text-secondary">Du sparst über {PRICING.discount}</p>
              </div>
            </div>
          </section>

          {/* 10. Preis-Box #2 */}
          <section className="mb-12">
            <PriceBox id="preis-box-2" />
          </section>

        </div>
      </main>

      {/* 11. Finaler CTA */}
      <section className="bg-[image:var(--hero-gradient)] py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Bereit, das Spiel zu verändern?
            </h2>
            <p className="text-lg text-primary-foreground/85 mb-6">
              Kein Abo. Kein Mengenzählen. Einmal kaufen, sofort loslegen.
            </p>
            <p className="text-xl text-primary-foreground/60 line-through mb-1">{PRICING.anchorPrice}&nbsp;{PRICING.currency}</p>
            <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">{PRICING.price}&nbsp;{PRICING.currency}</p>
            <a
              href={PRICING.digistoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-normal text-center rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-auto min-h-[3.5rem] py-3 px-8"
            >
              Jetzt für {PRICING.price}&nbsp;{PRICING.currency} statt <span className="line-through mx-1">{PRICING.anchorPrice}&nbsp;{PRICING.currency}</span> sichern →
            </a>
            <div className="flex flex-wrap justify-center gap-5 mt-8 text-sm text-primary-foreground/80">
              <span>🔒 Sicherer Checkout</span>
              <span>📱 Auf allen Geräten</span>
              <span>⚡ Sofortige Lieferung</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 pb-24 md:pb-8 text-center">
        <p className="text-sm text-muted-foreground">
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <span className="mx-2">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </p>
      </footer>
    </div>
  );
};

export default ResultPageA4;
