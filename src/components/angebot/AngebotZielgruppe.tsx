import { UserCheck } from "lucide-react";

const points = [
  "Du immer wieder neu anfängst — und heimlich wieder aufhörst",
  "Du eigentlich wei\u00DFt, was \u201Erichtig\u201C ist, aber es nicht dauerhaft funktioniert",
  "Du das Gef\u00FChl hast, Dein K\u00F6rper arbeitet gegen Dich",
  "Du Dich fragst, warum es bei anderen klappt — aber bei Dir nicht",
  "Du Dich innerlich schon oft selbst dafür kritisiert hast",
  "Du merkst, dass es nicht an Wissen fehlt — sondern an etwas anderem",
];

const AngebotZielgruppe = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
            Du wirst Dich hier wiedererkennen, wenn &hellip;
          </h2>

          <div className="space-y-3">
            {points.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <UserCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base text-foreground/90 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotZielgruppe;
