const patterns = [
  {
    title: "Der gestresste Stoffwechsel",
    text: "Wenn Dein System dauerhaft unter Druck l\u00E4uft, priorisiert Dein K\u00F6rper Sicherheit \u2013 nicht Fettverbrennung.",
  },
  {
    title: "Der unterversorgte Fettstoffwechsel",
    text: "Wenn Dein K\u00F6rper \u00FCber l\u00E4ngere Zeit zu wenig bekommt, reagiert er oft nicht mit Freigabe \u2013 sondern mit Sparsamkeit, M\u00FCdigkeit und Stillstand.",
  },
  {
    title: "Der \u00FCberangepasste Di\u00E4t-Stoffwechsel",
    text: "Wenn Du viele Di\u00E4ten hinter Dir hast, sch\u00FCtzt Dein K\u00F6rper Reserven oft st\u00E4rker als fr\u00FCher.",
  },
];

const AngebotMuster = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Drei typische Muster, die Fortschritt blockieren k&ouml;nnen
          </h2>

          <p className="text-base md:text-lg text-muted-foreground text-center leading-relaxed mb-10 max-w-2xl mx-auto">
            Viele k&auml;mpfen nicht gegen dasselbe Problem.<br />
            Aber sehr viele landen in einem dieser drei Muster:
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
            <span className="font-medium text-foreground">
              Solange Du nur h&auml;rter gegen Deinen K&ouml;rper arbeitest, drehst Du Dich oft weiter im Kreis.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotMuster;
