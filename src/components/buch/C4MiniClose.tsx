import { ArrowRight } from "lucide-react";

const DIGISTORE_URL = "https://www.digistore24.com/product/675804?voucher=specialdeal";

interface Props {
  headline?: string;
  subline?: string;
  cta?: string;
  id?: string;
}

const C4MiniClose = ({
  headline = "Genau das löst dieses Buch.",
  subline = "Dein Weg raus aus dem Diät-Teufelskreis – für 29,99€ statt 69,99€",
  cta = "Jetzt sichern →",
  id,
}: Props) => {
  return (
    <section id={id} className="mb-10">
      <div className="bg-card border border-primary/20 rounded-2xl p-5 md:p-6 text-center shadow-md">
        <p className="text-sm md:text-base font-semibold text-foreground mb-2">
          {headline}
        </p>
        {subline && (
          <p className="text-xs md:text-sm text-muted-foreground mb-3">{subline}</p>
        )}
        <div className="flex items-baseline justify-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground/60 line-through">69,99&nbsp;€</span>
          <span className="text-2xl md:text-3xl font-extrabold text-secondary">29,99&nbsp;€</span>
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

export default C4MiniClose;
