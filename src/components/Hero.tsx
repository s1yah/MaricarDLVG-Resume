import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              MARICAR P. DELA VEGA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer & IT Specialist
            </p>
            <p className="text-lg text-muted-foreground">
              BS Information Technology • Major in Cisco Networking
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base pt-4">
            <a 
              href="mailto:maricar.dlvg@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-smooth"
            >
              <Mail className="w-4 h-4" />
              maricar.dlvg@gmail.com
            </a>
            <a 
              href="tel:+639559270688" 
              className="flex items-center gap-2 hover:text-primary transition-smooth"
            >
              <Phone className="w-4 h-4" />
              (+63) 955 927 0688
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Dasmarinas, Cavite
            </div>
          </div>
          
          <div className="flex justify-center gap-4 pt-6">
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-glow hover:scale-105 transition-bounce"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
