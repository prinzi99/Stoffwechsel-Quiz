import { UserCheck } from "lucide-react";

const points = [
  "Du stark anf\u00E4ngst \u2014 und jedes Mal hoffst, dass es diesmal anders l\u00E4uft",
  "Du irgendwann die Waage meidest, weil Du die Antwort schon kennst",
  "Du immer besser im Anfangen wirst \u2014 aber nicht im Durchziehen",
  "Du wei\u00DFt, was Du tun solltest \u2014 und es trotzdem nicht dauerhaft funktioniert",
  "Du Dir M\u00FChe gibst \u2014 aber Dir selbst nicht mehr wirklich vertraust",
  "Du das Gef\u00FChl hast, dass Dein K\u00F6rper gegen Dich arbeitet",
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
