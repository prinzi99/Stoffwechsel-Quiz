import { UserCheck } from "lucide-react";

const points = [
  "Du motiviert anfängst — und dann still wieder verschwindest",
  "Du eigentlich genau wei\u00DFt, was Du tun solltest — es aber nicht durchziehst",
  "Du Dir immer wieder vornimmst, diesmal wirklich dranzubleiben",
  "Du merkst, dass es nicht an Wissen fehlt — sondern an etwas, das Du nicht greifen kannst",
  "Du Dich schon \u00F6fter gefragt hast, warum es bei anderen klappt — aber bei Dir nicht",
  "Du Dir insgeheim selbst nicht mehr ganz vertraust",
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
