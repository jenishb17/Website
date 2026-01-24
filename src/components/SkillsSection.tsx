import { Code, Wrench, BarChart3, Briefcase } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "Java", "SQL", "VBA", "JavaScript/TypeScript", "C++"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: ["Excel", "Power BI", "Flask", "React/Next.js", "Git", "Matplotlib"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: BarChart3,
    title: "Data & ML",
    skills: ["LSTM", "Time Series Forecasting", "Data Preprocessing", "Feature Engineering", "Visualization"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Business & Finance",
    skills: ["DCF Analysis", "Market Research", "Financial Reporting", "Investor Communication"],
    color: "from-amber-500 to-orange-600",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Skills & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Technical toolkit for{" "}
              <span className="gradient-text">building & analyzing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of programming languages, analytical tools, and business acumen 
              to tackle complex problems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-premium p-6 group"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-primary-glow opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-300" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
