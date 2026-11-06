import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award } from 'lucide-react';
import { fireConfetti } from '../utils/confetti';
import { sound } from '../utils/audio';

export default function SecretModal({ isOpen, onClose, isEasterEgg }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-cream border border-peach/80 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-peach/30 hover:bg-peach text-plum transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isEasterEgg ? (
            <div className="text-center py-2">
              <div className="w-14 h-14 mx-auto mb-3 bg-butter/60 border border-butter-dark/40 rounded-2xl flex items-center justify-center text-2xl shadow-xs">
                ✨
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-coral/15 text-coral rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" /> Secret Easter Egg
              </span>
              <h3 className="font-fredoka text-2xl font-bold text-plum mb-3">
                You Found The Hidden Note!
              </h3>
              <p className="text-plum/80 text-sm md:text-base leading-relaxed font-medium mb-6">
                "Having Anshika in your life is a constant reminder of how beautiful it is when someone combines sharp intelligence with genuine kindness. Cherish her always."
              </p>

              <button
                onClick={() => {
                  sound.playSparkle();
                  fireConfetti({ count: 80, spread: 80 });
                  onClose();
                }}
                className="w-full bg-coral hover:bg-coral-dark text-white font-fredoka font-semibold py-3 px-6 rounded-2xl shadow-md transition-transform active:scale-95"
              >
                Always 🤍
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">💌</span>
                <span className="text-xs uppercase tracking-widest font-bold text-coral bg-coral/10 px-2.5 py-1 rounded-full">
                  For Anshika
                </span>
              </div>

              <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-plum mb-3">
                A Quiet Note For 22 🤍
              </h3>

              <div className="bg-white/90 rounded-2xl p-5 sm:p-6 border border-peach/50 shadow-inner mb-6 font-handwriting text-xl text-plum/90 leading-relaxed space-y-3">
                <p>Dear Anshika,</p>
                <p>
                  As you step into 22, I want to remind you how <span className="bg-butter/60 px-1.5 py-0.5 rounded font-bold text-plum">capable and truly special</span> you are.
                </p>
                <p>
                  I know how much effort and focus you are putting into your career goals. Keep believing in your skills, keep coding, and trust that <span className="bg-butter/70 px-1.5 py-0.5 rounded font-bold text-plum">dream IT job</span> is waiting for you. You are going to build an amazing future and <span className="bg-peach/50 px-1.5 py-0.5 rounded font-bold text-coral">make your mother and your brother so immensely proud</span>. 🤍
                </p>
                <p>
                  Never doubt your path or that beautiful heart of yours. Walk into this new year with confidence, joy, and that <span className="bg-lavender/50 px-1.5 py-0.5 rounded font-bold text-plum">radiant smile</span>. I am always rooting for you every single day. ✨
                </p>
                <p className="font-bold text-coral text-right pt-2 font-handwriting text-2xl">
                  — With lots of love, Abhi 🤍🌸✨
                </p>
              </div>

              <button
                onClick={() => {
                  sound.playSparkle();
                  fireConfetti({ count: 50, spread: 60 });
                  onClose();
                }}
                className="w-full bg-peach hover:bg-peach-dark text-plum font-fredoka font-bold py-3 px-6 rounded-2xl border border-peach-dark/30 shadow-xs transition-transform active:scale-95"
              >
                Thank you 🤍
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
