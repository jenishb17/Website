import { GraduationCap, Award, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures",
  "Databases",
  "Financial Analysis",
  "Computational Biology",
  "Regression + ML Concepts",
  "Business Strategy",
];

const achievements = [
  {
    icon: Award,
    title: "ML Stock Predictor",
    description: "Built a machine learning stock predictor with full web interface",
  },
  {
    icon: BookOpen,
    title: "Automation Tools",
    description: "Created productivity automation tools using VBA + Python",
  },
  {
    icon: GraduationCap,
    title: "Documentation Excellence",
    description: "Strong documentation + compliance mindset across all projects",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Education & Achievements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Academic foundation for{" "}
              <span className="gradient-text">real-world impact</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="card-premium p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Wilfrid Laurier University</h3>
                  <p className="text-primary font-medium">Double Degree Program</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Bachelor of Business Administration (BBA)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">Bachelor of Science — Computer Science (BSc)</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-premium p-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent group-hover:bg-primary-muted transition-colors">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
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
