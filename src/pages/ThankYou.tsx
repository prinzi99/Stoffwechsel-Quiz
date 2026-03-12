import { Helmet } from 'react-helmet-async';
import { Mail, Info } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/landing/Footer';
import bookCover from '@/assets/book-cover-mockup2.jpeg';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Helmet>
        <title>Vielen Dank! | Philipp's Biohack</title>
        <meta name="description" content="Deine Stoffwechsel-Auswertung ist unterwegs. Prüfe jetzt Deinen Posteingang." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-grow flex items-center justify-center py-12 md:py-20">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in-up">

            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">
              <span className="text-primary">Vielen Dank!</span> So geht es weiter…
            </h1>

            {/* Step 1 */}
            <p className="text-base md:text-lg text-foreground/80 mb-2">
              <span className="font-bold">1.</span> Öffne die E-Mail, die du soeben in <strong>DEINEM</strong>
            </p>
            <p className="text-base md:text-lg text-primary font-semibold mb-6">
              E-Mail Postfach von Absender "Philipp@PhilippsBiohack" erhalten hast.
            </p>

            {/* Step 2 */}
            <p className="text-base md:text-lg text-foreground/80 mb-2">
              <span className="font-bold">2.</span> <strong>Klicke auf den Download-Link in der E-Mail,</strong> um Deine persönliche Auswertung und den kostenlosen Stoffwechsel-Code zu erhalten.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Mit dem Klick bestätigst Du gleichzeitig, dass ich Dir weitere hilfreiche Tipps rund um Deinen Stoffwechsel zusenden darf. Ohne diese Bestätigung ist es mir leider nicht möglich, Dir Deine Ergebnisse und Infos zuzuschicken.
            </p>

            {/* Book Cover */}
            <div className="flex justify-center mb-8">
              <img
                src={bookCover}
                alt="Du bist nicht das Problem – Buchcover"
                className="w-48 md:w-56 h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Privacy Note */}
            <div className="flex items-start justify-center gap-2 text-sm text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <p>
                Hinweis: Ich hasse Spam und Deine Daten sind bei mir jederzeit sicher und werden niemals an Dritte weitergegeben.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;