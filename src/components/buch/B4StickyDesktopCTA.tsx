import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import B4CountdownTimer from './B4CountdownTimer';

const DIGISTORE_URL = 'https://www.digistore24.com/product/675804?voucher=specialdeal';

/**
 * Desktop-only sticky bottom CTA for /k93fda-4. Visible after 600px scroll.
 */
const B4StickyDesktopCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-t border-border shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)] animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto max-w-4xl px-6 py-3 flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-muted-foreground flex items-center gap-2">
              Quiz-Sonderpreis · <B4CountdownTimer variant="compact" className="text-xs" />
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-base text-muted-foreground/60 line-through">69,99&nbsp;€</span>
              <span className="text-2xl font-extrabold text-secondary">29,99&nbsp;€</span>
            </div>
          </div>
        </div>
        <a
          href={DIGISTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground font-semibold text-base py-3 px-6 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Jetzt sichern
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default B4StickyDesktopCTA;
