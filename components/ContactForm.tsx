"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { SERVICES, FIRM } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function toggleNeed(title: string) {
    setNeed((cur) => (cur.includes(title) ? cur.filter((t) => t !== title) : [...cur, title]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 28px 90px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 52, alignItems: "start" }}>
        {submitted ? (
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(42,18,20,.12)",
              borderRadius: 3,
              padding: "32px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ font: "600 24px/1.2 var(--font-serif), Georgia, serif" }}>Message sent.</div>
            <p style={{ margin: 0, font: "400 15.5px/1.6 var(--font-sans), sans-serif", color: "#4a3d3a" }}>
              Thanks, {name || "there"} — we&apos;ll come back to you within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              border: "1px solid rgba(42,18,20,.12)",
              borderRadius: 3,
              padding: "32px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ font: "600 24px/1.2 var(--font-serif), Georgia, serif" }}>Send a message</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 18 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={{ font: "700 11.5px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>NAME</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Okafor"
                  style={inputStyle}
                />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={{ font: "700 11.5px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>EMAIL</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.ca"
                  style={inputStyle}
                />
              </label>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={{ font: "700 11.5px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>
                WHAT DO YOU NEED HELP WITH?
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {SERVICES.map((svc) => {
                  const on = need.includes(svc.title);
                  return (
                    <button
                      type="button"
                      key={svc.slug}
                      onClick={() => toggleNeed(svc.title)}
                      className={on ? undefined : "hover-chip"}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                        border: "1px solid " + (on ? "#6d8a14" : "rgba(42,18,20,.22)"),
                        background: on ? "rgba(165,206,43,.22)" : "#fff",
                        borderRadius: 2,
                        padding: "10px 14px",
                        font: "600 13.5px/1.3 var(--font-sans), sans-serif",
                        color: "#3b1517",
                        cursor: "pointer",
                      }}
                    >
                      {svc.title}
                    </button>
                  );
                })}
              </div>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={{ font: "700 11.5px/1 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>DETAILS</span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Corporation with a June year-end, two employees, books currently in spreadsheets…"
                rows={4}
                style={{ ...inputStyle, minHeight: 110, lineHeight: 1.55, resize: "vertical" }}
              />
            </label>
            <button
              type="submit"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                background: "#3b1517",
                color: "#faf8f2",
                padding: "14px 24px",
                borderRadius: 2,
                font: "700 14px/1.3 var(--font-sans), sans-serif",
                cursor: "pointer",
                border: "none",
              }}
            >
              Send message
            </button>
          </form>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ background: "#a5ce2b", borderRadius: 3, padding: "28px 26px" }}>
            <div style={{ font: "600 22px/1.25 var(--font-serif), Georgia, serif", color: "#2a1214", marginBottom: 8 }}>Prefer to talk?</div>
            <p style={{ margin: "0 0 18px", font: "400 14.5px/1.6 var(--font-sans), sans-serif", color: "#33231b" }}>
              A 20-minute call is usually enough to scope the work and quote it.
            </p>
            <Link
              href="/book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#2a1214",
                color: "#faf8f2",
                padding: "13px 20px",
                borderRadius: 2,
                font: "700 13.5px/1.3 var(--font-sans), sans-serif",
                cursor: "pointer",
              }}
            >
              Book a consultation
            </Link>
          </div>

          <div style={{ border: "1px solid rgba(42,18,20,.12)", borderRadius: 3, padding: 26, display: "flex", flexDirection: "column", gap: 16, background: "#fff" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 7, font: "700 11.5px/1.2 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>
                <span style={{ display: "flex", color: "#6d8a14" }}>
                  <Icon name="phone" size={14} strokeWidth={1.75} />
                </span>
                PHONE
              </span>
              <a href={`tel:${FIRM.phone.replace(/[^\d+]/g, "")}`} style={{ font: "600 17px/1.3 var(--font-sans), sans-serif", color: "#2a1214" }}>
                {FIRM.phone}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 7, font: "700 11.5px/1.2 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>
                <span style={{ display: "flex", color: "#6d8a14" }}>
                  <Icon name="mail" size={14} strokeWidth={1.75} />
                </span>
                EMAIL
              </span>
              <a href={`mailto:${FIRM.email}`} style={{ font: "600 17px/1.3 var(--font-sans), sans-serif", color: "#2a1214" }}>
                {FIRM.email}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 7, font: "700 11.5px/1.2 var(--font-sans), sans-serif", letterSpacing: ".1em", color: "#5f5350" }}>
                <span style={{ display: "flex", color: "#6d8a14" }}>
                  <Icon name="map-pin" size={14} strokeWidth={1.75} />
                </span>
                OFFICE
              </span>
              <span style={{ font: "400 15.5px/1.55 var(--font-sans), sans-serif", color: "#4a3d3a" }}>
                {FIRM.address}
                <br />
                {FIRM.hours}
              </span>
            </div>
          </div>

          <div style={{ borderRadius: 3, overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=440&q=75&auto=format&fit=crop&crop=faces,entropy"
              alt="The Barrie office"
              style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  border: "1px solid rgba(42,18,20,.2)",
  borderRadius: 2,
  padding: "13px 12px",
  font: "400 15px/1.2 var(--font-sans), sans-serif",
  color: "#2a1214",
  background: "#fff",
  width: "100%",
};
