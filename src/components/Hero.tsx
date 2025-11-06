import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-privacy.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-accent/20 backdrop-blur-sm rounded-2xl animate-float">
            <Shield className="w-16 h-16 text-accent-foreground" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Protect Your Digital Privacy
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
          Learn essential cybersecurity practices, stay informed about privacy threats,
          and keep your digital life secure in an increasingly connected world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("learn")}
            className="text-lg px-8"
          >
            Start Learning
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("quiz")}
            className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Test Your Knowledge
          </Button>
        </div>
      </div>
    </section>
  );
};
