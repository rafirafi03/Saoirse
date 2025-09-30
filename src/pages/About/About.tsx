import AboutHero from "../../components/About/AboutHeroSection";
import FrequentlyAskedSection from "../../components/About/FrequentlyAskedSection";
import TeamMembersSection from "../../components/About/TeamMembersSection";
import Footer from "../../components/Footer/Footer";
import SiteHeader from "../../components/Header/Header";

export default function About() {
  return (
    <>
      <SiteHeader />
      <AboutHero />
      <FrequentlyAskedSection />
      <TeamMembersSection />
      <Footer />
    </>
  );
}
