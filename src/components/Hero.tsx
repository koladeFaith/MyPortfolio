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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('/src\images\image-1.png')] h-64  w-full bg-cover bg-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container-custom section-padding text-center relative z-10 animate-fade-in">
        <div className="space-y-3 max-w-4xl mx-auto">
          <div className="flex justify-center mb-5">
            <Avatar className="h-40 w-40 md:h-50 md:w-50 border-4  shadow-lg bg-cover bg-left">
              <AvatarImage
                src="src\images\IMG-20250702-WA0023_1~2.jpg"
                alt="Profile Picture"
                className=""
              />
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                YN
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Kolade Faith</span>
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Frontend Developer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, responsive, and user-friendly web experiences
            with modern technologies
          </p>

          <div className="flex gap-4 justify-center pt-6 ">
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

          <div className="flex gap-4 justify-center pt-8">
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
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float hover:cursor-pointer">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
