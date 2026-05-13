import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/pricing";
import CountdownTimer from "./CountdownTimer";

/**
 * Sticky bottom CTA for /dfgk34k-4 — visible on mobile AND desktop.
 * On desktop centered with max width.
 */
const A4StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:left-1/2 md:-translate-x-1/2 md:max-w-[600px] md:rounded-t-xl bg-card/95 backdrop-blur-sm border-t border-x border-border px-3 py-2.5 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <a
        href={PRICING.digistoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 bg-accent text-accent-foreground rounded-md px-4 py-3 shadow-lg active:scale-[0.98] transition-transform"
      >
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[11px] opacity-80 flex items-center gap-2">
            Quiz-Sonderpreis · <CountdownTimer variant="compact" className="text-[11px]" />
          </span>
          <span className="text-sm font-semibold">
            <span className="line-through opacity-60 mr-1.5 font-normal">{PRICING.anchorPrice}&nbsp;{PRICING.currency}</span>
            {PRICING.price}&nbsp;{PRICING.currency} sichern
          </span>
        </div>
        <ArrowRight className="w-5 h-5 flex-shrink-0" />
      </a>
    </div>
  );
};

export default A4StickyMobileCTA;
