import { CheckCircle2 } from "lucide-react";

const bullets = [
  "warum viele Menschen ihren Stoffwechsel ausgerechnet mit den Strategien ausbremsen, die eigentlich \u201Egesund\u201C wirken",
  "woran Du erkennst, ob bei Dir eher Stress, Energiemangel oder alte Di\u00E4tmuster im Hintergrund arbeiten",
  "warum weniger Kalorien kurzfristig Fortschritt zeigen k\u00F6nnen, langfristig aber oft neue Blockaden aufbauen",
  "welche typischen Fehler besonders disziplinierte Menschen machen, ohne es \u00FCberhaupt zu merken",
  "wie Du wieder mehr Stabilit\u00E4t in Dein System bringst, ohne in die n\u00E4chste Verzichtsphase zu rutschen",
  "welche K\u00F6rpersignale Du ernst nehmen solltest, bevor aus M\u00FCdigkeit, Hei\u00DFhunger und Frust ein Dauerzustand wird",
];

const AngebotAnders = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
            Dieses Buch hilft Dir, die Blockade zu verstehen &ndash; statt Dich weiter selbst zu bek&auml;mpfen
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10">
            Du bekommst keine leeren Motivationstipps und keinen weiteren Standardplan.<br />
            Du bekommst eine klare, verst&auml;ndliche Einordnung dessen, was in Deinem K&ouml;rper gerade wahrscheinlich passiert.
          </p>

          <div className="space-y-3">
            {bullets.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/90 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-foreground/80 text-center mt-10 leading-relaxed">
            <span className="font-medium text-foreground">Kurz gesagt:</span><br />
            Dieses Buch hilft Dir, aus dem st&auml;ndigen &bdquo;Ich m&uuml;sste noch mehr machen&ldquo; auszusteigen &ndash;
            und endlich zu verstehen, welche Schritte Deinem K&ouml;rper gerade wirklich helfen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAnders;
