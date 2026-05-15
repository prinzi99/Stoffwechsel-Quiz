import { Calculator, Activity, Wrench, FileDown, Utensils, Plus } from "lucide-react";

const tools = [
  { icon: FileDown, title: "9 Downloads & Checklisten", text: "Stoffwechsel-Reset-Checkliste, Defizit-Phase-Checkliste, Alltags-Checkliste, Ernährungs-Beobachtungsblatt, Schlaf- & Erholungsprotokoll, Wochenübersicht Training & Energie, Makronährstoff-Übersicht, Kalorien-Startpunkt-Übersicht, Stoffwechsel-System-Übersicht." },
  { icon: Calculator, title: "Kalorien- & Makro-Rechner", text: "Berechne deinen individuellen Kalorienbedarf und deine Makroverteilung – einfach, schnell und auf dich abgestimmt." },
  { icon: Activity, title: "Stoffwechsel-Reset-Check", text: "Finde heraus, ob dein Stoffwechsel gerade im Sparmodus ist – und was du konkret dagegen tun kannst." },
  { icon: Wrench, title: "Biohacking-Tools & App-Empfehlungen", text: "Ernährungstracker, Fitnessuhr, Schlaftracking, CO₂-Messgerät – kuratierte Empfehlungen, die wirklich nützlich sind." },
  { icon: Utensils, title: "Beispielstrukturen Ernährung", text: "Keine starren Diätpläne – sondern flexible Orientierungsrahmen, die du an dein Leben anpassen kannst." },
  { icon: Plus, title: "Wachsender Bereich", text: "Neue Inhalte und Tools werden regelmäßig ergänzt. Der Bonusbereich wächst mit." },
];


const BuchAllgemeinBonus = () => {
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

        </div>
      </div>
    </section>
  );
};

export default BuchAllgemeinBonus;
