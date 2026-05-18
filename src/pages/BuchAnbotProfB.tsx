import RsSalesPage, { RsConfig } from "@/components/anbot-rs/RsSalesPage";

const config: RsConfig = {
  route: "/buch/anbot-prof-b",
  trackTitle: "Buch Angebot Prof B",
  storageKey: "profB_timer_end",
  digistoreUrl: "https://www.digistore24.com/product/675804?voucher=specialdeal",
  accent: "blue",
  heroGradientFrom: "from-white",
  heroGradientTo: "to-blue-50",
  overline: "FÜR FRAUEN MIT UNTERVERSORGTEM STOFFWECHSEL",
  headline: "Dein Körper hungert – obwohl du isst.",
  subheadline:
    "Jahrelang zu wenig gegessen. Dein Stoffwechsel hat auf Sparflamme geschaltet. Jede Kalorie wird gehortet statt verbrannt. Aber mit der richtigen Strategie wacht dein Stoffwechsel wieder auf.",
  heroBullets: [
    "Du isst schon so wenig – und nimmst TROTZDEM nicht ab",
    "800, 1000, 1200 Kalorien... egal wie wenig, es passiert nichts",
    "Du frierst ständig, bist müde und hast keinen Antrieb mehr",
    "Schon ein 'normales' Essen am Wochenende zeigt sich sofort auf der Waage",
    "Du hast Angst, MEHR zu essen – weil du dann sofort zunimmst",
  ],
  heroPositive: "✅ Dein Körper ist nicht kaputt. Er ist im Sparmodus. Und wir wissen genau, wie man ihn da rausholt.",
  cta1: "JA! Ich will meinen Stoffwechsel aus dem Sparmodus aufwecken →",
  urgencyText: "Sonderaktion endet in [TIMER] – Spare 69% auf dein Stoffwechsel-Reaktivierungs-Paket!",
  problemTitle: "Kennst du diesen Teufelskreis?",
  problemCards: [
    { icon: "🥗", text: "Du isst einen Salat zum Mittagessen und denkst: 'Weniger geht nicht.' Aber die Waage sagt trotzdem +200g." },
    { icon: "🥶", text: "Dir ist ständig kalt. Deine Hände und Füße fühlen sich an wie Eiszapfen – selbst im Sommer." },
    { icon: "😰", text: "Du traust dich nicht, mehr zu essen. Die Angst vor der Waage kontrolliert jeden Bissen." },
    { icon: "💤", text: "Deine Energie reicht gerade so für den Alltag. Sport? Hobbys? Freunde treffen? Fehlanzeige." },
  ],
  problemFooter:
    "Das ist KEIN Mangel an Disziplin. Dein Stoffwechsel ist im Sparmodus – er verbrennt so wenig wie möglich, weil er denkt, eine Hungersnot wäre ausgebrochen.",
  planBadge: "🎯 Dein persönlicher Aktionsplan",
  planTitle: "Dein Reverse-Diet-Plan: Mehr essen, trotzdem abnehmen.",
  planIntro:
    "Klingt verrückt? Ist es nicht. Basierend auf deiner Analyse haben wir einen maßgeschneiderten 90-Tage-Plan erstellt, der deinen Stoffwechsel Schritt für Schritt aus dem Sparmodus holt. Wissenschaftlich fundiert. Tausendfach bewährt.",
  planPhases: [
    { icon: "🔓", title: "Phase 1: Stoffwechsel entsperren", text: "Die ersten 30 Tage: Wir erhöhen behutsam deine Kalorien – ohne Gewichtszunahme." },
    { icon: "🔥", title: "Phase 2: Verbrennungs-Boost", text: "Tag 31-60: Dein Grundumsatz steigt. Du isst mehr und der Körper beginnt, Fett freizugeben." },
    { icon: "🚀", title: "Phase 3: Volle Power", text: "Tag 61-90: Dein Stoffwechsel läuft auf Hochtouren. Du isst normal und nimmst ab." },
  ],
  cta2: "Jetzt Reverse-Diet-Plan + Buch sichern – nur 29,99€ statt 96,99€ →",
  imagineList: [
    "...du isst zum ersten Mal seit Jahren ein normales Mittagessen – OHNE schlechtes Gewissen",
    "...du merkst, dass dir warm ist. Einfach so. Dein Körper produziert wieder Wärme.",
    "...die Waage zeigt weniger an, obwohl du gestern Pizza gegessen hast",
    "...du hast abends Energie für dich selbst – nicht nur für den Alltag",
    "...du sagst 'Ja' zum Restaurantbesuch, ohne vorher 3 Stunden die Speisekarte zu googeln",
    "...deine Freundin fragt: 'Wie kannst du SO VIEL essen und SO GUT aussehen?!'",
  ],
  imagineFooter: "Das passiert, wenn dein Stoffwechsel endlich wieder die Energie bekommt, die er braucht.",
  valueRows: [
    { label: "Das komplette Stoffwechsel-Buch", value: "29,99€" },
    { label: "Dein persönlicher 90-Tage Reverse-Diet-Plan (Profil B)", value: "47,00€" },
    { label: "Detaillierte Stoffwechsel-Analyse", value: "20,00€" },
  ],
  testimonialTitle: "Das sagen Frauen, die ihren Stoffwechsel aufgeweckt haben:",
  testimonials: [
    {
      initials: "JR", avatarBg: "bg-blue-500", name: "Julia R., 35",
      text: "Ich habe vorher 1.000 Kalorien gegessen und zugenommen. Jetzt esse ich 1.800 und nehme ab. Klingt unmöglich, ist es aber nicht. Der Reverse-Diet-Plan hat mein Leben verändert.",
      badge: "-7 kg bei MEHR Essen", badgeColor: "bg-green-100 text-green-700",
    },
    {
      initials: "NW", avatarBg: "bg-indigo-500", name: "Nadine W., 44",
      text: "Mir war jahrelang kalt. Müde. Antriebslos. Vier Wochen nach dem Start hatte ich zum ersten Mal wieder warme Hände. Nach 8 Wochen war ich ein neuer Mensch.",
      badge: "Energie zurück nach 4 Wochen", badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      initials: "BF", avatarBg: "bg-emerald-500", name: "Birgit F., 52",
      text: "Meine Ärztin konnte es nicht glauben: Schilddrüsenwerte normalisiert, 5 kg weniger, und ich esse endlich wieder wie ein normaler Mensch. Danke, dass ihr mir die Angst vor dem Essen genommen habt.",
      badge: "Schilddrüse normalisiert", badgeColor: "bg-purple-100 text-purple-700",
    },
  ],
  cta3: "Ich will meinen Stoffwechsel aufwecken! → Jetzt für nur 29,99€",
  cta3Sub: "Über 2.000 Frauen vertrauen uns bereits",
  objections: [
    { q: "Wenn ich mehr esse, nehme ich sofort zu...", a: "Das passiert nur, wenn du es FALSCH machst. Ein Reverse Diet ist keine Fressattacke – es ist ein wissenschaftliches Protokoll, das deinen Stoffwechsel Schritt für Schritt hochfährt. Unser Plan zeigt dir EXAKT, wie viel mehr du wann essen darfst, damit dein Körper mitkommt." },
    { q: "Mein Arzt sagt, ich soll einfach weniger essen...", a: "Viele Ärzte sind leider nicht auf metabolische Adaptation spezialisiert. Dein Körper hat sich an die niedrige Kalorienzufuhr ANGEPASST. Noch weniger essen verschlimmert das Problem. Wir zeigen dir den Weg raus – mit Studien belegt." },
    { q: "Ich schaffe es nicht, mehr zu essen – ich habe gar keinen Hunger...", a: "Genau DAS ist ein Symptom des Sparmodus! Dein Körper hat das Hungergefühl herunterreguliert. Im Plan zeigen wir dir, wie du deinen Appetit sanft wieder aktivierst – ohne dich vollzustopfen." },
    { q: "29,99€ ist mir zu viel...", a: "Eine Stunde beim Ernährungsberater kostet 80-150€ – und der kennt dein Stoffwechsel-Profil nicht. Für weniger als ein Abendessen bekommst du einen kompletten, auf DICH zugeschnittenen 90-Tage-Plan. Plus 30-Tage-Geld-zurück-Garantie." },
  ],
  finalTitle: "Dein Körper wartet auf dein Signal.",
  finalText:
    "Seit Monaten – vielleicht Jahren – hungert dein Stoffwechsel. Er WILL mehr. Er BRAUCHT mehr. Aber er braucht es auf die RICHTIGE Art. Gibst du ihm diese Chance?",
  finalCta: "JA – MEIN STOFFWECHSEL VERDIENT DAS! Jetzt für 29,99€ statt 96,99€ →",
  finalTimerColor: "text-yellow-400",
  ps: "Weißt du, was das Traurigste ist? Dein Körper WILL abnehmen. Er KANN abnehmen. Aber er bekommt einfach nicht genug Energie, um den Stoffwechsel hochzufahren. Es ist, als würdest du versuchen, ein Auto zu fahren, ohne zu tanken. Gib deinem Körper endlich den Treibstoff, den er braucht.",
  pps: "Der Aktionsplan ist auf 500 Exemplare limitiert, weil wir jede Analyse manuell überprüfen.",
};

const BuchAnbotProfB = () => <RsSalesPage config={config} />;
export default BuchAnbotProfB;
