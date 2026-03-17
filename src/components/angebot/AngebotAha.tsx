const AngebotAha = () => {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5 text-center">
            Was Dir bisher niemand so klar gesagt hat
          </h2>

          <div className="text-base md:text-lg text-foreground/80 space-y-3 leading-relaxed mb-5">
            <p>
              Dein K&ouml;rper ist nicht das Problem.<br />
              Er ist der Einzige in Deinem System,<br />
              der sich logisch verh&auml;lt.
            </p>
            <p>
              Du versuchst, mit Disziplin ein Problem zu l&ouml;sen,<br />
              das durch Disziplin &uuml;berhaupt erst entsteht.
            </p>
            <p>
              Je mehr Du Dich kontrollierst,<br />
              desto st&auml;rker wird genau das System,<br />
              das Dich sp&auml;ter wieder einbrechen l&auml;sst.
            </p>
            <p className="font-medium text-foreground">
              Dein R&uuml;ckfall ist kein Fehler.<br />
              Er ist das Ergebnis Deines Plans.
            </p>
            <p className="font-medium text-foreground">
              Du k&auml;mpfst nicht gegen Dich.<br />
              Du k&auml;mpfst gegen die falsche Ursache.
            </p>
          </div>

          <div className="border-l-4 border-primary/60 pl-4 py-2 mb-5">
            <p className="text-base md:text-lg text-foreground font-medium leading-snug">
              Und genau hier passiert der Denkfehler &hellip;<br />
              &hellip; den fast jeder macht.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-snug mt-2">
              Und der daf&uuml;r sorgt,<br />
              dass Du immer wieder von vorne anf&auml;ngst.
            </p>
          </div>

          <p className="text-base md:text-lg font-bold text-primary text-center">
            Du l&ouml;st nicht das Problem.<br />
            Du verst&auml;rkst es.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngebotAha;
