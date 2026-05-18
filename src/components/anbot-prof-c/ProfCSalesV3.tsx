import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/landing/Footer";
import bookCover from "@/assets/book-cover-mockup2.jpeg";
import philippFoto from "@/assets/philipp-autor.png";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/693556?voucher=quizrabatt";
const PAGE_PATH = "/buch/anbot-prof-c";

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
  { icon: "📉", text: "Du startest eine neue Diät, es läuft super – und nach 3-4 Wochen: nichts mehr. Plateau." },
  { icon: "🔄", text: "Du hast in den letzten Jahren 5+ verschiedene Diäten gemacht – keine hat dauerhaft funktioniert." },
  { icon: "⚖️", text: "Nach jeder Diät wiegst du etwas mehr als davor. Der Jojo-Effekt ist dein ständiger Begleiter." },
  { icon: "😵‍💫", text: "Du weißt eigentlich alles über Ernährung – aber dein Körper reagiert einfach nicht mehr." },
  { icon: "📚", text: "Du hast schon Bücher gelesen, Podcasts gehört, Tracker benutzt – und stehst trotzdem am selben Punkt." },
  { icon: "😤", text: "Die Frustration wächst: Du machst alles 'richtig' – und es passiert einfach nichts mehr." },
];

const imagineItems = [
  "...du startest eine neue Strategie – und das Plateau löst sich endlich auf",
  "...die Waage bewegt sich wieder. Woche für Woche. Ohne extremes Hungern.",
  "...du verstehst endlich, WARUM keine Diät funktioniert hat – und was stattdessen funktioniert",
  "...du musst nicht mehr gegen deinen Körper kämpfen, sondern arbeitest MIT ihm",
  "...der Jojo-Effekt ist Geschichte, weil du eine wissenschaftlich fundierte Methode nutzt",
  "...du fühlst dich wieder motiviert und siehst endlich echte Fortschritte",
];

const valueItems = [
  { icon: "📖", title: "E-Book 'Du bist nicht das Problem'", desc: "10 Kapitel + Bonus-Kapitel. Dein kompletter Leitfaden zum Verständnis deines Stoffwechsels.", value: "Wert: 29,99€", free: false },
  { icon: "🎯", title: "Persönlicher Aktionsplan – MATADOR-Protokoll", desc: "10 Seiten mit dem MATADOR-Protokoll (strategische Diätpausen), individuell auf deinen überangepassten Stoffwechsel zugeschnitten.", value: "Wert: 27,00€", free: false },
  { icon: "📱", title: "Online-Bonusbereich mit Tools & Rechnern", desc: "Interaktive Tools, Kalorienrechner und Tracking-Werkzeuge für deinen Fortschritt.", value: "Wert: 20,00€", free: false },
  { icon: "📋", title: "9 herunterladbare PDF-Checklisten", desc: "Einkaufslisten, Meal-Prep-Pläne, Tracking-Sheets und mehr – sofort einsatzbereit.", value: "Wert: 15,00€", free: false },
  { icon: "📲", title: "App- & Tool-Empfehlungen", desc: "Kuratierte Liste der besten Apps und Tools, die deinen Fortschritt unterstützen.", value: "Wert: 5,00€", free: false },
  { icon: "🔄", title: "Regelmäßige Updates", desc: "Neue Erkenntnisse, aktualisierte Inhalte und Verbesserungen – kostenlos, für immer.", value: "Kostenlos", free: true },
];

const faqs = [
  { q: "Warum kostet es nur 29,99€?", a: "Ganz ehrlich? Weil ich will, dass es sich JEDER leisten kann. Der Gesamtwert aller Inhalte liegt bei 96,99€ – E-Book, persönlicher Aktionsplan, Bonusbereich, 9 PDF-Checklisten und Tool-Empfehlungen. Aber ich weiß, wie frustrierend es ist, wenn man schon so viel Geld für Diäten und Programme ausgegeben hat, die nicht funktioniert haben. Deshalb: 29,99€. Einmalig. Kein Abo. Kein Haken." },
  { q: "Funktioniert das auch bei mir?", a: "Wenn dein Stoffwechsel-Quiz Profil C (Überangepasster Stoffwechsel) ergeben hat, dann ist dieses Buch und der dazugehörige Aktionsplan speziell für deine Situation entwickelt. Die Empfehlungen basieren auf wissenschaftlichen Erkenntnissen über metabolische Adaptation und das MATADOR-Prinzip." },
  { q: "Was ist das MATADOR-Protokoll?", a: "MATADOR steht für eine Methode mit strategischen Diätpausen. Statt durchgehend im Defizit zu bleiben (was dein Körper mit Anpassung bestraft), wechselst du gezielt zwischen Defizit- und Erhaltungsphasen. Die Forschung zeigt, dass dies die metabolische Anpassung reduziert und zu besseren Langzeitergebnissen führt." },
  { q: "Was ist der Aktionsplan genau?", a: "Ein 10-seitiges PDF, individuell auf Profil C (Überangepasster Stoffwechsel) zugeschnitten. Mit dem MATADOR-Protokoll, konkreten Phasenplänen und einem Zyklus-System, das du sofort umsetzen kannst. Keine Theorie – sondern 'Mach das in Woche 1-2, das in Woche 3-4'." },
  { q: "Was wenn es mir nicht hilft?", a: "Dann nutze die 14-Tage Geld-zurück-Garantie. Eine einfache E-Mail genügt, und du bekommst dein Geld zurück. Ohne Wenn und Aber. Du trägst null Risiko." },
  { q: "Brauche ich Vorkenntnisse?", a: "Nein. Das Buch erklärt alles verständlich und Schritt für Schritt. Gerade wenn du schon viel Wissen angesammelt hast, wird dieses Buch dir helfen, die Zusammenhänge neu zu verstehen." },
  { q: "Wie bekomme ich Zugang?", a: "Sofort nach der Bestellung. Du erhältst das E-Book, den Aktionsplan und alle Bonusmaterialien als Download. Plus Zugang zum Online-Bonusbereich. Alles digital, sofort verfügbar." },
];

const ProfCSalesV3 = () => {
  const preisFaqIndex = faqs.findIndex((f) => f.q.startsWith("Warum kostet"));
  const [openFaq, setOpenFaq] = useState<number | null>(preisFaqIndex);
  const [showSticky, setShowSticky] = useState(false);
  const firstCtaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = firstCtaRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSticky(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);


  return (
    <div className="bg-white text-gray-900">
      {/* 1. HERO */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-sm uppercase tracking-wide text-emerald-600 font-semibold mb-4">
                FÜR MENSCHEN MIT ÜBERANGEPASSTEM STOFFWECHSEL
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Dein Körper hat sich an jede Diät angepasst. Deshalb funktioniert keine mehr.
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl">
                Du hast alles versucht: Low Carb, Intervallfasten, Keto. Am Anfang klappt es immer – und dann: Plateau. Dein Stoffwechsel hat gelernt, sich gegen Diäten zu wehren. Aber es gibt einen Ausweg.
              </p>
              <ul className="space-y-3 mt-6 text-lg text-gray-700">
                <li>🚫 Jede Diät funktioniert 3-4 Wochen – dann ist Schluss</li>
                <li>🚫 Du kennst ALLE Ernährungsregeln – aber dein Körper spielt nicht mehr mit</li>
                <li>🚫 Du wiegst nach jeder Diät mehr als vorher (Jojo-Effekt)</li>
                <li>🚫 Du hast das Gefühl, dein Stoffwechsel ist 'kaputt' oder 'eingeschlafen'</li>
                <li>🚫 Egal was du probierst – das Plateau bleibt</li>
              </ul>
              <p className="text-lg font-bold mt-6" style={{ color: "#16A34A" }}>
                ✅ Dein Stoffwechsel ist nicht kaputt. Er ist überangepasst. Und genau dafür gibt es eine Strategie.
              </p>
              <div className="mt-8" ref={firstCtaRef}>
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
            Das Problem ist NICHT dein Wissen. Das Problem ist, dass dein Stoffwechsel sich an jede Diät anpasst – und du eine Strategie brauchst, die genau darauf ausgelegt ist.
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
              Das ist keine Fantasie. Das ist das Ergebnis, wenn du aufhörst, gegen deinen Stoffwechsel zu arbeiten – und anfängst, ihn strategisch zu nutzen.
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
                    v.free ? "text-emerald-600 font-semibold" : "text-gray-400 line-through"
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
              Das MATADOR-Protokoll – dein 10-Seiten-Plan
            </h2>
            <p className="text-lg text-gray-700 mt-4">
              Basierend auf deiner Stoffwechsel-Analyse erhältst du einen maßgeschneiderten Aktionsplan für deinen überangepassten Stoffwechsel. 10 Seiten, individuell auf dein Profil zugeschnitten. Mit dem MATADOR-Protokoll – einer wissenschaftlich erforschten Methode mit strategischen Diätpausen, die deine metabolische Anpassung durchbricht.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: "📅", title: "Phase 1: Reset-Phase", text: "Strategische Diätpause – dein Stoffwechsel bekommt das Signal: 'Keine Hungersnot mehr.' Die Anpassung wird unterbrochen." },
                { icon: "🔥", title: "Phase 2: Gezielte Defizit-Phase", text: "Kontrolliertes Defizit für eine definierte Zeit. Dein Körper reagiert wieder – weil er nicht mehr angepasst ist." },
                { icon: "🔄", title: "Phase 3: Zyklische Wiederholung", text: "Wechsel zwischen Pause und Defizit. So verhinderst du, dass dein Körper sich erneut anpasst. Nachhaltige Ergebnisse." },
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
            Ich bin Philipp, 50, IT-Mensch, Familienvater – und ich habe dieses Buch geschrieben, weil ich selbst jahrelang gegen mein Stoffwechsel-Plateau gekämpft habe. Diät um Diät, immer das gleiche Ergebnis: 3 Wochen Fortschritt, dann Stillstand. Das MATADOR-Protokoll im Aktionsplan hat mir geholfen, diesen Kreislauf endlich zu durchbrechen. Jetzt gebe ich es weiter – ohne Schnickschnack, nur das, was funktioniert.
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
              Ich bin überzeugt, dass dieses Buch und der Aktionsplan dir helfen werden. Aber ich möchte, dass du dich 100% sicher fühlst. Deshalb bekommst du eine volle 14-Tage Geld-zurück-Garantie. Lies das Buch, starte das MATADOR-Protokoll – und wenn du nicht überzeugt bist, schreib mir einfach eine E-Mail und du bekommst dein Geld zurück. Ohne Fragen, ohne Diskussion.
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
                  {open && <div className="p-5 pt-0 text-gray-600">{f.a}</div>}
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
            Bereit, dein Stoffwechsel-Plateau endlich zu durchbrechen?
          </h2>
          <p className="text-xl text-emerald-200 mt-4">
            Buch + MATADOR-Aktionsplan + alle Bonusmaterialien – für einmalig 29,99€.
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
      {showSticky && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProfCSalesV3;
