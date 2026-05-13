import { useEffect, useState } from "react";

const STORAGE_KEY = "countdown_dfgk34k-4_start";
const DURATION_MS = 15 * 60 * 1000; // 15 minutes

const getRemaining = (): number => {
  if (typeof window === "undefined") return DURATION_MS;
  let start = sessionStorage.getItem(STORAGE_KEY);
  if (!start) {
    start = String(Date.now());
    sessionStorage.setItem(STORAGE_KEY, start);
  }
  const elapsed = Date.now() - parseInt(start, 10);
  return Math.max(0, DURATION_MS - elapsed);
};

const formatMS = (ms: number) => {
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

export const useCountdown = () => {
  const [remaining, setRemaining] = useState<number>(() => getRemaining());

  useEffect(() => {
    const tick = () => setRemaining(getRemaining());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return { remaining, label: formatMS(remaining), expired: remaining <= 0 };
};

interface Props {
  variant?: "full" | "compact";
  className?: string;
}

const CountdownTimer = ({ variant = "full", className = "" }: Props) => {
  const { label, expired, remaining } = useCountdown();
  const urgent = remaining > 0 && remaining <= 5 * 60 * 1000;

  if (variant === "compact") {
    return (
      <span
        className={`inline-flex items-center gap-1 font-mono font-bold tabular-nums ${
          urgent ? "text-destructive animate-pulse" : ""
        } ${className}`}
      >
        ⏰ {expired ? "00:00" : label}
      </span>
    );
  }

  return (
    <div
      className={`mx-auto max-w-md rounded-xl border px-4 py-3 text-center shadow-sm ${
        urgent
          ? "bg-destructive/10 border-destructive/30 animate-pulse"
          : "bg-orange-50 dark:bg-orange-950/20 border-orange-200/60 dark:border-orange-900/40"
      } ${className}`}
    >
      {expired ? (
        <p className="text-sm md:text-base font-semibold text-destructive">
          ⏰ Angebot abgelaufen – sichere es dir jetzt trotzdem
        </p>
      ) : (
        <>
          <p className="text-xs md:text-sm text-muted-foreground mb-1">
            ⏰ Dein Sonderpreis gilt noch:
          </p>
          <p
            className={`text-2xl md:text-3xl font-extrabold font-mono tabular-nums ${
              urgent ? "text-destructive" : "text-foreground"
            }`}
          >
            {label}
          </p>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
