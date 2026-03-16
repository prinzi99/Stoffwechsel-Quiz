import { Shield, AlertTriangle, Search, RefreshCw } from "lucide-react";

const tools = [
  {
    icon: Shield,
    title: "Stoffwechsel-Reset-Check",
    desc: "Woran Du erkennst, dass Dein Körper nicht noch mehr Druck, sondern ein anderes Signal braucht.",
  },
  {
    icon: AlertTriangle,
    title: "Kalorien-Irrtümer-Checkliste",
    desc: "Die häufigsten Denkfehler, die Menschen trotz Disziplin immer wieder tiefer in die Sackgasse führen.",
  },
  {
    icon: Search,
    title: "Warnsignal-Übersicht",
    desc: "Typische Hinweise darauf, dass Stress, Unterversorgung oder Anpassung bei Dir längst mitwirken.",
  },
  {
    icon: RefreshCw,
    title: "Reflexions-Tool für Blockaden",
    desc: "Damit Du klarer erkennst, warum Du Dich trotz Mühe immer wieder im Kreis drehst.",
  },
];

const BuchBonus = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
            Du bekommst nicht nur Wissen — Du bekommst Orientierung
          </h2>

          <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed mb-8">
            Dieses Buch soll Dir nicht nur etwas erklären.<br />
            Es soll Dir helfen, Deine eigene Situation besser einzuordnen und typische Fehler schneller zu erkennen.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base md:text-lg">{tool.title}</h3>
                </div>
                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchBonus;
