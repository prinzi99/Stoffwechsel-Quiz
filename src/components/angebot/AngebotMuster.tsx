import { AlertTriangle, Battery, RotateCcw } from "lucide-react";

const patterns = [
  {
    icon: AlertTriangle,
    title: "Der gestresste Stoffwechsel",
    text: "Wenn Dein System dauerhaft unter Druck läuft, priorisiert Dein Körper Sicherheit – nicht Fettverbrennung.",
  },
  {
    icon: Battery,
    title: "Der unterversorgte Fettstoffwechsel",
    text: "Wenn Dein Körper über längere Zeit zu wenig bekommt, reagiert er oft nicht mit Freigabe – sondern mit Sparsamkeit, Müdigkeit und Stillstand.",
  },
  {
    icon: RotateCcw,
    title: "Der überangepasste Diät-Stoffwechsel",
    text: "Wenn Du viele Diäten hinter Dir hast, schützt Dein Körper Reserven oft stärker als früher.",
  },
];

const AngebotMuster = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-2 leading-tight">
            Drei typische Muster, die Fortschritt blockieren k&ouml;nnen
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center mb-5">
            Vielleicht erkennst Du Dich in einem dieser Muster sofort wieder.
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

          <p className="text-base md:text-lg text-foreground/80 text-center mt-5 font-medium">
            Solange Du nur h&auml;rter gegen Deinen K&ouml;rper arbeitest, drehst Du Dich oft weiter im Kreis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotMuster;
