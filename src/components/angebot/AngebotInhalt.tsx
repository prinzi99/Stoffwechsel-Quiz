import { Brain, Zap, ListChecks, Wrench } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const bookPoints = [
  "warum Du trotz Disziplin nicht vorankommst",
  "warum Dein Körper auf Schutz schaltet",
  "wie Du erkennst, was bei Dir wirklich passiert",
  "was sich ändern muss, damit überhaupt wieder Bewegung entsteht",
];

const bonuses = [
  {
    icon: Brain,
    title: "Stoffwechsel-Reset-Check",
    text: "Woran Du erkennst, dass Dein Körper nicht noch mehr Druck, sondern andere Signale braucht.",
  },
  {
    icon: Zap,
    title: "Kalorien-Irrtümer-Checkliste",
    text: "Die häufigsten Denkfehler, die Menschen trotz Disziplin immer wieder tiefer in die Sackgasse führen.",
  },
  {
    icon: ListChecks,
    title: "Warnsignal-Übersicht",
    text: "Typische Hinweise darauf, dass Stress, Unterversorgung oder Anpassung bei Dir längst mitwirken.",
  },
  {
    icon: Wrench,
    title: "Reflexions-Tool für Blockaden",
    text: "Damit Du klarer erkennst, warum Du trotz Mühe immer wieder im Kreis drehst.",
  },
];

const AngebotInhalt = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-1 leading-tight">
            Du bist nicht das Problem
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-center mb-6">
            Du hast nur nie gelernt, was wirklich in Deinem K&ouml;rper passiert
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
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
              <div className="text-base md:text-lg text-foreground/80 leading-relaxed space-y-2 mb-4">
                <p>Dieses Buch gibt Dir nicht noch mehr Regeln.</p>
                <p>Es erkl&auml;rt Dir, warum Deine bisherigen Versuche nicht so funktioniert haben, wie Du es erwartet hast.</p>
                <p className="font-medium text-foreground">Und genau das ist der Unterschied.</p>
                <p>Denn solange Du das falsch einordnest, wirst Du immer wieder an denselben Punkt zur&uuml;ckkommen.</p>
              </div>
              <ul className="space-y-2">
                {bookPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-base md:text-lg text-foreground/90 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-1">
              Du bekommst nicht nur Wissen
            </h3>
            <p className="text-base text-muted-foreground text-center mb-5">
              Du bekommst Werkzeuge, mit denen Du Deine Lage klarer einordnen kannst
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {bonuses.map((b, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-1.5">
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
