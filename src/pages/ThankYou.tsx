import { Helmet } from 'react-helmet-async';
import { CheckCircle2, Mail, Search, ShieldCheck, Clock } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Fast geschafft! | Philipp's Biohack</title>
        <meta name="description" content="Deine Stoffwechsel-Auswertung ist unterwegs. Bestätige jetzt Deine E-Mail." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="flex-grow flex items-center justify-center px-4 py-10 md:py-16">
        <div className="w-full max-w-xl space-y-6">

          {/* SECTION 1 – Erfolgsanzeige */}
          <section className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/15 mb-6">
              <CheckCircle2 className="w-10 h-10 text-secondary" />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-3">
              Fast geschafft – Deine Stoffwechsel-Auswertung wartet auf Dich
            </h1>

            {/* Fortschrittsanzeige */}
            <p className="text-xs text-muted-foreground/70 mb-5">
              Schritt 1 von 2 – Bitte bestätige kurz Deine E-Mail-Adresse
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
              In wenigen Sekunden findest Du die E-Mail mit dem Link zu Deiner persönlichen Stoffwechsel-Analyse in Deinem Postfach.
            </p>

            {/* Absender-Hinweis */}
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">Halte Ausschau nach einer E-Mail von</p>
              <p className="text-lg md:text-xl font-bold text-foreground mt-1">Philipps Biohack</p>
            </div>

            {/* Geduld-Hinweis */}
            <div className="flex flex-col items-center mt-3 text-xs text-muted-foreground/60 gap-0.5">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Die E-Mail kommt normalerweise innerhalb von wenigen Sekunden an.</span>
              </div>
              <span>In seltenen Fällen kann es bis zu 60 Sekunden dauern. Bitte lasse diese Seite kurz geöffnet.</span>
            </div>
          </section>

          {/* SECTION 2 – Handlungsschritt */}
          <section className="bg-primary/5 border border-primary/15 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>

              <h2 className="text-lg md:text-xl font-bold text-foreground mb-2">
                Öffne jetzt die E-Mail und bestätige Deine Auswertung
              </h2>

              <p className="text-muted-foreground mb-4">
                Sobald Du auf den Link klickst, erhältst Du sofort Zugriff auf Deine persönliche Stoffwechsel-Analyse.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground/80">
                <Search className="w-4 h-4 flex-shrink-0" />
                <p>Falls die E-Mail nicht sofort ankommt, prüfe bitte auch Deinen Spam-, Werbe- oder „Promotions"-Ordner (Gmail).</p>
              </div>
            </div>
          </section>

          {/* SECTION 3 – Erwartungsaufbau */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-4">
              Das erhältst Du nach der Bestätigung:
            </h3>

            <ul className="space-y-3">
              {[
                'Deine vollständige Stoffwechsel-Analyse',
                'Konkrete Hinweise, was Deinen Stoffwechsel aktuell blockieren könnte',
                'Ein kostenloses PDF mit Deinem persönlichen Stoffwechsel-Profil',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 4 – Micro Disclosure */}
          <p className="text-xs text-muted-foreground/70 text-center leading-relaxed max-w-md mx-auto">
            Mit dem Klick bestätigst Du Deine E-Mail-Adresse, damit ich Dir Deine persönliche Stoffwechsel-Auswertung sowie gelegentlich hilfreiche Tipps rund um Ernährung und Stoffwechsel senden darf. Du kannst Dich selbstverständlich jederzeit wieder abmelden.
          </p>

          {/* SECTION 5 – Vertrauenshinweis */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
            <ShieldCheck className="w-4 h-4 text-secondary flex-shrink-0" />
            <p>Kein Spam. Deine Daten sind sicher und werden nicht an Dritte weitergegeben.</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ThankYou;
