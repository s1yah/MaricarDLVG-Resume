import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div 
            className={`space-y-2 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground animate-fade-in">
              MARICAR P. DELA VEGA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium" style={{ animationDelay: '0.2s' }}>
              Full-Stack Developer & IT Specialist
            </p>
            <p className="text-lg text-muted-foreground/80" style={{ animationDelay: '0.3s' }}>
              BS Information Technology • Major in Cisco Networking
            </p>
          </div>
          
          <div 
            className={`flex flex-wrap justify-center gap-4 text-sm md:text-base pt-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="mailto:maricar.dlvg@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-smooth hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              maricar.dlvg@gmail.com
            </a>
            <a 
              href="tel:+639559270688" 
              className="flex items-center gap-2 hover:text-primary transition-smooth hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              (+63) 955 927 0688
            </a>
            <div className="flex items-center gap-2 text-muted-foreground/80">
              <MapPin className="w-4 h-4" />
              Dasmarinas, Cavite
            </div>
          </div>
          
          <div 
            className={`flex justify-center gap-4 pt-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              className="gradient-primary text-white shadow-glow hover:scale-105 hover:shadow-[0_0_40px_hsl(195_85%_55%/0.5)] transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
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
