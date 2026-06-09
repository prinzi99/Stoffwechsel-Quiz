import { useState, useCallback } from 'react';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<QuizScores>({ A: 0, B: 0, C: 0 });
  const [result, setResult] = useState<ProfileResult | null>(null);
  const [email, setEmail] = useState('');

  const totalQuestions = quizQuestions.length;
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
    setCurrentQuestionIndex(0);
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
            {/* HERO – kompakt: Headline + Kurztext + CTA above the fold (iPhone SE) */}
            <section className="bg-background px-4 pt-4 pb-6 md:pt-12 md:pb-10">
              <div className="container max-w-2xl mx-auto">
                <p className="text-xs md:text-sm text-muted-foreground mb-2">
                  Philipp's Biohack
                </p>
                <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                  Dein Stoffwechsel reagiert nicht so, wie er sollte?
                </h1>
                <p className="text-base md:text-lg text-foreground mt-3 md:mt-4 leading-snug">
                  Du isst weniger, bewegst dich mehr – und trotzdem passiert nichts. Das Problem ist nicht deine Disziplin. Dein Stoffwechsel hat sich angepasst. Finde in 2 Minuten heraus, WARUM – und was du konkret ändern kannst.
                </p>
                <div className="mt-5 md:mt-6">
                  <Button onClick={startQuiz} variant="cta" size="xl" className="w-full md:w-auto">
                    Jetzt herausfinden
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </section>

            {/* VERTIEFUNGS-SECTION */}
            <section className="bg-background px-5 py-12 md:py-16">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-10 md:mb-14">
                  Warum die meisten Ernährungstipps bei dir nicht funktionieren
                </h2>

                <div className="space-y-12 md:space-y-14">
                  {/* Block 1 */}
                  <div>
                    <p className="text-lg md:text-xl font-bold text-foreground mb-3">
                      Dein Körper ist nicht kaputt – er ist im Sparmodus
                    </p>
                    <p className="text-base text-foreground leading-relaxed">
                      Wenn du über Wochen weniger isst, als dein Körper braucht, passiert etwas, das die wenigsten auf dem Schirm haben: Er fährt runter. Nicht weil er defekt ist. Sondern weil er denkt, es ist eine Hungersnot. Dein Grundumsatz sinkt. Deine Schilddrüse drosselt. Dein Körper verbrennt weniger – obwohl du weniger isst. Studien zeigen: Bei chronischem Kaloriendefizit kann der Energieverbrauch um bis zu 40 Prozent einbrechen. Das bedeutet: Die Diät, die vor drei Jahren funktioniert hat, funktioniert heute nicht mehr. Nicht weil du versagt hast. Sondern weil dein Körper dazugelernt hat.
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div>
                    <p className="text-lg md:text-xl font-bold text-foreground mb-3">
                      Hormone entscheiden – nicht Kalorien
                    </p>
                    <p className="text-base text-foreground leading-relaxed">
                      Du kannst perfekt Kalorien zählen und trotzdem nicht abnehmen. Weil Kalorien nur ein Teil der Geschichte sind. Insulin bestimmt, ob dein Körper Fett einlagert oder verbrennt. Wenn es dauerhaft erhöht ist – durch ständiges Snacken, Zucker, Stress – verbrennt dein Körper gar kein Fett. Gar keins. Cortisol, dein Stresshormon, entscheidet, wo Fett landet. Bei Dauerstress: am Bauch. Leptin sagt deinem Gehirn, wann du satt bist – aber wenn die Signale nicht mehr ankommen, hast du Hunger, obwohl deine Fettzellen voll sind. Und ab Mitte 35 sinkt Östrogen. Fett wandert von Hüfte und Oberschenkeln zum Bauch. Der Stoffwechsel wird langsamer. Heißhunger stärker. Das ist keine Einbildung – das ist Biochemie. Das Zusammenspiel dieser Hormone ist bei jedem Menschen anders. Deshalb funktioniert, was bei deiner Freundin klappt, bei dir vielleicht überhaupt nicht.
                    </p>
                  </div>

                  {/* Block 3 */}
                  <div>
                    <p className="text-lg md:text-xl font-bold text-foreground mb-3">
                      Der erste Schritt: Verstehen, was bei dir los ist
                    </p>
                    <p className="text-base text-foreground leading-relaxed">
                      ‚Iss weniger, beweg dich mehr' – das ignoriert alles, was du gerade gelesen hast. Dein Stoffwechsel ist kein Taschenrechner. Er reagiert auf Schlaf, Stress, Hormone, Vorgeschichte. Und er reagiert bei dir anders als bei jeder anderen Person. Bevor du die nächste Diät startest, lohnt sich eine Frage: Welches Muster steckt bei dir dahinter?
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={startQuiz}
                        className="inline-flex items-center text-primary font-semibold hover:underline text-base"
                      >
                        <span className="mr-2">→</span>
                        Finde in 2 Minuten heraus, welcher Stoffwechseltyp du bist
                      </button>
                    </div>
                  </div>
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
