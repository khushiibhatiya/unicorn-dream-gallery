import unicorn from "@/assets/unicorn.png";

interface Props {
  name: string;
  onScroll: () => void;
}

const WelcomeHero = ({ name, onScroll }: Props) => (
  <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
    <div className="animate-fade-in-scale">
      <img
        src={unicorn}
        alt="Magical unicorn"
        width={768}
        height={768}
        className="mx-auto h-44 w-44 sm:h-56 sm:w-56 animate-float drop-shadow-[0_10px_40px_hsl(330_100%_80%/0.6)]"
      />
    </div>
    <p className="mt-6 animate-fade-in font-[Dancing_Script] text-2xl text-[hsl(var(--lavender-deep))]" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
      ✨ A magical day for a magical soul ✨
    </p>
    <h1
      className="mt-4 animate-slide-in-up font-[Dancing_Script] text-5xl sm:text-7xl md:text-8xl text-gradient leading-tight"
      style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
    >
      Happy Birthday<br />
      <span className="inline-block animate-wiggle">{name}</span> 🎂
    </h1>
    <p
      className="mt-6 max-w-xl animate-fade-in text-base sm:text-lg text-[hsl(var(--foreground))]/80"
      style={{ animationDelay: "0.7s", animationFillMode: "backwards" }}
    >
      Today the stars dance brighter, the unicorns sing sweeter, and the whole universe celebrates you. 🦄💖
    </p>
    <button
      onClick={onScroll}
      className="mt-10 group relative animate-fade-in rounded-full bg-magic px-8 py-4 font-semibold text-primary-foreground shadow-dreamy transition-transform hover:scale-105 active:scale-95"
      style={{ animationDelay: "1s", animationFillMode: "backwards" }}
    >
      <span className="relative z-10 flex items-center gap-2">
        Begin the Magic <span className="animate-heartbeat">💕</span>
      </span>
      <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
    </button>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-2xl">🌸</div>
  </section>
);

export default WelcomeHero;
