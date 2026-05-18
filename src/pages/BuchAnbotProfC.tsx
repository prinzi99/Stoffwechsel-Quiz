import RsSalesPage, { RsConfig } from "@/components/anbot-rs/RsSalesPage";

const config: RsConfig = {
  route: "/buch/anbot-prof-c",
  trackTitle: "Buch Angebot Prof C",
  storageKey: "profC_timer_end",
  digistoreUrl: "https://www.digistore24.com/product/675804?voucher=specialdeal",
  accent: "purple",
  heroGradientFrom: "from-white",
  heroGradientTo: "to-purple-50",
  overline: "FÜR FRAUEN MIT ÜBERANGEPASSTEM STOFFWECHSEL",
  headline: "20 Diäten. 20 Mal Jojo. Dein Stoffwechsel hat aufgehört, dir zu vertrauen.",
  subheadline:
    "Jede Diät hat deinen Stoffwechsel ein Stück weiter heruntergefahren. Er hat gelernt: 'Es kommt immer wieder eine Hungerphase.' Deshalb hält er jedes Gramm fest. Aber das MATADOR-Protokoll kann diesen Kreislauf durchbrechen.",
  heroBullets: [
    "Du hast schon alles versucht – Low Carb, Keto, Intervallfasten, Weight Watchers...",
    "Am Anfang nimmst du immer ab. Dann kommt der Stillstand. Dann kommen die Kilos zurück – plus Extra",
    "Du kennst mehr Diäten als deine Ernährungsberaterin",
    "Jedes Mal denkst du: 'DIESMAL klappt es.' Und jedes Mal ist die Enttäuschung größer",
    "Du hasst deinen Körper dafür, dass er 'nicht mitmacht'",
  ],
  heroPositive: "✅ Dein Körper macht nicht nicht mit – er SCHÜTZT sich. Und mit dem richtigen Protokoll wird er endlich loslassen.",
  cta1: "JA! Ich will den Jojo-Kreislauf endlich durchbrechen →",
  urgencyText: "Sonderaktion endet in [TIMER] – Spare 69% auf deinen Jojo-Effekt-Stopper!",
  problemTitle: "Warum KEINE Diät bei dir funktioniert hat:",
  problemCards: [
    { icon: "🔄", text: "Diät #1: 5 kg runter, 7 kg rauf. Diät #2: 8 kg runter, 10 kg rauf. Diät #3: Gar nichts mehr runter. Kennst du diese Spirale?" },
    { icon: "🧠", text: "Dein Stoffwechsel hat ein GEDÄCHTNIS. Er erinnert sich an jede Crash-Diät und hat gelernt: 'Ich muss Reserven anlegen, die nächste Hungersnot kommt bestimmt.'" },
    { icon: "😫", text: "Du machst alles 'richtig' laut Diätplan. Du hältst durch. Du bist diszipliniert. Aber dein Körper hat seine eigenen Regeln – und die gewinnen IMMER." },
    { icon: "💔", text: "Das Schlimmste: Du gibst DIR die Schuld. 'Ich bin zu schwach.' 'Ich habe keine Disziplin.' FALSCH. Dein Körper ist biologisch überangepasst." },
  ],
  problemFooter:
    "Nach 3+ Diäten hat sich dein Stoffwechsel so stark angepasst, dass normale Ansätze NICHT MEHR FUNKTIONIEREN. Du brauchst ein Protokoll, das speziell für überangepasste Stoffwechsel entwickelt wurde.",
  planBadge: "🎯 Dein persönlicher Aktionsplan",
  planTitle: "Das MATADOR-Protokoll: Entwickelt für Körper, die nicht mehr reagieren.",
  planIntro:
    "MATADOR steht für 'Minimising Adaptive Thermogenesis And Deactivating Obesity Rebound'. Klingt kompliziert? Ist es nicht. Die Idee ist genial einfach: Statt nonstop Diät (was dein Körper hasst), wechselst du strategisch zwischen Abnehmphase und Erholungsphase. Dein Stoffwechsel wird 'ausgetrickst' – er fährt nicht herunter.",
  planPhases: [
    { icon: "🧘", title: "Phase 1: Metabolisches Reset", text: "Die ersten 30 Tage: Wir stoppen den Jojo-Kreislauf und stabilisieren deinen Grundumsatz." },
    { icon: "🔄", title: "Phase 2: MATADOR-Zyklen", text: "Tag 31-60: Strategische Wechsel zwischen Abnehm- und Erholungsphasen. Dein Stoffwechsel bleibt aktiv." },
    { icon: "🕊️", title: "Phase 3: Dauerhafte Freiheit", text: "Tag 61-90: Dein Körper hat gelernt, dass keine Hungersnot kommt. Er lässt los. Für immer." },
  ],
  cta2: "Jetzt MATADOR-Plan + Buch sichern – nur 29,99€ statt 96,99€ →",
  imagineList: [
    "...du nimmst ab – und die Kilos kommen NICHT zurück. Nicht nach 3 Monaten. Nicht nach einem Jahr.",
    "...du gehst zum Buffet und genießt einfach – ohne die innere Stimme, die sagt 'Das darfst du nicht'",
    "...du steigst auf die Waage und lächelst. Zum ersten Mal seit JAHREN.",
    "...du hörst endlich auf, Diäten zu googeln. Weil du es nicht mehr brauchst.",
    "...dein Körper vertraut dir wieder – und du vertraust deinem Körper",
    "...du erzählst deiner besten Freundin: 'Ich habe den Jojo-Effekt besiegt.' Und es stimmt.",
  ],
  imagineFooter: "Das ist keine Wunschvorstellung. Das ist das Ergebnis des MATADOR-Protokolls.",
  valueRows: [
    { label: "📖 Das komplette Stoffwechsel-Buch", value: "29,99€" },
    { label: "🎯 Dein persönlicher 90-Tage MATADOR-Plan (Profil C)", value: "47,00€" },
    { label: "📊 Detaillierte Stoffwechsel-Analyse", value: "20,00€" },
  ],
  testimonialTitle: "Das sagen Frauen, die den Jojo-Effekt besiegt haben:",
  testimonials: [
    {
      initials: "KM", avatarBg: "bg-purple-500", name: "Kathrin M., 46",
      text: "17 Diäten in 20 Jahren. Siebzehn! Und dann kam der MATADOR-Plan. Zum ersten Mal in meinem Leben habe ich das Gefühl, dass mein Körper MIT mir arbeitet, nicht gegen mich. 11 kg in 90 Tagen – und sie sind seit 6 Monaten weg!",
      badge: "-11 kg, kein Jojo seit 6 Monaten", badgeColor: "bg-green-100 text-green-700",
    },
    {
      initials: "AS", avatarBg: "bg-fuchsia-500", name: "Andrea S., 39",
      text: "Ich war die Jojo-Königin. 10 kg runter, 12 rauf, 8 runter, 15 rauf. Das MATADOR-Protokoll war der erste Ansatz, der meinen Körper nicht in Panik versetzt hat. Ich esse wieder normal und bin 9 kg leichter als vor einem Jahr.",
      badge: "Jojo-Kreislauf durchbrochen", badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      initials: "HB", avatarBg: "bg-violet-500", name: "Heike B., 55",
      text: "Mit 55 dachte ich, es ist vorbei. Mein Stoffwechsel war komplett im Eimer nach 25 Jahren Diät-Wahnsinn. Der 90-Tage-Plan hat mich eines Besseren belehrt. Ich habe zum ersten Mal abgenommen, OHNE danach wieder zuzunehmen.",
      badge: "-7 kg, stabil seit 4 Monaten", badgeColor: "bg-green-100 text-green-700",
    },
  ],
  cta3: "Ich will den Jojo-Effekt besiegen! → Jetzt für nur 29,99€",
  cta3Sub: "Über 2.000 Frauen vertrauen uns bereits",
  objections: [
    { q: "Ich habe schon ALLES versucht – nichts hat funktioniert...", a: "Genau deshalb ist das MATADOR-Protokoll anders. Es wurde SPEZIELL für Menschen wie dich entwickelt, bei denen herkömmliche Diäten versagt haben. Es nutzt die Biologie deines überangepassten Stoffwechsels und arbeitet MIT deinem Körper, nicht dagegen." },
    { q: "Was, wenn ich wieder zunehme wie bei jeder Diät?", a: "Der Jojo-Effekt entsteht, wenn der Stoffwechsel herunterfährt. Das MATADOR-Protokoll verhindert genau das durch strategische Erholungsphasen. Studien zeigen: Teilnehmer des MATADOR-Protokolls haben DOPPELT so viel Gewicht verloren und hielten es signifikant besser als klassische Diäter." },
    { q: "Ich habe mich schon damit abgefunden...", a: "Das verstehen wir. Nach so vielen Enttäuschungen ist Resignation normal. Aber dein Körper hat sich nicht 'aufgegeben' – er hat sich ANGEPASST. Anpassung kann man umkehren. Gib ihm 90 Tage. Wenn es nicht funktioniert, bekommst du dein Geld zurück." },
    { q: "29,99€ ist mir zu viel...", a: "Rechne mal nach: Wie viel hast du in den letzten Jahren für Diät-Programme, Shakes, Supplements und Ernährungsberatung ausgegeben? 500€? 1.000€? 5.000€? Für 29,99€ bekommst du den Plan, der all das überflüssig macht. Plus 30-Tage-Geld-zurück-Garantie." },
  ],
  finalTitle: "Wie viele Diäten willst du noch machen?",
  finalText:
    "Du hast zwei Optionen: Option A: Diese Seite schließen, nächsten Monat die nächste Diät starten, und in 6 Monaten wieder am gleichen Punkt stehen. Option B: 29,99€ investieren, den MATADOR-Plan starten, und in 90 Tagen den Jojo-Kreislauf durchbrechen. Endgültig.",
  finalCta: "ICH WÄHLE OPTION B – SCHLUSS MIT JOJO! Jetzt für 29,99€ statt 96,99€ →",
  finalTimerColor: "text-purple-400",
  ps: "Wusstest du, dass die Teilnehmer der Original-MATADOR-Studie DOPPELT so viel Fett verloren haben wie die Vergleichsgruppe – und es BESSER gehalten haben? Das ist keine Marketing-Behauptung. Das ist Wissenschaft. Und dein Aktionsplan basiert genau auf diesem Protokoll.",
  pps: "Der Aktionsplan ist auf 500 Exemplare limitiert, weil wir jede Analyse manuell überprüfen.",
};

const BuchAnbotProfC = () => <RsSalesPage config={config} />;
export default BuchAnbotProfC;
