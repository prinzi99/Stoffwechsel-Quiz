import { Calculator, Activity, Wrench, FileDown, Utensils, Plus, Check } from "lucide-react";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=promo";

const tools = [
  { icon: FileDown, title: "9 Downloads & Checklisten", text: "Stoffwechsel-Reset-Checkliste, Defizit-Phase-Checkliste, Alltags-Checkliste, Ernährungs-Beobachtungsblatt, Schlaf- & Erholungsprotokoll, Wochenübersicht Training & Energie, Makronährstoff-Übersicht, Kalorien-Startpunkt-Übersicht, Stoffwechsel-System-Übersicht." },
  { icon: Calculator, title: "Kalorien- & Makro-Rechner", text: "Berechne deinen individuellen Kalorienbedarf und deine Makroverteilung – einfach, schnell und auf dich abgestimmt." },
  { icon: Activity, title: "Stoffwechsel-Reset-Check", text: "Finde heraus, ob dein Stoffwechsel gerade im Sparmodus ist – und was du konkret dagegen tun kannst." },
  { icon: Wrench, title: "Biohacking-Tools & App-Empfehlungen", text: "Ernährungstracker, Fitnessuhr, Schlaftracking, CO₂-Messgerät – kuratierte Empfehlungen, die wirklich nützlich sind." },
  { icon: Utensils, title: "Beispielstrukturen Ernährung", text: "Keine starren Diätpläne – sondern flexible Orientierungsrahmen, die du an dein Leben anpassen kannst." },
  { icon: Plus, title: "Wachsender Bereich", text: "Neue Inhalte und Tools werden regelmäßig ergänzt. Der Bonusbereich wächst mit." },
];

const summary = [
  { text: "E-Book (10 Kapitel + Bonuskapitel)", value: "69,99 €" },
  { text: "Online-Bonusbereich mit Tools & Rechnern", value: "29,00 €" },
  { text: "9 herunterladbare PDFs (Checklisten, Arbeitsblätter, Übersichten)", value: "19,00 €" },
  { text: "Kuratierte App- & Tool-Empfehlungen", value: "9,00 €" },
  { text: "Regelmäßige Updates im Bonusbereich", value: "kostenlos" },
];

const ProfBBonus = () => {

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Nicht nur lesen – direkt anwenden
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Zum Buch gehört ein kompletter Online-Bonusbereich mit praktischen Tools und Materialien. Kein Marketing-Gimmick – echte Werkzeuge für deinen Alltag.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {tools.map((t, i) => (
              <div key={i} className="bg-background rounded-lg border border-border p-5">
                <t.icon className="w-7 h-7 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Summary box */}
          <div className="mt-10 bg-primary/5 border border-primary/15 rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Das bekommst du zusammen:</h3>
            <ul className="space-y-2 mb-6">
              {summary.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-foreground/80">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="flex-1">{item.text}</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border pt-4 mb-4">
              <p className="text-sm text-muted-foreground line-through mb-1">
                Gesamtwert: 91,99&nbsp;€
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                Dein Preis: 29,99&nbsp;€
              </p>
              <p className="text-sm text-muted-foreground">
                Exklusiv für Quiz-Teilnehmer
              </p>
            </div>
            <a
              href={DIGISTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 h-14 px-10"
            >
              Jetzt für 29,99&nbsp;€ statt <span className="line-through ml-1">69,99&nbsp;€</span> sichern
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfBBonus;
