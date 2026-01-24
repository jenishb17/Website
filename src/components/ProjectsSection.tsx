import { ExternalLink, Github, FileText, TrendingUp, Calculator, FileSpreadsheet, FileOutput } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "AI Stock Predictor (LSTM)",
    description: "Built an LSTM model with ~85% accuracy for long-history public companies using historical + macroeconomic indicators.",
    impact: "Includes automated retraining, Flask web interface, and data visualization.",
    tags: ["Python", "LSTM", "Flask", "TensorFlow", "Finance"],
    icon: TrendingUp,
    gradient: "from-violet-500 to-purple-600",
    github: "https://github.com/jenishb17/AI-Stock-Predictor",
  },
  {
    title: "Air Math Calculator",
    description: "Detects finger movements in the air using a camera and computer vision, converts gestures into math expressions, and returns computed results.",
    impact: "Enables hands-free math input using real-time gesture recognition.",
    tags: ["Python", "Detectron2", "Computer Vision"],
    icon: Calculator,
    gradient: "from-blue-500 to-indigo-600",
    github: "https://github.com/jenishb17/Air-Math-Calculator",
  },
  {
    title: "Automated PDF Scanning → Excel System",
    description: "Python + VBA pipeline to extract data from PDFs and push into structured Excel reports.",
    impact: "Improved speed and accuracy of data entry workflows significantly.",
    tags: ["Python", "VBA", "Excel", "Automation", "PDF Parsing"],
    icon: FileSpreadsheet,
    gradient: "from-emerald-500 to-teal-600",
    github: "https://github.com/jenishb17/PDF-Scanner",
  },
  {
    title: "Word Report Generator (VBA)",
    description: "Auto-generates investor-style Word reports with structured sections and market commentary.",
    impact: "Saves with dynamic file naming and summary insights.",
    tags: ["VBA", "Word", "Automation", "Finance"],
    icon: FileOutput,
    gradient: "from-amber-500 to-orange-600",
    github: "https://github.com/jenishb17/Student-Database",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Projects that{" "}
              <span className="gradient-text">make an impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From machine learning models to automation systems—here's what I've built.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="card-premium p-6 flex flex-col h-full group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shrink-0`}>
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-3 flex-1">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="p-3 rounded-lg bg-primary-muted border border-primary/10 mb-4">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-primary">Impact:</span> {project.impact}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <Button size="sm" variant="outline" className="gap-1.5 border-border hover:border-primary/50" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
