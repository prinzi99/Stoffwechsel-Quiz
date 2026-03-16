const AngebotNicht = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            F&uuml;r wen dieses Buch nicht gedacht ist
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
            <p>
              Nicht f&uuml;r Menschen, die nach einer Wunderl&ouml;sung &uuml;ber Nacht suchen.
            </p>
            <p>
              Nicht f&uuml;r Menschen, die einfach nur einen starren Di&auml;tplan zum Abarbeiten wollen.
            </p>
            <p className="font-medium text-foreground pt-2">
              Sondern f&uuml;r Menschen, die verstehen wollen, was hinter ihrem Stillstand steckt &ndash;
              und die eine nachvollziehbare Richtung suchen, die sich endlich sinnvoll anf&uuml;hlt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotNicht;
