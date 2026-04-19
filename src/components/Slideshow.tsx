import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Star } from "lucide-react";
import p1 from "@/assets/photo-1.png";
import p2 from "@/assets/photo-2.png";
import p3 from "@/assets/photo-3.png";
import p4 from "@/assets/photo-4.png";
import p5 from "@/assets/photo-5.png";
import p6 from "@/assets/photo-6.png";
import p7 from "@/assets/photo-7.png";
import p8 from "@/assets/photo-8.png";

const slides = [
  { src: p1, title: "Happy Birthday Beta 💖", subtitle: "With Mumma's love forever" },
  { src: p2, title: "Our Beautiful Memories ✨", subtitle: "Twirls, giggles & garba nights" },
  { src: p5, title: "Family Love Forever 🫶", subtitle: "The heart of every celebration" },
  { src: p8, title: "Look How Far You've Come 🌷", subtitle: "From little sparkle to shining star" },
  { src: p6, title: "Daddy's Princess 👑", subtitle: "Forever his pride & joy" },
  { src: p7, title: "Aunty's Little Star 💞", subtitle: "Bonded by love, woven by stars" },
  { src: p4, title: "You Are So Special 🌸", subtitle: "Wild, free & wonderfully you" },
  { src: p3, title: "Made With Love 💕", subtitle: "Every memory a treasure" },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => setAnimKey((k) => k + 1), [index]);

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section id="slideshow" className="relative z-10 px-4 py-16 sm:py-24">
      {/* Section header */}
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 shadow-soft">
          <Sparkles className="h-4 w-4 text-[hsl(var(--pink-deep))] animate-sparkle" />
          <p className="font-[Dancing_Script] text-xl text-[hsl(var(--lavender-deep))]">A Journey Through Love</p>
          <Sparkles className="h-4 w-4 text-[hsl(var(--pink-deep))] animate-sparkle" style={{ animationDelay: "1s" }} />
        </div>
        <h2 className="mt-4 font-[Dancing_Script] text-4xl sm:text-6xl text-gradient drop-shadow-sm">
          Our Magical Memories
        </h2>
        <div className="mt-3 flex items-center justify-center gap-2 text-[hsl(var(--pink-deep))]">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(var(--pink-rose))]" />
          <Heart className="h-4 w-4 fill-current animate-heartbeat" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(var(--pink-rose))]" />
        </div>
      </div>

      {/* Frame */}
      <div className="relative mx-auto mt-10 max-w-5xl">
        {/* Animated glow ring */}
        <div
          className="absolute -inset-4 rounded-[2.5rem] opacity-70 blur-2xl animate-shimmer"
          style={{
            background:
              "linear-gradient(120deg, hsl(var(--pink-rose)), hsl(var(--lavender)), hsl(var(--gold)), hsl(var(--pink-rose)))",
            backgroundSize: "200% 200%",
          }}
          aria-hidden="true"
        />

        {/* Floating decorations */}
        <div className="pointer-events-none absolute -top-6 -left-6 z-20 text-4xl animate-float-slow drop-shadow-lg">🦄</div>
        <div className="pointer-events-none absolute -top-8 -right-4 z-20 text-3xl animate-float drop-shadow-lg" style={{ animationDelay: "1.5s" }}>👑</div>
        <div className="pointer-events-none absolute -bottom-6 -left-4 z-20 text-3xl animate-float drop-shadow-lg" style={{ animationDelay: "0.8s" }}>🌸</div>
        <div className="pointer-events-none absolute -bottom-8 -right-6 z-20 text-4xl animate-float-slow drop-shadow-lg" style={{ animationDelay: "2s" }}>💖</div>

        {/* Polaroid card */}
        <div className="relative rounded-[2rem] glass shadow-dreamy p-3 sm:p-5 backdrop-blur-2xl">
          {/* Corner stars */}
          <Star className="absolute top-2 left-2 h-5 w-5 text-[hsl(var(--gold))] fill-current animate-sparkle" />
          <Star className="absolute top-2 right-2 h-5 w-5 text-[hsl(var(--gold))] fill-current animate-sparkle" style={{ animationDelay: "0.7s" }} />
          <Star className="absolute bottom-2 left-2 h-5 w-5 text-[hsl(var(--gold))] fill-current animate-sparkle" style={{ animationDelay: "1.4s" }} />
          <Star className="absolute bottom-2 right-2 h-5 w-5 text-[hsl(var(--gold))] fill-current animate-sparkle" style={{ animationDelay: "2.1s" }} />

          <div className="relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[hsl(var(--pink-soft))] via-white to-[hsl(var(--lavender))]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
                  i === index ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
                }`}
              >
                <div
                  className="absolute inset-0 scale-125 blur-3xl opacity-70"
                  style={{ backgroundImage: `url(${s.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <img
                  src={s.src}
                  alt={s.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="relative h-full w-full object-contain drop-shadow-2xl"
                />
              </div>
            ))}

            {/* Inner sparkle particles */}
            <div className="pointer-events-none absolute inset-0 z-10">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="absolute text-xl animate-sparkle"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${15 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: `${2 + (i % 3)}s`,
                    filter: "drop-shadow(0 0 6px hsl(var(--gold) / 0.8))",
                  }}
                >
                  ✨
                </span>
              ))}
            </div>

            {/* Caption gradient + text */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div key={animKey} className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-10 text-center text-white">
              <div className="flex justify-center gap-1 mb-2 animate-fade-in">
                <Heart className="h-4 w-4 fill-[hsl(var(--pink-soft))] text-[hsl(var(--pink-soft))]" />
                <Heart className="h-3 w-3 fill-[hsl(var(--pink-rose))] text-[hsl(var(--pink-rose))] mt-1" />
                <Heart className="h-4 w-4 fill-[hsl(var(--pink-soft))] text-[hsl(var(--pink-soft))]" />
              </div>
              <h3 className="animate-slide-in-up font-[Dancing_Script] text-3xl sm:text-6xl drop-shadow-[0_4px_20px_rgba(255,150,200,0.8)]">
                {slide.title}
              </h3>
              <p
                className="mt-3 animate-fade-in text-sm sm:text-xl text-white/95 italic font-[Quicksand]"
                style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
              >
                {slide.subtitle}
              </p>
            </div>

            {/* Nav buttons */}
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="group absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white shadow-soft transition-all hover:scale-110 hover:bg-white/50"
            >
              <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="group absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white shadow-soft transition-all hover:scale-110 hover:bg-white/50"
            >
              <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Slide counter */}
            <div className="absolute top-4 right-4 z-30 rounded-full bg-white/30 backdrop-blur-md border border-white/50 px-3 py-1 text-xs font-[Quicksand] font-semibold text-white shadow-soft">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`group relative h-2.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-10 bg-gradient-to-r from-[hsl(var(--pink-deep))] to-[hsl(var(--lavender-deep))] shadow-[0_0_12px_hsl(var(--pink-deep)/0.6)]"
                    : "w-2.5 bg-[hsl(var(--pink-soft))] hover:bg-[hsl(var(--pink-rose))] hover:scale-125"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
