import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[url('/src\images\image-1.png')] h-64  w-full bg-cover bg-left border-t">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center gap-6">
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

          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} Your Kolade Faith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
