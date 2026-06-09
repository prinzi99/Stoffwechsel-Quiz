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
            <section className="bg-gradient-to-b from-background to-muted/40 px-4 pt-4 pb-3 md:pt-12 md:pb-10">
              <div className="container max-w-2xl mx-auto text-center">
                <h1 className="text-xl md:text-4xl font-bold text-foreground leading-tight">
                  Warum reagiert Dein Stoffwechsel nicht – obwohl Du alles richtig machst?
                </h1>
                <p className="text-sm md:text-lg text-muted-foreground mt-2 md:mt-4 leading-snug md:leading-relaxed">
                  Drei typische Muster blockieren ihn. Finde in 2 Minuten heraus, welches auf Dich zutrifft.
                </p>
              </div>
            </section>

            {/* FRAGE 1 BOX – direkt oben, ohne Sprung */}
            <section ref={q1BoxRef} className="px-4 pt-2 pb-6 md:pt-4 md:py-10">
              <div className="container max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-2xl shadow-lg p-4 md:p-10">
                <div className="mb-4 md:mb-6">
                  <QuizProgress
                    currentQuestion={0}
                    totalQuestions={totalQuestions}
                    progress={0}
                  />
                </div>
                <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide mb-2 md:mb-3">
                  Frage 1 von {totalQuestions}
                </p>
                <h2 className="text-lg md:text-2xl font-bold text-foreground mb-4 md:mb-6 leading-snug md:leading-relaxed">
                  {q1.question}
                </h2>

                  <div className="space-y-3">
                    {q1.answers.map((answer) => (
                      <button
                        key={answer.id}
                        onClick={() => handleQ1Answer(answer.id, answer.profile)}
                        disabled={isTransitioning}
                        className={cn(
                          'w-full text-left p-5 rounded-xl border-2 transition-all duration-200',
                          'hover:border-secondary hover:bg-secondary/10 hover:shadow-md',
                          'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
                          'disabled:cursor-not-allowed',
                          selectedQ1 === answer.id
                            ? 'border-secondary bg-secondary text-secondary-foreground scale-[0.98] shadow-lg'
                            : 'border-border bg-card shadow-sm hover:border-primary/30'
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              'w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all',
                              selectedQ1 === answer.id
                                ? 'border-secondary-foreground bg-secondary-foreground/20'
                                : 'border-muted-foreground/30'
                            )}
                          >
                            {selectedQ1 === answer.id && (
                              <CheckCircle2 className="w-5 h-5 text-secondary-foreground" />
                            )}
                          </div>
                          <span
                            className={cn(
                              'text-base md:text-lg leading-relaxed font-medium',
                              selectedQ1 === answer.id
                                ? 'text-secondary-foreground'
                                : 'text-foreground'
                            )}
                          >
                            {answer.text}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SCROLLABLE CONTEXT */}
            <section className="px-4 py-10 md:py-14 bg-muted/30">
              <div className="container max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Kommt Dir das bekannt vor?
                </h2>
                <ul className="space-y-3 mb-8">
                  {[
                    'Du hältst Dich an Deinen Plan – aber die Waage bewegt sich nicht',
                    'Keto, Intervallfasten, Low Carb – schon vieles versucht',
                    'Du fühlst Dich müde, obwohl Du alles richtig machst',
                    'Du fragst Dich, ob es an Deinem Stoffwechsel liegt',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-base text-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  Die meisten Ansätze ignorieren, wie Dein Körper individuell Energie verarbeitet.
                  Dieses Quiz zeigt Dir, welches der drei Muster Deinen Stoffwechsel aktuell
                  blockiert – und was daraus folgt. Kein Verkaufsgespräch. Keine Anmeldung.
                  Einfach Klarheit.
                </p>

                <div className="text-center">
                  <Button
                    onClick={scrollToQ1}
                    variant="cta"
                    size="xl"
                    className="w-full md:w-auto"
                  >
                    Test starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            {/* IDENTIFICATION & REFRAMING (von Root-Page übernommen) */}
            <IdentificationSection />
            <ReframingSection />

            {/* WARUM DIESES QUIZ – CTA zurück zu Q1 */}
            <section className="px-4 py-12 md:py-16 bg-section-alt">
              <div className="container max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
                  Warum dieses Quiz ein guter Einstieg sein kann
                </h2>
                <p className="text-base md:text-lg text-muted-foreground text-center max-w-xl mx-auto mb-10">
                  Ein besseres Verständnis des eigenen Körpers kann ein hilfreicher erster Schritt sein.
                </p>

                <div className="grid md:grid-cols-3 gap-5 mb-10">
                  {[
                    { icon: Target, title: 'Mögliche Stoffwechsel-Schwerpunkte', desc: 'Manche Menschen reagieren unterschiedlich auf Makronährstoffe – das Quiz gibt eine erste Orientierung.' },
                    { icon: Lightbulb, title: 'Hinweise zur Selbstreflexion', desc: 'Keine Diagnose, sondern Anregungen zum Nachdenken über die eigene Situation.' },
                    { icon: Clock, title: 'Nur 2 Minuten', desc: 'Kurze, gezielte Fragen – ohne Anmeldung, ohne Verpflichtung.' },
                  ].map((b, i) => (
                    <div key={i} className="text-center p-6 rounded-xl bg-card border border-border">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <b.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button onClick={scrollToQ1} variant="cta" size="xl" className="w-full md:w-auto">
                    Test starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            {/* FINALE TRANSITION – CTA zurück zu Q1 */}
            <section className="px-4 py-12 md:py-16 bg-quiz-section text-quiz-section-foreground">
              <div className="container max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Mehr Verständnis für Deinen eigenen Stoffwechsel
                </h2>
                <p className="text-base md:text-lg text-quiz-section-foreground/80 max-w-xl mx-auto mb-2">
                  Beantworte ein paar kurze Fragen und erhalte eine orientierende Einordnung mit Hinweisen zur Selbstreflexion.
                </p>
                <p className="text-sm text-quiz-section-foreground/60 mb-8">
                  Allgemeine Informationen rund um Ernährung und Lebensstil.
                </p>

                <div className="max-w-xl mx-auto bg-background/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-3 text-quiz-section-foreground">
                    Neugierig auf Deine Einordnung?
                  </h3>
                  <p className="text-quiz-section-foreground/80 mb-6">
                    In nur 2 Minuten erhältst Du eine orientierende Einordnung mit Hinweisen zur Selbstreflexion.
                  </p>
                  <Button onClick={scrollToQ1} variant="cta" size="xl" className="w-full sm:w-auto">
                    Jetzt Quiz starten
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-quiz-section-foreground/70 text-sm mt-8">
                  <div className="flex items-center gap-2"><Check2 className="w-4 h-4" /><span>Kostenlos</span></div>
                  <div className="flex items-center gap-2"><Check2 className="w-4 h-4" /><span>Keine Anmeldung</span></div>
                  <div className="flex items-center gap-2"><Check2 className="w-4 h-4" /><span>Sofortige Auswertung</span></div>
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
