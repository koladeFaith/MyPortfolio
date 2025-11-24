import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Vite", "npm", "Responsive Design", "REST APIs", "UI/UX"],
    },
    {
      title: "Currently Learning",
      skills: ["Next.js", "Node.js", "Testing", "Accessibility"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-[#DCDBDB]">
      <div className="container-custom" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}>
          Skills & <span className="text-gradient">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-lg card-shadow hover:card-shadow-hover transition-all bg-[#fafafa60]  duration-700 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + index * 150}ms` }}>
              <h3 className="text-2xl font-semibold mb-6  ">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm py-2 px-4 bg-blue-200 hover:bg-blue-500 hover:text-primary-foreground transition-colors cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
