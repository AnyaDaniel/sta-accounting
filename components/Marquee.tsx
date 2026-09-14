const ITEMS = [
  "CPA-LED",
  "SIMCOE COUNTY, ONTARIO",
  "CRA-COMPLIANT FILINGS",
  "REMOTE ACROSS ONTARIO",
  "20-MINUTE CONSULTATIONS",
  "ACCOUNTING · TAX · ADVISORY · BOOKKEEPING",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="marquee"
      style={{
        background: "#2a1214",
        borderTop: "1px solid rgba(165,206,43,.25)",
        borderBottom: "1px solid rgba(165,206,43,.25)",
        overflow: "hidden",
        padding: "13px 0",
      }}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
            {row.map((item, i) => (
              <span key={item + i} className="marquee-item">
                {item}
                <span className="marquee-dot">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
