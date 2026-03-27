import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ist das wieder eine Diät?",
    a: "Nein. Das Buch erklärt, warum die meisten Diäten scheitern – und zeigt dir stattdessen ein System, das auf Struktur, Feedback und Anpassung basiert. Kein Ernährungsplan, kein Verzicht-Dogma.",
  },
  {
    q: "Brauche ich Vorkenntnisse?",
    a: "Nein. Das Buch ist so geschrieben, dass es ohne Fachbegriffe auskommt. Alles wird Schritt für Schritt erklärt – ehrlich, direkt und ohne Wissenschafts-Jargon.",
  },
  {
    q: "Was ist im Bonusbereich?",
    a: "Ein passwortgeschützter Online-Bereich mit Kalorien-Rechner, Stoffwechsel-Reset-Check, 9 herunterladbaren PDFs (Checklisten, Arbeitsblätter, Übersichten), App-Empfehlungen und Biohacking-Tools. Der Bereich wird regelmäßig erweitert.",
  },
  {
    q: "Für wen ist das Buch geeignet?",
    a: "Für alle, die trotz Disziplin und Einsatz nicht die Ergebnisse bekommen, die sie erwarten. Egal ob Mann oder Frau, Anfänger oder Fortgeschrittene.",
  },
  {
    q: "Wie bekomme ich das Buch?",
    a: "Nach dem Kauf erhältst du sofort einen Download-Link per E-Mail. Das Buch ist ein PDF, das du auf jedem Gerät lesen kannst. Den Zugang zum Bonusbereich findest du im Buch.",
  },
];

const AnbotTestFAQ = () => {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Häufige Fragen
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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

export default AnbotTestFAQ;
