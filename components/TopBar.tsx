import { FIRM } from "@/lib/data";

export default function TopBar() {
  return (
    <div
      style={{
        background: "#2a1214",
        color: "#e8e0d6",
        font: "500 11.5px/1 var(--font-mono), monospace",
        letterSpacing: ".06em",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "11px 28px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          alignItems: "center",
        }}
      >
        <a
          href={`tel:${FIRM.phone.replace(/[^\d+]/g, "")}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.3,
            color: "inherit",
          }}
        >
          <span style={{ color: "#a5ce2b", marginRight: 7 }}>T</span>
          {FIRM.phone}
        </a>
        <a
          href={`mailto:${FIRM.email}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.3,
            color: "inherit",
          }}
        >
          <span style={{ color: "#a5ce2b", marginRight: 7 }}>E</span>
          {FIRM.email}
        </a>
        <span style={{ flex: 1, minWidth: 12 }} />
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.3,
            padding: "6px 11px",
            border: "1px solid rgba(232,224,214,.3)",
            borderRadius: 2,
          }}
        >
          CLIENT PORTAL
        </span>
      </div>
    </div>
  );
}
