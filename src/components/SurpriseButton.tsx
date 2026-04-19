import { useState } from "react";
import { Gift, X } from "lucide-react";

const SurpriseButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative z-10 flex justify-center py-12">
        <button
          onClick={() => setOpen(true)}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[hsl(var(--pink-deep))] via-[hsl(var(--lavender-deep))] to-[hsl(var(--pink-deep))] bg-[length:200%_auto] animate-shimmer px-10 py-5 text-lg font-semibold text-white shadow-dreamy transition-transform hover:scale-105"
        >
          <span className="flex items-center gap-3">
            <Gift className="h-6 w-6 animate-wiggle" />
            Click for a Surprise 🎁
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-6 animate-fade-in" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-[hsl(var(--pink-deep))]/30 backdrop-blur-md" />
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full rounded-3xl glass p-8 sm:p-10 text-center shadow-glow animate-fade-in-scale">
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/60 text-foreground hover:bg-white">
              <X className="h-4 w-4" />
            </button>
            <div className="text-6xl animate-heartbeat">🎁✨</div>
            <h3 className="mt-4 font-[Dancing_Script] text-4xl text-gradient">A Little Secret</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Even on your busiest day, remember — you are someone's favorite reason to smile. The world is a softer, brighter place because you exist. 🌷💖
            </p>
            <div className="mt-6 text-3xl">🦄 💕 🌟 🌸 ✨</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SurpriseButton;
