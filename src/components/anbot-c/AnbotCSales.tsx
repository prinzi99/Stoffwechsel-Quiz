import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/landing/Footer";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/705668";
const PAGE_PATH = "/anbot-c";

const handleCta = (label: string) => {
  trackButtonClick(PAGE_PATH, label, DIGISTORE_URL);
};

const meaningBullets = [
  "Dein Grundumsatz ist durch wiederholte Diäten stärker gedrosselt als durch Gewichtsverlust erklärbar (Adaptive Thermogenese)",
  "NEAT ist unbewusst um 300–400 kcal/Tag gesunken – du wirst automatisch träger, ohne es zu merken",
  "Dein Set-Point verteidigt dein aktuelles Gewicht aktiv mit Hormonen: Leptin ↓, Ghrelin ↑, T3 ↓",
  "Die Diätspirale: Strenges Defizit → Anfangserfolg → Plateau → Abbruch → Zunahme über Ausgangswert",
];

const failCards = [
  {
    title: "Nächste Crash-Diät",
    text: "Adaptive Thermogenese wird stärker, Biggest-Loser-Effekt: Grundumsatz bleibt Monate bis Jahre gedrosselt",
  },
  {
    title: "Dauerhaftes Kaloriendefizit",
    text: "Dein Körper passt sich an, NEAT kollabiert, Set-Point-Verteidigung wird aggressiver",
  },
  {
    title: "Mehr Disziplin & Verbote",
    text: "Psychischer Stress erzeugt Heißhunger, Frustrationszyklus wird verstärkt, Jojo-Effekt garantiert",
  },
];

const FailX = () => (
  <span
    className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mr-2 flex-shrink-0"
    style={{ background: "rgb(254,226,226)", color: "rgb(220,38,38)" }}
  >
    ✕
  </span>
);

const faqs = [
  {
    q: "Was ist das MATADOR-Protokoll?",
    a: "Wissenschaftliche Studie: 2 Wochen moderates Defizit (300 kcal) → 2 Wochen Erhaltung, im Wechsel über 16–24 Wochen. Ergebnis: Mehr Gewichtsverlust und weniger Stoffwechsel-Anpassung als bei Dauer-Diäten. Der Plan zeigt dir den genauen Zyklus.",
  },
  {
    q: "Warum habe ich nach jeder Diät mehr zugenommen als vorher?",
    a: "Adaptive Thermogenese bleibt Monate bis Jahre bestehen. Dein Grundumsatz ist gedrosselt, NEAT niedrig, Leptin niedrig, Ghrelin hoch – dein Körper will das alte Gewicht zurück. Das ist Biologie, kein Versagen. Der Plan durchbricht diesen Kreislauf durch Stabilität statt Härte.",
  },
  {
    q: "Was bedeutet 80/20-Regel?",
    a: "80% nährstoffreich, 20% Flexibilität. Keine verbotenen Lebensmittel – das erzeugt nur psychischen Stress und Heißhunger. Der Plan zeigt dir, wie du Restriktion loslässt und trotzdem Ergebnisse bekommst.",
  },
];

const TRUST = "🔒 Sichere Bestellung · Sofortiger Zugang · Einmalig 4,99€";

const GREEN = "rgb(22,163,74)";
const OFFWHITE = "rgb(249,247,246)";
const GRAY_BG = "rgb(243,244,246)";

const AnbotCSales = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: OFFWHITE }} className="text-gray-900">
      {/* 1. HERO */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Schon wieder eine Diät – und danach wieder mehr drauf als vorher?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-5 leading-relaxed">
            Dein Stoffwechsel hat sich an Jahre von Diäten angepasst. Adaptive Thermogenese, Biggest-Loser-Effekt, Set-Point verteidigt – härtere Restriktion macht es nur schlimmer.
          </p>
        </div>
      </section>

      {/* 2. WAS BEDEUTET DAS? */}
      <section className="py-12 md:py-14" style={{ background: GRAY_BG }}>
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Überangepasster Stoffwechsel
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
            {meaningBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0" style={{ color: GREEN }}>
                  ♦
                </span>
                <p className="text-gray-800 leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WARUM NORMALE ANSÄTZE SCHEITERN */}
      <section className="bg-white py-12 md:py-14">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Warum normale Ansätze bei dir scheitern
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {failCards.map((c, i) => (
              <div key={i} className="bg-red-50 rounded-xl p-5 border border-red-100">
                <p className="font-bold text-gray-900 mb-2 flex items-center">
                  <FailX />{c.title}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WAS DU JETZT BRAUCHST */}
      <section className="py-12 md:py-14" style={{ background: OFFWHITE }}>
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Was du jetzt brauchst</h2>
            <p className="text-gray-600 mt-3">Einen Ansatz, der die Diätspirale durchbricht – mit strategischen Pausen statt Härte.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="font-bold text-gray-900 mb-4">Mach es selbst (kostenlos, aber Trial & Error)</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>MATADOR-Studie finden und adaptieren</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Refeed-Tage, Erhaltungsphasen und Defizitzyklus selbst planen</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Risiko: Monate im Jojo-Kreislauf bleiben</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2" style={{ borderColor: GREEN }}>
              <p className="font-bold text-gray-900 mb-1">7-Tage Überangepasster-Stoffwechsel Reset-Plan</p>
              <p className="text-sm font-semibold mb-4" style={{ color: GREEN }}>Empfohlen</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>7-Tage-Startplan gegen Diät-Anpassung und Stillstand</span></li>
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Pausen- und Defizitstruktur ohne komplizierte Planung</span></li>
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Kohlenhydrat- und Refeed-Leitfaden ohne starre Verbote</span></li>
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Roadmap für nachhaltigen Fortschritt statt Jojo-Kreislauf</span></li>
              </ul>
              <p className="mt-5 text-sm font-semibold text-gray-900">
                Preis: <span style={{ color: GREEN }}>4,99€</span> (einmalig, sofort-Download)
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={DIGISTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCta("Option CTA")}
              className="inline-block text-white text-lg md:text-xl font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl shadow-xl transition-all hover:opacity-95"
              style={{ background: GREEN }}
            >
              Ja, ich will den Reset-Plan für 4,99€ →
            </a>
            <p className="text-sm text-gray-500 mt-3">{TRUST}</p>
          </div>
        </div>
      </section>

      {/* 5. WARUM 7 TAGE? */}
      <section className="bg-white py-12 md:py-14">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Warum 7 Tage?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Dein Stoffwechsel hat sich durch Jahre von Diäten angepasst – Adaptive Thermogenese hat deinen Grundumsatz gedrosselt, NEAT ist um 300–400 kcal gesunken, Leptin ist im Keller. In 7 Tagen kannst du die Diätspirale stoppen: Erhaltungskalorien stabilisieren Leptin und T3, Refeed-Tage senden das Signal "Keine Hungersnot". Das MATADOR-Prinzip zeigt: Nicht Härte durchbricht die Spirale – sondern strategische Pausen.
          </p>
          <a
            href={DIGISTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCta("7 Tage CTA")}
            className="inline-block text-white text-lg md:text-xl font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl shadow-xl transition-all hover:opacity-95"
            style={{ background: GREEN }}
          >
            Ja, ich will starten →
          </a>
          <p className="text-sm text-gray-500 mt-3">{TRUST}</p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-12 md:py-14" style={{ background: GRAY_BG }}>
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Häufige Fragen</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left p-5 font-semibold text-gray-900"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`flex-shrink-0 ml-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-gray-700 leading-relaxed">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnbotCSales;