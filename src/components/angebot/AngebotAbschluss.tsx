import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotAbschluss = () => {
  return (
    <section className="py-8 md:py-12 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
            Du brauchst nicht noch mehr H&auml;rte.{" "}
            <span className="text-primary">
              Du brauchst den richtigen Ansatz.
            </span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed mb-6">
            <p>
              Wenn Dein Stoffwechsel gerade blockiert wirkt, ist noch mehr Druck oft nicht die L&ouml;sung.
            </p>
            <p>
              Vielleicht ist jetzt nicht der Moment f&uuml;r noch mehr Verzicht.
            </p>
            <p>
              Sondern der Moment, endlich zu verstehen, was bei Dir wirklich im Hintergrund l&auml;uft.
            </p>
          </div>

          <Button variant="cta" size="xl" asChild className="text-base md:text-lg py-5 md:py-6 px-8 mb-3">
            <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
              Ja &mdash; ich will Buch &amp; Bonus jetzt sichern
            </a>
          </Button>

          <p className="text-sm text-muted-foreground">
            Sofort verf&uuml;gbar als E-Book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAbschluss;
