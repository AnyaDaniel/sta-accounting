import Link from "next/link";
import Icon from "@/components/Icon";
import { SERVICES, VALUES } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 28px",
            display: "grid",
            gridTemplateColumns: "minmax(0,1.05fr) minmax(0,.95fr)",
            gap: 52,
            alignItems: "center",
          }}
        >
          <div style={{ padding: "84px 0 88px" }}>
            <div
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
              style={{
                margin: "0 0 24px",
                font: "600 60px/1.05 var(--font-serif), Georgia, serif",
                letterSpacing: "-.02em",
                textWrap: "pretty",
              }}
            >
              Compliant today. Confident about next year.
            </h1>
            <p
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
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link
                href="/book"
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
              <Link
                href="/services"
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
            </div>
          </div>
          <div
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
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=900&q=75&auto=format"
              alt="An advisor at work"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "72% 30%",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "70px 28px 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,280px) minmax(0,1fr)",
            gap: 44,
            alignItems: "start",
          }}
        >
          <h2 style={{ margin: 0, font: "600 30px/1.2 var(--font-serif), Georgia, serif", letterSpacing: "-.01em" }}>
            Four practice areas, one team
          </h2>
          <p style={{ margin: 0, font: "400 17.5px/1.7 var(--font-sans), sans-serif", color: "#4a3d3a", maxWidth: 720, textWrap: "pretty" }}>
            Bookkeeping, financial reporting, personal and corporate tax, GST/HST compliance, payroll, CRA representation, tax planning and advisory — handled together, so nothing falls between files.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 28px 76px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 22 }}>
          {SERVICES.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="hover-lime-border"
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
          {VALUES.map((v) => (
            <div key={v.num} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
          <Link
            href="/book"
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
        </div>
      </section>
    </main>
  );
}
