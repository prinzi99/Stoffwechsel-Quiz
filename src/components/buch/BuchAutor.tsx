const BuchAutor = () => {
  return (
    <section className="py-12 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
            Warum ich dieses Buch geschrieben habe
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed">
            <p>Ich habe mich mit diesem Thema nicht beschäftigt, um den nächsten Motivationstext zu schreiben.</p>
            <p>Mich hat etwas anderes interessiert:</p>
            <p className="font-semibold text-foreground">
              Warum geben sich so viele Menschen ehrlich Mühe — und kommen trotzdem nicht voran?
            </p>
            <p>
              Je tiefer ich mich mit Stoffwechsel, biologischer Anpassung, Ernährung, Stress und inneren Regulationsmechanismen beschäftigt habe, desto klarer wurde:
            </p>
            <p className="font-semibold text-primary">
              Das eigentliche Problem wird oft komplett falsch erklärt.
            </p>
            <p>Viele denken, sie müssten sich einfach noch stärker kontrollieren. Dabei arbeitet ihr Körper längst nach einer anderen Logik.</p>
            <p className="font-semibold text-foreground">
              Genau deshalb gibt es dieses Buch: Damit Du verstehst, was in Deinem System wirklich passiert — und aufhörst, Dich für etwas fertigzumachen, das bisher schlicht falsch eingeordnet wurde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchAutor;
