import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bhar0304@mylaurier.ca",
    href: "mailto:bhar0304@mylaurier.ca",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "647-922-5368",
    href: "tel:+16479225368",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Waterloo, Ontario, Canada",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jenishbharucha",
    color: "hover:bg-blue-500 hover:text-white",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jenishbharucha",
    color: "hover:bg-gray-900 hover:text-white",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Let's build something{" "}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, projects, or just having a chat about tech and finance.
            </p>
          </div>

          {/* Contact Card */}
          <div className="card-premium p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-accent group-hover:bg-primary-muted transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Connect with me
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl bg-accent transition-all duration-300 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col justify-center">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h3 className="text-lg font-semibold mb-3">Ready to connect?</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Whether you have a project in mind or just want to chat, I'd love to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="gap-2 bg-primary hover:bg-primary-dark text-primary-foreground flex-1"
                      asChild
                    >
                      <a href="mailto:bhar0304@mylaurier.ca">
                        <Send className="h-4 w-4" />
                        Email Me
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="gap-2 border-border hover:border-primary/50 flex-1"
                      asChild
                    >
                      <a href="/resume.pdf" download>
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
