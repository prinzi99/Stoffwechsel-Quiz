import { useEffect, useState } from "react";
import { useBonusPageView } from "@/hooks/useBonusTracking";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";

const CHECKOUT_URL = "https://www.digistore24.com/product/705783?voucher=promo2";

let digistorePromoLoaded = false;

const Umsetzungshilfen = () => {
  useBonusPageView("/umsetzungshilfen", "Umsetzungshilfen Verkaufsseite");

  const [stickyVisible, setStickyVisible] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_URL);

  useEffect(() => {
    document.title = "Umsetzungshilfen – nur 3,99€";
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Die Umsetzungshilfen zum Stoffwechsel-Reset-Plan: Kalorien-Rechner, Checklisten, Schlaf-Protokoll. Nur 3,99€ statt 9,99€.";
    if (desc) desc.setAttribute("content", content);

    const onScroll = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    if (email) {
      const url = new URL(CHECKOUT_URL);
      url.searchParams.set("email", email);
      setCheckoutUrl(url.toString());
    }
  }, []);

  useEffect(() => {
    if (digistorePromoLoaded) return;
    digistorePromoLoaded = true;

    const dsScript = document.createElement("script");
    dsScript.src = "https://www.digistore24-scripts.com/service/digistore.js";
    dsScript.async = true;
    dsScript.onload = () => {
      const promoScript = document.createElement("script");
      promoScript.type = "text/javascript";
      promoScript.text = `digistorePromocode({ "product_id": 705783, "adjust_domain": true });`;
      document.body.appendChild(promoScript);
    };
    document.head.appendChild(dsScript);
  }, []);

  const fontStack =
    "Inter, -apple-system, BlinkMacSystemFont, 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif";

  return (
    <div
      style={{
        backgroundColor: "#F9F7F4",
        minHeight: "100vh",
        fontFamily: fontStack,
        color: "#1A1A1A",
        scrollBehavior: "smooth",
        paddingBottom: stickyVisible ? "100px" : "0",
      }}
    >
      <Header />

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
        {/* 1. HERO */}
        <section style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1
            className="text-[32px] md:text-[40px]"
            style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", lineHeight: 1.2 }}
          >
            Du hast einen 7-Tage Stoffwechsel-Reset Plan?
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#4A4A4A", marginBottom: "16px" }}>
            Dann brauchst du die Umsetzungshilfen – sonst fliegst du blind.
          </p>
          <p style={{ fontSize: "13px", color: "#888888" }}>
            Die Abbuchung erfolgt durch Digistore24.com
          </p>
        </section>

        {/* 2. HOOK */}
        <section style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2
            className="text-[28px] md:text-[36px]"
            style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "24px", lineHeight: 1.2 }}
          >
            Warum du die Umsetzungshilfen brauchst
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4A4A4A" }}>
            Der Plan zeigt dir <strong>WAS</strong> zu tun ist.
            <br />
            <br />
            Aber OHNE die richtigen Tracking-Vorlagen wird's schwierig umzusetzen.
            <br />
            <br />
            <strong>95%</strong> meiner Kunden nutzen die Umsetzungshilfen parallel zum Plan.
          </p>
        </section>

        {/* 3. PROBLEM */}
        <section style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1A1A1A", marginBottom: "20px" }}>
            Ohne Tracking passiert das:
          </h3>
          {[
            "❌ Du weißt nicht, ob du genug isst (Kalorien raten = scheitern)",
            "❌ Du merkst nicht, was bei DIR funktioniert (jeder Körper ist anders)",
            "❌ Du gibst nach 2-3 Tagen auf (keine Struktur = keine Ergebnisse)",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#FFF5F5",
                borderLeft: "4px solid #E85D4A",
                padding: "20px",
                marginBottom: "12px",
                borderRadius: "8px",
                fontSize: "16px",
                lineHeight: 1.5,
                color: "#2A2A2A",
              }}
            >
              {text}
            </div>
          ))}
        </section>

        {/* 4. LÖSUNG */}
        <section style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1A1A1A", marginBottom: "20px" }}>
            Das bekommst du:
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
            {[
              "Kalorien-Rechner (deine exakte Startmenge)",
              "Stoffwechsel-System (das große Bild)",
              "Reset-Checkliste (täglich abhaken)",
              "Defizit-Checkliste (für Phase 2)",
              "Ernährungs-Beobachtungsblatt (was funktioniert bei DIR?)",
              "Schlaf-Protokoll (der wichtigste Faktor)",
            ].map((text, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span
                  style={{
                    color: "#4CAF50",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    flexShrink: 0,
                  }}
                  aria-hidden
                >
                  ✓
                </span>
                <span style={{ fontSize: "17px", lineHeight: 1.5, color: "#2A2A2A" }}>{text}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "18px", fontWeight: 600, color: "#1A1A1A", marginTop: "20px" }}>
            Das sind die Werkzeuge, die aus dem Plan echte Ergebnisse machen.
          </p>
        </section>

        {/* 5. PREIS + CTA */}
        <section style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#4CAF50",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Nur jetzt: 3,99€ (statt <span style={{ textDecoration: "line-through" }}>9,99€</span>)
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              color: "#2A2A2A",
              marginBottom: "30px",
            }}
          >
            Normalerweise verkaufe ich die Umsetzungshilfen einzeln.
            <br />
            Über diese Seite bekommst du sie für <strong>3,99€</strong>.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              fontSize: "20px",
              fontWeight: 700,
              padding: "20px 40px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(76,175,80,0.3)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45A049")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
          >
            Ja, ich will die Umsetzungshilfen für 3,99€
          </a>

          <p style={{ fontSize: "14px", color: "#888888", marginBottom: "20px" }}>
            Sichere Bestellung · Sofortiger Zugang · Einmalig 3,99€
          </p>

          <a
            href="/"
            style={{
              display: "inline-block",
              fontSize: "14px",
              color: "#888888",
              textDecoration: "underline",
              marginBottom: "20px",
            }}
          >
            Zurück zur Startseite
          </a>
        </section>

        {/* 6. FAQ */}
        <section style={{ maxWidth: "500px", margin: "0 auto", marginBottom: "80px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1A1A1A", marginBottom: "24px" }}>
            Häufige Fragen
          </h3>

          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: 600, fontSize: "16px", color: "#1A1A1A", marginBottom: "8px" }}>
              Brauche ich das wirklich?
            </p>
            <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.6 }}>
              Nur wenn du wissen willst, ob es funktioniert. Ohne Tracking fliegst du blind.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 600, fontSize: "16px", color: "#1A1A1A", marginBottom: "8px" }}>
              Wie bekomme ich die Hilfen?
            </p>
            <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.6 }}>
              Sofort nach dem Kauf per E-Mail – als digitale Vorlagen zum direkten Loslegen.
            </p>
          </div>
        </section>
      </div>

      <Footer />

      {/* Sticky Mobile CTA */}
      {stickyVisible && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(249, 247, 244, 0.97)",
            backdropFilter: "blur(8px)",
            borderTop: "1px solid #E5E5E5",
            padding: "12px 16px",
            zIndex: 50,
            boxShadow: "0 -4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "#4CAF50",
              color: "white",
              fontSize: "16px",
              fontWeight: 700,
              padding: "16px 20px",
              borderRadius: "8px",
              textAlign: "center",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(76,175,80,0.3)",
            }}
          >
            Umsetzungshilfen für 3,99€ sichern
          </a>
        </div>
      )}
    </div>
  );
};

export default Umsetzungshilfen;
