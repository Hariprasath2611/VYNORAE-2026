import { useState, useEffect } from "react";

export interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export function useCountdownTimer(targetDateMs: number = new Date(2026, 7, 21, 8, 0, 0).getTime()): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    let animFrameId: number;

    const updateTimer = () => {
      const now = Date.now();
      const distance = targetDateMs - now;

      if (distance <= 0) {
        setTimeRemaining({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({
        days: days < 10 ? `0${days}` : `${days}`,
        hours: hours < 10 ? `0${hours}` : `${hours}`,
        minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
        seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      });

      animFrameId = requestAnimationFrame(updateTimer);
    };

    updateTimer();

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [targetDateMs]);

  return timeRemaining;
}
