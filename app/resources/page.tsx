import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { DEADLINES, GUIDES, USEFUL_LINKS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources — STA Associates",
};

export default function ResourcesPage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 28px 62px", position: "relative" }}>
          <div data-reveal style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".14em", color: "#a5ce2b", marginBottom: 40 }}>
            RESOURCES
          </div>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            style={{
              margin: "0 0 20px",
              fontWeight: 600,
              fontSize: "clamp(32px, 7vw, 54px)",
              lineHeight: 1.08,
              fontFamily: "var(--font-serif), Georgia, serif",
              letterSpacing: "-.02em",
            }}
          >
            Dates, forms and plain-language guides.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            style={{ margin: 0, maxWidth: 620, font: "400 18px/1.7 var(--font-sans), sans-serif", color: "#ded5c9" }}
          >
            The things clients ask us for most often, kept current for the 2026 filing year.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 28px 30px" }}>
        <div className="resources-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,320px)", gap: 48, alignItems: "start" }}>
          <div>
            <h2 data-reveal style={{ margin: "0 0 22px", font: "600 28px/1.25 var(--font-serif), Georgia, serif" }}>Key filing deadlines</h2>
            <div data-reveal data-reveal-delay="0.08" style={{ border: "1px solid rgba(42,18,20,.14)", borderRadius: 3, overflow: "hidden", background: "#fff" }}>
              {DEADLINES.map((d, i) => (
                <div
                  key={d.label}
                  style={{
                    display: "flex",
                    gap: 18,
                    alignItems: "baseline",
                    padding: "16px 20px",
                    borderBottom: i === DEADLINES.length - 1 ? "none" : "1px solid rgba(42,18,20,.1)",
                  }}
                >
                  <span style={{ flex: "none", width: 104, font: "500 12px/1.4 var(--font-mono), monospace", letterSpacing: ".06em", color: "#6d8a14" }}>
                    {d.date}
                  </span>
                  <span style={{ font: "400 15.5px/1.5 var(--font-sans), sans-serif", color: "#3f3330" }}>{d.label}</span>
                </div>
              ))}
            </div>

            <h2 data-reveal style={{ margin: "44px 0 22px", font: "600 28px/1.25 var(--font-serif), Georgia, serif" }}>Guides &amp; checklists</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
              {GUIDES.map((g, i) => (
                <div
                  key={g.title}
                  className="hover-lime-border"
                  data-reveal
                  data-reveal-delay={(i * 0.08).toFixed(2)}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(42,18,20,.12)",
                    borderRadius: 3,
                    padding: "22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    cursor: "pointer",
                  }}
                >
                  <span style={{ display: "flex", color: "#6d8a14" }}>
                    <Icon name={g.icon} size={20} strokeWidth={1.75} />
                  </span>
                  <div style={{ font: "600 18px/1.3 var(--font-serif), Georgia, serif" }}>{g.title}</div>
                  <div style={{ font: "400 14px/1.55 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}>{g.body}</div>
                  <span style={{ font: "500 11px/1.4 var(--font-mono), monospace", letterSpacing: ".1em", color: "#6d8a14", marginTop: 4 }}>
                    {g.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="resources-aside" data-reveal style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 112 }}>
            <div style={{ background: "#2a1214", color: "#f2ede4", borderRadius: 3, padding: "26px 24px" }}>
              <div style={{ font: "600 21px/1.25 var(--font-serif), Georgia, serif", marginBottom: 8 }}>Client portal</div>
              <p style={{ margin: "0 0 18px", font: "400 14.5px/1.6 var(--font-sans), sans-serif", color: "#c9bfb4" }}>
                Upload documents, sign engagement letters and retrieve past returns securely.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#a5ce2b",
                  color: "#2a1214",
                  padding: "12px 18px",
                  borderRadius: 2,
                  font: "700 13px/1.3 var(--font-sans), sans-serif",
                  cursor: "pointer",
                }}
              >
                Open the portal
              </span>
            </div>
            <div style={{ border: "1px solid rgba(42,18,20,.14)", borderRadius: 3, padding: 24, background: "#fff" }}>
              <div style={{ font: "600 18px/1.3 var(--font-serif), Georgia, serif", marginBottom: 10 }}>Useful links</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11, font: "400 14.5px/1.5 var(--font-sans), sans-serif", color: "#3b1517" }}>
                {USEFUL_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", gap: 9, alignItems: "center", cursor: "pointer", color: "#3b1517" }}
                  >
                    <span style={{ display: "flex", color: "#6d8a14" }}>
                      <Icon name="external-link" size={15} strokeWidth={1.75} />
                    </span>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
