import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              👋 Available for work
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Full Stack
              <span className="text-gradient block">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              I craft exceptional digital experiences with modern technologies. 
              Passionate about clean code, user experience, and scalable solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="hero-gradient transition-smooth hover:glow-primary">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="transition-smooth hover:bg-accent hover:text-accent-foreground">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="transition-bounce hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="transition-bounce hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="transition-bounce hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="hero-gradient-subtle absolute -inset-4 rounded-full animate-glow"></div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
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