import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/images/logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-99 transition-all duration-300 ${
        isScrolled
          ? "/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}>
      <div className="">
        <div className="flex items-center justify-between h-16 lg:mx-10 xl:mx-60">
          {/* FIXED LOGO */}
          <img
            src={logo}
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity w-30 lg:w-40 cursor-pointer z-99"
          />

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[16px] font-medium text-black/90 hover:text-foreground transition-colors relative group hover:cursor-pointer">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <button className="hidden lg:flex hover:cursor-pointer">
            My Resume
          </button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X size={34} className="z-99" />
            ) : (
              <Menu size={34} />
            )}
          </Button>
        </div>

        {/* BACKDROP OVERLAY */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* ⭐ FIXED: z-[100] NOT z-100 */}
        <div
          className={`
            py-4 fixed backdrop-blur-xl w-full h-full z-99
            transition-transform duration-300
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}>
          <div className="flex flex-col gap-8 justify-center items-center mt-12 text-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-3xl font-medium text-foreground/80 hover:text-foreground transition-colors py-2 hover:cursor-pointer">
                {link.name}
              </button>
            ))}
            <hr className="bg-red-200 w-40 mt-10" />
            <button className="hover:cursor-pointer text-2xl">My Resume</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
