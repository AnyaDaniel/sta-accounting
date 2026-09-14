import Link from "next/link";
import Icon from "@/components/Icon";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import StatCounter from "@/components/StatCounter";
import { SERVICES, VALUES } from "@/lib/data";

const APPROACH_POINTS = [
  "Direct access to your CPA — not a rotating queue of juniors",
  "Cloud-based books you can see in real time, not just at year-end",
  "Plain-language advice, explained before it's filed",
];

export default function HomePage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div
          className="glow-blob"
          style={{ width: 460, height: 460, top: -160, right: -120, background: "rgba(165,206,43,.22)" }}
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
          <div style={{ padding: "84px 0 88px" }}>
            <div
              data-reveal
              style={{
                font: "500 11.5px/1 var(--font-mono), monospace",
                letterSpacing: ".2em",
                color: "#a5ce2b",
                marginBottom: 22,
              }}
            >
              ACCOUNTING · TAX · ADVISORY
            </div>
            <h1
              data-reveal
              data-reveal-delay="0.08"
              style={{
                margin: "0 0 24px",
                fontWeight: 600,
                fontSize: "clamp(34px, 7vw, 60px)",
                lineHeight: 1.05,
                fontFamily: "var(--font-serif), Georgia, serif",
                letterSpacing: "-.02em",
                textWrap: "pretty",
              }}
            >
              Compliant today. <span style={{ color: "#a5ce2b" }}>Confident about next year.</span>
            </h1>
            <p
              data-reveal
              data-reveal-delay="0.16"
              style={{
                margin: "0 0 32px",
                maxWidth: 560,
                font: "400 18px/1.65 var(--font-sans), sans-serif",
                color: "#ded5c9",
                textWrap: "pretty",
              }}
            >
              STA Associates is a Simcoe County accounting, tax and business advisory firm, proudly owned and led by a Nigerian-Canadian accounting professional — serving individuals, entrepreneurs, corporations and not-for-profits.
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
                <Link
                  href="/services"
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
                  See our services
                </Link>
              </Magnetic>
            </div>
          </div>
          <div
            data-reveal
            data-reveal-delay="0.1"
            style={{
              alignSelf: "stretch",
              margin: "44px 0",
              position: "relative",
              minHeight: 430,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <img
              data-parallax="8"
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=900&q=75&auto=format"
              alt="An advisor at work"
              style={{
                position: "absolute",
                inset: "-12% 0",
                width: "100%",
                height: "124%",
                objectFit: "cover",
                objectPosition: "72% 30%",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <Marquee />

      <section style={{ background: "#faf8f2" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "48px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
            gap: 32,
            background: "#2a1214",
            borderRadius: 3,
          }}
        >
          <div data-reveal data-reveal-delay="0">
            <StatCounter value={4} label="Practice areas under one roof" />
          </div>
          <div data-reveal data-reveal-delay="0.08">
            <StatCounter value={20} label="Minutes to a free consultation" />
          </div>
          <div data-reveal data-reveal-delay="0.16">
            <StatCounter value={1} label="Business day average reply" />
          </div>
          <div data-reveal data-reveal-delay="0.24">
            <StatCounter value={100} suffix="%" label="Remote-friendly across Ontario" />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "70px 28px 20px" }}>
        <div
          className="intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,280px) minmax(0,1fr)",
            gap: 44,
            alignItems: "start",
          }}
        >
          <h2
            data-reveal
            style={{ margin: 0, font: "600 30px/1.2 var(--font-serif), Georgia, serif", letterSpacing: "-.01em" }}
          >
            Four practice areas, one team
          </h2>
          <p
            data-reveal
            data-reveal-delay="0.08"
            style={{ margin: 0, font: "400 17.5px/1.7 var(--font-sans), sans-serif", color: "#4a3d3a", maxWidth: 720, textWrap: "pretty" }}
          >
            Bookkeeping, financial reporting, personal and corporate tax, GST/HST compliance, payroll, CRA representation, tax planning and advisory — handled together, so nothing falls between files.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 28px 76px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 22 }}>
          {SERVICES.map((svc, i) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="hover-lime-border"
              data-reveal
              data-reveal-delay={(i * 0.08).toFixed(2)}
              style={{
                cursor: "pointer",
                background: "#fff",
                border: "1px solid rgba(42,18,20,.1)",
                borderRadius: 3,
                padding: "26px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  background: "rgba(165,206,43,.22)",
                  color: "#4e6a0f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name={svc.icon} size={20} strokeWidth={1.75} />
              </span>
              <h3 style={{ margin: 0, font: "600 21px/1.25 var(--font-serif), Georgia, serif" }}>{svc.title}</h3>
              <p style={{ margin: 0, font: "400 14.5px/1.6 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}>
                {svc.blurb}
              </p>
              <span style={{ font: "700 12.5px/1.3 var(--font-sans), sans-serif", color: "#3b1517", marginTop: "auto", paddingTop: 12 }}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 28px 90px" }}>
        <div
          className="intro-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,.95fr) minmax(0,1.05fr)",
            gap: 52,
            alignItems: "center",
          }}
        >
          <div
            data-reveal
            style={{
              position: "relative",
              minHeight: 360,
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <img
              data-parallax="8"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=75&auto=format&fit=crop"
              alt="STA Associates advisors reviewing a client file together"
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
          </div>
          <div>
            <div
              data-reveal
              style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#6d8a14", marginBottom: 16 }}
            >
              HOW WE WORK
            </div>
            <h2
              data-reveal
              data-reveal-delay="0.06"
              style={{ margin: "0 0 18px", font: "600 32px/1.2 var(--font-serif), Georgia, serif", letterSpacing: "-.01em", textWrap: "pretty" }}
            >
              Built to answer, not just to file.
            </h2>
            <p
              data-reveal
              data-reveal-delay="0.12"
              style={{ margin: "0 0 26px", font: "400 16.5px/1.7 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}
            >
              Most firms are fast at compliance and slow to explain it. We built STA Associates to do both — so you always know what was filed, why, and what it means for your next decision.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {APPROACH_POINTS.map((point, i) => (
                <div
                  key={point}
                  data-reveal
                  data-reveal-delay={(0.16 + i * 0.08).toFixed(2)}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <span style={{ flex: "none", display: "flex", color: "#6d8a14", marginTop: 3 }}>
                    <Icon name="check" size={17} strokeWidth={1.75} />
                  </span>
                  <span style={{ font: "400 15.5px/1.55 var(--font-sans), sans-serif", color: "#3f3330" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#2a1214", color: "#f2ede4" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
            gap: 34,
          }}
        >
          {VALUES.map((v, i) => (
            <div
              key={v.num}
              data-reveal
              data-reveal-delay={(i * 0.08).toFixed(2)}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <span style={{ color: "#a5ce2b", display: "flex" }}>
                <Icon name={v.icon} size={24} strokeWidth={1.75} />
              </span>
              <div style={{ font: "600 20px/1.25 var(--font-serif), Georgia, serif", color: "#faf8f2" }}>{v.title}</div>
              <div style={{ font: "400 14.5px/1.6 var(--font-sans), sans-serif", color: "#c9bfb4", textWrap: "pretty" }}>{v.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "76px 28px" }}>
        <div
          className="cta-band"
          data-reveal
          style={{
            background: "#a5ce2b",
            borderRadius: 3,
            padding: "44px 40px",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ font: "600 32px/1.2 var(--font-serif), Georgia, serif", color: "#2a1214", marginBottom: 8 }}>
              Start with a 20-minute call.
            </div>
            <div style={{ font: "400 15.5px/1.6 var(--font-sans), sans-serif", color: "#33231b" }}>
              No charge, no obligation — enough to scope the work and quote it.
            </div>
          </div>
          <Magnetic>
            <Link
              href="/book"
              className="btn-animated"
              style={{
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                background: "#2a1214",
                color: "#faf8f2",
                padding: "15px 26px",
                borderRadius: 2,
                font: "700 14px/1.3 var(--font-sans), sans-serif",
                cursor: "pointer",
              }}
            >
              Book a consultation
            </Link>
          </Magnetic>
        </div>
      </section>
    </main>
  );
}
