import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, GitBranch, Brain, Languages } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "Java", "JavaScript", "C"],
      color: "text-primary"
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML", "CSS", "React", "Node.js"],
      color: "text-accent"
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Docker"],
      color: "text-primary-glow"
    },
    {
      title: "Other Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Problem-solving", "Debugging", "Algorithm Design", "Software Architecture"],
      color: "text-accent"
    },
    {
      title: "Languages",
      icon: <Languages className="w-6 h-6" />,
      skills: ["English", "Tamil"],
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span> & 
            <span className="text-foreground"> Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border p-8 hover:shadow-card hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;