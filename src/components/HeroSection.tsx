import { ArrowDown, Download, Mail, Sparkles, TrendingUp, FileSpreadsheet, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: TrendingUp, label: "85% Accuracy Stock Predictor", color: "text-primary" },
  { icon: FileSpreadsheet, label: "Automated PDF → Excel System", color: "text-primary" },
  { icon: BrainCircuit, label: "Finance + Data Analysis Experience", color: "text-primary" },
];

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-8 animate-fade-in-up opacity-0">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Data Analyst • Software Developer • Finance + AI Builder
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 animate-fade-in-up opacity-0 delay-100">
            I build{" "}
            <span className="gradient-text">data-driven software</span>
            <br />
            and financial tools that
            <br />
            <span className="relative inline-block">
              solve real problems
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 4 150 2 298 6"
                  stroke="hsl(262, 95%, 60%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-fade-in delay-500"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-200">
            Finance + AI + analytics. I've built machine learning projects, automated workflows,
            and investor-grade reporting tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up opacity-0 delay-300">
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:border-primary/50 px-8 py-6 text-base rounded-xl hover:bg-accent transition-all duration-300"
              asChild
            >
              <a href="/Jenish_CS_Resume_2025.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 text-primary hover:text-primary-dark hover:bg-primary-muted px-8 py-6 text-base rounded-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up opacity-0 delay-400">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card flex items-center gap-3 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-primary-muted group-hover:bg-primary/20 transition-colors">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
};
