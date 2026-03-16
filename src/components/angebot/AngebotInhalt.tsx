import { Brain, Zap, ListChecks, Wrench, CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const bookPoints = [
  "warum klassische Abnehmstrategien oft in die Sackgasse f\u00FChren",
  "wie Stress, Mangel und wiederholte Di\u00E4ten den Stoffwechsel beeinflussen",
  "warum mehr Disziplin ein biologisches Problem nicht automatisch l\u00F6st",
  "wie ein sinnvoller Neustart aussehen kann",
  "wie Du wieder mit Deinem K\u00F6rper arbeitest statt gegen ihn",
];

const bonuses = [
  {
    icon: Brain,
    title: "Stoffwechsel-Reset-Check",
    text: "Damit Du schneller erkennst, welches Muster bei Dir wahrscheinlich im Hintergrund l\u00E4uft.",
  },
  {
    icon: Zap,
    title: "Kalorien-Startpunkt-Rechner",
    text: "Damit Du nicht weiter zwischen zu viel und viel zu wenig pendelst.",
  },
  {
    icon: ListChecks,
    title: "Checklisten & Vorlagen",
    text: "Damit Du das Wissen aus dem Buch direkt im Alltag anwenden kannst.",
  },
  {
    icon: Wrench,
    title: "Biohacking-Tools",
    text: "Damit Du Deinen K\u00F6rper besser lesen und kl\u00FCger reagieren kannst.",
  },
];

const AngebotInhalt = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
            Du bekommst nicht einfach nur ein E-Book.{" "}
            <span className="text-primary">Du bekommst endlich ein klareres Bild.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 mt-10 md:mt-14">
            <div className="w-44 sm:w-52 md:w-64 flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-xl"
                width={800}
                height={1067}
                loading="lazy"
              />
            </div>

            <div className="flex-1">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-5">
                &bdquo;Du bist nicht das Problem&ldquo; hilft Dir zu verstehen,
                warum Dein K&ouml;rper gerade nicht so reagiert, wie Du es erwartest.
              </p>
              <ul className="space-y-3">
                {bookPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/85 leading-snug">
                    <span className="text-primary font-bold mt-0.5">&ndash;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Zus&auml;tzlich enthalten: praktische Bonus-Tools
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {bonuses.map((b, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <h4 className="font-bold text-foreground">{b.title}</h4>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotInhalt;
