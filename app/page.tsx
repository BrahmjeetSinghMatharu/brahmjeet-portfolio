import Comparison from "@/components/Comparison";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FinalCTA from "@/components/FinalCTA";
import LeetCodeStats from "@/components/GithubStats";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollText from "@/components/ScrollText";
import Toolkit from "@/components/Toolkit";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ScrollText
        eyebrow="Full-Stack + AI Engineer"
        text="I build scalable software, AI-powered systems, and real products that move from concept to production with clarity, speed, and engineering depth."
      />
      <Comparison />
      <Toolkit />
      <HorizontalScroll />
      <ExperienceTimeline />
      <LeetCodeStats />
      <FinalCTA />
    </main>
  );
}
