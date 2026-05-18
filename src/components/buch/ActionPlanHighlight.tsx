type Profile = "A" | "B" | "C";

const CONTENT: Record<Profile, { subtitle: string; points: string[] }> = {
  A: {
    subtitle: "Speziell für deinen gestressten Stoffwechsel",
    points: [
      "Die Cortisol-Reset-Formel – so brichst du den Stress-Fett-Kreislauf",
      "Das HPA-Achsen-Protokoll für hormonelle Balance",
      "Entscheidungsarchitekturen für stressige Alltags-Situationen",
      "Schlaf-Optimierung speziell für Stress-Stoffwechsel",
    ],
  },
  B: {
    subtitle: "Speziell für deinen unterversorgten Stoffwechsel",
    points: [
      "Die Energiebedarf-Formel – so berechnest du deinen echten Bedarf",
      "Das Reverse-Diet-Protokoll – Schritt für Schritt aus dem Sparmodus",
      "Schilddrüsen-Support: Welche Mikronährstoffe T3/T4 ankurbeln",
      "Zyklusmonitoring – hormonelle Signale richtig deuten",
    ],
  },
  C: {
    subtitle: "Speziell für deinen überangepassten Stoffwechsel",
    points: [
      "Das MATADOR-Protokoll – wissenschaftlich validierte Diät-Pausen",
      "Set-Point-Strategien gegen metabolische Anpassung",
      "Das Flexibilitäts-Framework gegen Diät-Resistenz",
      "Metabolic-Reset-Techniken für langfristige Erholung",
    ],
  },
};

const ActionPlanHighlight = ({ profile }: { profile: Profile }) => {
  const { subtitle, points } = CONTENT[profile];
  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <div className="bg-gradient-to-br from-[#9b87f5]/10 via-[#f0ecff] to-[#9b87f5]/10 rounded-2xl p-8 md:p-10 border-2 border-[#9b87f5]/30 shadow-lg relative overflow-hidden">
        <div className="flex justify-center mb-6">
          <span className="bg-[#9b87f5] text-white text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider">
            🎯 Exklusiv für dein Profil
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
          + Dein persönlicher Aktionsplan
        </h3>
        <p className="text-center text-lg text-[#9b87f5] font-semibold mb-6">
          {subtitle}
        </p>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Zusätzlich zum Buch bekommst du einen 10-seitigen Aktionsplan –{" "}
          <strong>maßgeschneidert für dein Stoffwechsel-Profil</strong>. Kein
          Füllstoff. Nur das, was für dich jetzt relevant ist.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {points.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
            >
              <span className="text-2xl">✅</span>
              <p className="text-gray-800 font-medium text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="inline-block bg-white text-[#9b87f5] font-bold text-sm px-6 py-2 rounded-full border border-[#9b87f5]/30">
            Im Wert von 27,00 € – heute inklusive
          </span>
        </div>
      </div>
    </section>
  );
};

export default ActionPlanHighlight;
