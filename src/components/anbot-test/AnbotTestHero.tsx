import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=promo";

const AnbotTestHero = () => {

  return (
    <section className="bg-[image:var(--hero-gradient)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Du verstehst jetzt, warum es nicht funktioniert hat. Dieses Buch zeigt dir, was stattdessen funktioniert.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4">
            Kein neuer Diätplan. Sondern ein System, das mit deinem Körper arbeitet – nicht gegen ihn.
          </p>

          <span className="inline-block bg-white text-primary font-semibold text-base px-6 py-2 rounded-full mb-10 shadow-md">
            🎯 Exklusiv für Quiz-Teilnehmer: 43% günstiger
          </span>

          <div className="flex justify-center mb-10">
            <img
              src={bookCover}
              alt="Du bist nicht das Problem – Buchcover"
              className="w-48 md:w-64 h-auto rounded-xl shadow-2xl"
              width={800}
              height={1067}
            />
          </div>

          <a
            href={DIGISTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
          >
            Jetzt für 29,99&nbsp;€ statt <span className="line-through ml-1">69,99&nbsp;€</span> sichern
          </a>
          <p className="text-primary-foreground/70 text-sm mt-3">
            Sofort-Download als PDF · Inkl. Online-Bonusbereich
          </p>
          <p className="text-primary-foreground/70 text-sm mt-1">
            100 Seiten · Wissenschaftlich fundiert · Sofort anwendbar
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnbotTestHero;
