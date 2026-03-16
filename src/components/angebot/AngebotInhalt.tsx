import { Brain, Zap, ListChecks, Wrench } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const bookPoints = [
  "warum klassische Abnehmstrategien oft in die Sackgasse führen",
  "wie Stress, Mangel und wiederholte Diäten den Stoffwechsel beeinflussen",
  "warum mehr Disziplin ein biologisches Problem nicht automatisch löst",
  "wie ein sinnvoller Reset aussehen kann",
  "wie Du wieder mit Deinem Körper arbeitest statt gegen ihn",
];

const bonuses = [
  {
    icon: Brain,
    title: "Stoffwechsel-Reset-Check",
    text: "Damit Du schneller einschätzen kannst, ob Dein System gerade eher auf Belastung, Mangel oder Anpassung reagiert.",
  },
  {
    icon: Zap,
    title: "Kalorien-Startpunkt-Rechner",
    text: 'Damit Du nicht weiter zwischen \u201Ezu viel\u201C und \u201Eviel zu wenig\u201C pendelst, sondern einen sinnvollen Ausgangspunkt hast.',
  },
  {
    icon: ListChecks,
    title: "Checklisten & Vorlagen",
    text: "Damit Du das Wissen aus dem Buch nicht nur verstehst, sondern direkt in Deinen Alltag übersetzen kannst.",
  },
  {
    icon: Wrench,
    title: "Biohacking-Tools",
    text: "Damit Du hilfreiche Werkzeuge an der Hand hast, um Signale des Körpers besser einzuordnen und klüger zu reagieren.",
  },
];

const AngebotInhalt = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 leading-tight">
            Du bekommst nicht einfach nur ein E-Book.{" "}
            <span className="text-primary">Du bekommst eine neue Erklärung für ein altes Problem.</span>
          </h2>

          {/* Book + points */}
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
                „Du bist nicht das Problem" zeigt Dir verständlich und nachvollziehbar:
              </p>
              <ul className="space-y-3">
                {bookPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/85 leading-snug">
                    <span className="text-primary font-bold mt-0.5">–</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bonus section */}
          <div className="mt-14 md:mt-20">
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Zusätzlich enthalten: praktische Bonus-Tools
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
