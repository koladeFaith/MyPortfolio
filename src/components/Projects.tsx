import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern, responsive e-commerce website with shopping cart functionality and payment integration",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team features",
      tech: ["React", "REST API", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "Analytics dashboard with interactive charts and data visualization components",
      tech: ["React", "TypeScript", "Recharts"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-[#DCDBDB]">
      <div className="container-custom" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-lift card-shadow hover:card-shadow-hover bg-[#fafafa60]  transition-all duration-700 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + index * 150}ms` }}>
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className=" ">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-200 bg-[#fafafab4] hover:opacity-70">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-linear-to-r from-blue-500 to-teal-200 hover:opacity-70">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
