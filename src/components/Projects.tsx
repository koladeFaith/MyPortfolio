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
    // {
    //   title: "E-commerce Platform",
    //   description:
    //     "A modern, responsive e-commerce website with shopping cart functionality and payment integration",
    //   tech: ["React", "Javascript", "Tailwind CSS"],
    //   image:
    //     "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    //   codeUrl: "https://github.com/koladeFaith/Google_Keep_Project",
    //   liveUrl: "https://food-delivery-five-chi.vercel.app/",
    // },
    {
      title: "Note Keep App",
      description:
        "Collaborative task management application with real-time updates and team features",
      tech: ["HTML", "Javascript", "CSS3"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      codeUrl: "https://github.com/koladeFaith/note-keep-app",
      liveUrl: "https://google-keep-project.vercel.app/",
    },
    {
      title: "Caferio Website",
      description:
        "A responsive café website designed to showcase menu items, brand identity, and business information with a modern layout.",
      tech: ["HTML", "CSS", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      codeUrl: "https://github.com/koladeFaith/Caferio-website-clone",
      liveUrl: "https://caferio-ui.vercel.app/",
    },
    {
      title: "Quote Generator App",
      description:
        "A quote generator application that fetches and displays inspirational quotes from a public API with dynamic updates.",
      tech: ["JavaScript", "REST API", "React", "TailwindCSS"],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      codeUrl: "https://github.com/koladeFaith/Quote_api_react",
      liveUrl: "https://quote-api-react.vercel.app/",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger animate-on-scroll">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-lift card-shadow hover:card-shadow-hover bg-[#fafafa60] hover:cursor-pointer transition-all duration-700 slide-in-right`}
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
                <div className="flex flex-wrap gap-2 mb-4  ">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-blue-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} - code`}
                    className="flex-1">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex-1 border-blue-200 bg-[#fafafab4] hover:opacity-70 hover:cursor-pointer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} - live demo`}
                    className="flex-1">
                    <Button
                      size="sm"
                      className="w-full flex-1 bg-linear-to-r from-blue-500 to-teal-200 hover:opacity-70 hover:cursor-pointer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </a>
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
