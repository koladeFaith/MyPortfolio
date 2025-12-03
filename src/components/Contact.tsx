import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");

  
  const whatsappNumber = "2349160824156";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setToastText("Please complete name, email and message fields.");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3500);
      return;
    }

    // Build WhatsApp message (use literal newlines then encode)
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      text
    )}`;

    // Open WhatsApp in a new tab/window
    window.open(url, "_blank");

    // Show toast to user
    setToastText("Message sent — opening WhatsApp...");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);

    // reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

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
            className={`space-y-6 transition-all duration-700 delay-200 animate-on-scroll slide-in-left`}>
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
                <div className="p-3  rounded-lg">
                  <Mail className="w-5 h-5 text-blue-500 " />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    faithkolade0507@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3  rounded-lg">
                  <Phone className="w-5 h-5 text-blue-500 " />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground"> +234 916 0824 156</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3  rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-500 " />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`space-y-6 bg-[#fafafa60] p-8 rounded-lg card-shadow transition-all duration-700 delay-300 animate-on-scroll slide-in-right`}>
            <div>
              <Input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                placeholder="Your Name"
                required
                className="h-12  border-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                type="email"
                placeholder="Your Email"
                required
                className="h-12 border-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Input
                value={subject}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSubject(e.target.value)
                }
                placeholder="Subject"
                className="h-12 border-blue-300 outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>
            <div>
              <Textarea
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                placeholder="Your Message "
                required
                className="min-h-[150px] resize-none border-blue-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full h-12  bg-linear-to-r from-blue-500 to-teal-200 hover:opacity-90 transition-opacity text-base hover:cursor-pointer">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Simple toast */}
      {toastVisible && (
        <div className="fixed right-4 bottom-6 z-50">
          <div className="rounded-md bg-foreground text-background px-4 py-2 shadow-lg">
            {toastText}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
