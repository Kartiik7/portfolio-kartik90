import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import AnimatedSkillBar from "./AnimatedSkillBar";
import CircularProgress from "./CircularProgress";
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
      color: "text-secondary"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel"],
      color: "text-accent"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"],
      color: "text-primary"
    }
  ];

  const tools = [
    "VS Code", "Git", "GitHub", "Figma", "Postman", "Docker", 
    "Jira", "Slack", "Linear", "Notion", "Firebase", "Supabase"
  ];

  const technicalSkills = [
    { skill: "JavaScript/TypeScript", level: 95 },
    { skill: "React/Next.js", level: 92 },
    { skill: "Node.js/Express", level: 88 },
    { skill: "Python/Django", level: 85 },
    { skill: "Database Design", level: 90 },
    { skill: "Cloud Architecture", level: 82 }
  ];

  const softSkills = [
    { skill: "Problem Solving", percentage: 95 },
    { skill: "Team Leadership", percentage: 88 },
    { skill: "Communication", percentage: 92 },
    { skill: "Project Management", percentage: 85 }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the entire stack.
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-gradient card-hover p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} p-3 rounded-lg bg-primary/10 transition-bounce hover:scale-110`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="skill-gradient transition-bounce hover:scale-105 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Skills Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center animate-slide-up">
            Technical <span className="text-gradient-secondary">Proficiency</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <AnimatedSkillBar 
                key={index}
                skill={skill.skill}
                level={skill.level}
                delay={index * 200}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills Circular Progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center animate-slide-up">
            Professional <span className="text-gradient-accent">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <CircularProgress
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                delay={index * 300}
              />
            ))}
          </div>
        </div>
        
        {/* Tools & Platforms */}
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-semibold mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-base py-2 px-4 transition-bounce hover:bg-accent hover:text-accent-foreground hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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