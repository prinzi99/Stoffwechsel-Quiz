import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

const AngebotAbschluss = () => {
  return (
    <section className="py-6 md:py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Final tension */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-2">
            Wenn Du das hier nicht verstehst, wird sich nichts &auml;ndern.
          </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-5">
            Du wirst wieder motiviert starten.<br />
            Wieder abbrechen.<br />
            Und wieder glauben, dass es an Dir liegt.
          </p>

          {/* Final price box */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-6 md:p-8 shadow-xl mb-6 inline-block w-full max-w-md">
            <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
            <p className="text-base md:text-lg text-foreground/80 mt-3 leading-relaxed">
              Oder Du verstehst jetzt,<br />
              warum Du immer wieder scheiterst.
            </p>
            <Button variant="cta" size="xl" asChild className="w-full text-base md:text-lg py-6 md:py-7 mt-4">
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Ich will raus aus diesem Kreislauf
              </a>
            </Button>
          </div>

          {/* Two options */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Du hast zwei Optionen:
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-2 leading-relaxed mb-5">
            <p>Weitermachen wie bisher &mdash;<br />und wieder scheitern.</p>
            <p className="font-medium text-foreground">Oder endlich verstehen,<br />was wirklich passiert.</p>
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
