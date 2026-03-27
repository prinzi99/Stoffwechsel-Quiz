import bookCover from "@/assets/book-cover-mockup2.jpeg";

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

          <div className="flex justify-center mb-10">
            <img
              src={bookCover}
              alt="Du bist nicht das Problem – Buchcover"
              className="w-48 md:w-64 h-auto rounded-xl shadow-2xl"
              width={800}
              height={1067}
            />
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
