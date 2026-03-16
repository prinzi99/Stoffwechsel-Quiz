import { CheckCircle2 } from "lucide-react";

const bullets = [
  'warum viele Menschen ihren Stoffwechsel mit scheinbar \u201Egesunden\u201C Strategien unbewusst weiter ausbremsen',
  "woran Du erkennst, ob bei Dir eher Stress, Unterversorgung oder alte Di\u00E4tmuster im Hintergrund arbeiten",
  "warum weniger Kalorien kurzfristig helfen k\u00F6nnen, langfristig aber oft neue Probleme schaffen",
  "welche Fehler besonders disziplinierte Menschen immer wieder machen, ohne es zu merken",
  "wie Du wieder mehr Stabilit\u00E4t in Dein System bringst, ohne in die n\u00E4chste Verzichtsphase zu rutschen",
  "welche K\u00F6rpersignale Du ernst nehmen solltest, bevor Frust und Stillstand zum Dauerzustand werden",
];

const AngebotBuchZeigt = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
            Was Dir dieses Buch konkret zeigt
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10">
            Kein weiterer Standardplan.<br />
            Keine leeren Motivationstipps.<br />
            Sondern eine verst&auml;ndliche Erkl&auml;rung, die f&uuml;r viele zum ersten Mal wirklich Sinn ergibt.
          </p>

          <div className="space-y-3">
            {bullets.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/90 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotBuchZeigt;
