import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
      color: "text-primary"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"],
      color: "text-accent"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel"],
      color: "text-primary"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"],
      color: "text-accent"
    }
  ];

  const tools = [
    "VS Code", "Git", "GitHub", "Figma", "Postman", "Docker", 
    "Jira", "Slack", "Linear", "Notion", "Firebase", "Supabase"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the entire stack.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient p-8 transition-smooth hover:glow-subtle">
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} p-3 rounded-lg bg-primary/10`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="skill-gradient transition-bounce hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-base py-2 px-4 transition-bounce hover:bg-accent hover:text-accent-foreground hover:scale-105"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;