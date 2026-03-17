const AngebotDenken = () => {
  return (
    <section className="py-6 md:py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 text-center">
            Du machst mehr. Aber es funktioniert weniger.
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed">
            <p>
              Du wei&szlig;t eigentlich, was Du tun solltest. Du achtest auf Ern&auml;hrung. Du bewegst Dich. Du versuchst, konsequent zu bleiben.
            </p>
            <p>
              Und trotzdem wird es nicht leichter. Sondern schwerer.
            </p>
            <p>
              Du startest neu. Ziehst wieder durch. Und landest wieder am selben Punkt.
            </p>
            <p>
              Nicht sichtbar f&uuml;r andere. Aber sehr klar f&uuml;r Dich.
            </p>
            <p className="pt-1">
              Und genau hier entsteht der gef&auml;hrlichste Gedanke:
            </p>
            <p className="text-foreground font-semibold text-lg md:text-xl">
              &bdquo;Ich bin wohl einfach nicht konsequent genug.&ldquo;
            </p>
            <p className="pt-1">
              Das Problem ist: <strong className="text-foreground">Das stimmt nicht.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotDenken;
