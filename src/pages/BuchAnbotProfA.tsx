import RsSalesPage, { RsConfig } from "@/components/anbot-rs/RsSalesPage";

const config: RsConfig = {
  route: "/buch/anbot-prof-a",
  trackTitle: "Buch Angebot Prof A",
  storageKey: "profA_timer_end",
  digistoreUrl: "https://www.digistore24.com/product/675804?voucher=specialdeal",
  digistoreProductId: 693088,
  accent: "orange",
  heroGradientFrom: "from-white",
  heroGradientTo: "to-gray-100",
  overline: "FÜR FRAUEN MIT GESTRESSTEM STOFFWECHSEL",
  headline: "Dein Körper ist nicht kaputt – er ist im Überlebensmodus.",
  subheadline:
    "Cortisol regiert deinen Stoffwechsel. Jede Diät hat den Stress verschlimmert. Aber dein Körper WILL heilen – er braucht nur den richtigen Plan.",
  heroBullets: [
    "Du machst alles richtig – aber die Waage bewegt sich nicht",
    "Abends überkommt dich der Heißhunger, obwohl du den ganzen Tag stark warst",
    "Du schläfst schlecht, bist ständig gereizt und fühlst dich aufgedunsen",
    "Dein Arzt sagt 'alles normal' – aber du WEISST, dass etwas nicht stimmt",
    "Je weniger du isst, desto MEHR scheint dein Körper festzuhalten",
  ],
  heroPositive: "✅ Das ist nicht deine Schuld. Es ist dein Cortisol. Und wir können das ändern.",
  cta1: "JA! Ich will meinen Stoffwechsel aus dem Stressmodus befreien →",
  urgencyText: "Sonderaktion endet in [TIMER] – Spare 69% auf deinen persönlichen Stoffwechsel-Reset!",
  problemTitle: "Kennst du das auch?",
  problemCards: [
    { icon: "😫", text: "Du zählst Kalorien, trackst jeden Bissen – aber dein Körper macht einfach nicht mit." },
    { icon: "😴", text: "Du wachst morgens schon müde auf und brauchst 3 Kaffee um zu funktionieren." },
    { icon: "🍕", text: "Abends um 21 Uhr steht der Heißhunger vor der Tür – und er gewinnt. Immer." },
    { icon: "🤯", text: "Du fragst dich: 'Was stimmt mit mir nicht?' – während alle anderen scheinbar mühelos abnehmen." },
  ],
  problemFooter:
    "Das Problem ist NICHT dein Wille. Das Problem ist, dass dein Cortisol-Level deinen Stoffwechsel als Geisel hält.",
  planBadge: "🎯 Dein persönlicher Aktionsplan",
  planTitle: "Nicht irgendein Plan. DEIN Plan.",
  planIntro:
    "Basierend auf deiner Analyse haben wir einen maßgeschneiderten 90-Tage-Aktionsplan für deinen gestressten Stoffwechsel erstellt. Kein Rätselraten. Kein 'probier mal dies'. Sondern Schritt-für-Schritt Anweisungen, die auf DEINE Situation zugeschnitten sind.",
  planPhases: [
    { icon: "📋", title: "Phase 1: Cortisol-Reset", text: "Die ersten 30 Tage: Wir beruhigen deine HPA-Achse und stoppen den Teufelskreis." },
    { icon: "🔥", title: "Phase 2: Stoffwechsel-Aktivierung", text: "Tag 31-60: Dein Körper lernt wieder, Fett als Energie zu nutzen." },
    { icon: "🎯", title: "Phase 3: Nachhaltige Ergebnisse", text: "Tag 61-90: Dein neuer Stoffwechsel wird zum Autopiloten." },
  ],
  cta2: "Jetzt Aktionsplan + Buch sichern – nur 29,99€ statt 96,99€ →",
  imagineList: [
    "...du wachst morgens auf und fühlst dich zum ersten Mal seit Jahren AUSGESCHLAFEN",
    "...der Heißhunger am Abend ist einfach... weg",
    "...du steigst auf die Waage und die Zahl geht endlich wieder runter – ohne Hungern",
    "...deine Freundinnen fragen 'Was machst du anders? Du strahlst so!'",
    "...du ziehst die Jeans an, die seit 2 Jahren im Schrank hängt – und sie PASST",
    "...du fühlst dich wieder wie DU. Nicht wie eine müde, gestresste Version von dir.",
  ],
  imagineFooter: "Das ist keine Fantasie. Das ist das Ergebnis, wenn dein Cortisol endlich im Gleichgewicht ist.",
  valueRows: [
    { label: "Das komplette Stoffwechsel-Buch", value: "29,99€" },
    { label: "Dein persönlicher 90-Tage-Aktionsplan (Profil A)", value: "47,00€" },
    { label: "Detaillierte Stoffwechsel-Analyse", value: "20,00€" },
  ],
  testimonialTitle: "Das sagen Frauen, die ihren Stoffwechsel befreit haben:",
  testimonials: [
    {
      initials: "SK", avatarBg: "bg-pink-500", name: "Sandra K., 42",
      text: "Ich habe jahrelang gegen meinen Körper gekämpft. Nach 6 Wochen mit dem Aktionsplan hat sich alles verändert. Kein Heißhunger mehr, endlich wieder Energie. 8 kg weg – und sie bleiben weg!",
      badge: "-8 kg in 12 Wochen", badgeColor: "bg-green-100 text-green-700",
    },
    {
      initials: "ML", avatarBg: "bg-purple-500", name: "Marion L., 38",
      text: "Mein Arzt war sprachlos. Meine Blutwerte haben sich komplett normalisiert. Und das Beste: Ich esse MEHR als vorher und nehme trotzdem ab. Hätte ich nie für möglich gehalten.",
      badge: "Blutwerte normalisiert", badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      initials: "TH", avatarBg: "bg-teal-500", name: "Tanja H., 51",
      text: "Nach den Wechseljahren dachte ich, es geht nicht mehr. Falsch gedacht! Der Cortisol-Reset war ein Gamechanger. Ich schlafe wieder durch und der Bauchspeck schmilzt.",
      badge: "-6 kg, besserer Schlaf", badgeColor: "bg-green-100 text-green-700",
    },
  ],
  cta3: "Ich will die gleichen Ergebnisse! → Jetzt für nur 29,99€ sichern",
  cta3Sub: "Über 2.000 Frauen vertrauen uns bereits",
  objections: [
    { q: "Ich habe schon alles versucht...", a: "Genau DAS ist der Punkt. Die meisten Diäten ignorieren dein Cortisol komplett. Sie geben dir weniger Kalorien und mehr Bewegung – genau das Gegenteil von dem, was dein gestresster Stoffwechsel braucht. Unser Ansatz ist fundamental anders, weil er an der URSACHE ansetzt." },
    { q: "Ich bin schon über 40/50...", a: "Dein Alter ist kein Hindernis – es ist ein Grund MEHR, jetzt zu handeln. Je länger dein Cortisol erhöht bleibt, desto schwerer wird es. Unsere älteste Erfolgsgeschichte ist 67. Es ist nie zu spät." },
    { q: "Ich habe keine Zeit für komplizierte Programme...", a: "Der Aktionsplan ist in 10 Minuten am Tag umsetzbar. Keine komplizierten Rezepte, kein Fitness-Studio nötig. Wenn du eine Tasse Tee kochen kannst, kannst du diesen Plan umsetzen." },
    { q: "29,99€ ist mir zu viel...", a: "Eine einzige Packung Abnehm-Shakes kostet mehr. Ein Ernährungsberater-Termin kostet 80-150€. Für weniger als ein Abendessen bekommst du einen kompletten 90-Tage-Plan, der auf DICH zugeschnitten ist. Plus 30-Tage-Geld-zurück-Garantie." },
  ],
  finalTitle: "Die Entscheidung liegt bei dir.",
  finalText:
    "Du kannst diese Seite schließen und morgen genauso aufwachen wie heute. Müde. Frustriert. Im Kampf mit deinem Körper. ODER du investierst 29,99€ in dich selbst und gibst deinem Stoffwechsel endlich das, was er braucht.",
  finalCta: "JA – ICH INVESTIERE IN MICH! Jetzt für 29,99€ statt 96,99€ →",
  finalTimerColor: "text-red-400",
  ps: "Erinnerst du dich an das Gefühl, als du das letzte Mal richtig gut geschlafen hast? Als du morgens aufgewacht bist und dich LEBENDIG gefühlt hast? Der Cortisol-Reset kann dir dieses Gefühl zurückgeben. Aber nur, wenn du JETZT handelst.",
  pps: "Der Aktionsplan ist auf 500 Exemplare limitiert, weil wir jede Analyse manuell überprüfen.",
};

const BuchAnbotProfA = () => <RsSalesPage config={config} />;
export default BuchAnbotProfA;
