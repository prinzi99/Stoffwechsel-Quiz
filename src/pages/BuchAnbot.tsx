import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Brain, Battery, Dumbbell, TrendingDown, RotateCcw, CheckCircle2 } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup2.jpeg";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804";

const Buch = () => {
  const scrollToKauf = () => {
    document.getElementById("kaufen")?.scrollIntoView({ behavior: "smooth" });
  };

  const bookFeatures = [
    { icon: TrendingDown, text: "Warum viele Diäten langfristig scheitern" },
    { icon: Brain, text: "Wie dein Stoffwechsel wirklich funktioniert" },
    { icon: Battery, text: "Welche Rolle Stress und Schlaf spielen" },
    { icon: Dumbbell, text: "Warum mehr Training nicht automatisch mehr Fettverlust bedeutet" },
    { icon: RotateCcw, text: "Wie der sogenannte \u201ESparmodus\u201C entsteht" },
    { icon: BookOpen, text: "Wie du dein System wieder stabilisieren kannst" },
  ];

  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Das Buch | Philipp's Biohack</title>
        <meta name="description" content="Warum dein Stoffwechsel blockiert und wie du ihn wieder in Bewegung bringst. Das E-Book von Philipp Prinz." />
      </Helmet>
      <Header />

      <main>
        {/* Section 1 – Hero */}
        <section className="min-h-[90dvh] flex items-center section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Book Cover */}
              <div className="w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0">
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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                  Du bist nicht
                  <span className="text-primary"> das Problem</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Warum dein Stoffwechsel blockiert –<br />
                  und wie du ihn wieder in Bewegung bringst.
                </p>

                <div className="text-base md:text-lg text-foreground/80 space-y-4 mb-8 leading-relaxed">
                  <p>
                    Du ernährst dich bewusst.<br />
                    Du bewegst dich regelmäßig.<br />
                    Und trotzdem passiert… nichts.
                  </p>
                  <p>
                    Die Waage bewegt sich kaum.<br />
                    Die Energie sinkt.<br />
                    Der Frust wächst.
                  </p>
                  <p className="font-medium text-foreground">
                    Vielleicht liegt das Problem nicht bei dir –<br />
                    sondern im System.
                  </p>
                </div>

                <Button
                  variant="cta"
                  size="xl"
                  asChild
                  className="w-full sm:w-auto mb-3"
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt kaufen
                  </a>
                </Button>

                <p className="text-sm text-muted-foreground">
                  Regulärer Preis: <span className="font-semibold">34,99 €</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Problem */}
        <section className="section-padding bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Warum so viele Diäten scheitern
              </h2>

              <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
                <p>
                  Die meisten Strategien folgen einer einfachen Logik:
                </p>
                <p className="font-medium text-foreground">
                  Weniger essen.<br />
                  Mehr bewegen.<br />
                  Mehr Disziplin.
                </p>
                <p>Kurzfristig funktioniert das.</p>
                <p>Doch dein Körper reagiert.</p>
                <p>Er passt sich an.</p>
                <p>
                  Der Energieverbrauch sinkt.<br />
                  Der Hunger steigt.<br />
                  Der Fortschritt stagniert.
                </p>
                <p className="text-lg md:text-xl font-semibold text-foreground pt-4">
                  Nicht weil du versagt hast.
                </p>
                <p className="text-lg md:text-xl font-semibold text-primary">
                  Sondern weil dein Stoffwechsel ein biologisches System ist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 – Buchvorstellung */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-10">
                Was dich in diesem Buch erwartet
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                {bookFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border"
                  >
                    <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base md:text-lg text-foreground/90 leading-snug">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 – Über den Autor */}
        <section className="section-padding bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Über den Autor
              </h2>

              <div className="text-base md:text-lg text-foreground/80 space-y-4 leading-relaxed">
                <p className="font-medium text-foreground text-lg md:text-xl">
                  Mein Name ist Philipp.
                </p>
                <p>
                  Ich bin kein Ernährungs-Guru und kein Influencer.<br />
                  Ich komme aus der IT und habe begonnen, Fettverlust wie ein System zu analysieren.
                </p>
                <p>
                  Nach vielen eigenen Experimenten, Recherchen und Studien wurde mir klar:
                </p>
                <p className="font-semibold text-foreground">
                  Das Problem ist oft nicht mangelnde Disziplin.
                </p>
                <p className="font-semibold text-primary">
                  Das Problem ist ein System, das unter Druck steht.
                </p>
                <p>
                  Dieses Buch erklärt die Zusammenhänge verständlich und praxisnah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 – Bonus Hinweis */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Praktische Hilfsmittel zum Buch
              </h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Im Buch erfährst du nicht nur die Hintergründe, sondern auch praktische Ansätze, 
                die dir helfen können, deinen Stoffwechsel besser zu verstehen und dein System 
                Schritt für Schritt zu stabilisieren.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 – Kaufsektion */}
        <section id="kaufen" className="section-padding bg-section-alt">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-lg">
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                  E-Book kaufen
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Du bist nicht das Problem
                </h2>
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  34,99 €
                </p>

                <Button
                  variant="cta"
                  size="xl"
                  asChild
                  className="w-full mb-6"
                >
                  <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                    Jetzt kaufen
                  </a>
                </Button>

                <div className="space-y-2 text-sm md:text-base text-foreground/70">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Sofort als E-Book verfügbar</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Verständlich erklärt</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Ohne komplizierten Fachjargon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 – Quiz Hinweis */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Du bist dir noch unsicher?
              </h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                Wenn du zuerst herausfinden möchtest, welche Faktoren deinen Stoffwechsel 
                aktuell beeinflussen könnten, kannst du auch zuerst das Stoffwechsel-Quiz machen.
              </p>
              <Button
                variant="ctaSecondary"
                size="xl"
                asChild
                className="w-full sm:w-auto"
              >
                <Link to="/quiz">
                  Stoffwechsel-Quiz starten
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Medizinischer Hinweis */}
        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
              Die Inhalte dienen ausschließlich zu Informationszwecken und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Buch;
