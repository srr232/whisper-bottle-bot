import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quizQuestions = [
  {
    question: "What is the safest way to create passwords for your online accounts?",
    options: [
      "Use the same strong password for all accounts",
      "Use unique, complex passwords for each account",
      "Use your birthdate with special characters",
      "Use common words with numbers",
    ],
    correct: 1,
    explanation: "Using unique, complex passwords for each account prevents a single breach from compromising all your accounts.",
  },
  {
    question: "What does HTTPS in a website URL indicate?",
    options: [
      "The website loads faster",
      "The website is government-approved",
      "The connection is encrypted and secure",
      "The website has more features",
    ],
    correct: 2,
    explanation: "HTTPS means the connection between your browser and the website is encrypted, protecting your data from interception.",
  },
  {
    question: "What should you do if you receive an unexpected email asking for your password?",
    options: [
      "Reply with your password if it looks legitimate",
      "Delete it immediately and never respond",
      "Click the link to verify your identity",
      "Forward it to friends to check if it's real",
    ],
    correct: 1,
    explanation: "Legitimate companies never ask for passwords via email. This is a phishing attempt and should be deleted immediately.",
  },
  {
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two different passwords",
      "An additional security layer requiring a second verification method",
      "Logging in twice to verify identity",
      "Having two email addresses",
    ],
    correct: 1,
    explanation: "2FA adds an extra layer of security by requiring a second form of verification beyond just your password.",
  },
  {
    question: "Is it safe to use public Wi-Fi for online banking?",
    options: [
      "Yes, if the network has a password",
      "Yes, if you're quick about it",
      "No, unless you use a VPN",
      "Only on weekends",
    ],
    correct: 2,
    explanation: "Public Wi-Fi networks can be insecure. Use a VPN to encrypt your connection when accessing sensitive information.",
  },
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      const percentage = ((score + (selectedAnswer === quizQuestions[currentQuestion].correct ? 1 : 0)) / quizQuestions.length) * 100;
      toast({
        title: "Quiz Complete!",
        description: `You scored ${percentage.toFixed(0)}% - ${percentage >= 80 ? "Excellent work!" : percentage >= 60 ? "Good job!" : "Keep learning!"}`,
      });
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const finalScore = ((score / quizQuestions.length) * 100).toFixed(0);
    return (
      <section id="quiz" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border shadow-custom-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-accent">{finalScore}%</div>
              <p className="text-xl text-muted-foreground">
                You answered {score} out of {quizQuestions.length} questions correctly
              </p>
              <div className="pt-4">
                {parseInt(finalScore) >= 80 ? (
                  <p className="text-success font-semibold text-lg">Excellent! You have strong cybersecurity knowledge.</p>
                ) : parseInt(finalScore) >= 60 ? (
                  <p className="text-warning font-semibold text-lg">Good job! Keep learning to strengthen your security.</p>
                ) : (
                  <p className="text-destructive font-semibold text-lg">Keep studying! Review the safe practices section.</p>
                )}
              </div>
              <Button onClick={restartQuiz} size="lg" className="mt-6">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section id="quiz" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-xl text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-gradient-card border-border shadow-custom-lg">
          <CardHeader>
            <CardTitle className="text-2xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isCorrect = index === question.correct;
                const isSelected = index === selectedAnswer;

                let buttonVariant: "outline" | "default" | "destructive" | "secondary" = "outline";
                if (showResult) {
                  if (isCorrect) buttonVariant = "default";
                  else if (isSelected) buttonVariant = "destructive";
                }

                return (
                  <Button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    variant={buttonVariant}
                    className="w-full justify-start text-left h-auto py-4 px-6 relative"
                    disabled={showResult}
                  >
                    <span className="flex-1">{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 ml-2 text-success-foreground" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 ml-2 text-destructive-foreground" />
                    )}
                  </Button>
                );
              })}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-muted rounded-lg animate-fade-in">
                <p className="text-sm font-semibold mb-2 text-foreground">Explanation:</p>
                <p className="text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            {showResult && (
              <Button onClick={nextQuestion} size="lg" className="w-full mt-6">
                {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Current Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
          </p>
        </div>
      </div>
    </section>
  );
};
