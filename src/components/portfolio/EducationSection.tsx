import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "A.V.C. College of Engineering",
      degree: "B.E. Computer Science & Engineering",
      period: "Aug 2022 - May 2026",
      score: "CGPA: 8.56",
      type: "Undergraduate"
    },
    {
      institution: "Srinivasa Matric Hr. Sec. School",
      degree: "HSC (12th)",
      period: "Jun 2021 - May 2022",
      score: "87%",
      type: "Higher Secondary"
    },
    {
      institution: "Srinivasa Matric Hr. Sec. School",
      degree: "SSLC (10th)",
      period: "Jun 2019 - May 2020",
      score: "90%",
      type: "Secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Academic</span>{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-card-gradient border-border p-8 hover:shadow-card hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
                
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {edu.type}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-lg text-primary font-semibold mb-4">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-accent">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;