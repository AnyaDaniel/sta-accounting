import type { Metadata } from "next";
import BookingFlow from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Book a consultation — STA Associates",
};

export default function BookPage() {
  return (
    <main>
      <section style={{ background: "#3b1517", color: "#f2ede4" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "34px 28px 58px" }}>
          <div style={{ font: "500 11.5px/1 var(--font-mono), monospace", letterSpacing: ".14em", color: "#a5ce2b", marginBottom: 36 }}>
            BOOK A CONSULTATION
          </div>
          <h1 style={{ margin: "0 0 18px", font: "600 52px/1.08 var(--font-serif), Georgia, serif", letterSpacing: "-.02em" }}>
            Twenty minutes, no charge.
          </h1>
          <p style={{ margin: 0, maxWidth: 600, font: "400 18px/1.7 var(--font-sans), sans-serif", color: "#ded5c9" }}>
            Pick a service, choose a time that works, and tell us briefly what you need. We confirm by email the same day.
          </p>
        </div>
      </section>

      <BookingFlow />
    </main>
  );
}
