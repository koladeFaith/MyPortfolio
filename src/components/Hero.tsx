import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('/src\images\image-1.png')] h-64  w-full bg-cover bg-center px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container-custom section-padding  relative z-10 animate-fade-in text-center lg:text-start">
        <div className="space-y-3 max-w-4xl mx-auto">
          <div className="lg:flex justify-between items-center gap-28">
            {" "}
            <div className="flex justify-center mb-5">
              <Avatar className="h-40 w-40 lg:h-80 lg:w-80 border-4  shadow-lg bg-cover bg-left">
                <AvatarImage
                  src="src\images\IMG-20250702-WA0023_1~2.jpg"
                  alt="Profile Picture"
                  className=""
                />
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                  KF
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2 max-w-4xl lg:max-w-[500px] ">
              {" "}
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="text-gradient">Kolade Faith</span>
              </h1>
              <p className="text-3xl lg:text-4xl text-muted-foreground font-medium">
                Frontend Developer
              </p>
              <p className="text-lg lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Crafting beautiful, responsive, and user-friendly web
                experiences with modern technologies
              </p>
              <div className="flex gap-4 justify-center lg:justify-normal pt-3 ">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-linear-to-r from-blue-500 to-teal-200 hover:opacity-100 transition-opacity font-medium hover:cursor-pointer">
                  View My Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 font-medium hover:cursor-pointer">
                  Get In Touch
                </Button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-normal  pt-3">
                <a
                  href="https://github.com/koladeFaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/faith-kolade-817357384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:faithkolade0507@gmail.com"
                  className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <button
                onClick={() => scrollToSection("about")}
                className="absolute bottom-10 md:bottom-0 md:left-1/2 -translate-x-1/2 animate-float hover:cursor-pointer ">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
