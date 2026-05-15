import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup3.jpeg";
import B4CountdownTimer from "./B4CountdownTimer";

const STORAGE_KEY = "exitIntentShown_k93fda-4";

const B4ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setOpen(true);
      }
    };

    const timer = window.setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md sm:max-w-lg p-0 overflow-hidden">
        <div className="bg-gradient-to-br from-secondary/10 to-primary/5 px-6 pt-8 pb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">
            Warte kurz!
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight mb-2">
            Dieses Angebot gibt es nur jetzt.
          </h2>
          <p className="text-sm text-muted-foreground">
            Sobald du die Seite verlässt, ist der Quiz-Sonderpreis weg.
          </p>
        </div>

        <div className="px-6 py-6">
          <div className="flex gap-4 items-center mb-5">
            <img
              src={bookCover}
              alt="Du bist nicht das Problem – Buchcover"
              className="w-20 sm:w-24 h-auto rounded-md shadow-md flex-shrink-0"
            />
            <div className="text-left">
              <p className="font-bold text-foreground leading-tight mb-1">
                Du bist nicht das Problem
              </p>
              <p className="text-xs text-muted-foreground leading-snug">
                100+ Seiten. Über 60 wissenschaftliche Quellen. Geschrieben für deinen unterversorgten Stoffwechsel.
              </p>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground mb-1">
              Exklusiver Sonderpreis für Quiz-Teilnehmer:
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-base text-muted-foreground/50 line-through">69,99&nbsp;€</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-secondary">29,99&nbsp;€</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mb-1">Dein Sonderpreis läuft ab in:</p>
          <div className="text-center mb-4"><B4CountdownTimer variant="compact" className="text-base" /></div>

          <Button
            variant="cta"
            size="xl"
            className="w-full h-auto min-h-[3.75rem] whitespace-normal leading-snug text-sm sm:text-base py-3 px-4"
            asChild
          >
            <a
              href="https://www.digistore24.com/product/675804?voucher=specialdeal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Ja – jetzt für 29,99&nbsp;€ sichern
              <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0 self-center" />
            </a>
          </Button>

          <button
            onClick={() => setOpen(false)}
            className="block mx-auto mt-4 text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
          >
            Nein danke, ich verzichte auf das Angebot
          </button>

          <div className="flex flex-wrap justify-center gap-3 mt-4 text-[10px] text-muted-foreground">
            <span>🔒 Sicherer Checkout</span>
            <span>📱 Auf allen Geräten</span>
            <span>⚡ Sofortige Lieferung</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default B4ExitIntentPopup;
