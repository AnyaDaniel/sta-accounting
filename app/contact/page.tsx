import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — STA Associates",
};

export default function ContactPage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 28px 62px", position: "relative" }}>
          <div data-reveal style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".14em", color: "#a5ce2b", marginBottom: 40 }}>
            CONTACT
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
            Let&apos;s talk about your books.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            style={{ margin: 0, maxWidth: 600, font: "400 18px/1.7 var(--font-sans), sans-serif", color: "#ded5c9" }}
          >
            Tell us a little about your situation and we&apos;ll come back within one business day.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
