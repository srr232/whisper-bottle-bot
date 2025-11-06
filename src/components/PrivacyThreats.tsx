import { AlertTriangle, Eye, Bug, CreditCard, Mail, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const threats = [
  {
    icon: Eye,
    title: "Data Tracking",
    description: "Companies and websites track your online behavior, creating detailed profiles of your activities, interests, and personal information.",
    severity: "high",
  },
  {
    icon: Bug,
    title: "Malware & Viruses",
    description: "Malicious software can infect your devices, steal sensitive data, monitor your activities, or hold your files for ransom.",
    severity: "critical",
  },
  {
    icon: CreditCard,
    title: "Identity Theft",
    description: "Cybercriminals can steal your personal information to commit fraud, open accounts in your name, or make unauthorized purchases.",
    severity: "critical",
  },
  {
    icon: Mail,
    title: "Phishing Attacks",
    description: "Deceptive emails and messages trick you into revealing passwords, financial information, or downloading malicious attachments.",
    severity: "high",
  },
  {
    icon: Smartphone,
    title: "Mobile Threats",
    description: "Malicious apps, unsecured Wi-Fi networks, and device vulnerabilities can compromise your mobile security and privacy.",
    severity: "medium",
  },
  {
    icon: AlertTriangle,
    title: "Social Engineering",
    description: "Manipulative tactics that exploit human psychology to trick people into breaking security procedures or revealing confidential information.",
    severity: "high",
  },
];

export const PrivacyThreats = () => {
  return (
    <section id="learn" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Common Privacy Threats
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the threats is the first step to protecting yourself online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            const severityColors = {
              critical: "text-destructive",
              high: "text-warning",
              medium: "text-accent",
            };

            return (
              <Card
                key={index}
                className="hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${severityColors[threat.severity as keyof typeof severityColors]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{threat.title}</CardTitle>
                  <CardDescription className="text-sm uppercase tracking-wide font-semibold">
                    {threat.severity} risk
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {threat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
