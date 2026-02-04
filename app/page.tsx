import Hero from "@/components/Hero";
import InstallationGuide from "@/components/InstallationGuide";
import ModelLab from "@/components/ModelLab";
import SecurityCenter from "@/components/SecurityCenter";
import MoltbookFeed from "@/components/MoltbookFeed";
import SkillMarketplace from "@/components/SkillMarketplace";

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="start"><InstallationGuide /></div>
      <div id="models"><ModelLab /></div>
      <div id="skills"><SkillMarketplace /></div>
      <div id="security"><SecurityCenter /></div>
      <div id="moltbook"><MoltbookFeed /></div>
    </>
  );
}
