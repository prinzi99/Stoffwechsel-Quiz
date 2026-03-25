import { CheckCircle2 } from "lucide-react";

const BoldText = ({ text }: { text: string }) => {
  const boldWords = [
    "weniger essen",
    "Fettverlust",
    "ausbremst",
    "Stillstand",
    "Fett freizugeben",
    "entscheidet",
    "feststeckst",
  ];

  const parts: (string | { bold: string })[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let matchedWord = "";

    for (const word of boldWords) {
      const idx = remaining.indexOf(word);
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        matchedWord = word;
      }
    }

    if (matchedWord) {
      if (earliestIndex > 0) {
        parts.push(remaining.slice(0, earliestIndex));
      }
      parts.push({ bold: matchedWord });
      remaining = remaining.slice(earliestIndex + matchedWord.length);
    } else {
      parts.push(remaining);
      break;
    }
  }

  return (
    <span>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <strong key={i} className="text-foreground font-bold">
            {part.bold}
          </strong>
        )
      )}
    </span>
  );
};

const bullets = [
  "Warum weniger essen Deinen Fettverlust heimlich stoppt",
  "Warum Dein Körper Dich ausbremst – obwohl Du alles richtig machst",
  "Warum mehr Disziplin Deinen Stillstand verstärken kann",
  "Wie Du Deinen Körper wieder dazu bringst, Fett freizugeben",
  "Der eine Schalter, der darüber entscheidet, ob Du abnimmst – oder feststeckst",
];

const Test2403BulletSection = () => {
  return (
    <section className="py-4 md:py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            {bullets.map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-foreground leading-snug font-semibold">
                  <BoldText text={text} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test2403BulletSection;
