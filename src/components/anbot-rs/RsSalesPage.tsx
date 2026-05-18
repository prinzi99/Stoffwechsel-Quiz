import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/landing/Footer";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import { ChevronDown } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

export type RsConfig = {
  route: string;
  trackTitle: string;
  storageKey: string;
  digistoreUrl: string;
  digistoreProductId?: number;
  // Theme colors (tailwind utility fragments)
  accent: "orange" | "blue" | "purple";
  heroGradientFrom: string; // e.g. "from-white"
  heroGradientTo: string; // e.g. "to-slate-100"
  // Content
  overline: string;
  headline: string;
  subheadline: string;
  heroBullets: string[];
  heroPositive: string;
  cta1: string;
  urgencyText: string;
  problemTitle: string;
  problemCards: { icon: string; text: string }[];
  problemFooter: string;
  planBadge: string;
  planTitle: string;
  planIntro: string;
  planPhases: { icon: string; title: string; text: string }[];
  cta2: string;
  imagineList: string[];
  imagineFooter: string;
  valueRows: { label: string; value: string }[];
  testimonialTitle: string;
  testimonials: {
    initials: string;
    avatarBg: string;
    name: string;
    text: string;
    badge: string;
    badgeColor: string;
  }[];
  cta3: string;
  cta3Sub: string;
  objections: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
  finalCta: string;
  finalTimerColor: string;
  ps: string;
  pps: string;
};

const useCountdown = (key: string) => {
  const [remaining, setRemaining] = useState<number>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(key) : null;
    let end = stored ? parseInt(stored, 10) : NaN;
    if (!end || isNaN(end) || end < Date.now()) {
      end = Date.now() + 15 * 60 * 1000;
      if (typeof window !== "undefined") localStorage.setItem(key, String(end));
    }
    return Math.max(0, end - Date.now());
  });

  useEffect(() => {
    const id = setInterval(() => {
      const stored = localStorage.getItem(key);
      const end = stored ? parseInt(stored, 10) : Date.now();
      setRemaining(Math.max(0, end - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [key]);

  const expired = remaining <= 0;
  const mm = String(Math.floor(remaining / 60000)).padStart(2, "0");
  const ss = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
  return { expired, label: `${mm}:${ss}` };
};

const CTA = ({ href, children, sub, variant = "pulse" }: {
  href: string;
  children: React.ReactNode;
  sub?: React.ReactNode;
  variant?: "pulse" | "bounce";
}) => (
  <div className="text-center my-10 px-4">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block max-w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-xl font-bold py-5 px-6 sm:px-10 rounded-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-normal leading-tight ${
        variant === "pulse" ? "animate-pulse" : ""
      }`}
    >
      {children}
    </a>
    {sub && <p className="text-sm text-gray-500 mt-3">{sub}</p>}
  </div>
);

const Accordion = ({ items }: { items: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((it, i) => (
        <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-gray-50"
          >
            <span className="font-semibold text-gray-900">{it.q}</span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-gray-700 leading-relaxed">{it.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

const accentMap = {
  orange: {
    boxBg: "bg-gradient-to-br from-amber-100 to-amber-200",
    boxBorder: "border-amber-500",
    badge: "bg-orange-600",
    problemCard: "bg-red-50 border-red-400",
    imagineBg: "bg-green-50",
    imagineTitle: "text-green-800",
    imagineFooter: "text-green-700",
  },
  blue: {
    boxBg: "bg-gradient-to-br from-blue-100 to-blue-200",
    boxBorder: "border-blue-500",
    badge: "bg-blue-600",
    problemCard: "bg-blue-50 border-blue-400",
    imagineBg: "bg-blue-50",
    imagineTitle: "text-blue-800",
    imagineFooter: "text-blue-700",
  },
  purple: {
    boxBg: "bg-gradient-to-br from-purple-100 to-purple-200",
    boxBorder: "border-purple-600",
    badge: "bg-purple-600",
    problemCard: "bg-purple-50 border-purple-400",
    imagineBg: "bg-purple-50",
    imagineTitle: "text-purple-800",
    imagineFooter: "text-purple-700",
  },
} as const;

const RsSalesPage = ({ config }: { config: RsConfig }) => {
  useBonusPageView(config.route, config.trackTitle);
  const mainRef = useRef<HTMLDivElement>(null);
  const { expired, label } = useCountdown(config.storageKey);
  const theme = accentMap[config.accent];

  useEffect(() => {
    mainRef.current?.scrollIntoView({ behavior: "instant" });
  }, []);

  useEffect(() => {
    if (!config.digistoreProductId) return;
    const s = document.createElement("script");
    s.src = "https://www.digistore24-scripts.com/service/digistore.js";
    s.async = true;
    s.onload = () => {
      // @ts-ignore
      if (typeof digistorePromocode === "function") {
        // @ts-ignore
        digistorePromocode({ product_id: config.digistoreProductId, adjust_domain: true });
      }
    };
    document.head.appendChild(s);
    return () => {
      s.remove();
    };
  }, [config.digistoreProductId]);

  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Jetzt sichern | Philipp's Biohack</title>
        <meta name="description" content="Dein persönlicher Stoffwechsel-Aktionsplan + E-Book. Jetzt für 29,99€ statt 96,99€ sichern." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* 1. Urgency Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#DC2626] text-white text-center px-4 py-3 text-sm md:text-base font-semibold shadow-md">
        {expired ? (
          <span>⚠️ Aktion abgelaufen – Preis kann jederzeit steigen!</span>
        ) : (
          <span>
            ⚡ {config.urgencyText.replace("[TIMER]", "")}{" "}
            <span className="font-mono bg-black/20 px-2 py-0.5 rounded ml-1">{label}</span>
          </span>
        )}
      </div>

      <main ref={mainRef} className="pt-14 md:pt-12 bg-white">
        {/* 2. Hero */}
        <section className={`py-16 md:py-24 px-4 bg-gradient-to-b ${config.heroGradientFrom} ${config.heroGradientTo}`}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">
                {config.overline}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                {config.headline}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-7 leading-relaxed">
                {config.subheadline}
              </p>
              <ul className="space-y-3 mb-6">
                {config.heroBullets.map((b, i) => (
                  <li key={i} className="text-base md:text-lg text-gray-800 flex gap-2">
                    <span>❌</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg md:text-xl font-bold" style={{ color: "#16A34A" }}>
                {config.heroPositive}
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full max-w-sm aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl flex items-center justify-center text-7xl">
                📖
              </div>
            </div>
          </div>
        </section>

        {/* 3. CTA #1 */}
        <CTA
          href={config.digistoreUrl}
          sub="🔒 Sichere Bestellung • Sofortiger Zugang • 30 Tage Garantie"
        >
          {config.cta1}
        </CTA>

        {/* 4. Problem Agitation */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">{config.problemTitle}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {config.problemCards.map((c, i) => (
                <div key={i} className={`${theme.problemCard} border-l-4 p-6 rounded-lg`}>
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <p className="text-gray-800 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold mt-8 max-w-3xl mx-auto text-gray-800">
              {config.problemFooter}
            </p>
          </div>
        </section>

        {/* 5. Aktionsplan Highlight */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`${theme.boxBg} border-[3px] ${theme.boxBorder} rounded-2xl p-8 md:p-12 shadow-2xl`}>
              <span className={`inline-block ${theme.badge} text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wide`}>
                {config.planBadge}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mt-6 text-gray-900">{config.planTitle}</h2>
              <p className="text-base md:text-lg text-gray-700 mt-4 leading-relaxed">{config.planIntro}</p>
              <div className="grid md:grid-cols-3 gap-5 mt-8">
                {config.planPhases.map((p, i) => (
                  <div key={i} className="bg-white/70 rounded-xl p-5">
                    <div className="text-3xl mb-2">{p.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold text-lg mt-8 text-gray-900">
                Dieser Aktionsplan allein ist 47€ wert – du bekommst ihn KOSTENLOS dazu.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CTA #2 */}
        <CTA
          href={config.digistoreUrl}
          sub="⏰ Dieses Angebot gilt nur während der Timer läuft"
        >
          {config.cta2}
        </CTA>

        {/* 7. Stell dir vor */}
        <section className={`${theme.imagineBg} py-16 px-4`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold ${theme.imagineTitle} text-center mb-8`}>Stell dir vor…</h2>
            <ul className="space-y-4">
              {config.imagineList.map((it, i) => (
                <li key={i} className="text-lg text-gray-800 flex gap-3">
                  <span>✨</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className={`text-center font-semibold text-xl ${theme.imagineFooter} mt-10`}>
              {config.imagineFooter}
            </p>
          </div>
        </section>

        {/* 8. Value Stack */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Schau, was du ALLES bekommst:</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
              <ul className="divide-y divide-gray-200">
                {config.valueRows.map((r, i) => (
                  <li key={i} className="py-3 flex justify-between items-center gap-4">
                    <span className="text-gray-800">{r.label}</span>
                    <span className="text-gray-500 line-through whitespace-nowrap">{r.value}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t-2 border-gray-300 mt-5 pt-5 text-center">
                <p className="text-gray-500 line-through text-xl">Gesamtwert: 96,99€</p>
                <p className="text-4xl font-bold text-green-600 mt-2">Dein Preis heute: 29,99€</p>
                <p className="text-red-600 font-bold text-xl mt-2">Du sparst 67€ (69% Rabatt!)</p>
                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mt-4">
                  🔥 BESTE WAHL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Testimonials */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
              {config.testimonialTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {config.testimonials.map((t, i) => (
                <div key={i} className="bg-white shadow-lg p-6 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`${t.avatarBg} text-white w-14 h-14 rounded-full font-bold flex items-center justify-center text-lg`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{t.text}</p>
                  <span className={`inline-block ${t.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {t.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. CTA #3 */}
        <CTA href={config.digistoreUrl} sub={config.cta3Sub}>
          {config.cta3}
        </CTA>

        {/* 11. Einwandbehandlung */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              „Aber funktioniert das auch bei MIR?"
            </h2>
            <Accordion items={config.objections} />
          </div>
        </section>

        {/* 12. Garantie */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto border-2 border-green-500 bg-green-50 p-8 rounded-2xl text-center">
            <div className="text-6xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">30-Tage-Geld-zurück-Garantie</h2>
            <p className="text-gray-700 leading-relaxed">
              Teste alles in Ruhe. Wenn du innerhalb von 30 Tagen nicht begeistert bist, bekommst du dein Geld zurück. Ohne Wenn und Aber. Eine einfache E-Mail genügt. Dein Risiko: NULL.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Bisher haben weniger als 2% eine Rückerstattung verlangt. Die anderen 98% sind begeistert.
            </p>
          </div>
        </section>

        {/* 13. Finaler CTA #4 */}
        <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className={`text-4xl md:text-5xl font-mono ${config.finalTimerColor} mb-2`}>
              {expired ? "00:00" : label}
            </p>
            <p className="text-gray-300 mb-10">Dein Sonderpreis von 29,99€ läuft ab in...</p>
            <h2 className="text-3xl font-bold mb-5">{config.finalTitle}</h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">{config.finalText}</p>
            <a
              href={config.digistoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block max-w-full bg-green-500 hover:bg-green-400 text-black font-bold text-lg sm:text-2xl py-6 px-6 sm:px-12 rounded-2xl shadow-2xl animate-bounce whitespace-normal leading-tight"
            >
              {config.finalCta}
            </a>
            <p className="text-sm text-gray-400 mt-6">
              🔒 Sichere SSL-Bestellung • Sofortiger Download • 30-Tage-Garantie
            </p>
          </div>
        </section>

        {/* 14. PS */}
        <section className="bg-yellow-50 py-12 px-4">
          <div className="max-w-3xl mx-auto space-y-5 text-gray-800 leading-relaxed">
            <p><strong>P.S.:</strong> {config.ps}</p>
            <p><strong>P.P.S.:</strong> {config.pps}</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RsSalesPage;
