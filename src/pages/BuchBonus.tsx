import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";

const BuchBonus = () => {
  return (
    <>
      <Helmet>
        <title>Bonustools | Philipp's Biohack</title>
        <meta name="description" content="Bonustools zum Buch – exklusive Zusatzinhalte von Philipp's Biohack." />
      </Helmet>
      <Header />
      <main className="min-h-screen section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Bonustools
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BuchBonus;
