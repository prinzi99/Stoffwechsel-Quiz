import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Lock, Calculator, Activity, Wrench, FileDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bookCoverMockup from "@/assets/book-cover-mockup.jpeg";

const BONUS_PASSWORD = "bonus";

const previewCards = [
  {
    icon: Activity,
    title: "Stoffwechsel-Reset Check",
    text: "Eine schnelle Einschätzung, ob dein System aktuell eher unter Belastung steht.",
  },
  {
    icon: Calculator,
    title: "Kalorien- & Makro-Rechner",
    text: "Berechne deinen geschätzten Kalorienbedarf und eine mögliche Makroverteilung.",
  },
  {
    icon: Wrench,
    title: "Biohacking & Tools",
    text: "Empfohlene Apps, Tracker und Geräte zur besseren Selbstbeobachtung.",
  },
  {
    icon: FileDown,
    title: "Downloads & Checklisten",
    text: "Zusätzliche Materialien und Vorlagen zum Buch.",
  },
];

const BuchBonus = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.trim().toLowerCase() === BONUS_PASSWORD) {
      setLoading(true);
      setTimeout(() => {
        navigate("/buch/bonus/intern");
      }, 800);
    } else {
      setError("Das Passwort ist nicht korrekt. Bitte prüfe deine Eingabe.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bonusbereich zum Buch | Philipp's Biohack</title>
        <meta
          name="description"
          content="Exklusive Bonustools zum Buch - Stoffwechsel-Tools, Rechner und Ressourcen für Leser."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        <section className="section-padding pb-8 md:pb-12">
          <div className="container-narrow">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
              {/* Left: Text + Password */}
              <div className="space-y-5 text-center md:text-left">
                <Badge variant="secondary" className="text-xs tracking-wide uppercase px-3 py-1">
                  Bonusbereich zum Buch
                </Badge>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Die Stoffwechsel-Tools zum Buch
                </h1>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Dieser Bereich enthält zusätzliche Tools, Rechner und Ressourcen, die das Buch{" "}
                  <span className="text-foreground font-medium">&bdquo;Du bist nicht das Problem&ldquo;</span>{" "}
                  ergänzen. Der Zugang ist ausschließlich für Leser des Buches gedacht.
                </p>

                <Card className="border-border/60 shadow-sm max-w-md mx-auto md:mx-0">
                  <CardContent className="p-5 md:p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Lock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">Passwortgeschützt</span>
                      </div>

                      <Input
                        type="password"
                        placeholder="Passwort eingeben"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError("");
                        }}
                        className="h-12"
                      />

                      {error && <p className="text-sm text-destructive">{error}</p>}
                      {loading && <p className="text-sm text-secondary font-medium">Zugang wird geöffnet…</p>}

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="w-full"
                        disabled={loading || !password.trim()}
                      >
                        {loading ? "Zugang wird geöffnet…" : "Bonusbereich öffnen"}
                        {!loading && <ArrowRight className="w-4 h-4 ml-1" />}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Das Passwort findest du im Buch.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right: Book Mockup */}
              <div className="hidden md:block max-w-[260px] lg:max-w-[300px]">
                <img
                  src={bookCoverMockup}
                  alt="Du bist nicht das Problem – Buchcover"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Preview Cards */}
        <section className="section-padding bg-muted/30">
          <div className="container-narrow space-y-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
              Im Bonusbereich findest du unter anderem:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {previewCards.map((card) => (
                <Card
                  key={card.title}
                  className="border-border/40 bg-card/80 shadow-none hover:shadow-sm transition-shadow"
                >
                  <CardContent className="p-5 md:p-6 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center pt-4">
              Nur für Leser des Buches vorgesehen.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BuchBonus;
