import React, { useState, useEffect } from 'react';
import { Heart, Gift, BookOpen, Sparkles, MessageCircleHeart } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ onOpenSecret, nameClickCount, onNameClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    sound.playPop();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md py-3 shadow-sm border-b border-peach/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={onNameClick}
          className="group flex items-center gap-2 text-left cursor-pointer transition-transform hover:scale-105 active:scale-95"
          title="Click 5 times for a secret surprise!"
        >
          <div className="w-9 h-9 rounded-full bg-peach/40 flex items-center justify-center text-lg border border-peach group-hover:bg-coral group-hover:text-white transition-all shadow-sm">
            ✨
          </div>
          <div>
            <h1 className="font-fredoka text-lg md:text-xl font-bold tracking-tight text-plum flex items-center gap-1.5">
              <span>The Anshika Chronicles</span>
              {nameClickCount > 0 && nameClickCount < 5 && (
                <span className="text-xs bg-coral/20 text-coral font-bold px-1.5 py-0.5 rounded-full">
                  {nameClickCount}/5
                </span>
              )}
            </h1>
            <p className="text-[10px] md:text-xs text-plum/60 font-medium">
              Nov 7 Edition • Birthday Storybook
            </p>
          </div>
        </button>

        {/* Quick Chapters Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-peach/40 shadow-sm text-xs font-bold text-plum/80">
          <button
            onClick={() => scrollTo('chapter-1')}
            className="px-3 py-1 rounded-full hover:bg-peach/30 hover:text-plum transition-colors"
          >
            Start
          </button>
          <button
            onClick={() => scrollTo('chapter-2')}
            className="px-3 py-1 rounded-full hover:bg-peach/30 hover:text-plum transition-colors"
          >
            Anshika
          </button>
          <button
            onClick={() => scrollTo('chapter-3')}
            className="px-3 py-1 rounded-full hover:bg-peach/30 hover:text-plum transition-colors"
          >
            Personality
          </button>
          <button
            onClick={() => scrollTo('chapter-4')}
            className="px-3 py-1 rounded-full hover:bg-peach/30 hover:text-plum transition-colors"
          >
            The Effect
          </button>
          <button
            onClick={() => scrollTo('chapter-5')}
            className="px-3 py-1 rounded-full hover:bg-peach/30 hover:text-plum transition-colors"
          >
            CEO
          </button>
          <button
            onClick={() => scrollTo('chapter-6')}
            className="px-3 py-1 rounded-full hover:bg-peach/30 hover:text-plum transition-colors"
          >
            Wish
          </button>
          <button
            onClick={() => scrollTo('chapter-7')}
            className="px-3 py-1 rounded-full bg-coral/15 text-coral hover:bg-coral hover:text-white transition-colors"
          >
            Finale 🎂
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sound.playSparkle();
              onOpenSecret();
            }}
            className="flex items-center gap-1.5 bg-butter hover:bg-butter-dark text-plum font-fredoka text-xs md:text-sm font-semibold px-3.5 py-2 rounded-full border border-butter-dark/30 shadow-sm hover:shadow transition-all active:scale-95"
          >
            <MessageCircleHeart className="w-4 h-4 text-coral" />
            <span>Secret Letter 💌</span>
          </button>
        </div>
      </div>
    </header>
  );
}
