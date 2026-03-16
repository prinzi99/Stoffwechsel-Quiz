import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotAbschluss = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
            Vielleicht brauchst Du nicht noch mehr H&auml;rte.{" "}
            <span className="text-primary">
              Vielleicht brauchst Du endlich den richtigen Blick auf das, was in Deinem K&ouml;rper passiert.
            </span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed mb-8">
            <p>
              Wenn Dein Stoffwechsel gerade blockiert wirkt, f&uuml;hrt noch mehr Druck oft nur tiefer in denselben Kreislauf.
            </p>
            <p>
              Vielleicht ist jetzt nicht der Moment f&uuml;r noch mehr Verzicht.<br />
              Vielleicht ist es der Moment, an dem Du endlich verstehen solltest,
              warum Dein K&ouml;rper bisher nicht so reagiert hat, wie Du es erwartet hast.
            </p>
            <p className="font-medium text-foreground">
              Genau daf&uuml;r ist dieses Buch gemacht.
            </p>
          </div>

          <Button variant="cta" size="xl" asChild className="mb-3">
            <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
              Ich will verstehen, was meinen Stoffwechsel blockiert
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
