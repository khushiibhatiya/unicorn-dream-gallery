import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-[Dancing_Script] text-2xl text-[hsl(var(--lavender-deep))]">A Journey Through Love</p>
        <h2 className="mt-2 font-[Dancing_Script] text-4xl sm:text-5xl text-gradient">Our Magical Memories</h2>
      </div>

      <div className="mx-auto mt-10 max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] glass shadow-dreamy p-3 sm:p-4">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[hsl(var(--pink-soft))] to-[hsl(var(--lavender))]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                <div
                  className="absolute inset-0 scale-110 blur-2xl opacity-60"
                  style={{ backgroundImage: `url(${s.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <img
                  src={s.src}
                  alt={s.title}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="relative h-full w-full object-contain"
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />

            <div key={animKey} className="absolute inset-x-0 bottom-0 p-5 sm:p-10 text-center text-white">
              <h3 className="animate-slide-in-up font-[Dancing_Script] text-3xl sm:text-5xl drop-shadow-lg">
                {slide.title}
              </h3>
              <p className="mt-2 animate-fade-in text-sm sm:text-lg text-white/90" style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}>
                {slide.subtitle}
              </p>
            </div>

            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full glass text-foreground transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full glass text-foreground transition-transform hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-[hsl(var(--pink-deep))]" : "w-2 bg-[hsl(var(--pink-soft))]"
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
