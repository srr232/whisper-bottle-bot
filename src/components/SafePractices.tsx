import { Shield, Lock, Key, Globe, Database, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const practices = [
  {
    icon: Lock,
    title: "Use Strong Passwords",
    tips: [
      "Create unique passwords for each account",
      "Use a mix of letters, numbers, and symbols",
      "Enable two-factor authentication (2FA)",
      "Use a reputable password manager",
    ],
  },
  {
    icon: Shield,
    title: "Secure Your Devices",
    tips: [
      "Keep software and apps updated",
      "Install antivirus and anti-malware software",
      "Enable device encryption",
      "Use screen locks and biometric security",
    ],
  },
  {
    icon: Globe,
    title: "Browse Safely",
    tips: [
      "Use HTTPS websites only",
      "Install browser privacy extensions",
      "Clear cookies and cache regularly",
      "Use a VPN on public Wi-Fi",
    ],
  },
  {
    icon: Key,
    title: "Protect Personal Information",
    tips: [
      "Limit sharing on social media",
      "Review app permissions regularly",
      "Be cautious with public information",
      "Shred sensitive documents",
    ],
  },
  {
    icon: Database,
    title: "Backup Your Data",
    tips: [
      "Create regular automated backups",
      "Use encrypted cloud storage",
      "Keep offline backup copies",
      "Test backup restoration regularly",
    ],
  },
  {
    icon: UserCheck,
    title: "Stay Vigilant",
    tips: [
      "Verify sender identity before clicking links",
      "Don't trust unexpected requests",
      "Monitor account activity regularly",
      "Report suspicious activities immediately",
    ],
  },
];

export const SafePractices = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Safe Internet Practices
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential habits to protect your digital privacy and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-custom-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{practice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {practice.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
