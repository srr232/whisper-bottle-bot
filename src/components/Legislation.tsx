import { Scale, FileText, Globe2, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const legislation = [
  {
    title: "GDPR (General Data Protection Regulation)",
    region: "European Union",
    year: "2018",
    icon: Globe2,
    description: "Comprehensive data protection law that gives individuals control over their personal data and simplifies regulatory environment for international business.",
    keyPoints: [
      "Right to access personal data",
      "Right to be forgotten",
      "Data portability rights",
      "Mandatory breach notifications",
    ],
  },
  {
    title: "CCPA (California Consumer Privacy Act)",
    region: "California, USA",
    year: "2020",
    icon: Scale,
    description: "Provides California residents with the right to know what personal information is collected about them and whether it is sold or disclosed.",
    keyPoints: [
      "Right to know what data is collected",
      "Right to delete personal information",
      "Right to opt-out of data sales",
      "Non-discrimination for exercising rights",
    ],
  },
  {
    title: "Digital Services Act (DSA)",
    region: "European Union",
    year: "2024",
    icon: FileText,
    description: "Creates a safer digital space where fundamental rights of users are protected and establishes accountability for online platforms.",
    keyPoints: [
      "Illegal content removal obligations",
      "Transparency in algorithms",
      "Protection of minors online",
      "Ban on manipulative techniques",
    ],
  },
  {
    title: "Personal Data Protection Act",
    region: "Singapore",
    year: "2012",
    icon: Shield,
    description: "Governs collection, use, and disclosure of personal data by organizations, balancing rights of individuals with needs of organizations.",
    keyPoints: [
      "Consent for data collection",
      "Purpose limitation principle",
      "Access and correction rights",
      "Protection of personal data",
    ],
  },
];

export const Legislation = () => {
  return (
    <section id="legislation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Legislation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Major privacy laws protecting your digital rights around the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {legislation.map((law, index) => {
            const Icon = law.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-card border-border hover:shadow-custom-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {law.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{law.title}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-accent">
                    {law.region}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {law.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Provisions:</h4>
                    <ul className="space-y-2">
                      {law.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
