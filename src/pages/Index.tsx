import { useState } from "react";
import { Shield, Lock, Eye, Users, FileText, AlertTriangle } from "lucide-react";
import { MysteriousBottle } from "@/components/MysteriousBottle";
import { SecretChatbot } from "@/components/SecretChatbot";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Guard your digital identity with advanced privacy measures and encryption techniques.",
    },
    {
      icon: Lock,
      title: "Secure Communications",
      description: "Learn how to communicate securely using end-to-end encryption and secure protocols.",
    },
    {
      icon: Eye,
      title: "Digital Footprint",
      description: "Understand and minimize your online presence with smart privacy practices.",
    },
    {
      icon: Users,
      title: "Community Safety",
      description: "Join a community dedicated to sharing knowledge and protecting digital rights.",
    },
    {
      icon: FileText,
      title: "Security Guides",
      description: "Access comprehensive guides on cybersecurity best practices and tools.",
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "Learn to identify and protect against phishing, malware, and social engineering.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-primary text-sm font-medium">🛡️ Your Digital Guardian</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
            Secure Sphere Guide
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Navigate the digital world safely with expert guidance on privacy, security, and digital rights.
            <br />
            <span className="text-primary/80 italic text-lg">
              Discover hidden wisdom by exploring carefully...
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]">
              Get Started
            </button>
            <button className="px-8 py-3 bg-card hover:bg-card/80 border border-primary/30 text-foreground rounded-full font-semibold transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Your Security Arsenal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and knowledge to protect yourself in the digital realm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-card border border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] cursor-pointer"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-3xl backdrop-blur-sm">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who have taken control of their digital security
            </p>
            <button className="px-10 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Secure Sphere Guide. Protecting digital rights and privacy.</p>
        </div>
      </footer>

      {/* Mysterious Bottle - Hidden Easter Egg */}
      <MysteriousBottle onOpen={() => setIsChatOpen(true)} />

      {/* Secret Chatbot */}
      <SecretChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
