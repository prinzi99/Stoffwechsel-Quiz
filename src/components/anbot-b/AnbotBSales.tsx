import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/landing/Footer";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/705661";
const PAGE_PATH = "/anbot-b";

const handleCta = (label: string) => {
  trackButtonClick(PAGE_PATH, label, DIGISTORE_URL);
};

const meaningBullets = [
  "Deine Energieverfügbarkeit liegt unter dem kritischen Schwellenwert von 30 kcal/kg fettfreier Masse",
  "Dein Körper hat Leptin und T3 (Schilddrüsenhormon) heruntergefahren – dein Stoffwechsel läuft auf Sparflamme",
  "RED-S: Hormone, Zyklus, Immunsystem, Psyche und NEAT sind gleichzeitig betroffen",
  "Ghrelin (Hungerhormon) ist hochgefahren, Cortisol steigt – dein Körper schreit nach Energie",
];

const failCards = [
  {
    title: "Noch weniger essen",
    text: "Energieverfügbarkeit sinkt unter die kritische Schwelle, RED-S verschlimmert sich, Periode bleibt aus",
  },
  {
    title: "Mehr trainieren",
    text: "Höherer Verbrauch bei gleicher Zufuhr = noch niedrigere Energieverfügbarkeit = stärkere Stoffwechsel-Drosselung",
  },
  {
    title: "Kalorienzählen & Defizit",
    text: "Dein Körper IST bereits im Defizit – jedes weitere Defizit drückt T3 und Leptin noch tiefer",
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
    q: "Was ist RED-S und warum betrifft mich das?",
    a: "Relative Energy Deficiency in Sport – systemischer Energiemangel mit Folgen für Hormone, Zyklus, Immunsystem und Psyche. Wenn deine Energieverfügbarkeit unter 30 kcal/kg FFM fällt, schaltet dein Körper in den Notfallmodus. Der Plan zeigt dir, wie du deine EA berechnest und über die Schwelle bringst.",
  },
  {
    q: "Warum soll ich WENIGER trainieren, wenn ich abnehmen will?",
    a: "Weil dein Körper im Energiemangel läuft. Mehr Training = höherer Verbrauch = noch niedrigere Energieverfügbarkeit = stärkere Stoffwechsel-Drosselung. Du kämpfst gegen deinen Körper statt mit ihm. Der Plan zeigt dir, wie du mit 2–3 Krafttrainings und gezielter NEAT-Erhöhung mehr erreichst.",
  },
  {
    q: "Steige ich nicht zu, wenn ich mehr esse?",
    a: "Wassereinlagerung durch Glykogenauffüllung ist normal – kein Fettaufbau. 1g Glykogen bindet 3–4g Wasser. Dein Körper braucht diesen Reset, damit Leptin und T3 wieder hochfahren. Erst wenn dein System stabil ist (Energie hoch, Zyklus regelmäßig), wird moderates Defizit überhaupt möglich.",
  },
];

const TRUST = "🔒 Sichere Bestellung · Sofortiger Zugang · Einmalig 4,99€";

const GREEN = "rgb(22,163,74)";
const OFFWHITE = "rgb(249,247,246)";
const GRAY_BG = "rgb(243,244,246)";

const AnbotBSales = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: OFFWHITE }} className="text-gray-900">
      {/* 1. HERO */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Du isst wenig, trainierst viel – und nichts passiert?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-5 leading-relaxed">
            Dein Körper hat in den Energie-Notfall-Modus geschaltet. Leptin runter, T3 runter, NEAT kollabiert – du bist im RED-S-Syndrom. Mehr Disziplin macht es schlimmer.
          </p>
        </div>
      </section>

      {/* 2. WAS BEDEUTET DAS? */}
      <section className="py-12 md:py-14" style={{ background: GRAY_BG }}>
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
            Unterversorgter Fettstoffwechsel
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
            <p className="text-gray-600 mt-3">Einen Ansatz, der Energieverfügbarkeit wiederherstellt, nicht weiter reduziert.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="font-bold text-gray-900 mb-4">Mach es selbst (kostenlos, aber Trial & Error)</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>EA-Formel finden und richtig anwenden</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Training reduzieren, ohne Muskelverlust zu riskieren</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Risiko: Monate im RED-S-Zustand bleiben</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border-2" style={{ borderColor: GREEN }}>
              <p className="font-bold text-gray-900 mb-1">7-Tage Unterversorgter-Stoffwechsel Reset-Plan</p>
              <p className="text-sm font-semibold mb-4" style={{ color: GREEN }}>Empfohlen</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Energieaufbau-Plan für deinen Stoffwechseltyp</span></li>
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Trainings-Reset ohne Rätselraten</span></li>
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Makro- und Mahlzeitenstruktur für mehr Stabilität</span></li>
                <li className="flex items-start gap-2"><span style={{ color: GREEN }} className="mt-0.5 flex-shrink-0">✓</span><span>Tracking-Vorlage für Energie, Hunger, Schlaf und Zyklus</span></li>
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
            Dein Körper steckt im Energie-Notfall-Modus. Leptin ist runtergefahren, T3 gedrosselt, NEAT kollabiert – weil deine Energieverfügbarkeit unter 30 kcal/kg FFM liegt. In 7 Tagen kannst du die Energieverfügbarkeit über die kritische Schwelle heben, das Leptin-Signal stabilisieren und deinem Körper zum ersten Mal seit Wochen das Signal geben: Energie ist da. Das stoppt die Abwärtsspirale – nicht Willenskraft.
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

export default AnbotBSales;