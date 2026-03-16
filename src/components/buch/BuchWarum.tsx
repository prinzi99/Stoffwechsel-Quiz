const BuchWarum = () => {
  return (
    <section className="py-12 md:py-16 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
            Warum so viele Menschen sich immer mehr anstrengen — und trotzdem nicht vorankommen
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed">
            <p>Fast alle bekommen irgendwann dieselbe Empfehlung: weniger essen, mehr verbrennen, konsequenter sein.</p>
            <p>Das klingt logisch. Und manchmal funktioniert es sogar kurz.</p>
            <p>
              <strong className="text-foreground">Aber wenn Dein Körper bereits auf Stress, Mangel oder wiederholte Diäten reagiert, wird genau diese Logik oft selbst zum Problem.</strong>
            </p>
            <p>Dann wird Fortschritt nicht leichter, sondern schwerer.</p>
            <p>Der Hunger steigt. Die Energie sinkt. Die Geduld wird dünner. Und der Frust nimmt zu, obwohl Du Dir eigentlich noch mehr Mühe gibst.</p>
            <p>An diesem Punkt glauben viele, sie müssten einfach noch disziplinierter werden.</p>
            <p><strong className="text-foreground">In Wahrheit fehlt oft nicht Disziplin.</strong></p>
            <p className="font-semibold text-primary text-lg md:text-xl">
              In Wahrheit arbeitet Dein Körper längst auf Schutz.
            </p>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-lg md:text-xl font-bold text-primary text-center">
                Genau deshalb hilft Dir dieses Buch, das Problem endlich an der richtigen Stelle zu verstehen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchWarum;
