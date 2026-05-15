import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import B4CountdownTimer from "./B4CountdownTimer";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

/**
 * Mobile-only sticky bottom CTA for /k93fda-4.
 * Activates once the first mini-close enters the viewport.
 */
const B4StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("mini-close-1");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-sm border-t border-border px-3 py-2.5 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
      <a
        href={DIGISTORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 bg-accent text-accent-foreground rounded-md px-4 py-3 shadow-lg active:scale-[0.98] transition-transform"
      >
        <div className="flex flex-col items-start leading-tight">
          <span className="text-[11px] opacity-80">Quiz-Sonderpreis</span>
          <span className="text-sm font-semibold">
            <span className="line-through opacity-60 mr-1.5 font-normal">69,99&nbsp;€</span>
            29,99&nbsp;€ sichern
          </span>
        </div>
        <ArrowRight className="w-5 h-5 flex-shrink-0" />
      </a>
    </div>
  );
};

export default B4StickyMobileCTA;
