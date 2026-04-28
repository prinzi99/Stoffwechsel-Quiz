import { Download, Gift, Lock, Sparkles } from "lucide-react";

const trustItems = [
  { icon: Download, label: "Sofort-Download" },
  { icon: Gift, label: "Inkl. Bonusbereich" },
  { icon: Lock, label: "Sichere Bezahlung" },
];

const Fs26Kauf = () => {
  return (
    <section id="kaufen" className="bg-[image:var(--hero-gradient)] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-5 py-2 rounded-full mb-6 shadow-lg uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Frühlings Special
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Bereit, das Spiel zu verändern?
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-6">
            Kein Abo. Kein Kleingedrucktes. Einmal kaufen, sofort loslegen.
          </p>
          <p className="text-xl text-primary-foreground/60 line-through mb-1">
            34,99&nbsp;€
          </p>
          <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
            9,99&nbsp;€
          </p>
          <p className="text-sm text-primary-foreground/70 mb-8">
            🌱 Frühlings-Aktionspreis – nur kurze Zeit
          </p>
          <a
            href="https://www.digistore24.com/product/675804?voucher=fruehling26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-primary-foreground text-primary shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
          >
            Jetzt für 9,99&nbsp;€ sichern
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {trustItems.map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                <t.icon className="w-4 h-4" />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fs26Kauf;
