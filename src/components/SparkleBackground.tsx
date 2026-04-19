import { useMemo } from "react";

const ICONS = ["✨", "💖", "🌸", "⭐", "🦄", "💕", "🌟", "🩷"];

const SparkleBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 18,
        size: 14 + Math.random() * 22,
        icon: ICONS[i % ICONS.length],
        opacity: 0.5 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-dream" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[hsl(var(--pink-soft))] blur-3xl opacity-60 animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--lavender))] blur-3xl opacity-50 animate-float" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[hsl(var(--pink-rose))] blur-3xl opacity-40 animate-float-slow" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute animate-drift select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
            filter: "drop-shadow(0 0 8px hsl(330 100% 80% / 0.6))",
          }}
        >
          {p.icon}
        </span>
      ))}
    </div>
  );
};

export default SparkleBackground;
