const statements = [
  {
    text: "Disziplin funktioniert nur, solange Dein Körper mitspielt. Wenn er auf Schutz schaltet, arbeitet sie gegen Dich.",
  },
  {
    text: "Dein K\u00F6rper blockiert Dich nicht, weil er \u201Ekaputt\u201C ist \u2014 sondern weil er sich angepasst hat.",
  },
  {
    text: "Je öfter Du versuchst, es mit weniger Essen und mehr Kontrolle zu lösen, desto stärker trainierst Du genau das Problem, das Dich festhält.",
  },
];

const AngebotAha = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 text-center">
            Was Dir bisher niemand so erkl&auml;rt hat
          </h2>

          <div className="space-y-4 mb-5">
            {statements.map((s, i) => (
              <div
                key={i}
                className="border-l-4 border-primary/60 pl-4 py-2"
              >
                <p className="text-base md:text-lg text-foreground/90 leading-snug font-medium">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base md:text-lg text-foreground/70 text-center leading-relaxed">
            Das ist der Punkt, an dem viele immer wieder scheitern &mdash; ohne zu verstehen, warum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAha;
