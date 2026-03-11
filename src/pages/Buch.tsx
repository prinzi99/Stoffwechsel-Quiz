import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";

const Buch = () => {
  return (
    <>
      <Helmet>
        <title>Du bist nicht das Problem – Das Buch | Philipp's Biohack</title>
        <meta name="description" content="Du bist nicht das Problem – Das Buch. Erfahre mehr über das Buch von Philipp's Biohack." />
      </Helmet>
      <Header />
      <main className="min-h-screen section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Du bist nicht das Problem – Das Buch
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Buch;
