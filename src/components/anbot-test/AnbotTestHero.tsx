const AnbotTestHero = () => {
  const scrollToKauf = () => {
    document.getElementById("kaufen")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[image:var(--hero-gradient)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Du verstehst jetzt, warum es nicht funktioniert hat. Dieses Buch zeigt dir, was stattdessen funktioniert.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
            Kein neuer Diätplan. Sondern ein System, das mit deinem Körper arbeitet – nicht gegen ihn.
          </p>

          <div className="bg-muted/20 border border-primary-foreground/20 rounded-xl flex items-center justify-center h-[300px] mb-10">
            <span className="text-primary-foreground/60 text-lg">Buch-Mockup hier einfügen</span>
          </div>

          <button
            onClick={scrollToKauf}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
          >
            Jetzt für 19,99&nbsp;€ sichern
          </button>
          <p className="text-primary-foreground/70 text-sm mt-3">
            Sofort-Download als PDF · Inkl. Online-Bonusbereich
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnbotTestHero;
