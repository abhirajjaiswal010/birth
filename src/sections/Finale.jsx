import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, PartyPopper } from 'lucide-react';
import { storyData } from '../data/story';
import InteractiveCake from '../components/InteractiveCake';
import { fireBirthdayBurst, fireFireworks } from '../utils/confetti';
import { sound } from '../utils/audio';

export default function Finale() {
  const { title, subtitle, wishes } = storyData.finale;

  const handleCelebrateAgain = () => {
    sound.playSparkle();
    fireBirthdayBurst();
    fireFireworks();
  };

  const handleReplayStory = () => {
    sound.playPop();
    const hero = document.getElementById('chapter-1');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="chapter-7"
      className="py-12 sm:py-24 md:py-32 px-3 sm:px-4 bg-gradient-to-b from-cream via-peach/20 to-lavender/25 text-center relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-fredoka text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-plum tracking-tight mb-4 sm:mb-8"
        >
          {title} 🎂✨
        </motion.h2>

        {/* Interactive Birthday Cake */}
        <div className="my-4 sm:my-8">
          <InteractiveCake />
        </div>

        {/* Birthday Blessings & Wishes List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl mx-auto my-6 sm:my-8 text-left">
          {wishes.map((wish, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/80 border border-peach/40 shadow-xs flex items-center gap-2 font-fredoka text-xs sm:text-sm text-plum font-semibold"
            >
              <span>{wish}</span>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mt-6 sm:mt-8">
          <button
            onClick={handleCelebrateAgain}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral-dark text-white font-fredoka text-base font-bold px-7 py-3 sm:py-3.5 rounded-full shadow-storybook hover:shadow-storybook-hover transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Celebrate Again! 🎉</span>
          </button>

          <button
            onClick={handleReplayStory}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-plum font-fredoka text-sm font-bold px-5 py-3 sm:py-3.5 rounded-full border border-peach/50 shadow-xs hover:shadow transition-all active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5 text-coral" />
            <span>Read Story Again 📖</span>
          </button>
        </div>
      </div>
    </section>
  );
}
