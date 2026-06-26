import { useEffect, useState } from "react";

const UPSELL_CHECKOUT_URL = "https://www.digistore24.com/product/705783?voucher=promo2";
const SKIP_URL = "/";

let digistorePromoLoaded = false;

const DankeAktionsplan = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    document.title = "Perfekt! Dein Reset-Plan ist unterwegs";
    const onScroll = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Digistore promocode script
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

  // Preserve email param if present
  const [checkoutUrl, setCheckoutUrl] = useState(UPSELL_CHECKOUT_URL);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    if (email) {
      const url = new URL(UPSELL_CHECKOUT_URL);
      url.searchParams.set("email", email);
      setCheckoutUrl(url.toString());
    }
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
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
        {/* SECTION 1: BESTÄTIGUNG */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1
            className="text-[32px] md:text-[40px]"
            style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "20px", lineHeight: 1.2 }}
          >
            Perfekt! Dein Reset-Plan ist unterwegs 🎉
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#4A4A4A", marginBottom: "12px" }}>
            Du bekommst den 7-Tage Stoffwechsel-Reset-Plan sofort per E-Mail.
            <br />
            Check dein Postfach (auch Spam) in den nächsten Minuten.
          </p>
          <p style={{ fontSize: "14px", color: "#888888", fontStyle: "italic" }}>
            Die Abbuchung erfolgt durch Digistore24.com
          </p>
        </section>

        {/* SECTION 2: UPSELL-HOOK */}
        <section style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2
            className="text-[28px] md:text-[36px]"
            style={{ fontWeight: 700, color: "#1A1A1A", marginBottom: "24px", lineHeight: 1.2 }}
          >
            Moment – du brauchst noch etwas!
          </h2>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#4A4A4A" }}>
            Der Plan zeigt dir WAS zu tun ist.
            <br />
            Aber <strong>OHNE</strong> die richtigen Tracking-Vorlagen wird's schwierig umzusetzen.
            <br />
            <strong>95%</strong> meiner Kunden holen sich deshalb direkt die Umsetzungshilfen dazu.
          </p>
        </section>

        {/* SECTION 3: PROBLEM-BOXES */}
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

        {/* SECTION 4: LÖSUNG-CHECKMARKS */}
        <section style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1A1A1A", marginBottom: "20px" }}>
            Die Umsetzungshilfen geben dir:
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
          <p
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#1A1A1A",
              marginTop: "20px",
            }}
          >
            Das sind die Werkzeuge, die aus dem Plan echte Ergebnisse machen.
          </p>
        </section>

        {/* SECTION 5: PREIS + CTA */}
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
            Nur jetzt: 3,99€ (statt später <span style={{ textDecoration: "line-through" }}>9,99€</span>)
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
            Aber weil du gerade den Plan gekauft hast, bekommst du sie heute für <strong>3,99€</strong>.
            <br />
            Das Angebot gilt nur <strong>JETZT</strong> auf dieser Seite.
            <br />
            Wenn du wegklickst, zahlst du später den vollen Preis.
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

          <p style={{ fontSize: "14px", color: "#888888", marginBottom: "40px" }}>
            Sichere Bestellung · Sofortiger Zugang · Einmalig 3,99€
          </p>
        </section>

        {/* SECTION 6: SKIP-LINK */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <a
            href={SKIP_URL}
            onClick={(e) => {
              e.preventDefault();
              const confirmed = window.confirm(
                "Bist du sicher, dass du dieses Angebot nicht nutzen möchtest? Du verpasst die Umsetzungshilfen für nur 3,99€."
              );
              if (confirmed) {
                window.close();
                // Fallback, wenn das Browser-Fenster nicht geschlossen werden darf
                window.location.href = SKIP_URL;
              }
            }}
            style={{
              fontSize: "14px",
              color: "#999999",
              textDecoration: "underline",
              display: "block",
              transition: "color 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#666666")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#999999")}
          >
            Nein danke, ich probiere es ohne Tracking
          </a>
        </section>

        {/* SECTION 7: FAQ */}
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
              Kann ich das später kaufen?
            </p>
            <p style={{ fontSize: "16px", color: "#4A4A4A", lineHeight: 1.6 }}>
              Ja, aber dann zum regulären Preis <strong>(9,99€)</strong>. Dieses Angebot gilt nur{" "}
              <strong>JETZT</strong>.
            </p>
          </div>
        </section>
      </div>

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

export default DankeAktionsplan;
