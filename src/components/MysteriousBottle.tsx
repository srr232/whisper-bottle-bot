import { useState, useEffect } from "react";
import { MessageCircle, Sparkles } from "lucide-react";

interface MysteriousBottleProps {
  onOpen: () => void;
}

export const MysteriousBottle = ({ onOpen }: MysteriousBottleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setParticles((prev) => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          },
        ]);
      }, 200);

      return () => clearInterval(interval);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  useEffect(() => {
    if (particles.length > 0) {
      const timeout = setTimeout(() => {
        setParticles((prev) => prev.slice(1));
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [particles]);

  return (
    <div
      className="fixed bottom-8 right-8 z-50 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpen}
    >
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-primary rounded-full animate-particle-float pointer-events-none"
          style={{
            left: `${50 + particle.x}%`,
            top: `${50 + particle.y}%`,
          }}
        />
      ))}

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-150 animate-glow-pulse" />

      {/* Bottle container */}
      <div className="relative w-20 h-20 animate-float group-hover:animate-bottle-shake">
        {/* Glass bottle effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-card/50 to-secondary/30 rounded-2xl backdrop-blur-sm border-2 border-primary/50 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
          {/* Inner glow */}
          <div className="absolute inset-2 bg-gradient-to-t from-primary/40 to-transparent rounded-xl" />

          {/* Message icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
          </div>

          {/* Sparkle effect */}
          <Sparkles className="absolute top-1 right-1 w-4 h-4 text-secondary animate-pulse" />
        </div>

        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <div className="bg-card border border-primary/50 px-3 py-1 rounded-lg text-xs text-primary shadow-lg">
            Discover the Oracle
          </div>
        </div>
      </div>
    </div>
  );
};
