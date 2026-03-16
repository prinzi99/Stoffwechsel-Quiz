import { UserCheck } from "lucide-react";

const points = [
  "Dein Gewicht stagniert, obwohl Du Dich bemühst",
  "Du schon mehrere Diäten gemacht hast und immer wieder am gleichen Punkt landest",
  "Du Dich gesund ernährst, aber trotzdem oft müde oder frustriert bist",
  "Du das Gefühl hast, dass Dein Körper auf Verzicht eher mit Widerstand reagiert",
  "Du endlich verstehen willst, warum klassische Standardtipps bei Dir nicht sauber greifen",
  "Du einen klaren, nachvollziehbaren Einstieg suchst statt noch mehr widersprüchlicher Ratschläge",
];

const AngebotZielgruppe = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
            Dieses Buch ist besonders wertvoll für Dich, wenn …
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-8">
            Du musst kein Experte sein.<br />
            Aber Du solltest Dich in einem oder mehreren dieser Punkte wiederfinden:
          </p>

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
