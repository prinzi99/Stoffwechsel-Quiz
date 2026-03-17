const AngebotAha = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 text-center">
            Was Dir bisher niemand so klar gesagt hat
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed mb-5">
            <p>
              Disziplin ist nicht Dein Problem.<br />
              In Deinem Fall ist sie genau das, was Dich festh&auml;lt.
            </p>
            <p>
              Denn solange Dein K&ouml;rper auf Schutz schaltet, arbeitet jede weitere Kontrolle gegen Dich.
            </p>
            <p>
              Dein K&ouml;rper sabotiert Dich nicht.<br />
              Er reagiert logisch auf das, was Du ihm gibst.
            </p>
            <p>
              Und genau das ist das Problem:<br />
              Du versuchst, ein System zu kontrollieren, das l&auml;ngst gelernt hat, sich dagegen zu wehren.
            </p>
            <p className="font-medium text-foreground">
              Je mehr Du dr&uuml;ckst, desto st&auml;rker macht es dicht.
            </p>
          </div>

          <div className="bg-card border-2 border-primary/30 rounded-xl p-4 text-center">
            <p className="text-base md:text-lg font-bold text-primary leading-snug">
              Du scheiterst nicht an Disziplin. Dein K&ouml;rper arbeitet logisch gegen Deinen Plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotAha;
