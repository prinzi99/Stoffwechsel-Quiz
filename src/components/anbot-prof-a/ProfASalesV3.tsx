import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";
import philippFoto from "@/assets/philipp-autor.png";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/693088?voucher=quizrabatt";
const PAGE_PATH = "/buch/anbot-prof-a";

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
    icon: "😫",
    title: "Alles richtig – trotzdem nichts passiert",
    text: "Du zählst Kalorien, trackst jeden Bissen – aber dein Körper macht einfach nicht mit. Das Gewicht steht still oder steigt sogar.",
  },
  {
    icon: "😴",
    title: "Morgens schon am Limit",
    text: "Du wachst morgens schon müde auf und brauchst 3 Kaffee um zu funktionieren. Dein Energielevel fühlt sich dauerhaft auf 40%.",
  },
  {
    icon: "🍫",
    title: "Abends verlierst du den Kampf",
    text: "Abends überkommt dich der Heißhunger – und du verlierst den Kampf. Immer wieder. Du fragst dich, ob es an deiner Willenskraft liegt.",
  },
  {
    icon: "😤",
    title: "'Was stimmt mit mir nicht?'",
    text: "Du fragst dich: 'Was stimmt mit mir nicht?' – während alle anderen scheinbar mühelos abnehmen. Je weniger du isst, desto MEHR hält dein Körper fest.",
  },
];

const imagineItems = [
  "...du wachst morgens auf und fühlst dich zum ersten Mal seit Langem wirklich ausgeschlafen",
  "...der Heißhunger am Abend ist einfach… weg",
  "...die Waage bewegt sich endlich wieder in die richtige Richtung – ohne Hungern",
  "...Menschen in deinem Umfeld fragen: 'Was machst du anders? Du wirkst so anders!'",
  "...du verstehst endlich, WARUM dein Körper bisher blockiert hat – und was du tun kannst",
  "...du fühlst dich wieder wie du selbst. Voller Energie. Ohne diesen ständigen Kampf.",
];

const valueItems = [
  {
    icon: "📖",
    title: "E-Book 'Du bist nicht das Problem'",
    desc: "10 Kapitel + Bonus-Kapitel. Dein kompletter Leitfaden.",
    value: "Wert: 29,99€",
    free: false,
  },
  {
    icon: "🎯",
    title: "Persönlicher Aktionsplan – Profil A",
    desc: "10 Seiten, individuell auf deinen gestressten Stoffwechsel zugeschnitten.",
    value: "Wert: 27,00€",
    free: false,
  },
  {
    icon: "💻",
    title: "Online-Bonusbereich mit Tools & Rechnern",
    desc: "Interaktive Tools, Kalorienrechner und Tracking-Werkzeuge.",
    value: "Wert: 20,00€",
    free: false,
  },
  {
    icon: "📋",
    title: "9 herunterladbare PDF-Checklisten",
    desc: "Einkaufslisten, Meal-Prep-Pläne, Tracking-Sheets – sofort einsatzbereit.",
    value: "Wert: 15,00€",
    free: false,
  },
  {
    icon: "📱",
    title: "App- & Tool-Empfehlungen",
    desc: "Kuratierte Liste der besten Apps für deinen Fortschritt.",
    value: "Wert: 5,00€",
    free: false,
  },
  {
    icon: "🔄",
    title: "Regelmäßige Updates",
    desc: "Neue Erkenntnisse und aktualisierte Inhalte – kostenlos, für immer.",
    value: "Kostenlos",
    free: true,
  },
];

const faqs = [
  {
    q: "Funktioniert das auch bei mir?",
    a: "Wenn dein Stoffwechsel-Quiz Profil A (Gestresster Stoffwechsel) ergeben hat, dann ist dieses Buch und der dazugehörige Aktionsplan speziell für deine Situation entwickelt. Die Empfehlungen basieren auf wissenschaftlichen Erkenntnissen über die HPA-Achse und Cortisol-Regulation.",
  },
  {
    q: "Ist das nicht einfach eine weitere Diät?",
    a: "Nein. Diäten behandeln Symptome. Dieses Buch erklärt die Ursache – deinen Stoffwechseltyp – und gibt dir einen Plan, der auf Wissenschaft basiert, nicht auf Trends. Es geht um Verständnis, nicht um Verbote.",
  },
  {
    q: "Was ist der Aktionsplan genau?",
    a: "Ein 10-seitiges PDF, individuell auf Profil A (Gestresster Stoffwechsel) zugeschnitten. Mit konkreten Ernährungs-Strategien, Cortisol-Management-Techniken und einem Phasenplan, den du sofort umsetzen kannst.",
  },
  {
    q: "Was wenn es mir nicht hilft?",
    a: "Dann nutze die 14-Tage Geld-zurück-Garantie. Eine einfache E-Mail genügt, und du bekommst dein Geld zurück. Ohne Wenn und Aber.",
  },
  {
    q: "Brauche ich Vorkenntnisse?",
    a: "Nein. Das Buch erklärt alles verständlich und Schritt für Schritt. Egal ob du dich zum ersten Mal mit dem Thema Stoffwechsel beschäftigst oder schon vieles ausprobiert hast.",
  },
  {
    q: "Wie bekomme ich Zugang?",
    a: "Sofort nach der Bestellung. Du erhältst das E-Book, den Aktionsplan und alle Bonusmaterialien als Download. Plus Zugang zum Online-Bonusbereich.",
  },
  {
    q: "Warum kostet es nur 29,99€?",
    a: "Weil ich möchte, dass der Preis keine Ausrede ist. Der Gesamtwert liegt bei 96,99€ – aber mir ist wichtiger, dass möglichst viele Menschen Zugang bekommen, als den höchsten Preis zu erzielen.",
  },
];

const ProfASalesV3 = () => {
  const preisFaqIndex = faqs.findIndex((f) => f.q.startsWith("Warum kostet"));
  const [openFaq, setOpenFaq] = useState<number | null>(preisFaqIndex);

  return (
    <div className="bg-white text-gray-900">
      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-sm uppercase tracking-wide text-orange-600 font-semibold mb-4">
                FÜR MENSCHEN MIT GESTRESSTEM STOFFWECHSEL
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Dein Körper ist nicht kaputt – er ist im Überlebensmodus.
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl">
                Cortisol regiert deinen Stoffwechsel. Jede Diät hat den Stress verschlimmert. Aber dein Körper WILL heilen – er braucht nur den richtigen Plan.
              </p>
              <div className="mt-8">
                <CtaLink
                  label="Hero CTA"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-5 px-10 rounded-xl shadow-xl transition-all duration-200"
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
          <h2 className="text-3xl font-bold text-center mb-10">Kennst du das auch?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painCards.map((c, i) => (
              <div key={i} className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                <p className="text-gray-700 mt-2">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lg font-bold text-green-700">
            ✅ Das ist nicht deine Schuld. Es ist dein Cortisol. Und wir können das ändern.
          </p>
        </div>
      </section>

      {/* 3. STELL DIR VOR */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-10">
            Stell dir vor…
          </h2>
          <ul className="space-y-5">
            {imagineItems.map((t, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">✨</span>
                <span className="text-lg text-gray-700 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <p className="font-semibold text-green-700 text-xl">
              Das ist keine Fantasie. Das ist das Ergebnis, wenn dein Cortisol endlich im Gleichgewicht ist.
            </p>
            <CtaLink
              label="Stell dir vor CTA"
              className="mt-6 block max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg text-center"
            >
              Jetzt für 29,99€ starten →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* 4. AKTIONSPLAN HIGHLIGHT */}
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
              🎯 DEIN PERSÖNLICHER AKTIONSPLAN
            </span>
            <h2 className="text-3xl font-bold mt-6 text-gray-900">
              Nicht irgendein Plan. DEIN Plan.
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Basierend auf deiner Stoffwechsel-Analyse erhältst du einen maßgeschneiderten Aktionsplan für deinen gestressten Stoffwechsel. 10 Seiten, individuell auf dein Profil zugeschnitten. Kein Rätselraten. Kein 'probier mal dies'. Sondern Schritt-für-Schritt Anweisungen, die auf DEINE Situation abgestimmt sind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  icon: "📋",
                  title: "Phase 1: Cortisol-Reset",
                  text: "Die ersten Wochen: Wir beruhigen deine HPA-Achse und stoppen den Teufelskreis.",
                },
                {
                  icon: "🔥",
                  title: "Phase 2: Stoffwechsel-Aktivierung",
                  text: "Dein Körper lernt wieder, Fett als Energie zu nutzen statt einzulagern.",
                },
                {
                  icon: "🎯",
                  title: "Phase 3: Nachhaltige Ergebnisse",
                  text: "Dein neuer Stoffwechsel-Rhythmus wird zur Gewohnheit.",
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

      {/* 5. VALUE STACK + PREIS-BOX */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
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
                    <p className="text-gray-500 text-sm mt-1">{v.desc}</p>
                  </div>
                </div>
                <span
                  className={`whitespace-nowrap text-right ${
                    v.free
                      ? "text-green-600 font-semibold"
                      : "text-gray-400 line-through"
                  }`}
                >
                  {v.value}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-lg mx-auto bg-white border-2 border-green-500 rounded-2xl p-8 shadow-2xl text-center mt-10">
            <p className="text-gray-500 text-lg">Gesamtwert aller Inhalte:</p>
            <p className="text-gray-400 line-through text-2xl">96,99€</p>
            <div className="border-t border-gray-200 my-4" />
            <p className="text-gray-700 text-lg font-medium">Dein Preis heute:</p>
            <p className="text-5xl font-bold text-green-600 mt-2">29,99€</p>
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm mt-4">
              Du sparst 67,00€ (69% Rabatt)
            </span>
            <CtaLink
              label="Preisbox CTA"
              className="mt-6 block w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-8 rounded-xl text-center"
            >
              Jetzt für 29,99€ sichern →
            </CtaLink>
            <p className="text-sm text-gray-500 mt-3">
              Einmaliger Preis • Kein Abo • Sofortiger Download
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA #2 */}
      <section className="bg-green-700 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white text-2xl font-bold">
            Buch + Aktionsplan + alle Boni – für einmalig 29,99€ statt 96,99€
          </p>
          <CtaLink
            label="CTA #2"
            className="mt-6 inline-block bg-white text-green-700 hover:bg-gray-100 text-xl font-bold py-5 px-10 rounded-xl shadow-xl transition-all duration-200"
          >
            Ja, ich will meinen Stoffwechsel befreien – für 29,99€ →
          </CtaLink>
          <p className="text-green-200 text-sm mt-3">
            🔒 Sichere Bestellung • Sofortiger Zugang • 14-Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>

      {/* 7. ÜBER MICH */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Wer schreibt das hier?</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <img
              src={philippFoto}
              alt="Philipp Prinz"
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="font-bold text-lg">Philipp Prinz</span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Ich bin Philipp – 50 Jahre, Familienvater, IT-Job. Kein Arzt, kein Ernährungswissenschaftler. Ich habe selbst fast jeden Fehler gemacht, den dieses Buch beschreibt: zu wenig gegessen, zu viel trainiert, eine Diät nach der anderen. Irgendwann habe ich aufgehört, härter zu kämpfen – und angefangen, das System zu verstehen. Das Ergebnis teile ich hier, ehrlich und ohne falsche Bescheidenheit.
          </p>
        </div>
      </section>

      {/* 8. GARANTIE */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
            <div className="text-6xl">🛡️</div>
            <h2 className="text-2xl font-bold text-green-800 mt-4">
              14-Tage Geld-zurück-Garantie
            </h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Ich bin überzeugt, dass dieses Buch und der Aktionsplan dir helfen werden. Aber ich möchte, dass du dich 100% sicher fühlst. Deshalb bekommst du eine volle 14-Tage Geld-zurück-Garantie. Lies das Buch, probiere den Aktionsplan aus – und wenn du nicht zufrieden bist, schreib mir einfach eine E-Mail und du bekommst dein Geld zurück. Ohne Fragen, ohne Diskussion.
            </p>
            <p className="text-gray-600 font-medium italic mt-4">– Philipp Prinz</p>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Häufige Fragen</h2>
          <div>
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="bg-gray-50 rounded-lg mb-3 overflow-hidden">
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

      {/* 10. FINALER CTA */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Bereit, deinen Stoffwechsel aus dem Stressmodus zu befreien?
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            Buch + Aktionsplan + Tools + Bonusmaterial – für einmalig 29,99€.
          </p>
          <p className="text-5xl font-bold text-green-400 mt-6">29,99€</p>
          <p className="text-gray-400 text-lg mt-2">statt 96,99€</p>
          <CtaLink
            label="Finaler CTA"
            className="mt-8 block max-w-md mx-auto bg-green-500 hover:bg-green-400 text-white text-xl font-bold py-5 px-12 rounded-xl shadow-xl transition-all duration-200 text-center"
          >
            Jetzt für 29,99€ bestellen →
          </CtaLink>
          <p className="text-gray-400 text-sm mt-4">
            🔒 Sichere Bestellung • Sofortiger Zugang • 14-Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>

      {/* 11. PS */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-4 border-t border-gray-200 pt-8">
          <p className="font-bold text-lg text-gray-800">P.S.</p>
          <p className="text-gray-600 text-lg mt-2 leading-relaxed">
            Dein Körper ist nicht das Problem. Dein Stoffwechsel braucht nur den richtigen Ansatz. Dieses Buch und dein persönlicher Aktionsplan geben dir genau das – wissenschaftlich fundiert, verständlich erklärt und sofort umsetzbar. Für 29,99€ statt 96,99€. Mit 14-Tage Geld-zurück-Garantie.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfASalesV3;
