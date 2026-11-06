import React from 'react';

const memories = [
  {
    id: 1,
    title: "Poise & Elegance",
    caption: "A natural grace that lights up every room effortlessly.",
    rotation: "-rotate-2",
    tapeColor: "bg-peach/80",
    emoji: "🌸",
  },
  {
    id: 2,
    title: "Quiet Strength",
    caption: "Carrying life with composure, patience, and dignity.",
    rotation: "rotate-2",
    tapeColor: "bg-butter/80",
    emoji: "✨",
  },
  {
    id: 3,
    title: "Radiant Warmth",
    caption: "That genuine smile that puts everyone at ease.",
    rotation: "-rotate-1",
    tapeColor: "bg-lavender/80",
    emoji: "🤍",
  },
  {
    id: 4,
    title: "Chapter 22",
    caption: "Grounded, ambitious, and blooming into her own.",
    rotation: "rotate-3",
    tapeColor: "bg-coral/40",
    emoji: "🌿",
  }
];

export default function MemoryGallery() {
  return (
    <div className="py-12">
      <div className="text-center max-w-xl mx-auto mb-8 px-4">
        <h3 className="font-fredoka text-3xl md:text-4xl font-bold text-plum">
          Scrapbook Polaroids 📸
        </h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto px-1 sm:px-4">
        {memories.map((card) => (
          <div
            key={card.id}
            className={`group relative bg-white p-2.5 pb-3.5 sm:p-4 sm:pb-6 rounded-2xl shadow-storybook hover:shadow-storybook-hover transition-all duration-300 hover:-translate-y-2 ${card.rotation}`}
          >
            {/* Washi Tape Graphic */}
            <div
              className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-4 sm:h-6 ${card.tapeColor} opacity-75 backdrop-blur-xs rounded-sm shadow-xs -rotate-2 pointer-events-none`}
            />

            {/* Photo / Polaroid Image Area: Shows ONLY emoji */}
            <div className="w-full aspect-square bg-gradient-to-b from-peach/20 via-butter/20 to-lavender/20 rounded-xl border border-peach/40 flex items-center justify-center select-none">
              <span className="text-4xl sm:text-6xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                {card.emoji}
              </span>
            </div>

            {/* Polaroid Label / Handwriting Caption */}
            <div className="mt-2.5 sm:mt-4 text-center">
              <h4 className="font-fredoka text-xs sm:text-lg font-bold text-plum leading-snug">
                {card.title}
              </h4>
              <p className="font-handwriting text-sm sm:text-xl text-plum/80 mt-0.5 sm:mt-1 leading-snug">
                "{card.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
