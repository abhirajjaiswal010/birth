import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-11-07T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { isArrived: true, minutes: 0, seconds: 0 };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return {
      isArrived: false,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isArrived) {
    return (
      <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-peach/70 px-4 py-2 rounded-full shadow-sm text-center my-3">
        <span className="font-fredoka text-sm md:text-base font-bold text-plum">
          Level 22 Officially Unlocked! 🎂
        </span>
      </div>
    );
  }

  // Shows Minutes and Seconds cleanly
  return (
    <div className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-peach/60 px-4 py-1.5 rounded-full shadow-sm my-2 select-none font-fredoka font-bold text-base md:text-lg text-plum">
      <span className="bg-cream px-2.5 py-0.5 rounded-lg border border-peach/40">
        {String(timeLeft.minutes).padStart(2, '0')}m
      </span>
      <span className="text-coral/60 font-black">:</span>
      <span className="bg-coral/15 text-coral px-2.5 py-0.5 rounded-lg border border-coral/30 min-w-[38px] text-center">
        {String(timeLeft.seconds).padStart(2, '0')}s
      </span>
    </div>
  );
}
