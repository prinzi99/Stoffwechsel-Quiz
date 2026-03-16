import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=promo";

const BuchHero = () => {
  return (
    <section className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
          {/* Book Cover */}
          <div className="w-56 sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
            <img
              src={bookCover}
              alt="Du bist nicht das Problem – Buchcover"
              className="w-full h-auto rounded-lg shadow-2xl"
              fetchPriority="high"
              width={800}
              height={1067}
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Du bist nicht das Problem.{" "}
              <span className="text-primary">
                Du kämpfst nur gegen etwas, das Du bisher falsch verstanden hast.
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Wenn Dein Stoffwechsel trotz Disziplin, gesunder Ernährung und Bewegung nicht reagiert, liegt das oft nicht an fehlendem Willen — sondern an einem Körper, der längst auf Stress, Mangel oder alte Diätmuster antwortet.
            </p>

            <div className="text-base text-foreground/80 space-y-3 mb-6 leading-relaxed text-left">
              <p>Du gibst Dir Mühe.</p>
              <p>Du willst es richtig machen.</p>
              <p>Du versuchst, über Ernährung, Bewegung und Kontrolle endlich voranzukommen.</p>
              <p><strong className="text-foreground">Und trotzdem bleibt das Ergebnis aus.</strong></p>
              <p>Nicht einmal unbedingt komplett.</p>
              <p>Aber zäh, frustrierend, widersprüchlich.</p>
              <p>Mal geht kurz etwas, dann steht wieder alles.</p>
              <p>Die Energie sinkt.</p>
              <p>Der Kopf wird enger.</p>
              <p>Und innerlich wächst der Verdacht, dass mit Dir etwas nicht stimmt.</p>
              <p className="font-semibold text-foreground pt-2">Genau da setzt dieses Buch an.</p>
              <p>Es erklärt Dir nicht oberflächlich, warum Abnehmen schwer sein kann.</p>
              <p>
                Es zeigt Dir, <strong className="text-foreground">warum Dein Körper auf eine Weise reagiert, die viele völlig falsch einordnen</strong> —
                und warum noch mehr Druck das Problem oft weiter verschärft.
              </p>
            </div>

            <div className="space-y-2 mb-6 text-left">
              {[
                "warum Dein Stoffwechsel trotz Einsatz blockieren kann",
                "welche typischen Denkfehler viele immer tiefer in den Stillstand führen",
                "wie Du verstehst, was Dein Körper gerade wirklich braucht",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Block */}
            <div className="bg-primary/5 rounded-xl p-5 mb-5 border border-primary/15">
              <p className="text-sm text-primary font-medium mb-2">
                Einführungspreis nur für kurze Zeit
              </p>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <span className="text-base text-muted-foreground/50 line-through">34,99&nbsp;€</span>
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">29,99&nbsp;€</span>
              </div>

              <Button
                variant="cta"
                size="xl"
                asChild
                className="w-full text-sm md:text-base py-5 mb-2"
              >
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Ja — ich will endlich verstehen, warum mein Stoffwechsel blockiert
                </a>
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Sofort verfügbar als E-Book
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchHero;
