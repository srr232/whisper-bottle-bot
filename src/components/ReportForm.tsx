import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ReportForm = () => {
  const [formData, setFormData] = useState({
    reporterName: "",
    email: "",
    scamType: "",
    description: "",
    dateOccurred: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.reporterName || !formData.email || !formData.scamType || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send to a backend
    toast({
      title: "Report Submitted",
      description: "Thank you for reporting. We will investigate this matter.",
    });

    // Reset form
    setFormData({
      reporterName: "",
      email: "",
      scamType: "",
      description: "",
      dateOccurred: "",
    });
  };

  return (
    <section id="report" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-destructive/10 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Report a Scam
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help protect others by reporting suspected digital scams and fraudulent activities
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-gradient-card border-border shadow-custom-lg">
          <CardHeader>
            <CardTitle>Scam Report Form</CardTitle>
            <CardDescription>
              All reports are confidential and will be reviewed by our security team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reporterName">Your Name *</Label>
                <Input
                  id="reporterName"
                  value={formData.reporterName}
                  onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scamType">Type of Scam *</Label>
                <Select value={formData.scamType} onValueChange={(value) => setFormData({ ...formData, scamType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scam type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phishing">Phishing Email/SMS</SelectItem>
                    <SelectItem value="identity-theft">Identity Theft</SelectItem>
                    <SelectItem value="financial-fraud">Financial Fraud</SelectItem>
                    <SelectItem value="fake-website">Fake Website</SelectItem>
                    <SelectItem value="social-engineering">Social Engineering</SelectItem>
                    <SelectItem value="malware">Malware/Ransomware</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOccurred">Date Occurred</Label>
                <Input
                  id="dateOccurred"
                  type="date"
                  value={formData.dateOccurred}
                  onChange={(e) => setFormData({ ...formData, dateOccurred: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please provide detailed information about the scam including URLs, phone numbers, email addresses, or any other relevant details..."
                  rows={6}
                  required
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Important:</strong> Do not include sensitive personal information like passwords,
                  credit card numbers, or social security numbers in this form.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="max-w-2xl mx-auto mt-8 p-6 bg-accent/5 border border-accent/20 rounded-lg">
          <h3 className="font-semibold text-foreground mb-3">Additional Resources</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• If you've been a victim of identity theft, contact your local law enforcement</li>
            <li>• Report phishing emails to your email provider</li>
            <li>• File a complaint with the Federal Trade Commission (FTC) at ftc.gov</li>
            <li>• Contact your bank immediately if financial fraud is suspected</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
