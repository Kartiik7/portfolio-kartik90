import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@developer.com",
      link: "mailto:hello@developer.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com",
      username: "@developer"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      url: "https://linkedin.com",
      username: "/in/developer"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      url: "https://twitter.com",
      username: "@developer"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient p-8">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or idea..." 
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full hero-gradient transition-smooth hover:glow-primary">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-gradient p-4 transition-smooth hover:glow-subtle">
                    <a 
                      href={info.link} 
                      className="flex items-center gap-4 hover:text-primary transition-smooth"
                    >
                      <div className="text-primary p-2 rounded-lg bg-primary/10">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Follow me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="card-gradient p-4 transition-smooth hover:glow-subtle">
                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center justify-between group hover:text-primary transition-smooth"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-primary p-2 rounded-lg bg-primary/10">
                          {social.icon}
                        </div>
                        <div>
                          <p className="font-medium">{social.label}</p>
                          <p className="text-muted-foreground">{social.username}</p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="card-gradient p-6 text-center">
              <h4 className="text-lg font-bold mb-2">Ready to start a project?</h4>
              <p className="text-muted-foreground mb-4">
                Let's discuss how I can help bring your ideas to life.
              </p>
              <Button variant="outline" className="transition-smooth hover:bg-accent hover:text-accent-foreground">
                Schedule a call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;