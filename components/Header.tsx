"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        background: "#faf8f2",
        borderBottom: "1px solid rgba(42,18,20,.12)",
        position: "sticky",
        top: 0,
        zIndex: 30,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          gap: 28,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            cursor: "pointer",
            width: 158,
            height: 66,
            background: "#a5ce2b",
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            flex: "none",
            display: "block",
          }}
        >
          <img
            src="/images/logo.jpg"
            alt="STA Associates Accounting and Tax"
            style={{
              position: "absolute",
              height: 152,
              width: "auto",
              top: -44,
              left: -39,
              display: "block",
              maxWidth: "none",
            }}
          />
        </Link>
        <span style={{ flex: 1, minWidth: 8 }} />
        <nav
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            font: "600 13.5px/1 var(--font-sans), sans-serif",
          }}
        >
          {NAV.map((n) => {
            const on =
              n.key === "services"
                ? pathname === "/services" || pathname.startsWith("/services/")
                : pathname === n.href;
            return (
              <Link
                key={n.key}
                href={n.href}
                style={{
                  cursor: "pointer",
                  paddingBottom: 5,
                  color: on ? "#2a1214" : "#5f5350",
                  borderBottom: on
                    ? "2.5px solid #a5ce2b"
                    : "2.5px solid transparent",
                }}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              background: "#3b1517",
              color: "#faf8f2",
              padding: "12px 18px",
              borderRadius: 2,
              cursor: "pointer",
              letterSpacing: ".01em",
            }}
          >
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
