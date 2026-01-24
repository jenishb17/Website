import { Database, LineChart, Code2, Brain } from "lucide-react";

const highlights = [
  { icon: Database, label: "Data Analysis + Automation" },
  { icon: LineChart, label: "Finance + Valuation + Reporting" },
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Brain, label: "Machine Learning + Applied AI" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Building at the intersection of{" "}
              <span className="gradient-text">business & technology</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Text Content */}
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a fourth-year double-degree student (BBA + Computer Science) who mixes 
                business thinking with technical execution. I've worked in finance/operations, 
                built automation systems, created machine learning projects, and enjoy building 
                startup ideas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I care about clean design, strong documentation, and turning messy problems 
                into structured solutions. Whether it's optimizing a data pipeline or crafting 
                an investor-grade report, I focus on delivering impact.
              </p>
            </div>

            {/* Profile Card */}
            <div className="md:col-span-2">
              <div className="card-premium p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground text-3xl font-bold">
                  JB
                </div>
                <h3 className="text-xl font-bold mb-1">Jenish Bharucha</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Waterloo, Ontario, Canada
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="tag">BBA</span>
                  <span className="tag">BSc CS</span>
                  <span className="tag">Data</span>
                  <span className="tag">Finance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-premium p-5 text-center group"
              >
                <div className="inline-flex p-3 rounded-xl bg-accent group-hover:bg-primary-muted transition-colors mb-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
