const AngebotAnders = () => {
  return (
    <section className="py-8 md:py-12 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6 text-center">
            Der Fehler ist oft nicht mangelnde Disziplin.{" "}
            <span className="text-primary">Der Fehler ist die falsche Logik.</span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
            <p>Die meisten h&ouml;ren immer wieder dasselbe:</p>

            <p className="font-medium text-foreground">
              Weniger essen.<br />
              Mehr bewegen.<br />
              Mehr Disziplin.
            </p>

            <p>Das klingt logisch.</p>

            <p>Kann kurzfristig sogar funktionieren.</p>

            <p>
              Aber wenn Dein K&ouml;rper schon auf Stress, Mangel oder alte Di&auml;tmuster reagiert,
              versch&auml;rft genau diese Logik oft das Problem.
            </p>

            <p className="text-lg md:text-xl font-semibold text-foreground">
              Dann strengst Du Dich mehr an &mdash;<br />
              und kommst trotzdem nicht voran.
            </p>

            <p className="font-semibold text-primary text-lg">
              Genau hier setzt dieses Buch an.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotAnders;
