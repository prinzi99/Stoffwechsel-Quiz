import { useState, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/landing/Footer';
import { Target, Clock, BookOpen, User } from 'lucide-react';
import QuizProgress from '@/components/quiz/QuizProgress';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResult from '@/components/quiz/QuizResult';
import { trackQuizStartConversion } from '@/lib/gtm';
import {
  quizQuestions,
  profiles,
  calculateResult,
  type QuizScores,
  type ProfileType,
  type ProfileResult,
} from '@/lib/quizData';

type QuizStep = 'landing' | 'questions' | 'result' | 'complete';

const Pin = () => {
  const [step, setStep] = useState<QuizStep>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [scores, setScores] = useState<QuizScores>({ A: 0, B: 0, C: 0 });
  const [result, setResult] = useState<ProfileResult | null>(null);
  const [email, setEmail] = useState('');
  const [selectedQ1, setSelectedQ1] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const q1BoxRef = useRef<HTMLDivElement>(null);

  const totalQuestions = quizQuestions.length;
  const q1 = quizQuestions[0];
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = step === 'questions'
    ? (currentQuestionIndex / totalQuestions) * 100
    : step === 'landing' ? 0 : 100;

  const startQuiz = () => {
    trackQuizStartConversion();
    setCurrentQuestionIndex(0);
    setScores({ A: 0, B: 0, C: 0 });
    setStep('questions');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleAnswerQuestion = useCallback((profile: ProfileType) => {
    const newScores = { ...scores, [profile]: scores[profile] + 1 };
    setScores(newScores);

    if (currentQuestionIndex >= totalQuestions - 1) {
      const resultProfile = calculateResult(newScores);
      setResult(profiles[resultProfile]);
      setStep('result');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions, scores]);

  const handleSubmitEmail = useCallback(() => {
    if (email && email.includes('@')) {
      setStep('complete');
    }
  }, [email]);

  const handleReset = () => {
    setStep('landing');
    setCurrentQuestionIndex(1);
    setScores({ A: 0, B: 0, C: 0 });
    setResult(null);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Stoffwechsel-Quiz – In 2 Minuten zu Deinem Muster | Philipp's Biohack</title>
        <meta
          name="description"
          content="Drei typische Muster blockieren Deinen Stoffwechsel. Finde in 2 Minuten heraus, welches auf Dich zutrifft. Kostenlos, ohne Anmeldung."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {step === 'landing' && (
          <>
            {/* ABOVE THE FOLD – kompakt, damit Frage 1 auf dem Handy sichtbar wird */}
            {/* HERO – Bridge für Pinterest-Traffic */}
            <section className="bg-background px-4 pt-8 pb-6 md:pt-14 md:pb-10">
              <div className="container max-w-2xl mx-auto">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <User className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">
                      Philipp's Biohack
                    </p>
                    <h1 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
                      Dein Stoffwechsel reagiert nicht so, wie er sollte?
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground mt-2 leading-snug">
                      Ich erkläre die Muster dahinter. Wissenschaftlich fundiert, ohne Bullshit.
                    </p>
                  </div>
                </div>
                <div className="border-t border-border mt-6 md:mt-8" />
              </div>
            </section>

            {/* KURZARTIKEL */}
            <section className="px-4 pb-6 md:pb-10">
              <div className="container max-w-2xl mx-auto">
                <h2 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Was die meisten nicht wissen
                </h2>
                <div className="space-y-4 text-base md:text-lg text-foreground leading-relaxed">
                  <p>
                    Du isst weniger als früher – und nimmst trotzdem nicht ab. Du hast Keto probiert, Intervallfasten, Low Carb. Nichts hat langfristig funktioniert.
                  </p>
                  <p>
                    Das Problem ist nicht deine Disziplin. Dein Stoffwechsel hat sich angepasst – an zu wenig Essen, zu viel Stress, zu wenig Schlaf. Er läuft auf Sparflamme.
                  </p>
                  <p>
                    Was für eine Person funktioniert, muss nicht für alle passen. Dein Körper reagiert anders auf Nahrung, Stress und Bewegung als der einer Freundin.
                  </p>
                  <p className="font-bold text-foreground">
                    Die Frage ist nicht OB dein Stoffwechsel blockiert ist – sondern WARUM. Und genau das findest du in 2 Minuten heraus.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Button onClick={startQuiz} variant="cta" size="xl" className="w-full md:w-auto">
                    Jetzt herausfinden
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            {/* VERTRAUENS-SECTION */}
            <section className="px-4 py-10 md:py-14 bg-muted/40">
              <div className="container max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4 md:gap-5">
                  {[
                    { icon: BookOpen, title: 'Wissenschaftlich fundiert', desc: 'Basierend auf aktueller Stoffwechselforschung' },
                    { icon: Clock, title: 'Nur 2 Minuten', desc: 'Kurz, anonym, ohne Anmeldung' },
                    { icon: Target, title: 'Persönliche Einordnung', desc: 'Keine generischen Tipps – zugeschnitten auf deinen Typ' },
                  ].map((b, i) => (
                    <div key={i} className="text-center p-5 md:p-6 rounded-xl bg-card border border-border">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <b.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-10 text-center">
                  <Button onClick={startQuiz} variant="cta" size="xl" className="w-full md:w-auto">
                    Kostenlos starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}



        {step === 'questions' && currentQuestion && (
          <div className="container max-w-2xl mx-auto px-4 py-8 md:py-12">
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10">
              <div className="mb-8">
                <QuizProgress
                  currentQuestion={currentQuestionIndex}
                  totalQuestions={totalQuestions}
                  progress={progress}
                />
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Frage {currentQuestionIndex + 1} von {totalQuestions}
              </div>
              <QuizQuestion
                key={currentQuestion.id}
                question={currentQuestion}
                onAnswer={handleAnswerQuestion}
              />
            </div>
          </div>
        )}

        {(step === 'result' || step === 'complete') && result && (
          <div className="container max-w-2xl mx-auto px-4 py-8 md:py-12">
            <div className="bg-card border border-border rounded-2xl shadow-lg p-6 md:p-10">
              <QuizResult
                result={result}
                showFullResult={step === 'complete'}
                email={email}
                onEmailChange={setEmail}
                onSubmitEmail={handleSubmitEmail}
                onReset={handleReset}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Pin;
