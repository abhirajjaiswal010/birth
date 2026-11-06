import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import FloatingElements from './components/FloatingElements';
import CursorTrail from './components/CursorTrail';
import MusicPlayer from './components/MusicPlayer';
import SecretModal from './components/SecretModal';
import WaitingRoom from './components/WaitingRoom';

import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Personality from './sections/Personality';
import FunnyMoments from './sections/FunnyMoments';
import DreamSection from './sections/DreamSection';
import BirthdayMessage from './sections/BirthdayMessage';
import Finale from './sections/Finale';

import { sound } from './utils/audio';
import { fireBirthdayBurst, fireFireworks } from './utils/confetti';

export default function App() {
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const [isEasterEgg, setIsEasterEgg] = useState(false);
  const [nameClickCount, setNameClickCount] = useState(0);

  // Check if birthday has arrived (7 November 2026 00:00:00 local time)
  const isAfterMidnight = new Date() >= new Date('2026-11-07T00:00:00');
  const [isUnlocked, setIsUnlocked] = useState(isAfterMidnight);

  // Initialize Lenis smooth scrolling for organic scrapbook storybook flow
  useEffect(() => {
    if (!isUnlocked) return;

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    } catch (e) {
      console.warn("Lenis initialization skipped", e);
    }
  }, [isUnlocked]);

  // Easter egg: Click Anshika's name 5 times
  const handleNameClick = () => {
    sound.playPop();
    const newCount = nameClickCount + 1;
    setNameClickCount(newCount);

    if (newCount === 5) {
      sound.playSparkle();
      fireFireworks();
      setIsEasterEgg(true);
      setIsSecretOpen(true);
      setNameClickCount(0);
    }
  };

  const handleOpenSecretLetter = () => {
    sound.playSparkle();
    setIsEasterEgg(false);
    setIsSecretOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream text-plum font-sans relative selection:bg-peach selection:text-plum overflow-x-hidden">
      {/* Waiting Countdown Room before Midnight */}
      {!isUnlocked && (
        <WaitingRoom onUnlock={() => setIsUnlocked(true)} />
      )}

      {/* Whimsical scrapbook background elements */}
      <FloatingElements />
      <CursorTrail />
      <MusicPlayer />

      {/* Floating Organic Bookmark for Secret Letter */}
      <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-40">
        <button
          onClick={handleOpenSecretLetter}
          className="flex items-center gap-1.5 bg-white/90 hover:bg-white backdrop-blur-sm px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-peach/50 shadow-storybook hover:shadow-storybook-hover transition-all text-xs font-fredoka font-semibold text-plum active:scale-95"
          title="Open confidential note"
        >
          <span>💌</span>
          <span className="inline">A Note For You</span>
        </button>
      </div>

      {/* Storybook Pages */}
      <main className="relative z-10 max-w-5xl mx-auto">
        {/* Chapter 01: Stepping into 22 & Countdown */}
        <Hero />

        {/* Chapter 02: Anshika at 22 (Main Character Energy) */}
        <Introduction
          onNameClick={handleNameClick}
          nameClickCount={nameClickCount}
        />

        {/* Chapter 03: The Personality Audit */}
        <Personality />

        {/* Chapter 04: The Anshika Effect */}
        <FunnyMoments />

        {/* Chapter 05: Her IT Dream & Career Goal */}
        <DreamSection />

        {/* Chapter 06: A Message From The Heart + Polaroid Memory Archive */}
        <BirthdayMessage />

        {/* Chapter 07: Happy 22nd Birthday Celebration + Cake */}
        <Finale />
      </main>

      {/* Secret Modals */}
      <SecretModal
        isOpen={isSecretOpen}
        onClose={() => setIsSecretOpen(false)}
        isEasterEgg={isEasterEgg}
      />
    </div>
  );
}
