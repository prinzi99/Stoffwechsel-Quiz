import { ArrowRight } from "lucide-react";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

interface Props {
  headline?: string;
  cta?: string;
}

/**
 * Compact inline price reminder. Designed to be placed between content sections
 * to give scrolling readers more conversion touchpoints.
 */
const A3MiniClose = ({
  headline = "Bereit, deinen Stoffwechsel zu verstehen?",
  cta = "Jetzt für 9,99 € sichern",
}: Props) => {
  return (
    <section className="mb-10">
      <div className="bg-card border border-primary/20 rounded-2xl p-5 md:p-6 text-center shadow-md">
        <p className="text-sm md:text-base font-semibold text-foreground mb-3">
          {headline}
        </p>
        <div className="flex items-baseline justify-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground/60 line-through">34,99&nbsp;€</span>
          <span className="text-2xl md:text-3xl font-extrabold text-secondary">9,99&nbsp;€</span>
        </div>
        <a
          href={DIGISTORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent text-accent-foreground font-semibold text-sm md:text-base py-3 px-5 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all"
        >
          {cta}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default A3MiniClose;
