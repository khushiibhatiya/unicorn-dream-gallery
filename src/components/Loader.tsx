import unicorn from "@/assets/unicorn.png";

const Loader = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dream">
    <div className="relative">
      <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-[hsl(var(--pink-rose))] via-[hsl(var(--lavender))] to-[hsl(var(--pink-deep))] blur-2xl opacity-70" />
      <img src={unicorn} alt="Unicorn loading" className="relative h-40 w-40 animate-float drop-shadow-[0_0_30px_hsl(330_100%_80%/0.7)]" />
    </div>
    <p className="mt-8 font-[Dancing_Script] text-3xl text-gradient animate-heartbeat">Sprinkling magic...</p>
    <div className="mt-4 flex gap-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-3 w-3 rounded-full bg-[hsl(var(--pink-deep))] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  </div>
);

export default Loader;
