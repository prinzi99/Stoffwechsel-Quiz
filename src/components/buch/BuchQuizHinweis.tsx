import { Button } from "@/components/ui/button";

const QUIZ_URL = "https://stoffwechsel.philippsbiohack.de";

const BuchQuizHinweis = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Du willst zuerst wissen, welches Muster bei Dir im Vordergrund steht?
          </h2>

          <div className="text-base md:text-lg text-foreground/80 leading-relaxed space-y-3 mb-8">
            <p>Dann mach zuerst das Stoffwechsel-Quiz.</p>
            <p>
              Dort bekommst Du eine erste Einordnung, was Deinen Stoffwechsel aktuell am ehesten blockiert.
            </p>
            <p>
              Und falls Du danach tiefer einsteigen willst, kannst Du Dir das Buch über das Quiz sogar zu einem Sonderpreis sichern.
            </p>
          </div>

          <Button
            variant="ctaSecondary"
            size="xl"
            asChild
            className="w-full sm:w-auto"
          >
            <a href={QUIZ_URL} target="_blank" rel="noopener noreferrer">
              Stoffwechsel-Quiz starten
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-3">
            Erst Klarheit bekommen, dann gezielt entscheiden
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuchQuizHinweis;
