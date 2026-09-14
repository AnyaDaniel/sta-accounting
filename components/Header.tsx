"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = (on: boolean): React.CSSProperties => ({
    cursor: "pointer",
    paddingBottom: 5,
    color: on ? "#2a1214" : "#5f5350",
    borderBottom: on ? "2.5px solid #a5ce2b" : "2.5px solid transparent",
    transition: "color .2s ease, border-color .2s ease",
  });

  const isOn = (key: string) =>
    key === "services"
      ? pathname === "/services" || pathname.startsWith("/services/")
      : pathname === NAV.find((n) => n.key === key)?.href;

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
          className="nav-desktop"
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
            font: "600 13.5px/1 var(--font-sans), sans-serif",
            flexWrap: "wrap",
          }}
        >
          {NAV.map((n) => (
            <Link key={n.key} href={n.href} style={navLinkStyle(isOn(n.key))}>
              {n.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="btn-animated"
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

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            border: "1px solid rgba(42,18,20,.2)",
            borderRadius: 2,
            background: "#fff",
            color: "#2a1214",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: "8px 28px 22px",
            font: "600 15px/1 var(--font-sans), sans-serif",
            borderTop: "1px solid rgba(42,18,20,.1)",
          }}
        >
          {NAV.map((n) => {
            const on = isOn(n.key);
            return (
              <Link
                key={n.key}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "14px 4px",
                  color: on ? "#2a1214" : "#5f5350",
                  borderBottom: "1px solid rgba(42,18,20,.08)",
                }}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              background: "#3b1517",
              color: "#faf8f2",
              padding: "14px 18px",
              borderRadius: 2,
              cursor: "pointer",
              letterSpacing: ".01em",
              marginTop: 14,
            }}
          >
            Book a consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
