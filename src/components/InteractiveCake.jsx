import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { fireConfetti, fireBirthdayBurst } from '../utils/confetti';
import { sound } from '../utils/audio';

export default function InteractiveCake() {
  const [candles, setCandles] = useState([true, true, true]);
  const [wishMade, setWishMade] = useState(false);

  const blowCandle = (index) => {
    if (!candles[index]) return;

    sound.playCandleBlow();
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);

    fireConfetti({
      count: 25,
      spread: 45,
      origin: { y: 0.65 }
    });

    if (newCandles.every((c) => !c)) {
      setTimeout(() => {
        setWishMade(true);
        sound.playSparkle();
        fireBirthdayBurst();
      }, 350);
    }
  };

  const relightCandles = () => {
    sound.playPop();
    setCandles([true, true, true]);
    setWishMade(false);
  };

  const remaining = candles.filter(Boolean).length;

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-peach/60 shadow-storybook max-w-lg mx-auto overflow-hidden">
      {/* Cake Action Hint */}
      <div className="text-center mb-4 sm:mb-6">
        <h4 className="font-fredoka text-lg sm:text-2xl font-bold text-plum">
          {wishMade ? "🎉 Wish In Progress!" : "Blow Out The Candles"}
        </h4>
        <p className="text-xs sm:text-sm text-plum/70 mt-1 font-medium">
          {remaining > 0
            ? `Click each candle to blow it out (${remaining} remaining)`
            : "All candles blown! Your 22nd birthday wish is granted! ✨"}
        </p>
      </div>

      {/* Structured 3D-Tiered Birthday Cake with Mobile Scaling */}
      <div className="relative w-full flex items-center justify-center overflow-visible py-2">
        <div className="relative w-80 h-72 flex flex-col items-center justify-end select-none pb-4 transform scale-[0.82] sm:scale-100 origin-bottom">
        {/* CAKE TOPPER: "22" */}
        <div className="absolute top-2 z-30 flex flex-col items-center">
          <div className="bg-gradient-to-r from-butter to-coral text-white font-fredoka font-black text-sm px-3 py-1 rounded-full shadow-md border-2 border-white tracking-widest animate-bounce">
            22 ✨
          </div>
          <div className="w-0.5 h-4 bg-coral/50" />
        </div>

        {/* CANDLES ROW */}
        <div className="flex justify-center items-end gap-9 z-20 mb-[-6px]">
          {candles.map((isLit, idx) => (
            <div
              key={idx}
              onClick={() => blowCandle(idx)}
              className="flex flex-col items-center cursor-pointer group"
              title={isLit ? "Click to blow out candle" : "Blown out"}
            >
              {/* Flame or Smoke Puff */}
              <div className="h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {isLit ? (
                    <motion.div
                      key="flame"
                      animate={{
                        scale: [1, 1.15, 0.95, 1.1],
                        rotate: [-3, 4, -4, 3],
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.1 }}
                      className="relative w-4 h-7 bg-gradient-to-t from-coral via-butter to-yellow-100 rounded-full shadow-[0_0_14px_#FFE89A] group-hover:scale-125 transition-transform"
                    >
                      <div className="absolute inset-x-1 bottom-1 h-3 bg-white/90 rounded-full" />
                    </motion.div>
                  ) : (
                    <motion.span
                      key="puff"
                      initial={{ scale: 0.5, opacity: 1, y: 0 }}
                      animate={{ scale: 1.4, opacity: 0, y: -16 }}
                      transition={{ duration: 0.7 }}
                      className="text-lg"
                    >
                      💨
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Wick */}
              <div className="w-0.5 h-2 bg-plum/70" />

              {/* Candle Body */}
              <div
                className={`w-3.5 h-11 rounded-t-sm shadow-sm relative overflow-hidden border border-black/10 ${
                  idx === 0
                    ? 'bg-peach'
                    : idx === 1
                    ? 'bg-butter'
                    : 'bg-lavender'
                }`}
              >
                <div className="absolute inset-0 opacity-25 bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_50%,#fff_50%,#fff_75%,transparent_75%)] bg-[length:6px_6px]" />
              </div>
            </div>
          ))}
        </div>

        {/* TIER 3 (TOP TIER - Lavender Cream) */}
        <div className="relative z-15 w-44">
          {/* Top Ellipse Cap */}
          <div className="w-full h-8 bg-lavender-light border-2 border-lavender-dark/40 rounded-[50%] shadow-inner flex items-center justify-around px-3">
            <span className="text-xs">🍓</span>
            <span className="text-xs">✨</span>
            <span className="text-xs">🍓</span>
          </div>
          {/* Cylinder Body */}
          <div className="w-full h-11 bg-gradient-to-b from-lavender via-lavender-light to-lavender-dark/60 border-x-2 border-b-2 border-lavender-dark/40 rounded-b-2xl mt-[-16px] shadow-sm flex items-center justify-center">
            {/* Scalloped Frosting Drip */}
            <div className="absolute top-2 inset-x-0 flex justify-between px-2 pointer-events-none">
              <span className="w-5 h-3 bg-white rounded-b-full shadow-xs" />
              <span className="w-6 h-4 bg-white rounded-b-full shadow-xs" />
              <span className="w-5 h-3 bg-white rounded-b-full shadow-xs" />
              <span className="w-6 h-4 bg-white rounded-b-full shadow-xs" />
            </div>
            <span className="text-[11px] font-fredoka font-bold text-plum/60 tracking-wider">
              ANSHIKA
            </span>
          </div>
        </div>

        {/* TIER 2 (MIDDLE TIER - Peach Vanilla) */}
        <div className="relative z-10 w-56 mt-[-10px]">
          {/* Top Ellipse Cap */}
          <div className="w-full h-9 bg-peach-light border-2 border-peach-dark/40 rounded-[50%] shadow-inner flex items-center justify-between px-4">
            <span className="w-2.5 h-2.5 rounded-full bg-butter shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-coral shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-butter shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-coral shadow-xs" />
          </div>
          {/* Cylinder Body */}
          <div className="w-full h-14 bg-gradient-to-b from-peach via-peach-light to-peach-dark/60 border-x-2 border-b-2 border-peach-dark/40 rounded-b-2xl mt-[-18px] shadow-sm flex items-center justify-center relative overflow-hidden">
            {/* Middle Scallops */}
            <div className="absolute top-2 inset-x-0 flex justify-around px-2 pointer-events-none">
              <span className="w-6 h-3.5 bg-butter/80 rounded-b-full shadow-xs" />
              <span className="w-7 h-4.5 bg-butter/80 rounded-b-full shadow-xs" />
              <span className="w-6 h-3.5 bg-butter/80 rounded-b-full shadow-xs" />
              <span className="w-7 h-4.5 bg-butter/80 rounded-b-full shadow-xs" />
              <span className="w-6 h-3.5 bg-butter/80 rounded-b-full shadow-xs" />
            </div>
            <span className="font-fredoka text-xs font-bold text-coral tracking-widest">
              ★ TWENTY-TWO ★
            </span>
          </div>
        </div>

        {/* TIER 1 (BOTTOM BASE TIER - Butter Cream Fondant) */}
        <div className="relative z-5 w-[270px] mt-[-12px]">
          {/* Top Ellipse Cap */}
          <div className="w-full h-10 bg-cream-light border-2 border-peach/50 rounded-[50%] shadow-inner flex items-center justify-around px-6">
            <span className="text-xs">🌸</span>
            <span className="text-xs">🤍</span>
            <span className="text-xs">🌸</span>
            <span className="text-xs">🤍</span>
            <span className="text-xs">🌸</span>
          </div>
          {/* Cylinder Body */}
          <div className="w-full h-16 bg-gradient-to-b from-cream via-cream-light to-peach/30 border-x-2 border-b-2 border-peach/60 rounded-b-2xl mt-[-20px] shadow-md flex items-center justify-center relative overflow-hidden">
            {/* Pearled Bottom Trim */}
            <div className="absolute bottom-1 inset-x-0 flex justify-between px-3 pointer-events-none">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="w-2.5 h-2.5 rounded-full bg-white border border-peach/40 shadow-xs" />
              ))}
            </div>
            <span className="font-fredoka text-sm font-black text-plum tracking-wider">
              HAPPY BIRTHDAY
            </span>
          </div>
        </div>

        {/* PORCELAIN PEDESTAL CAKE STAND */}
        <div className="relative z-0 flex flex-col items-center mt-[-8px] w-full">
          {/* Cake Plate Lip */}
          <div className="w-[300px] h-5 bg-gradient-to-r from-white via-cream to-white border-2 border-plum/20 rounded-[50%] shadow-md flex items-center justify-center">
            <div className="w-72 h-3 border-t border-plum/10 rounded-[50%]" />
          </div>
          {/* Pedestal Stem */}
          <div className="w-20 h-5 bg-gradient-to-b from-plum/20 to-plum/30 rounded-b-md shadow-inner" />
          {/* Pedestal Base */}
          <div className="w-36 h-3 bg-gradient-to-r from-plum/25 via-plum/35 to-plum/25 rounded-full shadow-lg" />
        </div>
      </div>
    </div>

      {/* Celebratory Wish Result */}
      <AnimatePresence>
        {wishMade && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mt-6 p-4 rounded-2xl bg-butter/80 border border-butter-dark/40 text-center shadow-md w-full"
          >
            <p className="font-fredoka text-base sm:text-lg text-plum font-bold mb-1">
              🎉 3/3 Candles Blown! 🌟
            </p>
            <p className="text-xs sm:text-sm text-plum/80 leading-snug font-medium">
              Your 22nd birthday wish has been released into the universe. May this year bring endless smiles, success, and love!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Relight button */}
      <div className="mt-4">
        <button
          onClick={relightCandles}
          className="flex items-center gap-1.5 text-xs font-bold text-plum/70 hover:text-coral hover:bg-coral/10 px-3.5 py-1.5 rounded-full transition-colors border border-transparent hover:border-coral/20"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Relight Candles 🕯️</span>
        </button>
      </div>
    </div>
  );
}
