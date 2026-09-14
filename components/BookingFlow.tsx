"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";
import { SERVICES, SLOTS, PREP_ITEMS } from "@/lib/data";

const inputStyle: React.CSSProperties = {
  border: "1px solid rgba(42,18,20,.2)",
  borderRadius: 2,
  padding: "13px 12px",
  font: "400 15px/1.2 var(--font-sans), sans-serif",
  color: "#2a1214",
  background: "#fff",
  width: "100%",
};

export default function BookingFlow() {
  const router = useRouter();
  const [service, setService] = useState(SERVICES[2].title);
  const [slot, setSlot] = useState(SLOTS[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [entity, setEntity] = useState("Corporation");
  const [notes, setNotes] = useState("");

  function confirm(e: React.FormEvent) {
    e.preventDefault();
    router.push("/contact");
  }

  const [day, time] = slot.split(" · ");

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 28px 90px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,320px)", gap: 44, alignItems: "start" }}>
        <form
          onSubmit={confirm}
          style={{
            background: "#fff",
            border: "1px solid rgba(42,18,20,.12)",
            borderRadius: 3,
            padding: "34px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <StepLabel n={1} title="What do you need?" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {SERVICES.map((svc) => {
                const on = service === svc.title;
                return (
                  <button
                    type="button"
                    key={svc.slug}
                    onClick={() => setService(svc.title)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      whiteSpace: "nowrap",
                      padding: "10px 15px",
                      borderRadius: 2,
                      cursor: "pointer",
                      font: "600 13.5px/1.3 var(--font-sans), sans-serif",
                      color: "#2a1214",
                      border: "1px solid " + (on ? "#6d8a14" : "rgba(42,18,20,.22)"),
                      background: on ? "rgba(165,206,43,.22)" : "#fff",
                    }}
                  >
                    {svc.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <StepLabel n={2} title="Pick a time" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(148px,1fr))", gap: 12 }}>
              {SLOTS.map((s) => {
                const on = slot === s;
                const [d, t] = s.split(" · ");
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setSlot(s)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      padding: "13px 14px",
                      borderRadius: 2,
                      cursor: "pointer",
                      border: "1px solid " + (on ? "#6d8a14" : "rgba(42,18,20,.2)"),
                      background: on ? "rgba(165,206,43,.22)" : "#fff",
                      color: "#2a1214",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ font: "500 10.5px/1.4 var(--font-mono), monospace", letterSpacing: ".1em", opacity: 0.75 }}>{d}</span>
                    <span style={{ font: "600 16px/1.3 var(--font-sans), sans-serif" }}>{t}</span>
                  </button>
                );
              })}
            </div>
            <span style={{ font: "400 13px/1.5 var(--font-sans), sans-serif", color: "#5f5350" }}>
              All times Eastern. Prefer a call outside these hours? Ring (705) 555-0182.
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <StepLabel n={3} title="Your details" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={fieldLabel}>NAME</span>
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Okafor" style={inputStyle} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={fieldLabel}>EMAIL</span>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.ca" style={inputStyle} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={fieldLabel}>PHONE</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(705) 000-0000" style={inputStyle} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span style={fieldLabel}>ENTITY TYPE</span>
                <select value={entity} onChange={(e) => setEntity(e.target.value)} style={inputStyle}>
                  <option>Sole proprietorship</option>
                  <option>Corporation</option>
                  <option>Partnership</option>
                  <option>Non-profit / charity</option>
                  <option>Not sure</option>
                </select>
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={fieldLabel}>ANYTHING WE SHOULD KNOW?</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="June year-end, two employees, books currently in spreadsheets…"
                rows={4}
                style={{ ...inputStyle, minHeight: 96, lineHeight: 1.55, resize: "vertical" }}
              />
            </label>
          </div>

          <button
            type="submit"
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              background: "#3b1517",
              color: "#faf8f2",
              padding: "15px 26px",
              borderRadius: 2,
              font: "700 14px/1.3 var(--font-sans), sans-serif",
              cursor: "pointer",
              border: "none",
            }}
          >
            Confirm booking
          </button>
        </form>

        <aside style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 112 }}>
          <div style={{ background: "#a5ce2b", borderRadius: 3, padding: "26px 24px" }}>
            <div style={{ font: "500 10.5px/1 var(--font-mono), monospace", letterSpacing: ".18em", color: "#33231b", marginBottom: 14 }}>
              YOUR BOOKING
            </div>
            <div style={{ font: "600 24px/1.25 var(--font-serif), Georgia, serif", color: "#2a1214", marginBottom: 10 }}>{service}</div>
            <div style={{ font: "600 15.5px/1.5 var(--font-sans), sans-serif", color: "#33231b" }}>
              {day} · {time}
            </div>
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(42,18,20,.25)", font: "400 14px/1.6 var(--font-sans), sans-serif", color: "#33231b" }}>
              20 minutes · video call or phone · no charge
            </div>
          </div>
          <div style={{ border: "1px solid rgba(42,18,20,.14)", borderRadius: 3, padding: 24, background: "#fff", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ font: "600 18px/1.3 var(--font-serif), Georgia, serif" }}>What to have ready</div>
            {PREP_ITEMS.map((p) => (
              <span key={p} style={{ display: "flex", gap: 10, alignItems: "baseline", font: "400 14.5px/1.55 var(--font-sans), sans-serif", color: "#3f3330" }}>
                <span style={{ flex: "none", display: "flex", color: "#6d8a14", transform: "translateY(2px)" }}>
                  <Icon name="check" size={15} strokeWidth={1.75} />
                </span>
                {p}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function StepLabel({ n, title }: { n: number; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "#a5ce2b",
          color: "#2a1214",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          font: "700 12px/1 var(--font-sans), sans-serif",
        }}
      >
        {n}
      </span>
      <span style={{ font: "600 18px/1.3 var(--font-serif), Georgia, serif" }}>{title}</span>
    </div>
  );
}

const fieldLabel: React.CSSProperties = {
  font: "700 11.5px/1.2 var(--font-sans), sans-serif",
  letterSpacing: ".1em",
  color: "#5f5350",
};
