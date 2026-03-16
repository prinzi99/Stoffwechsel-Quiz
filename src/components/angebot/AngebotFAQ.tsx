import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ist das Buch auch f\u00FCr Anf\u00E4nger geeignet?",
    a: "Ja. Du brauchst keine Vorkenntnisse. Das Buch erkl\u00E4rt die wichtigsten Zusammenh\u00E4nge so, dass Du Deine eigene Situation besser einordnen kannst, ohne Dich durch Fachsprache k\u00E4mpfen zu m\u00FCssen.",
  },
  {
    q: "Ist das einfach nur ein weiterer Di\u00E4tplan?",
    a: "Nein. Genau darum geht es gerade nicht. Dieses Buch soll Dir helfen zu verstehen, warum starre Standardpl\u00E4ne bei vielen irgendwann nicht mehr funktionieren \u2013 und worauf es stattdessen ankommt.",
  },
  {
    q: "Kann ich direkt nach dem Kauf loslegen?",
    a: "Ja. Du erh\u00E4ltst sofort Zugriff auf das E-Book und alle Bonus-Inhalte und kannst direkt anfangen, Deine bisherige Situation klarer einzuordnen.",
  },
  {
    q: "Ist das nur Theorie?",
    a: "Nein. Das Buch verbindet Erkl\u00E4rung mit konkreten Denkanst\u00F6\u00DFen und praktischen Hilfen, damit Du nicht nur mehr wei\u00DFt, sondern bessere Entscheidungen treffen kannst.",
  },
  {
    q: "Was unterscheidet dieses Buch von kostenlosen Infos im Internet?",
    a: "Im Internet findest Du unendlich viele Einzelinformationen. Was meist fehlt, ist eine stimmige Einordnung. Dieses Buch verbindet die entscheidenden Zusammenh\u00E4nge so, dass aus widerspr\u00FCchlichen Tipps endlich ein verst\u00E4ndliches Bild wird.",
  },
];

const AngebotFAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10">
            H&auml;ufige Fragen
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-foreground/75 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AngebotFAQ;
