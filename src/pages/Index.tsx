import { useEffect, useState } from "react";
import SparkleBackground from "@/components/SparkleBackground";
import Loader from "@/components/Loader";
import WelcomeHero from "@/components/WelcomeHero";
import Slideshow from "@/components/Slideshow";
import SurpriseButton from "@/components/SurpriseButton";
import FinalMessage from "@/components/FinalMessage";
import MusicToggle from "@/components/MusicToggle";

const NAME = "Beta";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    document.documentElement.style.scrollBehavior = "smooth";
    return () => clearTimeout(t);
  }, []);

  const scrollToSlides = () => {
    document.getElementById("slideshow")?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <Loader />;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <SparkleBackground />
      <WelcomeHero name={NAME} onScroll={scrollToSlides} />
      <Slideshow />
      <SurpriseButton />
      <FinalMessage />
      <MusicToggle />
    </main>
  );
};

export default Index;
