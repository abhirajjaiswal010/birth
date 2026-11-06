import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check state periodically or when audio events happen
    const interval = setInterval(() => {
      if (sound.isPlayingMusic !== isPlaying) {
        setIsPlaying(sound.isPlayingMusic);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggle = () => {
    sound.toggleMusic((playing) => {
      setIsPlaying(playing);
    });
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={toggle}
        className="group relative flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-full border border-peach/60 shadow-storybook hover:shadow-storybook-hover hover:border-coral transition-all duration-300"
        title={isPlaying ? "Mute birthday music" : "Play birthday music"}
      >
        <div className={`p-2 rounded-full ${isPlaying ? 'bg-coral text-white' : 'bg-butter text-plum'} transition-colors`}>
          {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
        </div>

        <div className="flex flex-col text-left pr-2">
          <span className="text-[10px] font-bold text-plum/70 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-coral" /> Birthday Soundtrack
          </span>
          <span className="text-xs sm:text-sm font-fredoka font-semibold text-plum">
            {isPlaying ? "Playing BGM 🎵" : "Play Music 🎵"}
          </span>
        </div>

        {isPlaying && (
          <div className="flex items-end gap-1 h-4 pl-1">
            <span className="w-1 bg-coral rounded-full animate-bounce [animation-delay:0.1s] h-3"></span>
            <span className="w-1 bg-coral rounded-full animate-bounce [animation-delay:0.3s] h-4"></span>
            <span className="w-1 bg-coral rounded-full animate-bounce [animation-delay:0.2s] h-2.5"></span>
            <span className="w-1 bg-coral rounded-full animate-bounce [animation-delay:0.4s] h-3.5"></span>
          </div>
        )}
      </button>
    </div>
  );
}
