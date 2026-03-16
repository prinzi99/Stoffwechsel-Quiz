const patterns = [
  {
    title: "Der gestresste Stoffwechsel",
    text: "Du funktionierst nach außen, aber Dein System läuft innerlich unter Daueranspannung. Schlaf, Druck, innere Unruhe oder permanentes „Durchziehen" halten Deinen Körper im Stressmodus. In diesem Zustand priorisiert er Sicherheit – nicht Fettverbrennung.",
  },
  {
    title: "Der unterversorgte Fettstoffwechsel",
    text: "Du isst bewusst, kontrollierst viel und meinst es eigentlich gut. Aber \u00FCber l\u00E4ngere Zeit bekommt Dein K\u00F6rper zu wenig von dem, was er braucht. Er reagiert darauf nicht mit mehr Freigabe \u2013 sondern mit Sparsamkeit, M\u00FCdigkeit und Stillstand.",
  },
  {
    title: "Der überangepasste Diät-Stoffwechsel",
    text: "Du hast schon vieles ausprobiert. Anfangs ging etwas, dann kam wieder Stillstand. Nach mehreren Diäten lernt der Körper, Reserven stärker zu schützen. Jede neue Reduktion trifft dann auf ein System, das längst auf Abwehr geschaltet hat.",
  },
];

const AngebotMuster = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Drei typische Muster, die Fortschritt blockieren können
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            Nicht jeder steckt aus demselben Grund fest.<br />
            Aber viele landen in einem dieser drei Muster:
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {patterns.map((p, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-foreground/80 text-center mt-10 leading-relaxed max-w-2xl mx-auto">
            Egal, welches Muster bei Dir im Vordergrund steht:<br />
            <span className="font-medium text-foreground">
              Solange Du nur härter gegen den Körper arbeitest, drehst Du Dich oft weiter im Kreis.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotMuster;
