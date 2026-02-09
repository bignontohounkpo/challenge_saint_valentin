import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Saint Valentine's Day 2026 at midnight
      const targetDate = new Date("2026-02-14T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-valentine-rose">
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm text-black">Jours</div>
      </div>
      <div className="text-2xl text-primary-foreground/40">:</div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-valentine-rose">
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm text-black">Heures</div>
      </div>
      <div className="text-2xl text-primary-foreground/40">:</div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-valentine-rose">
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm text-black">Minutes</div>
      </div>
      <div className="text-2xl text-primary-foreground/40">:</div>
      <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-valentine-rose">
          {String(timeLeft.seconds).padStart(2, "0")}
        </div>
        <div className="text-xs md:text-sm text-black">Secondes</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
