import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=quizrabatt";

const AngebotHero = () => {
  return (
    <section className="pt-4 pb-6 md:pt-8 md:pb-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-primary tracking-wide text-center mb-3">
            Nur f&uuml;r Teilnehmer des Stoffwechsel-Quiz
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-foreground leading-[1.1] text-center mb-2 md:mb-3 max-w-3xl mx-auto">
            Du bist nicht das Problem.{" "}
            <span className="text-primary">
              Du bek&auml;mpfst nur die falsche Ursache.
            </span>
          </h1>

          <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto mb-1">
            Du gibst Dir M&uuml;he. Mehr als die meisten.
          </p>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto mb-2">
            Und genau das ist das Problem.
          </p>

          <p className="text-lg md:text-xl font-bold text-primary text-center mb-5">
            Du scheiterst nicht trotz Disziplin.<br />
            Du scheiterst wegen ihr.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <div className="w-60 sm:w-72 md:w-80 lg:w-[24rem] flex-shrink-0">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-full h-auto rounded-xl shadow-2xl"
                fetchPriority="high"
                width={800}
                height={1067}
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="text-sm sm:text-base text-foreground/80 space-y-1 leading-relaxed mb-3 text-left">
                <p>Du ziehst wieder durch.</p>
                <p>3 Tage. 5 Tage. 2 Wochen.</p>
                <p>Und dann bricht es wieder weg.</p>
                <p>Nicht komplett. Aber genug, dass Du merkst: <strong className="text-foreground">Es h&auml;lt nicht.</strong></p>
                <p className="pt-1">Und jedes Mal kommt derselbe Gedanke:<br />
                <em className="text-foreground font-medium">Was stimmt eigentlich nicht mit mir?</em></p>
                <p className="pt-1">Die Waage bewegt sich kaum.<br />Die Energie sinkt.<br />Und Du f&auml;ngst wieder von vorne an.</p>
                <p className="pt-1">Nicht, weil Du zu schwach bist.<br />
                Sondern weil Dein K&ouml;rper l&auml;ngst gegen Deinen Plan arbeitet.</p>
              </div>

              <p className="text-base md:text-lg font-bold text-primary mb-3 text-left">
                Du l&ouml;st das falsche Problem.
              </p>

              <div className="space-y-1.5 mb-4 text-left">
                {[
                  "warum Dein K\u00F6rper aktuell gegen Dich arbeitet",
                  "warum Disziplin Dich tiefer ins Problem bringt",
                  "was sich \u00E4ndern muss, damit Dein System wieder reagiert",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{b}</span>
                  </div>
                ))}
              </div>

              <div className="bg-card border-2 border-primary/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
                <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                  <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-foreground">19,99&nbsp;&euro;</span>
                </div>
                <p className="text-sm text-foreground/70 mb-4">
                  Einmal verstehen &mdash;<br />statt immer wieder neu anfangen.
                </p>
                <Button variant="cta" size="xl" asChild className="w-full h-auto min-h-[3rem] whitespace-normal leading-snug text-sm lg:text-lg py-7 md:py-8 text-center">
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Ich will aufh&ouml;ren, mich selbst zu sabotieren
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotHero;
