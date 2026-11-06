import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import Countdown from '../components/Countdown';
import { fireBirthdayBurst } from '../utils/confetti';
import { sound } from '../utils/audio';

export default function Hero() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    sound.playSparkle();
    sound.startMusic();
    fireBirthdayBurst();
    setIsOpened(true);

    setTimeout(() => {
      const next = document.getElementById('chapter-2');
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  return (
    <section
      id="chapter-1"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-8 pb-12 sm:pt-16 sm:pb-20 overflow-hidden paper-texture"
    >
      {/* Breaking News Label */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mb-3 inline-block"
      >
        <span className="bg-coral text-white font-fredoka font-bold text-[11px] sm:text-sm px-3.5 py-1 rounded-full shadow-md rotate-[-2deg] inline-block tracking-wider">
          ⚡ BREAKING NEWS • 7 NOVEMBER 2026 ⚡
        </span>
      </motion.div>

      {/* Main Title / Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="font-fredoka text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-plum max-w-5xl tracking-tight leading-[1.12] mb-3 sm:mb-4"
      >
        Someone <span className="text-coral underline decoration-wavy decoration-peach">incredibly cute</span>, slightly unpredictable & ridiculously amazing is turning 22!
      </motion.h1>

      {/* Live Countdown to 22 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="flex justify-center"
      >
        <Countdown />
      </motion.div>

      {/* Interactive Gift Box & Surprise Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-4 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={
            isOpened
              ? { scale: [1, 1.25, 1], rotate: [0, 10, -10, 0] }
              : { y: [0, -10, 0], rotate: [-2, 2, -2] }
          }
          transition={{ repeat: isOpened ? 0 : Infinity, duration: 2, ease: "easeInOut" }}
          onClick={handleOpen}
          className="cursor-pointer group relative"
          title="Click to open surprise!"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-peach via-coral to-peach-light rounded-3xl flex items-center justify-center text-3xl md:text-4xl shadow-storybook group-hover:scale-110 transition-transform">
            {isOpened ? "🎉" : "🎁"}
          </div>
        </motion.div>

        <button
          onClick={handleOpen}
          className="group inline-flex items-center gap-2.5 bg-coral hover:bg-coral-dark text-white font-fredoka text-base md:text-lg font-bold px-8 py-3.5 rounded-full shadow-storybook hover:shadow-storybook-hover transition-all duration-300 active:scale-95"
        >
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span>Open Anshika's Birthday Surprise</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Down arrow hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="mt-10 text-plum/40 flex justify-center cursor-pointer"
        onClick={() => {
          const el = document.getElementById('chapter-2');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
