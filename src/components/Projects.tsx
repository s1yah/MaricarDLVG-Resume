import { Code2, Database, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Web-Based Salary Loan Calculation System",
      description: "Full-stack financial management system with complex business logic for loan calculations and amortization schedules.",
      date: "June 2022",
      icon: Database,
      achievements: [
        "Engineered core financial logic to calculate interest rates, loan amounts, and amortization schedules",
        "Implemented stringent input validation and data integrity checks for sensitive financial transactions",
        "Designed secure user interface for tracking loan status, payment history, and outstanding balances"
      ],
      technologies: ["C#", "ASP.NET", "SQL", "JavaScript"]
    },
    {
      title: "Multi-User Store Management System",
      description: "Comprehensive inventory and sales management system with role-based access control and real-time operations.",
      icon: Shield,
      achievements: [
        "Architected complete SQL database schema for inventory, sales transactions, and multi-level user roles",
        "Developed authentication and authorization layer with granular user permissions",
        "Managed full software lifecycle with web forms for CRUD operations on real-time data"
      ],
      technologies: ["Python", "MongoDB", "Express", "React", "Node.js", "SQL"]
    }
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div 
            className={`text-center space-y-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Projects Delivered</h2>
            <p className="text-muted-foreground">Real-world applications showcasing technical expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`p-6 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] gradient-card hover:border-primary/50 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                      {project.date && (
                        <p className="text-sm text-muted-foreground">{project.date}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex gap-2 text-sm">
                        <Code2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
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

export default Projects;
