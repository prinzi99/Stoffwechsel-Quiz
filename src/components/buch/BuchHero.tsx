import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=promo";

const BuchHero = () => {
  return (
    <section className="py-8 md:py-12 lg:py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Book Cover */}
          <div className="w-44 sm:w-52 lg:w-64 xl:w-72 flex-shrink-0">
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
          <div className="text-center lg:text-left min-w-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-bold text-foreground leading-tight mb-3">
              Du bist nicht das Problem.{" "}
              <span className="text-primary">
                Du bekämpfst nur die falsche Ursache.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-5 leading-relaxed">
              Wenn Dein Stoffwechsel trotz Disziplin, gesunder Ernährung und Bewegung nicht reagiert, liegt das oft nicht an fehlendem Willen — sondern an einem Körper, der längst auf Stress, Mangel oder alte Diätmuster antwortet.
            </p>

            <div className="text-sm sm:text-base text-foreground/80 space-y-1.5 mb-5 leading-relaxed text-left">
              <p>Du gibst Dir Mühe. Du willst es richtig machen.</p>
              <p><strong className="text-foreground">Und trotzdem wird es eher schwerer als leichter.</strong></p>
              <p>Die Waage stagniert. Die Energie sinkt. Der Frust wächst.</p>
              <p>Nicht unbedingt, weil Du zu wenig tust — sondern oft, weil Dein Körper längst nach einer anderen Logik arbeitet, als man Dir bisher erklärt hat.</p>
              <p className="font-semibold text-foreground pt-1">Genau darum geht es in diesem Buch:</p>
              <p>zu verstehen, warum Dein Stoffwechsel blockiert — und was sich ändern muss, damit Du nicht weiter gegen das falsche Problem kämpfst.</p>
            </div>

            <div className="space-y-1.5 mb-5 text-left">
              {[
                "warum Fortschritt trotz Disziplin ausbleiben kann",
                "welche Stoffwechsel-Blockaden im Hintergrund mitlaufen",
                "wie Du endlich verstehst, was Dein Körper gerade wirklich braucht",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Block */}
            <div className="bg-primary/5 rounded-xl p-4 sm:p-5 border border-primary/20">
              <p className="text-xs sm:text-sm text-primary font-semibold mb-1.5 tracking-wide uppercase">
                Einführungspreis nur für kurze Zeit
              </p>
              <div className="flex items-baseline gap-3 justify-center lg:justify-start mb-3">
                <span className="text-sm text-muted-foreground/50 line-through">34,99&nbsp;€</span>
                <span className="text-3xl md:text-4xl font-extrabold text-foreground">29,99&nbsp;€</span>
              </div>

              <Button
                variant="cta"
                size="xl"
                asChild
                className="w-full h-auto min-h-[3rem] whitespace-normal leading-snug text-sm md:text-base py-4 px-4 mb-1.5 shadow-xl"
              >
                <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                  Ja — ich will endlich verstehen, warum mein Stoffwechsel blockiert
                </a>
              </Button>
              <p className="text-xs text-muted-foreground text-center">
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
