import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { storyData } from '../data/story';

export default function Introduction({ onNameClick, nameClickCount }) {
  const { traits, definition, pronunciation } = storyData.introduction;

  return (
    <section
      id="chapter-2"
      className="py-12 sm:py-20 md:py-28 px-4 bg-lavender/25 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Big Name Presentation */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="font-fredoka text-base sm:text-xl text-plum/70 font-semibold mb-1">
            Introducing to the universe...
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNameClick}
            className="inline-block cursor-pointer"
          >
            <h2 className="font-fredoka text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-plum tracking-tight leading-none text-shadow-soft">
              ANSHIKA<span className="text-coral">!</span>
            </h2>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-6 sm:mt-8">
          {traits.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/90 border border-peach/40 shadow-storybook flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-fredoka text-xl font-bold text-plum mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-plum/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
