import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/landing/Footer";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/693088?voucher=quizrabatt";
const PAGE_PATH = "/anbot-a";

const handleCta = (label: string) => {
  trackButtonClick(PAGE_PATH, label, DIGISTORE_URL);
};

const meaningBullets = [
  "Dein Körper reagiert auf Stress (physisch UND psychisch) mit Stoffwechsel-Verlangsamung",
  "Cortisol blockiert Fettverbrennung – egal wie wenig du isst",
  "Schilddrüse fährt runter (T3 sinkt), um Energie zu sparen",
  "Je härter du versuchst (weniger essen, mehr Sport) → desto mehr Stress → desto schlimmer",
];

const failCards = [
  {
    title: "Mehr Kalorien reduzieren",
    text: "Körper interpretiert als Hungersnot → schaltet weiter runter",
  },
  {
    title: "Mehr Cardio / Intensives Training",
    text: "Erhöht Cortisol → verschlimmert das Problem",
  },
  {
    title: "Low-Carb / Keto (ohne Anpassung)",
    text: "Kann Schilddrüse weiter drosseln",
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
    q: "Ich sehe nach 7 Tagen keine Veränderung – funktioniert es nicht?",
    a: "Das ist normal. Dein Körper braucht 5–14 Tage. Erste Anzeichen (ab Tag 3–5): Bessere Energie, tieferer Schlaf. Körperliche Veränderungen: Ab Woche 2–3.",
  },
  {
    q: "Ich soll MEHR essen? Das erscheint mir falsch!",
    a: "Wenn dein Stoffwechsel bereits im Sparmodus ist, verschlimmert weniger Essen das Problem. Der Reset funktioniert: Genug Kalorien = Körper fühlt sich sicher → Stoffwechsel aktiviert sich.",
  },
  {
    q: "Muss ich teure Supplements kaufen?",
    a: "Nein. Die Basics (Schlaf, Stressmanagement, Ernährung) sind 80% des Erfolgs. Supplements sind nice to have, nicht must have.",
  },
];

const TRUST = "🔒 Sichere Bestellung · Sofortiger Zugang · Einmalig 4,99€";

const GREEN = "rgb(22,163,74)";
const GREEN_LIGHT = "rgb(220,252,231)";
const OFFWHITE = "rgb(249,247,246)";
const GRAY_BG = "rgb(243,244,246)";
const DARK = "rgb(17,24,39)";

const AnbotASales = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: OFFWHITE }} className="text-gray-900">
      {/* 1. HERO */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Dein Stoffwechsel ist im Dauerstress
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-5 leading-relaxed">
            Selbst wenn du „alles richtig" machst – Kaloriendefizit, Sport, gesunde Ernährung – schaltet dein Körper auf
            Sparflamme. Das liegt nicht an dir. Das liegt an einer biologischen Schutzreaktion.
          </p>
        </div>
      </section>

      {/* 2. WAS BEDEUTET DAS? */}
      <section className="py-12 md:py-14" style={{ background: GRAY_BG }}>
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Was bedeutet gestresster Stoffwechsel?
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
            <p className="text-gray-600 mt-3">Einen Ansatz, der den Stress REDUZIERT, nicht erhöht.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Option 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="font-bold text-gray-900 mb-4">Mach es selbst (kostenlos, aber Trial & Error)</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Suche dir Infos zusammen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Probiere aus, messe, passe an</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Risiko: 80% scheitern nach 2–3 Wochen</span>
                </li>
              </ul>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2" style={{ borderColor: GREEN }}>
              <p className="font-bold text-gray-900 mb-1">7-Tage Gestresster-Stoffwechsel Reset-Plan</p>
              <p className="text-sm font-semibold mb-4" style={{ color: GREEN }}>
                Empfohlen
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>Tag-für-Tag Mahlzeiten-Timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>Makro-Aufteilung für deinen Typ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>Stress-Reduktions-Protokoll</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span>Tracking-Vorlage</span>
                </li>
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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Dein Körper braucht 5–7 Tage, um zu „merken", dass es sicher ist.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left mb-8">
            <p className="text-gray-700 mb-4">
              In den ersten 7 Tagen sendest du die richtigen Signale:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                  →
                </span>
                <span>Genug Kalorien (kein Hungerdefizit)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                  →
                </span>
                <span>Richtiges Timing (Cortisol-Management)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">
                  →
                </span>
                <span>Richtige Makros (Schilddrüse unterstützen)</span>
              </li>
            </ul>
            <p className="mt-5 text-gray-900 font-semibold">
              Nach 7 Tagen: Du WEISST, wie dein Körper reagiert.
            </p>
          </div>
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

export default AnbotASales;
