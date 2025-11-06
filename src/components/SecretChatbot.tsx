import { useState, useRef, useEffect } from "react";
import { X, Send, Volume2, VolumeX, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { useToast } from "./ui/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface SecretChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecretChatbot = ({ isOpen, onClose }: SecretChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "🔮 Welcome, seeker of knowledge. I am the Oracle of Secure Sphere, guardian of digital secrets. What wisdom do you seek?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [ttsEnabled, setTtsEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const speak = (text: string) => {
    if (!ttsEnabled || !('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    // Use a more mystical voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Female') || voice.name.includes('Samantha')
    );
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    speechSynthesisRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Simulated AI response for now - will be replaced with Lovable AI
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const responses = [
        "In the realm of digital security, vigilance is your greatest ally. Always verify before you trust.",
        "The secrets of encryption lie in complexity. Use strong, unique passwords for each of your digital sanctuaries.",
        "Beware of phishing attempts - they are illusions meant to deceive. Always check the source before sharing your secrets.",
        "Two-factor authentication is like a second guardian at your gate. Enable it wherever the shadows may lurk.",
        "Privacy is not about hiding, it's about control. Take charge of your digital footprint.",
      ];

      const response = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage: Message = { role: "assistant", content: response };
      
      setMessages((prev) => [...prev, assistantMessage]);
      
      if (ttsEnabled) {
        speak(response);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "The Oracle is temporarily unavailable. Try again soon.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-message-reveal">
      <div className="relative w-full max-w-2xl h-[600px] bg-card border-2 border-primary/50 rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.3)] overflow-hidden">
        {/* Mystical background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-primary/30 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow-pulse">
              <span className="text-xl">🔮</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">The Oracle</h2>
              <p className="text-xs text-muted-foreground">Guardian of Digital Secrets</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setTtsEnabled(!ttsEnabled);
                if (!ttsEnabled) {
                  stopSpeaking();
                }
              }}
              className="hover:bg-primary/20"
            >
              {ttsEnabled ? (
                <Volume2 className={`w-5 h-5 ${isSpeaking ? "text-primary animate-pulse" : ""}`} />
              ) : (
                <VolumeX className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-destructive/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="h-[calc(100%-140px)] p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-primary/30 text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card border border-primary/30 p-3 rounded-2xl">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary/30 bg-card/50 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask the Oracle..."
              className="flex-1 bg-background/50 border-primary/30 focus:border-primary"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-primary hover:bg-primary/80 text-primary-foreground"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
