import { Check } from "lucide-react";

const items = [
  "Du schon alles versucht hast – weniger essen, mehr Sport, Intervallfasten, Low Carb – und trotzdem stagnierst",
  "Du das Gefühl hast, dein Stoffwechsel arbeitet gegen dich",
  "Du verstehen willst, WARUM es nicht funktioniert hat – nicht nur, WAS du als nächstes tun sollst",
  "Du keine Lust mehr auf den nächsten Diätplan hast, der nach 4 Wochen scheitert",
  "Du ein System willst, das auch funktioniert, wenn die Motivation nachlässt",
  "Du bereit bist, deinen bisherigen Blick auf Ernährung und Stoffwechsel zu hinterfragen",
];

const ProfCZielgruppe = () => {
  return (
    <section className="py-12 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Dieses Buch ist für dich, wenn...
          </h2>
          <ul className="space-y-5">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfCZielgruppe;
