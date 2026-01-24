import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="section-container">
        <div className="flex flex-col gap-6">
          {/* Top Row: Branding + Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo/Name */}
            <div className="flex items-center gap-3">
              <img
                src="/me.jpeg"
                alt="Jenish Bharucha"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <span className="text-lg font-bold gradient-text">Jenish Bharucha</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jenishb17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent hover:bg-primary-muted hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jenish-bharucha-9046a4203/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent hover:bg-primary-muted hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:j26bharu@uwaterloo.ca"
                className="p-2 rounded-lg bg-accent hover:bg-primary-muted hover:text-primary transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Bottom Row: Copyright + Back to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jenish Bharucha. All rights reserved.
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Back to top</span>
              <div className="p-1.5 rounded-lg bg-accent group-hover:bg-primary-muted transition-colors">
                <ArrowUp className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
