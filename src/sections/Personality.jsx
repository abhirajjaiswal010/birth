import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, AlertCircle } from 'lucide-react';
import { storyData } from '../data/story';

export default function Personality() {
  const { stats, title, subtitle, disclaimer } = storyData.personalityReport;

  return (
    <section id="chapter-3" className="py-12 sm:py-20 md:py-28 px-4 bg-cream relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            {title} 📋
          </h2>
        </div>

        {/* Stats Table / Scrapbook Box */}
        <div className="bg-white/90 rounded-2xl sm:rounded-3xl border border-peach/50 p-4 sm:p-8 shadow-storybook">
          <div className="space-y-4 sm:space-y-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center justify-between mb-1.5 gap-2">
                  <span className="font-fredoka text-base md:text-lg font-bold text-plum">
                    {idx + 1}. {stat.label}
                  </span>
                  <span className="text-xs md:text-sm font-fredoka font-bold text-coral bg-coral/10 px-3 py-0.5 rounded-full">
                    {stat.score}
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-3 bg-peach/20 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-peach to-coral rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
