import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { SERVICES, getService } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return { title: `${svc.title} — STA Associates` };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const sections = svc.sections.map((s, i) => ({
    ...s,
    id: `${svc.slug}-${i}`,
    num: `${svc.num}.${i + 1}`,
  }));
  const others = SERVICES.filter((s) => s.slug !== svc.slug);

  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 28px 66px" }}>
          <div style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".14em", color: "#c9bfb4", marginBottom: 40 }}>
            <Link href="/services" style={{ cursor: "pointer", color: "#a5ce2b" }}>SERVICES</Link> / {svc.caps}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,.8fr)", gap: 56, alignItems: "end" }}>
            <div>
              <h1
                style={{
                  margin: "0 0 22px",
                  font: "600 56px/1.06 var(--font-serif), Georgia, serif",
                  letterSpacing: "-.02em",
                  textWrap: "pretty",
                }}
              >
                {svc.title}
              </h1>
              <p style={{ margin: 0, maxWidth: 620, font: "400 18px/1.7 var(--font-sans), sans-serif", color: "#ded5c9", textWrap: "pretty" }}>
                {svc.intro}
              </p>
            </div>
            <div style={{ minHeight: 260, borderRadius: 3, overflow: "hidden", position: "relative" }}>
              <div
                role="img"
                aria-label={svc.title}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: 260,
                  backgroundImage: `url(${svc.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#4a2426",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 28px 90px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,240px) minmax(0,1fr)", gap: 56, alignItems: "start" }}>
          <aside style={{ position: "sticky", top: 112, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ font: "500 10.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#7b6a66", marginBottom: 6 }}>
              ON THIS PAGE
            </div>
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="hover-nav-link"
                style={{
                  font: "600 14.5px/1.4 var(--font-sans), sans-serif",
                  color: "#3b1517",
                  padding: "10px 0 10px 14px",
                  borderLeft: "2px solid rgba(42,18,20,.14)",
                }}
              >
                {sec.heading}
              </a>
            ))}
            <div style={{ marginTop: 22, background: "#a5ce2b", borderRadius: 3, padding: "22px 20px" }}>
              <div style={{ font: "600 17px/1.3 var(--font-serif), Georgia, serif", color: "#2a1214", marginBottom: 8 }}>
                Not sure where you fit?
              </div>
              <p style={{ margin: "0 0 16px", font: "400 13.5px/1.55 var(--font-sans), sans-serif", color: "#33231b" }}>
                A 20-minute call is usually enough to scope the work.
              </p>
              <Link
                href="/book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "#2a1214",
                  color: "#faf8f2",
                  padding: "12px 16px",
                  borderRadius: 2,
                  font: "700 12.5px/1.3 var(--font-sans), sans-serif",
                  cursor: "pointer",
                }}
              >
                Book a consultation
              </Link>
            </div>
          </aside>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
            {sections.map((sec) => (
              <section
                key={sec.id}
                id={sec.id}
                style={{
                  padding: "0 0 44px",
                  marginBottom: 44,
                  borderBottom: "1px solid rgba(42,18,20,.14)",
                  scrollMarginTop: 120,
                }}
              >
                <div style={{ font: "500 10.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#6d8a14", marginBottom: 14 }}>
                  {sec.num}
                </div>
                <h2
                  style={{
                    margin: "0 0 18px",
                    font: "600 31px/1.2 var(--font-serif), Georgia, serif",
                    letterSpacing: "-.015em",
                    textWrap: "pretty",
                  }}
                >
                  {sec.heading}
                </h2>
                <p style={{ margin: "0 0 24px", font: "400 17px/1.75 var(--font-sans), sans-serif", color: "#4a3d3a", textWrap: "pretty" }}>
                  {sec.body}
                </p>
                <div style={{ font: "700 13px/1 var(--font-sans), sans-serif", letterSpacing: ".02em", color: "#2a1214", marginBottom: 16 }}>
                  {sec.listLabel}
                </div>
                <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2px 28px", alignItems: "start" }}>
                  {sec.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "baseline",
                        padding: "9px 0",
                        font: "400 15.5px/1.55 var(--font-sans), sans-serif",
                        color: "#3f3330",
                        borderBottom: "1px solid rgba(42,18,20,.07)",
                      }}
                    >
                      <span style={{ flex: "none", display: "flex", color: "#6d8a14", transform: "translateY(2px)" }}>
                        <Icon name="check" size={16} strokeWidth={1.75} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
                alignItems: "center",
                justifyContent: "space-between",
                background: "#2a1214",
                color: "#f2ede4",
                borderRadius: 3,
                padding: "30px 32px",
              }}
            >
              <div>
                <div style={{ font: "600 23px/1.25 var(--font-serif), Georgia, serif", marginBottom: 6 }}>{svc.ctaLine}</div>
                <div style={{ font: "400 14.5px/1.5 var(--font-sans), sans-serif", color: "#c9bfb4" }}>
                  Barrie · Simcoe County · remote across Ontario
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/book"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    background: "#a5ce2b",
                    color: "#2a1214",
                    padding: "13px 22px",
                    borderRadius: 2,
                    font: "700 13.5px/1.3 var(--font-sans), sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Book a consultation
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    border: "1px solid rgba(242,237,228,.4)",
                    color: "#f2ede4",
                    padding: "13px 22px",
                    borderRadius: 2,
                    font: "600 13.5px/1.3 var(--font-sans), sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Send a message
                </Link>
              </div>
            </div>

            <div style={{ marginTop: 56 }}>
              <div style={{ font: "500 10.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#7b6a66", marginBottom: 18 }}>
                OTHER SERVICES
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14 }}>
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="hover-lime-border"
                    style={{
                      cursor: "pointer",
                      background: "#fff",
                      border: "1px solid rgba(42,18,20,.1)",
                      borderRadius: 3,
                      padding: "20px 18px",
                      display: "block",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 9,
                        font: "500 10px/1 var(--font-mono), monospace",
                        letterSpacing: ".16em",
                        color: "#6d8a14",
                        marginBottom: 10,
                      }}
                    >
                      <span style={{ display: "flex" }}>
                        <Icon name={o.icon} size={18} strokeWidth={1.75} />
                      </span>
                      {o.num}
                    </div>
                    <div style={{ font: "600 18px/1.25 var(--font-serif), Georgia, serif" }}>{o.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
