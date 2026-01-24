import { Code2, BarChart3, GraduationCap, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "MAD Elevators",
    period: "Jan 2025 — Apr 2025",
    icon: Code2,
    points: [
      "Specialized in automation by developing AI-powered documentation tools",
      "Optimized internal workflows using AWS cloud services and streamlined enterprise systems for efficiency",
    ],
  },
  {
    title: "Data Analyst",
    company: "AGCO",
    period: "Sep 2024 — Dec 2024",
    icon: BarChart3,
    points: [
      "Analyzed multi-year datasets to identify trends and insights",
      "Built Excel dashboards and executive-ready presentations",
    ],
  },
  {
    title: "MA102 Directed Homework Tutor",
    company: "Wilfrid Laurier University",
    period: "May 2024 — Dec 2024",
    icon: GraduationCap,
    points: [
      "Coached students through structured problem-solving",
      "Created step-by-step walkthroughs to support learning and performance",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Pro Funds Mortgages",
    period: "May 2024 — Dec 2024",
    icon: Building2,
    points: [
      "Built internal tools and automation to improve operational efficiency",
      "Improved data workflows and UI polish for internal systems",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Where I've{" "}
              <span className="gradient-text">made an impact</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional experience in software development, data analysis, and education.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-8 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1/2 border-4 border-background shadow-glow" />

                  {/* Content Card */}
                  <div className="card-premium p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-accent shrink-0 w-fit">
                        <exp.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-1">
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground shrink-0">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
