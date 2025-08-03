import { Card } from "@/components/ui/card";
import { Trophy, Users, Presentation, Clock } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "24-Hour Hackathon Participation",
      description: "Participated in a 24-hour Hackathon at K. Ramakrishnan College of Engineering, Trichy, developing a Hospital Management System in a team.",
      icon: <Users className="w-8 h-8" />,
      category: "Hackathon",
      highlight: "Team Collaboration",
      color: "text-primary"
    },
    {
      title: "Paper Presentation Achievement",
      description: "Secured 3rd place at EGS Pillay Engineering College for an outstanding paper presentation, demonstrating research and communication skills.",
      icon: <Presentation className="w-8 h-8" />,
      category: "Academic",
      highlight: "3rd Place",
      color: "text-accent"
    }
  ];

  const stats = [
    { number: "8.56", label: "CGPA", icon: <Trophy className="w-6 h-6" /> },
    { number: "24", label: "Hour Hackathon", icon: <Clock className="w-6 h-6" /> },
    { number: "3rd", label: "Place Award", icon: <Trophy className="w-6 h-6" /> },
    { number: "2+", label: "Years Learning", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Achievements</span>{" "}
            <span className="text-foreground">& Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones that showcase my dedication and growth in technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border p-6 text-center hover:shadow-card hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-card-foreground mb-2 bg-hero-gradient bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border p-8 hover:shadow-card hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {achievement.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-4">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;