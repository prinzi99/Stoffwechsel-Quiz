import { AlertTriangle, Battery, RotateCcw } from "lucide-react";

const patterns = [
  {
    icon: AlertTriangle,
    title: "Der gestresste Stoffwechsel",
    text: "Wenn Dein System dauerhaft unter Druck l\u00E4uft, priorisiert Dein K\u00F6rper Sicherheit \u2014 nicht Fettverbrennung.",
  },
  {
    icon: Battery,
    title: "Der unterversorgte Fettstoffwechsel",
    text: "Wenn Dein K\u00F6rper \u00FCber l\u00E4ngere Zeit zu wenig bekommt, reagiert er nicht mit Freigabe \u2014 sondern mit Sparsamkeit, M\u00FCdigkeit und Stillstand.",
  },
  {
    icon: RotateCcw,
    title: "Der \u00FCberangepasste Di\u00E4t-Stoffwechsel",
    text: "Wenn Du viele Di\u00E4ten hinter Dir hast, sch\u00FCtzt Dein K\u00F6rper Reserven st\u00E4rker als fr\u00FCher.",
  },
];

const AngebotMuster = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-2 leading-tight">
            Drei typische Muster, die Fortschritt blockieren
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center mb-5">
            Erkennst Du Dich in einem dieser Muster wieder?
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {patterns.map((p, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <p.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="font-bold text-foreground text-base">{p.title}</h3>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-card border-2 border-primary/30 rounded-xl p-4 text-center">
            <p className="text-base md:text-lg font-bold text-primary leading-snug">
              Du scheiterst nicht an Disziplin. Dein K&ouml;rper reagiert logisch &mdash; nur nicht auf das, was Du glaubst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotMuster;
