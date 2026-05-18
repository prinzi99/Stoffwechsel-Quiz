import { useEffect } from "react";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import bookCover from "@/assets/book-cover-mockup2.jpeg";
import philippAutor from "@/assets/philipp-autor.png";

export type SalesV2Config = {
  route: string;
  trackTitle: string;
  digistoreUrl: string;
  digistoreProductId?: number;

  overline: string;
  headline: string;
  subheadline: string;
  heroBullets: string[];
  heroBulletIcon?: string; // default ❌
  heroPositive: string;

  cta1: string;

  problemCards: { icon: string; text: string }[];
  problemFooter: string;

  /** Legacy – not rendered anymore (authentic 7-paragraph story is hardcoded). */
  authorP1?: string;
  authorP2?: string;

  planText: string;
  planPhases: { icon: string; title: string; text: string }[];

  /** Trust card 1 – profile-specific research note. */
  trustResearchText?: string;

  imagineList: string[];
  imagineFooter: string;

  faq: { q: string; a: string }[];

  finalTitle: string;
  psText: string;
};

const Cta = ({ href, label, size = "lg" }: { href: string; label: string; size?: "lg" | "xl" }) => (
  <div className="text-center">
    <a
      href={href}
      className={`inline-block bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-xl transition-colors ${
        size === "xl" ? "text-xl py-5 px-10" : "text-lg py-4 px-8"
      }`}
    >
      {label}
    </a>
    <p className="text-sm text-gray-500 mt-3">
      🔒 Sichere Bestellung • Sofortiger Zugang • 14 Tage Geld-zurück-Garantie
    </p>
  </div>
);

const SalesPageV2 = ({ config }: { config: SalesV2Config }) => {
  useBonusPageView(config.route, config.trackTitle);

  useEffect(() => {
    if (!config.digistoreProductId) return;
    const s1 = document.createElement("script");
    s1.src = "https://www.digistore24-scripts.com/service/digistore.js";
    s1.async = true;
    document.body.appendChild(s1);
    const s2 = document.createElement("script");
    s2.text = `digistorePromocode({ "product_id": ${config.digistoreProductId}, "adjust_domain": true });`;
    s1.onload = () => document.body.appendChild(s2);
    return () => {
      s1.remove();
      s2.remove();
    };
  }, [config.digistoreProductId]);

  return (
    <div className="bg-white text-gray-900">
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="uppercase tracking-wide text-orange-600 text-sm font-semibold mb-4">
                {config.overline}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                {config.headline}
              </h1>
              <p className="text-xl text-gray-600 mb-5">{config.subheadline}</p>
              <ul className="space-y-3 mb-6">
                {config.heroBullets.map((b, i) => (
                  <li key={i} className="text-lg flex gap-2">
                    <span>{config.heroBulletIcon ?? "❌"}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold text-[#16A34A]">{config.heroPositive}</p>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <img
                src={bookCover}
                alt="Buch Cover"
                className="rounded-2xl shadow-2xl max-w-xs md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CTA #1 */}
      <section className="py-10 container mx-auto px-4">
        <Cta href={config.digistoreUrl} label={config.cta1} size="xl" />
      </section>

      {/* 3. Problem-Agitation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">Kennst du das auch?</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {config.problemCards.map((c, i) => (
              <div
                key={i}
                className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg flex gap-4"
              >
                <span className="text-3xl shrink-0">{c.icon}</span>
                <p className="text-lg">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg font-semibold mt-8 max-w-3xl mx-auto">
            {config.problemFooter}
          </p>
        </div>
      </section>

      {/* 4. Über mich – authentische Geschichte */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Wer schreibt das hier?</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={philippAutor}
              alt="Philipp Prinz"
              className="w-24 h-24 rounded-full object-cover bg-gray-300 shrink-0"
            />
            <div>
              <p className="text-xl font-bold">Philipp Prinz</p>
              <p className="text-gray-600">50 Jahre alt, Familienvater, IT-Job</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Mein Name ist Philipp, ich bin 50 Jahre alt – verheiratet, zwei erwachsene Kinder,
            stressiger IT-Job plus Selbstständigkeit. Ich bin weder Arzt noch
            Ernährungswissenschaftler und schon gar kein Influencer. Alles in diesem Buch stammt
            aus eigener Recherche und Praxis – als jemand, der selbst fast jeden Fehler gemacht
            hat, den das Buch beschreibt. Zu wenig gegessen, zu viel trainiert, eine Diät nach
            der anderen. Irgendwann habe ich aufgehört, härter zu kämpfen, und angefangen, das
            System zu verstehen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Mein Alltag ist kein Wellness-Retreat, sondern eher Küchentisch-Strategie mit
            To-Do-Listen, Deadlines und gelegentlichen Versuchen, nebenbei noch ein paar Minuten
            Sport einzubauen. Als jemand, der gern Probleme analysiert (Berufsrisiko: IT-Mensch),
            habe ich ausprobiert, falsch gerechnet und nachjustiert. Ironischerweise dachte ich
            zuerst: Fettverlust = Disziplin + richtige App. So viel zur Demut eines IT-Typen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Ich habe fast alle der Fehler selbst durchgemacht: zu wenig essen, zu viel
            trainieren, akkurate Kalorienzähler-Besessenheit — und trotzdem Stagnation. Keine
            dramatische Beichte, eher eine Aneinanderreihung guter Absichten mit mäßigem
            Ergebnis. Meine Frau würde sagen: „Du hast alles ausprobiert, nur nicht die
            Geduld." Sie hat nicht ganz unrecht.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Mit der Zeit stellte sich nicht mehr die Frage, was Menschen falsch machen — sondern:
            Was, wenn die Erklärung unvollständig ist? Genau dieser kleine Gedanke hat alles
            verändert. Statt noch härter zu probieren, fing ich an, systematisch zu fragen, zu
            lesen und zu prüfen: Wie reagiert der Körper wirklich auf Stress, auf Hunger, auf
            Schlafmangel?
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Meine Recherche war kein akademischer Spaziergang, sondern ein praktischer Baukasten:
            Studien, Fachartikel, Gespräche mit Praktikern — und das ständige Abgleichen mit dem
            eigenen Leben (und ja, mit meinen eigenen Fehlversuchen). Ich habe nicht die Weisheit
            für alle Antworten, aber genug Zusammenhänge verstanden, dass sich bei mir etwas
            geändert hat.
          </p>
          <p className="text-lg font-medium mt-6 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            Dieses Buch ist kein Patentrezept und keine Glaubensgemeinschaft. Es ist das Ergebnis
            eines neugierigen, leicht widerspenstigen Versuchs, ein komplexes System besser zu
            verstehen — mitten im echten Leben, nicht in einer idealisierten Laborwelt. Ich nehme
            mich dabei nicht zu ernst, das Thema aber sehr wohl.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Am Ende habe ich etwas entdeckt, das mir geholfen hat — nichts Magisches, aber
            praktikabel und nachvollziehbar. Ich teile es hier offen und direkt, so wie ich es am
            Küchentisch erzählen würde: ehrlich, ohne falsche Bescheidenheit, und mit der
            Hoffnung, dass es dir genauso nützen kann wie mir.
          </p>
        </div>
      </section>

      {/* 5. Aktionsplan-Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div
            className="p-8 md:p-12 rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
              border: "3px solid #F59E0B",
            }}
          >
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm uppercase">
              🎯 Dein persönlicher Aktionsplan
            </span>
            <h2 className="text-3xl font-bold mt-6">Nicht irgendein Plan. DEIN Plan.</h2>
            <p className="text-lg mt-4 leading-relaxed">{config.planText}</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {config.planPhases.map((p, i) => (
                <div key={i} className="bg-white/60 rounded-xl p-5">
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <p className="font-bold text-lg mb-1">{p.title}</p>
                  <p className="text-gray-700">{p.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg font-bold mt-8">
              Dieser 10-seitige Aktionsplan allein ist 27€ wert – du bekommst ihn INKLUSIVE.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA #2 */}
      <section className="pb-12 container mx-auto px-4">
        <Cta
          href={config.digistoreUrl}
          label="Jetzt Buch + Aktionsplan sichern – nur 29,99€ statt 96,99€ →"
          size="xl"
        />
        <p className="text-center text-gray-600 mt-3">Einmaliger Preis. Kein Abo. Sofortiger Zugang.</p>
      </section>

      {/* 7. Value Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Schau, was du ALLES bekommst:</h2>
          {[
            { icon: "📖", title: "E-Book 'Du bist nicht das Problem'", desc: "10 Kapitel + Bonus-Kapitel. Dein kompletter Leitfaden zum Verständnis deines Stoffwechsels.", value: "Wert: 29,99€" },
            { icon: "🎯", title: `Persönlicher Aktionsplan – ${config.trackTitle.replace("Buch Angebot ", "")}`, desc: "10 Seiten, individuell auf dein Stoffwechselprofil zugeschnitten.", value: "Wert: 27,00€" },
            { icon: "💻", title: "Online-Bonusbereich mit Tools & Rechnern", desc: "Interaktive Tools, Kalorienrechner und Tracking-Werkzeuge für deinen Fortschritt.", value: "Wert: 20,00€" },
            { icon: "📋", title: "9 herunterladbare PDF-Checklisten", desc: "Einkaufslisten, Meal-Prep-Pläne, Tracking-Sheets und mehr – sofort einsatzbereit.", value: "Wert: 15,00€" },
            { icon: "📱", title: "App- & Tool-Empfehlungen", desc: "Kuratierte Liste der besten Apps und Tools, die deinen Fortschritt unterstützen.", value: "Wert: 5,00€" },
            { icon: "🔄", title: "Regelmäßige Updates", desc: "Neue Erkenntnisse, aktualisierte Inhalte und Verbesserungen – kostenlos, für immer.", value: "Kostenlos", free: true },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 shadow-sm mb-4 flex gap-5 items-center">
              <span className="text-4xl shrink-0">{item.icon}</span>
              <div className="flex-1">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
              <span
                className={`shrink-0 text-right ${item.free ? "text-green-600 font-semibold" : "text-gray-500 line-through"}`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Preis-Box */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white border-2 border-green-500 rounded-2xl p-8 shadow-2xl text-center">
            <p className="text-gray-500 text-lg">Gesamtwert aller Inhalte:</p>
            <p className="text-gray-400 line-through text-2xl">96,99€</p>
            <div className="border-t my-4" />
            <p className="text-gray-700 text-lg font-medium">Dein Preis heute:</p>
            <p className="text-5xl font-bold text-green-600">29,99€</p>
            <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold text-sm mt-4">
              Du sparst 67,00€ (69% Rabatt)
            </span>
            <a
              href={config.digistoreUrl}
              className="block w-full mt-6 bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-8 rounded-xl"
            >
              Jetzt für 29,99€ sichern →
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Einmaliger Preis • Kein Abo • Sofortiger Download
            </p>
          </div>
        </div>
      </section>

      {/* 9. Trust-Sektion */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10">
            Warum du diesem Ansatz vertrauen kannst
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "60+ wissenschaftliche Studien", text: "Jede Empfehlung in diesem Buch basiert auf aktueller Forschung. Keine Trends, keine Hypes – nur Wissenschaft." },
              { icon: "👨‍🔬", title: "Von Philipp Prinz", text: "Stoffwechsel-Experte mit jahrelanger Erfahrung in der Recherche und Aufbereitung wissenschaftlicher Erkenntnisse für den Alltag." },
              { icon: "🛡️", title: "14-Tage Geld-zurück-Garantie", text: "Kein Risiko für dich. Wenn du nicht zufrieden bist, bekommst du dein Geld zurück. Ohne Wenn und Aber." },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{c.icon}</div>
                <p className="font-bold text-lg mb-2">{c.title}</p>
                <p className="text-gray-700">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            Wissenschaftlich fundiert • Praxis-erprobt • Tausende zufriedene Leser
          </p>
        </div>
      </section>

      {/* 10. Garantie-Box */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
            <div className="text-6xl">🛡️</div>
            <h3 className="text-2xl font-bold text-green-800 mt-4">14-Tage Geld-zurück-Garantie</h3>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Ich bin überzeugt, dass dieses Buch und der Aktionsplan dir helfen werden. Aber ich möchte, dass du dich 100% sicher fühlst. Deshalb bekommst du eine volle 14-Tage Geld-zurück-Garantie. Lies das Buch, probiere den Aktionsplan aus – und wenn du nicht zufrieden bist, schreib mir einfach eine E-Mail und du bekommst dein Geld zurück. Ohne Fragen, ohne Diskussion.
            </p>
            <p className="text-gray-600 font-medium italic mt-4">– Philipp Prinz</p>
          </div>
        </div>
      </section>

      {/* 11. Stell dir vor */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Stell dir vor…</h2>
          <ul className="space-y-4">
            {config.imagineList.map((t, i) => (
              <li key={i} className="text-lg flex gap-2">
                <span>✨</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-center font-semibold text-green-700 text-xl mt-8">
            {config.imagineFooter}
          </p>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {config.faq.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border rounded-lg px-4 bg-white"
              >
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 13. Finaler CTA */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold">{config.finalTitle}</h2>
          <p className="text-xl text-gray-300 mt-4">
            Alles was du brauchst – Buch, Aktionsplan, Tools und Bonusmaterial – für einmalig 29,99€.
          </p>
          <a
            href={config.digistoreUrl}
            className="inline-block mt-8 bg-green-500 hover:bg-green-400 text-white text-xl font-bold py-5 px-12 rounded-xl shadow-xl"
          >
            Jetzt für 29,99€ starten →
          </a>
          <p className="text-gray-400 text-sm mt-4">
            🔒 Sichere Bestellung • Sofortiger Zugang • 14-Tage Geld-zurück-Garantie
          </p>
        </div>
      </section>

      {/* 14. PS */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-bold text-lg">P.S.</p>
          <p className="text-gray-700 mt-2 leading-relaxed">{config.psText}</p>
          <a
            href={config.digistoreUrl}
            className="text-green-600 font-bold hover:underline inline-block mt-3"
          >
            → Jetzt bestellen
          </a>
        </div>
      </section>
    </div>
  );
};

export default SalesPageV2;
