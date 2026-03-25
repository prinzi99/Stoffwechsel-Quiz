const Test2403Emotion = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">

          {/* ÜBERGANG – Falsche Regeln */}
          <div className="space-y-2">
            <p className="text-sm md:text-lg text-foreground/80 leading-snug">
              Du hast das nicht falsch gemacht.
            </p>
            <p className="text-base md:text-xl font-extrabold text-foreground leading-snug">
              Du hast nur mit den falschen Regeln gespielt.
            </p>
            <p className="text-sm md:text-lg text-foreground/80 leading-snug pt-1">
              Und genau deshalb steckst Du fest.
            </p>
          </div>

          {/* PROBLEM VERSCHÄRFEN */}
          <div className="space-y-1.5">
            <p className="text-sm md:text-lg text-foreground/80 leading-snug">
              Du isst weniger.
              <br />
              Du gibst mehr Gas.
              <br />
              Du ziehst durch.
            </p>
            <p className="text-base md:text-xl font-extrabold text-foreground leading-snug pt-1">
              Und Dein K&ouml;rper macht trotzdem dicht.
            </p>
            <div className="pt-1.5 space-y-0.5">
              <p className="text-sm md:text-lg text-foreground/80 leading-snug">
                Nicht, weil Du zu schwach bist.
              </p>
              <p className="text-sm md:text-lg font-semibold text-foreground leading-snug">
                Sondern weil Dein K&ouml;rper l&auml;ngst im Schutzmodus ist.
              </p>
            </div>
          </div>

          {/* EMOTIONALER SCHMERZ */}
          <div className="space-y-1.5">
            <p className="text-sm md:text-lg text-foreground/80 leading-snug">
              Das ist der Punkt, an dem die meisten aufgeben.
              <br />
              Oder noch h&auml;rter k&auml;mpfen – und alles nur schlimmer machen.
            </p>
            <p className="text-base md:text-xl font-extrabold text-foreground leading-snug pt-1">
              Stillstand. Frust. Neustart.
              <br />
              Immer wieder.
            </p>
          </div>

          {/* LÖSUNG UNVERMEIDBAR – Überleitung zu Bullets */}
          <div className="my-5 md:my-8 py-4 md:py-5 border-y border-primary/20">
            <p className="text-sm md:text-lg text-foreground/80 leading-snug">
              Wenn Du das nicht verstehst, bleibst Du genau in diesem Kreislauf.
            </p>
            <p className="text-base md:text-xl font-extrabold text-primary leading-snug pt-2">
              Wenn Du es verstehst, ver&auml;ndert sich alles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Test2403Emotion;
