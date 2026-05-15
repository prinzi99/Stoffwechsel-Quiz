import { useState, useEffect } from 'react';

const TIMER_DURATION = 15 * 60; // seconds
const STORAGE_KEY = 'b4_countdown_start';

const getTimeLeft = (): number => {
  if (typeof window === 'undefined') return TIMER_DURATION;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    return TIMER_DURATION;
  }
  const elapsed = Math.floor((Date.now() - parseInt(stored, 10)) / 1000);
  return Math.max(0, TIMER_DURATION - elapsed);
};

const format = (s: number) => {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
};

interface Props {
  variant?: 'full' | 'compact';
  className?: string;
}

const B4CountdownTimer = ({ variant = 'full', className = '' }: Props) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => getTimeLeft());

  useEffect(() => {
    const id = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const expired = timeLeft <= 0;
  const urgent = timeLeft > 0 && timeLeft <= 5 * 60;
  const label = expired ? '00:00' : format(timeLeft);

  if (variant === 'compact') {
    return (
      <span
        className={`inline-flex items-center gap-1 font-mono font-bold tabular-nums ${
          urgent ? 'text-destructive animate-pulse' : ''
        } ${className}`}
      >
        ⏰ {label}
      </span>
    );
  }

  return (
    <div
      className={`mx-auto max-w-md rounded-xl border px-4 py-3 text-center ${
        urgent
          ? 'bg-destructive/10 border-destructive/30 animate-pulse'
          : 'bg-amber-50 border-amber-200'
      } ${className}`}
    >
      {expired ? (
        <p className="text-sm md:text-base font-semibold text-destructive">
          ⏰ Angebot abgelaufen – sichere es dir jetzt trotzdem
        </p>
      ) : (
        <>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${urgent ? 'text-destructive' : 'text-amber-800'}`}>
            ⏰ Dein Quiz-Sonderpreis gilt noch
          </p>
          <p className={`text-2xl font-bold font-mono tabular-nums ${urgent ? 'text-destructive' : 'text-amber-900'}`}>
            {label}
          </p>
          <p className={`text-xs mt-1 ${urgent ? 'text-destructive/80' : 'text-amber-700'}`}>
            Danach steigt der Preis auf 96,99€
          </p>
        </>
      )}
    </div>
  );
};

export default B4CountdownTimer;
