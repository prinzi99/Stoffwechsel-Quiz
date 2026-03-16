const BuchAutor = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            Warum ich dieses Buch geschrieben habe
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
            <p>
              Ich habe mich mit diesem Thema nicht beschäftigt, weil ich den nächsten Motivationstext schreiben wollte.
            </p>
            <p>Mich hat etwas anderes interessiert:</p>
            <p className="font-semibold text-foreground">
              Warum kämpfen so viele Menschen ehrlich, diszipliniert und über lange Zeit —
              und kommen trotzdem nicht dorthin, wo sie hinwollen?
            </p>
            <p>
              Je tiefer ich mich mit Stoffwechsel, biologischer Anpassung, Ernährung, Stress und inneren Regulationsmechanismen beschäftigt habe, desto klarer wurde:
            </p>
            <p className="font-semibold text-primary">
              Das eigentliche Problem wird oft komplett falsch erklärt.
            </p>
            <p>
              Viele denken, sie müssten sich nur noch stärker kontrollieren.
            </p>
            <p>
              Dabei arbeitet ihr Körper längst nach einer anderen Logik.
            </p>
            <p>
              Genau deshalb gibt es dieses Buch.
            </p>
            <p className="font-semibold text-foreground">
              Damit Du verstehst, was wirklich in Deinem System passiert —
              und aufhörst, Dich mit einer Erklärung fertigzumachen, die an der Realität vorbeigeht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchAutor;
