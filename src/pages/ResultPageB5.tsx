import { Helmet } from "react-helmet-async";
import Header from '@/components/Header';

const ResultPageB5 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Header />

      {/* Main Content */}
      <main className="container-wide px-3 sm:px-5 md:px-8 py-10 md:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">

          {/* 1. Hero / Headline */}
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
              Du gibst dir Mühe.<br />
              <span className="text-primary">Und genau das reicht gerade nicht.</span>
            </h1>
            <p className="text-base md:text-lg text-foreground font-semibold mb-2">
              Dein Ergebnis: Der unterversorgte Fettstoffwechsel.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Das ist keine schlechte Nachricht. Es ist die Erklärung, auf die du wahrscheinlich seit Jahren wartest.
            </p>
          </header>

          {/* 2. Der Aha-Moment */}
          <section className="mb-12 md:mb-16">
            <p className="text-foreground leading-relaxed mb-5">
              Vielleicht kennst du das:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                'Du isst „gesund" und diszipliniert – trotzdem stagniert dein Gewicht.',
                'Du trainierst hart – aber deine Leistung wird schlechter, nicht besser.',
                'Du bist ständig müde, oft gereizt, frierst leicht.',
                'Und je mehr du dich anstrengst, desto weniger scheint zu passieren.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              Das Frustrierende daran ist nicht das Ausbleiben des Erfolgs. Es ist das Gefühl, alles richtig zu machen – und trotzdem gegen eine unsichtbare Wand zu laufen.
            </p>
            <p className="text-lg md:text-xl font-semibold text-primary leading-relaxed">
              Du machst nicht zu wenig. Du gibst deinem Körper zu wenig.
            </p>
          </section>

          {/* 3. Die Erklärung */}
          <section className="mb-12 md:mb-16">
            <p className="text-lg font-semibold text-foreground leading-relaxed mb-3">
              Dein Körper ist kein Taschenrechner. Er ist ein Überlebenskünstler.
            </p>
            <p className="text-foreground leading-relaxed mb-5">
              Wenn du über längere Zeit weniger Energie zuführst, als du verbrauchst – vor allem bei hohem Trainingspensum –, dann zieht dein Körper nicht einfach mit. Er schaltet in den Sparmodus. Nicht, weil du versagst. Sondern weil es biologisch klug ist.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Konkret passiert das:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">
                  Dein Schilddrüsenhormon <strong className="text-foreground">T3 sinkt</strong> → dein Stoffwechsel wird gedrosselt.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">
                  Deine unbewusste Alltagsbewegung sinkt → du verbrauchst <strong className="text-foreground">automatisch weniger</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">
                  Dein Hungerhormon steigt, dein Sättigungshormon fällt → <strong className="text-foreground">Heißhunger, der keine Willensschwäche ist</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">
                  Bei Frauen kann der Zyklus <strong className="text-foreground">unregelmäßig werden oder ausbleiben</strong> – ein deutliches Warnsignal.
                </span>
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              Je härter du kämpfst, desto stärker wehrt sich dein System. Das ist kein Charakterproblem. Es ist Biologie.
            </p>
            <p className="text-lg md:text-xl font-semibold text-primary leading-relaxed">
              Du bist nicht das Problem. Dein Körper reagiert nur genau richtig – auf die falschen Signale.
            </p>
          </section>

          {/* 4. Die Wende */}
          <section className="mb-12 md:mb-16">
            <p className="text-foreground leading-relaxed mb-4">
              Die Lösung ist das Gegenteil von dem, was du wahrscheinlich gerade denkst.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Nicht weniger. Mehr.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Mehr Energie, mehr Erholung, mehr Versorgung – damit dein Körper wieder Sicherheit spürt und aufhört, jede Kalorie zu bunkern. Erst dann gibt er seine Reserven frei.
            </p>
            <p className="text-foreground leading-relaxed">
              Das klingt widersprüchlich. Ist es aber nicht – und genau das erkläre ich dir in den nächsten Tagen Schritt für Schritt.
            </p>
          </section>

          {/* 5. Übergang zum Postfach (einziger CTA) */}
          <section className="mb-12 md:mb-16">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Dein persönlicher Reset-Plan wartet in deinem Postfach.
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Ich habe dir gerade eine E-Mail geschickt. Darin findest du deinen Reset-Plan für den unterversorgten Stoffwechsel – als Geschenk, mit den ersten konkreten Schritten.
              </p>
              <p className="text-lg font-semibold text-primary leading-relaxed">
                👉 Schau jetzt in dein Postfach (auch im Spam-Ordner) und bestätige kurz deine Adresse – dann liegt alles für dich bereit.
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <span className="mx-2">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </p>
      </footer>
    </div>
  );
};

export default ResultPageB5;
