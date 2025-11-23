import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="contact" className="section-padding bg-[#DCDBDB]">
      <div className="container-custom" ref={ref}>
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}>
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground text-lg">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    your.email@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>

          <form
            className={`space-y-6 bg-[#fafafa60] p-8 rounded-lg card-shadow transition-all duration-700 delay-300 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}>
            <div>
              <Input placeholder="Your Name" className="h-12 " />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="h-12 " />
            </div>
            <div>
              <Input placeholder="Subject" className="h-12 " />
            </div>
            <div>
              <Textarea
                placeholder="Your Message "
                className="min-h-[150px] resize-none"
              />
            </div>
            <Button className="w-full h-12  bg-linear-to-r from-blue-500 to-teal-200 hover:opacity-90 transition-opacity text-base">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
