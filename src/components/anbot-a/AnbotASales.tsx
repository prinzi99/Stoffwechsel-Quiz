import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/landing/Footer";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/693088?voucher=quizrabatt";
const PAGE_PATH = "/anbot-a";

const handleCta = (label: string) => {
  trackButtonClick(PAGE_PATH, label, DIGISTORE_URL);
};

const painCards = [
  {
    icon: "😒",
    title: "Du machst alles richtig – trotzdem nichts",
    text: "Du zählst Kalorien, verzichtest, bewegst dich. Und trotzdem tut sich nichts. Oder schlimmer: Die Waage geht hoch.",
  },
  {
    icon: "😓",
    title: "Morgens schon am Limit",
    text: "Aufwachen fühlt sich an wie Kampf. Der Kaffee hält dich halbwegs über Wasser, aber die Energie kommt nicht zurück.",
  },
  {
    icon: "😟",
    title: "Abends verlierst du den Kampf",
    text: "Tagsüber schaffst du es noch. Aber abends auf der Couch überrollt dich die Lust auf Süßes, Salziges, Kohlenhydrate – und du gibst nach.",
  },
];

const whyBullets = [
  {
    title: "Dein Stoffwechsel ist im Stressmodus.",
    text: `Cortisol signalisiert deinem Körper: „Gefahr! Energie speichern!“ Abnehmen wird zur Unmöglichkeit.`,
  },
  {
    title: "Jede Diät verschlimmert es.",
    text: "Weniger Essen = mehr Stress = mehr Cortisol. Der Teufelskreis dreht sich schneller.",
  },
  {
    title: "Dein Körper arbeitet gegen dich.",
    text: "Er verteidigt jedes Gramm Fett, bremst deinen Stoffwechsel, macht dich müde und hungrig.",
  },
  {
    title: "Du brauchst keinen härteren Plan. Du brauchst den RICHTIGEN Plan.",
    text: "Einen, der deinen Körper aus dem Überlebensmodus holt – erst dann kann er loslassen.",
  },
];

const faqs = [
  {
    q: "Was genau bekomme ich für 4,99€?",
    a: "Einen 10-seitigen PDF-Aktionsplan, der speziell auf dein Profil (Gestresster Stoffwechsel) zugeschnitten ist. Darin findest du konkrete Lifestyle-Strategien, Ernährungsimpulse und Routinen, um deinen Cortisol-Spiegel zu senken und deinen Stoffwechsel aus dem Stressmodus zu holen. Du kannst ihn sofort nach dem Kauf herunterladen.",
  },
  {
    q: "Ist das nur eine weitere Diät?",
    a: `Nein. Es geht nicht um Verzicht oder Kalorienzählen – das würde deinen Stoffwechsel nur noch mehr stressen. Der Aktionsplan zeigt dir, wie du deinen Körper wieder in den „Sicherheitsmodus“ bringst. Erst dann kann er loslassen. Keine Diät, sondern ein System-Reset.`,
  },
  {
    q: "Was, wenn es mir nicht hilft?",
    a: "Du hast 14 Tage Geld-zurück-Garantie. Wenn du mit dem Aktionsplan nicht zufrieden bist, schreibst du eine kurze Mail – und du bekommst deine 4,99€ zurück. Ohne Diskussion, ohne Fragen.",
  },
];

const TRUST = "🔒 Sichere Bestellung · Sofortiger Zugang · 14-Tage Geld-zurück-Garantie";

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
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-sm uppercase tracking-wide font-semibold mb-4" style={{ color: GREEN }}>
            FÜR MENSCHEN MIT GESTRESSTEM STOFFWECHSEL
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Dein Körper ist nicht kaputt – er ist im Überlebensmodus.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-5 leading-relaxed">
            Dein Stoffwechsel reagiert nicht auf Diäten, weil er unter Dauerstress steht. Zu viel Cortisol blockiert
            jeden Fortschritt – egal wie diszipliniert du bist. Aber du kannst das ändern.
          </p>

          {/* Aktionsplan Visual */}
          <div className="mt-10 inline-flex flex-col items-center">
            <div
              className="relative w-40 h-52 md:w-48 md:h-64 rounded-xl shadow-2xl flex flex-col p-5 text-left"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
                border: `2px solid ${GREEN}`,
              }}
            >
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full whitespace-nowrap"
                style={{ background: GREEN }}
              >
                Profil A
              </span>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-2">PDF · 10 Seiten</p>
              <p className="font-bold text-sm text-gray-900 mt-1 leading-snug">Dein Aktionsplan</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Gestresster Stoffwechsel</p>
              <ul className="mt-4 space-y-2 text-[11px] text-gray-700">
                <li className="flex items-start gap-1.5">
                  <span style={{ color: GREEN }}>✓</span> HPA-Achse beruhigen
                </li>
                <li className="flex items-start gap-1.5">
                  <span style={{ color: GREEN }}>✓</span> Stoffwechsel aktivieren
                </li>
                <li className="flex items-start gap-1.5">
                  <span style={{ color: GREEN }}>✓</span> Nachhaltige Routine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="py-14 md:py-16" style={{ background: GRAY_BG }}>
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Kennst du das auch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painCards.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-lg text-gray-900">{c.title}</h3>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg font-medium" style={{ color: GREEN }}>
            ✓ Das ist nicht deine Schuld. Es ist dein Cortisol.
          </p>
        </div>
      </section>

      {/* 3. WHY DIETS FAIL */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            Warum Diäten und Verzicht bei dir nicht funktionieren
          </h2>
          <div className="space-y-6">
            {whyBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0" style={{ color: GREEN }}>♦</span>
                <div>
                  <p className="font-bold text-gray-900 text-base md:text-lg">{b.title}</p>
                  <p className="text-gray-700 mt-1 leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTRAST */}
      <section className="py-14 md:py-16" style={{ background: OFFWHITE }}>
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            Du hast jetzt zwei Möglichkeiten:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option 1 */}
            <div className="bg-gray-100 rounded-xl p-7 border border-gray-200">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
                Option 1
              </span>
              <h3 className="text-xl font-bold text-gray-700">Allein weitermachen</h3>
              <ul className="mt-5 space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  Weiter raten, was bei dir funktioniert
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  Trial & Error mit Diäten, die vielleicht passen – oder alles schlimmer machen
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  Riskieren, dass dein Körper noch tiefer in den Stressmodus rutscht
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">✕</span>
                  Monate oder Jahre verlieren
                </li>
              </ul>
            </div>

            {/* Option 2 */}
            <div
              className="rounded-xl p-7 shadow-md"
              style={{ background: GREEN_LIGHT, border: `2px solid ${GREEN}` }}
            >
              <span
                className="inline-block text-xs uppercase tracking-wider font-bold mb-2 text-white px-2 py-1 rounded"
                style={{ background: GREEN }}
              >
                Option 2 – Empfohlen
              </span>
              <h3 className="text-xl font-bold text-gray-900">Deinen persönlichen Aktionsplan nutzen</h3>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                Ein kompakter, auf dein Profil zugeschnittener Plan, der deinen Stoffwechsel Schritt für Schritt aus dem
                Überlebensmodus holt:
              </p>
              <ul className="mt-5 space-y-3 text-gray-800">
                <li>
                  <span style={{ color: GREEN }} className="font-bold">✓ Phase 1 – HPA-Achse beruhigen: </span>
                  Lifestyle-Strategien, die Cortisol senken (ohne Verzicht oder Zwang)
                </li>
                <li>
                  <span style={{ color: GREEN }} className="font-bold">✓ Phase 2 – Stoffwechsel aktivieren: </span>
                  Gezielte Impulse, die deinen Körper wieder in den „Sicherheitsmodus“ bringen
                </li>
                <li>
                  <span style={{ color: GREEN }} className="font-bold">✓ Phase 3 – Nachhaltige Routine: </span>
                  Wie du langfristig dran bleibst – ohne Rückfall in alte Muster
                </li>
              </ul>
            </div>
          </div>

          {/* CTA #1 */}
          <div className="text-center mt-10">
            <a
              href={DIGISTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCta("Contrast CTA")}
              className="inline-block text-white text-lg md:text-xl font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl shadow-xl transition-all hover:opacity-95"
              style={{ background: GREEN }}
            >
              Ja, ich will meinen Aktionsplan – für 4,99€ →
            </a>
            <p className="text-sm text-gray-500 mt-3">{TRUST}</p>
          </div>
        </div>
      </section>

      {/* 5. ANGEBOT */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-2xl mx-auto px-5">
          <div
            className="rounded-2xl p-8 md:p-10 text-center shadow-lg bg-white"
            style={{ border: `2px solid ${GREEN}` }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dein Aktionsplan – für einmalig 4,99€
            </h2>
            <p className="text-gray-700 mt-5 text-left leading-relaxed">
              Du bekommst einen <strong>10-seitigen, profil-spezifischen PDF-Aktionsplan</strong>, der dir zeigt:
            </p>
            <ul className="mt-4 space-y-2 text-left text-gray-700">
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-1">✓</span>
                Welche konkreten Schritte dein Stoffwechsel-Typ JETZT braucht
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-1">✓</span>
                Wie du Cortisol senkst, ohne dein Leben auf den Kopf zu stellen
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-1">✓</span>
                Welche Fehler du unbedingt vermeiden musst (sonst wird's schlimmer)
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: GREEN }} className="mt-1">✓</span>
                Wie du in 3 Phasen von „Überlebensmodus“ zu „Stoffwechsel läuft“ kommst
              </li>
            </ul>

            <div className="mt-8 py-5 rounded-xl" style={{ background: GREEN_LIGHT }}>
              <p className="text-lg font-semibold text-gray-900">Einmalig</p>
              <p className="text-5xl font-bold mt-1" style={{ color: GREEN }}>4,99€</p>
              <p className="text-sm text-gray-600 mt-1">kein Abo, kein Haken</p>
            </div>

            <a
              href={DIGISTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCta("Angebot CTA")}
              className="mt-6 inline-block w-full text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-all hover:opacity-95"
              style={{ background: GREEN }}
            >
              Jetzt für 4,99€ sichern und sofort starten →
            </a>
            <p className="text-sm text-gray-500 mt-3">{TRUST}</p>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-14 md:py-16" style={{ background: GRAY_BG }}>
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

      {/* 7. FINAL CTA */}
      <section className="py-16 md:py-20" style={{ background: DARK }}>
        <div className="max-w-2xl mx-auto px-5 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            Bereit, deinen Stoffwechsel aus dem Überlebensmodus zu befreien?
          </h2>
          <p className="text-2xl font-bold mt-6">Einmalig 4,99€</p>
          <a
            href={DIGISTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCta("Final CTA")}
            className="mt-6 inline-block text-white text-lg md:text-xl font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl shadow-xl transition-all hover:opacity-95"
            style={{ background: GREEN }}
          >
            Jetzt Aktionsplan sichern →
          </a>
          <p className="text-sm text-gray-300 mt-4">{TRUST}</p>

          <p className="text-sm text-gray-400 mt-10 leading-relaxed max-w-lg mx-auto">
            <strong className="text-gray-200">P.S.:</strong> Für 4,99€ bekommst du einen profil-spezifischen
            Aktionsplan, den du ein Leben lang nutzen kannst. Kein Abo, kein Haken. Nur ein klarer Weg raus aus dem
            Cortisol-Teufelskreis.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnbotASales;
