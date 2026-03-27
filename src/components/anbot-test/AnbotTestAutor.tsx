const AnbotTestAutor = () => {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Wer schreibt das hier?
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-[120px] h-[120px] rounded-full bg-muted shrink-0 flex items-center justify-center">
              <span className="text-muted-foreground text-xs">Foto</span>
            </div>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Mein Name ist Philipp, ich bin 50 Jahre alt – verheiratet, zwei erwachsene Kinder, stressiger IT-Job plus Selbstständigkeit. Ich bin weder Arzt noch Ernährungswissenschaftler. Alles in diesem Buch stammt aus eigener Recherche und Praxis – als jemand, der selbst fast jeden Fehler gemacht hat, den das Buch beschreibt. Zu wenig gegessen, zu viel trainiert, eine Diät nach der anderen. Irgendwann habe ich aufgehört, härter zu kämpfen, und angefangen, das System zu verstehen. Dieses Buch ist das Ergebnis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnbotTestAutor;
