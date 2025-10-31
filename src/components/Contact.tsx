import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div 
            className={`text-center space-y-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground">Let's discuss your next project or opportunity</p>
          </div>
          
          <Card 
            className={`p-8 shadow-elegant hover:shadow-glow transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:maricar.dlvg@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">maricar.dlvg@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+639559270688"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-smooth group"
              >
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">(+63) 955 927 0688</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Dasmarinas, Cavite, 4114</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4">
                <div className="flex gap-3">
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full hover:gradient-primary hover:text-white transition-smooth"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline" 
                    className="rounded-full hover:gradient-primary hover:text-white transition-smooth"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
