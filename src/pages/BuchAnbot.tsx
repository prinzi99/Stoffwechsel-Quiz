import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Brain, Zap, ListChecks, Wrench, UserCheck } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804";

const BuchAnbot = () => {
  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Sonderangebot | Philipp's Biohack</title>
        <meta name="description" content="Exklusives Angebot für Quiz-Teilnehmer: Erfahre, warum Dein Stoffwechsel blockiert und wie Du ihn wieder in Bewegung bringst." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main>
        {/* 1. Hero */}
        <section className="min-h-[90dvh] flex items-center section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0">
                <img
                  src={bookCover}
                  alt="Du bist nicht das Problem – Buchcover"
                  className="w-full h-auto rounded-lg shadow-2xl"
                  fetchPriority="high"
                  width={800}
                  height={1067}
                />
              </div>

              <div className="text-center md:text-left max-w-xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-3">
                  Du bist nicht
                  <span className="text-primary"> das Problem.</span>
                </h1>

                <p className="text-sm md:text-base text-primary font-medium mb-2">
                  Basierend auf Deinem Stoffwechsel-Quiz.
                </p>

                <p className="text-base md:text-lg text-foreground font-medium mb-6">
                  Dein Ergebnis zeigt:<br />
                  Dein Stoffwechsel arbeitet aktuell gegen Dich.
                </p>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Warum Dein Stoffwechsel blockiert –<br />
                  und wie Du ihn wieder in Bewegung bringst.
                </p>

                <div className="text-base md:text-lg text-foreground/80 space-y-4 mb-8 leading-relaxed">
                  <p>
                    Du ernährst Dich bewusst.<br />
                    Du bewegst Dich regelmäßig.<br />
                    Und trotzdem passiert… nichts.
                  </p>
                  <p>
                    Die Waage bewegt sich kaum.<br />
                    Die Energie sinkt.<br />
                    Der Frust wächst.
                  </p>
                  <p className="font-medium text-foreground">
                    Vielleicht liegt das Problem nicht bei Dir –<br />
                    sondern im System.
                  </p>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99 €</span>
                  <span className="text-3xl font-bold text-foreground">19,99 €</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Exklusiver Sonderpreis für Teilnehmer des Stoffwechsel-Quiz.
                </p>

                <Button variant="cta" size="xl" asChild className="w-full sm:w-auto mb-3">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt Buch &amp; Bonus sichern
                  </a>
                </Button>

                <p className="text-sm text-primary font-medium">
                  Dieses Angebot gilt nur für Teilnehmer des Stoffwechsel-Quiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Warum Diäten scheitern */}
        <section className="section-padding bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Warum so viele Diäten scheitern
              </h2>

              <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
                <p>Die meisten Strategien folgen einer einfachen Logik:</p>
                <ul className="list-none space-y-1 font-medium text-foreground">
                  <li>• weniger essen</li>
                  <li>• mehr bewegen</li>
                  <li>• mehr Disziplin</li>
                </ul>
                <p>Kurzfristig funktioniert das.</p>
                <p>Doch Dein Körper reagiert.</p>
                <p>Er passt sich an.</p>
                <p>Er spart Energie.</p>
                <p>Er schützt Fettreserven.</p>
                <p className="text-lg md:text-xl font-semibold text-primary pt-4">
                  Genau hier entsteht die Stoffwechselblockade –<br />
                  und genau hier setzt dieses Buch an.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Was Du im Buch lernst */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10">
                Dieses Buch zeigt Dir
              </h2>

              <div className="space-y-4">
                {[
                  "warum Dein Stoffwechsel blockiert – und wie Du ihn wieder aktivierst",
                  "welche Fehler viele Menschen unbewusst machen",
                  "warum weniger essen oft das Gegenteil bewirkt",
                  "wie Du Deinen Stoffwechsel Schritt für Schritt stabilisieren kannst",
                  "welche Signale Dein Körper wirklich braucht",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground/90 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Bonus Bereich */}
        <section className="section-padding bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Zusätzlich erhältst Du Zugriff auf exklusive Bonus-Tools
              </h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
                Diese Tools helfen Dir, die Strategien aus dem Buch direkt umzusetzen.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 text-left">
                {[
                  { icon: Brain, text: "Stoffwechsel-Reset-Check" },
                  { icon: Zap, text: "Kalorien-Startpunkt-Rechner" },
                  { icon: ListChecks, text: "Checklisten & Vorlagen" },
                  { icon: Wrench, text: "Biohacking Tools" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-base md:text-lg text-foreground/90 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Für wen dieses Buch ist */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
                Für wen dieses Buch besonders hilfreich ist
              </h2>
              <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed mb-8">
                Dieses Buch ist besonders für Dich, wenn …
              </p>

              <div className="space-y-4">
                {[
                  "Dein Gewicht trotz Disziplin stagniert",
                  "Du schon mehrere Diäten ausprobiert hast",
                  "Du Deinen Stoffwechsel endlich verstehen willst",
                  "Du nachhaltige Strategien statt kurzfristiger Lösungen suchst",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <UserCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground/90 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Preisbox + 7. Social Proof */}
        <section id="kaufen" className="section-padding bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed mb-8">
                Viele Teilnehmer des Stoffwechsel-Quiz gehen an dieser Stelle den nächsten Schritt.
              </p>

              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-lg">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Exklusiver Preis für Teilnehmer des Stoffwechsel-Quiz
                </p>

                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-xl text-muted-foreground/50 line-through">34,99 €</span>
                  <span className="text-4xl md:text-5xl font-bold text-foreground">19,99 €</span>
                </div>

                <p className="text-sm text-muted-foreground mb-8">
                  Der Quiz-Teilnehmerpreis ist nur auf dieser Seite verfügbar.
                </p>

                <Button variant="cta" size="xl" asChild className="w-full mb-6">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt Buch &amp; Bonus sichern
                  </a>
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm md:text-base text-foreground/70 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Sofort als E-Book verfügbar</span>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Bereits von vielen Quiz-Teilnehmern genutzt,<br />
                    um ihren Stoffwechsel besser zu verstehen<br />
                    und nachhaltige Fortschritte zu machen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medizinischer Hinweis */}
        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
              Die Inhalte dienen ausschließlich zu Informationszwecken und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BuchAnbot;
