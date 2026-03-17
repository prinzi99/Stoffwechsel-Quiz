const AngebotAnders = () => {
  return (
    <section className="py-6 md:py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 text-center">
            Der Fehler ist nicht Deine Disziplin.{" "}
            <span className="text-primary">Der Fehler ist, dass Du das falsche Problem l&ouml;st.</span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed">
            <p>
              Die meisten bekommen immer wieder dieselbe Empfehlung: Weniger essen. Mehr verbrennen. Mehr Kontrolle.
            </p>
            <p>
              Das klingt logisch.
            </p>
            <p>
              Aber wenn Dein K&ouml;rper bereits auf Stress, Unterversorgung oder wiederholte Di&auml;ten reagiert, versch&auml;rft genau das die Situation.
            </p>
            <p>
              Dann strengst Du Dich mehr an &mdash; und kommst trotzdem nicht weiter.
            </p>
            <p className="font-medium text-foreground">
              Und genau das f&uuml;hlt sich irgendwann an wie Stillstand.
            </p>
          </div>

          <div className="mt-5 border-l-4 border-primary/60 pl-4 py-2">
            <p className="text-base md:text-lg text-foreground font-medium leading-snug">
              Du scheiterst nicht an Disziplin.<br />
              Du scheiterst daran, dass Dein K&ouml;rper logisch gegen Deinen Plan arbeitet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotAnders;
