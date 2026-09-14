import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Magnetic from "@/components/Magnetic";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — STA Associates",
};

export default function ServicesIndexPage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div
          className="glow-blob"
          style={{ width: 420, height: 420, top: -140, right: -100, background: "rgba(165,206,43,.2)" }}
        />
        <div
          className="hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 28px",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)",
            gap: 52,
            alignItems: "center",
            position: "relative",
          }}
        >
          <div style={{ padding: "88px 0 92px" }}>
            <div
              data-reveal
              style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".2em", color: "#a5ce2b", marginBottom: 22 }}
            >
              SERVICES
            </div>
            <h1
              data-reveal
              data-reveal-delay="0.08"
              style={{
                margin: "0 0 26px",
                fontWeight: 600,
                fontSize: "clamp(34px, 7.5vw, 62px)",
                lineHeight: 1.04,
                fontFamily: "var(--font-serif), Georgia, serif",
                letterSpacing: "-.02em",
                textWrap: "pretty",
              }}
            >
              Financial clarity for the people who carry the numbers.
            </h1>
            <p
              data-reveal
              data-reveal-delay="0.16"
              style={{ margin: "0 0 34px", maxWidth: 560, font: "400 18px/1.65 var(--font-sans), sans-serif", color: "#ded5c9", textWrap: "pretty" }}
            >
              STA Associates is a Simcoe County firm serving individuals, entrepreneurs, corporations and not-for-profits. Four practice areas, one team — built to keep you compliant and help you decide with confidence.
            </p>
            <div data-reveal data-reveal-delay="0.24" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Magnetic>
                <Link
                  href="/book"
                  className="btn-animated"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    background: "#a5ce2b",
                    color: "#2a1214",
                    padding: "15px 26px",
                    borderRadius: 2,
                    font: "700 14.5px/1.3 var(--font-sans), sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Book a consultation
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="tel:+17055550182"
                  className="btn-animated"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    border: "1px solid rgba(242,237,228,.4)",
                    color: "#f2ede4",
                    padding: "15px 26px",
                    borderRadius: 2,
                    font: "600 14.5px/1.3 var(--font-sans), sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Call (705) 555-0182
                </a>
              </Magnetic>
            </div>
          </div>
          <div
            data-reveal
            data-reveal-delay="0.1"
            style={{ alignSelf: "stretch", margin: "44px 0", position: "relative", minHeight: 430, borderRadius: 3, overflow: "hidden" }}
          >
            <img
              data-parallax="8"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=75&auto=format"
              alt="Advisory team in a working session"
              style={{ position: "absolute", inset: "-12% 0", width: "100%", height: "124%", objectFit: "cover", objectPosition: "60% 50%", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "14px 20px",
                background: "#2a1214",
                font: "500 11px/1.5 var(--font-mono), monospace",
                letterSpacing: ".12em",
                color: "#f2ede4",
              }}
            >
              SIMCOE COUNTY, ONTARIO
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "76px 28px 20px" }}>
        <div className="intro-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,260px) minmax(0,1fr)", gap: 44, alignItems: "start" }}>
          <h2 data-reveal style={{ margin: 0, font: "600 30px/1.2 var(--font-serif), Georgia, serif", letterSpacing: "-.01em" }}>
            What we do
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.08"
            style={{ margin: 0, font: "400 17.5px/1.7 var(--font-sans), sans-serif", color: "#4a3d3a", maxWidth: 720, textWrap: "pretty" }}
          >
            With a strong understanding of Canada&apos;s diverse and multicultural business environment, our goal is professional service, financial clarity and trusted advice — so clients stay compliant, make informed decisions and grow sustainably.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "38px 28px 90px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 26 }}>
          {SERVICES.map((svc, i) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="hover-lift-card"
              data-reveal
              data-reveal-delay={(i * 0.08).toFixed(2)}
              style={{
                cursor: "pointer",
                background: "#fff",
                border: "1px solid rgba(42,18,20,.1)",
                borderRadius: 3,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 180, position: "relative", overflow: "hidden", borderBottom: "1px solid rgba(42,18,20,.08)" }}>
                <div
                  role="img"
                  aria-label={svc.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${svc.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#e6e2d8",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: 14,
                    bottom: 14,
                    width: 38,
                    height: 38,
                    borderRadius: 2,
                    background: "#a5ce2b",
                    color: "#2a1214",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={svc.icon} size={19} strokeWidth={1.75} />
                </span>
              </div>
              <div style={{ padding: "24px 22px 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <div style={{ font: "500 10.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#6d8a14" }}>{svc.num}</div>
                <h3 style={{ margin: 0, font: "600 23px/1.25 var(--font-serif), Georgia, serif", letterSpacing: "-.01em" }}>{svc.title}</h3>
                <p style={{ margin: 0, font: "400 15px/1.6 var(--font-sans), sans-serif", color: "#4a3d3a", flex: 1, textWrap: "pretty" }}>
                  {svc.blurb}
                </p>
                <span style={{ font: "700 13px/1.3 var(--font-sans), sans-serif", color: "#3b1517", borderTop: "1px solid rgba(42,18,20,.12)", paddingTop: 16 }}>
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
