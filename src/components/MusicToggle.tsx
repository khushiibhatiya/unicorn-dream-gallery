import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

const TRACK = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3";

const MusicToggle = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.volume = 0.35;
    ref.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) { ref.current.pause(); setPlaying(false); }
    else { ref.current.play().then(() => setPlaying(true)).catch(() => {}); }
  };

  return (
    <>
      <audio ref={ref} src={TRACK} loop />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-magic text-primary-foreground shadow-dreamy transition-transform hover:scale-110 active:scale-95"
      >
        {playing ? <Music className="h-5 w-5 animate-heartbeat" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
};

export default MusicToggle;
