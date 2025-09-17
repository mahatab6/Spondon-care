import { AboutHero } from "@/components/About/AboutHero";
import { MissionVision } from "@/components/About/MissionVision";
import { StatsCard } from "@/components/About/StatsCard";
import { TeamSection } from "@/components/About/TeamSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <StatsCard />
      <TeamSection />
    </main>
  );
}
