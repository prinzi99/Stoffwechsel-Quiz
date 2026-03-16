import { Brain, Zap, ListChecks, Wrench } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const bookPoints = [
  "warum klassische Abnehmstrategien bei vielen genau dann nicht mehr greifen, wenn sie sich besonders anstrengen",
  "wie Stress, Unterversorgung und wiederholte Di\u00E4ten den Stoffwechsel schleichend ausbremsen k\u00F6nnen",
  "warum ein biologisches Problem nicht automatisch durch noch mehr Disziplin gel\u00F6st wird",
  "wie ein sinnvoller Neustart aussehen kann, ohne wieder in alte Fehler zu rutschen",
  "wie Du Entscheidungen triffst, die Deinem K\u00F6rper eher helfen als schaden",
];

const bonuses = [
  {
    icon: Brain,
    title: "Stoffwechsel-Reset-Check",
    text: "Damit Du schneller erkennst, welche Muster bei Dir gerade am wahrscheinlichsten im Hintergrund laufen.",
  },
  {
    icon: Zap,
    title: "Kalorien-Startpunkt-Rechner",
    text: "Damit Du nicht weiter im Blindflug zwischen zu viel und viel zu wenig pendelst.",
  },
  {
    icon: ListChecks,
    title: "Checklisten & Vorlagen",
    text: "Damit Du das Wissen aus dem Buch nicht nur verstehst, sondern im Alltag auch wirklich anwenden kannst.",
  },
  {
    icon: Wrench,
    title: "Biohacking-Tools",
    text: "Damit Du hilfreiche Hebel an der Hand hast, um Deinen K\u00F6rper besser zu lesen und kl\u00FCger zu reagieren.",
  },
];

const AngebotInhalt = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
            Du kaufst hier nicht einfach nur Informationen.{" "}
            <span className="text-primary">Du kaufst Dir endlich eine stimmige Erkl&auml;rung.</span>
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
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-2">
                &bdquo;Du bist nicht das Problem&ldquo; hilft Dir, Zusammenh&auml;nge zu verstehen,
                die vielen erst dann klar werden, wenn sie schon monatelang feststecken.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-5">
                Es zeigt Dir nachvollziehbar,
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
