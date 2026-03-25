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
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          <p className="text-sm md:text-base font-semibold text-foreground mb-2">
            Das musst Du verstehen, wenn Du wieder abnehmen willst:
          </p>
          <div className="space-y-2 md:space-y-2.5 mb-3 md:mb-4">
            {bullets.map((text, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base md:text-lg text-foreground/90 leading-snug font-medium">
                  <BoldText text={text} />
                </span>
              </div>
            ))}
          </div>

          {/* KONSEQUENZ */}
          <div className="bg-destructive/5 rounded-xl py-2.5 px-4 md:py-3 md:px-6 mb-2 md:mb-3">
            <p className="text-center text-sm md:text-base font-semibold text-foreground leading-snug">
              Wenn Du das ignorierst, wirst Du weiter k&auml;mpfen –
              <br />
              ohne dass sich etwas ver&auml;ndert.
            </p>
          </div>

          {/* PRODUKT-VERANKERUNG */}
          <p className="text-center text-sm md:text-base font-bold text-foreground leading-snug">
            Genau das lernst Du in diesem Buch.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Test2403BulletSection;
