import { Code2, Palette, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating intuitive interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and best user experience",
    },
  ];

  return (
    <section id="about" className="section-padding bg-[#DCDBDB]">
      <div className="container-custom" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-100"
          }`}>
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 animate-on-scroll slide-in-left`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate frontend developer with expertise in building
              modern web applications. I specialize in creating seamless user
              experiences using the latest technologies and best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a keen eye for design and a commitment to writing clean,
              efficient code, I transform ideas into polished, production-ready
              applications that users love.
            </p>
          </div>

          <div className="grid gap-6 stagger animate-on-scroll">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-card p-6 rounded-lg card-shadow hover:card-shadow-hover bg-[#fafafa60]  hover-lift transition-all duration-700 slide-in-right`}
                style={{ animationDelay: `${400 + index * 150}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-200 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
