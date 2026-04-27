import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

const BuchAllgemeinStickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3 shadow-lg">
      <Button variant="cta" size="lg" asChild className="w-full text-base py-5" onClick={() => trackButtonClick("/buch", "Sticky CTA Mobile", DIGISTORE_URL)}>
        <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
          Jetzt für 29,99&nbsp;€ sichern
        </a>
      </Button>
    </div>
  );
};

export default BuchAllgemeinStickyCTA;
