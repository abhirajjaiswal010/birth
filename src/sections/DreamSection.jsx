import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap } from 'lucide-react';
import { storyData } from '../data/story';
import { fireConfetti } from '../utils/confetti';
import { sound } from '../utils/audio';

export default function DreamSection() {
  const { quote, installationSteps, note, title } = storyData.dreamSection;
  const [boostCount, setBoostCount] = useState(0);

  const handleBoost = () => {
    sound.playSparkle();
    setBoostCount((prev) => prev + 1);
    fireConfetti({
      count: 35,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="chapter-5" className="py-12 sm:py-20 md:py-28 px-4 bg-lavender/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            {title}
          </h2>
          <p className="font-handwriting text-xl sm:text-3xl text-coral font-bold max-w-2xl mx-auto mt-2 sm:mt-3">
            "{quote}"
          </p>
        </div>

        {/* Loading Terminal / Card */}
        <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-peach/50 p-4 sm:p-8 shadow-storybook">
          <div className="flex items-center justify-between mb-3">
            <span className="font-fredoka text-base md:text-lg font-bold text-plum">
              Career Path: IT Professional 💻
            </span>
            <span className="font-fredoka text-sm md:text-base font-bold text-coral">
              {boostCount > 0 ? `${(99.9 + boostCount * 0.01).toFixed(2)}%` : "99.9%"} Complete
            </span>
          </div>

          {/* Master Progress Bar */}
          <div className="w-full h-4 bg-lavender/40 rounded-full overflow-hidden p-0.5 border border-lavender-dark/20 mb-6">
            <motion.div
              initial={{ width: "25%" }}
              whileInView={{ width: "99.9%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-peach via-coral to-butter rounded-full"
            />
          </div>

          {/* Installation Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {installationSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-cream border border-peach/30 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-fredoka text-sm md:text-base font-bold text-plum">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-plum/70 font-medium">
                    {step.desc}
                  </p>
                </div>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    step.status === "Done"
                      ? "bg-green-100 text-green-700"
                      : "bg-coral/20 text-coral animate-pulse"
                  }`}
                >
                  {step.status}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Boost */}
          <div className="border-t border-peach/30 pt-4 flex justify-center">
            <button
              onClick={handleBoost}
              className="inline-flex items-center gap-1.5 bg-butter hover:bg-butter-dark text-plum font-fredoka text-xs md:text-sm font-bold px-5 py-2.5 rounded-full border border-butter-dark/30 shadow-xs hover:shadow transition-all active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 text-coral" />
              <span>Speed Up Greatness 🚀 ({boostCount})</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
