import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ist das Buch auch für Anfänger geeignet?",
    a: "Ja. Das Buch ist bewusst so geschrieben, dass Du keine Vorkenntnisse brauchst. Es erklärt Zusammenhänge verständlich, ohne Dich mit Fachbegriffen zu erschlagen.",
  },
  {
    q: "Ist das einfach nur ein weiterer Diätplan?",
    a: "Nein. Es geht nicht darum, Dir den nächsten starren Plan zu geben. Es geht darum, zu verstehen, warum Standardansätze oft scheitern – und worauf Du stattdessen achten solltest.",
  },
  {
    q: "Kann ich direkt nach dem Kauf loslegen?",
    a: "Ja. Du erhältst sofort Zugriff auf das E-Book und die Bonus-Inhalte und kannst direkt anfangen zu lesen und die ersten Punkte für Dich einzuordnen.",
  },
  {
    q: "Ist das nur Theorie?",
    a: "Nein. Das Buch verbindet verständliche Erklärung mit konkreten nächsten Schritten, Beispielen und praktischen Hilfen für den Alltag.",
  },
  {
    q: "Was unterscheidet dieses Buch von kostenlosen Infos im Internet?",
    a: "Kostenlose Infos gibt es genug. Das Problem ist meist nicht fehlende Information, sondern fehlende Einordnung. Dieses Buch bündelt die entscheidenden Zusammenhänge so, dass Du Deine Situation endlich klarer verstehst und sinnvoller handeln kannst.",
  },
];

const AngebotFAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10">
            Häufige Fragen
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
