import Link from "next/link";
import { SERVICES, FIRM } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ marginTop: "auto", background: "#2a1214", color: "#c9bfb4" }}>
      <div
        data-reveal
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 28px 28px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 40,
        }}
      >
        <div>
          <div
            style={{
              background: "#a5ce2b",
              borderRadius: 3,
              padding: "14px 16px",
              maxWidth: 250,
              marginBottom: 16,
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="STA Associates Accounting and Tax"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ font: "400 14px/1.6 var(--font-sans), sans-serif", color: "#c9bfb4", maxWidth: 280 }}>
            Accounting, tax and business advisory for Simcoe County and across Ontario.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 9, font: "400 14px/1.5 var(--font-sans), sans-serif" }}>
          <div style={{ font: "700 12px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#faf8f2", marginBottom: 5 }}>
            SERVICES
          </div>
          {SERVICES.map((svc) => (
            <Link key={svc.slug} href={`/services/${svc.slug}`} className="footer-link" style={{ cursor: "pointer", color: "#c9bfb4" }}>
              {svc.title}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 9, font: "400 14px/1.5 var(--font-sans), sans-serif" }}>
          <div style={{ font: "700 12px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#faf8f2", marginBottom: 5 }}>
            COMPANY
          </div>
          <Link href="/" className="footer-link" style={{ cursor: "pointer", color: "#c9bfb4" }}>Home</Link>
          <Link href="/about" className="footer-link" style={{ cursor: "pointer", color: "#c9bfb4" }}>About</Link>
          <Link href="/resources" className="footer-link" style={{ cursor: "pointer", color: "#c9bfb4" }}>Resources</Link>
          <Link href="/book" className="footer-link" style={{ cursor: "pointer", color: "#c9bfb4" }}>Book a consultation</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 9, font: "400 14px/1.5 var(--font-sans), sans-serif" }}>
          <div style={{ font: "700 12px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#faf8f2", marginBottom: 5 }}>
            CONTACT
          </div>
          <span>{FIRM.phone}</span>
          <span>{FIRM.email}</span>
          <span>{FIRM.address}</span>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "22px 28px 34px",
          borderTop: "1px solid rgba(250,248,242,.12)",
          font: "500 11px/1 var(--font-mono), monospace",
          letterSpacing: ".08em",
        }}
      >
        © 2026 STA ASSOCIATES — ACCOUNTING AND TAX
      </div>
    </footer>
  );
}
