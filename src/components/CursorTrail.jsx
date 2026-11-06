import React, { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [trails, setTrails] = useState([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      // Throttle sparkle creation
      if (Math.random() > 0.35) return;

      const icons = ['✨', '⭐', '🌸', '💖', '💫'];
      const icon = icons[Math.floor(Math.random() * icons.length)];
      const id = Date.now() + Math.random();

      setTrails((prev) => [
        ...prev.slice(-12),
        {
          id,
          x: e.clientX,
          y: e.clientY + window.scrollY,
          icon,
          size: Math.random() * 8 + 12,
        },
      ]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((item) => item.id !== id));
      }, 700);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trails.map((t) => (
        <span
          key={t.id}
          className="absolute select-none animate-ping opacity-75"
          style={{
            left: `${t.x}px`,
            top: `${t.y - window.scrollY}px`,
            fontSize: `${t.size}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          {t.icon}
        </span>
      ))}
    </div>
  );
}
