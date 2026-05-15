const valueStack: { emoji: string; text: string; desc?: string; value: string }[] = [
  { emoji: '📖', text: 'E-Book "Du bist nicht das Problem" (10 Kapitel + Bonuskapitel)', value: '29,99 €' },
  { emoji: '🔧', text: 'Online-Bonusbereich mit Tools & Rechnern', value: '20,00 €' },
  { emoji: '🎁', text: '9 herunterladbare PDFs (Checklisten, Arbeitsblätter, Übersichten)', value: '15,00 €' },
  { emoji: '📱', text: 'Kuratierte App- & Tool-Empfehlungen', value: '5,00 €' },
  { emoji: '↩️', text: 'Regelmäßige Updates im Bonusbereich', value: 'kostenlos' },
];

const BuchAllgemeinValueStack = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
            Alles, was du bekommst:
          </h2>
          <div className="bg-accent/5 border border-primary/20 rounded-xl p-5 md:p-6">
            <ul className="space-y-3 mb-5">
              {valueStack.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span className="flex-shrink-0 text-lg leading-none mt-0.5">{item.emoji}</span>
                  <div className="flex-1">
                    <span className="leading-snug block">{item.text}</span>
                    {item.desc && (
                      <span className="text-sm text-muted-foreground leading-snug block mt-0.5">{item.desc}</span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap font-medium self-start">
                    {item.value === 'kostenlos' ? 'kostenlos' : `Wert: ${item.value}`}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border pt-4 text-center">
              <p className="text-sm text-muted-foreground line-through mb-1">
                Gesamtwert: 69,99&nbsp;€
              </p>
              <p className="text-3xl md:text-4xl font-extrabold text-secondary mb-1">
                Dein Preis heute: 59,99&nbsp;€
              </p>
              <p className="text-sm font-semibold text-secondary">Du sparst 10€ (14% Rabatt)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchAllgemeinValueStack;
