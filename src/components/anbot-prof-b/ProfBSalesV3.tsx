import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";
import philippFoto from "@/assets/philipp-autor.png";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/693551?voucher=quizrabatt";
const PAGE_PATH = "/buch/anbot-prof-b";

const handleCta = (label: string) => {
  trackButtonClick(PAGE_PATH, label, DIGISTORE_URL);
};

const CtaLink = ({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) => (
  <a
    href={DIGISTORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => handleCta(label)}
    className={className}
  >
    {children}
  </a>
);

const painCards = [
  {
    icon: "🥗",
    text: "Du isst 1.200 Kalorien am Tag – manchmal weniger – und nimmst trotzdem nicht ab.",
  },
  {
    icon: "🥶",
    text: "Dir ist ständig kalt, deine Energie ist am Boden und du fühlst dich dauerhaft erschöpft.",
  },
  {
    icon: "😫",
    text: "Jede Diät hat kurz funktioniert – und dann kam der Stillstand. Oder sogar mehr Gewicht.",
  },
  {
    icon: "😱",
    text: "Der Gedanke, MEHR zu essen, macht dir Angst – obwohl du weißt, dass etwas nicht stimmt.",
  },
  {
    icon: "💇",
    text: "Deine Haare werden dünner, deine Nägel brechen – dein Körper zeigt dir, dass etwas fehlt.",
  },
  {
    icon: "☕",
    text: "Du brauchst Kaffee um zu funktionieren und bist abends so platt, dass nichts mehr geht.",
  },
];

const imagineItems = [
  "...du isst endlich wieder eine normale Menge – und nimmst dabei sogar ab",
  "...dir ist nicht mehr ständig kalt und du hast wieder Energie für den ganzen Tag",
  "...du musst nicht mehr jede Kalorie zählen, weil dein Stoffwechsel wieder arbeitet",
  "...die Angst vor dem Essen ist weg – du genießt Mahlzeiten wieder",
  "...du verstehst endlich, warum 'weniger essen' bei dir nicht funktioniert hat",
  "...du fühlst dich wieder lebendig, warm und voller Energie",
];

const valueItems = [
  {
    icon: "📖",
    title: "E-Book 'Du bist nicht das Problem'",
    desc: "10 Kapitel + Bonus-Kapitel. Dein kompletter Leitfaden zum Verständnis deines Stoffwechsels.",
    value: "Wert: 29,99€",
    free: false,
  },
  {
    icon: "🎯",
    title: "Persönlicher Aktionsplan – Reverse-Diet Strategie",
    desc: "10 Seiten Reverse-Dieting-Protokoll, individuell auf deinen unterversorgten Stoffwechsel zugeschnitten.",
    value: "Wert: 27,00€",
    free: false,
  },
  {
    icon: "📱",
    title: "Online-Bonusbereich mit Tools & Rechnern",
    desc: "Interaktive Tools, Kalorienrechner und Tracking-Werkzeuge für deinen Fortschritt.",
    value: "Wert: 20,00€",
    free: false,
  },
  {
    icon: "📋",
    title: "9 herunterladbare PDF-Checklisten",
    desc: "Einkaufslisten, Meal-Prep-Pläne, Tracking-Sheets und mehr – sofort einsatzbereit.",
    value: "Wert: 15,00€",
    free: false,
  },
  {
    icon: "📲",
    title: "App- & Tool-Empfehlungen",
    desc: "Kuratierte Liste der besten Apps und Tools, die deinen Fortschritt unterstützen.",
    value: "Wert: 5,00€",
    free: false,
  },
  {
    icon: "🔄",
    title: "Regelmäßige Updates",
    desc: "Neue Erkenntnisse, aktualisierte Inhalte und Verbesserungen – kostenlos, für immer.",
    value: "Kostenlos",
    free: true,
  },
];

const faqs = [
  {
    q: "Warum kostet es nur 29,99€?",
    a: "Ganz ehrlich? Weil ich will, dass es sich JEDER leisten kann. Der Gesamtwert aller Inhalte liegt bei 96,99€ – E-Book, persönlicher Aktionsplan, Bonusbereich, 9 PDF-Checklisten und Tool-Empfehlungen. Aber ich weiß, wie frustrierend es ist, wenn man schon so viel Geld für Diäten ausgegeben hat, die nicht funktioniert haben. Deshalb: 29,99€. Einmalig. Kein Abo. Kein Haken.",
  },
  {
    q: "Funktioniert das auch bei mir?",
    a: "Wenn dein Stoffwechsel-Quiz Profil B (Unterversorgter Stoffwechsel) ergeben hat, dann ist dieses Buch und der dazugehörige Aktionsplan speziell für deine Situation entwickelt. Die Empfehlungen basieren auf wissenschaftlichen Erkenntnissen über metabolische Adaptation und Reverse Dieting.",
  },
  {
    q: "Nehme ich zu, wenn ich mehr esse?",
    a: "Das ist die häufigste Sorge – und gleichzeitig der wichtigste Punkt. Der Aktionsplan zeigt dir, wie du kontrolliert und schrittweise mehr essen kannst, OHNE unkontrolliert zuzunehmen. Reverse Dieting ist eine wissenschaftlich fundierte Methode genau dafür.",
  },
  {
    q: "Was ist der Aktionsplan genau?",
    a: "Ein 10-seitiges PDF, individuell auf Profil B (Unterversorgter Stoffwechsel) zugeschnitten. Mit einem Reverse-Dieting-Protokoll, konkreten Kalorienstufen und einem Phasenplan, den du sofort umsetzen kannst. Keine Theorie – sondern 'Mach das in Woche 1, das in Woche 2'.",
  },
  {
    q: "Was wenn es mir nicht hilft?",
    a: "Dann nutze die 14-Tage Geld-zurück-Garantie. Eine einfache E-Mail genügt, und du bekommst dein Geld zurück. Ohne Wenn und Aber. Du trägst null Risiko.",
  },
  {
    q: "Brauche ich Vorkenntnisse?",
    a: "Nein. Das Buch erklärt alles verständlich und Schritt für Schritt. Egal ob du dich zum ersten Mal mit dem Thema Stoffwechsel beschäftigst oder schon vieles ausprobiert hast.",
  },
  {
    q: "Wie bekomme ich Zugang?",
    a: "Sofort nach der Bestellung. Du erhältst das E-Book, den Aktionsplan und alle Bonusmaterialien als Download. Plus Zugang zum Online-Bonusbereich. Alles digital, sofort verfügbar.",
  },
];

const ProfBSalesV3 = () => {
  const preisFaqIndex = faqs.findIndex((f) => f.q.startsWith("Warum kostet"));
  const [openFaq, setOpenFaq] = useState<number | null>(preisFaqIndex);

  return (
    <div className="bg-white text-gray-900">
      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-sm uppercase tracking-wide text-emerald-600 font-semibold mb-4">
                FÜR MENSCHEN MIT UNTERVERSORGTEM STOFFWECHSEL
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Du isst zu wenig – und nimmst trotzdem zu. Das ist kein Widerspruch.
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl">
                Dein Körper hat gelernt, mit Wenig zu überleben. Jede Diät hat ihm beigebracht, noch sparsamer zu werden. Aber das lässt sich umkehren – mit dem richtigen Wissen.
              </p>
              <ul className="space-y-3 mt-6 text-lg text-gray-700">
                <li>🚫 Du isst schon so wenig – und trotzdem tut sich nichts auf der Waage</li>
                <li>🚫 Du frierst ständig, bist müde und dein Haar wird dünner</li>
                <li>🚫 Jede Diät funktioniert 2 Wochen – dann geht nichts mehr</li>
                <li>🚫 Du traust dich nicht, MEHR zu essen – obwohl es vielleicht genau das Richtige wäre</li>
                <li>🚫 Dein Stoffwechsel fühlt sich an wie... eingeschlafen</li>
              </ul>
              <p className="text-lg font-bold mt-6" style={{ color: "#16A34A" }}>
                ✅ Dein Stoffwechsel ist nicht kaputt. Er ist heruntergefahren. Und wir können ihn wieder hochfahren.
              </p>
              <div className="mt-8">
                <CtaLink
                  label="Hero CTA"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold py-5 px-10 rounded-xl shadow-xl transition-all duration-200"
                >
                  Jetzt für 29,99€ sichern →
                </CtaLink>
                <p className="text-sm text-gray-500 mt-3">
                  🔒 Sichere Bestellung • Sofortiger Zugang • 14-Tage Geld-zurück-Garantie
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-56 md:w-72 h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Kennst du das auch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painCards.map((c, i) => (
              <div key={i} className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="text-gray-700 text-lg">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg font-semibold text-gray-800">
            Das Problem ist NICHT, dass du zu viel isst. Das Problem ist, dass dein Körper im Sparmodus steckt – und jede weitere Diät macht es schlimmer.
          </p>
        </div>
      </section>

      {/* 3. STELL DIR VOR */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center mb-10">
            Stell dir vor…
          </h2>
          <ul className="space-y-4">
            {imagineItems.map((t, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✨</span>
                <span className="text-lg text-gray-700 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <p className="font-semibold text-emerald-700 text-xl">
              Das ist keine Fantasie. Das ist das Ergebnis, wenn dein Stoffwechsel wieder genug Energie bekommt.
            </p>
            <CtaLink
              label="Stell dir vor CTA"
              className="mt-6 inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg"
            >
              Jetzt für 29,99€ sichern →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* 4. VALUE STACK + PREIS-BOX */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Schau, was du ALLES bekommst:
          </h2>
          <div className="space-y-4">
            {valueItems.map((v, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{v.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
                <span
                  className={`whitespace-nowrap text-right ${
                    v.free
                      ? "text-emerald-600 font-semibold"
                      : "text-gray-400 line-through"
                  }`}
                >
                  {v.value}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto bg-white border-2 border-emerald-500 rounded-2xl p-8 shadow-2xl text-center mt-10">
            <p className="text-gray-500 text-lg">Gesamtwert aller Inhalte:</p>
            <p className="text-gray-400 line-through text-2xl">96,99€</p>
            <div className="border-t border-gray-200 my-4" />
            <p className="text-gray-700 text-lg font-medium">Dein Preis heute:</p>
            <p className="text-5xl font-bold text-emerald-600 mt-2">29,99€</p>
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm mt-4">
              Du sparst 67,00€ (69% Rabatt)
            </span>
            <CtaLink
              label="Preisbox CTA"
              className="mt-6 block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-8 rounded-xl text-center"
            >
              Jetzt für 29,99€ sichern →
            </CtaLink>
            <p className="text-sm text-gray-500 mt-3">
              Einmaliger Preis • Kein Abo • Sofortiger Download
            </p>
          </div>
        </div>
      </section>

      {/* 5. AKTIONSPLAN HIGHLIGHT */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="rounded-2xl shadow-2xl p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
              border: "3px solid #F59E0B",
            }}
          >
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
              ⚡ DEIN PERSÖNLICHER AKTIONSPLAN
            </span>
            <h2 className="text-3xl font-bold mt-6 text-gray-900">
              Die Reverse-Diet Strategie – dein 10-Seiten-Plan
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Basierend auf deiner Stoffwechsel-Analyse erhältst du einen maßgeschneiderten Aktionsplan für deinen unterversorgten Stoffwechsel. 10 Seiten, individuell auf dein Profil zugeschnitten. Mit einem klaren Reverse-Dieting-Protokoll, das deinen Grundumsatz Schritt für Schritt wieder anhebt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: "📝",
                  title: "Phase 1: Stabilisierung",
                  text: "Wir ermitteln dein aktuelles Kalorienniveau und stabilisieren deinen Stoffwechsel. Kein Schock, kein Stress.",
                },
                {
                  icon: "🔥",
                  title: "Phase 2: Kontrollierter Aufbau",
                  text: "Schrittweise Kalorienerhöhung – so, dass dein Körper verbrennt statt einlagert. Woche für Woche.",
                },
                {
                  icon: "⚖️",
                  title: "Phase 3: Neues Gleichgewicht",
                  text: "Dein Grundumsatz ist wieder auf einem gesunden Level. Abnehmen wird endlich möglich – ohne Hungern.",
                },
              ].map((p, i) => (
                <div key={i} className="bg-white/80 p-6 rounded-xl text-center">
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-gray-600 mt-2">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-lg font-semibold text-gray-900">
              Dieser 10-seitige Aktionsplan allein ist 27€ wert – du bekommst ihn INKLUSIVE.
            </p>
          </div>
        </div>
      </section>

      {/* 6. ÜBER MICH */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wer schreibt das hier?</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={philippFoto}
              alt="Philipp Prinz"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ich bin Philipp, 50, IT-Mensch, Familienvater – und ich habe dieses Buch geschrieben, weil ich selbst jahrelang gegen meinen heruntergefahrenen Stoffwechsel gekämpft habe. Zu wenig gegessen, zu viel trainiert, eine Diät nach der anderen – und trotzdem keine Ergebnisse. Die Reverse-Diet Strategie im Aktionsplan hat mir geholfen, meinen Stoffwechsel wieder hochzufahren. Jetzt gebe ich sie weiter – ohne Schnickschnack, nur das, was funktioniert.
          </p>
          <p className="text-gray-500 italic mt-4">– Philipp Prinz</p>
          <CtaLink
            label="Über mich CTA"
            className="mt-6 inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg"
          >
            Jetzt für 29,99€ sichern →
          </CtaLink>
        </div>
      </section>


      {/* 8. GARANTIE */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-8 text-center">
            <div className="text-6xl">🛡️</div>
            <h2 className="text-2xl font-bold text-emerald-800 mt-4">
              14-Tage Geld-zurück-Garantie
            </h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Ich bin überzeugt, dass dieses Buch und der Aktionsplan dir helfen werden. Aber ich möchte, dass du dich 100% sicher fühlst. Deshalb bekommst du eine volle 14-Tage Geld-zurück-Garantie. Lies das Buch, probiere die Reverse-Diet Strategie aus – und wenn du nicht überzeugt bist, schreib mir einfach eine E-Mail und du bekommst dein Geld zurück. Ohne Fragen, ohne Diskussion.
            </p>
            <p className="text-gray-600 font-medium italic mt-4">– Philipp Prinz</p>
            <CtaLink
              label="Garantie CTA"
              className="mt-6 inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg"
            >
              Risikofrei für 29,99€ testen →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Häufige Fragen</h2>
          <div>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="bg-white rounded-lg mb-3 overflow-hidden border">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full font-semibold text-lg p-5 cursor-pointer flex justify-between items-center text-left"
                  >
                    <span>{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <div className="p-5 pt-0 text-gray-600">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="bg-emerald-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Bereit, deinen Stoffwechsel aus dem Sparmodus zu befreien?
          </h2>
          <p className="text-xl text-emerald-200 mt-4">
            Buch + Reverse-Diet Aktionsplan + alle Bonusmaterialien – für einmalig 29,99€.
          </p>
          <p className="mt-4">
            <span className="text-4xl font-bold text-white">29,99€</span>
            <span className="text-emerald-300 line-through text-xl ml-3">statt 96,99€</span>
          </p>
          <CtaLink
            label="Finaler CTA"
            className="mt-8 inline-block bg-white text-emerald-900 hover:bg-emerald-50 text-xl font-bold py-5 px-12 rounded-xl shadow-xl transition-all duration-200"
          >
            Jetzt für 29,99€ sichern →
          </CtaLink>
          <p className="text-emerald-300 text-sm mt-4">
            🔒 Sichere Bestellung • Sofortiger Zugang • 14-Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden h-24" aria-hidden="true" />
      <div
        className="fixed bottom-0 left-0 right-0 p-3 bg-white md:hidden z-50"
        style={{ boxShadow: "0 -2px 10px rgba(0,0,0,0.1)" }}
      >
        <CtaLink
          label="Sticky Mobile CTA"
          className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition"
        >
          Jetzt für 29,99€ sichern
        </CtaLink>
      </div>
    </div>
  );
};

export default ProfBSalesV3;
