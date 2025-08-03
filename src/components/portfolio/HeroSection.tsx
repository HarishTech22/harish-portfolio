import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-card-gradient p-2 shadow-card">
                <img 
                  src="/lovable-uploads/350f851b-e3c3-4df8-a5b6-c21562d58697.png"
                  alt="Harish Shanmugam"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <div className="absolute -inset-4 bg-hero-gradient opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                HARISH
              </span>
              <br />
              <span className="text-foreground">SHANMUGAM</span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span className="text-primary font-semibold">Computer Science & Engineering Student</span>
              <br />
              Passionate about Technology & Software Development
            </div>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              I am passionate about technology and eager to learn and grow in programming 
              and software development. Currently pursuing B.E. Computer Science & Engineering 
              at A.V.C. College of Engineering.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-12">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>8072051337</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>harishshanmugam79@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Achalpuram, Sirkazhi (TK), Mayiladuthurai(DT)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://smarthospitalmanagementsystem.netlify.app/', '_blank')}
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="group text-primary hover:bg-primary/10"
                onClick={() => window.open('https://github.com/HarishTech22', '_blank')}
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;