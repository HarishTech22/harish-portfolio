import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harishshanmugam79@gmail.com",
      href: "mailto:harishshanmugam79@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8072051337",
      href: "tel:+918072051337",
      color: "text-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Achalpuram, Sirkazhi (TK), Mayiladuthurai(DT)",
      href: "#",
      color: "text-primary-glow"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's</span>{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, and interesting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
              
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index}
                  className="bg-card-gradient border-border p-6 hover:shadow-card hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
                  onClick={() => contact.href !== "#" && window.open(contact.href, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </div>
                      <div className="text-card-foreground font-medium">
                        {contact.value}
                      </div>
                    </div>
                    {contact.href !== "#" && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col justify-center space-y-8">
              <Card className="bg-card-gradient border-border p-8 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-card-foreground mb-4">
                    Ready to collaborate?
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm currently seeking internship opportunities and exciting projects 
                    to contribute to. Let's build something amazing together!
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full group"
                      onClick={() => window.open('mailto:harishshanmugam79@gmail.com', '_blank')}
                    >
                      <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card-gradient rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">Open to</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
                <div className="text-center p-4 bg-card-gradient rounded-lg border border-border">
                  <div className="text-2xl font-bold text-accent mb-1">Available</div>
                  <div className="text-sm text-muted-foreground">Immediately</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;