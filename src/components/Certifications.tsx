import { Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      name: "IT Specialist – Databases",
      issuer: "Certiport",
      type: "Professional Certification"
    }
  ];

  const courseCertifications = [
    { name: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco" },
    { name: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild" },
    { name: "Cyber Threat Management", issuer: "Cisco" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco" },
    { name: "Introduction to IoT", issuer: "Cisco" },
    { name: "PCAP: Programming Essentials in Python", issuer: "OpenEDG" },
    { name: "Introduction to GitHub", issuer: "Microsoft" },
    { name: "Introduction to Git", issuer: "Microsoft" },
    { name: "Endpoint Security", issuer: "Cisco" }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <p className="text-muted-foreground">Professional credentials and completed courses</p>
          </div>
          
          <div className="space-y-6">
            {/* Professional Certifications */}
            <Card className="p-6 shadow-elegant">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Professional Certifications</h3>
                </div>
                
                <div className="grid gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary">{cert.type}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Course Completions */}
            <Card className="p-6 shadow-elegant">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Course Completions</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {courseCertifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                    >
                      <BookOpen className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm leading-tight">{cert.name}</p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
