import { CheckCircle2 } from "lucide-react";

const bullets = [
  'warum viele Menschen ihren Stoffwechsel mit \u201Egesunden\u201C Strategien unbewusst weiter ausbremsen',
  "woran Du erkennst, ob bei Dir eher Stress, Unterversorgung oder frühere Diätmuster im Hintergrund arbeiten",
  "warum weniger Kalorien kurzfristig wirken können, langfristig aber oft genau das Problem verschärfen",
  "welche Fehler hochdisziplinierte Menschen besonders häufig machen, obwohl sie eigentlich alles richtig machen wollen",
  "wie Du Deinen Stoffwechsel wieder stabilisierst, ohne in die nächste radikale Diätspirale zu geraten",
  "welche Signale Dein Körper sendet, bevor Müdigkeit, Heißhunger, Frust und Stillstand sichtbar werden",
];

const AngebotAnders = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
            Dieses Buch hilft Dir, die Blockade zu verstehen – statt Dich weiter selbst zu bekämpfen
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10">
            Du bekommst keine leeren Motivationstipps und keinen weiteren Standardplan.<br />
            Du bekommst eine klare, verständliche Einordnung dessen, was in Deinem Körper gerade wahrscheinlich passiert.
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
            Dieses Buch hilft Dir, Deinen Körper wieder zu verstehen, klarere Entscheidungen zu treffen
            und endlich aus dem ständigen „Ich müsste noch härter" auszusteigen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAnders;
