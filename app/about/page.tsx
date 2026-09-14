import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — STA Associates",
};

export default function AboutPage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div
          className="glow-blob"
          style={{ width: 380, height: 380, top: -120, right: -80, background: "rgba(165,206,43,.2)" }}
        />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 28px 72px", position: "relative" }}>
          <div data-reveal style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".14em", color: "#a5ce2b", marginBottom: 40 }}>
            ABOUT THE FIRM
          </div>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            style={{
              margin: "0 0 24px",
              maxWidth: 900,
              fontWeight: 600,
              fontSize: "clamp(32px, 7vw, 54px)",
              lineHeight: 1.08,
              fontFamily: "var(--font-serif), Georgia, serif",
              letterSpacing: "-.02em",
              textWrap: "pretty",
            }}
          >
            A Simcoe County firm built on clarity, compliance and plain answers.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            style={{ margin: 0, maxWidth: 660, font: "400 18px/1.7 var(--font-sans), sans-serif", color: "#ded5c9", textWrap: "pretty" }}
          >
            STA Associates is an accounting, tax and business advisory firm, proudly owned and led by a Nigerian-Canadian accounting professional.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "70px 28px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 52, alignItems: "start" }}>
          <div data-reveal style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <p style={{ margin: 0, font: "400 17.5px/1.75 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}>
              We provide reliable financial solutions to individuals, entrepreneurs, corporations and not-for-profit organisations — including bookkeeping, financial reporting, personal and corporate tax preparation, GST/HST compliance, payroll, CRA representation, tax planning and business advisory services.
            </p>
            <p style={{ margin: 0, font: "400 17.5px/1.75 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}>
              With a strong understanding of Canada&apos;s diverse and multicultural business environment, our goal is to provide professional service, financial clarity and trusted advice that helps our clients remain compliant, make informed financial decisions and achieve sustainable growth.
            </p>
          </div>
          <div data-reveal data-reveal-delay="0.1" style={{ borderRadius: 3, overflow: "hidden", background: "#a5ce2b" }}>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&h=840&q=75&auto=format&fit=crop&crop=faces"
              alt="Founding principal, STA Associates"
              style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: "16px 18px", font: "600 14px/1.4 var(--font-sans), sans-serif", color: "#2a1214" }}>
              Founder &amp; Principal, CPA
              <div style={{ font: "500 10.5px/1.6 var(--font-mono), monospace", letterSpacing: ".14em", color: "#3b1517", marginTop: 4 }}>
                STA ASSOCIATES
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 28px 40px" }}>
        <div
          data-reveal
          style={{
            position: "relative",
            minHeight: 280,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <img
            data-parallax="8"
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=75&auto=format&fit=crop"
            alt="STA Associates office space in Barrie, Ontario"
            style={{
              position: "absolute",
              inset: "-12% 0",
              width: "100%",
              height: "124%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(0deg, rgba(42,18,20,.65), transparent 55%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 24,
              bottom: 20,
              font: "500 11px/1.5 var(--font-mono), monospace",
              letterSpacing: ".12em",
              color: "#f2ede4",
            }}
          >
            OUR OFFICE — BARRIE, ONTARIO
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 28px 84px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: 1,
            background: "rgba(42,18,20,.14)",
            border: "1px solid rgba(42,18,20,.14)",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              data-reveal
              data-reveal-delay={(i * 0.08).toFixed(2)}
              style={{ background: "#faf8f2", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 10 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, font: "500 10.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#6d8a14" }}>
                <span style={{ display: "flex" }}>
                  <Icon name={v.icon} size={20} strokeWidth={1.75} />
                </span>
                {v.num}
              </div>
              <div style={{ font: "600 20px/1.25 var(--font-serif), Georgia, serif" }}>{v.title}</div>
              <div style={{ font: "400 14.5px/1.6 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}>{v.body}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
