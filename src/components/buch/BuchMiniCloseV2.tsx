import { Button } from "@/components/ui/button";
import { trackButtonClick } from "@/hooks/useBonusTracking";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

const BuchMiniCloseV2 = () => {
  return (
    <section className="py-6 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card border-2 border-primary/50 rounded-2xl p-7 md:p-10 text-center shadow-[0_12px_50px_-10px_hsl(var(--primary)/0.3)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

            <p className="text-xs md:text-sm text-muted-foreground font-semibold tracking-wide mb-1.5 mt-1">
              Aktuell noch zum Einf&uuml;hrungspreis erh&auml;ltlich
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-lg text-muted-foreground/50 line-through">34,99&nbsp;&euro;</span>
              <span className="text-3xl md:text-5xl font-extrabold text-foreground">29,99&nbsp;&euro;</span>
            </div>
            <p className="text-sm md:text-base text-foreground/70 mb-4">
              Beende den Stillstand – und bring Deinen K&ouml;rper wieder dazu, loszulassen.
            </p>
            <Button
              variant="cta"
              size="xl"
              asChild
              className="w-full h-auto min-h-[3.75rem] whitespace-normal leading-snug text-base md:text-lg py-6 md:py-7 shadow-2xl ring-2 ring-accent/20"
              onClick={() => trackButtonClick("/buch", "MiniClose CTA", DIGISTORE_URL)}
            >
              <a href={DIGISTORE_URL} target="_blank" rel="noopener noreferrer">
                Ja — ich will verstehen, was meinen Stoffwechsel blockiert
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuchMiniCloseV2;
