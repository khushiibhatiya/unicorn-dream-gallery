const FinalMessage = () => (
  <section className="relative z-10 px-6 py-20 sm:py-28">
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-5xl animate-heartbeat">💖</div>
      <h2 className="mt-6 font-[Dancing_Script] text-4xl sm:text-6xl text-gradient">From My Heart to Yours</h2>
      <div className="mt-10 rounded-[2rem] glass p-8 sm:p-12 shadow-dreamy">
        <p className="font-[Dancing_Script] text-2xl sm:text-3xl text-foreground/90 leading-relaxed">
          "You mean the world to me.<br />
          Thank you for being in my life ❤️"
        </p>
        <p className="mt-6 text-base text-foreground/70">
          May your year ahead overflow with laughter, glitter, and every dream you've ever whispered to the stars. 🌟🦄
        </p>
        <div className="mt-8 flex justify-center gap-3 text-2xl">
          <span className="animate-float">🌸</span>
          <span className="animate-float" style={{ animationDelay: "0.5s" }}>💕</span>
          <span className="animate-float" style={{ animationDelay: "1s" }}>✨</span>
          <span className="animate-float" style={{ animationDelay: "1.5s" }}>🦄</span>
          <span className="animate-float" style={{ animationDelay: "2s" }}>💖</span>
        </div>
      </div>
      <p className="mt-10 text-sm text-foreground/60">Made with endless love, just for you 💌</p>
    </div>
  </section>
);

export default FinalMessage;
