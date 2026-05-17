import {
  AlertTriangle, Brain, Dumbbell, RefreshCw, Settings,
  Shield, Layout, Heart, Activity, User
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const chapters = [
  { icon: AlertTriangle, title: "Der große Denkfehler", text: "Warum 'weniger essen = mehr abnehmen' eine gefährliche Halbwahrheit ist – und was dein Körper wirklich tut, wenn du Kalorien streichst." },
  { icon: Brain, title: "Disziplin ist kein Stoffwechselhormon", text: "Warum Willenskraft ein erschöpfbarer Muskel ist – und warum die diszipliniertesten Menschen oft am härtesten scheitern." },
  { icon: Dumbbell, title: "Mehr Sport ≠ mehr Fettverlust", text: "Warum dein Körper Extrabewegung kompensiert und mehr Training manchmal weniger bringt." },
  { icon: RefreshCw, title: "Raus aus dem Sparmodus", text: "Wie du deinen Grundumsatz berechnest, dein Defizit richtig dosierst und deinen Stoffwechsel aus der Anpassung holst." },
  { icon: Settings, title: "Das System statt die Diät", text: "Warum Struktur stärker ist als Disziplin – und wie ein System funktioniert, auch wenn die Motivation Urlaub macht." },
  { icon: Shield, title: "Der eigentliche Gegner: Komplexität", text: "Warum zu viele Regeln dich sabotieren und wie du Entscheidungsmüdigkeit eliminierst." },
  { icon: Layout, title: "Vom Plan zur Architektur", text: "Die 4-Ebenen-Systemarchitektur: Parameter, Anpassungslogik, Feedback-Indikatoren und Schutzstrukturen." },
  { icon: Heart, title: "Sicherheit statt Mangel", text: "Warum dein Körper Stabilität braucht, bevor er Fett loslässt – und wie du ihm dieses Signal gibst." },
  { icon: Activity, title: "Signale statt Regeln", text: "Wie du Gewichtstrends, Schlaf, Hunger und Trainingsleistung als Feedback nutzt statt blind einem Plan zu folgen." },
  { icon: User, title: "Individualisierung ist keine Luxusoption", text: "Warum das, was für andere funktioniert, für dich scheitern kann – und wie du dein eigenes System findest." },
];

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=promo";

const ProfBKapitel = () => {

  return (
    <section className="py-12 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Was du in diesem Buch lernst
          </h2>

          <div className="grid gap-4">
            {chapters.map((ch, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-5 flex gap-4">
                <div className="shrink-0 mt-1">
                  <ch.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1"><span className="text-primary font-bold">{i + 1}.</span> {ch.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ch.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Bonuskapitel: 10 Stoffwechsel-Mythen – wissenschaftlich eingeordnet
            </Badge>
          </div>

          {/* Zwischen-CTA */}
          <div className="mt-10 text-center">
            <a
              href={DIGISTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
            >
              Jetzt für 29,99&nbsp;€ statt <span className="line-through ml-1">69,99&nbsp;€</span> sichern
            </a>
            <p className="text-muted-foreground text-sm mt-3">Exklusiv für Quiz-Teilnehmer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfBKapitel;
