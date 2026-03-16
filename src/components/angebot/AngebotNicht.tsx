const AngebotNicht = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            Für wen dieses Buch nicht gedacht ist
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
            <p>
              Dieses Buch ist nicht für Menschen gemacht, die nach einer Wunderlösung über Nacht suchen.
            </p>
            <p>
              Es ist auch nicht für Menschen gedacht, die einfach nur einen starren Diätplan zum Abarbeiten wollen.
            </p>
            <p>
              Und es ist nicht für Menschen, die keinerlei Bereitschaft haben, ihren bisherigen Ansatz zu hinterfragen.
            </p>
            <p className="font-medium text-foreground pt-2">
              Dieses Buch ist für Menschen, die verstehen wollen, was hinter ihrem Stillstand steckt –
              und die eine nachvollziehbare Richtung suchen, die sich endlich sinnvoll anfühlt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotNicht;
