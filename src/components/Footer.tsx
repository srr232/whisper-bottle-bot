import { Shield, Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6" />
              <span className="font-bold text-lg">CyberShield</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering individuals with knowledge to protect their digital privacy and security.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#learn" className="hover:text-accent transition-colors">Privacy Threats</a></li>
              <li><a href="#learn" className="hover:text-accent transition-colors">Safe Practices</a></li>
              <li><a href="#legislation" className="hover:text-accent transition-colors">Legislation</a></li>
              <li><a href="#quiz" className="hover:text-accent transition-colors">Knowledge Quiz</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Take Action</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#report" className="hover:text-accent transition-colors">Report a Scam</a></li>
              <li><a href="#quiz" className="hover:text-accent transition-colors">Test Your Knowledge</a></li>
              <li><a href="#home" className="hover:text-accent transition-colors">Start Learning</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} CyberShield. All rights reserved. Stay safe online.</p>
        </div>
      </div>
    </footer>
  );
};
