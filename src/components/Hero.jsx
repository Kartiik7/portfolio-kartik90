import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit animate-scale-up bg-gradient-secondary text-secondary-foreground border-secondary/20">
              👋 Available for work
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <TypewriterText 
                text="Full Stack" 
                speed={80} 
                className="block"
              />
              <TypewriterText 
                text="Developer" 
                speed={80} 
                delay={1200} 
                className="text-gradient block"
              />
            </h1>
            <div className="animate-slide-up" style={{ animationDelay: '2.5s' }}>
              <p className="text-xl text-muted-foreground max-w-lg">
                I craft exceptional digital experiences with modern technologies. 
                Passionate about clean code, user experience, and scalable solutions.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '3s' }}>
            <Button 
              size="lg" 
              className="btn-primary transition-spring hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary transition-spring hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '3.5s' }}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="transition-bounce hover:text-primary hover:scale-110 hover:glow-subtle"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="transition-bounce hover:text-secondary hover:scale-110 hover:glow-subtle"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="transition-bounce hover:text-accent hover:scale-110 hover:glow-subtle"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative">
            <div className="hero-gradient-subtle absolute -inset-4 rounded-full animate-glow"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float transition-spring hover:scale-105">
              <img 
                src={profileImage} 
                alt="Full Stack Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;