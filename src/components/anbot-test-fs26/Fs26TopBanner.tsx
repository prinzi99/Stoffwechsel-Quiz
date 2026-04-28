import { Sparkles } from "lucide-react";

const Fs26TopBanner = () => {
  return (
    <div className="bg-accent text-accent-foreground py-2.5 px-4 text-center text-sm md:text-base font-semibold shadow-md">
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <Sparkles className="w-4 h-4" />
        Frühlings Special – Buch jetzt nur 9,99&nbsp;€ statt 34,99&nbsp;€ · zeitlich begrenzt
      </span>
    </div>
  );
};

export default Fs26TopBanner;
