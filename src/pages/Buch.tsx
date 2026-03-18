import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import BuchContent from "@/components/buch/BuchContent";
import BuchQuizHinweis from "@/components/buch/BuchQuizHinweis";

const Buch = () => {
  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Das Buch | Philipp's Biohack</title>
        <meta name="description" content="Warum dein Stoffwechsel blockiert und wie du ihn wieder in Bewegung bringst. Das E-Book von Philipp Prinz." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />

      <main>
        <BuchContent />
        <BuchQuizHinweis />

        {/* Medizinischer Hinweis */}
        <div className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
              Die Inhalte dienen ausschließlich zu Informationszwecken und ersetzen keine medizinische Beratung.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Buch;
