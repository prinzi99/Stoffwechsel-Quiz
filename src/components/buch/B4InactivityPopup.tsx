import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import bookCover from "@/assets/book-cover-mockup3.jpeg";
import B4CountdownTimer from "./B4CountdownTimer";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";
const STORAGE_KEY = "inactivityPopupShown_k93fda-4";
const INACTIVITY_MS = 20_000;

const B4InactivityPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let timer: number | undefined;
    const reset = () => {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (!sessionStorage.getItem(STORAGE_KEY)) {
          sessionStorage.setItem(STORAGE_KEY, "1");
          setOpen(true);
        }
      }, INACTIVITY_MS);
    };

    const events = ["scroll", "touchstart", "touchmove", "click", "keydown"];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    reset();

    return () => {
      if (timer) window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground text-center">
            Noch unsicher?
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Dein persönlicher Quiz-Sonderpreis gilt nur jetzt.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center my-2">
          <img src={bookCover} alt="Buchcover" className="w-24 h-auto rounded-md shadow-lg" />
        </div>

        <div className="text-center">
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="text-base text-muted-foreground/60 line-through">69,99&nbsp;€</span>
            <span className="text-3xl font-extrabold text-secondary">29,99&nbsp;€</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Sofort verfügbar · Kein Abo · 100+ Seiten
          </p>

          <p className="text-xs text-muted-foreground mb-1">Dein Sonderpreis läuft ab in:</p>
          <div className="mb-3"><B4CountdownTimer variant="compact" className="text-base" /></div>

          <a
            href={DIGISTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground font-semibold py-3.5 px-4 shadow-lg active:scale-[0.98] transition-transform"
          >
            Jetzt für 29,99&nbsp;€ sichern
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-xs text-muted-foreground underline underline-offset-2"
          >
            Vielleicht später
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default B4InactivityPopup;
