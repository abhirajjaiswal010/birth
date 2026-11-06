import React from 'react';
import { motion } from 'framer-motion';

const elements = [
  { emoji: '🎈', top: '8%', left: '4%', size: 'text-3xl md:text-4xl', delay: 0, duration: 6 },
  { emoji: '✨', top: '15%', right: '7%', size: 'text-2xl md:text-3xl', delay: 1, duration: 5 },
  { emoji: '🌸', top: '35%', left: '2%', size: 'text-2xl md:text-3xl', delay: 2, duration: 7 },
  { emoji: '⭐', top: '48%', right: '3%', size: 'text-2xl md:text-3xl', delay: 0.5, duration: 5.5 },
  { emoji: '💖', top: '65%', left: '5%', size: 'text-2xl md:text-3xl', delay: 1.5, duration: 6.5 },
  { emoji: '🎂', top: '80%', right: '6%', size: 'text-3xl md:text-4xl', delay: 2.5, duration: 7.5 },
  { emoji: '🎀', top: '92%', left: '8%', size: 'text-2xl md:text-3xl', delay: 0.8, duration: 6 },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.size} select-none opacity-40 hover:opacity-80 transition-opacity`}
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [0, -22, 0],
            rotate: [0, 8, -6, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Soft pastel ambient gradient orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] bg-peach/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-10%] w-[500px] h-[500px] bg-lavender/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[75%] left-[-5%] w-[400px] h-[400px] bg-butter/35 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
