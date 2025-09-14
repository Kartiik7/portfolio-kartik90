import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Award,
  Coffee,
  Mountain,
  Camera,
  Music
} from "lucide-react";

const About = () => {
  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of enterprise applications serving 10k+ users. Architected microservices, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      role: "Full Stack Developer", 
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built scalable web applications from scratch. Collaborated with design and product teams to deliver user-centric solutions."
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Inc",
      period: "2019 - 2020",
      description: "Created responsive websites and interactive web applications for various clients across different industries."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      period: "2015 - 2019",
      description: "Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude."
    }
  ];

  const certifications = [
    "AWS Certified Developer Associate",
    "Google Cloud Professional",
    "MongoDB Certified Developer",
    "Certified Kubernetes Administrator"
  ];

  const interests = [
    { icon: <Coffee className="h-5 w-5" />, text: "Coffee Brewing" },
    { icon: <Mountain className="h-5 w-5" />, text: "Hiking" },
    { icon: <Camera className="h-5 w-5" />, text: "Photography" },
    { icon: <Music className="h-5 w-5" />, text: "Music Production" }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full stack developer with 5+ years of experience building 
            exceptional digital experiences. I love turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-gradient p-6 transition-smooth hover:glow-subtle">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient p-6 transition-smooth hover:glow-subtle">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-accent font-medium">{edu.school}</p>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </Card>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h4 className="text-xl font-bold">Certifications</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="skill-gradient py-2 px-3">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">When I'm Not Coding</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {interests.map((interest, index) => (
              <Card key={index} className="card-gradient p-6 text-center transition-bounce hover:scale-105 hover:glow-subtle">
                <div className="text-primary mb-3 flex justify-center">
                  {interest.icon}
                </div>
                <p className="font-medium">{interest.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;