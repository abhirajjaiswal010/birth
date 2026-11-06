import React from 'react';
import { motion } from 'framer-motion';
import MemoryGallery from '../components/MemoryGallery';

export default function BirthdayMessage() {
  return (
    <section id="chapter-6" className="py-12 sm:py-20 md:py-28 px-4 bg-cream relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-bold text-plum tracking-tight">
            A Little Message From The Heart 💌
          </h2>
        </div>

        {/* Letter Parchment Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/95 rounded-2xl sm:rounded-3xl border border-peach/50 p-5 sm:p-10 md:p-12 shadow-storybook"
        >
          <div className="space-y-6 text-plum/85 font-medium text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              Some people make{' '}
              <span className="bg-butter/70 px-2 py-0.5 rounded-md font-bold text-plum border-b-2 border-butter-dark/50">
                ordinary days feel a little more special
              </span>{' '}
              just by being themselves — and at 22, you are undeniably one of those{' '}
              <span className="bg-peach/50 px-2 py-0.5 rounded-md font-bold text-coral border-b-2 border-coral/40">
                rare, extraordinary humans
              </span>
              .
            </p>

            <p>
              Keep smiling, keep dreaming, and never lose that{' '}
              <span className="bg-lavender/60 px-2 py-0.5 rounded-md font-bold text-plum border-b-2 border-lavender-dark/40">
                beautiful kindness
              </span>{' '}
              of yours. Your laugh is{' '}
              <span className="bg-butter/70 px-2 py-0.5 rounded-md font-bold text-plum border-b-2 border-butter-dark/50">
                genuinely contagious
              </span>
              , and the quiet dedication you carry every single day is truly inspiring.
            </p>

            <p>
              Never lose the warmth, the spark, and the beautiful madness that makes you{' '}
              <strong className="font-fredoka font-black text-coral underline decoration-wavy decoration-butter text-xl sm:text-2xl">
                ANSHIKA
              </strong>
              . You tackle life with so much{' '}
              <span className="bg-peach/50 px-2 py-0.5 rounded-md font-bold text-plum">
                grace, humor, and heart
              </span>
              .
            </p>

            <p>
              May this 22nd chapter bring you that{' '}
              <span className="bg-butter/80 px-2 py-0.5 rounded-md font-bold text-plum border-b-2 border-butter-dark/60">
                dream IT job 💻
              </span>
              , make your{' '}
              <span className="bg-lavender/60 px-2 py-0.5 rounded-md font-bold text-coral border-b-2 border-lavender-dark/40">
                mother and brother so deeply proud 🤍
              </span>
              , and bring you{' '}
              <span className="bg-peach/50 px-2 py-0.5 rounded-md font-bold text-coral">
                boundless happiness
              </span>{' '}
              with endless reasons to smile.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-dashed border-peach/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="font-fredoka text-lg md:text-xl font-bold text-coral">
              Happy 22nd Birthday, superstar! Still dangerously cute. ❤️
            </p>
            <span className="font-handwriting text-2xl text-plum/60">
              7 November 2026 🎂
            </span>
          </div>
        </motion.div>

        {/* Polaroid Memory Archive */}
        <div className="mt-14">
          <MemoryGallery />
        </div>
      </div>
    </section>
  );
}
