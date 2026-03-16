const AngebotDenken = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-8 text-center">
            Der Fehler ist oft nicht Dein Wille.{" "}
            <span className="text-primary">Der Fehler ist die Logik.</span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-5 leading-relaxed">
            <p>Die meisten Menschen bekommen immer wieder dieselbe Botschaft:</p>

            <p className="font-medium text-foreground">
              Weniger essen.<br />
              Mehr bewegen.<br />
              Mehr Disziplin.
            </p>

            <p>
              Das klingt einfach.<br />
              Funktioniert manchmal auch kurzfristig.<br />
              Aber wenn Dein Körper bereits unter Stress steht, auf Energiemangel reagiert oder sich an
              wiederholte Diäten angepasst hat, kann genau diese Logik das Problem verschärfen.
            </p>

            <p>Dann passiert etwas, das viele falsch deuten:</p>

            <p className="text-lg md:text-xl font-semibold text-foreground">
              Du strengst Dich mehr an – und kommst trotzdem nicht voran.
            </p>

            <p>
              Nicht, weil mit Dir etwas nicht stimmt.<br />
              Sondern weil Dein Körper auf Schutz schaltet.
            </p>

            <p className="font-medium text-primary text-lg">
              Genau hier setzt dieses Buch an.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotDenken;
