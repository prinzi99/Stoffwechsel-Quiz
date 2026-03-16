import { TrendingDown, Brain, Battery, Dumbbell, RotateCcw, BookOpen } from "lucide-react";

const features = [
  { icon: TrendingDown, text: "warum wiederholte Diäten den Stoffwechsel immer unberechenbarer machen" },
  { icon: Brain, text: "wie Dein Körper auf Stress, Unterversorgung und Anpassung tatsächlich reagiert" },
  { icon: Battery, text: "welche Rolle Schlaf, Anspannung und Erholung beim Fettverlust spielen" },
  { icon: Dumbbell, text: "warum mehr Training nicht automatisch mehr Fortschritt bringt" },
  { icon: RotateCcw, text: "wie der sogenannte Sparmodus tatsächlich entsteht" },
  { icon: BookOpen, text: "was es braucht, um Dein System wieder sinnvoll zu stabilisieren" },
];

const BuchInhalt = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-3">
            Was Du nach diesem Buch klarer sehen wirst
          </h2>

          <p className="text-base md:text-lg text-foreground/80 text-center leading-relaxed mb-8">
            Kein Motivationsgerede. Keine Fitness-Floskeln.<br />
            Sondern ein klarer Blick auf die Mechanismen, die viele spüren, aber kaum jemand sauber erklärt.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-foreground/90 leading-snug">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchInhalt;
