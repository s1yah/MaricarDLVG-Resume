import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div 
            className={`text-center space-y-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <p className="text-muted-foreground">Academic excellence and achievements</p>
          </div>
          
          <div className="space-y-6">
            <Card 
              className={`p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-bold">De La Salle University – Dasmariñas</h3>
                    <span className="text-sm text-muted-foreground">July 2026</span>
                  </div>
                  <p className="text-lg text-primary font-semibold">BS Information Technology</p>
                  <p className="text-muted-foreground">Major in Cisco Networking</p>
                  <p className="text-sm italic">
                    Thesis: "AN IOT-BASED BUS TRACKING AND PASSENGER MONITORING SYSTEM FOR JASPER JEAN SERVICES INC."
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-accent">DOST-SEI RA7687 Scholar</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card 
              className={`p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] hover:border-primary/50 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">De La Salle University Senior High School – Dasmariñas</h3>
                  <p className="text-lg text-primary font-semibold">Science, Technology, Engineering, and Mathematics (STEM)</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-accent">With Highest Honors</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
