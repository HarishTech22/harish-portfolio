import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="skills">
        <SkillsSection />
      </div>
      
      <div id="education">
        <EducationSection />
      </div>
      
      <div id="achievements">
        <AchievementsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Harish Shanmugam. Built with passion and dedication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
