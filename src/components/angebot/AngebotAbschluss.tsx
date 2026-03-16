import { Button } from "@/components/ui/button";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotAbschluss = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
            Du brauchst vermutlich nicht noch mehr Härte.{" "}
            <span className="text-primary">Du brauchst einen Ansatz, der Deinen Körper mit einbezieht.</span>
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed mb-8">
            <p>
              Wenn Dein Stoffwechsel gerade blockiert wirkt, ist noch mehr Druck oft nicht die Lösung.
            </p>
            <p>
              Vielleicht ist genau jetzt der Punkt, an dem es nicht um mehr Disziplin geht –
              sondern um ein besseres Verständnis.
            </p>
            <p>
              Dieses Buch hilft Dir, die Zusammenhänge klarer zu sehen und endlich nicht mehr blind
              gegen Deinen Körper zu arbeiten.
            </p>
          </div>

          <Button variant="cta" size="xl" asChild className="mb-3">
            <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
              Jetzt Buch &amp; Bonus sichern
            </a>
          </Button>

          <p className="text-sm text-muted-foreground">
            Sofort verfügbar als E-Book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAbschluss;
