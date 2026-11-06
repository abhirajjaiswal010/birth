import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Laugh } from 'lucide-react';
import { storyData } from '../data/story';

export default function FunnyMoments() {
  const { cards, title, subtitle } = storyData.funnyMoments;

  return (
    <section id="chapter-4" className="py-12 sm:py-20 md:py-28 px-4 bg-butter/20 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            {title} 🌀
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-peach/40 shadow-storybook flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black tracking-wider uppercase text-coral bg-coral/10 px-2.5 py-0.5 rounded-full">
                    {card.tag}
                  </span>
                  <span className="text-2xl">{card.emoji}</span>
                </div>

                <h3 className="font-fredoka text-xl font-bold text-plum mb-2">
                  {card.title}
                </h3>

                <p className="text-xs md:text-sm text-plum/80 leading-relaxed font-medium">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
