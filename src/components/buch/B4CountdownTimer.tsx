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

const B4CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(() => getTimeLeft());

  useEffect(() => {
    const id = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const expired = timeLeft <= 0;

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center">
      <p className="text-amber-800 text-xs font-semibold uppercase tracking-wider mb-1">
        ⏰ Dein Quiz-Sonderpreis gilt noch
      </p>
      <p className="text-amber-900 text-2xl font-bold font-mono tabular-nums">
        {expired ? '00:00' : `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </p>
      <p className="text-amber-700 text-xs mt-1">Danach steigt der Preis auf 69,99€</p>
    </div>
  );
};

export default B4CountdownTimer;
