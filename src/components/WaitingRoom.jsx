import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, Volume2 } from 'lucide-react';
import { fireBirthdayBurst, fireFireworks } from '../utils/confetti';
import { sound } from '../utils/audio';

export default function WaitingRoom({ onUnlock }) {
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
  const [justArrived, setJustArrived] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      // Auto-unlock at midnight!
      if (remaining.isArrived && !justArrived) {
        setJustArrived(true);
        sound.playSparkle();
        sound.startMusic();
        fireBirthdayBurst();
        fireFireworks();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [justArrived]);

  const handleOpenNow = () => {
    sound.playSparkle();
    sound.startMusic();
    fireBirthdayBurst();
    fireFireworks();
    onUnlock();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-cream overflow-y-auto paper-texture">
      {/* Soft decorative background glows */}
      <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-peach/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-lavender/35 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-md rounded-3xl border-2 border-peach/70 p-5 sm:p-10 shadow-2xl text-center"
      >
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-coral/15 border border-coral/30 px-3 py-1 rounded-full mb-4">
          <span className="font-fredoka text-[11px] sm:text-xs font-bold text-coral uppercase tracking-widest">
            {timeLeft.isArrived ? "🎂 IT IS OFFICIAL!" : "🔒 VAULT LOCKED UNTIL MIDNIGHT"}
          </span>
        </div>

        {/* Big Animated Lock / Gift Box */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-peach via-coral to-peach-light flex items-center justify-center text-4xl sm:text-5xl shadow-storybook border-2 border-white"
          >
            {timeLeft.isArrived ? "🎉" : "🎁"}
          </motion.div>
          {!timeLeft.isArrived && (
            <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md border border-peach text-coral">
              <Lock className="w-3.5 h-3.5" />
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="font-fredoka text-2xl sm:text-4xl font-black text-plum tracking-tight leading-tight mb-4">
          {timeLeft.isArrived ? (
            <>HAPPY 22ND BIRTHDAY, <br /><span className="text-coral">ANSHIKA!</span></>
          ) : (
            <>Hold Up, <span className="text-coral">Anshika!</span></>
          )}
        </h2>

        {/* Clean Countdown Box */}
        {!timeLeft.isArrived ? (
          <div className="bg-cream/90 border border-peach/60 rounded-2xl p-4 sm:p-5 mb-6 shadow-inner">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-white rounded-xl py-3 px-2 border border-peach/30 shadow-xs">
                <span className="font-fredoka text-3xl sm:text-4xl font-black text-plum block leading-none">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-plum/50 uppercase block mt-1.5">
                  Minutes
                </span>
              </div>
              <div className="bg-white rounded-xl py-3 px-2 border border-peach/30 shadow-xs">
                <span className="font-fredoka text-3xl sm:text-4xl font-black text-coral block leading-none">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-xs font-bold text-plum/50 uppercase block mt-1.5">
                  Seconds
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {/* Action Button */}
        {timeLeft.isArrived ? (
          <button
            onClick={handleOpenNow}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-coral hover:bg-coral-dark text-white font-fredoka text-lg font-bold py-4 px-6 rounded-2xl shadow-storybook-pop hover:shadow-storybook-hover transition-all active:scale-95"
          >
            <span>Open The Anshika Chronicles! 🎂</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => {
                sound.playSparkle();
                sound.toggleMusic();
              }}
              className="inline-flex items-center justify-center gap-2 bg-butter/80 hover:bg-butter text-plum font-fredoka text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl border border-butter-dark/30 transition-all"
            >
              <Volume2 className="w-4 h-4 text-coral" />
              <span>Listen to Birthday BGM 🎵</span>
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
