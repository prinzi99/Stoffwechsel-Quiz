import { UserCheck } from "lucide-react";

const points = [
  "Dein Gewicht stagniert, obwohl Du Dich bem\u00FChst",
  "Du schon mehrere Di\u00E4ten gemacht hast",
  "Du Dich gesund ern\u00E4hrst, aber trotzdem oft m\u00FCde oder frustriert bist",
  "Dein K\u00F6rper auf Verzicht eher mit Widerstand reagiert",
  "Du endlich verstehen willst, warum Standardtipps bei Dir nicht sauber greifen",
  "Du einen klaren Einstieg suchst statt noch mehr widerspr\u00FCchlicher Ratschl\u00E4ge",
];

const AngebotZielgruppe = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            Besonders hilfreich f&uuml;r Dich, wenn &hellip;
          </h2>

          <div className="space-y-3">
            {points.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <UserCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/90 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotZielgruppe;
