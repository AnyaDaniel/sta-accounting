"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function StatCounter({
  value,
  suffix = "",
  decimals = 0,
  label,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const num = numRef.current;
    if (!wrap || !num) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      num.textContent = value.toFixed(decimals);
      return;
    }

    const obj = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: value,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            num.textContent = obj.val.toFixed(decimals);
          },
        });
      },
    });

    return () => st.kill();
  }, [value, decimals]);

  return (
    <div ref={wrapRef} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontWeight: 600,
          fontSize: "clamp(32px, 5vw, 44px)",
          color: "#a5ce2b",
          letterSpacing: "-.02em",
          lineHeight: 1,
        }}
      >
        <span ref={numRef}>0</span>
        {suffix}
      </div>
      <div style={{ font: "500 13px/1.5 var(--font-sans), sans-serif", color: "#c9bfb4" }}>{label}</div>
    </div>
  );
}
