import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotAbschluss = () => {
  return (
    <section className="py-6 md:py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-5">
            Solange Du glaubst, dass Du Dich nur mehr zusammenrei&szlig;en musst,<br />
            wirst Du immer wieder genau hier landen.
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Du hast zwei Optionen:
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-2 leading-relaxed mb-5">
            <p>Weitermachen wie bisher &mdash; und wieder scheitern.</p>
            <p className="font-medium text-foreground">Oder endlich verstehen, was wirklich passiert.</p>
          </div>

          <Button variant="cta" size="xl" asChild className="text-base md:text-lg py-6 md:py-7 px-8 mb-3">
            <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
              Ich will raus aus diesem Kreislauf
            </a>
          </Button>

          <p className="text-sm text-muted-foreground">
            Sofort verf&uuml;gbar als E-Book
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAbschluss;
