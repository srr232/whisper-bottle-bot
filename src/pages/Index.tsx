import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PrivacyThreats } from "@/components/PrivacyThreats";
import { SafePractices } from "@/components/SafePractices";
import { Legislation } from "@/components/Legislation";
import { Quiz } from "@/components/Quiz";
import { ReportForm } from "@/components/ReportForm";
import { Footer } from "@/components/Footer";
import { MysteriousBottle } from "@/components/MysteriousBottle";
import { SecretChatbot } from "@/components/SecretChatbot";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div id="home" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PrivacyThreats />
      <SafePractices />
      <Legislation />
      <Quiz />
      <ReportForm />
      <Footer />
      
      {/* Mysterious Bottle - Hidden Easter Egg */}
      <MysteriousBottle onOpen={() => setIsChatOpen(true)} />

      {/* Secret Chatbot */}
      <SecretChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;
