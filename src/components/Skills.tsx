import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Database",
      icon: Code,
      skills: [
        "C# (Strong Project Usage)",
        "Python (PCAP Certified)",
        "Java",
        "C++",
        "JavaScript",
        "SQL (Database Design & Management)"
      ]
    },
    {
      title: "Web & Enterprise",
      icon: Globe,
      skills: [
        "ASP.NET",
        "MERN Stack",
        "HTML5/CSS3",
        "Database Modeling",
        "SAP S/4HANA",
        "MS Visual Studio"
      ]
    },
    {
      title: "Fintech & Security",
      icon: Shield,
      skills: [
        "Business Logic Implementation",
        "User Authentication",
        "Data Security Principles",
        "Access Lists",
        "Firewalls",
        "Endpoint Security"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: [
        "Figma",
        "Oracle VirtualBox",
        "Git/GitHub",
        "Google Colab",
        "Jupyter Notebook",
        "Anaconda"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
            <p className="text-muted-foreground">Comprehensive technology stack and expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-elegant hover:shadow-glow transition-smooth hover:scale-[1.02]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="text-sm hover:bg-primary/10 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
