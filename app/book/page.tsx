import type { Metadata } from "next";
import BookingFlow from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Book a consultation — STA Associates",
};

export default function BookPage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 28px 58px", position: "relative" }}>
          <div data-reveal style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".14em", color: "#a5ce2b", marginBottom: 36 }}>
            BOOK A CONSULTATION
          </div>
          <h1
            data-reveal
            data-reveal-delay="0.08"
            style={{
              margin: "0 0 18px",
              fontWeight: 600,
              fontSize: "clamp(30px, 7vw, 52px)",
              lineHeight: 1.08,
              fontFamily: "var(--font-serif), Georgia, serif",
              letterSpacing: "-.02em",
            }}
          >
            Twenty minutes, no charge.
          </h1>
          <p
            data-reveal
            data-reveal-delay="0.16"
            style={{ margin: 0, maxWidth: 600, font: "400 18px/1.7 var(--font-sans), sans-serif", color: "#ded5c9" }}
          >
            Pick a service, choose a time that works, and tell us briefly what you need. We confirm by email the same day.
          </p>
        </div>
      </section>

      <BookingFlow />
    </main>
  );
}
