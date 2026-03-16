import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotAbschluss = () => {
  return (
    <section className="py-6 md:py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Du musst nicht noch h&auml;rter werden.{" "}
            <span className="text-primary">
              Du musst endlich verstehen, warum Dein K&ouml;rper blockiert.
            </span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed mb-5">
            <p>
              Wenn Dein Stoffwechsel gerade festh&auml;ngt, ist noch mehr Druck oft genau das, was alles weiter versch&auml;rft.
            </p>
            <p>
              Vielleicht brauchst Du keinen neuen Verzicht. Sondern endlich die richtige Erkl&auml;rung.
            </p>
          </div>

          <Button variant="cta" size="xl" asChild className="text-base md:text-lg py-6 md:py-7 px-8 mb-3">
            <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
              Ja &mdash; ich will Buch &amp; Bonus jetzt sichern
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
